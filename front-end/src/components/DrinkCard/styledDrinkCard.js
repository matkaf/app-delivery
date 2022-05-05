import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid grey 1px;
  width: 22rem;
  height: 29rem;
`;

const Img = styled.img`
  width: 20rem;
  height: 20rem;
`;

const PriceContainer = styled.div`
  background-color: #ede4e2;
  border-radius: 5px;
  font-size: 2rem;
  position: absolute;
  font-weight: bold;
  opacity: 0.8;
`;

const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #F2FFFC;
  width: 21.9rem;
  height: 6rem;
  box-shadow: 1px 2px rgb(192,192,192)
`;

export { Img, PriceContainer, CardContainer, FooterCard };
