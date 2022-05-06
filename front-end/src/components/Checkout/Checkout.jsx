import React from 'react';
import DeliveryAddress from '../DeliveryAddress';
import OrderDetailTable from '../OrderDetailtable';
import Div from './styledCheckout';

function Checkout() {
  return (
    <Div>
      <OrderDetailTable />
      <DeliveryAddress />
    </Div>
  );
}

export default Checkout;
