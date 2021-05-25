import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { connect } from "react-redux";

import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Searchbar /> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/register" component={Home} />

          <Route exact path="/recipes" component={Recipes} />

          <Route exact path="/login" component={Home} />

          <Route exact path="/favourites" component={Recipes} />

          <Route exact path="/cart" component={Home} />

          <Route exact path="/" component={Home} />
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
