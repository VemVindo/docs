---
sidebar_position: 3
title: Ambiente de desenvolvimento
---

# Ambiente de desenvolvimento

Esta página descreve como rodar o projeto localmente para desenvolvimento: os
pré-requisitos, o passo a passo para subir tudo do zero, e como funcionam os
containers, o banco de dados, o Prisma, a autenticação e a conexão entre
frontend e backend.

## Pré-requisitos

- Docker (29 ou superior) e Docker Compose (v5 ou superior).
- Git.

Não é preciso ter Node instalado no host: dependências, geração do Prisma Client
e migrations rodam dentro dos containers.

## Repositórios e portas

| Repositório | Stack | Porta local |
|---|---|---|
| `frontend` | Next.js | 3000 |
| `backend` | NestJS | 8000 (publicada; o container escuta na 3000) |
| Postgres local | postgres:18-alpine | 5432 |

O backend publica a porta 8000 no host para não colidir com o frontend na 3000.
Dentro da rede do Compose o Nest continua escutando na 3000.

## Rodando o projeto do zero

### Backend

```bash
git clone git@github.com:VemVindo/backend.git
cd backend
docker compose up --build
```

Esse único comando:

1. sobe o Postgres local (serviço `database`) e espera o healthcheck passar;
2. gera o Prisma Client;
3. aplica as migrations no banco;
4. inicia o NestJS em modo dev.

Os passos 2 a 4 ficam no entrypoint de desenvolvimento
(`docker-entrypoint.dev.sh`), então um clone limpo sobe sem passos manuais.

Quando o log mostrar `Nest application successfully started`, valide a conexão
com o banco:

```bash
curl http://localhost:8000/health/db
# {"database":"up"}
```

O backend não precisa de arquivo `.env` em desenvolvimento: as variáveis do
serviço `nestjs-dev` já estão no `compose.yaml`.

### Frontend

Em outro terminal:

```bash
git clone git@github.com:VemVindo/frontend.git
cd frontend
docker compose up --build
```

O frontend fica em `http://localhost:3000` e já aponta para o backend em
`http://localhost:8000` (variável `NEXT_PUBLIC_API_URL` no `compose.yaml`).

### Parar o ambiente

```bash
docker compose down      # para os containers, preserva o banco (volume pgdata)
docker compose down -v   # para os containers e apaga o banco local
```

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

## Hot reload

O backend usa Compose Watch com `sync+restart` e o frontend com `sync`. Para que
alterações de código reflitam no container em execução, use:

```bash
docker compose watch
```

Com `docker compose up -d` sem o `watch`, o código fica selado na imagem e
mudanças locais só aparecem após rebuild (`docker compose up --build`).

## Banco de dados e Prisma

O ORM é o Prisma 7 com driver adapter (`@prisma/adapter-pg`). O schema fica em
`backend/prisma/schema.prisma` e as tabelas de domínio (`Empresa`, `Entregador`,
`Pedido`, `Avaliacao`, entre outras) são criadas por migrations versionadas em
`backend/prisma/migrations`.

Duas variáveis de conexão são usadas:

- `DATABASE_URL`: conexão de runtime da aplicação.
- `DIRECT_URL`: conexão direta usada pela geração e pelas migrations do Prisma.

Em dev local as duas apontam para o serviço `database` do Compose. Em produção
apontam para o Postgres gerenciado (Supabase), com as credenciais vindas de um
`.env` não versionado (use o `.env.example` como base).

### Geração do client e migrations

Em desenvolvimento, a geração do Prisma Client e o `prisma migrate deploy` rodam
automaticamente no boot do container (entrypoint), então subir o ambiente já
deixa o banco no schema correto. O Prisma Client é gerado em
`backend/src/generated` (fora do versionamento).

### Alterando o schema

Ao mudar `schema.prisma`, crie uma nova migration por dentro do container:

