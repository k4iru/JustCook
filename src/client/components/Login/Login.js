import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.css";

// switch from fetch to axios because fetch headers are iterable objects that dont appear unless explicity looped

const Login = () => {
  let history = useHistory();

  // use react-hooks for forms for simplicity instead of redux
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault(); // stop page refresh

    const response = await getData({ username: username, password: password });
    if (response.status === 200) {
      const token = response.data;
      const user = jwt_decode(token);
      console.log(user);

      // session storage is cleared on page close. localstorage is kept with no expiration date
      // TODO set expiration for jwt
      sessionStorage.setItem("token", token);
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

export default Login;
