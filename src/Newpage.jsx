import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import dogImage from './assets/dog.jpg/';
import Header from './Header.jsx';
import './css/Newpage.css'

function Newpage({ isOpen, onClose, children }) {
    return (
        <>

            <Header />
            <div className='mainbody'>
                <div className='gridcontainer'>
                    <a href='https://google.com/'>
                        <div className='imagegrid'>
                            <img src={dogImage} className=''></img>
                        </div>
                        <div className='textgrid'>asdasdasd</div>
                    </a>
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