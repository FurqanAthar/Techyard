import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MobileContextProvider from './context/mobileContext'

ReactDOM.render(
  <React.StrictMode>
    <MobileContextProvider>
      <App />
    </MobileContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

