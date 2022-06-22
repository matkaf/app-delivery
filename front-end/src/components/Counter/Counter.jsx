import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyledCounter, Input } from './styledCounter';

export default function Counter({ value, onClick, onChange, id }) {
  return (
    <StyledCounter>
      <Button
        type="button"
        onClick={ onClick }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </Button>
      <Input
        type="text"
        inputMode="numeric"
        value={ value }
        onChange={ onChange }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <Button
        type="button"
        onClick={ onClick }
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </Button>
    </StyledCounter>
  );
}

Counter.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}.isRequired;
