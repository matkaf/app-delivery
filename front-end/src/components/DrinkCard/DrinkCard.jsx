import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import Img from './styledDrinkCard';

export default function DrinkCard({ id, price, imageUrl, drinkName }) {
  const [amount, setAmount] = useState(0);

  function addToLocalStorage(value) {
    const products = { id, drinkName, price, amount: value };
    const exist = localStorage.getItem('carrinho');
    console.log(exist, 'aqui123');
    if (exist) {
      const cartItems = JSON.parse(exist).filter((el) => el.id !== id);
      console.log(cartItems, 'aqui');
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
    <div data-testid={ `customer_products__element-card-price-${id}` }>
      <p>{price}</p>
      <Img src={ imageUrl } alt={ drinkName } />
      <div>
        <p>{ drinkName }</p>
        <Counter
          value={ amount }
          onClick={ (event) => handleClick(event) }
          onChange={ (event) => handleChange(event) }
        />
      </div>
    </div>
  );
}

DrinkCard.propTypes = {
  drinkName: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
