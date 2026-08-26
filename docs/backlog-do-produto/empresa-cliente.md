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

- O cadastro pode ser feito por CNPJ (empresas) ou por CPF (produtores menores).
- O formulário solicita: nome fantasia, documento (CNPJ ou CPF), e-mail, telefone e endereço completo (CEP, logradouro, número, complemento, bairro, cidade, UF); a razão social é obrigatória apenas quando o cadastro é por CNPJ.
- O documento informado (CNPJ ou CPF), o e-mail e o telefone são validados quanto ao formato; documento e e-mail devem ser únicos na plataforma.
- Nenhum campo obrigatório pode ser salvo em branco (complemento é opcional).

### US02 — Visualizar Info Empresariais

**Como** dono do estabelecimento, **quero** visualizar as informações cadastradas
da minha empresa **para que** eu confira se os dados estão corretos e atualizados.

**Critérios de aceitação:**

- A tela exibe, em modo somente-leitura: nome fantasia, razão social (quando houver), documento (CNPJ ou CPF), e-mail, telefone e endereço completo.
- São exibidas as datas de criação e da última atualização do cadastro.

### US03 — Editar Info Empresariais

**Como** dono do estabelecimento, **quero** editar as informações da minha empresa
**para que** os dados reflitam mudanças de endereço, contato ou nome.

**Critérios de aceitação:**

- São editáveis: nome fantasia, e-mail, telefone e endereço completo; o documento (CNPJ ou CPF) e a razão social são somente-leitura.
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
- Uma senha temporária do perfil do entregador vai ser gerada após o cadastro, e após o acesso da plataforma ele vai conseguir alterar a senha.

### US05 — Visualizar Frota (total)

**Como** dono do estabelecimento, **quero** visualizar todos os entregadores
vinculados **para que** eu tenha a visão completa da minha frota.

**Critérios de aceitação:**

- A lista exibe, por entregador: nome, tipo de veículo e situação de trabalho no dia (online/offline).
- É apresentado o total de entregadores vinculados.
- Apenas entregadores do estabelecimento do dono autenticado são listados.

### US06 — Remover Entregador

**Como** dono do estabelecimento, **quero** remover um entregador
**para que** ele deixe de fazer parte da frota e de receber novas entregas.

**Critérios de aceitação:**

- A ação exige confirmação explícita antes de ser aplicada.
- Ao remover um entregador com entregas em andamento, os pedidos são reatribuídos automaticamente a outro entregador online e disponível.
- Após a remoção, o entregador não aparece mais na frota, não recebe novas atribuições e perde o acesso via login.
- O vínculo é encerrado, preservando o histórico de entregas já realizadas.
- Com o vínculo encerrado, o CPF fica livre para ser cadastrado por outra empresa.

---

## Gerenciar pedidos

### US07 — Cadastrar Novo Pedido

**Como** dono do estabelecimento, **quero** cadastrar um novo pedido **para que**
ele entre na fila para ser atribuído a um entregador.

**Critérios de aceitação:**

- O formulário solicita: nome do recebedor, telefone do recebedor, endereço de entrega completo, descrição/itens do pedido e observações (opcional).
- Endereço de entrega e contato do recebedor são obrigatórios.
- O pedido é criado com status inicial "Pendente", é calculado o valor da entrega e data/hora de criação.
- Opcionalmente, é possível atribuir um entregador online e disponível já no momento da criação do pedido; quando atribuído na criação, o pedido entra como "Em andamento" em vez de "Pendente".
- Ao concluir, o pedido aparece na lista de pedidos ativos.

### US08 — Atribuir Entrega a Entregador

**Como** dono do estabelecimento, **quero** atribuir um pedido a um entregador
disponível **para que** a entrega seja iniciada.

**Critérios de aceitação:**

- Só é possível selecionar entregadores online e disponíveis da frota.
- O entregador atribuído é notificado do novo pedido.
- Um pedido já finalizado não pode ser atribuído.

### US09 — Visualizar Pedidos Ativos

**Como** dono do estabelecimento, **quero** visualizar os pedidos ativos **para que**
eu acompanhe as entregas em andamento.

**Critérios de aceitação:**

