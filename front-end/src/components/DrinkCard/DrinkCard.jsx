import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Counter from '../Counter/Counter';

export default function DrinkCard({ id, price, imageUrl, drinkName }) {
  const [amount, setAmount] = useState(0);

  function handleClick({ target }) {
    if (target.innerHTML === '+') setAmount(+amount + 1);
    if (target.innerHTML === '-') setAmount(+amount > 0 ? +amount - 1 : 0);
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
          onChange={ ({ target }) => setAmount(target.value) }
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
