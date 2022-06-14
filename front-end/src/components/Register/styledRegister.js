import styled, { keyframes } from 'styled-components';

const enableButton = keyframes`
  0% {
    background-color: gray;
  }
  50% {
    background-color: #476b62
  }
  100% {
    background-color: #046c54;
  }
`;

const disableButton = keyframes`
  0% {
    background-color: #046c54;
  }
  50% {
    background-color: #476b62
  }
  100% {
    background-color: gray;
  }
`;

export const Form = styled.form`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const Label = styled.label`
  display:flex;
  flex-direction:column;
  width: 25rem;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
  placeholder: props.placeholder || '',
}))`
  border: 0.1rem solid gray;
  border-radius: 0.5rem;
  margin: 0.8rem 0;
  height: 3rem;
  padding-left:0.8rem;
`;

export const Button = styled.button`
  background-color:#046c54;
  border-radius: 0.5rem;
  color:white;
  width: 25rem;
  height: 3rem;
  margin-top: 0.8rem;

  &:enabled {
    animation: ${enableButton} 1s linear;
    cursor: pointer;
  }

  &:disabled {
    animation: ${disableButton} 1s linear;
    background-color: gray;
  }
`;

export const P = styled.p`
  text-align:center;
  font-size: 1rem;
  color:red;
  padding:0.8rem;
`;

export const Image = styled.img`
  width: 12rem;
  border-radius:50%;
`;
