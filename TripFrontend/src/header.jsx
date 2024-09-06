import React from 'react'
import './styles/header.css'
import Navitem from './navItem'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="headerH">
      <Link className='linkH' to='/'><Navitem item="Explore"></Navitem></Link>
      <Link className='linkH' to='/booking'><Navitem item="Booking"></Navitem></Link>
      <Navitem item="News"></Navitem>
      <Navitem item="Contact"></Navitem>
      <Link className='linkH' to="/signup"><Navitem item="Account"></Navitem></Link>
              
    </div>
  )
}

export default Header;