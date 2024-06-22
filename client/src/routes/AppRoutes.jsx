import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';  // Adjusted relative path
import Nav from '../components/Navbar/Navbar.jsx';  // Adjusted relative path
import Destinations from '../components/Home/Destinations.jsx';
import Philosophy from '../components/Home/Philosophy.jsx';
import ContactUs from '../components/Contact/ContactUs.jsx';  // Adjusted relative path
import Feedback from '../components/Feedback/Feedback.jsx';  // Adjusted relative path

const AppRoutes = () => (
  <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    {/* <Route path="/about" element={<Nav />} /> */}
    <Route path="/destination" element={<Destinations />} />
    <Route path='/philosophy' element={<Philosophy />} />
    <Route path='/contact' element={<ContactUs />} />
    <Route path='/feedback' element={<Feedback />} />


  </Routes>
);
export default AppRoutes;
