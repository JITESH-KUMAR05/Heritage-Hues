import './Navbar.css';
import logo from './hhlogo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Heritage Hues Logo" className="logo rounded-[50%]" />
        <span>HERITAGE HUES</span>
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <button className="chat-button navbar-button">Chat with us</button>
    </nav>
  );
};

export default Navbar;