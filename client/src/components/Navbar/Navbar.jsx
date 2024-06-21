import './Navbar.css';
import logo from './hhlogo.jpg'
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
// import Destinations from '../Home/Destinations';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Heritage Hues Logo" className="logo rounded-[50%]" />
        <span>HERITAGE HUES</span>
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <Link to="/" >Home</Link>
          <Link to="/destination">Destination</Link>
          <Link to="/philosophy">Philosophy</Link>
          {/* <Link to="/about">About Us</Link> */}
          <Link to="/contact">Contact</Link>
          
        </ul>
      </div>
      <a href="http://127.0.0.1:5000/" target='_blank'><button className="chat-button navbar-button">Chat with us</button></a>
    </nav>
  );
};

export default Navbar;