import React from 'react'

const RestaurantDetails = ({restaurant}) => {

  const { id, name, image, location, isFavorite } = restaurant 
  console.log('image:', image)
  return (
    <div>
      <h1>{name}</h1>
      <hr className='border-line'/>
      <img src={restaurant.image} alt={name}/>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            
          </div>
          <div className='col-md-6'>
            <p><span>Address:</span> {location}</p>
            {/* <p>{restaurant.display_phone}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetails