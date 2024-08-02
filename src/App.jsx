import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates'; // Ensure correct import

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certificates' element={<Certificates />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
