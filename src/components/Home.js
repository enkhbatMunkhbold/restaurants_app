import React, { useState } from 'react'
import Search from './Search'
import "../stylesheets/home.css"
import Restaurant from './Restaurant';

const Home = ({ restaurants, onUpdateList }) => {

  const [foundRestaurants, setFoundRestaurants] = useState([]);

  const initialData = {
    name: '',
    image: '../images/default-image.png',
    location: '',
    isFavorite: false,
    phoneNumber: '',
    rating: 0
  }

  function handleSearch(input) {
    const filtered = restaurants.filter(rest => rest.name.toLowerCase().includes(input.toLowerCase()))
    setFoundRestaurants(filtered)
  }

  // console.log('foundRestaurants:', foundRestaurants)

  const displayRestaurants = foundRestaurants.map(rest => {
    return (
      <Restaurant key={rest.id} 
        restaurant={rest} 
        onUpdateList={onUpdateList}
        // onSelectRestaurant={onSelectRestaurant}
      />
    )
  }) 

  return (
    <div  className='home'>
      <h1>Find Your Favorite Local Restaurants</h1>
      <hr className='border-line'/>
      <Search onSearch={handleSearch}/><br/><br/>
      <ul className='cards'>
        {foundRestaurants.length === 0 ? <Restaurant restaurant={initialData}/> : displayRestaurants}
      </ul>      
    </div>
  )
}

export default Home