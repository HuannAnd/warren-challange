# Contexto

O desafio será implementar uma tela de lista de transações apresentando os principais dados relacionado a cada uma delas, ao clicar em uma transação será exibido um modal contendo os detalhes desta transação. O desafio deverá conter as seguintes funcionalidades:

- Lista de transações agrupada por data
- Filtro por título
- Filtro por status
- Modal contendo os detalhes da transação

<br>

# Telas

Segue abaixo alguns exemplos de telas para uma base, mas sinta-se à vontade para usá-las como referência ou não.

## Lista de transações

 ![Trade Table ilustrator](src/assets/trade-table.png)

# Modais

## Modal de depósito

![Trade Table ilustrator](src/assets/deposite-modal.png)

## Modal de resgate

![Trade Table ilustrator](src/assets/reedem-modal.png)

## Modal de Movimentação interna

![Trade Table ilustrator](src/assets/internal-trades.png)

# Tecnologias

Aqui na Warren utilizamos as seguintes tecnologias, novamente sinta-se à vontade para usá-las ou não.

- VueJs
- TypeScript
- Webpack
- Less
- Jest
- Cypress
- Axios

# O que será avaliado
## Principal

<br>

- Documentação (comente sobre decisões técnicas, escolhas, requisitos, etc);
- Testes (muito importante!);
- Design da solução/arquitetura;
- Código (Modularização, Nomenclaturas, Padronização, Reutilização);
- Utilizar padrões de nomenclaturas de CSS;
- Preocupação com usabilidade;
- Utilizar alguma lib/framework moderno (Vue, React, Angular, outro);

## Interessante (Não fundamental)
- Preocupação com performance;
- Preocupação com acessibilidade;
- Interface responsiva;
- TypeScript

**Não recomendamos utilizar alguma lib de componentes como, por exemplo, bootstrap, Ant Design, entre outras.**

Mocks utilizados para desenvolver o desafio:

GET:  <https://warren-transactions-api.herokuapp.com/api/transactions)>
```JSON 
[
  {
    "id": "5f89f9f257fe42957bf6dbfd",
    "title": "Resgate",
    "description": "et labore proident aute nulla",
    "status": "created",
    "amount": 2078.66,
    "date": "2018-12-22",
    "from": "Aposentadoria",
    "to": "Conta Warren"
  },
  {
    "id": "5f89f9f271e4213092bd4e41",
    "title": "Depósito",
    "description": "excepteur veniam proident irure pariatur",
    "status": "created",
    "amount": 148856.29,
    "date": "2017-07-23",
    "from": "Trade",
    "to": "Conta Warren"
  },
  {
    "id": "5f89f9f2f318e70ff298f528",
    "title": "Movimentação interna",
    "description": "eu officia laborum labore aute",
    "status": "processed",
    "amount": 25092.8,
    "date": "2016-08-25",
    "from": "Férias",
    "to": "Trade"
  }
]

```
GET: <https://warren-transactions-api.herokuapp.com/api/transactions/:id>

```JSON
{
  "id": "5f89f9f23e427f64fc2ea101",
  "title": "Depósito",
  "description": "aute aliqua eu excepteur et",
  "status": "processing",
  "amount": 51668.85,
  "date": "2020-01-01",
  "from": "Férias",
  "to": "Conta Warren"
}

``` 

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=transparent)
