import React from 'react'
import { Button, Form, Input, Label } from './styledRegister'

function RegisterForm() {
  return (
    
    <Form>
      <Label htmlFor="name">
        Nome:
        <Input 
          id="name"
          data-testid="common_register__input-name"
        />
      </Label>

      <Label htmlFor="email">
        Email:
        <Input
          id="email"
          data-testid="common_register__input-email"
        />
      </Label>

      <Label htmlFor="password">
        Email:
        <Input
          id="password"
          data-testid="common_register__input-password"
        />
      </Label>

      <Button 
        data-testid="common_register__button-register"
      />
    </Form>
  )
}

export default RegisterForm