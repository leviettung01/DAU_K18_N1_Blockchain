import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './componets/Navbar/index';
import Home from './page/Home';
import Mynft from "./page/Mynft";
import Forge from './page/Forge';
import Marketplace from './page/Marketplace';
import Admin from "./page/Admin";
import Details from './page/Details';
import Footer from './componets/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/mynft' component={Mynft} />
      <Route path='/forge' component={Forge} />
      <Route path='/marketplace' component={Marketplace} />
      <Route path='/admin' component={Admin} />
      <Route path="/details/:id?" component={Details} />
      <Route>404 Not Found!</Route>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
