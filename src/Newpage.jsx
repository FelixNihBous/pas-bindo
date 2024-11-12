import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Newpage.css'

function Newpage({ isOpen, onClose, children }) {
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
            <div className='mainbody'>
                <div className='gridcontainer'>
                    <div className='imagegrid'></div>
                    <div className='textgrid'>asdasdasd</div>
                </div>
                <div className='gridcontainer'>
                    <div className='imagegrid'></div>
                    <div className='textgrid'>asdasdasd</div>
                </div>
                <div className='gridcontainer'>
                    <div className='imagegrid'></div>
                    <div className='textgrid'>asdasdasd</div>
                </div>
            </div>
        </>
    );
}

export default Newpage;