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

           
            <div className="hotel-reccomendation">
              <h3 className="hotel-text" style={{color: "white"}}>We have found over 10000 for you to stay in Thailand</h3>
              
            </div>
            <div className='hotel-container'>
              <Hotel
                
                hotelname="Siam Hotel"
                pricing="$ 98"
                place="pattaya"
                rating="8.3"
              />
              
            </div>
            <h3 className="hotel-text" style={{color: "white"}}>The most recommended</h3>
            <HotelContainer2/>
        </div>
      </div>
    </div>
  )
}

export default Booking;
