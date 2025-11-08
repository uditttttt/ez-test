// src/components/Hero.jsx

import React from 'react';
import './Hero.css';

// --- IMPORT YOUR ASSETS ---
import vFilmsLogo from '../assets/v-films-logo.png';
import mandalaGraphic from '../assets/Hero Mandala.svg';
import scrollIcon from '../assets/Scroll.svg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        
        <div className="hero-left">
          <img src={mandalaGraphic} alt="" className="hero-mandala" />
          <img src={vFilmsLogo} alt="V Films" className="hero-logo-main" />
        </div>
        
        <div className="hero-right">
          <h1 className="hero-headline">
            {/* --- THIS IS THE FIX --- */}
            {/* Wrap the first line in a span */}
            <span className="hero-headline-line1">
              Varnan is where stories find
            </span>
            <br />
            their voice and form
          </h1>
          <h2 className="hero-subheadline">
            Films . Brands . Art
          </h2>
          <p className="hero-description">
            Since 2009, V've been telling stories - stories of people,
            their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble
            village squares. But every story starts the same way - by
            listening with intention. V believes it takes trust, patience,
            and an eye for the unseen to capture what truly matters.
            V doesn't just tell stories - V honors them.
          </p>
        </div>
        
      </div>
      <img src={scrollIcon} alt="Scroll down" className="scroll-indicator" />
    </section>
  );
};

export default Hero;