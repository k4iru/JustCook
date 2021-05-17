import React from "react";
import style from "./Recipes.css";

// importing the ability to connect to redux
import { connect } from 'react-redux';

import Recipe from "./Recipe/Recipe";

const Recipes = ({ recipes }) => {
    return (
        <div className="test">
            {/* for each recipe, we want to render the Recipe Component */}
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} product={recipe}/>
            ))}
        </div>
    );
};

// Allows us to choose what state in our redux store that this component has access to.  
const mapStateToProps = state => {
    return {
        // because we want a collection of all the products
        // state.shop.products - telling react redux to get the value from the state, then the store from the rootReducer file which then refers to whatever state is in the shopping reducer file
        recipes: state.shop.recipes
        // we now have access to the products inside of our props
    }
}

// connect function passed in as a "Higher Order Component"
export default connect(mapStateToProps)(Recipes);