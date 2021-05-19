import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './components/About/About';
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import Searchbar from './components/Searchbar/Searchbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { connect } from "react-redux";

import Recipes from './components/Recipes/Recipes';


function App() {
  return (

    <Router>
      <div>
        <Header />
        {/* <Searchbar /> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Home />
          </Route>
          <Route path="/recipe">
            <Recipes />
          </Route>
          <Route path="/login">
            <Home />
          </Route>
          <Route path="/favourites">
            <Recipes />
          </Route>
          <Route path="/cart">
            <Home />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);