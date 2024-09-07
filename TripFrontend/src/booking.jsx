import React from 'react'
import Header from './header';
import Hotel from './hotel'
import HotelContainer2 from './hotelcontainer2';
import Address from './adress';
import './styles/hotelcontainer.css'

const Booking = () => {
  return (
    <div className="desktop  booking-desktop">
      <div className="dashboard-wrapper">
        <div className="dashboard booking-dashboard">
          
            <Header/>
            <Address/>

           
            
            <h3 className="hotel-text" style={{color: "white"}}>The most recommended</h3>
            <HotelContainer2/>
        </div>
      </div>
    </div>
  )
}

export default Booking;
