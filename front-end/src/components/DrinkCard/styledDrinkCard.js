import styled from 'styled-components';

const CardContainer = styled.div`
  margin-top: 1.5rem;
  position: relative;
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
  width: auto;
  height: 20rem;
`;

const PriceContainer = styled.div`
  background-color: #F2FFFC;
  left: 1rem;
  top: 0.5rem;
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
  background-color: #E5E5E5;
  width: 100%;
  height: 6rem;
  box-shadow: 1px rgb(192,192,192)
`;

export { Img, PriceContainer, CardContainer, FooterCard };
