import React from 'react'
import './styles/adress.css'
import Hotel from './hotel';
import { IoSearch } from "react-icons/io5";


import SearchButton from './searchButton';

const Address= () => {
  return (
    <div className="adress">
      <div className="address-container">
      <div className="address-div">
        <div className="address-icon">
          <div className="address-button-symbol">
            <div className="address-symbol"></div>
          </div>
        </div>
        <div className="address-destination">
          <div className="address-text-wrapper">Going to</div>
          <input className="address-text-wrapper-2"></input>
        </div>
      </div>
      <div className="address-div">
        <div className="address-icon">
          <div className="address-button-symbol">
            <div className="address-symbol"></div>
          </div>
        </div>
        <div className="address-destination">
          <div className="address-text-wrapper">Date</div>
          <input className="address-text-wrapper-2"></input>
        </div>
      </div>
      <div className="address-div">
        <div className="address-icon">
          <div className="address-button-symbol">
            <div className="address-symbol"></div>
          </div>
        </div>
        <div className="address-destination">
          <div className="address-text-wrapper">Passenger</div>
          <input className="address-text-wrapper-2"></input>
        </div>
      </div>
      <div className="address-div">
        <div className="address-icon">
          <div className="address-button-symbol">
            <div className="address-symbol"></div>
          </div>
        </div>
        <div className="address-destination">
          <div className="address-text-wrapper">Room</div>
          <input className="address-text-wrapper-2"></input>
        </div>
      </div>
      <button className='containerS'>Search<IoSearch /></button>
      
      
    </div>
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
    </div>
  );
};

export default Address