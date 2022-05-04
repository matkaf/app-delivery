import React, { useState, useEffect } from 'react';
import DeliveryAddress from '../DeliveryAddress';

import { Table,
  TdItem,
  TdDescricao,
  TdQuantidade,
  TdValorUnitario,
  TdSubTotal,
  Button,
  Container,
  Div } from './styledCheckout';

const mock = [
  { product: 'Cerveja Stella 250ml', quantity: 3, price: 3.50 },
  { product: 'Cerveja Skol Latão 450ml', quantity: 4, price: 4.10 },
  { product: 'Salgadinho Torcida Churrasco', quantity: 1, price: 1.56 },
];

const tableHeaderNames = ['Item',
  'Descrição', ' Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'];

function Checkout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const exists = localStorage.getItem('pedido');
    const json = JSON.parse(exists);
    if (exists) {
      setProducts(json);
    }
  }, []);

  const handleClick = ({ target }) => {
    setProducts(products.filter((el) => el.product !== target.name));
  };

  const handleTotal = () => {
    const totalPrice = products
      .reduce((total, { quantity, price }) => total + (quantity * price), 0).toFixed(2);
    return totalPrice;
  };
  return (
    <Container>
      <h4>Detalhe Do pedido</h4>
      <Table>
        <tr>
          {tableHeaderNames.map((name) => <th key={ name }>{name}</th>)}
        </tr>
        { products.map(({ product, quantity, price }, index) => (
          <tr key={ product }>
            <TdItem>{index + 1}</TdItem>
            <TdDescricao>{product}</TdDescricao>
            <TdQuantidade>{quantity}</TdQuantidade>
            <TdValorUnitario>{`R$${price}`}</TdValorUnitario>
            <TdSubTotal>{`R$ ${price * quantity}`}</TdSubTotal>
            <Button
              type="button"
              name={ product }
              onClick={ (event) => handleClick(event) }
            >
              Remover
            </Button>
          </tr>
        ))}
        <tr>
          <Div>{`Total: R$${handleTotal()}`}</Div>
        </tr>
      </Table>
      <DeliveryAddress />
    </Container>
  );
}

export default Checkout;
