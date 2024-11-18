// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ onLanguageChange }) {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    onLanguageChange(language);
    setLanguageDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Psia Apka</Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
        
        <div className="language-switcher" onClick={toggleLanguageDropdown}>
          Language
          {languageDropdownOpen && (
            <div className="language-dropdown">
              <div onClick={() => handleLanguageSelect('en')}>English</div>
              <div onClick={() => handleLanguageSelect('pl')}>Polish</div>
              <div onClick={() => handleLanguageSelect('el')}>Greek</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
