import React from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/b0652beb9756e9e0fe46f9f73c0e3c38.png'

const Navbar = () => {
 return (
    <nav className="navbar">
    
    <div className='navbar-options'>
    <div className='navbar-options-container'>
      <img className="navbar__logo" src={Logo} alt="Logo" />
      <div className='navbar-search'>
        <div className='search'>
          <input className="search-input" placeholder="O Que Você Busca?" />
          <button className='search-button'>Buscar</button>
        </div>
      </div>
      <div className='nav-btn'>
        <button className="navbar__button">Button 1</button>
        <button className="navbar__button">Button 2</button>
        <button className="navbar__button">Button 3</button>
        </div>
    </div>
      </div>
    </nav>
 );
};

export default Navbar;