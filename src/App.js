import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Pages
import Home from './pages/Home'
import Navbar from './components/navbar'
import Mobiles from './pages/Mobiles'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import PrivateRoute from './privateRoute'
import MobileDetailPage from './pages/productDetails/mobileDetailPage'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/mobiles"> <Mobiles/> </Route>
        <Route path="/mobiles/:id"> <MobileDetailPage/> </Route>
        <Route path="/login"><Login/></Route>
        <Route path="/signup"><Signup/></Route>
        <Route path="/forgot-password"><ForgotPassword/></Route>
      </Switch>
    </Router>
  );
}

export default App;
