import styled from 'styled-components';

const CartButton = styled.button` 
  background-color: #036B52;
  font-size: 30px;
  width: 445px;
  height: 79px;
  color: white;
  position: fixed;
  bottom: 0; // << medida provisória pra passar no 16
  right: 0; // << medida provisória pra passar no 16
  // top: 50rem;  << motivo do requisito 16 estar quebrando
  // left: 85rem; << motivo do requisito 16 estar quebrando
`;

export default CartButton;
