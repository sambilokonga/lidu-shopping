import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h2>Signup</h2>
        <div className="loginsignup-field">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            by continuing, i agree to the terms of the use and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
