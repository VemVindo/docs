---
sidebar_position: 1
title: Testes
---

# Testes

O projeto tem quatro níveis de teste. Todos rodam no CI a cada PR para a `main`
e bloqueiam o merge quando falham.

| Nível | Ferramenta | Onde fica | Banco | Comando |
|---|---|---|---|---|
| Unitário (back) | Jest | `backend/src/**/*.spec.ts`, ao lado do código | não usa | `npm test` |
| Unitário e de componente (front) | Vitest e Testing Library | `frontend/app/**/*.test.ts(x)` | não usa | `npm test` |
| Integração | Jest | `backend/test/*.integration-spec.ts` | Postgres real, schema descartável | `npm run test:integration` |
| E2E da API | Jest e Supertest | `backend/test/*.e2e-spec.ts` | Postgres com migrations e seed | `npm run test:e2e` |
| Contrato da API | Postman e Newman | `backend/test/postman/` | API rodando sobre o seed | `npx newman run ...` |

## Unitários

Contagem de 25/10/2026:

- **Backend:** 59 arquivos de teste e 663 casos. Serviços, repositórios
  (com o Prisma substituído por dublê), DTOs, guards e regras de domínio, como as
  transições de status do pedido, o cálculo do valor da entrega e a decisão de
  recalcular a rota.
- **Frontend:** 40 arquivos e 334 casos. Funções de `app/lib`
  (formatação, validação, filtros) e componentes renderizados com Testing
  Library, consultados por papel e rótulo acessível.

### Testes parametrizados

Quando a mesma regra vale para várias entradas, o teste usa `it.each` ou
`describe.each` em vez de repetir o caso. São 45 tabelas no backend e 31 no
frontend. Exemplos:

- `backend/src/pedido/regras/status-pedido.regra.spec.ts`: quais status exigem
  o código do recebedor;
- `backend/src/pedido/dto/corrigir-distancia.dto.spec.ts`: distâncias aceitas e
  recusadas;
- `backend/src/integracao/importacao/analise-pedido-externo.spec.ts`: campos
  faltantes de cada pedido importado;
- `frontend/app/lib/moeda.test.ts` e `formatacao.test.ts`: formatação de
  valores, datas e distâncias.

```ts
it.each([StatusPedido.EM_ANDAMENTO, StatusPedido.CANCELADO])(
  'nao exige o codigo para %s',
  (status) => {
    expect(exigeCodigoDoRecebedor(status)).toBe(false);
  },
);
```

### Cobertura

O CI compara a cobertura do PR com a do último push verde na `main` e falha se
ela cair mais de 1 ponto percentual. O relatório sai como comentário no PR.

## Integração

`backend/test/ganhos.integration-spec.ts` testa o que um dublê do Prisma não
consegue provar: transações e bloqueios reais do PostgreSQL na consolidação do
ganho do entregador (E-US16) e a migration que preenche os pedidos antigos.

1. Cria um schema com nome aleatório (`eus16_<uuid>`) no banco de
   `TEST_DATABASE_URL`.
2. Aplica as migrations nesse schema.
3. Roda 12 cenários, entre eles: duas finalizações simultâneas consolidam o
   ganho uma vez só; falha depois da escrita do ganho desfaz tudo; parâmetros de
   remuneração trocados depois da atribuição não mudam o ganho; distância
   desconhecida bloqueia a finalização; a correção de distância respeita o
   isolamento entre empresas.
4. Apaga o schema com `DROP SCHEMA ... CASCADE`.

Sem `TEST_DATABASE_URL`, a suíte é pulada. No CI ela roda no job de e2e, contra
o Postgres de serviço do próprio job.

## E2E

Os testes e2e sobem o `AppModule` inteiro com Supertest, sobre um banco com as
migrations e o seed aplicados. Rodam um arquivo por vez (`maxWorkers: 1`),
porque compartilham o banco.

| Arquivo | O que cobre |
|---|---|
| `sessao.e2e-spec.ts` | `/health/db`; login com senha errada; cookie `httpOnly` sem token no corpo; `minhas-infos` das duas personas; sair encerra a sessão; rota de outro cargo responde 403; frota mostra só os entregadores ativos da própria empresa |
| `pedidos.e2e-spec.ts` | lista de pedidos do seed com status, valor e data de conclusão |
| `fluxo-entrega.e2e-spec.ts` | a entrega inteira, na ordem: cadastro, pedido de outra empresa responde 404, atribuição, correção de distância, lista do entregador, finalização recusada sem link, link de rastreio, página pública, código errado conta tentativa, código certo consolida o ganho, rastreio encerrado responde 410, nota, comentário e lista de avaliações isolada por empresa |

O fluxo cria um pedido próprio e devolve o entregador como disponível no fim,
então pode rodar de novo sobre o mesmo seed sem apagar o banco.

## Contrato da API (Postman)

A coleção `backend/test/postman/vemvindo.postman_collection.json` tem 39
requisições em seis pastas, que rodam em ordem e passam variáveis de uma para a
outra (id do pedido, token do link, código do recebedor):

1. **Sessão:** health, rota protegida sem login, senha errada, login e
   `minhas-infos`.
2. **Empresa:** frota, cadastro de pedido válido e inválido, detalhe,
   atribuição (e a segunda atribuição recusada), distância, histórico,
   WhatsApp com o recebedor, link de rastreio e saída.
3. **Recebedor, rastreio:** página pública sem o telefone do entregador, link
   inventado e avaliação ainda fechada.
4. **Entregador:** login, minhas entregas, rota da empresa recusada, status
   disponíveis, WhatsApp com o estabelecimento, código errado e finalização.
5. **Recebedor, avaliação:** rastreio encerrado, nota fora da escala, nota,
   comentário e segunda nota recusada.
6. **Empresa, avaliações:** lista filtrada por nota e filtro inválido.

No CI ela roda com o Newman contra a API compilada, depois dos testes e2e. Para
rodar local, com a API de pé sobre o seed:

```bash
npx newman run test/postman/vemvindo.postman_collection.json \
  --env-var baseUrl=http://localhost:8000
```

A mesma coleção pode ser importada no Postman para explorar a API à mão.

## Dados nos testes

Nenhum teste usa dado pessoal real. CPFs e CNPJs são gerados pelo algoritmo de
dígito verificador, e-mails ficam em `example.com` e telefones são inventados.
