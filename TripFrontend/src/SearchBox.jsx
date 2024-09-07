import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./styles/SearchBox.css";
import SearchButton from "./searchButton";

export const SearchBox = ({ onchange, onclick, render}) => {
  return (
    <div className="search-frame">
      <div className="search-memories">Ask Reva...</div>
      <input 
        className="search-search-input" 
        type="text" 
        placeholder="Search..." 
        onChange={onchange} 
      />
      <SearchButton 
        onclick={onclick} 
        button="Go"
        name={render} 
      />
    </div>
  );
};

// Define prop types
SearchBox.propTypes = {
  onchange: PropTypes.func.isRequired, // Expect a function for onchange
  onclick: PropTypes.func.isRequired, // Expect a function for onclick
};

