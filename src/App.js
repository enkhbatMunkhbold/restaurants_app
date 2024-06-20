import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import List from './components/List';
import Create from './components/Create';
// import Search from './components/Search';
import RestaurantDetails from './components/RestaurantDetails';
import './stylesheets/app.css';

const App = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState({})

  useEffect(() => {
    fetch('http://localhost:6001/restaurants')
    .then(res => res.json())
    .then(data => setRestaurants(data));
  }, []);

  function handleUpdateList(updatedRestaurant) {
    setRestaurants(prevState => prevState.map(restaurant => restaurant.id === updatedRestaurant.id? updatedRestaurant : restaurant))
  }

  function handleAddRestaurant(data) {
    setRestaurants([...restaurants, data])
  }

  function handleSearch(input) {
    setSearch(input)
  }

  function handleSelectRestaurant(restaurant) {
    setSelected(restaurant)
  }

  const displayRestaurants = search.length !== 0 ? restaurants.filter(rest => rest.name.toLowerCase().includes(search.toLowerCase())) : restaurants

  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={
            <List restaurants={displayRestaurants} 
              onUpdateList={handleUpdateList} 
              onSearch={handleSearch}
              onSelectRestaurant={handleSelectRestaurant}
            />} 
          />
          <Route path="/restaurants/new" element={<Create onAddRestaurant={handleAddRestaurant}/>} />
          <Route path="/restaurants/:id" element={<RestaurantDetails restaurant={selected}/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
