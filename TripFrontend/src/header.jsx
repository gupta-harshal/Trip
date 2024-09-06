import React from 'react'
import './styles/header.css'
import Navitem from './navItem'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="headerH">
      <Navitem item="Explore"></Navitem>
      <Navitem item="Booking"></Navitem>
      <Navitem item="News"></Navitem>
      <Navitem item="Contact"></Navitem>
      <Link to="/signup"><Navitem item="Account"></Navitem></Link>
              
    </div>
  )
}

export default Header;