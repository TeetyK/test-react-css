import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import DetailsPage from './DetailsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-300 to-sky-400 h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/details" element={<DetailsPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
