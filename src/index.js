import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MobileContextProvider from './context/mobileContext'
import HeadphoneContextProvider from './context/headphoneContext'
import PowerbankContextProvider from './context/powerbankContext'
import { AuthProvider } from './context/authContext'
import { CartProvider } from './context/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <MobileContextProvider>
          <HeadphoneContextProvider>
            <PowerbankContextProvider>
              <App />
            </PowerbankContextProvider>
          </HeadphoneContextProvider>
        </MobileContextProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

