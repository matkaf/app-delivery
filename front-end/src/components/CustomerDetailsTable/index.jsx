import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { fetchSalesById } from '../../services/request';
import convertToBRL from '../../helpers';
import Loading from '../Loading/Loading';
import * as Styled from './CustomerDetailsTable';

const tableHeaderNames = [
  'Item',
  'Descrição',
  ' Quantidade',
  'Valor Unitário',
  'Sub-total',
];

const testId = 'customer_order_details__element-order-details-label-delivery-status';

function CustomerDetailsTable() {
  const [order, setOrder] = useState([]);
  const [seller, setSeller] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [orderStatus, setOrderStatus] = useState('');

  const { id } = useParams();

  const fetchOrder = useCallback(async () => {
    const { status, sellers, products } = await fetchSalesById(`/sales/order/${id}`);

    setOrderStatus(status);
    setSeller(sellers);
    setOrder(products);
    setLoading(false);
  }, [id]);

  const calculateTotal = (product) => product.reduce((acc,
    { price, salesProducts: { quantity } }) => (
    acc + (quantity * price)), 0);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <div>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          { `PEDIDO:${id}` }
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          { `P.VEND:${seller.name}` }
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { moment(order[0].saleDate).format('DD/MM/YYYY') }
        </p>
        <p
          data-testid={ testId }
        >
          { orderStatus }
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled="true"
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <tbody>
        <h4>Detalhe Do pedido</h4>
        <Styled.Table>
          <tr>
            {tableHeaderNames.map((name) => <th key={ name }>{name}</th>)}
          </tr>
          { order.map(({ name, price, salesProducts: { quantity } }, index) => (
            <tr
              key={ name }
            >
              <Styled.TdItem
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </Styled.TdItem>
              <Styled.TdDescricao
                data-testid={
                  `customer_order_details__element-order-table-name-${index}`
                }
              >
                {name}
              </Styled.TdDescricao>
              <Styled.TdQuantidade
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                {quantity}
              </Styled.TdQuantidade>
              <Styled.TdValorUnitario
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${index}`
                }
              >
                { convertToBRL(Number(price)) }
              </Styled.TdValorUnitario>
              <Styled.TdSubTotal
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                { convertToBRL(price * quantity) }
              </Styled.TdSubTotal>
            </tr>
          ))}
          <tr>
            <Styled.Div
              data-testid="customer_order_details__element-order-total-price"
            >
              { convertToBRL(Number(calculateTotal(order))) }
            </Styled.Div>
          </tr>
        </Styled.Table>
      </tbody>
    </section>
  );
}

export default CustomerDetailsTable;
