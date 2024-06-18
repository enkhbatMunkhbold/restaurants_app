import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import List from './components/List';
import Create from './components/Create';
// import Search from './components/Search';
import Restaurant from './components/Restaurant';
import './stylesheets/app.css';

const App = () => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/restaurants')
    .then(res => res.json())
    .then(data => setRestaurants(data));
  }, []);

  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<List restaurants={restaurants}/>} />
          <Route path="/restaurants/new" element={<Create />} />
          {/* <Route path="/restaurants/search" element={<Search />} /> */}
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
