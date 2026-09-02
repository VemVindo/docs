---
sidebar_position: 4
title: Orçamento
---

# Orçamento do Projeto

## 1. Visão Geral

Este documento apresenta a estimativa de custos relacionados ao desenvolvimento, implantação e operação do **VemVindo**.

O VemVindo é uma aplicação web no modelo **SaaS B2B multitenant**, voltada para o rastreamento de entregas realizadas por estabelecimentos comerciais com frota própria.

O orçamento considera os recursos atualmente utilizados pela equipe e também identifica custos que ainda dependem de decisões técnicas futuras, como infraestrutura de produção, banco de dados e serviços de mapas.

Como o projeto está sendo desenvolvido por estudantes, o custo financeiro de mão de obra será considerado, nesta etapa, como **R$ 0,00**.

---

## 2. Premissas do Orçamento

| Premissa                         | Valor                |
| -------------------------------- | -------------------- |
| Período estimado do projeto      | 4 meses              |
| Quantidade de integrantes        | 7 estudantes         |
| Custo de mão de obra considerado | R$ 0,00              |
| Moeda utilizada                  | Real Brasileiro (R$) |
| Data de referência               | 02/09/2026           |
| Modelo do produto                | SaaS B2B multitenant |
| Aplicação                        | Web                  |

Os valores representam o estado atual do projeto e deverão ser atualizados conforme novas tecnologias, serviços e recursos de infraestrutura forem definidos.

---

## 3. Custo de Desenvolvimento

O desenvolvimento do VemVindo é realizado por uma equipe composta por sete estudantes.

Embora exista esforço de desenvolvimento, documentação, gestão, testes e arquitetura, nesta etapa o projeto não considera remuneração dos integrantes da equipe.

| Recurso                   |   Quantidade | Valor/hora considerado |       Custo |
| ------------------------- | -----------: | ---------------------: | ----------: |
| Equipe de desenvolvimento | 7 estudantes |                R$ 0,00 |     R$ 0,00 |
| **Total**                 |        **7** |                        | **R$ 0,00** |

### 3.1 Cenário de referência com desenvolvedores júnior

Pode-se estimar o custo equivalente caso o desenvolvimento fosse realizado por uma equipe profissional composta por desenvolvedores de nível júnior.

O cálculo pode ser realizado considerando:

```text
Custo de desenvolvimento =
Quantidade de desenvolvedores × Horas trabalhadas × Valor médio da hora
```

Considerando os sete integrantes atuais e duas horas diárias:

| Recurso                | Quantidade | Horas estimadas | Valor/hora de referência | Custo estimado   |
| ---------------------- | ---------: | --------------: | -----------------------: | ---------------: |
| Desenvolvedores júnior |          7 |             160 |                 R$ 34,25 |      R$ 5.480,00 |
| **Total estimado**     |      **7** |       **1.120** |                          | **R$ 38.360,00** |

