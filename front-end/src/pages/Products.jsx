import React from 'react';
import DrinkCardList from '../components/DrinkCardList/DrinkCardList';
import Header from '../components/Header/Header';
import { DrinksProvider } from '../hooks/useDrinks';

export default function () {
  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Header clientName={ name } />
      <DrinksProvider>
        <DrinkCardList />
      </DrinksProvider>
    </div>
  );
}
