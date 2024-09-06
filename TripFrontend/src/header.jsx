import React from 'react'
import './styles/header.css'
import Navitem from './navItem'
const Header = () => {
  return (
    <div className="headerH">
      <Navitem item="Explore"></Navitem>
      <Navitem item="Booking"></Navitem>
      <Navitem item="News"></Navitem>
      <Navitem item="Contact"></Navitem>
      <Navitem item="Account"></Navitem>
              
    </div>
  )
}

export default Header;