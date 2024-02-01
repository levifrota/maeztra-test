import React from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/b0652beb9756e9e0fe46f9f73c0e3c38.png'

const Navbar = () => {
 return (
    <nav className="navbar">
    <div className="navbar-top">
      Acompanhe as melhores promoções disponíveis aqui na Maeztra.
    </div>
    <div className='navbar-options'>
      <img className="navbar__logo" src={Logo} alt="Logo" />
      <input className="navbar__search" placeholder="Search..." />
      <div className='nav-btn'>
        <button className="navbar__button">Button 1</button>
        <button className="navbar__button">Button 2</button>
        <button className="navbar__button">Button 3</button>
        </div>
      </div>
    </nav>
 );
};

export default Navbar;