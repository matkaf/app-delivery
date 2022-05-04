import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  border: 2px solid rgb(192,192,192);
  box-shadow: 0 3px rgb(192,192,192);
  margin-top:20px;
  padding:15px;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display:flex;
`;

const Label = styled.label`
  display:flex;
  flex-direction:column;
  margin-left:10px;
  font-size:15px;
  font-weight:bold;

  input {
    height:50px;
    width: 280px;
    margin-top:10px;
  }
  
  select {
    margin-top:10px;
    height:50px;
    width:280px;
  }
`;

const InputAddress = styled.input`
  width:500px !important;
  height:50px;
`;

const Button = styled.button`
  border-radius:7px;
  background-color:#036B52;
  font-size:30px;
  font-weight:900;
  color:white;
  width:370px;
  height:59px;
  margin-top:20px;
  cursor: pointer;
`;

export { Label, Form, InputAddress, Container, Button };
