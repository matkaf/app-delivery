import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Table,
  TdItem,
  TdDescricao,
  TdQuantidade,
  TdValorUnitario,
  TdSubTotal,
  Button,
  Div } from './styledOrderDetailTable';

const tableHeaderNames = ['Item',
  'Descrição', ' Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'];

function OrderDetailTable() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const location = useLocation().pathname;

  const handleRemove = ({ target }) => {
    const newProducts = products.filter((el) => el.drinkName !== target.name);
    setProducts(newProducts);
    localStorage.setItem('carrinho', JSON.stringify(newProducts));
  };

  const handleTotal = useCallback(() => {
    const allprice = products
      .reduce((total, { amount, price }) => total + (amount * price), 0);

    setTotalPrice(allprice);
    return allprice;
  }, [products]);

  const convertToBRL = (value) => value.toLocaleString('pt-br',
    { style: 'currency', currency: 'BRL' });

  useEffect(() => {
    handleTotal();
  }, [handleTotal]);

  useEffect(() => {
    const exists = localStorage.getItem('carrinho');
    const json = JSON.parse(exists);
    if (exists) {
      setProducts(json);
    }
  }, []);

  return (
    <tbody>
      <h4>Detalhe Do pedido</h4>
      <Table>
        <tr>
          {tableHeaderNames.map((name) => <th key={ name }>{name}</th>)}
        </tr>
        { products.map(({ drinkName, amount, price }, index) => (
          <tr
            data-testid={
              `customer_checkout__eelement-order-table-name-${index}`
            }
            key={ drinkName }
          >
            <TdItem
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </TdItem>
            <TdDescricao
              data-testid={
                `customer_checkout__element-order-table-name-${index}`
              }
            >
              {drinkName}
            </TdDescricao>
            <TdQuantidade
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
            >
              {amount}
            </TdQuantidade>
            <TdValorUnitario
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
            >
              { convertToBRL(Number(price)) }
            </TdValorUnitario>
            <TdSubTotal
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              { convertToBRL(price * amount) }
            </TdSubTotal>
            { location === '/customer/checkout'
            && (
              <Button
                type="button"
                name={ drinkName }
                onClick={ (e) => handleRemove(e) }
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
              >
                Remover
              </Button>
            )}
          </tr>
        ))}
        <tr>
          <Div
            data-testid="customer_checkout__element-order-total-price"
          >
            { `Total: ${convertToBRL(totalPrice)}`}

          </Div>
        </tr>
      </Table>
    </tbody>
  );
}

export default OrderDetailTable;
