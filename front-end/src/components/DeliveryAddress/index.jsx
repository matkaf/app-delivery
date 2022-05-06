import React, { useEffect, useState } from 'react';
import { createSale, requestUsers } from '../../services/request';
import { Label, Form, InputAddress, Container, Button } from './styledDeliveryAddress';

function DeliveryAddress({ totalPrice }) {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState([]);
  const [numberAnddress, setNumberAddress] = useState([]);
  const [orderSeller, setOrderSeller] = useState('');

  const handleClick = () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const salePayload = {
      userId: id,
      sellerId: orderSeller,
      deliveryAddress: address,
      deliveryNumber: numberAnddress,
      totalPrice,
    };
    const saleId = fetchSale(salePayload);
  };

  const fetchSale = async (payload) => {
    try {
      const endpoint = '/sales';
      const sale = await createSale(endpoint, payload);
      return sale;
    } catch (error) {
      console.log(error);
    }
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

  useEffect(() => {
    fetchUsers();
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
            />
          </Label>
          <Label htmlFor="adress">
            Número
            <input
              type="text"
              value={ numberAnddress }
              onChange={ (e) => setNumberAddress(e.target.value) }
            />
          </Label>
        </Form>
        <Button onClick={ handleClick } type="button">FINALIZAR PEDIDO</Button>
      </Container>
    </div>
  );
}

export default DeliveryAddress;
