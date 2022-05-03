import PropTypes from 'prop-types';
import React from 'react';

export default function Counter({ value, onClick, onChange }) {
  return (
    <div>
      <button type="button" onClick={ onClick }>-</button>
      <input type="text" inputMode="numeric" value={ value } onChange={ onChange } />
      <button type="button" onClick={ onClick }>+</button>
    </div>
  );
}

Counter.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}.isRequired;
