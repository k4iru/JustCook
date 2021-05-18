import React from "react";
import "./searchbar.css";

const Searchbar = () => (
  <form action="/" method="GET">
    <label htmlFor="search">
      <span className="hidden">Recipe Search Bar</span>
    </label>
    <input type="text" name="searchbar"></input>
    <input type="submit"></input>
  </form>
);

export default Searchbar;
