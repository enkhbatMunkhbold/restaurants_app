import React from 'react'
import Restaurant from './Restaurant'
import Search from './Search'

const List = ({ restaurants, onUpdateList, onSearch, onSelectRestaurant }) => {

  const restaurantsList = restaurants.map(restaurant => {
    return ( 
      <Restaurant 
        key={restaurant.id} 
        restaurant={restaurant} 
        onUpdateList={onUpdateList} 
        onSelectRestaurant={onSelectRestaurant}
      />
    )
  })

  return (
    <div>
      <h1>List of Restaurants</h1>
      <hr className='border-line'/>
      <Search onSearch={onSearch}/>
      <ul className='cards'>
        {restaurantsList}
      </ul>      
    </div>
  )
}

export default List