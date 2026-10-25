---
sidebar_position: 2
title: Padrões de código
---

# Padrões de código

## Ferramentas

| | Backend | Frontend |
|---|---|---|
| Lint | ESLint com `typescript-eslint` (`recommendedTypeChecked`) | ESLint com `eslint-config-next` (core-web-vitals e TypeScript) |
| Formatação | Prettier: aspas simples, vírgula final | Prettier: aspas simples, ponto e vírgula, vírgula final, 120 colunas |
| Tipos | `tsc --noEmit` com `strictNullChecks` | `next typegen && tsc --noEmit` com `strict` |
| No CI | `lint:check` e `format:check` no job de lint | `lint` e `format:check` no job de lint |

No backend o Prettier roda como regra do ESLint (`eslint-plugin-prettier`). No
frontend o `eslint-config-prettier` desliga as regras de estilo do ESLint que
brigariam com o Prettier, e o `format:check` confere a formatação à parte.

## Convenções de nome

- Código em português, sem acento nos identificadores: `PedidoService`,
  `listarFrota`, `valorEntrega`.
- `camelCase` para variáveis, funções, métodos e propriedades; `PascalCase` para
  classes, tipos e componentes React; `UPPER_SNAKE_CASE` para constantes de
  módulo (`LIMITE_TENTATIVAS_CODIGO`).
- Arquivos em `kebab-case` no backend, seguindo o Nest
  (`calculo-valor-entrega.service.ts`), e em `PascalCase` para componentes no
  frontend (`FinalizarComCodigo.tsx`).
- Exceção: os campos do Prisma e o DTO de criação de pedido usam `snake_case`
  (`nome_recebedor`, `valor_entrega`), porque espelham as colunas do banco e o
  contrato de `POST /pedidos` já usado pelo frontend. Renomear exigiria
  migration e mudança no contrato, e ficou fora do escopo.
- Rotas REST em português e `kebab-case`: `/pedidos/:id/status-disponiveis`.

## Organização

- **Backend:** um módulo Nest por domínio (`pedido`, `rastreio`, `mapa`,
  `remuneracao`...). Controller só recebe e valida; regra fica no service; o
  acesso ao banco fica no repository. Regras puras, sem dependência do Nest,
  ficam em arquivos próprios (`pedido/regras/status-pedido.regra.ts`) para serem
  testadas sem montar módulo. Detalhes em
  [Visão arquitetural](../arquitetura/visao-arquitetural.md).
- **Frontend:** rotas no App Router (`app/painel`, `app/entregador`,
  `app/rastreio/[codigo]`), componentes em `app/components/<area>`, chamadas à
  API só em `app/lib/api.ts` e tipos das respostas em `app/lib/tipos.ts`.
- **Testes:** o teste unitário fica ao lado do arquivo testado
  (`x.service.spec.ts`, `X.test.tsx`) ou na pasta `test/` do módulo quando
  precisa de dados de apoio. Integração e e2e ficam em `backend/test/`.

## Clean Code no estado atual

Medido na `main` em 25/10/2026, fora o código gerado pelo Prisma:

| Indicador | Backend | Frontend |
|---|---|---|
| `eslint-disable` | 0 | 1 (`react-hooks/exhaustive-deps` no mapa, comentado) |
| `console.log` | 0 | 0 |
| `TODO` e `FIXME` | 0 | 0 |
| `any` explícito | 0 | 0 |

Comentários explicam o porquê de uma decisão, como o limite de 72 caracteres da
senha por causa do bcrypt, e não repetem o que o código já diz.

### Pontos de atenção

Os maiores arquivos de produção são `pedido.service.ts` (484 linhas) e
`pedido.repository.ts` (402). Eles concentram atribuição, mudança de status,
finalização e WhatsApp do pedido. Separar a finalização com ganho (E-US16) e a
conversa por WhatsApp em services próprios é a próxima refatoração sugerida.

## Commits e PRs

- Conventional Commits no título do PR, conferido pelo workflow `pr-titulo`:
  `feat(pedido): ...`, `fix(rastreio): ...`, `chore(ci): ...`.
- Merge na `main` só por PR, com o check `CI ok` verde (ruleset do repositório).
- O template de PR pede testes, migration quando o schema muda, documentação
  atualizada e nenhum dado pessoal real em código, seed ou teste.
