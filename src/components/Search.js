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
    </div>
  )
}

export default Search