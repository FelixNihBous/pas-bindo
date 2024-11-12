import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Aboutme.css'
import dogImage from './assets/dog.jpg/';


function Aboutme() {
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <p>Kumpulan Teks Anekdot</p>
                    <div className='listitem'>
                        <Link to='/newpage'>
                            <a>Home</a>
                        </Link>
                        <Link to='/aboutme'>
                            <a>About Me</a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container'>
                <img src={dogImage} className='dogimage'></img>
            </div>
        </>
    );
}

export default Aboutme;