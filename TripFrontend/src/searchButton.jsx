import React from 'react'
import { IoSearch } from "react-icons/io5";
import './styles/searchButton.css'

const SearchButton = () => {
  return (
    <button className='containerS'>
      <p>Find Trip Now</p>
      <IoSearch />
    </button>
  )
}

export default SearchButton;