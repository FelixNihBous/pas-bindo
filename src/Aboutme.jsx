import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './css/Aboutme.css'
import Header from './Header.jsx'
import dogImage from './assets/dog.jpg/';


function Aboutme() {
    return (
        <>
            <motion.div className="aboutme"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 3 }}
            >
                <Header />
                <div className='container'>
                    <img src={dogImage} className='dogimage'></img>
                </div>
            </motion.div>

        </>
    );
}

export default Aboutme;