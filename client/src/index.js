import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './pages/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);