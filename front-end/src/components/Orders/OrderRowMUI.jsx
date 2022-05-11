import PropTypes from 'prop-types';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as mui from '@mui/material';
import moment from 'moment';
import convertToBRL from '../../helpers';

//

const colorByStatus = (status) => {
  switch (status) {
  case 'Preparando':
    return '#6bb9dd';
  case 'Em trânsito':
    return '#9869d6';
  case 'Entregue':
    return '#a8d47e';
  default:
    return '#cac268';
  }
};

const Item = mui.styled(mui.Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#6ba6eb' : '#c9c9c9',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '20%',
  margin: '0px',
  wordBreak: 'break-word',
  marginLeft: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  cursor: 'pointer',
}));

const ItemStatus = mui.styled(Item)(({ status }) => ({
  backgroundColor: colorByStatus(status),
}));

function OrderRowMUI({ order, role }) {
  const { id, status, saleDate, totalPrice, deliveryAddress } = order;
  const navigate = useNavigate();

  return (
    <mui.Stack
      direction="row"
      divider={ <mui.Divider orientation="vertical" flexItem /> }
      spacing={ 0.2 }
      alignItems="space-evenly"
      onClick={ () => navigate(`${id}`) }
    >
      <Item data-testid={ `${role}_orders__element-order-id-${id}` }>
        <h4>ID do pedido:</h4>
        <p>{id}</p>
      </Item>

      <ItemStatus
        data-testid={ `${role}_orders__element-delivery-status-${id}` }
        status={ status }
      >
        <h4>Status:</h4>
        <p>{status}</p>
      </ItemStatus>

      <Item data-testid={ `${role}_orders__element-order-date-${id}` }>
        <h4>Data do pedido:</h4>
        <p>{ moment(saleDate).format('DD/MM/YYYY') }</p>
      </Item>

      <Item>
        <h4>Valor total:</h4>
        <p
          data-testid={ `${role}_orders__element-card-price-${id}` }
        >
          { convertToBRL(Number(totalPrice))}
        </p>
      </Item>

      <Item
        hidden={ role !== 'seller' }
        data-testid={ `${role}_orders__element-card-address-${id}` }
      >
        <h4>Endereço:</h4>
        <p>{ deliveryAddress }</p>
      </Item>
    </mui.Stack>
  );
}

OrderRowMUI.propTypes = {
  order: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    deliveryNumber: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
  role: PropTypes.string.isRequired,
};

export default OrderRowMUI;
