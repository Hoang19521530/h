import React from 'react';
import './App.css';
import Navbar from './Component/Navbar.js';
import Banner from './Component/Banner';
import Body from './Component/Body.js';
import Footer from './Component/Footer.js';
import Carousel1 from'./Component/react-carousel-component-master/src/Carousel';
import ScrollToTop from './Component/ScrollToTop';




function App(){
  return(
    <div>
      <Navbar />
      <Banner />
      <Body />
      <Carousel1 />
      <Footer />
      <ScrollToTop /> 
      
      
    </div>
    

  );
}
export default App




