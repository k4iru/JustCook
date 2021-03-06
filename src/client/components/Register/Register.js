import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { UpdateUser } from "../../redux/User/user-actions";
import jwt_decode from "jwt-decode";
import "./Register.css";

const Register = ({ user, UpdateUser }) => {
  let history = useHistory();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await getData({
      first: first,
      last: last,
      username: username,
      email: email,
      password: password,
    });

    console.log(response);
    console.log("response >>> " + response);

    // OK. TODO handle 409, 400 status codes
    if (response.status === 200) {
      const { token } = await response.json();
      console.log(token.token);
      console.log("token >>> " + token);
      // console.log('token >>> ' + token);
      const authenticatedUser = await jwt_decode(token);
      console.log("authenticated user " + authenticatedUser);
      sessionStorage.setItem("token", token);
      UpdateUser(authenticatedUser);
      history.push("/");
    } else {
      // VALIDATION
    }
  };

  const getData = async (data = {}) => {
    try {
      // request headers
      // add the payload  to the request body
      const response = await fetch("/api/register", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
        },
        body: JSON.stringify(data),
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  };

  // const getData = async (data) => {
  //   const headers = {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   };
  //   try {
  //     const response = await axios.post("/api/register", data, {
  //       headers: headers,
  //     });

  //     return response;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="page">
      <div className="form-container">
        <form className="register-form" onSubmit={onSubmit}>
          <h2>Register</h2>
          <input
            className="form-input"
            type="text"
            name="first"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            placeholder="First Name"
            required={true}
          />
          <input
            className="form-input"
            type="text"
            name="last"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            placeholder="Last Name"
          />
          <input
            className="form-input"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            className="form-input"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="form-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Register</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
