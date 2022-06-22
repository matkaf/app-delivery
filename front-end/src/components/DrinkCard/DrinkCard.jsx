import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useShoppingCart } from '../../hooks/useTotalPrice';
import Counter from '../Counter/Counter';
import { CardContainer, Img, NameContainer, PriceContainer } from './styledDrinkCard';

export default function DrinkCard({ id, price, imageUrl, drinkName }) {
  const [amount, setAmount] = useState(0);
  const { products, setProducts } = useShoppingCart();

  function addToCart(value) {
    const productPayload = { id, drinkName, price, amount: value };
    const cartItems = products.filter((el) => el.id !== id);
    if (productPayload.amount === 0) {
      setProducts([...cartItems]);
      return;
    }
    setProducts([...cartItems, { ...productPayload }]);
  }

  function handleClick(event) {
    if (event.target.innerHTML === '+') {
      setAmount(+amount + 1);
      addToCart(+amount + 1);
    }
    if (event.target.innerHTML === '-') {
      setAmount(+amount > 0 ? +amount - 1 : 0);
      addToCart(+amount > 0 ? +amount - 1 : 0);
    }
  }

  function handleChange({ target }) {
    setAmount(target.value >= 0 ? target.value : 0);
    addToCart(target.value);
  }

  return (
    <CardContainer>
      <NameContainer>{ drinkName }</NameContainer>
      <Img
        src={ imageUrl }
        alt={ drinkName }
      />
      <PriceContainer>{`R$${price.replace('.', ',')}`}</PriceContainer>
      <Counter
        value={ amount }
        onClick={ (event) => handleClick(event) }
        onChange={ (event) => handleChange(event) }
        id={ id }
      />
    </CardContainer>
  );
}

DrinkCard.propTypes = {
  drinkName: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
