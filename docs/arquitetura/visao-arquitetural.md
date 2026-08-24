---
sidebar_position: 1
title: Visão arquitetural
---

# Visão arquitetural

## Stack

O VemVindo é uma aplicação web dividida em dois repositórios de código:

- **Frontend**: construído com Next.js, responsável pelas interfaces do
  estabelecimento, do entregador e do rastreamento acessado pelo destinatário.
- **Backend**: construído com NestJS, responsável pelas regras de negócio, pela
  persistência dos dados e pela exposição das APIs consumidas pelo frontend e
  pela integração com sistemas dos clientes.

A documentação do projeto fica em um terceiro repositório (`docs`).

## Modelo multitenant

A plataforma atende múltiplos estabelecimentos na mesma instância. O modelo é
multitenant com isolamento de dados: cada estabelecimento enxerga apenas suas
próprias entregas, entregadores e métricas. Nenhum dado de um cliente é acessível
a outro.

O isolamento por tenant é uma decisão arquitetural central e precisa ser
respeitada em todas as camadas: autenticação, consultas ao banco, APIs e
integrações.

## Componentes principais

- **Gestão de entregas**: cadastro, atualização de status e histórico das
  entregas.
- **Rastreamento público**: acesso do destinatário ao andamento por link, sem
  autenticação por conta.
- **Métricas**: agregação dos dados de entrega para os dashboards.
- **Comunicação**: chat de contingência entre as partes envolvidas na entrega.
- **Integração**: endpoint para comunicação com o sistema de gestão do cliente.
