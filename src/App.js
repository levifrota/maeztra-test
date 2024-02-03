import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MaeztraBrandsSlider from './components/MaeztraBrandsSlider';
import ProductSlider from './components/ProductSlider';
import NewCollection from './components/NewCollection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Modal from './components/Modal';
import OptionsBar from './components/OptionsBar';

const App = () => {
  const [showModal, setShowModal] = useState(() => {
    return !localStorage.getItem('visited');
  });

  useEffect(() => {
    if (!localStorage.getItem('visited')) {
      localStorage.setItem('visited', 'true');
      setShowModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {showModal && <Modal isOpen={showModal} onClose={handleCloseModal} />}
      <div className="navbar-top">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </div>
      <Navbar />
      <OptionsBar />
      <div className="container">
        <Banner />
      </div>
      <div className="main-container">
        <MaeztraBrandsSlider />
        <ProductSlider />
        <NewCollection />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