> **Referência**: remuneração mensal mediana de [Desenvolvedor Full-Stack Júnior, segundo o Guia Salarial Robert Half 2026](https://www.roberthalf.com/br/pt/vagas-detalhes/desenvolvedora-full-stack-junior#salaryresults): R$ 6.850,00/mês. Considerando uma jornada de 40 horas semanais (200 horas mensais segundo o TST), obtém-se um valor de referência de R$ 34,25/h. Acesso em: 30/08/2026.

### 3.2 Esforço da equipe

Apesar de o custo financeiro ser considerado zero, o esforço empregado no projeto deve ser acompanhado separadamente.

O esforço pode ser registrado por meio da seguinte relação:

```text
Esforço total = soma das horas trabalhadas pelos integrantes
```

Em versões futuras deste orçamento, as horas registradas poderão ser utilizadas para estimar também o **valor econômico da mão de obra**, mesmo que não exista pagamento efetivo à equipe.

---

## 4. Tecnologias e Ferramentas de Desenvolvimento

As principais tecnologias atualmente identificadas nos repositórios do projeto são apresentadas a seguir.

| Tecnologia/Ferramenta | Utilização                     | Licenciamento/Categoria                | Custo atual |
| --------------------- | ------------------------------ | -------------------------------------- | ----------: |
| GitHub                | Versionamento e colaboração    | Plano gratuito / repositórios públicos |     R$ 0,00 |
| Node.js               | Ambiente de execução           | Open Source                            |     R$ 0,00 |
| TypeScript            | Linguagem utilizada no projeto | Open Source                            |     R$ 0,00 |
| Next.js               | Framework do frontend          | Open Source                            |     R$ 0,00 |
| React                 | Biblioteca de interface        | Open Source                            |     R$ 0,00 |
| Tailwind CSS          | Estilização do frontend        | Open Source                            |     R$ 0,00 |
| NestJS                | Framework do backend           | Open Source                            |     R$ 0,00 |
| Jest                  | Testes automatizados           | Open Source                            |     R$ 0,00 |
| Supertest             | Testes de APIs                 | Open Source                            |     R$ 0,00 |
| ESLint                | Análise estática de código     | Open Source                            |     R$ 0,00 |
| Prettier              | Padronização e formatação      | Open Source                            |     R$ 0,00 |
| Docusaurus            | Documentação do projeto        | Open Source                            |     R$ 0,00 |
| **Total atual**       |                                |                                        | **R$ 0,00** |

---

## 5. Versionamento, CI/CD e Documentação

O projeto utiliza uma organização no GitHub com três repositórios principais:

* `frontend`: aplicação web desenvolvida em Next.js;
* `backend`: API desenvolvida em NestJS;
* `docs`: documentação desenvolvida utilizando Docusaurus.

A documentação possui um pipeline automatizado que realiza o build e a publicação utilizando **GitHub Actions** e **GitHub Pages**.

| Serviço        | Finalidade                     | Situação atual |       Custo |
| -------------- | ------------------------------ | -------------- | ----------: |
| GitHub         | Hospedagem dos repositórios    | Em uso         |     R$ 0,00 |
| GitHub Actions | Build e deploy da documentação | Em uso         |     R$ 0,00 |
| GitHub Pages   | Hospedagem da documentação     | Em uso         |     R$ 0,00 |
| **Total**      |                                |                | **R$ 0,00** |

O custo atual é zero considerando a utilização dos recursos gratuitos disponíveis para os repositórios públicos do projeto.

---

## 6. Infraestrutura

A infraestrutura necessária para disponibilizar o VemVindo em um ambiente de produção ainda não está completamente definida.

A arquitetura exige, no mínimo, hospedagem para o frontend, backend e mecanismo de persistência de dados.

| Recurso                 | Finalidade                                  | Situação  | Custo estimado     |
| ----------------------- | ------------------------------------------- | --------- | -----------------: |
| GitHub Pages            | Documentação                                | Definido  |        R$ 0,00/mês |
| Hospedagem do frontend  | Aplicação Next.js                           | A definir |          A definir |
| Hospedagem do backend   | Aplicação NestJS                            | A definir |          A definir |
| Banco de dados          | Persistência dos dados                      | A definir |          A definir |
| Domínio personalizado   | Endereço público do sistema                 | A definir |          A definir |

### 6.3 Hospedagem do Banco de Dados

Para a persistência dos dados do VemVindo, foram consideradas soluções baseadas em **bancos de dados relacionais**, principalmente PostgreSQL.

As alternativas analisadas representam diferentes modelos de hospedagem:

* **Supabase:** plataforma gerenciada baseada em PostgreSQL, oferecendo também autenticação, armazenamento e APIs;
* **Neon:** PostgreSQL gerenciado e serverless, com cobrança baseada principalmente no consumo;
* **Hospedagem própria em PaaS:** execução de uma instância PostgreSQL em uma plataforma como Railway e Render, dando à equipe maior controle sobre a infraestrutura.

Os preços oficiais são mantidos em dólar, pois podem variar conforme o câmbio. Os valores em reais apresentados são aproximações utilizando uma cotação de referência de aproximadamente **US$ 1,00 = R$ 5,10** em 02/09/2026.  

#### 6.3.1 Supabase

O [Supabase](https://supabase.com/) fornece uma instância de **PostgreSQL gerenciado** e adiciona serviços que podem ser utilizados pela aplicação, como autenticação, armazenamento de arquivos, APIs e recursos em tempo real.

| Plano | Preço base | Banco de dados | Características principais |
| :---: | :--------: | :------------: | :------------------------- |
| [Free](https://supabase.com/pricing)  | US$ 0/mês | 500 MB | PostgreSQL dedicado, 500 MB de banco, 5 GB de transferência e até 2 projetos ativos |
| [Pro](https://supabase.com/pricing) | US$ 25/mês ≈ R$ 127,50/mês | 8 GB incluídos | Backups diários, maior capacidade, suporte por e-mail e recursos destinados a aplicações em produção |

**Estimativa inicial:**

```text
Desenvolvimento: R$ 0,00/mês
Produção: a partir de aproximadamente R$ 127,50/mês
```

#### 6.3.2 Neon PostgreSQL

O [Neon](https://neon.com/) é um serviço de **PostgreSQL gerenciado e serverless**. Seu principal diferencial é permitir que os recursos computacionais do banco diminuam ou sejam desligados automaticamente durante períodos de inatividade.

| Plano | Preço | Armazenamento | Processamento |
| :---: | :---: | :-----------: | :------------ |
| [Free](https://neon.com/pricing) | US$ 0/mês | 0,5 GB por projeto | 100 CU-horas/mês por projeto |
| [Launch](https://neon.com/pricing) | Conforme utilização | US$ 0,35/GB-mês | US$ 0,106 por CU-hora |
| [Scale](https://neon.com/pricing) | Conforme utilização | US$ 0,35/GB-mês | US$ 0,222 por CU-hora |

Uma **Compute Unit (CU)** representa uma unidade de capacidade computacional utilizada pelo banco de dados.

No plano Launch, por exemplo:

```text
Custo mensal =
CU-horas consumidas × US$ 0,106
+ armazenamento utilizado × US$ 0,35/GB
```

O próprio Neon apresenta como exemplo de utilização típica do plano Launch uma aplicação de carga intermitente com aproximadamente 1 GB de dados, resultando em cerca de **US$ 15/mês**, aproximadamente **R$ 76,50/mês**. Esse valor não é uma mensalidade fixa e pode ser menor ou maior conforme o consumo.

**Estimativa inicial:**

```text
Desenvolvimento: R$ 0,00/mês
Produção: variável conforme utilização
Referência inicial: aproximadamente R$ 76,50/mês
```

#### 6.3.3 PostgreSQL hospedado em PaaS

Outra possibilidade é hospedar o PostgreSQL em uma **Platform as a Service (PaaS)**, mantendo o banco integrado à infraestrutura utilizada para executar a aplicação.

Como referência para este modelo, foram consideradas as plataformas [**Railway**](https://railway.com/) e [**Render**](https://render.com/).

Esse modelo pode ser especialmente interessante caso o backend do VemVindo também seja hospedado na mesma plataforma, permitindo centralizar a infraestrutura e utilizar comunicação privada entre os serviços.

##### [Railway](https://railway.com/)

O Railway permite provisionar uma instância PostgreSQL utilizando uma imagem baseada na imagem oficial do PostgreSQL. O banco passa a ser executado como um serviço dentro do projeto, podendo se comunicar com o backend pela rede privada da plataforma.

Diferentemente do Supabase e do Neon, a cobrança do Railway não é diretamente baseada no tamanho do banco ou no número de consultas. O custo considera os recursos computacionais utilizados pelo serviço.

| Recurso | Preço |
| :------ | :---- |
| Memória RAM | US$ 10/GB-mês |
| CPU | US$ 20/vCPU-mês |
| Armazenamento persistente | US$ 0,15/GB-mês |
| Transferência de saída | US$ 0,05/GB |

Os principais planos da plataforma são:

| Plano | Preço mínimo | Utilização incluída |
| :---: | :----------: | :------------------ |
| [Free](https://railway.com/pricing)  | US$ 0/mês | US$ 1 em recursos por mês |
| [Hobby](https://railway.com/pricing) | US$ 5/mês ≈ R$ 25,50/mês | US$ 5 em utilização |
| [Pro](https://railway.com/pricing)   | US$ 20/mês ≈ R$ 102,00/mês | US$ 20 em utilização |

No plano Hobby, caso os serviços consumam menos de US$ 5 durante o mês, o valor cobrado permanece US$ 5. Caso o consumo seja superior, o valor final acompanha o consumo realizado.

O PostgreSQL não possui uma cobrança adicional simplesmente por ser um banco de dados. Ele é tratado como outro serviço da infraestrutura e consome CPU, memória, armazenamento e rede.

Essa alternativa pode se tornar particularmente interessante caso o **backend do VemVindo também seja hospedado no Railway**, permitindo manter aplicação e banco na mesma plataforma e utilizar comunicação por rede privada.

**Estimativa inicial:**

```text
Desenvolvimento: R$ 0,00/mês ou dentro dos limites gratuitos

Produção de baixo consumo: a partir de aproximadamente R$ 25,50/mês

Produção com colaboração e maior capacidade:
a partir de aproximadamente R$ 102,00/mês
```

##### [Render](https://render.com/)

O Render oferece o **Render Postgres**, serviço de PostgreSQL gerenciado integrado à sua plataforma de hospedagem.

A plataforma é responsável pelo provisionamento e gerenciamento da infraestrutura do banco, enquanto a equipe continua utilizando uma instância PostgreSQL convencional para armazenamento e consulta dos dados.

O custo é composto principalmente pela capacidade computacional escolhida para a instância e pelo armazenamento provisionado.

| Recurso | Preço |
| :------ | :---- |
| Instância PostgreSQL básica paga | A partir de US$ 6/mês |
| Armazenamento PostgreSQL | US$ 0,30/GB-mês |
| Transferência privada entre serviços Render na mesma região | Sem cobrança adicional |
| Transferência externa excedente | Conforme utilização |

A menor instância PostgreSQL paga disponibiliza aproximadamente:

| Recurso | Capacidade |
| :------ | :--------- |
| CPU | 0,1 CPU |
| Memória RAM | 256 MB |
| Limite de conexões | Até 100 conexões |

O Render também disponibiliza uma opção gratuita para PostgreSQL, porém ela possui uma limitação importante: **o banco gratuito expira após 30 dias**. Dessa forma, essa opção é mais apropriada para testes e prototipação do que para um ambiente permanente de desenvolvimento ou produção.

| Plano | Preço base | Características |
| :---: | :--------: | :-------------- |
| [Free](https://render.com/pricing) | US$ 0/mês | 256 MB de RAM, 0,1 CPU, até 1 GB de armazenamento e expiração após 30 dias |
| [Menor plano pago](https://render.com/pricing) | US$ 6/mês ≈ R$ 30,60/mês | 256 MB de RAM, 0,1 CPU e execução contínua |

O armazenamento é cobrado separadamente. Considerando, por exemplo, uma instância básica com 1 GB:

```text
Instância PostgreSQL: US$ 6,00/mês

Armazenamento:
1 GB × US$ 0,30 = US$ 0,30/mês

Custo aproximado:
US$ 6,30/mês ≈ R$ 32,13/mês
```

**Estimativa inicial:**

```text
Desenvolvimento/testes temporários: R$ 0,00/mês

Produção de baixo consumo:
a partir de aproximadamente R$ 32,13/mês

Produção com maior capacidade:
variável conforme processamento, armazenamento e demais recursos
```

---

## 7. APIs e Serviços Externos

### 7.1 Serviço de mapas

O VemVindo apresenta ao destinatário a localização e o trajeto da entrega em um mapa.

A solução definida para essa funcionalidade utiliza majoritariamente tecnologias open source e serviços com níveis gratuitos, buscando reduzir custos variáveis relacionados à quantidade de visualizações e entregas realizadas pela plataforma.

A stack definida é composta por:

* [**MapLibre GL**](https://maplibre.org) para renderização do mapa;
* [**OpenFreeMap**](https://openfreemap.org) para fornecimento dos tiles durante o MVP;
* [**Protomaps**](https://protomaps.com) como alternativa para hospedagem própria dos tiles em produção;
* [**ViaCEP**](https://viacep.com.br) para obtenção dos dados do endereço a partir do CEP;
* [**Geoapify**](https://www.geoapify.com) para geocodificação aproximada;
* [**OSRM**](https://project-osrm.org) para cálculo de rotas, distâncias e estimativas;
* **Geolocation API + WebSocket** para rastreamento da localização do entregador.

Os preços em dólar apresentados nesta seção utilizam como referência a cotação aproximada de **US$ 1,00 = R$ 5,10** em 02/09/2026.

#### 7.1.1 Renderização do mapa

Para a renderização visual dos mapas foi escolhido o [**MapLibre GL**](https://maplibre.org), biblioteca open source para renderização de mapas vetoriais utilizando WebGL.

Por se tratar de uma biblioteca executada no frontend, sua utilização não possui cobrança baseada em usuários, visualizações ou requisições.

| Serviço | Finalidade | Custo |
| :------ | :--------- | ----: |
| MapLibre GL | Renderização do mapa no frontend | R$ 0,00 |

**Custo estimado:**

```text
Desenvolvimento: R$ 0,00/mês
Produção: R$ 0,00/mês
```

---

#### 7.1.2 Tiles do mapa

Os tiles representam os dados visuais utilizados para construir o fundo do mapa exibido pelo MapLibre.

Foram definidas duas estratégias diferentes para o VemVindo.

##### OpenFreeMap — MVP

Durante o MVP, será utilizada a instância pública do [**OpenFreeMap**](https://openfreemap.org).

O serviço permite utilização gratuita e comercial, sem limite definido de visualizações ou requisições e sem necessidade de chave de API.

| Serviço | Utilização | Custo |
| :------ | :--------- | ----: |
| OpenFreeMap | Tiles durante MVP e desenvolvimento | R$ 0,00 |

Entretanto, por se tratar de uma infraestrutura pública gratuita, atualmente não existe garantia formal de SLA ou suporte personalizado. Dessa forma, sua utilização é mais adequada ao MVP do que como dependência principal de uma aplicação comercial em produção.

**Custo estimado:**

```text
MVP: R$ 0,00/mês
```

##### Protomaps — Produção

Para produção, uma alternativa prevista é utilizar [**Protomaps**](https://protomaps.com), armazenando os tiles do mapa em um arquivo `.pmtiles`.

Uma possibilidade é utilizar o **Cloudflare R2**, que oferece armazenamento de objetos e não cobra pela transferência dos arquivos para a Internet.

O nível gratuito atual do R2 inclui:

| Recurso | Franquia gratuita mensal |
| :------ | -----------------------: |
| Armazenamento | 10 GB |
| Operações de escrita/listagem | 1 milhão |
| Operações de leitura | 10 milhões |
| Transferência para Internet | Gratuita |

Acima da franquia gratuita:

| Recurso | Preço |
| :------ | ----: |
| Armazenamento | US$ 0,015/GB-mês ≈ R$ 0,08/GB-mês |
| Operações de leitura | US$ 0,36/milhão ≈ R$ 1,84/milhão |
| Operações de escrita/listagem | US$ 4,50/milhão ≈ R$ 22,95/milhão |
| Transferência para Internet | R$ 0,00 |

Dessa forma, caso o arquivo PMTiles e a utilização do VemVindo permaneçam dentro da franquia gratuita do serviço, a hospedagem do mapa poderá continuar com custo zero.

**Custo estimado:**

```text
Produção de baixo consumo: R$ 0,00/mês

Acima da franquia gratuita:
variável conforme armazenamento e quantidade de operações
```

---

#### 7.1.3 Geocodificação e endereços

Para o cadastro dos endereços, foi definida uma estratégia que busca reduzir tanto problemas de precisão quanto a quantidade de requisições a serviços pagos.

O fluxo previsto é:

```text
CEP
 ↓
ViaCEP
 ↓
Geocodificação aproximada
 ↓
Posicionamento manual do pino
 ↓
Coordenada validada e armazenada
```

A coordenada definitiva é aquela confirmada pelo usuário por meio do pino no mapa, e não necessariamente o resultado retornado pelo geocodificador.

Essa estratégia também permite armazenar as coordenadas no banco de dados e reutilizá-las posteriormente, evitando realizar novas requisições de geocodificação para o mesmo endereço.

##### ViaCEP

O [**ViaCEP**](https://viacep.com.br) será utilizado inicialmente para consultar informações relacionadas ao CEP informado pelo usuário.

| Serviço | Finalidade | Custo |
| :------ | :--------- | ----: |
| ViaCEP  | Consulta de endereços por CEP | R$ 0,00 |

##### Geoapify

O [**Geoapify**](https://www.geoapify.com) será utilizado como serviço de geocodificação aproximada.

Uma requisição de Geocoding, Reverse Geocoding ou Address Autocomplete corresponde normalmente a um crédito.

Os principais planos considerados são:

|  Plano | Créditos | Preço |
| :----: | -------: | ----: |
|  Free  |  3.000 créditos/dia | R$ 0,00 |
| API 10 | 10.000 créditos/dia | US$ 59/mês ≈ R$ 300,90/mês |
| API 25 | 25.000 créditos/dia | US$ 109/mês ≈ R$ 555,90/mês |

Para o funcionamento inicialmente previsto do VemVindo, o plano gratuito permite até aproximadamente:

```text
3.000 requisições de geocodificação por dia
```

Como as coordenadas confirmadas serão armazenadas no sistema, a expectativa é que a geocodificação seja realizada principalmente durante o cadastro de um novo endereço, e não em todas as visualizações do rastreamento.

**Custo estimado:**

```text
MVP e baixo volume: R$ 0,00/mês

Acima de 3.000 créditos/dia:
a partir de aproximadamente R$ 300,90/mês
```

---

#### 7.1.4 Cálculo de rotas e distâncias

Para cálculo de rotas foi escolhido o [**Open Source Routing Machine (OSRM)**](https://project-osrm.org).

O OSRM utiliza os dados viários do OpenStreetMap e disponibiliza funcionalidades como:

* Cálculo de rotas;
* Cálculo de distância;
* Cálculo de duração;
* Matriz de distâncias e tempos;
* Map matching.

No VemVindo serão utilizados principalmente:

```text
Directions → cálculo da rota da entrega

Table → cálculo de distância e métricas utilizadas nos dashboards
```

O software OSRM é open source e não possui cobrança por requisição.

Entretanto, diferentemente de uma API externa, será necessário manter uma instância própria do serviço.

Portanto:

```text
Custo da API OSRM = R$ 0,00
```

---

#### 7.1.5 Rastreamento do entregador

O rastreamento utiliza recursos disponíveis diretamente no navegador ou dispositivo do entregador.

O fluxo definido é:

```text
Geolocation API
      ↓
watchPosition()
      ↓
WebSocket do VemVindo
      ↓
Backend
      ↓
Atualização do marcador no mapa
```

A **Geolocation API** disponibilizada pelo navegador não possui cobrança por utilização.

Da mesma forma, a comunicação via WebSocket é implementada pela própria aplicação e não exige contratação de uma API externa específica.

| Serviço | Finalidade | Custo adicional de API |
| :------ | :--------- | ---------------------: |
| Geolocation API | Obtenção da localização do entregador | R$ 0,00 |
| WebSocket | Transmissão das coordenadas | R$ 0,00 |

Os recursos computacionais utilizados pelo WebSocket fazem parte da infraestrutura do backend e, portanto, devem ser contabilizados na hospedagem da aplicação, evitando duplicidade neste orçamento.

**Custo adicional estimado:**

```text
R$ 0,00/mês
```

---

#### 7.1.6 Resumo dos custos da solução de mapas

| Componente              | Solução                 |               MVP |                         Produção |
| :---------------------- | :---------------------- | ----------------: | -------------------------------: |
| Renderização            | MapLibre GL             |           R$ 0,00 |                          R$ 0,00 |
| Tiles                   | OpenFreeMap / Protomaps |           R$ 0,00 |              R$ 0,00 ou variável |
| Consulta por CEP        | ViaCEP                  |           R$ 0,00 |                          R$ 0,00 |
| Geocodificação          | Geoapify                |           R$ 0,00 | R$ 0,00 ou a partir de R$ 300,90 |
| Rotas e distâncias      | OSRM                    |          R$ 0,00* |           Infraestrutura própria |
| Tracking                | Geolocation API         |           R$ 0,00 |                          R$ 0,00 |
| Comunicação do tracking | WebSocket               | R$ 0,00 adicional |              Incluído no backend |

> * Durante o desenvolvimento, o OSRM pode ser executado localmente pela equipe, não gerando custo adicional de hospedagem.

Caso o volume de geocodificação ultrapasse o plano gratuito do Geoapify e seja necessário contratar o plano API 10:

```text
Geoapify API 10:  R$ 300,90
---------------------------------
Total estimado:   R$ 423,30/mês
```

Dessa forma, a arquitetura escolhida evita cobranças diretamente proporcionais à quantidade de visualizações do mapa ou cálculos de rota, mantendo o principal custo da solução relacionado à infraestrutura utilizada para executar o OSRM.

---

### 7.2 Integração com sistemas dos clientes

O VemVindo prevê endpoints para integração com os sistemas de gestão utilizados pelos estabelecimentos clientes.

Essa comunicação será disponibilizada pela própria API do VemVindo, nenhum serviço externo pago é necessário.

**Custo adicional atual: R$ 0,00.**

---

### 7.3 Notificações

A implementação tecnológica desse recurso ainda deverá ser definida.

| Serviço          | Situação  |     Custo |
| ---------------- | --------- | --------: |
| Notificações Web | A definir | A definir |

---

## 8. Resumo do Orçamento Atual

| Categoria                         | Custo atual |
| --------------------------------- | ----------: |
| Mão de obra                       |     R$ 0,00 |
| Tecnologias e ferramentas         |     R$ 0,00 |
| Versionamento e CI/CD             |     R$ 0,00 |
| Documentação                      |     R$ 0,00 |
| **Custo confirmado atualmente**   | **R$ 0,00** |

---

## 9. Custos Pendentes de Definição

Apesar de o custo confirmado atualmente ser zero, o orçamento final do VemVindo **ainda não pode ser considerado R$ 0,00**, pois existem componentes necessários para implantação e operação que ainda não possuem tecnologia ou fornecedor definidos.

| Item                        | Impacto esperado                        |
| --------------------------- | --------------------------------------- |
| Hospedagem do frontend      | Custo recorrente                        |
| Hospedagem do backend       | Custo recorrente                        |
| Banco de dados              | Custo recorrente                        |
| API de mapas                | Dependente da quantidade de requisições |
| API de rotas/geocodificação | Dependente da quantidade de requisições |
| Serviço de notificações     | A depender da solução adotada           |
| Domínio personalizado       | Possível custo anual                    |

Esses itens deverão ser incorporados ao orçamento quando suas respectivas decisões técnicas forem realizadas.

---

## 10. Reserva de Contingência

A reserva de contingência deverá ser calculada após a definição dos custos de infraestrutura e serviços externos.

Sugere-se inicialmente uma reserva entre **10% e 15%** sobre os custos financeiros previstos.

```text
Contingência = Custos previstos × percentual de contingência
```

Como atualmente não existem custos financeiros contratados:

**Reserva de contingência atual: R$ 0,00.**

A reserva deverá ser recalculada quando serviços pagos forem incluídos.

---

## 11. Custo Atual x Custo Futuro

É importante diferenciar o custo atual de desenvolvimento do custo necessário para colocar o produto em produção.

| Cenário                         | Situação                                |
| ------------------------------- | --------------------------------------- |
| Desenvolvimento atual           | R$ 0,00 de custo adicional identificado |
| Documentação publicada          | R$ 0,00                                 |
| Ambiente completo de produção   | A definir                               |
| Operação mensal do SaaS         | A definir                               |

Atualmente, portanto:

### **Custo confirmado do projeto: R$ 0,00**

Entretanto, esse valor representa apenas os recursos já definidos e utilizados na fase atual do desenvolvimento.

O **custo final de implantação e o custo mensal de operação ainda deverão ser calculados** após a escolha da infraestrutura, banco de dados e serviços de mapas.

---

## 12. Fontes e Referências de Preços

| Recurso        | Fonte     | Data da consulta |
| -------------- | --------- | ---------------- |
| Hospedagem     | A definir | -                |
| Banco de dados | A definir | -                |
| API de mapas   | A definir | -                |
| Domínio        | A definir | -                |

---

## 13. Histórico de Revisões

| Data       | Versão | Descrição                                                                                               |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------- |
| 30/08/2026 | 1.0    | Criação inicial do orçamento com base nas tecnologias e infraestrutura atualmente definidas no projeto. |

