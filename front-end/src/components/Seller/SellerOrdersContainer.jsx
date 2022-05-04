import React from 'react';
import OrderContainer from './styledSellerOrdersContainer';
import SellerOrderCard from './SellerOrderCard';

function SellerOrdersContainer() {
  const orders = [
    {
      id: 1,
      totalPrice: 15.45,
      deliveryAddress: 'Rua Maria, 100 - Centro, São Paulo - SP',
      saleDate: '01/05/2022',
      status: 'Pendente',
    },
    {
      id: 2,
      totalPrice: 55.10,
      deliveryAddress: 'Rua Joao, 55 - Centro, Salvador - BA',
      saleDate: '03/05/2022',
      status: 'Preparando',
    },
    {
      id: 3,
      totalPrice: 123.99,
      deliveryAddress: 'Rua Zé, 15 - Centro, Porto Alegre - RS',
      saleDate: '10/05/2022',
      status: 'Em Trânsito',
    },
    {
      id: 4,
      totalPrice: 68.70,
      deliveryAddress: 'Rua Joaquina, 1467 - Centro, Belo Horizonte - MG',
      saleDate: '07/05/2022',
      status: 'Entregue',
    },
  ];

  return (
    <OrderContainer>
      { orders.map((order) => <SellerOrderCard key={ order.id } order={ order } />) }
    </OrderContainer>
  );
}

export default SellerOrdersContainer;
