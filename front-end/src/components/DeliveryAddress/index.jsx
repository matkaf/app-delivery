import React, { useEffect, useState } from 'react';
import { requestUsers } from '../../services/request';
import { Label, Form, InputAddress, Container, Button } from './styledDeliveryAddress';

function DeliveryAddress({ totalPrice }) {
  const [users, setUsers] = useState([]);
  const [orderSeller, setOrderSeller] = useState([]);
  const [address, setAddress] = useState([]);
  const [numberAnddress, setNumberAddress] = useState([]);

  const handleClick = async () => {
    const { token } = user;
    const salePayload = {};
  };

  const fetchUsers = async () => {
    try {
      const endpoint = '/users';
      const allUsers = await requestUsers(endpoint);
      setUsers(allUsers.filter((el) => el.role === 'seller'));
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
          <Label htmlFor="vendedor">
            P.vendedora Responsável
            <select id="vendedor" onChange={ (e) => setOrderSeller(e.target.value) }>
              {
                users
                  .map((seller) => <option key={ seller.email }>{seller.name}</option>)
              }
            </select>
          </Label>
          <Label htmlFor="adress">
            Endereço
            <InputAddress type="text" onChange={ (e) => setAddress(e.target.value) } />
          </Label>
          <Label htmlFor="adress">
            Número
            <input type="text" onChange={ (e) => setNumberAddress(e.target.value) } />
          </Label>
        </Form>
        <Button onclick={ handleClick } type="button">FINALIZAR PEDIDO</Button>
      </Container>
    </div>
  );
}

export default DeliveryAddress;
