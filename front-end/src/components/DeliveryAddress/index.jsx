import React from 'react';
import { Label, Form, InputAddress, Container, Button } from './styledDeliveryAddress';

const vendedores = ['vendedor1', 'vendedor2', 'vendedor3'];
function DeliveryAddress() {
  return (
    <div>
      <h4>Detalhes e Endereço para Entrega</h4>
      <Container>
        <Form>
          <Label htmlFor="vendedor">
            P.vendedora Responsável
            <select id="vendedor">
              {vendedores.map((vendedor) => <option key={ vendedor }>{vendedor}</option>)}
            </select>
          </Label>
          <Label htmlFor="adress">
            Endereço
            <InputAddress type="text" />
          </Label>
          <Label htmlFor="adress">
            Número
            <input type="text" />
          </Label>
        </Form>
        <Button type="button">FINALIZAR PEDIDO</Button>
      </Container>
    </div>
  );
}

export default DeliveryAddress;
