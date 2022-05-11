import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Label, P, Image } from './styledRegister';
import logo from '../../logo.png';
import validateData from '../../utils/validateRegister';
import { createUser } from '../../services/request';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit() {
    const body = { name, email, password, role: 'user' };

    const userCreated = await createUser('/users', body);

    console.log('Resposta API:', userCreated);

    if (!userCreated) return setError(true);

    navigate('/customer/products');
  }

  return (
    <Form>
      <Image src={ logo } alt="logo" />
      <br />
      <h2>Cadastro</h2>
      <Label htmlFor="name">
        Nome:
        <Input
          id="name"
          data-testid="common_register__input-name"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
      </Label>

      <Label htmlFor="email">
        Email:
        <Input
          id="email"
          data-testid="common_register__input-email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </Label>

      <Label htmlFor="password">
        Senha:
        <Input
          id="password"
          data-testid="common_register__input-password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
      </Label>

      <P
        hidden={ !error }
        data-testid="common_register__element-invalid_register"
      >
        Usuário já cadastrado
      </P>

      <Button
        type="button"
        data-testid="common_register__button-register"
        disabled={ validateData(name, email, password) }
        onClick={ async () => {
          await handleSubmit();
        } }
      >
        CADASTRAR
      </Button>
    </Form>
  );
}

export default RegisterForm;
