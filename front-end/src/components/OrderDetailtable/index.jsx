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
    localStorage.setItem('pedido', JSON.stringify(newProducts));
  };

  const handleTotal = useCallback(() => {
    const allprice = products
      .reduce((total, { quantity, price }) => total + (quantity * price), 0).toFixed(2);

    setTotalPrice(allprice);
    return allprice;
  }, [products]);

  useEffect(() => {
    handleTotal();
  }, [handleTotal]);

  useEffect(() => {
    const exists = localStorage.getItem('pedido');
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
        { products.map(({ product, quantity, price }, index) => (
          <tr data-testid={ `element-order-table-name-${index}` } key={ product }>
            <TdItem>{index + 1}</TdItem>
            <TdDescricao>{product}</TdDescricao>
            <TdQuantidade>{quantity}</TdQuantidade>
            <TdValorUnitario>{`R$${price}`}</TdValorUnitario>
            <TdSubTotal>{`R$ ${price * quantity}`}</TdSubTotal>
            { location === '/customer/checkout'
            && (
              <Button
                type="button"
                name={ product }
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
