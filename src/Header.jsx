import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
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
        </div>
    )
}
