import React from 'react';
import { OrderCard, OrderCategory } from './styledSellerOrderCard';

function SellerOrderCard() {
  return (
    <OrderCard>
      <OrderCategory>
        <h3>Pedido:</h3>
        <p>0001x</p>
      </OrderCategory>

      <OrderCategory>
        <h3>Status:</h3>
        <p>PENDENTE</p>
      </OrderCategory>

      <OrderCategory>
        <h3>Data do pedido:</h3>
        <p>01/01/2020</p>
      </OrderCategory>

      <OrderCategory>
        <h3>Valor:</h3>
        <p>R$: 47,87</p>
      </OrderCategory>

      <OrderCategory>
        <h3>Endereço:</h3>
        <p>Jeremias de Mattos, 12</p>
      </OrderCategory>
    </OrderCard>
  );
}

export default SellerOrderCard;
