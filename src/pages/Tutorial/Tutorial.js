import React from 'react';
import './Tutorial.css'; // Import CSS for styling

const Tutorial = () => {
  return (
    <div className="tutorial-container">
      <h1>React Template Creation Guide</h1>
      <p>This guide will walk you through the steps to create your own React template with custom components, routing, and styles.</p>

      {/* Section 1: Creating Custom Components */}
      <section>
        <h2>Creating Custom Components</h2>
        <p>Learn how to build reusable components for your React applications:</p>
        <ol>
          <li>Create a new folder under `src/components` for each component.</li>
          <li>In each folder, create a JavaScript file (e.g., `Header.js`) and a corresponding CSS file (e.g., `Header.css`).</li>
          <li>Implement the component logic and export it from the JavaScript file.</li>
          <li>Style your component in the CSS file and import it into your JavaScript file.</li>
        </ol>
      </section>

      {/* Section 2: Setting Up Routing with React Router */}
      <section>
        <h2>Setting Up Routing with React Router</h2>
        <p>Follow these steps to set up basic routing in your React application:</p>
        <ol>
          <li>Install React Router: `npm install react-router-dom`.</li>
          <li>Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom` in your `App.js`.</li>
          <li>Wrap your component structure with `BrowserRouter`.</li>
          <li>Define your routes using `Routes` and `Route`, specifying the path and component for each route.</li>
        </ol>
      </section>

      {/* Section 3: Customizing Styles */}
      <section>
        <h2>Customizing Styles</h2>
        <p>Customize the appearance of your components with CSS:</p>
        <ol>
          <li>Create a CSS file for each component (e.g., `Header.css`).</li>
          <li>Define your styles in the CSS file.</li>
          <li>Import the CSS file into the corresponding JavaScript file to apply the styles.</li>
          <li>Use classes to apply styles and ensure they are specific to the component.</li>
        </ol>
      </section>

      {/* Additional sections as needed */}
    </div>
  );
};

export default Tutorial;
