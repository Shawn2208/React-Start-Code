import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services'; 
import FAQ from './pages/FAQ/FAQ';
import Tutorial from './pages/Tutorial/Tutorial';

function App() {
  return (
    <Router>
      <Header /> {/* Header includes navigation links */}
      <div className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> {/* Add routes */}
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
