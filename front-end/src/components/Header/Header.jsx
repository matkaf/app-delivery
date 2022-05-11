import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav, DivL, DivR } from './styledHeader';

export default function Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  function handleLogout() {
    console.log('sair');
    localStorage.clear();
    navigate('/login');
  }

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUserName(name);
  }, []);

  return (
    <header>
      <Nav>
        <div>
          <DivL
            onClick={ () => navigate('/customer/products') }
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </DivL>
          <DivL
            onClick={ () => navigate('/customer/orders') }
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </DivL>
        </div>
        <div>
          <DivR
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {userName}
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
