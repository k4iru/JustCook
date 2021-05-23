import React from "react";
import Searchbar from '../Searchbar/Searchbar'
import HomeRecipes from '../Recipes/FetchRecipes'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeItems } from "./HomeItems";
import './Home.css';
import Background from "./1-main-image.png";
// Attempt at importing image


function Home() {
  return (
    <div className="page">

      {/* use the image */}

     {/* <img src={Background} /> */ } 
      <div className="banner">
        <h2>Just Cook</h2>
      </div>
      <div className="text-block">
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Nunc vestibulum est eget imperdiet molestie.
          Sed convallis, massa ac interdum vulputate,
          orci velit mollis lorem,
          vitae commodo nunc elit id turpis
        </p>
      </div>  
      <div className="search-bar"> 
        <Searchbar />
      </div>
      <div className="home-recipes">
        <HomeRecipes />
      </div>
    </div>
      
  );
}

export default Home;
