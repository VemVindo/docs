---
sidebar_position: 3
title: Requisitos não funcionais
---

# Requisitos não funcionais

Requisitos não funcionais derivados da reunião de levantamento (RNF01 a RNF07)
e acrescentados durante a implementação (RNF08 em diante).

| ID | Requisito |
| --- | --- |
| RNF01 | A plataforma deve ser multitenant, com isolamento de dados entre estabelecimentos. |
| RNF02 | O acesso a dados deve respeitar o estabelecimento dono da informação em todas as camadas. |
| RNF03 | A comunicação entre as partes deve preservar a privacidade, sem expor contatos diretamente entre destinatário e entregador. |
| RNF04 | O custo com APIs de mapa deve ser controlado, com exibição configurável entre mapa e estimativa de chegada. |
| RNF05 | O produto deve ser uma aplicação web, com frontend em Next.js e backend em NestJS. |
| RNF06 | As interfaces devem ser usáveis pelos três perfis, incluindo o destinatário sem conta. |
| RNF07 | O projeto deve ser entregue em 26/10/2026, com code freeze em 22/10/2026. |

## Como cada requisito é atendido

| RNF | Implementação | Verificação |
|---|---|---|
| RNF01, RNF02 | `empresaId` sai do token e filtra toda consulta; recurso de outra empresa responde 404 | testes unitários dos repositories e e2e com duas empresas do seed |
| RNF03 | links `wa.me` montados no backend; recebedor e entregador não recebem o telefone um do outro | testes de `whatsapp.spec.ts` e `pedido.conversa.spec.ts` |
| RNF04 | rota recalculada só na primeira posição, depois de 5 minutos, ou depois de 1 minuto com 50 m andados; estimativa em linha reta sem chave do Google; mapa desligável por empresa | testes de `localizacao.service.spec.ts` |
| RNF05 | Next.js 16 e NestJS 11 | build das imagens no CI |
| RNF06 | página de rastreio sem login; componentes testados por papel e rótulo acessível | testes de componente no Vitest |
| RNF07 | code freeze em 22/10 e entrega em 26/10 | [Cronograma](../gestao/cronograma-e-proximos-passos.md) |

## Requisitos acrescentados na implementação

| ID | Requisito | Valor implementado |
|---|---|---|
| RNF08 | Limitar tentativas nas rotas sensíveis | 100 req/min por IP no geral; 5/min em login, cadastro e troca de senha; 10/min em cadastro e convite de entregador e no envio de avaliação |
| RNF09 | Proteger a finalização da entrega contra tentativa e erro | 5 códigos errados bloqueiam a finalização por 15 minutos |
| RNF10 | Atualizar a posição do entregador sem sobrecarregar a API | no máximo uma posição a cada 2 segundos por entrega |
| RNF11 | Expirar credenciais provisórias | senha temporária vale 48 horas; prazo de avaliação de 7 dias |
| RNF12 | Não guardar segredo em texto puro | senhas com bcrypt (custo 12); token de rastreio e chave de integração só como SHA-256 |
| RNF13 | Não deixar a qualidade cair entre PRs | CI bloqueia o merge se lint, tipos, testes, migrations ou segurança falharem, ou se a cobertura cair mais de 1 ponto |

Detalhes em [Integração e segurança](../arquitetura/integracao-e-seguranca.md)
e [Pipeline de CI/CD](../qualidade/pipeline-ci-cd.md).
