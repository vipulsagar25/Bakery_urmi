import React, { useEffect, useRef } from 'react'
import { Cake, Leaf, Flame, Coins } from 'lucide-react'
import './About.css'

export default function About() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
        }
      })
    }, { threshold: 0.12 })

    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="about-img-stack reveal-left" ref={leftRef}>
        <div className="about-card-main">
          <img src="/assets/premium_bakery_counter.png" alt="Bakery Counter" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div className="about-card-accent">
          <div className="since">Since</div>
          <div className="year">2002</div>
        </div>
      </div>
      <div className="about-text reveal-right" ref={rightRef}>
        <div className="section-label">Our Story</div>
        <h2 className="section-title">A Neighbourhood Bakery That Never Forgot Its Roots</h2>
        <p className="section-sub">
          Since 2002, Urmi Kwality Bakery has been the heart of Rajendra Nagar, Sahibabad. Generations of families have grown up with our pineapple pastries, golden aloo patties, and celebration cakes — the taste that childhood memories are made of.
        </p>
        <div className="about-list">
          <div className="about-item">
            <div className="icon" style={{ color: 'var(--berry)', marginTop: '4px' }}><Cake size={28} /></div>
            <div>
              <strong>Custom Celebration Cakes</strong>
              <p>Beautiful, personalised cakes for birthdays, weddings and every occasion — eggless options available.</p>
            </div>
          </div>
          <div className="about-item">
            <div className="icon" style={{ color: 'var(--sage)', marginTop: '4px' }}><Leaf size={28} /></div>
            <div>
              <strong>100% Eggless Bakery</strong>
              <p>Recently transitioned to fully eggless baking — inclusive, delicious and loved by all.</p>
            </div>
          </div>
          <div className="about-item">
            <div className="icon" style={{ color: 'var(--gold)', marginTop: '4px' }}><Flame size={28} /></div>
            <div>
              <strong>Baked Fresh, Every Day</strong>
              <p>Breads, buns, pav, pizza bases — all baked fresh in our ovens daily for maximum taste and quality.</p>
            </div>
          </div>
          <div className="about-item">
            <div className="icon" style={{ color: 'var(--sage)', marginTop: '4px' }}><Coins size={28} /></div>
            <div>
              <strong>Genuinely Affordable</strong>
              <p>₹1 to ₹200 per person — the best bakery experience at prices everyone can enjoy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