- A lista exibe apenas pedidos com status "Pendente" ou "Em andamento".
- Cada item mostra: identificador do pedido, recebedor, entregador (quando houver), status atual e data/hora de criação.
- A lista permite abrir o detalhe de cada pedido.

### US10 — Visualizar Pedidos Finalizados

**Como** dono do estabelecimento, **quero** visualizar os pedidos finalizados
**para que** eu consulte o histórico de entregas concluídas.

**Critérios de aceitação:**

- A lista exibe apenas pedidos com status "Finalizado" (ou "Cancelado", quando houver).
- Cada item mostra: identificador do pedido, recebedor, entregador responsável, valor da entrega, data/hora de conclusão e avaliação recebida (quando houver).
- É possível filtrar por período (data inicial e final).

### US11 — Reatribuir Entregador

**Como** dono do estabelecimento, **quero** reatribuir um pedido a outro entregador
**para que** a entrega continue caso o entregador original fique indisponível.

**Critérios de aceitação:**

- A reatribuição só é permitida para pedidos com status "Em andamento" ou "Pendente".
- O novo entregador deve estar online e disponível.
- A troca registra entregador anterior, novo entregador e data/hora, preservando o histórico da atribuição anterior.
- Entregador anterior e novo entregador são notificados da mudança.

### US12 — Importar Pedido via Endpoint

**Como** dono do estabelecimento com sistema próprio, **quero** importar pedidos por
um endpoint de integração **para que** meus pedidos entrem na plataforma sem digitação manual.

**Critérios de aceitação:**

- O endpoint exige autenticação (token/chave de API do estabelecimento).
- O payload aceito contém: nome e telefone do recebedor, endereço de entrega completo, descrição/itens e observações (opcional).
- Payloads sem os campos obrigatórios são rejeitados com mensagem de erro descritiva.
- Um pedido válido é criado com status "Pendente" e o endpoint retorna o identificador gerado.

---

## Monitorar entregas

### US13 — Ver Detalhe da Entrega

**Como** dono do estabelecimento, **quero** ver o detalhe de uma entrega específica
**para que** eu acompanhe seu andamento e dados completos.

**Critérios de aceitação:**

- A tela exibe: dados do recebedor, endereço de entrega, entregador responsável, status atual e histórico de mudanças de status com data/hora.
- Quando disponível, exibe a localização atual do entregador e a distância/tempo estimado.
- É possível acessar o detalhe a partir das listas de pedidos ativos e finalizados.

### US14 — Dashboard: Indicadores Operacionais

**Como** dono do estabelecimento, **quero** visualizar os principais indicadores operacionais no dashboard, **para que** eu possa avaliar a agilidade, o volume, a satisfação dos recebedores, o esforço logístico e o desempenho geral da operação.

**Critérios de aceitação:**

- Todos os indicadores devem respeitar o período selecionado pelo usuário.
- Todos os indicadores devem considerar apenas dados do estabelecimento pertencente ao dono autenticado.
- Todos os indicadores devem considerar apenas entregas finalizadas, exceto quando especificado de outra forma.
- O dashboard deve apresentar o tempo médio de entrega, calculado a partir do intervalo entre a atribuição e a conclusão de cada entrega finalizada.
- Quando não houver entregas no período, o indicador de tempo médio deve apresentar estado vazio, sem gerar erro.
- O dashboard deve apresentar o total de entregas finalizadas no período, exibido como número inteiro.
- O dashboard deve apresentar a avaliação média das entregas avaliadas no período, considerando notas de 0 a 5 e exibindo o resultado com uma casa decimal.
- Entregas sem avaliação não devem ser consideradas no cálculo da avaliação média.
- O dashboard deve apresentar a distância total percorrida nas entregas finalizadas, exibida em quilômetros.
- Quando não houver dados de distância, o indicador deve apresentar estado vazio, sem gerar erro.
- O dashboard deve apresentar a taxa de entregas concluídas em relação ao total de entregas atribuídas ou iniciadas no período.
- O dashboard deve apresentar a quantidade de entregas em andamento.
- O dashboard deve apresentar a quantidade e a taxa de entregas canceladas no período.
- O dashboard deve apresentar a quantidade de entregas por período, permitindo identificar variações no volume operacional.
- O dashboard deve apresentar a distribuição das entregas por status, como pendente, atribuída, em andamento, concluída e cancelada.
- O dashboard deve apresentar a quantidade de entregas realizadas por cada entregador, valor médio recebido por entrega e quanto o entregador produziu no período.
- O dashboard deve apresentar a média de avaliações recebidas e, quando aplicável, a distribuição das notas atribuídas.
- O dashboard deve permitir comparar os principais indicadores com períodos anteriores.
- Todos os indicadores devem ser atualizados de acordo com os filtros selecionados pelo usuário.
- Nenhum indicador deve apresentar dados pertencentes a outros estabelecimentos.
- Quando não houver dados suficientes para o cálculo de um indicador, o dashboard deve apresentar um estado vazio ou uma mensagem apropriada, sem gerar erros.

