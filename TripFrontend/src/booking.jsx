import React from 'react'
import Header from './header';
import HotelContainer from './HotelContainer';
import HotelContainer2 from './hotelcontainer2';

const Booking = () => {
  return (
    <div className="desktop  booking-desktop">
      <div className="dashboard-wrapper">
        <div className="dashboard booking-dashboard">
          
            <Header/>
           
            <div className="hotel-reccomendation">
              <h3 className="hotel-text" style={{color: "white"}}>We have found over 10000 for you to stay in Thailand</h3>
              
            </div>
            <HotelContainer/>
            <h3 className="hotel-text" style={{color: "white"}}>The most recommended</h3>
            <HotelContainer2/>
        </div>
      </div>
    </div>
  )
}

export default Booking;
