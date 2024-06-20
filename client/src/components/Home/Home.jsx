import './Home.css';

const Home = () => {
  return (
    <div className="home w-full">
      <div className="overlay"></div>
      <div className="content w-full">
        <h1>EXPLORE</h1>
        <h2>INDIA</h2>
        <input type="text" placeholder="Search for your destination" className="search-box" />
      </div>
    </div>
  );
};

export default Home;