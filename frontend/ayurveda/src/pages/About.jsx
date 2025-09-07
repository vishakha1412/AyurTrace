import React from 'react';
import AboutSection from '../components/AboutSection';
import '../styles/fonts.css';

const About = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/parchment-bg.png')] bg-cover bg-fixed text-[#3B2F2F] font-serif">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 tracking-wide">
          About AyurTrace
        </h1>
        <AboutSection />
      </div>
    </div>
  );
};

export default About;
