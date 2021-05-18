import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './components/About/About';
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import Searchbar from './components/Searchbar/Searchbar'

import { connect } from "react-redux";

import Recipes from './components/Recipes/Recipes';

function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Searchbar />
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" >
            <Home />
            <Recipes />
          </Route>
        </Switch>
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