import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHeart, faBagShopping, faUser, faBars} from "@fortawesome/free-solid-svg-icons"

import "../styles/Navbar.css";
import Logo from "../assets/b0652beb9756e9e0fe46f9f73c0e3c38.png";
// import heartIcon from "../assets/heartIcon.svg";
// import bagIcon from "../assets/bagIcon.svg";
// import perfilIcon from "../assets/perfilIcon.svg";
// import menuIcon from "../assets/menu.png"
// import seachIcon from "../assets/search-interface-symbol.png"

const Navbar = () => {
  const [sandwichMenu, setSandwichMenu] = useState(false);
  
  const OnSandwichButtonClick = () =>{
    setSandwichMenu(sandwichMenu===true?false:true)
  }

  useEffect(() => {
    function handleShowVar() {
      if(window.innerWidth > 800) {
        setSandwichMenu(true);
      } else{
        setSandwichMenu(sandwichMenu)
      }
    }
    handleShowVar();
    window.addEventListener("resize", handleShowVar);
    return () => {
      window.removeEventListener("resize", handleShowVar)
    }
  });

  return (
    <nav className="navbar">
      <div className="navbar-options">
        <div className="navbar-options-container">
          <img className="navbar__logo" src={Logo} alt="Logo" />
          <div className="navbar-search">
            
            <div className="search">
              {/* <img className='seachIconButton' src={seachIcon}/> */}
              <FontAwesomeIcon className='seachIconButton' icon={faMagnifyingGlass} />
              {/* <img className='bagIconButton' src={bagIcon}/> */}
                <FontAwesomeIcon className='bagIconButton' icon={faBagShopping} />

              <input className="search-input" placeholder="O Que Você Busca?" />
              <button className="search-button">Buscar</button>
            </div>
          </div>
          <div className='buttonOptionArea'>
            <button className="navbar_button sandwich-menu" onClick={OnSandwichButtonClick}>
              <FontAwesomeIcon className='menubutton' icon={faBars} />
            </button>
            <div className="nav-btn" style={sandwichMenu===true?{display:"flex"}:{display:"none"}}>
              <button className="navbar__button">
                <FontAwesomeIcon className="navbar_icon" icon={faUser} />
                <p>Minha Conta</p>
              </button>
              <button className="navbar__button">
                {/* <img src={heartIcon} className="navbar_icon" /> */}
                <FontAwesomeIcon className="navbar_icon" icon={faHeart} />
                <p>Minha Conta</p>
              </button>
              <button className="navbar__button">
                {/* <img src={bagIcon} className="navbar_icon" /> */}
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
