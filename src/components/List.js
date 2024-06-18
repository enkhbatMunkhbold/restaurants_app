import React from 'react'
import Restaurant from './Restaurant'

const List = ({ restaurants }) => {

  const restaurantsList = restaurants.map(restaurant => {
    return <Restaurant key={restaurant.id} restaurant={restaurant} />
  })

  return (
    <div>
      <h2>List of Restaurants</h2>
      <hr className='border-line'/>
      <ul className='cards'>
        {restaurantsList}
      </ul>      
    </div>
  )
}

export default List