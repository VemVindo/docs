---
sidebar_position: 3
title: Ambiente de desenvolvimento
---

# Ambiente de desenvolvimento

Como rodar o projeto localmente, do clone até os testes.

## Pré-requisitos

- Docker (29 ou superior) e Docker Compose (v5 ou superior).
- Git.
- Node 24, só para rodar testes, lint e Prettier fora dos containers.

## Repositórios e portas

| Repositório | Stack | Porta local |
|---|---|---|
| `frontend` | Next.js 16 | 3000 |
| `backend` | NestJS 11 | 8000 (publicada; o container escuta na 3000) |
| Postgres local | postgres:18-alpine | 5432 |

O backend publica a porta 8000 no host para não colidir com o frontend na 3000.

## Rodando do zero

### Backend

```bash
git clone git@github.com:VemVindo/backend.git
cd backend
docker compose up --build
```

O `CMD` do `Dockerfile.dev` executa, em ordem:

1. `prisma generate`;
2. `prisma migrate deploy`;
3. `prisma db execute --file prisma/seed/dev.sql`, com os dados de teste;
4. `npm run start:dev`.

Se um passo falhar, os seguintes não rodam. Quando o log mostrar
`Nest application successfully started`:

```bash
curl http://localhost:8000/health/db
# {"database":"up"}
```

O backend não precisa de `.env` em desenvolvimento: as variáveis do serviço
`nestjs-dev` estão no `compose.yaml`. A única opcional é
`GOOGLE_MAPS_SERVER_KEY`, lida do ambiente do host.

### Frontend

```bash
git clone git@github.com:VemVindo/frontend.git
cd frontend
docker compose up --build
```

O frontend fica em `http://localhost:3000` e aponta para o backend em
`http://localhost:8000`.

### Parar o ambiente

```bash
docker compose down      # para os containers e preserva o banco (volume pgdata)
docker compose down -v   # apaga também o banco local
```

## Dados de teste

O seed (`backend/prisma/seed/dev.sql`) é idempotente e só roda em
desenvolvimento. Todos os dados são fictícios: CPFs e CNPJ gerados pelo
algoritmo e e-mails no domínio reservado `example.com`.

| Persona | Login | Senha | Situação |
|---|---|---|---|
| Empresa (CNPJ) | `cantina@example.com` | `Vemvindo@123` | frota: Bruno; convite pendente para a Ana |
| Empresa (CPF) | `padaria@example.com` | `Vemvindo@123` | frota: Carla; convite pendente para o Bruno |
| Entregador | `12345678909` (Ana) | `Temp@2026` | primeiro acesso: troca de senha e convite da Cantina |
| Entregador | `98765432100` (Bruno) | `Vemvindo@123` | ativo na Cantina, convite pendente da Padaria |
| Entregador | `24681357928` (Carla) | `Vemvindo@123` | bicicleta, sem placa |

Pedidos, inseridos só com a tabela vazia:

- Cantina: dois `PENDENTE` sem entregador e um `FINALIZADO` pelo Bruno.
- Padaria: um `EM_ANDAMENTO` com a Carla, que por isso começa indisponível, e um
  `FINALIZADO` pela Carla.

Para voltar ao estado inicial (por exemplo, refazer o primeiro acesso da Ana),
use `docker compose down -v && docker compose up`.

## Orquestração com Docker Compose

Cada repositório tem seu `compose.yaml`:

- `nestjs-dev` e `nextjs-dev`: desenvolvimento com hot reload, no `up` padrão.
- `nestjs-prod` e `nextjs-prod`: imagens de produção, no profile `prod`
  (`docker compose --profile prod up`).
- `database`: Postgres local, só no compose do backend, com volume `pgdata`.

O banco nunca faz parte da imagem de um app.

### Hot reload

O backend usa Compose Watch com `sync+restart` e o frontend com `sync`:

```bash
docker compose watch
```

Com `docker compose up -d` sem `watch`, o código fica selado na imagem e só muda
com `docker compose up --build`.

## Banco de dados e Prisma

