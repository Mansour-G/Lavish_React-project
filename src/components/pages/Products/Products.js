import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour, homeObjOne, homeObjTwo} from './Data';
// import Pricing from '../../Pricing';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;