```bash
docker compose exec nestjs-dev npx prisma migrate dev --name descricao_da_mudanca
```

A migration gerada passa a ser aplicada automaticamente nos próximos boots.

## Autenticação

O estabelecimento (`Empresa`) se cadastra sozinho; o entregador não se cadastra:
quem o cadastra é o estabelecimento, que recebe uma senha temporária para
repassar. O login é separado por persona e o papel do usuário viaja no JWT.

| Método | Rota | Perfil | Corpo | Resposta |
|---|---|---|---|---|
| POST | `/auth/register` | público | dados do estabelecimento | `accessToken` + usuário |
| POST | `/auth/login/empresa` | público | `email`, `senha` | `accessToken` + usuário |
| POST | `/auth/login/entregador` | público | `cpf`, `senha` | `accessToken` + usuário (com `senhaTemporaria`) |
| GET | `/auth/me` | autenticado | — | usuário do token |
| POST | `/auth/entregador/trocar-senha` | entregador | `senhaAtual`, `novaSenha` | confirmação |
| POST | `/entregadores` | estabelecimento | dados do entregador | entregador (com `senhaTemporaria` quando criado, ou `vinculado`) |
| GET | `/entregadores` | estabelecimento | — | frota do estabelecimento |

Todas as rotas são protegidas por padrão por um guard JWT global; as rotas
públicas são marcadas explicitamente. Um guard de papéis restringe cada rota ao
perfil correto (por exemplo, só o `ESTABELECIMENTO` cadastra e lista entregadores).

Regras de negócio do cadastro de estabelecimento:

- é obrigatório informar `cnpj` ou `cpf`; sem nenhum dos dois o cadastro é
  rejeitado;
- quando o documento é CNPJ, a `razaoSocial` passa a ser obrigatória;
- e-mail e documento já usados retornam conflito (409);
- a senha tem no mínimo 8 caracteres e é armazenada com hash bcrypt.

Cadastro e primeiro acesso do entregador:

- o estabelecimento cadastra o entregador (nome, CPF, telefone, tipo de veículo e
  placa quando aplicável) e o vincula à sua frota no mesmo passo (o vínculo é um
  registro na tabela `contratos`);
- o CPF identifica o entregador: um CPF novo cria o entregador, um CPF já
  existente apenas vincula o entregador a este estabelecimento (um mesmo
  entregador pode servir a várias empresas);
- vincular o mesmo entregador duas vezes ao mesmo estabelecimento retorna
  conflito (409);
- a senha temporária é gerada apenas quando o entregador é criado, retornada uma
  única vez para o estabelecimento repassar;
- no primeiro login o entregador vem com `senhaTemporaria: true` e deve trocar a
  senha em `/auth/entregador/trocar-senha`; após a troca a senha temporária
  deixa de valer.

O login valida a senha com bcrypt e, em caso de sucesso, assina um JWT contendo o
`sub` e o `role` (`ESTABELECIMENTO` ou `ENTREGADOR`). Para o estabelecimento o
token carrega ainda o `establishmentId`, usado para isolar os dados por
estabelecimento; o entregador não é preso a uma única empresa, então seu token
não carrega esse campo.

As rotas de autenticação vivem na branch `feat/auth`; na branch de infra o
backend expõe apenas `/` e `/health/db`.

## Healthcheck da aplicação

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

Nenhum segredo é versionado. Em desenvolvimento, as variáveis já estão nos
`compose.yaml`; o `.env` só é necessário para apontar a produção ao Supabase.

Backend:

- `DATABASE_URL`, `DIRECT_URL`: conexões do Postgres (runtime, geração e migrations).
- `JWT_SECRET`, `JWT_EXPIRES_IN`: assinatura e validade do token.
- `CORS_ORIGIN`: origem permitida para o frontend.
- `PORT`: porta de escuta (opcional).

Frontend:

- `NEXT_PUBLIC_API_URL`: URL pública do backend usada pelo navegador.
