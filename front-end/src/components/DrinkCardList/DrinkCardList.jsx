import React from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';

export default function DrinkCardList() {
  return (
    <div>
      {drinks.map((drink) => (
        <DrinkCard
          key={ drink.id }
          id={ drink.id }
          prince={ drink.price }
          drinkName={ drink.name }
        />
      ))}
    </div>
  );
}
