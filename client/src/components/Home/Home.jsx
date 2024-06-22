import './Home.css';
import HussainSagarImage from './HussainSagar.jpg'; // Importing the image file


const Home = () => {
  return (
    <div className="home w-full">
      <img src={HussainSagarImage} className='bg-img' alt="Hussain Sagar" />
      <div className="overlay">
        <div className="content w-[100vw] m-auto ">
          <h1>EXPLORE</h1>
          <h2>HYDERABAD</h2>
        </div>
      </div>

    </div>

  );
};

export default Home;
