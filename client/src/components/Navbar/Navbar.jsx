// client/src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/path-to-logo.png" alt="Heritage Hues Logo" className="logo" />
        <span>HERITAGE HUES</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#activities">Activities</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
