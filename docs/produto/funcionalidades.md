---
sidebar_position: 2
title: Funcionalidades
---

# Funcionalidades

Esta página reúne as funcionalidades previstas para o VemVindo a partir do que foi
levantado na reunião inicial. A lista serve de base para o detalhamento de
requisitos e pode evoluir ao longo do projeto.

## Rastreamento de entregas

Acompanhamento do pedido desde o envio pelo estabelecimento até a entrega ao
destinatário. O destinatário acessa o rastreamento por um link, sem necessidade
de conta.

## Exibição de mapa configurável

A exibição do trajeto é configurável. O estabelecimento pode optar por mostrar o
mapa com a localização ou apenas a estimativa de tempo de chegada. Essa opção
existe porque o uso de APIs de mapa tem custo, e a configuração permite controlar
esse custo conforme a necessidade de cada cliente. Um estudo técnico das APIs de
mapa deve apoiar essa decisão.

## Dashboards e métricas

Painel com indicadores da operação de entregas, incluindo:

- Total de entregas.
- Tempo médio de entrega.
- Distâncias percorridas.

## Avaliação de entregadores

Registro de avaliação e feedback sobre as entregas realizadas, permitindo
acompanhar a qualidade do serviço prestado pela frota.

## Comunicação via WhatsApp

Canal para tratar situações excepcionais durante uma entrega. A partir do
pedido, o estabelecimento abre o WhatsApp já com o telefone do recebedor ou do
entregador e uma mensagem inicial sobre o pedido; o entregador e o recebedor
fazem o mesmo para falar com o estabelecimento. Entregador e recebedor nunca
recebem o telefone um do outro. A conversa usa links `wa.me` e acontece no
WhatsApp de cada um, sem passar pela plataforma. Essa solução substituiu o chat
interno em tempo real e a integração com a Cloud API da Meta, previstos
inicialmente.

## Notificações

Notificações web para informar o andamento e a estimativa de chegada do pedido.
