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
    const newProducts = products.filter((el) => el.product !== target.name);
    setProducts(newProducts);
    localStorage.setItem('carrinho', JSON.stringify(newProducts));
  };

  const handleTotal = useCallback(() => {
    const allprice = products
      .reduce((total, { amount, price }) => total + (amount * price), 0).toFixed(2);

    setTotalPrice(allprice);
    return allprice;
  }, [products]);

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
    <div>
      <h4>Detalhe Do pedido</h4>
      <Table>
        <tr>
          {tableHeaderNames.map((name) => <th key={ name }>{name}</th>)}
        </tr>
        { products.map(({ drinkName, amount, price }, index) => (
          <tr data-testid={ `element-order-table-name-${index}` } key={ drinkName }>
            <TdItem>{index + 1}</TdItem>
            <TdDescricao>{drinkName}</TdDescricao>
            <TdQuantidade>{amount}</TdQuantidade>
            <TdValorUnitario>{`R$${price}`}</TdValorUnitario>
            <TdSubTotal>{`R$ ${price * amount}`}</TdSubTotal>
            { location === '/customer/checkout'
            && (
              <Button
                type="button"
                name={ drinkName }
                onClick={ (e) => handleRemove(e) }
              >
                Remover
              </Button>
            )}
          </tr>
        ))}
        <tr>
          <Div>{`Total: R$${totalPrice}`}</Div>
        </tr>
      </Table>
    </div>
  );
}

export default OrderDetailTable;
