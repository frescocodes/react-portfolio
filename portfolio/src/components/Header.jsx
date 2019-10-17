import React from 'react'

import { Link } from 'react-router-dom'
 
export const Header = () => {
    return (
        <header>
            <h3>DAKOTAH HUEY</h3>
            <nav className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}