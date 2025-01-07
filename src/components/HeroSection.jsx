import React from 'react';
import BackgroundImage from '../assets/background.jpg'; 

const HeroSection = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-500 mb-4">STRILHEREZH</h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">L'ALCOOL BRETON</h2>
        <p className="text-sm md:text-lg font-light">
          L'Essence de la Bretagne en Chaque Goutte. (texte généré par Chat GPT)
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
