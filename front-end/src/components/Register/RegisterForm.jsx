import React, { useState } from 'react';
import { Button, Form, Input, Label } from './styledRegister';

function validateData(name, email, password) {
  const nameLength = 12;
  const passLength = 6;
  if (name.length < nameLength) return true;

  if (!email.match(/\S+@\S+\.\S+/)) return true;

  if (password.length < passLength) return true;

  return false;
}

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (

    <Form>
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

      <Button
        data-testid="common_register__button-register"
        disabled={ validateData(name, email, password) }
      >
        CADASTRAR
      </Button>
    </Form>
  );
}

export default RegisterForm;
