import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyledCounter, Input } from './styledCounter';

export default function Counter({ value, onClick, onChange }) {
  return (
    <StyledCounter>
      <Button
        type="button"
        onClick={ onClick }
      >
        -
      </Button>
      <Input
        type="text"
        inputMode="numeric"
        value={ value }
        onChange={ onChange }
      />
      <Button
        type="button"
        onClick={ onClick }
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
