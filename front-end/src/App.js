import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import Admin from './pages/Admin';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrderDetails from './pages/CustomerOrderDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/admin/manage" element={ <Admin /> } />
      <Route path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
      <Route path="/customer/orders" element={ <CustomerOrders /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
    </Routes>
  );
}

export default App;

// http://localhost:3000/customer/orders/7
