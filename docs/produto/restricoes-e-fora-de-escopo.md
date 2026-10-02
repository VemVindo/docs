---
sidebar_position: 3
title: Restrições e fora de escopo
---

# Restrições e fora de escopo

Para manter o foco do produto e caber no prazo do projeto, alguns pontos foram
definidos como fora de escopo ou como restrições conhecidas.

## Fora de escopo

- **Chat interno em tempo real**: a conversa entre as partes acontece pelo
  WhatsApp, integrado à plataforma, e não por um chat próprio.
- **Alerta de atraso pelo entregador**: removido do escopo na versão 3.0 da
  divisão de histórias (02/10/2026).
- **Processamento de pagamentos**: a plataforma não processa pagamentos das
  entregas nem intermedia valores entre estabelecimento e cliente.
- **Interconexão entre frotas**: não há compartilhamento de entregadores ou
  veículos entre estabelecimentos diferentes. Cada cliente opera sua frota
  exclusiva.

## Restrições

- **Prazo de entrega**: o desenvolvimento acontece em 3 sprints de 1 semana, de
  05/10/2026 a 26/10/2026, com code freeze em 22/10/2026. O prazo orienta a
  priorização das funcionalidades e levou à retirada do alerta de atraso
  emitido pelo entregador.
- **WhatsApp Business Platform**: a comunicação de contingência depende da
  verificação da conta Meta Business e da aprovação dos modelos de mensagem. Fora
  da janela de 24h da Meta, só mensagens modelo aprovadas podem ser enviadas.
- **Custo das APIs de mapa**: o uso de APIs de mapa tem custo associado. A
  exibição de mapa é configurável e depende de um estudo técnico para equilibrar
  experiência e custo.
- **Aplicação web**: o produto é entregue como aplicação web (frontend em Next.js
  e backend em NestJS).
