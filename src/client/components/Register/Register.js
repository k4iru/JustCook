import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="page">
      <div className="form-container">
        <form className="register-form">
          <h2>Register</h2>
          <input className="form-input" type="text" name="fname" placeholder="First Name" required="true" />
          <input className="form-input" type="text" name="lname" placeholder="Last Name"/>
          <input className="form-input" type="text" name="email" placeholder="Email" />
          <input className="form-input" type="password" name="password" placeholder="Password"/>
          <input className="form-input" type="text" name="phone" placeholder="Phone"/>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
