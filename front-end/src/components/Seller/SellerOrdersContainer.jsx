import React, { useEffect, useState } from 'react';
import OrderContainer from './styledSellerOrdersContainer';
import SellerOrderCard from './SellerOrderCard';
import { getSales } from '../../services/request';

function SellerOrdersContainer() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  async function requestSales() {
    const data = await getSales('/sales');
    console.log(data);
    try {
      const newData = JSON.parse(JSON.stringify(data));
      setOrders(newData);
    } catch (error) {
      console.log('erro no parse');
    }
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
    <OrderContainer>
      { orders.map((order) => <SellerOrderCard key={ order.id } order={ order } />) }
    </OrderContainer>
  );
}

export default SellerOrdersContainer;
