import React from 'react'
import Header from './header';
import Inputfield from './inputfield';

const Signupform = () => {
  return (
    <div>
      <div className="dashboard-wrapper">
        <div className="dashboard signup-dashboard">
          <Header/>
          <div className="signup-container">
            <div className="botimage">
              <img src="" alt="" />
            </div>
            <form action="">
              <div className="signup-name">
                <Inputfield
                  classname="firstname"
                  name="firstname"
                  type="text"
                  label="Fisrt Name"
                />
                <Inputfield
                  classname="lastname"
                  name="lastname"
                  type="text"
                  label="Last Name"
                />
              </div>
              <Inputfield
                classname="signup-email"
                name="email"
                type="email"
                label="Email"
              />
              <Inputfield
                classname="signup-address"
                name="address"
                type="text"
                label="Address"
              />
              <Inputfield
                classname="signup-contact"
                name="contact"
                type="number"
                label="Contact Number"
              />

              <div className="signup-place">
                <Inputfield
                  classname="signup-city"
                  name="city"
                  type="text"
                  label="City"
                />
                <Inputfield
                  classname="signup-state"
                  name="state"
                  type="text"
                  label="State"
                />
              </div>
              <Inputfield
                classname="signup-password"
                name="password"
                type="password"
                label="Password"
              />

              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signupform;