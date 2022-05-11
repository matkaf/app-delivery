import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/admin/manage" element={ <Admin /> } />
    </Routes>
  );
}

export default App;
