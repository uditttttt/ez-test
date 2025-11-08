// src/components/AboutTeam.jsx

import React from 'react';
import './AboutTeam.css';

import stickyNote from '../assets/sticky-note.png';
import archwayIcon from '../assets/archway-icon.svg';
import teamSilhouette from '../assets/team-silhouette.svg';
import arrowBranding from '../assets/arrow-branding.svg';
import arrowFilm from '../assets/arrow-film.svg';
import arrowArt from '../assets/arrow-art.svg';

const AboutTeam = () => {
  return (
    <section className="about-team-section">

      {/* --- Decorative Images (Background) --- */}
      <img 
        src={stickyNote} 
        alt="Note about team" 
        className="about-sticky-note" 
      />
      <img 
        src={archwayIcon} 
        alt="Archway" 
        className="about-archway" 
      />

      {/* --- Main Content (Foreground) --- */}
      <div className="about-main-content">
        <div className="about-team-center">
          <img 
            src={teamSilhouette} 
            alt="Team silhouette" 
            className="about-team-silhouette" 
          />
          
          {/* --- Labels with Arrows --- */}
          <div className="label-container-branding">
            <img src={arrowBranding} alt="arrow" className="arrow-branding" />
            <span className="text-branding">Branding Experts</span>
          </div>
          
          <div className="label-container-film">
            <img src={arrowFilm} alt="arrow" className="arrow-film" />
            <span className="text-film">Film Makers</span>
          </div>
          
          <div className="label-container-art">
            <img src={arrowArt} alt="arrow" className="arrow-art" />
            <span className="text-art">Art Curators</span>
          </div>
        </div>

        {/* --- THIS IS THE NEW CONTAINER --- */}
        <div className="about-footer-content">
          <h2 className="about-headline">
            Take a closer look at the stories V bring to life.
          </h2>
          <button className="about-portfolio-btn">
            View Portfolio
          </button>
        </div>
      </div>

    </section>
  );
};

export default AboutTeam;