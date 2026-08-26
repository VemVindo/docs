---
sidebar_position: 2
title: Entregador
---

# Histórias de Usuário — Entregador

Histórias de usuário da persona que executa as entregas, organizadas conforme a jornada do usuário.

## Fazer login

### US01 — Realizar login

**Como** entregador, **quero** realizar login no sistema **para acessar** e gerenciar minhas entregas.

**Critérios de aceite:**

- O sistema deve disponibilizar campos para inserir as credenciais de acesso.
- O sistema deve autenticar o entregador quando as credenciais estiverem corretas.
- Após a autenticação, o entregador deve ser direcionado à área de entregas.
- O sistema deve exibir uma mensagem de erro quando as credenciais forem inválidas.
- O sistema deve impedir o acesso às funcionalidades do entregador quando ele não estiver autenticado.

---

## Realizar entrega

### US02 — Compartilhar localização

**Como** entregador, **quero** compartilhar minha localização durante a entrega **para** permitir o acompanhamento do meu deslocamento.

**Critérios de aceite:**

- O sistema deve solicitar autorização para acessar a localização do dispositivo.
- O compartilhamento deve ocorrer somente após a autorização do entregador.
- A localização deve ser atualizada durante a realização da entrega.
- O sistema deve informar quando não for possível obter a localização.
- O compartilhamento deve ser interrompido quando a entrega for finalizada ou cancelada.

---

### US03 — Visualizar status do pedido

**Como** entregador, **quero** visualizar o status do pedido **para** acompanhar o andamento da entrega e identificar as próximas ações necessárias.

**Critérios de aceite:**

- O sistema deve exibir o status atualizado de cada pedido atribuído ao entregador.
- O status deve ser apresentado de forma clara na tela de detalhes do pedido.
- A informação exibida deve ser atualizada quando o status do pedido for alterado.
- O entregador deve visualizar somente os pedidos atribuídos a ele.
- O sistema deve informar quando não for possível carregar o status do pedido.

---

### US04 — Atualizar status da entrega

**Como** entregador, **quero** atualizar o status da entrega **para** informar o andamento do pedido aos envolvidos.

**Critérios de aceite:**

- O sistema deve permitir que o entregador atualize o status dos pedidos atribuídos a ele.
- O sistema deve apresentar as opções de status disponíveis para a etapa atual da entrega.
- O sistema deve impedir alterações incompatíveis com a sequência prevista para a entrega.
- Após a atualização, o novo status deve ficar visível para os usuários autorizados.
- O sistema deve exibir uma mensagem de confirmação após a atualização.
- O sistema deve exibir uma mensagem de erro quando a atualização não for concluída.

---

### US05 — Emitir alerta de atraso

**Como** entregador, **quero** emitir um alerta de atraso quando algo acontecer no meio do caminho **para** avisar o estabelecimento de que a entrega pode atrasar.

**Critérios de aceite:**

- O sistema deve permitir que o entregador emita um alerta de atraso durante uma entrega em andamento.
- O entregador deve informar o motivo do atraso (ex.: trânsito, problema no veículo, endereço incorreto) e, opcionalmente, uma observação.
- O alerta é sempre emitido pelo entregador; o estabelecimento não emite esse alerta.
- O alerta deve ser vinculado ao pedido correspondente e registrar a data e o horário da emissão.
- Após emitido, o alerta deve ficar visível para o estabelecimento e para o recebedor do pedido.
- O sistema deve confirmar ao entregador que o alerta foi enviado.
- O sistema deve informar quando não for possível enviar o alerta.

---

## Finalizar entrega

### US06 — Inserir código do recebedor

**Como** entregador, **quero** inserir o código informado pelo recebedor **para** confirmar a entrega do pedido com segurança.

**Critérios de aceite:**

- O sistema deve disponibilizar um campo para inserir o código do recebedor.
- O código informado deve ser validado em relação ao pedido correspondente.
- Quando o código estiver correto, o sistema deve permitir a finalização da entrega.
- Quando o código estiver incorreto, o sistema deve informar o erro.
- O sistema deve impedir a finalização da entrega quando o código estiver incorreto.
- Após a validação do código, o status da entrega deve ser atualizado para `Concluída`.
- O sistema deve registrar a data e o horário da finalização.

---

## Comunicar com o estabelecimento

### US07 — Chat em tempo real com o estabelecimento

**Como** entregador, **quero** conversar em tempo real com o estabelecimento responsável pelo pedido **para** esclarecer dúvidas e resolver problemas relacionados à entrega.

**Critérios de aceite:**

- O sistema deve disponibilizar um chat.
- O entregador deve conseguir enviar mensagens ao estabelecimento responsável.
- O entregador deve conseguir receber mensagens do estabelecimento responsável.
- As mensagens devem ser atualizadas em tempo real.
- Cada mensagem deve apresentar a identificação do remetente.
- Cada mensagem deve apresentar o horário de envio.
- O entregador deve receber uma indicação quando houver novas mensagens.
- Somente usuários autorizados e vinculados ao pedido devem acessar a conversa.
- O sistema deve informar quando uma mensagem não puder ser enviada.
