import React from 'react';
import './FAQ.css'; // Make sure to create and import FAQ.css

const FAQ = () => {
  return (
          // We use className in react not class like html
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq">
        <details>
          <summary>What is React?</summary>
          <p>React is a JavaScript library for building user interfaces.</p>
        </details>
        <details>
          <summary>How do I start with React?</summary>
          <p>You can start learning React by following the official documentation and tutorials.</p>
        </details>
        {/* Add more questions and answers here */}
      </div>
    </div>
  );
};

export default FAQ;
