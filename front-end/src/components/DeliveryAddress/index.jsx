// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { requestUsers, createSale } from '../../services/request';
import { Label, Form, InputAddress, Container, Button } from './styledDeliveryAddress';
import { useShoppingCart } from '../../hooks/useTotalPrice';

function DeliveryAddress() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState([]);
  const [numberAddress, setNumberAddress] = useState([]);
  const [orderSeller, setOrderSeller] = useState('');
  const [user, setUser] = useState();
  const [products, setProducts] = useState();
  const { totalPrice } = useShoppingCart();

  const fetchSale = async (payload) => {
    try {
      const endpoint = '/sales';
      const sale = await createSale(endpoint, payload);
      return sale;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    const { id } = user;
    const salePayload = {
      userId: id,
      sellerId: orderSeller,
      deliveryAddress: address,
      deliveryNumber: numberAddress,
      totalPrice,
      productsArray: products,
    };

    const teste = await fetchSale(salePayload);
    console.log(teste);
  };

  const fetchUsers = async () => {
    try {
      const endpoint = '/users/search?role=seller';
      const allUsersSellers = await requestUsers(endpoint);
      setSellers(allUsersSellers);
      setOrderSeller(allUsersSellers[0].id);
    } catch (error) {
      console.error(error);
    }
  };

  const getCartProducts = () => {
    const allProducts = JSON.parse(localStorage.getItem('carrinho'));
    setProducts(allProducts.map(({ id, amount }) => ({ id, quantity: amount })));
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    fetchUsers();
    getCartProducts();
  }, []);

  return (
    <div>
      <h4>Detalhes e Endereço para Entrega</h4>
      <Container>
        <Form>
          <Label htmlFor="seller">
            P.vendedora Responsável
            <select
              id="seller"
              value={ orderSeller }
              onChange={ (e) => setOrderSeller(e.target.value) }
              data-testid="customer_checkout__select-seller"
            >
              {
                sellers
                  .map(({ id, name }) => (
                    <option
                      value={ id }
                      key={ id }
                    >
                      {name}
                    </option>
                  ))
              }
            </select>
          </Label>
          <Label htmlFor="adress">
            Endereço
            <InputAddress
              type="text"
              value={ address }
              onChange={ (e) => setAddress(e.target.value) }
              data-testid="customer_checkout__input-address"
            />
          </Label>
          <Label htmlFor="adress">
            Número
            <input
              type="text"
              value={ numberAddress }
              onChange={ (e) => setNumberAddress(e.target.value) }
              data-testid="customer_checkout__input-addressNumber"
            />
          </Label>
        </Form>
        <Button
          onClick={ handleClick }
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </Button>
      </Container>
    </div>
  );
}

export default DeliveryAddress;
