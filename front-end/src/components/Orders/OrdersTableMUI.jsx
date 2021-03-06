import React, { useEffect, useState } from 'react';
import * as mui from '@mui/material';
import { useLocation } from 'react-router-dom';
import SellerOrderRowMUI from './OrderRowMUI';
import { fetchSalesById } from '../../services/request';
import Loading from '../Loading/Loading';

//

function OrdersTableMUI() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();
  const role = pathname.split('/')[1];

  useEffect(() => {
    async function requestSales() {
      const { id } = JSON.parse(localStorage.user);
      const data = await fetchSalesById(`/${role}/${id}`);

      console.log('data:', data);
      setOrders(data);
    }

    requestSales();
    setLoading(false);
  }, [role]);

  if (loading) return <Loading />;

  return (
    <mui.Container
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        gap: '5vh',
        minWidth: '770px',
        overflow: 'auto',
        padding: '30px',
      } }
    >
      { orders.map((order) => (
        <SellerOrderRowMUI
          key={ order.id }
          order={ order }
          role={ role }
        />))}
    </mui.Container>
  );
}

export default OrdersTableMUI;
