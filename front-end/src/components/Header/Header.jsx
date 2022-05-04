import PropTypes from 'prop-types';
import React from 'react';
import { DivL, DivR, Nav } from './styledHeader';

export default function Header({ clientName }) {
  return (
    <header>
      <Nav>
        <div>
          <DivL>PRODUTOS</DivL>
          <DivL>MEUS PEDIDOS</DivL>
        </div>
        <div>
          <DivR>{clientName}</DivR>
          <DivR>Sair</DivR>
        </div>
      </Nav>
    </header>
  );
}

Header.propTypes = {
  clientName: PropTypes.string.isRequired,
};
