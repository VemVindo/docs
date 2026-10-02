---
sidebar_position: 1
title: Cronograma e próximos passos
---

# Cronograma e próximos passos

## Horizonte do projeto

O desenvolvimento acontece em 3 sprints de 1 semana, de 05/10/2026 a 26/10/2026.
O code freeze é na quinta, 22/10/2026, e a entrega na segunda, 26/10/2026. São
32 itens de backlog somando 157 pontos; a distribuição por integrante está em
[Divisão de histórias](./divisao-de-historias.md).

## Sprints

| Sprint | Datas | Objetivo | US | Pts | Reunião |
|---|---|---|---|---|---|
| Sprint 1 | 05/10 a 11/10 | Fundação, cadastros e pedidos | E-US01, E-US02, E-US03, E-US04, E-US07, E-US08, E-US09, E-US11, EN-US01, EN-US02, EN-US03, EN-US04 | 57 | sex 09/10 |
| Sprint 2 | 12/10 a 18/10 | Acompanhamento da entrega | E-US05, E-US13, E-US15, E-US16, E-US18, E-US20 + EN-US07, R-US01, R-US02, R-US03, R-US04 | 48 | sex 16/10 |
| Sprint 3 | 19/10 a 25/10 | Pós-entrega, integrações e fechamento | E-US06, E-US10, E-US12, E-US14, E-US17, E-US19, E-US21, EN-US06, R-US05, R-US06 | 52 | sex 23/10 |

### Marcos

| Data | Marco |
|---|---|
| 05/10 (seg) | Início do Sprint 1; duplas fecham contratos de API |
| 09/10 (sex) | Reunião semanal: review do Sprint 1 |
| 12/10 (seg) | Feriado |
| 16/10 (sex) | Reunião semanal: review do Sprint 2 |
| 22/10 (qui) | Code freeze |
| 23/10 (sex) | Homologação e review final |
| 26/10 (seg) | Entrega |

### Quadro por sprint

**Sprint 1 (05/10 a 11/10)**

- Ana (7 pts): E-US08, E-US09, EN-US03 + preparação técnica
- Felipe (9 pts): E-US04, E-US11, EN-US04 + preparação técnica
- Guilherme (11,5 pts): E-US01, E-US02, E-US03, E-US07, E-US08
- Camila (5,5 pts): E-US07, E-US09 + preparação técnica
- Isaque (7,5 pts): E-US11, EN-US02, EN-US04 + preparação técnica
- Luisa (9 pts): E-US04, EN-US01
- Diogo (7,5 pts): E-US01, E-US02, E-US03, EN-US02 + preparação técnica

**Sprint 2 (12/10 a 18/10)**

- Ana (7 pts): E-US15, E-US16, R-US02, R-US04
- Felipe (6,5 pts): E-US13, E-US20 + EN-US07
- Guilherme (5,5 pts): E-US05, E-US15, E-US18
- Camila (8 pts): E-US05, E-US16, E-US18, R-US02
- Isaque (8 pts): E-US20 + EN-US07, R-US03
- Luisa (5 pts): R-US01 + revisão de segurança
- Diogo (8 pts): E-US13, R-US03, R-US04

**Sprint 3 (19/10 a 25/10)**

- Ana (8 pts): E-US10, E-US17, E-US21, R-US05, R-US06
- Felipe (7,5 pts): E-US06, E-US19, R-US05
- Guilherme (5,8 pts): E-US14, E-US21
- Camila (8,3 pts): E-US12, E-US14
- Isaque (6,5 pts): E-US06, E-US19
- Luisa (9 pts): E-US12, EN-US06
- Diogo (6,8 pts): E-US14, E-US17, R-US06

## Riscos

| Risco | Impacto | Resposta |
|---|---|---|
| Escopo completo em 3 semanas | Alto | 157 pts em 3 sprints. Priorizar o fluxo principal; renegociar US de menor impacto na reunião de 16/10 se o S2 fechar abaixo do planejado. |
| Muitas dependências no mesmo sprint | Alto | Contrato de API fechado na segunda, mocks no front, integração diária. |
| Verificação Meta atrasar | Alto | Número de teste da Cloud API; plano B: E-US20 só com mensagens modelo. |
| Custo/limite da API de mapas | Médio | Decisão no spike do Sprint 1; modo somente ETA da R-US03 como fallback. |
| Feriado de 12/10 | Médio | Sprint 2 com 4 dias úteis. |
| Login da empresa sem US própria | Médio | EN-US01 cobre os dois perfis; recomenda-se formalizar uma US. |

## Definição de pronto

- Back + front integrados
- Critérios de aceitação cobertos
- Isolamento por tenant testado
- PR revisado por outro integrante

## Cadência de reuniões

Cada sprint fecha na reunião semanal de sexta, com a review do que foi entregue e
o planejamento do sprint seguinte. Na segunda, as duplas fecham o contrato da API
(rotas e DTOs) das US da semana para que back e front avancem em paralelo. O
acompanhamento com o demandante e mentor técnico segue registrado nas atas.