---

### US15 — Configuração de Parâmetros de Remuneração

**Como** dono do estabelecimento,
**quero** configurar e editar a taxa fixa e o coeficiente por km rodado usados no cálculo de pagamento dos motoboys,
**para que** eu possa ajustar a remuneração conforme a realidade do negócio.

**Critérios de aceitação:**

- É possível cadastrar/editar o valor da taxa fixa por entrega.
- É possível cadastrar/editar o coeficiente que multiplica o km rodado.
- Alterações nos valores não afetam entregas já calculadas anteriormente, apenas as futuras.
- O sistema valida que os valores informados sejam numéricos e positivos.
- Apenas o dono do estabelecimento pode alterar esses parâmetros.

---

### US16 — Cálculo de Ganhos por Entrega

**Como** sistema,
**quero** calcular automaticamente o valor a receber pelo motoboy em cada entrega finalizada,
**para que** o dono tenha o valor correto sem precisar calcular manualmente.

**Critérios de aceitação:**

- O cálculo segue a fórmula: `taxa fixa + (coeficiente × km rodado)`.
- O cálculo usa a distância registrada da entrega.
- O valor calculado é vinculado à entrega e ao motoboy responsável.
- O cálculo utiliza os parâmetros vigentes no momento da conclusão da entrega.
- Entregas canceladas ou não finalizadas não geram valor a receber.

---

## Visualizar desempenho

### US17 — Página de Comentários (agregada)

**Como** dono do estabelecimento, **quero** visualizar uma página com os comentários
agregados dos recebedores **para que** eu entenda a percepção geral do atendimento.

**Critérios de aceitação:**

- Cada comentário exibe: nota atribuída, texto do comentário, data e entregador relacionado à entrega.
- A lista é ordenada da avaliação mais recente para a mais antiga.
- É possível filtrar por nota (ex.: apenas 1 e 2 estrelas) e por período.

### US18 — Visualizar Desempenho do Entregador

**Como** dono do estabelecimento, **quero** visualizar o desempenho de um entregador
**para que** eu identifique quem se destaca ou precisa de apoio.

**Critérios de aceitação:**

- O painel individual exibe: total de entregas, tempo médio de entrega, avaliação média e distância percorrida.
- Os indicadores respeitam o período selecionado.
- Considera apenas entregas realizadas pelo entregador dentro do estabelecimento.

---

## Chat em tempo real

### US19 — Chat RT: Recebedor com Estabelecimento

**Como** dono do estabelecimento, **quero** conversar em tempo real com o recebedor
**para que** eu esclareça dúvidas sobre a entrega rapidamente.

**Critérios de aceitação:**

- A conversa é vinculada a um pedido específico.
- Cada mensagem registra autor, conteúdo e data/hora de envio.
- As mensagens aparecem em tempo real para ambos os participantes, com indicação de mensagens não lidas.
- O histórico da conversa é deletado após a conclusão da entrega.

### US20 — Chat RT: Estabelecimento com Entregador

**Como** dono do estabelecimento, **quero** conversar em tempo real com o entregador
**para que** eu coordene a entrega e resolva imprevistos.

**Critérios de aceitação:**

- A conversa é vinculada ao pedido/entrega em andamento e ao entregador responsável.
- Cada mensagem registra autor, conteúdo e data/hora de envio.
- As mensagens aparecem em tempo real para ambos os participantes, com indicação de mensagens não lidas.
- O histórico da conversa é deletado após a conclusão da entrega.
