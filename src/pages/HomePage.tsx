import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import FeaturesOverview from '../components/HomePage/FeaturesOverview';
import TrustSection from '../components/HomePage/TrustSection';
import ROICalculator from '../components/HomePage/ROICalculator';
import TestimonialsSection from '../components/HomePage/TestimonialsSection';
import CTASection from '../components/HomePage/CTASection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesOverview />
      <TrustSection />
      <ROICalculator />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;