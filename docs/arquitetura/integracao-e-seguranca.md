---
sidebar_position: 2
title: Integração e segurança
---

# Integração e segurança

## Integração com o sistema de gestão do cliente

O VemVindo prevê um endpoint de integração para se comunicar com o sistema de
gestão de cada estabelecimento. Por meio dessa integração, as entregas podem ser
originadas a partir dos pedidos já registrados no sistema do cliente, evitando
recadastro manual e mantendo os dados alinhados.

## Acesso do destinatário sem conta

O destinatário acompanha o pedido por um link de rastreamento, sem precisar criar
conta na plataforma. O acesso ao acompanhamento é controlado por códigos de acesso
vinculados ao número do pedido, de forma que apenas quem tem o código correto
consegue visualizar a entrega.

## Privacidade da comunicação

A comunicação entre as partes é intermediada pelo estabelecimento. O contato
direto entre destinatário e entregador não é exposto: a loja atua como
intermediária no fluxo de envio, recebimento e entrega, preservando os dados
pessoais das partes.

## Diretrizes de segurança

- **Isolamento por tenant**: todo acesso a dados respeita o estabelecimento dono
  daquela informação.
- **Códigos de acesso**: o acompanhamento do pedido é protegido por código
  vinculado ao número do pedido.
- **Mínima exposição de dados**: informações de contato das partes não são
  expostas diretamente entre destinatário e entregador.
