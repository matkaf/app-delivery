import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  background-color: #046c54;
  height: 8vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 100%;
`;

export const Div = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const A = styled.a`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

export const ProductsA = styled(A)`
  /* visibility: ${(props) => (props.role === 'customer' ? 'visible' : 'hidden')} */
`;

export const OrdersA = styled(A)`
  background-color: #2FC18C;
  color: black;
`;

export const UsernameA = styled(A)`
  background-color: #421981;
`;

export const LogoutA = styled(A)`
  background-color: #056CF9;
`;