Prisma 7 com driver adapter (`@prisma/adapter-pg`). O schema fica em
`backend/prisma/schema.prisma` e as migrations em `backend/prisma/migrations`.
O client é gerado em `backend/src/generated`, fora do versionamento.

Ao mudar o schema, crie a migration por dentro do container:

```bash
docker compose exec nestjs-dev npx prisma migrate dev --name descricao_da_mudanca
```

O CI recusa um `schema.prisma` alterado sem migration (job de drift, ver
[Pipeline de CI/CD](../qualidade/pipeline-ci-cd.md)).

## Conexão frontend e backend

O navegador fala com o backend pela porta publicada. A URL entra no build pela
variável `NEXT_PUBLIC_API_URL`. Todas as chamadas ficam em
`frontend/app/lib/api.ts` e usam `credentials: 'include'`, porque a sessão é um
cookie `httpOnly` (ver [Integração e segurança](./integracao-e-seguranca.md)).
O CORS do backend libera só a origem de `CORS_ORIGIN`, com credenciais.

O rastreio em tempo real usa Socket.IO no namespace `/rastreio` do mesmo
endereço da API.

## Variáveis de ambiente

Nenhum segredo é versionado. O `backend/.env.example` lista as variáveis com
comentários. O backend valida o ambiente no boot (`src/config/env.validation.ts`)
e não sobe com valor inválido.

### Backend

| Variável | Obrigatória | Uso |
|---|---|---|
| `DATABASE_URL` | sim | conexão de runtime |
| `DIRECT_URL` | sim para o Prisma CLI | conexão direta usada em generate e migrations; a aplicação não usa |
| `DB_POOL_MAX` | não (5) | tamanho do pool de conexões |
| `JWT_SECRET` | sim | segredo HS256, mínimo de 32 caracteres |
| `JWT_EXPIRES_IN` | não (`1d`) | validade do token |
| `CORS_ORIGIN` | não (`http://localhost:3000`) | origem do frontend liberada no CORS |
| `URL_FRONTEND` | não (vale o `CORS_ORIGIN`) | base do link de rastreio; HTTPS obrigatório em produção |
| `PORT` | não (3000) | porta de escuta |
| `TRUST_PROXY` | não | quantos proxies ficam na frente da API (1 no Render), para o limite de tentativas ver o IP real |
| `COOKIE_SAMESITE` | não (`lax`) | `none` quando front e back ficam em domínios diferentes |
| `GOOGLE_MAPS_SERVER_KEY` | não | geocodificação e rotas; sem ela, a rota é estimada em linha reta |

### Frontend

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL pública do backend |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | chave do Maps JavaScript; sem ela, a tela mostra distância e tempo sem o mapa |
| `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` | Map ID exigido pelos marcadores avançados; sem ele, vale o `DEMO_MAP_ID` do Google |

### Produção

O `render.yaml` de cada repositório descreve o serviço no Render. No backend,
`DATABASE_URL` e `DIRECT_URL` vêm do Postgres gerenciado do próprio Render; os
segredos (`JWT_SECRET`, `CORS_ORIGIN`, `URL_FRONTEND`, `COOKIE_SAMESITE` e a
chave do Google) são preenchidos no painel (`sync: false`).

## Testes e verificações locais

### Backend

```bash
npm run lint:check        # ESLint sem corrigir
npm run format:check      # Prettier
npm run typecheck         # tsc --noEmit
npm test                  # unitários (Jest)
npm run test:e2e          # e2e com o app Nest em memória
TEST_DATABASE_URL=postgresql://vemvindo:tppe2026.1@localhost:5432/vemvindo \
  npm run test:integration  # integração com o Postgres real
```

O teste de integração cria um schema próprio com nome aleatório, aplica as
migrations nele e o apaga no fim, então pode rodar contra o banco do compose sem
mexer nos dados de desenvolvimento. Sem `TEST_DATABASE_URL`, a suíte é pulada.

### Frontend

```bash
npm run lint
npm run format:check
npm run typecheck
npm test                  # Vitest com Testing Library
```

Detalhes de cada nível de teste em [Testes](../qualidade/testes.md).
