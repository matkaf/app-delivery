import React from 'react';
import DeliveryAddress from '../DeliveryAddress';
import CheckoutTable from '../CheckoutTable';
import Div from './styledCheckout';
import Header from '../Header/Header';

function Checkout() {
  return (
    <div>
      <Header />
      <Div>
        <CheckoutTable />
        <DeliveryAddress />
      </Div>
    </div>
  );
}

export default Checkout;
