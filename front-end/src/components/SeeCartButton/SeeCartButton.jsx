import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTotalPrice } from '../../hooks/useTotalPrice';
import CartButton from './styledSeeCartButton';

export default function SeeCartButton() {
  const { totalPrice } = useTotalPrice();
  const navigate = useNavigate();

  const seeCart = () => {
    navigate('/customer/checkout');
  };

  return (
    <CartButton onClick={ seeCart }>
      Ver Carrinho: R$
      {totalPrice}
    </CartButton>
  );
}
