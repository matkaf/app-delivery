import React, { useEffect, useState } from 'react';
import * as mui from '@mui/material';

import SellerOrderRowMUI from './SellerOrderRowMUI';

import { getSalesById } from '../../services/request';

//

function SellerOrdersTableMUI() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  async function requestSales() {
    const { id } = JSON.parse(localStorage.user);
    const data = await getSalesById(`/sales/${id}`);
    console.log(data);
    setOrders([data]); // TODO: alterar
  }

  useEffect(() => {
    requestSales();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <mui.Container
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        } }
      >
        <mui.CircularProgress color="success" />
      </mui.Container>
    );
  }

  return (
    <mui.Container
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        gap: '5vh',
        minWidth: '770px',
        overflow: 'auto',
        padding: '12px',
      } }
    >
      { orders.map((order) => <SellerOrderRowMUI key={ order.id } order={ order } />) }
    </mui.Container>
  );
}

export default SellerOrdersTableMUI;
