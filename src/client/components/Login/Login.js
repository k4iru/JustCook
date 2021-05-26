import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="page">
      <div className="form-container">
        <form className="login-form">
          <h2>Login</h2>
          <input className="form-input" type="text" name="email" placeholder="Email" />
          <input className="form-input" type="password" name="password" placeholder="Password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
