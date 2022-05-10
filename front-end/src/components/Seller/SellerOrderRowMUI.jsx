import PropTypes from 'prop-types';
import * as React from 'react';
import * as mui from '@mui/material';
import moment from 'moment';

//

const Item = mui.styled(mui.Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#6ba6eb' : '#191a190',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '20%',
  margin: '0px',
  wordBreak: 'break-word',
  marginLeft: '0',
}));

const ItemStatus = mui.styled(mui.Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#6ba6eb' : '#91856d',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '20%',
  margin: '0px',
  wordBreak: 'break-word',
  marginLeft: '0',
}));

function SellerOrderRowMUI({ order }) {
  const { id, status, saleDate, totalPrice, deliveryAddress } = order;

  console.log('⏩  ~ file: SellerOrderRowMUI.jsx ~ line 34 ~ SellerOrderRowMUI ~ saleDate',
    saleDate);

  return (
    <mui.Stack
      direction="row"
      divider={ <mui.Divider orientation="vertical" flexItem /> }
      spacing={ 0.2 }
      alignItems="space-evenly"
    >
      <Item data-testid={ `seller_orders__element-order-id-${id}` }>
        <div>ID do pedido</div>
        {`${id}`}
      </Item>

      <ItemStatus
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      >
        {`Status:${status}`}
      </ItemStatus>

      <Item data-testid={ `seller_orders__element-order-date-${id}` }>
        {`Data do pedido:${moment(saleDate).format('DD/MM/YYYY')}`}
      </Item>

      <Item data-testid={ `seller_orders__element-card-price-id-${id}` }>
        {`Valor total:${Number(totalPrice).toFixed(2)}`}
      </Item>

      <Item data-testid={ `seller_orders__element-card-address-id-${id}` }>
        {`Endereço:${deliveryAddress}`}
      </Item>
    </mui.Stack>
  );
}

SellerOrderRowMUI.propTypes = {
  order: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    deliveryNumber: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};

export default SellerOrderRowMUI;
