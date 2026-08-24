---
sidebar_position: 1
title: Empresa / Cliente
---

# Empresa / Cliente (dono do estabelecimento)

Histórias de usuário da persona responsável pelo estabelecimento, organizadas
pela jornada do usuário a que pertencem.

## Gerenciar perfil

### US01 — Cadastrar Estabelecimento

**Como** dono de um estabelecimento novo na plataforma, **quero** cadastrar meu
estabelecimento **para que** eu possa começar a operar entregas com uma identidade própria.

**Critérios de aceitação:**

- O formulário solicita: nome fantasia, razão social, CNPJ, e-mail, telefone e endereço completo (CEP, logradouro, número, complemento, bairro, cidade, UF).
- CNPJ, e-mail e telefone são validados quanto ao formato; CNPJ e e-mail devem ser únicos na plataforma.
- Nenhum campo obrigatório pode ser salvo em branco (complemento é opcional).
- Ao concluir, o estabelecimento é associado ao usuário dono e ele é levado ao painel autenticado.

### US02 — Visualizar Info Empresariais

**Como** dono do estabelecimento, **quero** visualizar as informações cadastradas
da minha empresa **para que** eu confira se os dados estão corretos e atualizados.

**Critérios de aceitação:**

- A tela exibe, em modo somente-leitura: nome fantasia, razão social, CNPJ, e-mail, telefone e endereço completo.
- São exibidas as datas de criação e da última atualização do cadastro.
- Apenas o dono autenticado acessa os dados do seu próprio estabelecimento.

### US03 — Editar Info Empresariais

**Como** dono do estabelecimento, **quero** editar as informações da minha empresa
**para que** os dados reflitam mudanças de endereço, contato ou nome.

**Critérios de aceitação:**

- São editáveis: nome fantasia, e-mail, telefone e endereço completo; CNPJ e razão social são somente-leitura.
- Os novos valores passam pelas mesmas validações de formato e unicidade do cadastro.
- Ao salvar, a data de última atualização é registrada e as alterações aparecem na visualização.
- É possível cancelar a edição sem alterar os dados atuais.

---

## Gerenciar entregadores

### US04 — Cadastrar Entregador

**Como** dono do estabelecimento, **quero** cadastrar entregadores na minha frota
**para que** eu possa atribuir pedidos a eles. O entregador não se cadastra na
plataforma: quem o cadastra é a empresa, e ele apenas realiza login depois.

**Critérios de aceitação:**

- O formulário solicita: nome, CPF, telefone, tipo de veículo (moto, carro, bicicleta) e placa (quando aplicável).
- CPF é validado quanto ao formato e deve ser único na plataforma.
- Ao cadastrar, o perfil de entregador é criado e vinculado ao estabelecimento no mesmo passo (o vínculo só ocorre no cadastro).
- Cada entregador pode estar vinculado a apenas uma empresa; um CPF já cadastrado por outra empresa não pode ser cadastrado novamente.
- Após o cadastro, o entregador consta na frota e passa a poder acessar a plataforma via login.
- **VALIDAR: como a credencial de acesso do entregador é definida no cadastro? (senha gerada pelo sistema / definida pela empresa / primeiro acesso define a senha)**

### US05 — Visualizar Frota (total)

**Como** dono do estabelecimento, **quero** visualizar todos os entregadores
vinculados **para que** eu tenha a visão completa da minha frota.

**Critérios de aceitação:**

- A lista exibe, por entregador: nome, tipo de veículo, status (ativo/inativo) e situação (online/offline).
- É apresentado o total de entregadores vinculados.
- Apenas entregadores do estabelecimento do dono autenticado são listados.

### US06 — Ver Entregadores Online Hoje

**Como** dono do estabelecimento, **quero** ver quais entregadores estão online hoje
**para que** eu saiba quem está disponível para receber entregas agora.

**Critérios de aceitação:**

- A lista mostra apenas entregadores com situação online na data atual.
- Cada item exibe nome, tipo de veículo e horário do último sinal de atividade.
- É apresentada a contagem de entregadores online.

### US07 — Remover / Desativar Entregador

