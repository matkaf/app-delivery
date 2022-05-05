import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import { Img, PriceContainer, CardContainer, FooterCard } from './styledDrinkCard';

export default function DrinkCard({ id, price, imageUrl, drinkName }) {
  const [amount, setAmount] = useState(0);

  function addToLocalStorage(value) {
    const products = { id, drinkName, price, amount: value };
    const exist = localStorage.getItem('carrinho');
    if (exist) {
      const cartItems = JSON.parse(exist).filter((el) => el.id !== id);
      localStorage.setItem('carrinho', JSON.stringify([...cartItems, { ...products }]));
      return;
    }
    localStorage.setItem('carrinho', JSON.stringify([products]));
  }

  function handleClick(event) {
    if (event.target.innerHTML === '+') {
      setAmount(+amount + 1);
      addToLocalStorage(+amount + 1);
    }
    if (event.target.innerHTML === '-') {
      setAmount(+amount > 0 ? +amount - 1 : 0);
      addToLocalStorage(+amount - 1);
    }
  }

  function handleChange({ target }) {
    setAmount(target.value);
    if (target.value > 0) {
      addToLocalStorage(target.value);
    }
  }

  return (
    <CardContainer data-testid={ `customer_products__element-card-price-${id}` }>
      <PriceContainer>{price}</PriceContainer>
      <Img src={ imageUrl } alt={ drinkName } />
      <FooterCard>
        <h4>{ drinkName }</h4>
        <Counter
          value={ amount }
          onClick={ (event) => handleClick(event) }
          onChange={ (event) => handleChange(event) }
        />
      </FooterCard>
    </CardContainer>
  );
}

DrinkCard.propTypes = {
  drinkName: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
