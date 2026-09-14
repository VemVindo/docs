---
sidebar_position: 3
title: Ambiente de desenvolvimento
---

# Ambiente de desenvolvimento

Esta página descreve como o ambiente local sobe hoje: os containers, o banco de
dados, as migrations do Prisma, a autenticação e a conexão entre frontend e
backend.

## Repositórios e portas

| Repositório | Stack | Porta local |
|---|---|---|
| `frontend` | Next.js | 3000 |
| `backend` | NestJS | 8000 (publicada; o container escuta na 3000) |
| Postgres local | postgres:18-alpine | 5432 |

O backend publica a porta 8000 no host para não colidir com o frontend na 3000.
Dentro da rede do Compose o Nest continua escutando na 3000.

## Orquestração com Docker Compose

Cada repositório tem seu próprio `compose.yaml`, com serviços separados por
objetivo:

- `nestjs-dev` / `nextjs-dev`: ambiente de desenvolvimento com hot reload. Sobem
  no `docker compose up` padrão.
- `nestjs-prod` / `nextjs-prod`: imagens de produção. Ficam sob o profile `prod`
  (`docker compose --profile prod up`), fora do `up` padrão para evitar colisão
  de porta com os serviços de dev.
- `database`: Postgres local, presente apenas no `compose.yaml` do backend.

O banco nunca faz parte da imagem de nenhum app. Em dev ele é um serviço à parte
com volume nomeado (`pgdata`), de forma que os dados sobrevivem a `up`/`down` dos
containers de aplicação.

### Subir o ambiente

No `backend`:

```bash
docker compose up
```

Isso sobe o Postgres local e o backend em modo dev. O backend só inicia depois do
healthcheck do banco passar (`depends_on: service_healthy`).

No `frontend`:

```bash
docker compose up
```

### Hot reload

O backend usa Compose Watch com `sync+restart` e o frontend com `sync`. Para que
as alterações de código reflitam no container em execução, use:

```bash
docker compose watch
```

Com `docker compose up -d` sem o `watch`, o código fica selado na imagem e mudanças
locais só aparecem após rebuild (`docker compose up --build`).

## Banco de dados e Prisma

O ORM é o Prisma 7 com driver adapter (`@prisma/adapter-pg`). O schema fica em
`backend/prisma/schema.prisma` e as tabelas de domínio (`Empresa`, `Entregador`,
`Pedido`, `Avaliacao`, entre outras) são geradas por migration versionada.

Duas variáveis de conexão são usadas:

- `DATABASE_URL`: conexão de runtime da aplicação.
- `DIRECT_URL`: conexão direta usada pelas migrations do Prisma.

Em dev local as duas apontam para o serviço `database` do Compose. Em produção
apontam para o Postgres gerenciado (Supabase), com as credenciais vindas de um
`.env` não versionado.

### Rodar migrations

As migrations são um passo separado do boot do container, executado por dentro do
serviço de backend:

```bash
docker compose exec nestjs-dev npx prisma migrate dev
```

## Autenticação

O cadastro existe apenas para estabelecimentos (`Empresa`). O login é separado por
persona, e o papel do usuário viaja no JWT.

| Método | Rota | Corpo | Resposta |
|---|---|---|---|
| POST | `/auth/register` | dados do estabelecimento | estabelecimento criado |
| POST | `/auth/login/empresa` | `email`, `senha` | `accessToken` + usuário |
| POST | `/auth/login/entregador` | `cpf`, `senha` | `accessToken` + usuário |

Regras de negócio do cadastro:

- é obrigatório informar `cnpj` ou `cpf`; sem nenhum dos dois o cadastro é
  rejeitado;
- quando o documento é CNPJ, a `razaoSocial` passa a ser obrigatória;
- e-mail e documento já usados retornam conflito (409);
- a senha tem no mínimo 8 caracteres e é armazenada com hash bcrypt.

O login valida a senha com bcrypt e, em caso de sucesso, assina um JWT contendo o
`sub`, o `role` (`ESTABELECIMENTO` ou `ENTREGADOR`) e, para empresas, o
`establishmentId`.

### Healthcheck da aplicação

O backend expõe `GET /health/db`, que executa `SELECT 1` no banco e retorna
`{ "database": "up" }`. O frontend usa essa rota para exibir o status da conexão.

## Conexão frontend e backend

O browser roda no host, então o frontend fala com o backend pela porta publicada
(8000). A URL é injetada em build time pela variável `NEXT_PUBLIC_API_URL`
(`http://localhost:8000`), seguindo a convenção do Next para variáveis expostas ao
navegador.

No backend, o CORS é habilitado para a origem do frontend, controlada pela
variável `CORS_ORIGIN` (default `http://localhost:3000`). As requisições do
frontend (`checkHealth`, `loginEmpresa`) ficam concentradas em
`frontend/app/lib/api.ts`.

## Variáveis de ambiente

Nenhum segredo é versionado. Cada repositório consome suas variáveis em runtime.

Backend:

- `DATABASE_URL`, `DIRECT_URL`: conexões do Postgres (runtime e migrations).
- `JWT_SECRET`, `JWT_EXPIRES_IN`: assinatura e validade do token.
- `CORS_ORIGIN`: origem permitida para o frontend.
- `PORT`: porta de escuta (opcional).

Frontend:

- `NEXT_PUBLIC_API_URL`: URL pública do backend usada pelo navegador.
