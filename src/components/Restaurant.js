import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../stylesheets/restaurant.css"

const Restaurant= ({ restaurant, onUpdateList, onSelectRestaurant }) => {

  const { id, name, image, location, isFavorite } = restaurant
  const [ favorite, setFavorite ] = useState(isFavorite)
  const navigate = useNavigate()
  
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

  function handleLikeClick() {
    setFavorite(prevState => !prevState);
    handleFavoriteClick(id)
  }

  function handleButtonClick() {
    navigate(`/restaurants/${id}`)
    onSelectRestaurant(restaurant)
  }

  return (
    <div className='card position-relative'>
      <img src={image} alt={name} />
      <div className="container">
        <h5>{name}</h5>
        <p>Location: {location}</p> 
        <div className="btn-toolbar justify-content-between" role="toolbar">
          <div className="btn-group" role="group" aria-label="button">
            <button className='btn btn-light' onClick={handleButtonClick}>More info...</button>
          </div>
          <div className="favorite-group">
            <div className="favorite-group-icon">
              {favorite ? 
                ( <i className="bi bi-heart-fill" onClick={handleLikeClick}></i>) : 
                ( <i className="bi bi-heart" onClick={handleLikeClick}></i>)
              }
            </div>               
          </div>
        </div>           
      </div>
    </div>
  )
}

export default Restaurant