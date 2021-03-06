import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Details from "./components/Details/Details";

import { connect } from "react-redux";

import Recipes from './components/Recipes/Recipes';
import Profile from "./components/Profile/Profile";

const App = ({ current }) => {
  return (
    <Router>
      <div>
        <Header />
        {/* <Searchbar /> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/register" component={Register} />

          <Route exact path="/recipes" component={Recipes} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/favourites" component={Recipes} />

          <Route exact path="/cart" component={Cart} />

          <Route exact path="/profile" component={Profile} />

          <Route exact path="/" component={Home} />

          <Route exact path="/details/:id" component={Details} />
            
          <Route exact path="/recipe/:id" >
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
