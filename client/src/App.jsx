
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

import Home from './components/Home/Home';
import Destinations from './components/Home/Destinations';
import Philosophy from './components/Home/Philosophy';


const App = () => {
  return (
    <Router>
      <div className='w-full pt-16'> 
        <Navbar />
        <AppRoutes />
        <Home />
        <Destinations />
        <Philosophy />

      </div>
    </Router>
  );
};

export default App;
