import { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Newpage from './Newpage';
import Aboutme from './Aboutme'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newpage"
          element={<Newpage />} />
        <Route path="/aboutme"
          element={<Aboutme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;