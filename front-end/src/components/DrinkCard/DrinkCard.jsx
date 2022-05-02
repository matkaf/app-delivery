import PropTypes from 'prop-types';
import React from 'react';
import Counter from '../Counter/Counter';

export default function DrinkCard({ id, price, imageUrl, drinkName }) {
  return (
    <div data-testid={ `customer_products__element-card-price-${id}` }>
      <p>{price}</p>
      <img src={ imageUrl } alt={ drinkName } />
      <div>
        <p>{ drinkName }</p>
        <Counter />
      </div>
    </div>
  );
}

DrinkCard.propTypes = {
  drinkName: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
