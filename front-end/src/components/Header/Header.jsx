import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHeader, Div, Nav, UsernameA,
  LogoutA, OrdersA, ProductsA } from './styledHeader';

export default function Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');

  function handleLogout() {
    localStorage.clear();
    navigate('/login');
  }

  useEffect(() => {
    const { name, role } = JSON.parse(localStorage.getItem('user'));
    setUserName(name);
    setUserRole(role);
  }, []);

  return (
    <StyledHeader>
      <Nav>
        { userRole === 'customer'
          && (
            <ProductsA onClick={ () => navigate('/customer/products') }>
              Produtos
            </ProductsA>
          )}
        <OrdersA
          role={ userRole }
          onClick={ () => navigate(`/${userRole}/orders`) }
        >
          {userRole === 'customer' ? 'Meus Pedidos' : 'Pedidos'}
        </OrdersA>
      </Nav>
      <Div>
        <UsernameA>{userName}</UsernameA>
        <LogoutA
          onClick={ () => handleLogout() }
        >
          Sair
        </LogoutA>
      </Div>
    </StyledHeader>
  );
}
