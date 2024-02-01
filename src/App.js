import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';


function App() {

 return (
    <div className="App">

    <div className='header'>
    <Navbar />
    </div>

    <div className="container">
    <Banner />
      
    </div>
    
    </div>
 );
}

export default App;