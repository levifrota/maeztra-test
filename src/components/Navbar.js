import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import '../styles/Navbar.css';
import Logo from '../assets/b0652beb9756e9e0fe46f9f73c0e3c38.png';

const Navbar = () => {
  const [sandwichMenu, setSandwichMenu] = useState(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const OnSandwichButtonClick = () => {
    // setSandwichMenu(sandwichMenu === true ? false : true);
     if (window.innerWidth < 800) {
      setSandwichMenu(prevState => prevState !== true);
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 800) {
        setSandwichMenu(false);
      } else {
        setSandwichMenu(null);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-options">
        <div className="navbar-options-container">
          <img className="navbar__logo" src={Logo} alt="Logo" />

          <div className="navbar-search">
            <div className="search">
              <button
                className="searchButton"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
              >
                <FontAwesomeIcon
                  className="searchIconButton"
                  icon={faMagnifyingGlass}
                />
              </button>
              <FontAwesomeIcon className="bagIconButton" icon={faBagShopping} />

              <input className="search-input" placeholder="O Que Você Busca?" />
              {isSearchVisible && (
                <input
                  className="search-input-mob"
                  placeholder="O Que Você Busca?"
                />
              )}
              <button className="search-button">Buscar</button>
            </div>
          </div>

          <div className="nav-btn-desk">
            <button className="navbar__button">
              <FontAwesomeIcon className="navbar_icon" icon={faUser} />

              <p>Minha Conta</p>
            </button>

            <button className="navbar__button">
              <FontAwesomeIcon className="navbar_icon" icon={faHeart} />

              <p>Minha Conta</p>
            </button>

            <button className="navbar__button">
              <FontAwesomeIcon className="navbar_icon" icon={faBagShopping} />

              <p>Meu Carrinho</p>
            </button>
          </div>

          <div className="buttonOptionArea">
            <button
              className="navbar_button sandwich-menu"
              onClick={OnSandwichButtonClick}
            >
              <FontAwesomeIcon className="menubutton" icon={faBars} />
            </button>

            <div
              className="nav-btn"
              style={{
                display: sandwichMenu === null || sandwichMenu === true ? 'flex' : 'none'
              }}
            >
              <button className="navbar__button">
                <FontAwesomeIcon className="navbar_icon" icon={faUser} />

                <p>Minha Conta</p>
              </button>

              <button className="navbar__button">
                <FontAwesomeIcon className="navbar_icon" icon={faHeart} />

                <p>Minha Conta</p>
              </button>

              <button className="navbar__button">
                <FontAwesomeIcon className="navbar_icon" icon={faBagShopping} />

                <p>Meu Carrinho</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
