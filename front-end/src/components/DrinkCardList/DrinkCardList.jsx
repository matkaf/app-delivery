import React from 'react';
import { useDrinks } from '../../hooks/useDrinks';
import DrinkCard from '../DrinkCard/DrinkCard';

export default function DrinkCardList() {
  const { data } = useDrinks();

  return (
    <div>
      {data.map(({ id, drinkName, price, imageUrl }) => (
        <DrinkCard
          key={ id }
          id={ id }
          prince={ price }
          imageUrl={ imageUrl }
          drinkName={ drinkName }
        />
      ))}
    </div>
  );
}
