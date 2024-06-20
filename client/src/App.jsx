// client/src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <div className='w-full'>
        <Navbar />
        <h1>hello world</h1>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
