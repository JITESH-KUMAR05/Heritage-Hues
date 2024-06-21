import './Home.css';
import HussainSagarImage from './HussainSagar.jpg'; // Importing the image file
import Destinations from './Destinations';

const Home = () => {
  return (
    <div className="home w-full">
      <img src={HussainSagarImage} className='bg-img' alt="Hussain Sagar" />
      <div className="overlay">
        <div className="content w-[100vw] m-auto ">
          <h1>EXPLORE</h1>
          <h2>HYDERABAD</h2>
          <input type="text" placeholder="Search for your destination" className="search-box w-[30rem] " />
        </div>
      </div>

    </div>

  );
};

export default Home;
