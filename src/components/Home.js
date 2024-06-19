import React from 'react'
import Search from './Search'
// import "../stylesheets/home.css"

const Home = ({ onSearch }) => {
  return (
    <div  className='home'>
      <h1>Your Favorite Local Restaurants</h1>
      <Search />
    </div>
  )
}

export default Home