import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedin,
  faCcVisa,
  faCcMastercard
} from "@fortawesome/free-brands-svg-icons";
import VtexIcon from "../assets/poweredByImage#vtex.png"
import MaeztraIcon from "../assets/[2019-05]-Maeztra---Logo----cor.png"
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-contact">
            <h2>
              Informações
            </h2>
            <div className="footer-list">
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
            <h2>
              Minha Conta
            </h2>
            <div>
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
            <h2>
              Onde nos encontrar
            </h2>
            <ul>
              <li>Lojas</li>
              <li>Endereço</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="social-img" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} className="social-img" />
          </a>
        
        
          <a
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="social-img" />
          </a>
        
        
          <a
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-img" />
          </a>
        </div>

      <div className="cards">
        <FontAwesomeIcon icon={faCcVisa} className="cards-brands"/>
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
    </footer>
  );
};

export default Footer;