import React, { useState } from 'react'
import "../stylesheets/restaurant.css"

const RestaurantCard = ({ restaurant, onUpdateList }) => {

  const { id, name, image, location, isFavorite } = restaurant
  const [ favorite, setFavorite ] = useState(isFavorite)
  
  function handleFavoriteClick(chooseId) {
    fetch(`http://localhost:6001/restaurants/${chooseId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({isFavorite: !isFavorite})
    }).then(res => res.json())
    .then(updatedRestaurant => onUpdateList(updatedRestaurant))
  }

  function handleButtonClick() {
    setFavorite(prevState => !prevState);
    handleFavoriteClick(id)
  }

  return (
    <li className='card'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>Location: {location}</p>   
      {favorite ? 
        (<button  className='primary'onClick={handleButtonClick}>Favorite</button>) : 
        (<button className='secondary'onClick={handleButtonClick}>Not Favorite</button>)
      }   
    </li>
  )
}

export default RestaurantCard