// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

//images for the letters -> make an array of them so they are all mapped on their own and thus able to be moved
//but start with them all in a container to start so you only need to set the position once per word
//or you can just base the math based on the starting point of the initial letter of each word, then add a % of pixels per.
// youd have to do it on mobile and on desktop but it would be more fun
//import About from './pages/About';
//import Projects from './pages/Projects';
//import Contact from './pages/Contact';
//<Route path="/about" element={<About />} />
//<Route path="/projects" element={<Projects />} />
//<Route path="/contact" element={<Contact />} />