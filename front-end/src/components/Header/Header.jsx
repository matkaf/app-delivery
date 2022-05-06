import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DivL, DivR, Nav } from './styledHeader';

export default function Header({ clientName }) {
  const navigate = useNavigate();

  function handleLogout() {
    console.log('sair');
    localStorage.clear();
    navigate('/login');
  }

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
            onClick={ () => handleLogout() }
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
