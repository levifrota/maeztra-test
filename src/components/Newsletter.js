import React from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1 className="newsletter-title">Recebe Nossa Newsletter</h1>
      <div className="newsletter-input">
        <input
          type="text"
          className="newsletter-text"
          placeholder="Digite seu e-mail"
        ></input>
        <button className="newsletter-button">Enviar</button>
      </div>
    </div>
  );
};

export default Newsletter;
