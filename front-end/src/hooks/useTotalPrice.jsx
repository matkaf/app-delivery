import PropTypes from 'prop-types';
import React, {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';

const ShoppingCartContext = createContext({});

function ShoppingCartProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const handleTotal = useCallback(() => {
    const sumPrice = products
      .reduce((total, { amount, price }) => total + (amount * price), 0).toFixed(2);
    setTotalPrice(sumPrice);
  }, [products]);

  useEffect(() => {
    handleTotal();
  }, [handleTotal]);

  const foo = useMemo(
    () => ({
      totalPrice,
      setTotalPrice,
      products,
      setProducts,
    }),
    [products, totalPrice],
  );

  return (
    <ShoppingCartContext.Provider value={ foo }>{children}</ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error('useShoppingCart must be used within an ShoppingCartProvider');
  }

  return context;
};

export { useShoppingCart, ShoppingCartProvider };
