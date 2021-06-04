import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavItems from "./NavItems";
import { HeaderItems } from "./HeaderItems";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

const Navbar = ({ user, cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <header>
      <nav className="HeaderItems">
        <Link to="/" className="header-logo-link">
          <h1 className="header-logo">JustCook</h1>
        </Link>
        <div className="menu-icon" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <NavItems user={user} />
          <li>
            <Link className={"header-links"} to="/cart">
              <div>
                <h3 className={"test"}>Cart</h3>
                <img
                  className={"test"}
                  src="https://image.flaticon.com/icons/svg/102/102276.svg"
                  alt="shopping cart"
                />
                <div className={"test"}>{cartCount}</div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Navbar);
