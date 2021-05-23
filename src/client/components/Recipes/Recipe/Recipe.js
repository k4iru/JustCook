import React from "react";
import { Link } from "react-router-dom";
import styles from "./Recipe.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (

    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>$ {product.price} </p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
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
