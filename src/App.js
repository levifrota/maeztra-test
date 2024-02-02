import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MaeztraBrandsSlider from './components/MaeztraBrandsSlider';
import ProductSlider from './components/ProductSlider';
import NewCollection from './components/NewCollection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


function App() {

 return (
   <div className="App">
      <div className="navbar-top">
         <p>
         Acompanhe as melhores promoções disponíveis aqui na Maeztra.
         </p>
      </div>
   <Navbar />

    <div className="container">
      <Banner />
    </div>
    <div className='main-container'>
      <MaeztraBrandsSlider />    
      <ProductSlider />
      <NewCollection />
    </div>
    <Newsletter />
    <Footer />
   </div>
 );
}

export default App;