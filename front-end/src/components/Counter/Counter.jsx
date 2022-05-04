import PropTypes from 'prop-types';
import React from 'react';
import { Button, Input, Div } from './styledCounter';

export default function Counter({ value, onClick, onChange }) {
  return (
    <Div>
      <Button type="button" onClick={ onClick }>-</Button>
      <Input type="text" inputMode="numeric" value={ value } onChange={ onChange } />
      <Button type="button" onClick={ onClick }>+</Button>
    </Div>
  );
}

Counter.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}.isRequired;
