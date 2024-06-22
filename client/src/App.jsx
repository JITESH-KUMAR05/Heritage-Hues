
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

import Home from './components/Home/Home';
import Destinations from './components/Home/Destinations';
import Philosophy from './components/Home/Philosophy';
import ContactUs from './components/Contact/ContactUs';


const App = () => {
  return (
    <Router>
      <div className='w-full pt-16'>
        <Navbar />
        <AppRoutes />
        <Home />
        <Destinations />
        <Philosophy />


        <Map />

        <div className="flex items-center justify-center min-h-screen ">
          <div className='w-[50%] h-[25rem] bg-black'>
            <ContactUs />

          </div>
          <div className='w-[50%] h-[25rem] bg-black'>
            <Feedback />

          </div>



        </div>

      </div>
    </Router>
  );
};

export default App;
