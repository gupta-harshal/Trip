import React from "react";
import Navitem from "./navItem";
import "./styles/signup.css";
import {Link} from 'react-router-dom'
import Header from "./header";
const Signup = () => {
  return (
    <div className="signup">
      <div className="dashboard-wrapper">
        <div className="dashboard">
          <div className="overlap-group">
            <img className="png" alt="Png" src='../src/assets/signupgirl.png' />
            <div className="sif">
              <form className="signup-form">
                <h2>Sign Up</h2>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
              </form>
            </div>
          </div>
          <div className="navbar">
            
            
              <Header/>
           
            <div className="language">
              <img className="group-3" alt="Group" src="group-1.png" />
              <div className="text-wrapper-5">IN</div>
              <img className="group-4" alt="Group" src="group-2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
