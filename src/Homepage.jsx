import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Homepage.css'
import { motion } from 'framer-motion';

function Homepage() {
  return (
    <motion.div className='homepage'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3 }}
    >
      <h1>Welcome to the Start Page of this Project</h1>
      <Link to="/newpage">
        <button className='gobutton'>Let's Go</button>
      </Link>
    </motion.div>
  );
}

export default Homepage;