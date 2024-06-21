import React from 'react'
import "../stylesheets/details.css"

const RestaurantDetails = ({restaurant}) => {

  const { id, name, image, location, isFavorite, phoneNumber, rating } = restaurant 
  
  return (
    <div className='details container'>
      <h1>{name}</h1>
      <hr className='border-line'/>
      <div className='row'>
        <div className='col-sm-4 mx-auto'>
          <img src={image} alt={name}/>
          <div className='text'>
            <p><span>Address:</span> {location}</p>
            <p><span>Phone number:</span> {phoneNumber}</p>
            <p><span>Rating:</span> {rating}</p> 
            <p><span>Favorite:</span>
              {isFavorite ? <i className="bi bi-hand-thumbs-up"></i> : 
                <i className="bi bi-hand-thumbs-down"></i>}
            </p>             
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetails