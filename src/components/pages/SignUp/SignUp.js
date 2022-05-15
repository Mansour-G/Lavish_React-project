import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import Pricing from '../../Pricing';

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
