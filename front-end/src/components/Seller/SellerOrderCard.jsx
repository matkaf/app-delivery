import PropTypes from 'prop-types';
import React from 'react';
import { OrderCard, OrderCategory } from './styledSellerOrderCard';

function SellerOrderCard({ order }) {
  const { id, totalPrice, deliveryAddress, saleDate, status } = order;
  return (
    <OrderCard>
      <OrderCategory>
        <h3>Pedido:</h3>
        <p>{ id }</p>
      </OrderCategory>

      <OrderCategory status>
        <h3>Status:</h3>
        <p>{ status }</p>
      </OrderCategory>

      <OrderCategory>
        <h3>Data do pedido:</h3>
        <p>{ saleDate }</p>
      </OrderCategory>

      <OrderCategory>
        <h3>Valor:</h3>
        <p>{ totalPrice.toFixed(2) }</p>
      </OrderCategory>

      <OrderCategory address>
        <h3>Endereço:</h3>
        <p>{ deliveryAddress }</p>
      </OrderCategory>
    </OrderCard>
  );
}

SellerOrderCard.propTypes = {
  order: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.number,
  }).isRequired,
};

export default SellerOrderCard;
