import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TravelStyles from '../components/home/TravelStyles';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedExperiences from '../components/home/FeaturedExperiences';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <TravelStyles />
      <WhyChooseUs />
      <FeaturedExperiences />
    </div>
  );
};

export default Home;
