
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <div className='w-full'>
        <Navbar />
         
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
