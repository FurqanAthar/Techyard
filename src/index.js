import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MobileContextProvider from './context/mobileContext'
import { AuthProvider } from './context/authContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MobileContextProvider>
        <App />
      </MobileContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

