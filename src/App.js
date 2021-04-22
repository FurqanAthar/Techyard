import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Home Pages
import Home from './pages/Home'
import Dashboard from './admin/pages/Dashboard'
import SuperAdminDashboard from './admin/pages/SuperAdminDashboard'
// Display Pages
import Mobiles from './pages/Mobiles'
import Laptops from './pages/Laptops'
import HeadPhones from './pages/HeadPhones'
import Accessories from './pages/Accessories'
// ---------------------------------------  Sub Admin  --------------------------------------
// Login
import SubAdminLogin from './admin/pages/LoginSignup/SubAdminLogin'
// Admin Orders Page
import Orders from './admin/pages/orders/Orders'
import OrderDetailPage from './admin/pages/orders/OrderDetailPage'
import ValidatedOrders from './admin/pages/orders/ValidatedOrders'
import DeliveredOrders from './admin/pages/orders/DeliveredOrders'
// Add Coupons
import Coupons from './admin/pages/Coupons'
import AddCoupons from './admin/pages/addCoupons'
import EditCoupon from './admin/pages/EditCoupon'
// Add Mobile
import AdminMobile from './admin/pages/addMobile/AdminMobile'
import AddMobile from './admin/pages/addMobile/AddMobile'
import EditMobile from './admin/pages/addMobile/EditMobile';
// Add Heaphone
import AdminHeadphone from './admin/pages/addHeadphone/AdminHeadphone';
import AddHeadphone from './admin/pages/addHeadphone/AddHeadphone'
import EditHeadphone from './admin/pages/addHeadphone/EditHeadphone'
// Add Powerbank
import AddPowerbank from './admin/pages/addPowerbank/AddPowerbank'
import AdminPowerbank from './admin/pages/addPowerbank/AdminPowerbank'
import EditPowerbank from './admin/pages/addPowerbank/EditPowerbank'
// Login Signup
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
// Cart
import MyCart from './pages/MyCart'
import Checkout from './pages/Checkout'
import MyOrders from './pages/orders/MyOrders'
import MyOrderDetail from './pages/orders/MyOrderDetail'
// Private Routes
import PrivateRoute from './privateRoutes/privateRoute'
import SuperAdminPrivateRoute from './privateRoutes/SuperAdminPrivateRoute'
import SubAdminPrivateRoute from './privateRoutes/SubAdminPrivateRoute'
// Admin Login Signup
import SuperAdminLogin from './admin/pages/LoginSignup/SuperAdminLogin'
import SubAdminUpdatePassword from './admin/pages/LoginSignup/SubAdminUpdatePassword'
// Details Page
import MobileDetailPage from './pages/productDetails/mobileDetailPage'
import HeadphoneDetailPage from './pages/productDetails/HeadphoneDetailPage'
import AccessorieDetailPage from './pages/productDetails/AccessoriesDetailPage'
// Comparison Page
import MobileComparison from './pages/comparisonPages/mobileComparison'
import HeadphoneComparison from './pages/comparisonPages/HeadphoneComparison'
import PowerbankComparison from './pages/comparisonPages/PowerbankComparison'

function App() {
  return (
    <Router>
      <Switch>
        {/* --------------------------------------  Client Side -----------------------------------*/}
        {/* Display Pages */}
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/mobiles"> <Mobiles/> </Route>
        <Route exact path="/headphones"> <HeadPhones/> </Route>
        <Route exact path="/accessories"> <Accessories/> </Route>
        {/* Detail Page */}
        <Route path="/mobiles/:id"> <MobileDetailPage/> </Route>
        <Route path="/headphones/:id"> <HeadphoneDetailPage/> </Route>
        <Route path="/accessories/:id"> <AccessorieDetailPage/> </Route>
        {/* Comparison Page */}
        <Route path="/mobilecomparison"><MobileComparison/></Route>
        <Route path="/headphonecomparison"><HeadphoneComparison/></Route>
        <Route path="/powerbankcomparison"><PowerbankComparison/></Route>
        {/* Login Signup */}
        <Route path="/login"><Login/></Route>
        <Route path="/signup"><Signup/></Route>
        <Route path="/forgot-password"><ForgotPassword/></Route>
        {/* Cart */}
        <Route path="/mycart"> <MyCart/></Route>
        <PrivateRoute path="/checkout"> <Checkout/> </PrivateRoute>
        <PrivateRoute path="/myorders"> <MyOrders/> </PrivateRoute>
        <PrivateRoute path="/myorderdetail/:id"> <MyOrderDetail/> </PrivateRoute>

        {/* --------------------------------------  Admin Side -----------------------------------*/}
        <Route path="/subadminlogin"><SubAdminLogin/></Route>
        <SubAdminPrivateRoute path="/admindashboard"><Dashboard/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/subadminupdatepassword"><SubAdminUpdatePassword/></SubAdminPrivateRoute>
        {/* Orders */}
        <SubAdminPrivateRoute path="/orders"><Orders/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/validatedorders"><ValidatedOrders/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/deliveredorders"><DeliveredOrders/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/orderdetail/:id"><OrderDetailPage/></SubAdminPrivateRoute>
        {/* Add Coupon */}
        <SubAdminPrivateRoute path="/coupons"><Coupons/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/addcoupon"><AddCoupons/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/editcoupon/:id"><EditCoupon/></SubAdminPrivateRoute>
        {/* Add Mobile */}
        <SubAdminPrivateRoute path="/adminmobile"><AdminMobile/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/addmobile"><AddMobile/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/editmobile/:id"><EditMobile/></SubAdminPrivateRoute>
        {/* Add Headphone */}
        <SubAdminPrivateRoute path="/adminheadphone"><AdminHeadphone/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/addheadphone"><AddHeadphone/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/editheadphone/:id"><EditHeadphone/></SubAdminPrivateRoute>
        {/* Add Powerbank */}
        <SubAdminPrivateRoute path="/adminpowerbank"><AdminPowerbank/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/addpowerbank"><AddPowerbank/></SubAdminPrivateRoute>
        <SubAdminPrivateRoute path="/editpowerbank/:id"><EditPowerbank/></SubAdminPrivateRoute>
        {/* Super Admin */}
        <Route path="/superadminlogin"><SuperAdminLogin/></Route>
        <SuperAdminPrivateRoute path="/superadmindashboard" name="private"> <SuperAdminDashboard/> </SuperAdminPrivateRoute>


      </Switch>
    </Router>
  );
}

export default App;
