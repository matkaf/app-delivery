# Delivery App [em construção]

## Sobre o projeto

O Delivery App é um sistema completo de delivery de bebidas. Ele contém o banco de dados em **MySQL**, back-end em **Node.js, Express e Sequelize** e o front-end em **React e Styled-components**.

A aplicação necessita do login de usuário para ser utilizada e esse login pode ser feito como **cliente**, **vendedor** ou **administrador**. Segue o diagrama do banco de dados:

![Diagrama ER](./assets/readme/eer.png)

## Funcionalidades

<details>
	<summary>
		<strong>Para os clientes</strong>
	</summary><br>

	Uma pessoa pode se registrar como cliente no site enviando:

		- [x] Um nome com mais de 12 caracteres
		- [x] Um e-mail válido
		- [x] Uma senha com mais de 6 caracteres

	Na URL `customer/products` o cliente pode:

		- [x] Visualizar a lista de bebidas disponíveis
		- [x] Adicionar itens ao carrinho
		- [x] Visualizar o valor total dos itens adicionados ao carrinho

	Na URL `customer/checkout` o cliente pode:

		- [x] Ver o resumo dos itens no carrinho
		- [x] Ver o preço de cada item e o preço total;
		- [x] Remover itens do carrinho;
		- [x] Finalizar o pedido;

	Na URL `customer/orders/` o cliente pode:
		- [x] Visualizar seus pedidos
		- [x] Ver o status de cada um deles

	Na URL `customer/orders/:id` o cliente pode:
	- [x] Visualizar os detalhes de determinado pedido
	- [x] Ver seu status
</details>