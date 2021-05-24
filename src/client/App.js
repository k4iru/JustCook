import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';

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
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
          <Route path="Recipe/1" >
            <SingleItem />
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