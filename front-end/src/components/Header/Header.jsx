import PropTypes from 'prop-types';
import React from 'react';
import { Div, Nav } from './styledHeader';

export default function Header({ clientName }) {
  return (
    <header>
      <Nav>
        <div>
          <Div>PRODUTOS</Div>
          <Div>MEUS PEDIDOS</Div>
        </div>
        <div>
          <Div>{clientName}</Div>
          <Div>Sair</Div>
        </div>
      </Nav>
    </header>
  );
}

Header.propTypes = {
  clientName: PropTypes.string.isRequired,
};
