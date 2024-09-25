// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Import specific styles for the header

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Brian Giusti. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
