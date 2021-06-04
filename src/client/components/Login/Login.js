import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="page">
      <div className="form-container">
        <form className="login-form" onSubmit={onSubmit}>
          <h2>Login</h2>
          <input className="form-input" type="text" name="email" placeholder="Email" />
          <input className="form-input" type="password" name="password" placeholder="Password"/>
          <input className="btn" type="submit" value="Login"/>
        </form>
      </div>
    </div>
  );
}

export default Login;
