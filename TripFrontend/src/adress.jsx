import React from 'react'
import './styles/adress.css'


import SearchButton from './searchButton';

const Address= () => {
  return (
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
      <SearchButton
        name="Search"
      />
      
    </div>
  );
};

export default Address