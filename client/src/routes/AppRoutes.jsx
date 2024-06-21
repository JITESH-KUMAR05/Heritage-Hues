import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';  // Adjusted relative path
import Nav from '../components/Navbar/Navbar.jsx';  // Adjusted relative path
import Destinations from '../components/Home/Destinations.jsx';
import Philosophy from '../components/Home/Philosophy.jsx';

const AppRoutes = () => (
  <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    {/* <Route path="/about" element={<Nav />} /> */}
    <Route path="/destination" element={<Destinations />} />
    <Route path='/philosophy' element={<Philosophy />} />


  </Routes>
);
export default AppRoutes;
