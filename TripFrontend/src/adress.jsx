import React from 'react'
import './styles/adress.css'
import Addressbar from './addressbar';
import SearchButton from './searchButton';

const Address= () => {
  return (
    <div className="address-container">
      <Addressbar
        activity="Going to"
        main="Pattaya"
      />
      <Addressbar 
        activity="Date"
        main="17 Aug - 17 Sept"
      />
      <Addressbar
        activity="Passengers"
        main="2 Passengers"
      />
      <Addressbar
        activity="Room"
        main="1 Room"
      />
      <SearchButton
        name="Search"
      />
      
    </div>
  );
};

export default Address