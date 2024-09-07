import React from 'react'
import Header from './header';
import Inputfield from './inputfield';

const Signupform = () => {
  return (
    <div className='desktop'>
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
                  name="firstname"
                  type="text"
                  label="Fisrt Name"
                />
                <Inputfield
                  name="lastname"
                  type="text"
                  label="Last Name"
                />
              </div>
              <Inputfield
                name="email"
                type="email"
                label="Email"
              />
              <Inputfield
                name="address"
                type="text"
                label="Address"
              />
              <Inputfield
                name="contact"
                type="number"
                label="Contact Number"
              />

              <div className="signup-place">
                <Inputfield
                  name="city"
                  type="text"
                  label="City"
                />
                <Inputfield 
                  name="state"
                  type="text"
                  label="State"
                />
              </div>
              <Inputfield
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