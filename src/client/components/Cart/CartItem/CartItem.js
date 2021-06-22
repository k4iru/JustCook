import React, { useState } from "react";
import styles from "./CartItem.css";

import { connect } from "react-redux";
import {
  adjustQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {

  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    // any time the onChangeHandler is used, set the input to be the target value, and adjust the QTY of the item in the cart's state to be equal to the same value
    // can NOT send it the state, because the state takes a while to update so it will not always be the right value.
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={"cartItem"}>
      <img
        className={"cartItem__image"}
        src={item.image}
        alt={item.title}
      />
      <div className={"cartItem__details"}>
        <p className={"details__title"}>{item.title}</p>
        <p className={"details__desc"}>{item.description}</p>
        <p className={"details__price"}>$ { item.price ? item.price : 10}</p>
      </div>
      <div className={"cartItem__actions"}>
        <div className={"cartItem__qty"}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className={"actions__deleteItemBtn"}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // allows us to use these functions in our props
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

// null for props because we don't have props
export default connect(null, mapDispatchToProps)(CartItem);