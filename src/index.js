import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CouponContextProvider from './admin/context/couponsContext'
import AddMobileContextProvider from './admin/context/AddMobileContext'
import AddHeadphoneContextProvider from './admin/context/AddHeadphoneContext'
import AddPowerbankContextProvider from './admin/context/AddPowerbankContext'
import MobileContextProvider from './context/mobileContext'
import HeadphoneContextProvider from './context/headphoneContext'
import PowerbankContextProvider from './context/powerbankContext'
import MobileComparisonProvider from './context/comparisonContexts/mobileComparisonContext'
import HeadphoneComparisonProvider from './context/comparisonContexts/headphoneComparisonContext'
import PowerbankComparisonProvider from './context/comparisonContexts/powerbankComparisonContext'
import { AuthProvider } from './context/authContext'
import { CartProvider } from './context/CartContext';
import SuperAdminContextProvider from './admin/context/LoginSignupContexts/superAdminContext'
import SubAdminContextProvider from './admin/context/LoginSignupContexts/subAdminContext'
import OrderContextProvider from './admin/context/OrdersContext'
import ComingSoonContextProvider from './context/comingSoonContext'

ReactDOM.render(
  <React.StrictMode>
    <SuperAdminContextProvider>
      <SubAdminContextProvider>
        <ComingSoonContextProvider>
          <AuthProvider>
            <CouponContextProvider>
              <AddMobileContextProvider>
                <AddHeadphoneContextProvider>
                  <AddPowerbankContextProvider>
                    <CartProvider>
                      <MobileContextProvider>
                        <MobileComparisonProvider>
                          <HeadphoneContextProvider>
                            <HeadphoneComparisonProvider>
                              <PowerbankContextProvider>
                                <PowerbankComparisonProvider>
                                  <OrderContextProvider>
                                    <App />
                                  </OrderContextProvider>
                                </PowerbankComparisonProvider>
                              </PowerbankContextProvider>
                            </HeadphoneComparisonProvider>
                          </HeadphoneContextProvider>
                        </MobileComparisonProvider>
                      </MobileContextProvider>
                    </CartProvider>
                  </AddPowerbankContextProvider>
                </AddHeadphoneContextProvider>
              </AddMobileContextProvider>
            </CouponContextProvider>
          </AuthProvider>
        </ComingSoonContextProvider>
      </SubAdminContextProvider>
    </SuperAdminContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

