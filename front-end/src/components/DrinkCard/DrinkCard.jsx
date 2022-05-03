import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Counter from '../Counter/Counter';

export default function DrinkCard({ id, price, imageUrl, drinkName }) {
  const [amount, setAmount] = useState(0);

  function handleClick({ target }) {
    if (target.innerHTML === '+') setAmount(+amount + 1);
    if (target.innerHTML === '-') setAmount(+amount > 0 ? +amount - 1 : 0);
  }

  function addToLocalStorage(value) {
    console.log('oi');
    const products = { price, drinkName, amount: value };
    const exist = localStorage.getItem('carrinho');
    if (exist) {
      const cartItems = JSON.parse(exist);
      console.log(cartItems, 'aqui');
      localStorage.setItem('carrinho', JSON.stringify([...cartItems, products]));
      return;
    }
    localStorage.setItem('carrinho', JSON.stringify([products]));
  }

  function handleChange({ target }) {
    setAmount(target.value);
    addToLocalStorage(target.value);
  }

  return (
    <div data-testid={ `customer_products__element-card-price-${id}` }>
      <p>{price}</p>
      <img src={ imageUrl } alt={ drinkName } />
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
