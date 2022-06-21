<img src="./front-end/logo.png" placeholder="Logotipo" width="150px" style="border-radius: 50%"/>

# Delivery App (... em andamento)

## Sobre o projeto

O Delivery App é um sistema completo de delivery de bebidas. Ele contém o banco de dados em **MySQL**, back-end em **Node.js, Express e Sequelize** e o front-end em **React e Styled-components**.

A aplicação necessita do login de usuário para ser utilizada e esse login pode ser feito como **cliente**, **vendedor** ou **administrador**. Segue o diagrama do banco de dados:

![Diagrama ER](./assets/readme/eer.png)

## :rocket: Como rodar o projeto?

1. Faça o clone do repositório para sua máquina:
```bash
git clone git@github.com:matkaf/app-delivery.git
```

2. Entre na pasta do projeto e instale as dependências:
```bash
cd app-delivery
npm install
```

3. Inicie a aplicação:
```bash
npm start
```
#### Lembre-se de verificar se o MySQL está rodando na sua máquina. Para garantir, basta utilizar o comando: `sudo systemctl start mysql`. A aplicação estará acessível em: <http://localhost:3000>

## ⚙️ Funcionalidades

<details>

  <summary>

  ## Fluxo Geral
  </summary>

  ### Tela de Cadastro:
  Uma pessoa pode se registrar como cliente no site enviando:
  - [x] Um nome com mais de 12 caracteres
  - [x] Um e-mail válido
  - [x] Uma senha com mais de 6 caracteres

  ### Tela de login:
  - [x] Verifica o usuário no banco de dados
  - [x] Verifica email e senha
  - [x] Redireciona para a URL correspondente à função (customer, seller ou admin)

</details>

<details>

  <summary>

  ## Fluxo de cliente
  </summary>

  ### Na rota `customer/products` o cliente pode:
  - [x] Visualizar a lista de bebidas disponíveis
  - [x] Adicionar itens ao carrinho
  - [x] Visualizar o valor total dos itens adicionados ao carrinho

  ### Na rota `customer/checkout` o cliente pode:
  - [x] Ver o resumo dos itens no carrinho
  - [x] Ver o preço de cada item e o preço total
  - [x] Remover itens do carrinho
  - [x] Finalizar o pedido

  ### Na rota `customer/orders/` o cliente pode:
  - [x] Visualizar seus pedidos

  - [x] Ver o status de cada um deles

  ### Na rota `customer/orders/:id` o cliente pode:
  - [x] Visualizar os detalhes de determinado pedido

  - [x] Ver seu status
</details>

## Desenvolvido por

Esse projeto foi realizado durante o curso de Desenvolvimento Web da Trybe, com ajuda dos colegas [@eliHC](https://github.com/eliHC), [@Ivanielson](https://github.com/Ivanielson), [@vitorSilva95](https://github.com/vitorSilva95) e [@gabiru1](https://github.com/gabiru1) :rocket: 
