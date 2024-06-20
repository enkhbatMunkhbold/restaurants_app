import React from 'react'
import "../stylesheets/home.css"

const Search = ({ onSearch }) => {

  function handleChange(e) {
    console.log(e.target.value)
    onSearch(e.target.value)
  }
  return (
    <div className="input-group searchbar">
      <input type="search" className="form-control rounded" placeholder="Search for restaurant..." aria-label="Search" aria-describedby="search-addon" onChange={handleChange}/>
      <button className="btn btn-outline-primary" type="button" id="search-addon">Search</button>
    </div>
  )
}

export default Search