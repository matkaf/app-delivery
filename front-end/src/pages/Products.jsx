import React from 'react';
import DrinkCardList from '../components/DrinkCardList/DrinkCardList';
import Header from '../components/Header/Header';
import { DrinksProvider } from '../hooks/useDrinks';

export default function () {
  return (
    <div>
      <Header clientName="Cicrano da Silva" />
      <DrinksProvider>
        <DrinkCardList />
      </DrinksProvider>
    </div>
  );
}
