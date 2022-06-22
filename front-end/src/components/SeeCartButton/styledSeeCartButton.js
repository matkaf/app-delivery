import styled from 'styled-components';

const CartButton = styled.button` 
  background-color: #036B52;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  /* box-shadow: grey 1rem 1rem; */
  font-size: 1rem;
  width: 12rem;
  height: 4rem;
  color: white;
  position: fixed;
  /* padding: 0 1rem; */
  bottom: 0;
  right: 0;
  cursor: pointer;

  &:hover {
    background-color: #045B52;
  }
`;

export default CartButton;
