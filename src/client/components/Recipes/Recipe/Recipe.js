import React from "react";
import { Link, Route } from "react-router-dom";
import styles from "./Recipe.css";
import singleItem from "../../SingleItem/SingleItem";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (

    <div className={styles.product} className="search-result">
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      {/* the results returned by the api call dont have these fields. TODO change call to something that gives more info */}
      <div className={styles.product__details} className="recipe-details">
        <h2 className={styles.details__title}>{product.title}</h2>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>$ {product.price} </p>
      </div>

      <div className={styles.product__buttons} className="recipe-buttons">
        <Link to={`/recipe/${product.id}`}>
        {/* <Link to={`/SingleItem/${product.id}`}> */}
          <button
            onClick={() => loadCurrentItem(product)}
            // className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
            // whenever this button is clicked add the item to the cart
          onClick={() => addToCart(product.id)}
          className={`test`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

// send the dispatch function
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatches the addToCart function which are exported from shopping-actions
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

// null because we're not using any state 
export default connect(null, mapDispatchToProps)(Product);
