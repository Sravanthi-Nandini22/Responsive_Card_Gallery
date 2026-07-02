import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './PagesNew/Home';
import Gallery from './PagesNew/Gallery';
import CardDetails from './PagesNew/CardDetails';
import About from './PagesNew/About';
import Contact from './PagesNew/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Constant Application Header/Navbar (Requirement 1) */}
        <Navbar />
        
        {/* Main Routing Views */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:id" element={<CardDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Constant Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;