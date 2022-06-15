import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Image, Button, Form, Label,
  P, RegisterButton } from './styledLogin';
import { requestLogin } from '../../services/request';
import Logo from '../../logo.png';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogin, setFailedLogin] = useState(false);

  const isValidEmail = email.match(/\S+@\S+\.\S+/);
  const minLength = 6;

  const navigate = useNavigate();

  const userNavigation = useCallback((role) => {
    switch (role) {
    case 'customer':
      navigate('/customer/products');
      break;
    case 'seller':
      navigate('/seller/orders');
      break;
    case 'administrator':
      navigate('/admin/manage');
      break;
    default:
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const user = await requestLogin('/login', { email, password });
      if (user.token) {
        localStorage.setItem('user', JSON.stringify(user));
        userNavigation(user.role);
      }
    } catch (error) {
      setFailedLogin(true);
    }
  };

  useEffect(() => {
    const { user } = localStorage;

    if (user) {
      const { role } = JSON.parse(user);
      userNavigation(role);
    }
  }, [userNavigation]);

  return (
    <Form>
      <Image src={ Logo } alt="logo" />
      <Label htmlFor="email">
        E-mail
        <Input
          type="email"
          id="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </Label>
      <Label htmlFor="password">
        Senha
        <Input
          type="password"
          id="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </Label>

      <Button
        type="button"
        className="btnLogin"
        onClick={ handleLogin }
        disabled={ !(password.length >= minLength && isValidEmail) }
      >
        Entrar
      </Button>

      <RegisterButton
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </RegisterButton>
      <P
        loginIsFailed={ failedLogin }
      >
        E-mail ou senha incorretos
      </P>
    </Form>
  );
}

export default LoginForm;
