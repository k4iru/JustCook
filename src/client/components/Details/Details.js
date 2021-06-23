import React, { useEffect } from "react";
import styles from "./Details.css";
import { useParams } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const Details = ({ recipe, current, addToCart }) => {
  const { id } = useParams();

  // get recipe info
  const getInfo = async (url, payload = {}) => {
    try {
      // request headers
      // add the payload  to the request body
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  let results = getInfo("/api/recipe", {
    id: id,
  });

  //Show in console successful API call
  results.then((result) => {
    var title = document.getElementById("title");
    title.innerHTML = result.title;

    var prepTime = document.getElementById("prepTime");
    prepTime.innerHTML = result.readyInMinutes;

    var servings = document.getElementById("servings");
    servings.innerHTML = result.servings;

    var summary = document.getElementById("summary");
    summary.innerHTML = result.summary;

    var ingredients = document.getElementById("ingredients");
    var ingredientsList = "<ul>";
    for (var i = 0; i < result.extendedIngredients.length; i++) {
      ingredientsList +=
        "<li>" + result.extendedIngredients[i].original + "</li>";
    }
    ingredientsList += "</ul>";

    ingredients.innerHTML = ingredientsList;
    console.log(ingredientsList);

    var instructions = document.getElementById("instructions");
    instructions.innerHTML = result.instructions;

    var image = document.getElementById("img");
    image.src = result.image;

    console.log(result);
    return result;
  });

  return (
    <div>
      <div className="recipeDetails">
        <h1 id="title">Recipe Title</h1>
        <div className="imgBlock">
          <img id="img"></img>
        </div>
        <div className="splitBlock">
          <h2>Time to Make</h2>
          <span id="prepTime"></span> Minutes
        </div>
        <div className="splitBlock">
          <h2>Servings</h2>
          <span id="servings"></span>
        </div>
        <div className="splitBlock">
          <h2>Summary</h2>
          <span id="summary"></span>
        </div>
        <div className="splitBlock">
          <h2>Ingredients List</h2>
          <span id="ingredients"></span>
        </div>
        <div className="splitBlock">
          <h2>Instructions</h2>
          <span id="instructions"></span>
        </div>
        <div className={styles.product__buttons} className="recipe-buttons">
          <button
            // whenever this button is clicked add the item to the cart
            onClick={() => addToCart(current.id)}
            className="recipeDetailBtn"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

// send the dispatch function
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatches the addToCart function which are exported from shopping-actions
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
