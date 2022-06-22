import styled from 'styled-components';

const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
`;

const Button = styled.button`
  width: 30%;
  height: 80%;
  background-color: #036B52;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  color: white;
  border: none;
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
  height: 80%;
  text-align: center;
  border: solid grey 0.1rem;
  border-left: none;
  border-right: none;
`;

export { Button, Input, StyledCounter };
