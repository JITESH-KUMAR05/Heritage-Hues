import './Home.css';
import HussainSagarImage from './HussainSagar.jpg'; // Importing the image file

const Home = () => {
  return (
    <div className="home w-full">
      <img src={HussainSagarImage} alt="Hussain Sagar" />
      <div className="overlay">
      <div className="content w-full">
        <h1>EXPLORE</h1>
        <h2>INDIA</h2>
        <input type="text" placeholder="Search for your destination" className="search-box" />
      </div>
      </div>
    </div>
    
  );
};

export default Home;
