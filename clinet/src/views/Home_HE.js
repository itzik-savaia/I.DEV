import React from 'react';
// import HE components
import Hero from '../components/HE/Hero';
import FeaturesTiles from '../components/HE/FeaturesTiles';
import FeaturesSplit from '../components/HE/FeaturesSplit';
import Testimonial from '../components/HE/Testimonial';
import Cta from '../components/HE/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;