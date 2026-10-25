---
sidebar_position: 4
title: Referência da API
---

# Referência da API

Rotas expostas pelo backend na `main`. A coluna **Acesso** diz quem pode
chamar cada rota:

- **Público**: sem login.
- **Empresa**: cookie de sessão de um estabelecimento (`@Cargos(ESTABELECIMENTO)`).
- **Entregador**: cookie de sessão de um entregador (`@Cargos(ENTREGADOR)`).
- **Logado**: qualquer uma das duas sessões.
- **Link**: token do link de rastreio na URL.
- **Chave**: cabeçalho `x-api-key` com a credencial de integração.

Os corpos e as respostas detalhadas estão nos DTOs de cada módulo
(`src/<modulo>/dto`) e na coleção do Postman (`backend/test/postman`).

## Sessão e conta

| Método | Rota | Acesso | História |
|---|---|---|---|
| POST | `/auth/cadastrar/empresa` | Público | E-US01 |
| POST | `/auth/login/empresa` | Público | EN-US01 |
| POST | `/auth/login/entregador` | Público | EN-US01 |
| GET | `/auth/minhas-infos` | Logado | |
| POST | `/auth/entregador/trocar-senha` | Entregador | E-US04 |
| POST | `/auth/sair` | Público | |
| POST | `/auth/sair-de-todos` | Logado | |
| GET | `/empresa/cadastro` | Empresa | E-US02 |
| PUT | `/empresa/cadastro` | Empresa | E-US03 |
| GET | `/empresa/configuracoes` | Empresa | R-US03 |
| PATCH | `/empresa/configuracoes` | Empresa | R-US03 |

## Frota e vínculos

| Método | Rota | Acesso | História |
|---|---|---|---|
| POST | `/entregadores` | Empresa | E-US04 |
| POST | `/entregadores/vinculo` | Empresa | E-US04 |
| GET | `/entregadores` | Empresa | E-US05 |
| PATCH | `/entregadores` | Empresa | E-US21 |
| POST | `/entregadores/:cpf/senha-temporaria` | Empresa | E-US04 |
| DELETE | `/entregadores/:cpf/vinculo` | Empresa | E-US06 |
| GET | `/entregador/dados-compartilhados` | Entregador | E-US04 |
| GET | `/entregador/vinculos` | Entregador | E-US04 |
| POST | `/entregador/vinculos/:id/aceitar` | Entregador | E-US04 |
| POST | `/entregador/vinculos/:id/recusar` | Entregador | E-US04 |
| POST | `/entregador/vinculos/:id/encerrar` | Entregador | E-US04 |

## Pedidos

| Método | Rota | Acesso | História |
|---|---|---|---|
| POST | `/pedidos` | Empresa | E-US07 |
| GET | `/pedidos` | Empresa | E-US09, E-US10 |
| GET | `/pedidos/:id` | Empresa | E-US13 |
| PATCH | `/pedidos/:id/atribuir` | Empresa | E-US08 |
| PATCH | `/pedidos/:id/entregador` | Empresa | E-US11 |
| GET | `/pedidos/:id/historico-entregadores` | Empresa | E-US11 |
| PATCH | `/pedidos/:id/distancia` | Empresa | E-US16 |
| GET | `/pedidos/minhas-entregas` | Entregador | EN-US03 |
| GET | `/pedidos/:id/status-disponiveis` | Entregador | EN-US04 |
| PATCH | `/pedidos/:id/status` | Entregador | EN-US04 |
| POST | `/pedidos/:id/finalizar` | Entregador | EN-US06 |
| GET | `/pedidos/:id/whatsapp/entregador` | Empresa | E-US20 |
| GET | `/pedidos/:id/whatsapp/recebedor` | Empresa | E-US19 |
| GET | `/pedidos/:id/whatsapp/estabelecimento` | Entregador | EN-US07 |

## Mapa e rastreio

| Método | Rota | Acesso | História |
|---|---|---|---|
| PUT | `/pedidos/:id/localizacao` | Entregador | EN-US02 |
| GET | `/pedidos/:id/rota` | Logado | E-US13, EN-US02 |
| POST | `/pedidos/:id/link-rastreio` | Empresa | R-US01 |
| GET | `/rastreio/:token` | Link | R-US01, R-US02 |
| GET | `/rastreio/:token/localizacao` | Link | R-US03, R-US04 |
| Socket.IO | namespace `/rastreio` | Link (`auth.token`) | R-US03, R-US04 |

## Avaliação

| Método | Rota | Acesso | História |
|---|---|---|---|
| GET | `/rastreio/:token/avaliacao` | Link | R-US05 |
| POST | `/rastreio/:token/avaliacao` | Link | R-US05 |
| PATCH | `/rastreio/:token/avaliacao` | Link | R-US06 |
| GET | `/avaliacoes?notas=&de=&ate=` | Empresa | E-US17 |

## Remuneração

| Método | Rota | Acesso | História |
|---|---|---|---|
| GET | `/empresa/remuneracao` | Empresa | E-US15 |
| PUT | `/empresa/remuneracao` | Empresa | E-US15 |

## Integração

| Método | Rota | Acesso | História |
|---|---|---|---|
| GET | `/integracao/credencial` | Empresa | E-US12 |
| POST | `/integracao/credencial` | Empresa | E-US12 |
| POST | `/integracao/credencial/rotacionar` | Empresa | E-US12 |
| DELETE | `/integracao/credencial` | Empresa | E-US12 |
| GET | `/integracao/verificar` | Chave | E-US12 |
| POST | `/integracao/pedidos` | Chave | E-US12 |
| GET | `/integracao/pendencias` | Empresa | E-US12 |
| POST | `/integracao/pendencias/:id/completar` | Empresa | E-US12 |

## Infraestrutura

| Método | Rota | Acesso | O que faz |
|---|---|---|---|
| GET | `/` | Público | resposta fixa, sem dados |
| GET | `/health/db` | Público | `SELECT 1` no banco; `{ "database": "up" }` |

## Convenções das respostas

- Erros seguem o formato do NestJS: `{ statusCode, message, error }`. Erros de
  validação trazem `message` como lista.
- Datas saem em UTC com sufixo `Z`; o front formata no fuso do usuário.
- Valores em dinheiro são inteiros em centavos e distâncias são inteiros em
  metros.
- Toda resposta sai com `Cache-Control: no-store`.
