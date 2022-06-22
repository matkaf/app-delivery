import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: #cecece 0.1rem 0.1rem 0.5rem;
  width: 9rem;
  height: 16rem;
  text-align: center;
`;

const Img = styled.img`
  width: auto;
  max-width: 80%;
  height: 40%;
`;

const NameContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  overflow: hidden;
  color: #242424;
  font-weight: 700;
  height: 20%;
  width: 100%;
`;

const PriceContainer = styled(NameContainer)`
  color: #036b52;
  font-size: 1.5rem;
`;

export { Img, PriceContainer, NameContainer, CardContainer };
