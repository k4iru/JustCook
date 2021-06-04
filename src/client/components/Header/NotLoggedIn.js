import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <Fragment>
      <li>
        <Link className="header-links" to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link className="header-links" to="/login">
          Login
        </Link>
      </li>
      <li>
        <Link className="header-links" to="/favourites">
          Favourites
        </Link>
      </li>
    </Fragment>
  );
};

export default NotLoggedIn;
