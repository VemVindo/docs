---
sidebar_position: 2
title: Divisão de histórias
---

# Divisão de histórias de usuário

Versão 3.0 (02/10/2026). Distribuição das histórias de usuário entre os sete
integrantes, com carga equilibrada. O calendário dos sprints está em
[Cronograma e próximos passos](./cronograma-e-proximos-passos.md).

## Premissas

- Cada US é vertical: backend (NestJS + PostgreSQL) e frontend (Next.js), seguindo o protótipo de alta fidelidade.
- Estimativa em story points (Fibonacci). Total: **157 pts** em **32 itens**; média de **22,4 pts por integrante**.
- Cada US tem de 1 a 3 responsáveis, com pontos divididos igualmente. 3 responsáveis apenas na E-US14 (Dashboard, 13 pts).
- **EN-US05 (Emitir alerta de atraso) removida do escopo.**
- Chat em tempo real (E-US19, E-US20, EN-US07) substituído por integração com WhatsApp. E-US20 e EN-US07 fundidas em um item. Os critérios de aceitação estão no [backlog da empresa](../backlog-do-produto/empresa-cliente.md#comunicação-via-whatsapp).
- 3 sprints de 1 semana; a reunião semanal (sexta) faz a review do sprint e o planejamento do seguinte.
- US dependentes podem rodar no mesmo sprint: a dupla fecha o contrato da API (rotas e DTOs) na segunda e back e front avançam em paralelo.

**Nomenclatura:** `E-USxx` Empresa | `EN-USxx` Entregador | `R-USxx` Recebedor.

**Escala:** 2 = tela simples | 3 = CRUD ou listagem | 5 = regra de negócio, tempo real ou segurança | 8 = fluxo complexo ou integração externa | 13 = épico.

## Carga por integrante

| Integrante | Sprint 1 | Sprint 2 | Sprint 3 | Total | US |
|---|---|---|---|---|---|
| Ana | 7 | 7 | 8 | **22** | 12 |
| Felipe | 9 | 6,5 | 7,5 | **23** | 8 |
| Guilherme | 11,5 | 5,5 | 5,8 | **22,8** | 10 |
| Camila | 5,5 | 8 | 8,3 | **21,8** | 8 |
| Isaque | 7,5 | 8 | 6,5 | **22** | 7 |
| Luisa | 9 | 5 | 9 | **23** | 5 |
| Diogo | 7,5 | 8 | 6,8 | **22,3** | 10 |
| **Total** | 57 | 48 | 52 | **157** | 32 |

## Divisão por integrante

### Ana Luiza Komatsu Aroeira (22 pts, 12 US)

| US | Título | Sprint | Pts (parte) | Sua parte | Com |
|---|---|---|---|---|---|
| E-US08 | Atribuir Entrega a Entregador | 1 | 5 (2,5) | Front: seleção do entregador disponível | Guilherme |
| E-US09 | Visualizar Pedidos Ativos | 1 | 3 (1,5) | Front: lista e acesso ao detalhe | Camila |
| EN-US03 | Visualizar status do pedido | 1 | 3 (3) | US completa (back + front) | - |
| E-US15 | Parâmetros de Remuneração | 2 | 3 (1,5) | Front: tela de configuração | Guilherme |
| E-US16 | Cálculo de Ganhos por Entrega | 2 | 5 (2,5) | Front: exibição do valor por entrega | Camila |
| R-US02 | Ver Status do Pedido | 2 | 3 (1,5) | Front: status e linha do tempo | Camila |
| R-US04 | Notificação de Status | 2 | 3 (1,5) | Front: avisos na tela e indicação de conexão instável | Diogo |
| E-US10 | Visualizar Pedidos Finalizados | 3 | 3 (3) | US completa (back + front) | - |
| E-US17 | Página de Comentários | 3 | 3 (1,5) | Front: página de comentários e filtros | Diogo |
| E-US21 | Editar Entregador | 3 | 3 (1,5) | Front: formulário de edição | Guilherme |
| R-US05 | Dar Nota de 0 a 5 | 3 | 2 (1) | Front: componente de estrelas | Felipe |
| R-US06 | Deixar Comentário | 3 | 2 (1) | Front: campo de comentário opcional | Diogo |

*Preparação no Sprint 1 (sem pontos):* Componentes base do protótipo no Next.js (design system, layout dos 3 perfis).

### Felipe de Oliveira Motta (23 pts, 8 US)

| US | Título | Sprint | Pts (parte) | Sua parte | Com |
|---|---|---|---|---|---|
| E-US04 | Cadastrar / Vincular Entregador | 1 | 8 (4) | Cadastro e vínculo por CPF (back) + formulário (front) | Luisa |
| E-US11 | Reatribuir Entregador | 1 | 5 (2,5) | Back: troca de entregador, histórico e notificações | Isaque |
| EN-US04 | Atualizar status da entrega | 1 | 5 (2,5) | Back: máquina de estados do pedido (transições válidas) | Isaque |
| E-US13 | Ver Detalhe da Entrega | 2 | 5 (2,5) | Back: detalhe do pedido e histórico de status | Diogo |
| E-US20 + EN-US07 | WhatsApp: Estabelecimento com Entregador | 2 | 8 (4) | Back: roteamento para o entregador e templates de atribuição | Isaque |
| E-US06 | Remover Entregador | 3 | 5 (2,5) | Back: encerramento do contrato e reatribuição automática | Isaque |
| E-US19 | WhatsApp: Estabelecimento com Recebedor | 3 | 8 (4) | Front: painel de conversa do estabelecimento, não lidas | Isaque |
| R-US05 | Dar Nota de 0 a 5 | 3 | 2 (1) | Back: registro da nota vinculada ao pedido e ao entregador | Ana |

*Preparação no Sprint 1 (sem pontos):* Repositórios, Docker, CI (lint, testes, build) e ambiente de homologação.

### Guilherme Flyan Araujo (22,8 pts, 10 US)

| US | Título | Sprint | Pts (parte) | Sua parte | Com |
|---|---|---|---|---|---|
| E-US01 | Cadastrar Estabelecimento | 1 | 5 (2,5) | Divisão interna a combinar pela dupla | Diogo |
| E-US02 | Visualizar Info Empresariais | 1 | 2 (1) | Divisão interna a combinar pela dupla | Diogo |
| E-US03 | Editar Info Empresariais | 1 | 3 (1,5) | Divisão interna a combinar pela dupla | Diogo |
| E-US07 | Cadastrar Novo Pedido | 1 | 8 (4) | Back: criação do pedido, status inicial, atribuição opcional | Camila |
| E-US08 | Atribuir Entrega a Entregador | 1 | 5 (2,5) | Back: atribuição, regras de disponibilidade e notificação | Ana |
| E-US05 | Visualizar Frota | 2 | 3 (1,5) | Front: lista da frota e acesso aos dados | Camila |
| E-US15 | Parâmetros de Remuneração | 2 | 3 (1,5) | Back: parâmetros, validação e vigência para entregas futuras | Ana |
| E-US18 | Desempenho do Entregador | 2 | 5 (2,5) | Front: painel individual do entregador | Camila |
| E-US14 | Dashboard: Indicadores Operacionais | 3 | 13 (4,3) | Back: indicadores por entregador, avaliações e comparação entre períodos | Camila, Diogo |
| E-US21 | Editar Entregador | 3 | 3 (1,5) | Back: validações e restrição ao estabelecimento | Ana |

### Camila Silva Cavalcante (21,8 pts, 8 US)

| US | Título | Sprint | Pts (parte) | Sua parte | Com |
|---|---|---|---|---|---|
| E-US07 | Cadastrar Novo Pedido | 1 | 8 (4) | Cálculo do valor da entrega + front do formulário | Guilherme |
| E-US09 | Visualizar Pedidos Ativos | 1 | 3 (1,5) | Back: consulta de pedidos ativos por tenant | Ana |
| E-US05 | Visualizar Frota | 2 | 3 (1,5) | Back: consulta da frota com status e entrega atual | Guilherme |
| E-US16 | Cálculo de Ganhos por Entrega | 2 | 5 (2,5) | Back: cálculo automático na conclusão da entrega | Ana |
| E-US18 | Desempenho do Entregador | 2 | 5 (2,5) | Back: agregações filtradas por entregador | Guilherme |
| R-US02 | Ver Status do Pedido | 2 | 3 (1,5) | Back: histórico de status exposto ao link público | Ana |
| E-US12 | Integração com Outros Sistemas | 3 | 8 (4) | Back: importação, validação e pedido de completude + front | Luisa |
| E-US14 | Dashboard: Indicadores Operacionais | 3 | 13 (4,3) | Back: agregações de agilidade e volume (tempo médio, totais, taxas, status, cancelamentos) | Guilherme, Diogo |

*Preparação no Sprint 1 (sem pontos):* Schema do banco a partir do MER (migrations, seeds de teste).

### Isaque Camargos Nascimento (22 pts, 7 US)

| US | Título | Sprint | Pts (parte) | Sua parte | Com |
|---|---|---|---|---|---|
| E-US11 | Reatribuir Entregador | 1 | 5 (2,5) | Front: modal de reatribuição e histórico | Felipe |
| EN-US02 | Compartilhar localização | 1 | 5 (2,5) | Front: permissão de localização e envio periódico no app do entregador | Diogo |
| EN-US04 | Atualizar status da entrega | 1 | 5 (2,5) | Front: tela de atualização de status, confirmações e erros | Felipe |
| E-US20 + EN-US07 | WhatsApp: Estabelecimento com Entregador | 2 | 8 (4) | Front: conversa com entregador no painel, falhas de envio | Felipe |
| R-US03 | Ver Localização do Entregador | 2 | 8 (4) | Front: mapa em tempo real e modo somente ETA | Diogo |
| E-US06 | Remover Entregador | 3 | 5 (2,5) | Front: confirmação e atualização da frota | Felipe |
| E-US19 | WhatsApp: Estabelecimento com Recebedor | 3 | 8 (4) | Back: webhook WhatsApp, vínculo conversa/pedido, template com link | Felipe |

*Preparação no Sprint 1 (sem pontos):* Conta Meta Business, número WhatsApp, templates para aprovação, esqueleto do webhook.

### Luisa de Souza Ferreira (23 pts, 5 US)

| US | Título | Sprint | Pts (parte) | Sua parte | Com |
|---|---|---|---|---|---|
| E-US04 | Cadastrar / Vincular Entregador | 1 | 8 (4) | Back: senha temporária (hash, expiração, troca obrigatória no 1º acesso) e regras de acesso por vínculo | Felipe |
| EN-US01 | Realizar login (auth + guard multitenant) | 1 | 5 (5) | US completa (back + front) | - |
| R-US01 | Abrir Link sem Login (token) | 2 | 5 (5) | US completa (back + front) | - |
| E-US12 | Integração com Outros Sistemas | 3 | 8 (4) | Back: credencial exclusiva por estabelecimento (geração, hash, rotação, escopo por tenant) | Camila |
| EN-US06 | Inserir código do recebedor | 3 | 5 (5) | US completa (back + front) | - |

*Sprint 2:* Revisão de segurança dos módulos de autenticação, tokens e credenciais (sem pontos).

### Diogo Oliveira Ferreira (22,3 pts, 10 US)

| US | Título | Sprint | Pts (parte) | Sua parte | Com |
|---|---|---|---|---|---|
| E-US01 | Cadastrar Estabelecimento | 1 | 5 (2,5) | Divisão interna a combinar pela dupla | Guilherme |
| E-US02 | Visualizar Info Empresariais | 1 | 2 (1) | Divisão interna a combinar pela dupla | Guilherme |
| E-US03 | Editar Info Empresariais | 1 | 3 (1,5) | Divisão interna a combinar pela dupla | Guilherme |
| EN-US02 | Compartilhar localização | 1 | 5 (2,5) | Back: recebimento e armazenamento das posições, encerramento ao finalizar/cancelar | Isaque |
| E-US13 | Ver Detalhe da Entrega | 2 | 5 (2,5) | Front: mapa, distância e tempo estimado no detalhe | Felipe |
| R-US03 | Ver Localização do Entregador | 2 | 8 (4) | Back: posição, distância restante e ETA via API de mapas | Isaque |
| R-US04 | Notificação de Status | 2 | 3 (1,5) | Back: detecção de entregador próximo | Ana |
| E-US14 | Dashboard: Indicadores Operacionais | 3 | 13 (4,3) | Front: dashboard, filtros de período, gráficos e estados vazios | Guilherme, Camila |
| E-US17 | Página de Comentários | 3 | 3 (1,5) | Back: consulta agregada com filtros por nota e período | Ana |
| R-US06 | Deixar Comentário | 3 | 2 (1) | Back: registro do comentário vinculado ao pedido | Ana |

*Preparação no Sprint 1 (sem pontos):* Spike de APIs de mapa (custo, limites, ETA).

## Matriz US por integrante

| US | Título | Sprint | Pts | Ana | Felipe | Guilherme | Camila | Isaque | Luisa | Diogo |
|---|---|---|---|---|---|---|---|---|---|---|
| E-US01 | Cadastrar Estabelecimento | 1 | 5 |  |  | X |  |  |  | X |
| E-US02 | Visualizar Info Empresariais | 1 | 2 |  |  | X |  |  |  | X |
| E-US03 | Editar Info Empresariais | 1 | 3 |  |  | X |  |  |  | X |
| E-US04 | Cadastrar / Vincular Entregador | 1 | 8 |  | X |  |  |  | X |  |
| E-US07 | Cadastrar Novo Pedido | 1 | 8 |  |  | X | X |  |  |  |
| E-US08 | Atribuir Entrega a Entregador | 1 | 5 | X |  | X |  |  |  |  |
| E-US09 | Visualizar Pedidos Ativos | 1 | 3 | X |  |  | X |  |  |  |
| E-US11 | Reatribuir Entregador | 1 | 5 |  | X |  |  | X |  |  |
| EN-US01 | Realizar login (auth + guard multitenant) | 1 | 5 |  |  |  |  |  | X |  |
| EN-US02 | Compartilhar localização | 1 | 5 |  |  |  |  | X |  | X |
| EN-US03 | Visualizar status do pedido | 1 | 3 | X |  |  |  |  |  |  |
| EN-US04 | Atualizar status da entrega | 1 | 5 |  | X |  |  | X |  |  |
| E-US05 | Visualizar Frota | 2 | 3 |  |  | X | X |  |  |  |
| E-US13 | Ver Detalhe da Entrega | 2 | 5 |  | X |  |  |  |  | X |
| E-US15 | Parâmetros de Remuneração | 2 | 3 | X |  | X |  |  |  |  |
| E-US16 | Cálculo de Ganhos por Entrega | 2 | 5 | X |  |  | X |  |  |  |
| E-US18 | Desempenho do Entregador | 2 | 5 |  |  | X | X |  |  |  |
| E-US20 + EN-US07 | WhatsApp: Estabelecimento com Entregador | 2 | 8 |  | X |  |  | X |  |  |
| R-US01 | Abrir Link sem Login (token) | 2 | 5 |  |  |  |  |  | X |  |
| R-US02 | Ver Status do Pedido | 2 | 3 | X |  |  | X |  |  |  |
| R-US03 | Ver Localização do Entregador | 2 | 8 |  |  |  |  | X |  | X |
| R-US04 | Notificação de Status | 2 | 3 | X |  |  |  |  |  | X |
| E-US06 | Remover Entregador | 3 | 5 |  | X |  |  | X |  |  |
| E-US10 | Visualizar Pedidos Finalizados | 3 | 3 | X |  |  |  |  |  |  |
| E-US12 | Integração com Outros Sistemas | 3 | 8 |  |  |  | X |  | X |  |
| E-US14 | Dashboard: Indicadores Operacionais | 3 | 13 |  |  | X | X |  |  | X |
| E-US17 | Página de Comentários | 3 | 3 | X |  |  |  |  |  | X |
| E-US19 | WhatsApp: Estabelecimento com Recebedor | 3 | 8 |  | X |  |  | X |  |  |
| E-US21 | Editar Entregador | 3 | 3 | X |  | X |  |  |  |  |
| EN-US06 | Inserir código do recebedor | 3 | 5 |  |  |  |  |  | X |  |
| R-US05 | Dar Nota de 0 a 5 | 3 | 2 | X | X |  |  |  |  |  |
| R-US06 | Deixar Comentário | 3 | 2 | X |  |  |  |  |  | X |
