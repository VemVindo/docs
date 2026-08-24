---
sidebar_position: 3
title: Recebedor
---

# Recebedor (sem login)

Histórias de usuário da persona que acompanha e recebe a entrega, sem criar conta, organizadas pela jornada do usuário a que pertencem.

## Acessar status da entrega

### US01 — Abrir Link sem Login (token)

**Como** recebedor com uma entrega em andamento, **quero** acessar o rastreamento da minha encomenda através de um link seguro com token **para que** eu possa acompanhar a entrega sem precisar criar uma conta ou fazer login na plataforma.

**Critérios de aceitação:**

- O link de acesso contém um token único e criptografado gerado especificamente para o pedido.
- Ao abrir o link, o sistema valida o token e exibe diretamente a página de rastreamento do pedido correspondente.
- O acesso via link expira automaticamente após a conclusão ou cancelamento da entrega.
- A tela apresenta de forma clara o nome do estabelecimento e os dados gerais da encomenda.

---

## Rastrear entrega

### US02 — Ver Status do Pedido

**Como** recebedor, **quero** visualizar o status atualizado do meu pedido **para que** eu saiba em qual etapa da operação a entrega se encontra.

**Critérios de aceitação:**

- A interface exibe claramente o status atual (ex.: "Pendente", "Em andamento", "Finalizado").
- É mostrada uma linha do tempo (timeline) ou histórico com as principais etapas e seus respectivos horários (ex.: pedido criado, atribuído ao entregador, a caminho, entregue).
- A página atualiza o status de forma ágil sempre que houver mudança operacional na loja ou com o entregador.

### US03 — Ver Localização do Entregador

**Como** recebedor, **quero** visualizar a localização do entregador em tempo real num mapa **para que** eu saiba exatamente quando ele vai chegar ao meu endereço.

**Critérios de aceitação:**

- Quando habilitado pelo estabelecimento, o mapa exibe a posição estimada ou em tempo real do entregador em direção ao destino.
- O painel exibe a distância restante e a estimativa de tempo de chegada (ETA) atualizada.
- Caso o estabelecimento opte por não exibir o mapa, o sistema apresenta de forma limpa apenas o tempo estimado de chegada.

### US04 — Notificação de Status

**Como** recebedor, **quero** receber avisos visuais na tela de rastreamento sobre mudanças importantes no pedido **para que** eu não precise ficar atualizando a página o tempo todo.

**Critérios de aceitação:**

- A interface emite alertas visuais (notificações toast ou banners) quando o pedido muda para "Em andamento" ou quando o entregador está próximo.
- A página indica de forma amigável se a conexão de rastreamento em tempo real sofrer interrupções temporárias.

---

## Avaliar atendimento

### US05 — Dar Nota de 0 a 5

**Como** recebedor, **quero** atribuir uma nota de 0 a 5 estrelas à entrega concluída **para que** eu possa expressar meu nível de satisfação com o serviço prestado.

**Critérios de aceitação:**

- O componente de avaliação fica disponível na tela de rastreamento logo após o pedido ser marcado como "Finalizado".
- É possível selecionar uma pontuação inteira de 0 a 5 estrelas.
- Após o envio, a nota é registrada e vinculada ao entregador e ao histórico do pedido no painel da empresa.

### US06 — Deixar Comentário

**Como** recebedor, **quero** escrever um comentário opcional junto à minha avaliação **para que** eu possa detalhar elogios ou relatar pontos de melhoria sobre a entrega.

**Critérios de aceitação:**

- O formulário de comentário aparece logo após o envio da nota de estrelas.
- O campo aceita texto livre com limite adequado de caracteres para o feedback descritivo.
- O comentário é salvo e integrado à página de comentários agregados e ao perfil de desempenho do entregador no painel do estabelecimento.