import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li> {/* Add links */}
          <li><Link to="/tutorial">Tutorial</Link></li>
        <li><Link to="/faq">FAQ</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
