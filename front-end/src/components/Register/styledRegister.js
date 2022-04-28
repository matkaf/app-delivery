import styled from 'styled-components';

export const Form = styled.form`
  width:400px;
  height:700px;
  border-radius: 5px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0;
  position: absolute;
  transform: translate(-50%, -50%);
  margin-right: -50%;
  top: 50%;
  left: 50%;
`;

export const Label = styled.label`
  display:flex;
  flex-direction:column;
`;

export const Input = styled.input`
  width:370px;
  height:59px;
  margin-top: 10px;
  padding-left:5px;
`;

export const Button = styled.button`
  background-color:#046c54;
  color:white;
  width:370px;
  height:59px;
  margin-top:20px;

  &:disabled {
    background-color: grey;
  }
`;
