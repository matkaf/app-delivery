import React from 'react';
import { useDrinks } from '../../hooks/useDrinks';
import DrinkCard from '../DrinkCard/DrinkCard';
import SeeCartButton from '../SeeCartButton/SeeCartButton';
import { CardsContainer, StyledList } from './styledDrinkCardList';

export default function DrinkCardList() {
  const { data } = useDrinks();

  return (
    <StyledList>
      <CardsContainer>
        {data.map(({ id, name, price, urlImage }) => (
          <DrinkCard
            key={ id }
            id={ id }
            price={ price }
            imageUrl={ urlImage }
            drinkName={ name }
          />
        ))}
        <SeeCartButton />
      </CardsContainer>
    </StyledList>
  );
}
