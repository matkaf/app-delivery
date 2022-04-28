import styled from 'styled-components';

const Button = styled.button`
  background-color:#046c54;
  color:white;
  width:370px;
  height:59px;
  margin-top:20px;
  cursor: pointer;

  &:disabled {
    background-color: grey;
  }
`;

const ButtonCreateAcount = styled.button`
  border: 2px solid #046c54;
  color: #046c54;
  cursor: pointer;
  width:370px;
  height:59px;
  margin-top:20px;
`;

const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  background-color:rgb(250, 250, 250);
`;

const Container = styled.form`
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

    img {
      width:200px;
      border-radius:50%;
    }
`;
const Label = styled.label`
  display:flex;
  flex-direction:column;

  input {
    width:370px;
    height:59px;
    margin-top: 10px;
    padding-left:5px
  }
`;

const P = styled.p`
  text-align:center;
  font-size: 15px;
  color:red;
  padding:10px;
  visibility: ${(props) => (props.loginIsFailed ? 'visible' : 'hidden')};
`;

export { Button, MainDiv, Container, Label, P, ButtonCreateAcount };
