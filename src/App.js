import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import List from './pages/List';
import Create from './pages/Create';
import Search from './pages/Search';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<List />} />
        <Route path="/restaurants/new" element={<Create />} />
        <Route path="/restaurant/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
