import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { IoSearch } from "react-icons/io5";
import './styles/searchButton.css';

const SearchButton = ({ onclick }) => {
  const handleClick = () => {
    console.log("Button clicked"); // Debugging line to see if the click is registered
    if (onclick) {
      onclick(); // Ensure onclick is called
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className='containerS' 
      aria-label="Find Trip Now"
    >
      <p>Find Trip Now</p>
      <IoSearch />
    </button>
  );
};

// Define prop types
SearchButton.propTypes = {
  onclick: PropTypes.func.isRequired, // Expect a function for onclick
};

export default SearchButton;
