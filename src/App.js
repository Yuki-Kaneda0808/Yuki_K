import './App.css';
import OocyteImage from './images/Oocyte.png'; // Import the background image
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navigation from './components/Navigation';
import Home from './components/Home'; // Home component
import About from './components/About'; // About component
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="background-image">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
