import React from 'react';
import DrinkCardList from '../components/DrinkCardList/DrinkCardList';
import Header from '../components/Header/Header';
import { DrinksProvider } from '../hooks/useDrinks';

export default function Products() {
  return (
    <div>
      <Header />
      <DrinksProvider>
        <DrinkCardList />
      </DrinksProvider>
    </div>
  );
}
