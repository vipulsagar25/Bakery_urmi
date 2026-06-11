import React, { useEffect, useState } from 'react'
import { Cake } from 'lucide-react'
import './Navigation.css'

export default function Navigation({ scrollY, menuOpen, setMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 60)
  }, [scrollY])

  return (
    <>
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon"><Cake size={22} color="white" strokeWidth={2} /></div>
          <div className="nav-logo-text">
            Urmi Kwality Bakery
            <span>उर्मी क्वालिटी बेकरी · Est. 2002</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#about">Our Story</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#specialty">Specialties</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact" className="nav-cta">Order Now</a></li>
        </ul>
        <button 
          className="hamburger" 
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}></span>
          <span style={menuOpen ? { opacity: 0 } : {}}></span>
          <span style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a>
        <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
        <a href="#specialty" onClick={() => setMenuOpen(false)}>Specialties</a>
        <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} style={{ color: 'var(--gold)' }}>Order Now</a>
      </div>
    </>
  )
}
