import React from 'react';
import { useDrinks } from '../../hooks/useDrinks';
import { TotalPriceProvider } from '../../hooks/useTotalPrice';
import DrinkCard from '../DrinkCard/DrinkCard';
import SeeCartButton from '../SeeCartButton/SeeCartButton';
import CardsContainer from './styledDrinkCardList';

export default function DrinkCardList() {
  const { data } = useDrinks();

  return (
    <CardsContainer>
      {data.map(({ id, name, price, urlImage }) => (
        <DrinkCard
          key={ id }
          id={ id }
          price={ price }
          imageUrl={ `http://localhost:3001${urlImage}` }
          drinkName={ name }
        />
      ))}
      <TotalPriceProvider>
        <SeeCartButton />
      </TotalPriceProvider>
    </CardsContainer>
  );
}
