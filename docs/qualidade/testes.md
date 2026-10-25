---
sidebar_position: 1
title: Testes
---

# Testes

O projeto tem quatro níveis de teste e uma coleção do Postman. Todos rodam no
CI a cada PR para a `main`. Os testes bloqueiam o merge quando falham; a coleção
do Postman só informa.

| Nível | Ferramenta | Onde fica | Banco | Comando |
|---|---|---|---|---|
| Unitário (back) | Jest | `backend/src/**/*.spec.ts`, ao lado do código | não usa | `npm test` |
| Unitário e de componente (front) | Vitest e Testing Library | `frontend/app/**/*.test.ts(x)` | não usa | `npm test` |
| Integração | Jest | `backend/test/*.integration-spec.ts` | Postgres real, schema descartável | `npm run test:integration` |
| E2E da API | Jest e Supertest | `backend/test/*.e2e-spec.ts` | Postgres com migrations e seed | `npm run test:e2e` |
| Contrato da API | Postman e Newman | `backend/test/postman/` | API rodando sobre o seed | `npx newman run ...` |

## Unitários

Contagem de 25/10/2026:

- **Backend:** 83 arquivos de teste e 862 casos. Serviços, repositórios
  (com o Prisma substituído por dublê), controllers, DTOs, guards, decorators e
  regras de domínio, como as transições de status do pedido, o cálculo do valor
  da entrega e a decisão de recalcular a rota.
- **Frontend:** 40 arquivos e 334 casos. Funções de `app/lib`
  (formatação, validação, filtros) e componentes renderizados com Testing
  Library, consultados por papel e rótulo acessível.

### Testes parametrizados

Quando a mesma regra vale para várias entradas, o teste usa `it.each` ou
`describe.each` em vez de repetir o caso. São 58 tabelas no backend e 31 no
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

No backend os testes unitários cobrem 100% de statements, branches, funções e
linhas, fora o código gerado pelo Prisma, os `*.module.ts`, o `main.ts` e as
pastas `test/` de apoio. O
`coverageThreshold` do `package.json` exige 100 nas quatro métricas, então
código novo sem teste reprova o `test:ci`.

O CI também compara a cobertura do PR com a do último push verde na `main` e
falha se ela cair mais de 1 ponto percentual. O relatório sai como comentário
no PR.

Os helpers compartilhados entre specs ficam em `backend/src/common/test/`, como
o `contexto-http.ts`, que monta o `ExecutionContext` usado nos testes de guards
e decorators.

## Integração

Os testes de integração provam o que um dublê do Prisma não consegue: SQL de
verdade, transações, bloqueios e restrições do PostgreSQL. Cada suíte usa
`test/apoio/banco-isolado.ts`:

1. Cria um schema com nome aleatório (`<prefixo>_<uuid>`) no banco de
   `TEST_DATABASE_URL`.
2. Aplica as migrations nesse schema.
3. Roda os cenários com um `PrismaClient` apontado para ele.
4. Apaga o schema com `DROP SCHEMA ... CASCADE`.

| Arquivo | História | O que prova |
|---|---|---|
| `ganhos.integration-spec.ts` | E-US16 | duas finalizações simultâneas consolidam o ganho uma vez só; falha depois da escrita desfaz tudo; parâmetros trocados depois da atribuição não mudam o ganho; distância desconhecida bloqueia a finalização; a migration preserva pedidos antigos sem inventar ganho |
| `codigo-do-recebedor.integration-spec.ts` | EN-US06 | cada erro fica gravado com o horário; depois de 5 erros o código bloqueia pelo tempo do bloqueio e a contagem recomeça quando ele passa; gerar outro link troca o token sem zerar código nem tentativas |
| `desempenho-entregador.integration-spec.ts` | E-US18 | reatribuição e retorno do pedido não duplicam os indicadores; só pedidos `FINALIZADO` da empresa e do período entram, com início inclusivo e fim exclusivo; tempos ausentes ou inconsistentes ficam de fora; distância desconhecida não inventa soma; vínculo ausente ou inativo responde 404; filtros inválidos são recusados |
| `credencial.integration-spec.ts` | E-US12 | o banco guarda só prefixo e hash da chave; duas gerações ao mesmo tempo deixam uma credencial ativa; rotacionar e revogar desligam a anterior; a chave de uma empresa nunca autentica como outra |
| `importacao.integration-spec.ts` | E-US12 | o mesmo `idExterno` enviado em paralelo vira um pedido só; o `idEmpresa` do corpo é ignorado; pedido incompleto vira pendência, e completar cria o pedido ou salva o progresso |
| `senha-temporaria.integration-spec.ts` | EN-US01 | o cadastro grava o hash da senha temporária e o prazo; senha vencida não entra; trocar a senha e sair de todos os aparelhos invalidam os tokens já emitidos |

Sem `TEST_DATABASE_URL`, as suítes são puladas. No CI elas rodam no job de e2e,
antes dos testes e2e, contra o Postgres de serviço do próprio job.

## E2E

Os testes e2e sobem o `AppModule` inteiro com Supertest, sobre um banco com as
migrations e o seed aplicados. Rodam um arquivo por vez (`maxWorkers: 1`),
porque compartilham o banco.

