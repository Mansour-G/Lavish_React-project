import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import Footer from '../Footer.js/Footer';
import { homeObjOne } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <Footer />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Services;
