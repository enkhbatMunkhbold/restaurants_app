import React from 'react'
import Restaurant from './Restaurant'
import Search from './Search'

const List = ({ restaurants, onUpdateList }) => {

  const restaurantsList = restaurants.map(restaurant => {
    return <Restaurant key={restaurant.id} restaurant={restaurant} onUpdateList={onUpdateList}/>
  })

  return (
    <div>
      <h2>List of Restaurants</h2>
      <hr className='border-line'/>
      <Search />
      <ul className='cards'>
        {restaurantsList}
      </ul>      
    </div>
  )
}

export default List