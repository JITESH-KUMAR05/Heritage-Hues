import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';  // Adjusted relative path
import Nav from '../components/Navbar/Navbar.jsx';  // Adjusted relative path

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<Nav />} />
    

  </Routes>
);

export default AppRoutes;
