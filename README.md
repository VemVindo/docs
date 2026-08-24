# VemVindo - Documentação

Documentação do VemVindo, uma aplicação web de rastreamento de entregas para
estabelecimentos comerciais com frota própria (SaaS B2B multitenant). O produto
tem frontend em Next.js e backend em NestJS, mantidos em repositórios separados
da organização. Este repositório (`docs`) contém apenas a documentação, construída
com [Docusaurus](https://docusaurus.io/).

## Repositórios da organização

- `frontend`: aplicação Next.js.
- `backend`: aplicação NestJS.
- `docs`: esta documentação.

## Instalação

```bash
npm install
```

## Desenvolvimento local

```bash
npm run start
```

Inicia um servidor local e abre o navegador. A maioria das alterações é refletida
sem reiniciar o servidor.

## Build

```bash
npm run build
```

Gera o conteúdo estático no diretório `build`, que pode ser servido por qualquer
serviço de hospedagem estática.

## Verificação de tipos

```bash
npm run typecheck
```

## Deploy

O deploy é feito no GitHub Pages da organização VemVindo.

```bash
GIT_USER=<seu usuário do GitHub> npm run deploy
```
