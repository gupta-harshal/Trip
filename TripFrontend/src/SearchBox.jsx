import React from "react";
import "./styles/SearchBox.css";
import SearchButton from "./searchButton";

export const SearchBox = ({onchange,onclick}) => {
  return (
    <div className="search-frame">
      <div className="search-memories">Ask Reva...</div>
      <input className="search-search-input" type="text" placeholder="Search..." onChange={onchange} />
      <SearchButton onclick={onclick} button="Go"/>
    </div>
  );
};