**Como** dono do estabelecimento, **quero** remover ou desativar um entregador
**para que** ele deixe de receber novas entregas quando não faz mais parte da frota.

**Critérios de aceitação:**

- A ação exige confirmação explícita antes de ser aplicada.
- Um entregador com entrega em andamento não pode ser desativado antes da conclusão ou reatribuição do pedido.
- Após desativado, o entregador não aparece como disponível para novas atribuições e perde o acesso via login.
- O vínculo é encerrado, preservando o histórico de entregas já realizadas.
- Com o vínculo encerrado, o CPF fica livre para ser cadastrado por outra empresa.

---

## Gerenciar pedidos

### US08 — Cadastrar Novo Pedido

**Como** dono do estabelecimento, **quero** cadastrar um novo pedido **para que**
ele entre na fila para ser atribuído a um entregador.

**Critérios de aceitação:**

- O formulário solicita: nome do recebedor, telefone do recebedor, endereço de entrega completo, descrição/itens do pedido e observações (opcional).
- Endereço de entrega e contato do recebedor são obrigatórios.
- O pedido é criado com status inicial "Pendente" e data/hora de criação.
- Ao concluir, o pedido aparece na lista de pedidos ativos.

### US09 — Atribuir Entrega a Entregador

**Como** dono do estabelecimento, **quero** atribuir um pedido a um entregador
disponível **para que** a entrega seja iniciada.

**Critérios de aceitação:**

- Só é possível selecionar entregadores ativos e disponíveis da frota.
- Ao atribuir, o pedido muda para o status "Em andamento" e registra o entregador responsável e a data/hora da atribuição.
- O entregador atribuído é notificado do novo pedido.
- Um pedido já finalizado não pode ser atribuído.

### US10 — Visualizar Pedidos Ativos

**Como** dono do estabelecimento, **quero** visualizar os pedidos ativos **para que**
eu acompanhe as entregas em andamento.

**Critérios de aceitação:**

- A lista exibe apenas pedidos com status "Pendente" ou "Em andamento".
- Cada item mostra: identificador do pedido, recebedor, entregador (quando houver), status atual e data/hora de criação.
- A lista permite abrir o detalhe de cada pedido.

### US11 — Visualizar Pedidos Finalizados

**Como** dono do estabelecimento, **quero** visualizar os pedidos finalizados
**para que** eu consulte o histórico de entregas concluídas.

**Critérios de aceitação:**

- A lista exibe apenas pedidos com status "Finalizado" (ou "Cancelado", quando houver).
- Cada item mostra: identificador do pedido, recebedor, entregador responsável, data/hora de conclusão e avaliação recebida (quando houver).
- É possível filtrar por período (data inicial e final).

### US12 — Reatribuir Entregador

**Como** dono do estabelecimento, **quero** reatribuir um pedido a outro entregador
**para que** a entrega continue caso o entregador original fique indisponível.

**Critérios de aceitação:**

- A reatribuição só é permitida para pedidos com status "Em andamento".
- O novo entregador deve estar ativo e disponível.
- A troca registra entregador anterior, novo entregador e data/hora, preservando o histórico da atribuição anterior.
- Entregador anterior e novo entregador são notificados da mudança.

### US13 — Importar Pedido via Endpoint - Empresa??? Sistema?

**Como** dono do estabelecimento com sistema próprio, **quero** importar pedidos por
um endpoint de integração **para que** meus pedidos entrem na plataforma sem digitação manual.

**Critérios de aceitação:**

- O endpoint exige autenticação (token/chave de API do estabelecimento).
- O payload aceito contém: nome e telefone do recebedor, endereço de entrega completo, descrição/itens e observações (opcional).
- Payloads sem os campos obrigatórios são rejeitados com mensagem de erro descritiva.
- Um pedido válido é criado com status "Pendente" e o endpoint retorna o identificador gerado.

---

## Monitorar entregas

### US14 — Ver Detalhe da Entrega

**Como** dono do estabelecimento, **quero** ver o detalhe de uma entrega específica
**para que** eu acompanhe seu andamento e dados completos.

**Critérios de aceitação:**

