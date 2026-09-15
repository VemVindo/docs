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

## Modelo de dados (MER)

O modelo entidade-relacionamento abaixo é a referência da estrutura do banco.

![Modelo entidade-relacionamento do VemVindo](/img/MER.png)

Pontos que orientam a implementação:

- O `Entregador` é identificado pelo CPF (chave primária); não há id interno. As
  tabelas que o referenciam (`Contrato`, `Pedido`, `HistoricoPedidoEntregadores`)
  usam a coluna `cpf_entregador`, deixando-a separada do CNPJ/CPF do
  estabelecimento, que vive só na tabela `Empresa`.
- O vínculo entre `Empresa` e `Entregador` é N:N pela tabela `Contrato`: um mesmo
  entregador pode estar vinculado a mais de uma empresa. Por isso `Entregador`
  não guarda a empresa diretamente.
- Um `Contrato` com `data_fim` em aberto representa um vínculo ativo; preencher a
  `data_fim` encerra o vínculo daquele estabelecimento sem afetar os demais.
