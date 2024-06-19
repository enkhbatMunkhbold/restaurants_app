import React from 'react'
import "../stylesheets/home.css"

const Search = ({ onSearch }) => {

  function handleChange(e) {
    onSearch(e.target.value)
  }
  return (
    <div class="input-group mb-3 w-75 searchbar">
      <input type="text" class="form-control" placeholder="Search for restaurant..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">Search</span>
      </div>
    </div>    
  )
}

export default Search