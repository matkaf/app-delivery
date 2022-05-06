import React from 'react';
import DeliveryAddress from '../DeliveryAddress';
import OrderDetailTable from '../OrderDetailtable';
import Div from './styledCheckout';
import Header from '../Header/Header';

function Checkout() {
  return (
    <div>
      <Header />
      <Div>
        <OrderDetailTable />
        <DeliveryAddress />
      </Div>
    </div>
  );
}

export default Checkout;
