import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedin,
  faCcVisa,
  faCcMastercard,
} from '@fortawesome/free-brands-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import VtexIcon from '../assets/poweredByImage#vtex.png';
import MaeztraIcon from '../assets/[2019-05]-Maeztra---Logo----cor.png';
import '../styles/Footer.css';

const Footer = () => {
  const [option1, setoption1] = useState(false);
  const [option2, setoption2] = useState(false);
  const [option3, setoption3] = useState(false);

  const setButtonOption = (x) => {
    if (x === 1) {
      setoption1(option1 === true ? false : true);
    }
    if (x === 2) {
      setoption2(option2 === true ? false : true);
    }
    if (x === 3) {
      setoption3(option3 === true ? false : true);
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 800) {
        setoption1(true);
        setoption2(true);
        setoption3(true);
      } else {
        setoption1(false);
        setoption2(false);
        setoption3(false);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-contact">
            <div
              className="buttonFutterOptions"
              onClick={() => setButtonOption(1)}
            >
              <h2>Informações</h2>
              {option1 ? (
              <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            ) : (
              <FontAwesomeIcon icon={faMinus} className="icon-plus" />
            )}
            </div>
            <div
              className="footer-list"
              style={
                option1 === true ? { display: 'none' } : { display: 'flex' }
              }
            >
              <ul>
                <li>Quem Somos</li>
                <li>Prazo de Envio</li>
                <li>Trocas e Devoluções</li>
                <li>Promoções e Cupons</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-navigation">
            <div
              className="buttonFutterOptions"
              onClick={() => setButtonOption(2)}
            >
              <h2>Minha Conta</h2>
            {option2 ? (
              <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            ) : (
              <FontAwesomeIcon icon={faMinus} className="icon-plus" />
            )}
            </div>
            <div
              className="footer-list"
              style={
                option2 === true ? { display: 'none' } : { display: 'flex' }
              }
            >
              <ul>
                <li>Minha Conta</li>
                <li>Minha Pedidos</li>
                <li>Cadastre-se</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-social">
            <div
              className="buttonFutterOptions"
              onClick={() => setButtonOption(3)}
            >
              <h2>Onde nos encontrar</h2>
            {option3 ? (
              <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            ) : (
              <FontAwesomeIcon icon={faMinus} className="icon-plus" />
            )}
            </div>
            <div
              className="footer-list"
              style={
                option3 === true ? { display: 'none' } : { display: 'flex' }
              }
            >
              <ul>
                <li>Lojas</li>
                <li>Endereço</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-intern">
          <div className="social">
            <a
              href="https://www.youtube.com/user/aQuatroDigital"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} className="social-img" />
            </a>
            <a href="https://twitter.com/maeztra_consult" rel="noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="social-img" />
            </a>

            <a
              href="https://www.instagram.com/maeztra_consultoria/"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="social-img" />
            </a>

            <a href="https://www.linkedin.com/company/maeztra" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-img" />
            </a>
          </div>
          <div className="cards">
            <FontAwesomeIcon icon={faCcVisa} className="cards-brands" />
            <FontAwesomeIcon icon={faCcMastercard} className="cards-brands" />
            <FontAwesomeIcon icon={faCcVisa} className="cards-brands" />
            <FontAwesomeIcon icon={faCcMastercard} className="cards-brands" />
          </div>
          <div className="vtex-maeztra">
            <div className="vtex">
              <p>Powered By</p>
              <img src={VtexIcon} alt="VTEX"></img>
            </div>
            <div className="maeztra">
              <p>Developed By</p>
              <img src={MaeztraIcon} alt="Maeztra"></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
