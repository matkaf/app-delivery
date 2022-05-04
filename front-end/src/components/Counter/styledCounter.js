import styled from 'styled-components';

const Div = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  color: #202020;
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
`;

export { Button, Input, Div };
