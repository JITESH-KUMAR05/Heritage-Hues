
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <div className='w-full pt-16'> {/* Adjust pt-16 based on your navbar height */}
        <Navbar />
        <h1>hello world</h1>
        <AppRoutes />
        <Home />
      </div>
    </Router>
  );
};

export default App;
