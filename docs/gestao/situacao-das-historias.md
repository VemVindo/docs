---
sidebar_position: 3
title: Situação das histórias
---

# Situação das histórias

Estado de cada história na `main` dos repositórios em 25/10/2026, véspera da
entrega. "PR aberto" quer dizer que o código existe mas ainda não foi revisado e
integrado.

## Empresa cliente

| ID | História | Backend | Frontend |
|---|---|---|---|
| E-US01 | Cadastrar estabelecimento | pronto | pronto (`/cadastro`) |
| E-US02 | Visualizar info empresariais | pronto | pronto (`/painel/empresa`) |
| E-US03 | Editar info empresariais | pronto | pronto (`/painel/empresa`) |
| E-US04 | Cadastrar entregador | pronto | pronto (`/painel/frota`) |
| E-US05 | Visualizar frota | pronto | pronto (`/painel/frota`) |
| E-US06 | Remover entregador | `DELETE /entregadores/:cpf/vinculo` na `main`; PR #49 aberto | sem tela |
| E-US07 | Cadastrar novo pedido | pronto | PR #24 aberto, com conflito |
| E-US08 | Atribuir entrega | pronto | pronto (`/painel/pedidos`) |
| E-US09 | Visualizar pedidos ativos | pronto | pronto |
| E-US10 | Visualizar pedidos finalizados | pronto | pronto |
| E-US11 | Reatribuir entregador | pronto | pronto |
| E-US12 | Integração com outros sistemas | pronto | sem tela; uso só pela API |
| E-US13 | Ver detalhe da entrega | pronto | pronto (`/painel/pedidos/[id]`) |
| E-US14 | Dashboard | PR #50 aberto | tela "Em construção" em `/painel` |
| E-US15 | Parâmetros de remuneração | pronto | pronto (`/painel/remuneracao`) |
| E-US16 | Cálculo de ganhos por entrega | pronto | o valor aparece nas listas de pedidos |
| E-US17 | Página de comentários | pronto | pronto (`/painel/avaliacoes`) |
| E-US18 | Desempenho do entregador | PR #48 aberto | sem tela |
| E-US19 | WhatsApp com o recebedor | pronto | pronto |
| E-US20 | WhatsApp com o entregador | pronto | pronto |
| E-US21 | Editar entregador | pronto | PR #34 aberto |

## Entregador

| ID | História | Backend | Frontend |
|---|---|---|---|
| EN-US01 | Realizar login | pronto | pronto (`/login/entregador`) |
| EN-US02 | Compartilhar localização | pronto | pronto (`/entregador/pedidos/[id]`) |
| EN-US03 | Visualizar status do pedido | pronto | pronto (`/entregador/pedidos`) |
| EN-US04 | Atualizar status da entrega | pronto | pronto |
| EN-US05 | Emitir alerta de atraso | removida do escopo | removida do escopo |
| EN-US06 | Inserir código do recebedor | pronto | pronto |
| EN-US07 | WhatsApp com o estabelecimento | pronto | pronto |

## Recebedor

| ID | História | Backend | Frontend |
|---|---|---|---|
| R-US01 | Abrir link sem login | pronto | pronto (`/rastreio/[codigo]`) |
| R-US02 | Ver status do pedido | pronto | pronto |
| R-US03 | Ver localização do entregador | pronto | pronto |
| R-US04 | Notificação de status | pronto | pronto |
| R-US05 | Dar nota de 0 a 5 | pronto | pronto |
| R-US06 | Deixar comentário | pronto | pronto |

## Resumo

- 34 histórias numeradas, 1 removida do escopo (EN-US05).
- Backend: 30 prontas e 3 com PR aberto (E-US06, E-US14 e E-US18).
- Frontend: 27 prontas, 2 com PR aberto (E-US07 e E-US21), 1 com tela
  provisória (E-US14) e 3 sem tela (E-US06, E-US12 e E-US18).

## Mudanças em relação ao backlog

- **WhatsApp (E-US19, E-US20 e EN-US07):** links `wa.me` no lugar da Cloud API
  da Meta. Ver [Integração e segurança](../arquitetura/integracao-e-seguranca.md#whatsapp).
- **E-US12:** a integração ficou só como API, com credencial por empresa e
  pendências para pedidos incompletos. A tela para gerar a credencial e
  completar pendências não entrou.
- **EN-US05:** removida do escopo na versão 3.0 da divisão de histórias (02/10/2026).
