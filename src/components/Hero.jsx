import React from 'react'
import { Star, Cake } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-shape s1"></div>
      <div className="hero-bg-shape s2"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="star" style={{ display: 'flex', alignItems: 'center' }}><Star size={16} fill="currentColor" /></span>
          4.3 · 811 Reviews · Since 2002
        </div>
        <h1 className="hero-title">
          Where Every Bite Tells a<br/><em>Sweet Story</em>
        </h1>
        <p className="hero-hindi">उर्मी क्वालिटी बेकरी — स्वाद जो दिल को छू जाए</p>
        <p className="hero-desc">
          Sahibabad's most loved neighbourhood bakery. Fresh-baked cakes, golden patties, pillowy breads and artisan pastries — crafted with love and served warm since 2002.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn-primary">
            <span>Explore Menu</span>
            <span>→</span>
          </a>
          <a href="#contact" className="btn-secondary">
            <span style={{ display: 'flex', alignItems: 'center' }}><Cake size={18} /></span>
            <span>Custom Cake Order</span>
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="num">20+</div>
            <div className="label">Years Serving</div>
          </div>
          <div className="hero-stat">
            <div className="num">811</div>
            <div className="label">Happy Reviews</div>
          </div>
          <div className="hero-stat">
            <div className="num">4.3★</div>
            <div className="label">Google Rating</div>
          </div>
          <div className="hero-stat">
            <div className="num">₹1–200</div>
            <div className="label">Pocket Friendly</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        {/* Sprinkles */}
        <div className="sprinkle" style={{width:'12px', height:'4px', background:'#E05B5B', top:'12%', left:'15%', animationDelay:'0s'}}></div>
        <div className="sprinkle" style={{width:'10px', height:'4px', background:'#4A7C59', top:'20%', right:'18%', animationDelay:'0.7s'}}></div>
        <div className="sprinkle" style={{width:'14px', height:'4px', background:'#C8843A', bottom:'28%', left:'8%', animationDelay:'1.4s'}}></div>
        <div className="sprinkle" style={{width:'8px', height:'8px', background:'#E8C4A0', borderRadius:'50%', top:'35%', right:'8%', animationDelay:'2s'}}></div>
        <div className="sprinkle" style={{width:'10px', height:'10px', background:'#C8843A', borderRadius:'50%', bottom:'40%', right:'25%', animationDelay:'0.4s'}}></div>

        {/* Main hero image */}
        <div className="hero-image-wrap">
          <img src="/assets/hero_cake_1781167203840.png" alt="Pineapple Celebration Cake" className="hero-img" />
        </div>

        {/* Floating badges */}


      </div>
    </section>
  )
}
