import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 15rem;
  height: 15rem;
`;

const PriceContainer = styled.div`
  background-color: #ede4e2;
  border-radius: 5px;
  font-size: 2rem;
  position: absolute;
  opacity: 0.8;
`;

export { Img, PriceContainer, CardContainer };
