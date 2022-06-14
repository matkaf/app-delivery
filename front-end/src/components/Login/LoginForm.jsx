import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Label, MainDiv, P, ButtonCreateAcount } from './styledLogin';
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
    <MainDiv>
      <Container>
        <img src={ Logo } alt="logo" />
        <div>
          <Label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              onChange={ (e) => setEmail(e.target.value) }
              value={ email }
            />
          </Label>
        </div>
        <div>
          <Label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              onChange={ (e) => setPassword(e.target.value) }
              value={ password }
            />
          </Label>
        </div>
        <P
          loginIsFailed={ failedLogin }
        >
          E-mail ou senha estão incorretos
        </P>

        <Button
          type="button"
          className="btnLogin"
          onClick={ handleLogin }
          disabled={ !(password.length >= minLength && isValidEmail) }
        >
          Entrar
        </Button>
        <ButtonCreateAcount
          type="button"
          className="btnLogin"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </ButtonCreateAcount>
      </Container>
    </MainDiv>
  );
}

export default LoginForm;
