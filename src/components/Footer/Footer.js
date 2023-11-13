import React from 'react';
import './Footer.css'; // Make sure to create and import Footer.css

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>About</h4>
        <p>This React template is designed to help developers quickly start their projects.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: info@example.com</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        {/* Add social media icons or links here */}
      </div>
    </footer>
  );
};

export default Footer;
