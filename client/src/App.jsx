
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




       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
       <ContactUs />
       </div>

      </div>
    </Router>
  );
};

export default App;
