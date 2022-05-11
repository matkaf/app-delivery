import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHeader, LeftSection, RightSection } from './styledHeader';

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
    <StyledHeader>
      <LeftSection>
        <div
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </div>
        <div
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </div>
      </LeftSection>
      <RightSection>
        <div
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userName}
        </div>
        <button
          type="button"
          onClick={ () => handleLogout() }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </RightSection>
    </StyledHeader>
  );
}