- A tela exibe: dados do recebedor, endereço de entrega, entregador responsável, status atual e histórico de mudanças de status com data/hora.
- Quando disponível, exibe a localização atual do entregador e a distância/tempo estimado.
- É possível acessar o detalhe a partir das listas de pedidos ativos e finalizados.

### US15 — Dashboard: Tempo Médio

**Como** dono do estabelecimento, **quero** ver o tempo médio de entrega no dashboard
**para que** eu avalie a agilidade da operação.

**Critérios de aceitação:**

- O indicador considera apenas entregas finalizadas, medindo o tempo entre atribuição e conclusão.
- O valor é exibido em unidade legível (minutos/horas) e respeita o período selecionado.
- Quando não há entregas no período, o indicador exibe estado vazio (sem erro).

### US16 — Dashboard: Total de Entregas

**Como** dono do estabelecimento, **quero** ver o total de entregas no dashboard
**para que** eu acompanhe o volume operacional.

**Critérios de aceitação:**

- O indicador conta as entregas finalizadas no período selecionado.
- O valor é exibido como número inteiro.
- O total considera apenas entregas do estabelecimento do dono autenticado.

### US17 — Dashboard: Avaliação Média

**Como** dono do estabelecimento, **quero** ver a avaliação média no dashboard
**para que** eu meça a satisfação dos recebedores.

**Critérios de aceitação:**

- O indicador calcula a média das notas (0 a 5) das entregas avaliadas no período.
- O valor é exibido com uma casa decimal.
- Entregas sem avaliação não entram no cálculo.

### US18 — Dashboard: Distância Percorrida

**Como** dono do estabelecimento, **quero** ver a distância percorrida no dashboard
**para que** eu dimensione o esforço logístico da operação.

**Critérios de aceitação:**

- O indicador soma as distâncias das entregas finalizadas no período.
- O valor é exibido em quilômetros.
- Quando não há dados de distância, o indicador exibe estado vazio.

---

## Visualizar desempenho

### US19 — Página de Comentários (agregada)

**Como** dono do estabelecimento, **quero** visualizar uma página com os comentários
agregados dos recebedores **para que** eu entenda a percepção geral do atendimento.

**Critérios de aceitação:**

- Cada comentário exibe: nota atribuída, texto do comentário, data e entregador relacionado à entrega.
- A lista é ordenada da avaliação mais recente para a mais antiga.
- É possível filtrar por nota (ex.: apenas 1 e 2 estrelas) e por período.

### US20 — Visualizar Desempenho do Entregador

**Como** dono do estabelecimento, **quero** visualizar o desempenho de um entregador
**para que** eu identifique quem se destaca ou precisa de apoio.

**Critérios de aceitação:**

- O painel individual exibe: total de entregas, tempo médio de entrega, avaliação média e distância percorrida.
- Os indicadores respeitam o período selecionado.
- Considera apenas entregas realizadas pelo entregador dentro do estabelecimento.

---

## Chat em tempo real

### US21 — Chat RT: Recebedor com Estabelecimento

**Como** dono do estabelecimento, **quero** conversar em tempo real com o recebedor
**para que** eu esclareça dúvidas sobre a entrega rapidamente.

**Critérios de aceitação:**

- A conversa é vinculada a um pedido específico.
- Cada mensagem registra autor, conteúdo e data/hora de envio.
- As mensagens aparecem em tempo real para ambos os participantes, com indicação de mensagens não lidas.
- **VALIDAR:** O histórico da conversa fica acessível pelo detalhe do pedido .

### US22 — Chat RT: Estabelecimento com Entregador

**Como** dono do estabelecimento, **quero** conversar em tempo real com o entregador
**para que** eu coordene a entrega e resolva imprevistos.

**Critérios de aceitação:**

- A conversa é vinculada ao pedido/entrega em andamento e ao entregador responsável.
- Cada mensagem registra autor, conteúdo e data/hora de envio.
- As mensagens aparecem em tempo real para ambos os participantes, com indicação de mensagens não lidas.
- O histórico da conversa fica acessível pelo detalhe da entrega.
