import React, { useState, useEffect } from "react";
import styles from "./Cart.css";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
    useEffect(() => {
      //declaring items and price variables to default to 0 - next loop will be getting each item in the cart 
      let items = 0;
      let price = 0;
  
      //getting each item in the cart and then multiplying the price with the quantity
      cart.forEach((item) => {
        items += item.qty;
        console.log(price);
        if (price === "undefined" || price == 0 || price == NaN) {
          price += item.qty * 10;
          console.log(price, "price after calc")
        } else {
          // price += item.qty * item.price;
          price += item.qty * 10;
        }
      });
  
      //setting the totals for item + price
      setTotalItems(items);
      setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  
    //after logic above is done - return the information to the user
    return (
      <div className={"cart"}>
        <div className={"cart__items"}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className={"cart__summary"}>
          <h4 className={"summary__title"}>Cart Summary</h4>
          <div className={"summary__price"}>
            <span>TOTAL: ({totalItems} items)</span>
            <span>$ {totalPrice}</span>
          </div>
          <button className={"summary__checkoutBtn"}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    );
  };



const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);