| Arquivo | O que cobre |
|---|---|
| `sessao.e2e-spec.ts` | `/health/db`; login com senha errada; cookie `httpOnly` sem token no corpo; `minhas-infos` das duas personas; sair encerra a sessão; frota mostra só os entregadores ativos da própria empresa |
| `autenticacao.e2e-spec.ts` | resposta igual para senha errada e usuário inexistente; sessão sem cache no navegador; uma empresa não abre o pedido de outra; entregador não usa rota de empresa; senha temporária só libera o primeiro acesso; sair de todos os aparelhos invalida cookies já emitidos |
| `entregadores.e2e-spec.ts` | cadastro com senha temporária e convite; convite responde igual para CPF existente ou não; primeiro acesso exige a ciência dos dados compartilhados; aceitar e recusar convite; encerrar o vínculo tira o entregador da frota |
| `pedidos.e2e-spec.ts` | lista de pedidos do seed com status, valor e data de conclusão |
| `fluxo-entrega.e2e-spec.ts` | a entrega inteira, na ordem: entregador novo com primeiro acesso e aceite do convite, cadastro do pedido, pedido de outra empresa responde 404, atribuição, correção de distância, lista do entregador, finalização recusada sem link, link de rastreio, página pública, código errado conta tentativa, código certo consolida o ganho, rastreio encerrado responde 410, nota, comentário e lista de avaliações isolada por empresa |
| `rastreio-e-codigo.e2e-spec.ts` | link sem login mostrando só o necessário; outro link derruba o anterior; a empresa não finaliza no lugar do entregador; limite de tentativas e bloqueio do código; o link expira depois da entrega |
| `integracao.e2e-spec.ts` | a API de integração exige a chave, e o cookie da empresa não serve; lote separado por situação; limite de pedidos por lote; completar pendência; rotacionar e revogar a chave |

Os testes e2e alteram o seed e precisam de um banco recém criado: o
`rastreio-e-codigo` finaliza o pedido em andamento da Carla e deixa um pedido do
Bruno bloqueado em andamento, o que tira o Bruno da lista de disponíveis. Por
isso o `fluxo-entrega` cadastra o próprio entregador, e a coleção do Postman
roda antes dos e2e.

## Contrato da API (Postman)

A coleção `backend/test/postman/vemvindo.postman_collection.json` tem 95
requisições em onze pastas e passa pelas 57 rotas da API. As pastas rodam em
ordem e passam variáveis de uma para a outra (CPF do entregador novo, id do
pedido, chave de integração, token do link, código do recebedor):

1. **Sessão:** API e banco no ar, rota protegida sem login, senha errada, login
   e `minhas-infos`.
2. **Empresa, cadastro e parâmetros:** dados cadastrais, configurações e
   remuneração, lidos e salvos com os mesmos valores, e os casos inválidos.
3. **Empresa, frota:** cadastro de entregador com senha temporária, CPF
   repetido, convite por CPF e nova senha temporária.
4. **Entregador, primeiro acesso:** login com a senha temporária, dados
   compartilhados, convites, troca de senha com e sem a ciência e aceite do
   convite.
5. **Empresa, pedido:** edição do entregador, cadastro, lista, detalhe,
   atribuição, reatribuição recusada, distância, histórico, rota, WhatsApp e
   link de rastreio.
6. **Empresa, integração:** gerar, verificar, rotacionar e revogar a chave,
   importar um lote e completar a pendência.
7. **Recebedor, rastreio:** página pública sem o telefone do entregador,
   localização, link inventado e avaliação ainda fechada.
8. **Entregador, entrega:** minhas entregas, status disponíveis, localização,
   rota, WhatsApp, código errado, finalização e saída de todos os aparelhos.
9. **Recebedor, avaliação:** rastreio encerrado, nota fora da escala, nota,
   comentário e segunda nota recusada.
10. **Empresa, avaliações e remoção:** lista filtrada por nota, filtro inválido
    e remoção do entregador da frota.
11. **Cadastro de empresa:** empresa nova, sessão aberta no cadastro e e-mail
    repetido.

A coleção cadastra o próprio entregador e a própria empresa, com CPF e e-mail
gerados a cada execução, e devolve ao seed os valores que altera. Os testes
conferem status, chaves principais e as variáveis que a pasta seguinte usa,
sem fixar valores calculados: o ganho da entrega só precisa ser positivo, por
exemplo. As regras exatas ficam nos testes unitários, de integração e e2e.

No CI ela roda com o Newman contra a API compilada, logo depois do seed e antes
dos testes de integração e e2e. O passo é informativo: uma falha aparece no
relatório do PR e no log da API, mas não bloqueia o merge. Para rodar local,
com a API de pé sobre o seed:

```bash
npx newman run test/postman/vemvindo.postman_collection.json \
  --env-var baseUrl=http://localhost:8000
```

A mesma coleção pode ser importada no Postman para explorar a API à mão.

## Dados nos testes

Nenhum teste usa dado pessoal real. CPFs e CNPJs são gerados pelo algoritmo de
dígito verificador, e-mails usam domínios reservados que não recebem mensagem
(`example.com`, `.test`, `.exemplo`) e telefones são inventados.
