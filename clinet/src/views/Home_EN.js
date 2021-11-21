import React from 'react';
// import EN components
import Hero from '../components/EN/Hero';
import FeaturesTiles from '../components/EN/FeaturesTiles';
import FeaturesSplit from '../components/EN/FeaturesSplit';
import Testimonial from '../components/EN/Testimonial';
import Cta from '../components/EN/Cta';

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