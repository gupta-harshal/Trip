import React from 'react'
import './styles/header.css'
import Navitem from './navItem'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="headerH">
      <div className="brand">
        <div className="logo">
          <div className="travelaja">travnt</div>
        </div>
      </div>
      <Link className='linkH' to='/'><Navitem item="Explore"></Navitem></Link>
      <Link className='linkH' to='/booking'><Navitem item="Booking"></Navitem></Link>
      <Link to='/chat'><Navitem item="ChatBot"></Navitem></Link>
      <Link to='/signupform'><Navitem item="Contact"></Navitem></Link>
      <Link className='linkH' to="/signup"><Navitem item="Account"></Navitem></Link>
              
    </div>
  )
}

export default Header;