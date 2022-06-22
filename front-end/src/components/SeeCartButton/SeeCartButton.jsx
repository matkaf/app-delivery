import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../../hooks/useTotalPrice';
import CartButton from './styledSeeCartButton';

export default function SeeCartButton() {
  const { totalPrice, products } = useShoppingCart();
  const navigate = useNavigate();

  const seeCart = () => {
    localStorage.setItem('carrinho', JSON.stringify(products));
    navigate('/customer/checkout');
  };

  return (
    <CartButton
      disabled={ +totalPrice === 0 }
      onClick={ seeCart }
    >
      Ver Carrinho: R$
      <span>
        {totalPrice > 0 ? totalPrice.replace('.', ',') : '0,00'}
      </span>
    </CartButton>
  );
}
