import React from 'react';
import {BrowserRouter , Routes, Route, Router , Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp   from './components/pages/SignUp/SignUp';
import Footer   from './components/pages/Footer.js/Footer';




function App() {

    return (
      <BrowserRouter>
      <Navbar />
      <Home />
      {/* <Services />
      <Products />
      <SignUp /> */}


      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} /> 
        <Route path='/sign-up' component={SignUp} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}










export default App;
