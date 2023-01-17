import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import './global.css';
import App from './pages/App.js';
import Payment from './pages/Payment.js';
import NotFound from './pages/404.js';
import EB from "./ErrorHandler/errorhandling.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Routes>

  <Route
  path="/"
  element={
    <EB> <App /> </EB>
  }
  />

  <Route
  path="/payment"
  element={
    <EB> <Payment /> </EB>
  }
  />

<Route
  path="/*"
  element={
    <EB> <NotFound /> </EB>
  }
  />

  </Routes> 
  </Router>
  </React.StrictMode>
);
