import PropTypes from 'prop-types';
import React, {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';

const TotalPriceContext = createContext({});

function TotalPriceProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const local = localStorage.getItem('carrinho');

  function getProductsFromLocalStorage() {
    const exist = localStorage.getItem('carrinho');
    if (exist) {
      setProducts(JSON.parse(exist));
    }
    if (!exist) setProducts([{ amount: 0, price: 0 }]);
  }

  const handleTotal = useCallback(() => {
    const sumPrice = products
      .reduce((total, { amount, price }) => total + (amount * price), 0).toFixed(2);
    setTotalPrice(sumPrice);
  }, [products]);

  useEffect(() => {
    getProductsFromLocalStorage();
  }, [local]);

  useEffect(() => {
    handleTotal();
  }, [handleTotal]);

  const foo = useMemo(
    () => ({
      totalPrice,
      setTotalPrice,
    }),
    [totalPrice],
  );

  return (
    <TotalPriceContext.Provider value={ foo }>{children}</TotalPriceContext.Provider>
  );
}

TotalPriceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useTotalPrice = () => {
  const context = useContext(TotalPriceContext);

  if (!context) {
    throw new Error('useTotalPrice must be used within an TotalPriceProvider');
  }

  return context;
};

export { useTotalPrice, TotalPriceProvider };
