'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Spice Haven</div>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('featured'); }}>
            Menu
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            About
          </a>
          <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
            Reviews
          </a>
          <a 
            href="#reservation" 
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); scrollToSection('reservation'); }}
          >
            Reserve a Table
          </a>
        </nav>
      </div>
    </header>
  );
}