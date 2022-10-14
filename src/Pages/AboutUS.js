import React from 'react';
import BoxOne from '../components/AboutUs/BoxOne';
import BoxTwo from '../components/AboutUs/BoxTwo';
import BoxThree from '../components/AboutUs/BoxThree';
import BoxFour from '../components/AboutUs/BoxFour';
import { Box } from '@mui/material';
import AboutUsCarousel from '../components/Carousels/AboutUsCarousel';

const AboutUS = () => {
  return (
    <Box>
      <AboutUsCarousel />

      <BoxTwo />
      <BoxThree />
      <BoxFour />
    </Box>
  );
};

export default AboutUS;
