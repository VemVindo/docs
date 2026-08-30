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
| Data de referência               | 30/08/2026           |
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

---

## 7. APIs e Serviços Externos

### 7.1 Serviço de mapas

O VemVindo apresenta ao destinatário a localização e o trajeto da entrega em um mapa.

Essa funcionalidade depende de APIs externas para recursos como:

* Exibição de mapas;
* Geocodificação;
* Cálculo de rotas;
* Cálculo de distância;
* Estimativa de tempo de chegada.

O próprio escopo do produto prevê que a utilização do mapa seja configurável para permitir o controle desse custo.

| Serviço        | Finalidade                            | Provedor  |     Custo |
| -------------- | ------------------------------------- | --------- | --------: |
| API de mapas   | Exibição do mapa                      | A definir | A definir |
| API de rotas   | Cálculo de trajetos                   | A definir | A definir |
| Geocodificação | Conversão de endereços em coordenadas | A definir | A definir |

> O custo desses serviços não deve ser considerado R$ 0,00 enquanto a tecnologia não estiver definida.

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

