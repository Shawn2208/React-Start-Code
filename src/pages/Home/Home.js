import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the React Starter Template!</h1>
      <p>This template is designed to help developers kickstart their React projects with ease.</p>
      <div className="features">
        <h2>Features:</h2>
        <ul>
          <li>Pre-configured with essential React components</li>
          <li>Integrated with a Node.js backend setup</li>
          <li>Example pages for quick setup (Home, About, Contact, etc.)</li>
          <li>Basic routing with React Router</li>
          <li>Responsive design and modern UI/UX elements</li>
        </ul>
      </div>
      <div className="call-to-action">
        <p>Clone, customize, and start building something amazing!</p>
      </div>
    </div>
  );
};

export default Home;
