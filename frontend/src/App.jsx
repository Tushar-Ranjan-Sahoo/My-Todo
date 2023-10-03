import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage'; // Import your Home component or any other components
import About from './About'; // Import your About component or any other components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;


