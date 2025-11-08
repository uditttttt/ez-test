// src/components/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';

// --- IMPORT YOUR ASSETS ---
import vFilmsLogo from '../assets/v-films-logo.png';
import hamburgerIcon from '../assets/hamburger-icon.svg';
import closeIcon from '../assets/close-icon.svg';
import mailIcon from '../assets/mail-icon.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- 1. ADD THIS FUNCTION ---
  // This function will close the menu when any link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* --- LOGO --- */}
      <a href="#" className="nav-logo-link">
        <img src={vFilmsLogo} alt="V Films Logo" className="nav-logo" />
      </a>

      {/* --- RIGHT SIDE CLUSTER (MENU + TOGGLE) --- */}
      <div className="nav-right-cluster">
        
        {isMenuOpen && (
          <nav className="nav-menu-inline">
            <ul className="nav-links-inline">
              {/* --- 2. ADD onClick TO ALL LINKS --- */}
              <li><a href="#" onClick={handleLinkClick}>Services</a></li>
              <li><a href="#" onClick={handleLinkClick}>Their Stories</a></li>
              <li><a href="#" onClick={handleLinkClick}>Our Story</a></li>
              <li><a href="#" onClick={handleLinkClick}>Varnan</a></li>
            </ul>
            
            {/* --- 3. ADD onClick TO THE "Let's Talk" LINK --- */}
            <a 
              href="#contact" 
              className="lets-talk-btn" 
              onClick={handleLinkClick}
            >
              Let's Talk
              <img src={mailIcon} alt="talk icon" className="mail-icon" />
            </a>
          </nav>
        )}

        {/* --- TOGGLE ICON --- */}
        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <img src={closeIcon} alt="Close menu" />
          ) : (
            <img src={hamburgerIcon} alt="Open menu" />
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;