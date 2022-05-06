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
      disabled={ !products.length }
      onClick={ seeCart }
      data-testid="customer_products__button-cart"
    >
      Ver Carrinho: R$
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        {totalPrice > 0 ? totalPrice.replace('.', ',') : '0'}
      </span>
    </CartButton>
  );
}
