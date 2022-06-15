import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Label, P, Image } from './styledRegister';
import logo from '../../logo.png';
import isDataInvalid from '../../utils/validateRegister';
import { createUser } from '../../services/request';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit() {
    const body = { name, email, password };

    const userCreated = await createUser('/users', body);

    if (!userCreated) return setError(true);

    navigate('/login');
  }

  return (
    <Form>
      <Image src={ logo } alt="logo" />
      <h2>Cadastro</h2>
      <Label htmlFor="name">
        Nome:
        <Input
          id="name"
          placeholder="O nome deve conter pelo menos 12 caracteres"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
      </Label>

      <Label htmlFor="email">
        Email:
        <Input
          id="email"
          type="email"
          placeholder="Digite um e-mail válido"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </Label>

      <Label htmlFor="password">
        Senha:
        <Input
          id="password"
          type="password"
          placeholder="A senha deve conter pelo menos 6 caracteres"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
      </Label>

      <Button
        type="button"
        disabled={ isDataInvalid(name, email, password) }
        onClick={ async () => handleSubmit() }
      >
        CADASTRAR
      </Button>

      <P
        error={ error }
      >
        Usuário já cadastrado
      </P>
    </Form>
  );
}

export default RegisterForm;
