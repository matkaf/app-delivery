import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useShoppingCart } from '../../hooks/useTotalPrice';
import Counter from '../Counter/Counter';
import { CardContainer, FooterCard, Img, PriceContainer } from './styledDrinkCard';

export default function DrinkCard({ id, price, imageUrl, drinkName }) {
  const [amount, setAmount] = useState(0);
  const { products, setProducts } = useShoppingCart();

  function addToCart(value) {
    const productPayload = { id, drinkName, price, amount: value };
    const cartItems = products.filter((el) => el.id !== id);
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
    setAmount(target.value);
    if (target.value > 0) {
      addToLocalStorage(target.value);
    }
  }

  return (
    <CardContainer data-testid={ `customer_products__element-card-price-${id}` }>
      <PriceContainer>{price}</PriceContainer>
      <Img
        src={ imageUrl }
        alt={ drinkName }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <FooterCard>
        <h4
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { drinkName }
        </h4>
        <Counter
          value={ amount }
          onClick={ (event) => handleClick(event) }
          onChange={ (event) => handleChange(event) }
          id={ id }
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
