import React, { useEffect, useState } from 'react';
import * as mui from '@mui/material';

import SellerOrderRowMUI from './SellerOrderRowMUI';

import { getSales } from '../../services/request';

//

function SellerOrdersTableMUI() {
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
    <mui.Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5vh',
        minWidth: '770px',
        overflow: 'auto',
      }}
    >
      { orders.map((order) => <SellerOrderRowMUI key={ order.id } order={ order } />) }
    </mui.Container>
  );
}

export default SellerOrdersTableMUI;
