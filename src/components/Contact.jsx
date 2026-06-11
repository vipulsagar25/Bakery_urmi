import React, { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Clock, ShoppingBag, Cake, Loader2, PartyPopper } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle')
  const formBtnRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const headerRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('sent')
      setTimeout(() => {
        setFormStatus('idle')
      }, 3500)
    }, 1600)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
        }
      })
    }, { threshold: 0.12 })

    if (headerRef.current) observer.observe(headerRef.current)
    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact">
      <div className="reveal" ref={headerRef} style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Order a Cake or<br/>Visit Us Today</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', marginTop: '12px' }}>
          For custom orders, delivery queries, or just to say hello — we're here for you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info reveal-left" ref={leftRef}>
          <div className="contact-visual">
            <img src="/assets/bakery_exterior_1781167285825.png" alt="Bakery Exterior" className="contact-visual-img" />
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon" style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center' }}><MapPin size={28} /></div>
            <div>
              <div className="contact-info-label">Our Location</div>
              <div className="contact-info-value">27, Naven Park, Jindal Mkt, Sahibabad<br/>Dr Radha Krishnan Marg, Sector 3<br/>Rajendra Nagar, Ghaziabad, UP 201005</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon" style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center' }}><Phone size={28} /></div>
            <div>
              <div className="contact-info-label">Phone / WhatsApp</div>
              <div className="contact-info-value" style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>+91 99991 14013</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon" style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center' }}><Clock size={28} /></div>
            <div>
              <div className="contact-info-label">Opening Hours</div>
              <div className="hours-table">
                <div className="hours-row">
                  <span className="day">Monday – Sunday</span>
                  <span className="time">10:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon" style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center' }}><ShoppingBag size={28} /></div>
            <div>
              <div className="contact-info-label">Services</div>
              <div className="contact-info-value">Takeaway · No-Contact Delivery · Dine-In</div>
            </div>
          </div>
        </div>

        <div className="contact-form reveal-right" ref={rightRef}>
          <h3>Place a Custom Order</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Ramesh Sharma" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div className="form-group">
              <label>What would you like?</label>
              <select>
                <option>Custom Birthday Cake</option>
                <option>Wedding Cake</option>
                <option>Anniversary Cake</option>
                <option>Bulk Pastry Order</option>
                <option>Bread & Bun Bulk Order</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message / Special Instructions</label>
              <textarea placeholder="Tell us about your order — theme, size, delivery date, dietary requirements…"></textarea>
            </div>
            <button 
              ref={formBtnRef}
              type="submit" 
              className="btn-primary form-submit"
              disabled={formStatus === 'sending'}
              style={{ background: formStatus === 'sent' ? 'var(--sage)' : '', opacity: formStatus === 'sending' ? 0.7 : 1 }}
            >
              {formStatus === 'idle' && <><span>Send Order Request</span><Cake size={20} /></>}
              {formStatus === 'sending' && <><span>Sending…</span><Loader2 size={20} className="spin" /></>}
              {formStatus === 'sent' && <><span>Order Sent! We'll call you back</span><PartyPopper size={20} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
