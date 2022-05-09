import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext, useEffect, useMemo, useState,
} from 'react';
import { getDrinks } from '../services/request';

const DrinksContext = createContext({});

function DrinksProvider({ children }) {
  const [data, setData] = useState([]);

  const getDrinksfromApi = async () => {
    const drinks = await getDrinks('/products');
    console.log(drinks);
    setData(drinks.data);
  };

  useEffect(() => {
    getDrinksfromApi();
  }, []);

  const foo = useMemo(
    () => ({
      data,
      setData,
    }),
    [data],
  );

  return <DrinksContext.Provider value={ foo }>{children}</DrinksContext.Provider>;
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useDrinks = () => {
  const context = useContext(DrinksContext);

  if (!context) {
    throw new Error('useDrinks must be used within an DrinksProvider');
  }

  return context;
};

export { useDrinks, DrinksProvider };
