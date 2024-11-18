import { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './Homepage';
import Newpage from './Newpage';
import Aboutme from './Aboutme'
import './css//App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes basename={process.env.PUBLIC_URL}> 
          <Route path="/" element={<Homepage />} />
          <Route path="/newpage"
            element={<Newpage />} />
          <Route path="/aboutme"
            element={<Aboutme />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;