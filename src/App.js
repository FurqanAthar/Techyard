import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Pages
import Home from './pages/Home'
import Navbar from './components/navbar'
import Mobiles from './pages/Mobiles'
import Laptops from './pages/Laptops'
import HeadPhones from './pages/HeadPhones'
import Accessories from './pages/Accessories'
import MyCart from './pages/MyCart'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import PrivateRoute from './privateRoute'
import MobileDetailPage from './pages/productDetails/mobileDetailPage'
import HeadphoneDetailPage from './pages/productDetails/HeadphoneDetailPage'
import AccessorieDetailPage from './pages/productDetails/AccessoriesDetailPage'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/mobiles"> <Mobiles/> </Route>
        <Route exact path="/laptops"> <Laptops/> </Route>
        <Route exact path="/headphones"> <HeadPhones/> </Route>
        <Route exact path="/accessories"> <Accessories/> </Route>
        <Route path="/mobiles/:id"> <MobileDetailPage/> </Route>
        <Route path="/headphones/:id"> <HeadphoneDetailPage/> </Route>
        <Route path="/accessories/:id"> <AccessorieDetailPage/> </Route>
        {/* <Route path="/laptops/:id"> <MobileDetailPage/> </Route> */}
        <Route path="/mycart"> <MyCart/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/signup"><Signup/></Route>
        <Route path="/forgot-password"><ForgotPassword/></Route>
      </Switch>
    </Router>
  );
}

export default App;
