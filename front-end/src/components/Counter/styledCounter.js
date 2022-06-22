import styled from 'styled-components';

const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const Button = styled.button`
  width: 25%;
  height: 70%;
  background-color: #036B52;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  cursor: pointer;

  :nth-child(1){
    border-top-left-radius: 20%;
    border-bottom-left-radius: 20%;
  }
  :nth-child(3){
    border-top-right-radius: 20%;
    border-bottom-right-radius: 20%;
  }
`;

const Input = styled.input`
  width: 20%;
  height: 70%;
  text-align: center;
  border: solid grey 0.1rem;
  border-left: none;
  border-right: none;
`;

export { Button, Input, StyledCounter };
