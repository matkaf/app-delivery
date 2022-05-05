import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
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
  width: 15%;
  text-align: center;
  border: solid black 1px;
  border-left: none;
  border-right: none;
`;

export { Button, Input, Div };
