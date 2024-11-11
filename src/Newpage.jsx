import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Newpage.css'

function Newpage() {
    return (
        <div className='container'>
            <div className='header'>
                <p>This is the New Page</p>
                <div className='listitem'>
                    <Link to='/'>
                        <a>Home</a>
                    </Link>
                    <Link to='/aboutme'>
                        <a>About Me</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Newpage;