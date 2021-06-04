import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { UpdateUser} from '../../redux/User/user-actions';
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.css";

// switch from fetch to axios because fetch headers are iterable objects that dont appear unless explicity looped

const Login = ({user, UpdateUser}) => {
  let history = useHistory();

  // use react-hooks for forms for simplicity instead of redux
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault(); // stop page refresh

    const response = await getData({ username: username, password: password });
    
    // TODO handle status code 400, 409
    if (response.status === 200) {
      const token = response.data;
      const authenticatedUser = jwt_decode(token);
      //console.log(authenticatedUser.username);

      // session storage is cleared on page close. localstorage is kept with no expiration date
      // TODO set expiration for jwt
      sessionStorage.setItem("token", token);

      // update user state
      UpdateUser(authenticatedUser);
      history.push("/");
    }
    else {
      // DO validation
    }
  };

  const getData = async (data) => {
    try {
      const response = await axios.post("/api/login", data);
      //console.log(response);

      return response;

      // get token back and decode
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="page">
      <div className="form-container">
        <form className="login-form" onSubmit={onSubmit}>
          <h2>Login</h2>
          <input
            className="form-input"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <input
            className="form-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input className="btn" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

// REDUX
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

export default connect(mapStateToProps,mapDispatchToProps )(Login);
