import React, { useEffect, useState } from 'react';
import OrderContainer from './styledSellerOrdersContainer';
import SellerOrderCard from './SellerOrderCard';
import { getSales } from '../../services/request';

import Button from '@mui/material/Button';


function SellerOrdersContainer() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  async function requestSales() {
    const data = await getSales('/sales');
    console.log('sales:', data);
    setOrders(JSON.parse(data));
  }

  useEffect(() => {
    requestSales();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <>
      <Button variant="contained"> Olá Mundo!'</Button>
      <OrderContainer>
        { orders.map((order) => <SellerOrderCard key={ order.id } order={ order } />) }
      </OrderContainer>
    </>
  );
}

export default SellerOrdersContainer;
