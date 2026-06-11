import React, { useEffect, useRef } from 'react'
import { Utensils, Leaf, Cake, Truck, Croissant, Cookie } from 'lucide-react'
import './Specialty.css'

export default function Specialty() {
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
    <section id="specialty">
      <div className="specialty-list reveal-left" ref={leftRef}>
        <div className="section-label">Why We're Loved</div>
        <h2 className="section-title">20+ Years of Craft<br/>in Every Bite</h2>
        <p className="section-sub" style={{ marginBottom: '32px' }}>
          Customers travel from across Ghaziabad to experience what makes Urmi special. Here's what keeps them coming back.
        </p>

        <div className="specialty-item">
          <div className="specialty-icon-wrap" style={{ background: 'rgba(200,132,58,0.12)', color: 'var(--gold)' }}><Utensils size={28} /></div>
          <div>
            <div className="specialty-title">Best Aloo Patties in the Region</div>
            <div className="specialty-desc">Crispy, flaky, stuffed with perfectly spiced aloo — a legacy recipe generations swear by.</div>
          </div>
        </div>
        <div className="specialty-item">
          <div className="specialty-icon-wrap" style={{ background: 'rgba(74,124,89,0.12)', color: 'var(--sage)' }}><Leaf size={28} /></div>
          <div>
            <div className="specialty-title">Fully Eggless Baking</div>
            <div className="specialty-desc">Every product — cakes, pastries, breads — made without eggs. Loved by all communities.</div>
          </div>
        </div>
        <div className="specialty-item">
          <div className="specialty-icon-wrap" style={{ background: 'rgba(224,91,91,0.12)', color: 'var(--berry)' }}><Cake size={28} /></div>
          <div>
            <div className="specialty-title">Custom Kids' Cakes</div>
            <div className="specialty-desc">Beautifully crafted cakes for children's birthdays — customised themes and designs.</div>
          </div>
        </div>
        <div className="specialty-item">
          <div className="specialty-icon-wrap" style={{ background: 'rgba(74,144,217,0.12)', color: '#4A90D9' }}><Truck size={28} /></div>
          <div>
            <div className="specialty-title">Takeaway & Delivery</div>
            <div className="specialty-desc">Contactless delivery, takeaway, and dine-in — every way you want your bake.</div>
          </div>
        </div>
      </div>

      <div className="specialty-visual reveal-right" ref={rightRef}>
        <div className="spec-blob"></div>
        <div className="spec-items-grid">
          <div className="spec-mini tall">
            <Cake size={44} color="var(--berry)" strokeWidth={1.5} className="emoji" style={{ margin: '0 auto 10px', display: 'block' }} />
            <div className="name">Pineapple<br/>Cake</div>
          </div>
          <div className="spec-mini">
            <Utensils size={44} color="var(--gold)" strokeWidth={1.5} className="emoji" style={{ margin: '0 auto 10px', display: 'block' }} />
            <div className="name">Aloo Patty</div>
          </div>
          <div className="spec-mini">
            <Croissant size={44} color="var(--cocoa)" strokeWidth={1.5} className="emoji" style={{ margin: '0 auto 10px', display: 'block' }} />
            <div className="name">Fresh Bread</div>
          </div>
          <div className="spec-mini">
            <Cookie size={44} color="var(--gold)" strokeWidth={1.5} className="emoji" style={{ margin: '0 auto 10px', display: 'block' }} />
            <div className="name">Cookies</div>
          </div>
          <div className="spec-mini">
            <Croissant size={44} color="var(--berry)" strokeWidth={1.5} className="emoji" style={{ margin: '0 auto 10px', display: 'block' }} />
            <div className="name">Cream Roll</div>
          </div>
        </div>
      </div>
    </section>
  )
}
