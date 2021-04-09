import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Pages
import Home from './pages/Home'
import Navbar from './components/navbar'
import Mobiles from './pages/Mobiles'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/mobiles"> <Mobiles/> </Route>
      </Switch>
    </Router>
  );
}

export default App;
