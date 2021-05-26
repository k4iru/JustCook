import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import HomeRecipes from "../Recipes/FetchRecipes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeItems } from "./HomeItems";
import "./Home.css";

function Home() {
  return (
    <div className="page">
      <div className="banner">
        <h2>Just Cook</h2>
        <p>Stop Shopping, Get Cooking!</p>
      </div>
      <div className="text-block">
        <p>
          No shopping needed! For the busy professional that love to cook but
          not the shopping! Pick a recipe online, get the ingredients delivered
          straight to you!
        </p>
      </div>
      <div className="search-bar">
        <Searchbar />
      </div>
      <div className="home-recipes">
        <h2>Check Out Some Popular Recipes!</h2>
        <HomeRecipes />
      </div>
    </div>
  );
}

export default Home;
