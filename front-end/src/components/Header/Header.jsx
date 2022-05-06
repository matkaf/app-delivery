import PropTypes from 'prop-types';
import React from 'react';
import { DivL, DivR, Nav } from './styledHeader';

export default function Header({ clientName }) {
  return (
    <header>
      <Nav>
        <div>
          <DivL
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </DivL>
          <DivL
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </DivL>
        </div>
        <div>
          <DivR
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {clientName}
          </DivR>
          <DivR
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </DivR>
        </div>
      </Nav>
    </header>
  );
}

Header.propTypes = {
  clientName: PropTypes.string.isRequired,
};
