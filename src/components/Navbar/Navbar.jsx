import React from 'react';
import './Navbar.css'
import img from '../../assets/images/banner/logo.png'
const Navbar = () => {
    return (
        <nav className="navbar bg-black text-slate-300">
            <div className="navbar__logo">
                <img className='ml-24' src={img} alt="Logo" />
            </div>
            <ul className="navbar__options mr-20 gap-12 text-xl">
                <li className="navbar__option">Home</li>
                <li className="navbar__option">Pages</li>
                <li className="navbar__option">Gallery</li>
                <li className="navbar__option">Matches</li>
                <li className="navbar__option">Blog</li>
                <li className="navbar__option">Contacts</li>
            </ul>
        </nav>
    );
};

export default Navbar;