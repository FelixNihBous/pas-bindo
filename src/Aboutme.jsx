import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './css/Aboutme.css'
import Header from './Header.jsx'
import dogImage from './assets/dog.jpg/';


function Aboutme() {
    return (
        <>
            <Header />

            <div className='container'>
                <img src={dogImage} className='dogimage'></img>
            </div>
        </>
    );
}

export default Aboutme;