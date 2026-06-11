import React from 'react'
import { MessageCircle, Cake, MapPin, Phone, Clock, Truck, Leaf, Heart, Utensils } from 'lucide-react'
import './Footer.css'

const FacebookIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-grid">
        <div className="footer-col footer-brand">
          <div className="footer-logo" style={{ color: 'var(--gold)', display: 'inline-flex' }}><Cake size={36} strokeWidth={1.5} /></div>
          <div className="footer-title">Urmi Kwality Bakery</div>
          <p className="footer-desc">20+ years of baking tradition, craft, and quality. From Sahibabad to your table, every bite is made with love.</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook"><FacebookIcon size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram"><InstagramIcon size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><LinkedinIcon size={24} /></a>
            <a href="https://wa.me/919999114013" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp"><MessageCircle size={24} /></a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#specialty">Why Us</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Order Now</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Contact</div>
          <p className="footer-info">
            <strong style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> Visit us:</strong><br/>
            <a href="https://maps.google.com/?q=27+Naven+Park+Sahibabad+Ghaziabad" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
              27, Naven Park, Jindal Mkt, Sahibabad<br/>
              Dr Radha Krishnan Marg, Sector 3<br/>
              Rajendra Nagar, Ghaziabad, UP 201005
            </a>
          </p>
          <p className="footer-info">
            <strong style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Phone size={16} /> Call:</strong><br/>
            +91 99991 14013
          </p>
          <p className="footer-info">
            <strong style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> Hours:</strong><br/>
            10 AM – 10 PM Daily
          </p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Services</div>
          <ul className="footer-links icons-list">
            <li><Cake size={16} /> Custom Cakes</li>
            <li><Utensils size={16} /> Fresh Bakes</li>
            <li><Truck size={16} /> Delivery</li>
            <li><Cake size={16} /> Catering</li>
            <li><Leaf size={16} /> Eggless Options</li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Urmi Kwality Bakery. All rights reserved.</p>
        <p className="footer-credit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>Built with <Heart size={14} color="var(--berry)" fill="var(--berry)" /> for Sahibabad</p>
      </div>
    </footer>
  )
}
