import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { UpdateUser} from '../../redux/User/user-actions';

const LoggedIn = ({user, UpdateUser}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    UpdateUser(null);
    sessionStorage.removeItem('token');
    console.log("logout");
  };
  return (
    <Fragment>
      <li>
        <Link className="header-links" to="/profile">
          {user.username}
        </Link>
      </li>
      <li>
        <Link className="header-links" to="/favourites">
          Favourites
        </Link>
      </li>
      <li>
        <form onSubmit={onSubmit}>
          <input className="header-links" type="submit" value="Logout" />
        </form>
      </li>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
    return {
      user: state.user.user,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      UpdateUser: (user) => dispatch(UpdateUser(user)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
