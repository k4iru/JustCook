import React from "react";
import styles from "./SingleItem.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";



const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={"singleItem"}>
      <img
        // className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={"singleItem__details"}>
        <p className={"details__title"}>{current.title}</p>
        <p className={"details__description"}>{current.description}</p>
        <p className={"details__price"}>$ {current.price ? current.price  : '10.00' }</p>

        <button
          onClick={() => addToCart(current.id)}
          className={"details__addBtn"}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);