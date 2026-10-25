---
sidebar_position: 2
title: Requisitos funcionais
---

# Requisitos funcionais

Lista inicial de requisitos funcionais derivada da reunião de levantamento. Os
identificadores (RF) servem de referência e a lista será refinada ao longo do
projeto.

| ID | Requisito |
| --- | --- |
| RF01 | O estabelecimento deve cadastrar entregas na plataforma. |
| RF02 | O sistema deve permitir originar entregas a partir da integração com o sistema de gestão do cliente. |
| RF03 | O entregador deve atualizar o andamento da entrega. |
| RF04 | O destinatário deve acompanhar o pedido por um link, sem criar conta. |
| RF05 | O acesso ao acompanhamento deve ser protegido por código vinculado ao número do pedido. |
| RF06 | O sistema deve exibir o trajeto em mapa ou apenas a estimativa de chegada, conforme configuração do estabelecimento. |
| RF07 | O sistema deve apresentar dashboards com total de entregas, tempo médio e distâncias. |
| RF08 | O destinatário deve poder avaliar o entregador ao final da entrega. |
| RF09 | O sistema deve oferecer um canal de comunicação para contingências pelo WhatsApp, por links `wa.me` que abrem a conversa com a outra parte do pedido, sem expor o telefone do recebedor ao entregador nem o do entregador ao recebedor. |
| RF10 | O sistema deve enviar notificações web sobre o andamento e a estimativa de chegada. |
| RF11 | O sistema deve isolar os dados de cada estabelecimento (multitenant). |

## Rastreabilidade

Situação em 25/10/2026. O detalhe de cada história está em
[Situação das histórias](../gestao/situacao-das-historias.md) e as rotas em
[Referência da API](../arquitetura/referencia-da-api.md).

| RF | Histórias | Onde está no código (backend) | Situação |
|---|---|---|---|
| RF01 | E-US07 | `src/pedido` | API pronta; tela em PR (#24) |
| RF02 | E-US12 | `src/integracao` | API pronta, sem tela |
| RF03 | EN-US02, EN-US04, EN-US06 | `src/pedido`, `src/mapa` | pronto |
| RF04 | R-US01, R-US02 | `src/rastreio` | pronto |
| RF05 | R-US01, EN-US06 | `src/rastreio` | atendido de outra forma: o acesso é por token aleatório no link; o código de 6 dígitos confirma a entrega na finalização |
| RF06 | R-US03, E-US13 | `src/mapa`, `src/empresa` (configuração `exibirMapa`) | pronto |
| RF07 | E-US14, E-US18 | PRs #50 e #48 | em PR |
| RF08 | R-US05, R-US06, E-US17 | `src/avaliacao` | pronto |
| RF09 | E-US19, E-US20, EN-US07 | `src/pedido/whatsapp.ts` | pronto, com links `wa.me` |
| RF10 | R-US04 | `src/rastreio/rastreio.gateway.ts` | pronto: aviso na página de rastreio pelo Socket.IO, sem notificação push do navegador |
| RF11 | todas | `empresaId` do token em todos os repositories | pronto |
