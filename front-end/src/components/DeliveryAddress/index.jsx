// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { requestUsers } from '../../services/request';
import { Label, Form, InputAddress, Container, Button } from './styledDeliveryAddress';

function DeliveryAddress() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState([]);
  const [numberAnddress, setNumberAddress] = useState([]);
  const [orderSeller, setOrderSeller] = useState('');
  const [user, setUser] = useState();

  const fetchSale = async (payload) => {
    try {
      const endpoint = '/sales';
      const sale = await createSale(endpoint, payload);
      return sale;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    const { id } = user;
    const salePayload = {
      userId: id,
      sellerId: orderSeller,
      deliveryAddress: address,
      deliveryNumber: numberAnddress,
      totalPrice,
    };

    fetchSale(salePayload);
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
    setUser(JSON.parse(localStorage.getItem('user')));
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
              value={ numberAnddress }
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

// DeliveryAddress.propTypes = {
//   totalPrice: PropTypes.string.isRequired,
// };

export default DeliveryAddress;
