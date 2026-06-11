import React, { useState, useEffect, useRef } from 'react'
import './Menu.css'

const menuItems = [
  { name: 'Pineapple Cake', desc: 'The legendary flavour. Moist sponge, fresh cream, pineapple chunks.', price: '₹80–₹600', image: '/assets/menu_pineapple_cake_1781169173971.png', cat: 'cake', badge: 'Fan Favourite' },
  { name: 'Chocolate Cake', desc: 'Rich, dark chocolate sponge with silky ganache frosting.', price: '₹100–₹800', image: '/assets/chocolate_cake_1781167246139.png', cat: 'cake', badge: 'Popular' },
  { name: 'Custom Birthday Cake', desc: 'Personalised themes and designs for every celebration.', price: 'On Request', image: '/assets/menu_custom_cake_1781169185421.png', cat: 'cake', badge: 'Custom' },
  { name: 'Fresh Cream Pastry', desc: 'Light choux-style pastry with whipped fresh cream filling.', price: '₹30–₹60', image: '/assets/menu_cream_pastry_1781169199549.png', cat: 'cake', badge: '' },
  { name: 'Aloo Patty', desc: 'The regional legend. Crispy shell, perfectly spiced aloo filling.', price: '₹15–₹25', image: '/assets/aloo_patties_1781167219352.png', cat: 'savoury', badge: 'Best Seller' },
  { name: 'Veg Sandwich', desc: 'Fresh veggies, chutney, and butter on soft toasted bread.', price: '₹30–₹60', image: '/assets/menu_veg_sandwich_1781169212059.png', cat: 'savoury', badge: '' },
  { name: 'Pizza Base', desc: 'Freshly baked thin-crust pizza base — perfect for home pizzas.', price: '₹40–₹80', image: '/assets/menu_pizza_base_1781169222164.png', cat: 'bread', badge: 'Fresh Baked' },
  { name: 'Pav & Burger Buns', desc: 'Pillowy soft, lightly golden — ideal for vada pav and burgers.', price: '₹5–₹15', image: '/assets/menu_pav_buns_1781169236646.png', cat: 'bread', badge: '' },
  { name: 'Bread Loaf', desc: 'Soft white and brown loaves baked fresh every morning.', price: '₹30–₹45', image: '/assets/fresh_breads_1781167258377.png', cat: 'bread', badge: '' },
  { name: 'Cookies Assortment', desc: 'Buttery, crumbly cookies in multiple flavours — perfect gifting.', price: '₹60–₹200', image: '/assets/menu_cookies_1781169247386.png', cat: 'snack', badge: '' },
  { name: 'Cake Rusk', desc: 'Double-baked crunchy rusk — the perfect chai companion.', price: '₹20–₹50', image: '/assets/menu_cake_rusk_1781169258754.png', cat: 'snack', badge: '' },
  { name: 'Cream Roll', desc: 'Flaky pastry spirals filled with thick fresh cream.', price: '₹25–₹40', image: '/assets/menu_cream_roll_1781169271504.png', cat: 'snack', badge: '' },
]

export default function Menu() {
  const [filter, setFilter] = useState('all')
  const gridRef = useRef(null)
  const headerRef = useRef(null)
  const tabsRef = useRef(null)

  const filtered = filter === 'all' ? menuItems : menuItems.filter(i => i.cat === filter)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
        }
      })
    }, { threshold: 0.12 })

    if (headerRef.current) observer.observe(headerRef.current)
    if (tabsRef.current) observer.observe(tabsRef.current)
    if (gridRef.current) {
      gridRef.current.querySelectorAll('.menu-card').forEach((card, i) => {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        observer.observe(card)
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, background 0.3s, border-color 0.3s'
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
        }, i * 60)
      })
    }

    return () => observer.disconnect()
  }, [filter])

  return (
    <section id="menu">
      <div className="reveal" ref={headerRef} style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <div className="section-label">What We Bake</div>
        <h2 className="section-title" style={{ color: 'var(--cream)' }}>Our Menu — Fresh &amp; Flavourful</h2>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.55)', margin: '0 auto' }}>From morning bakes to celebration centrepieces, everything at Urmi is made with quality ingredients and decades of craft.</p>
      </div>

      <div className="menu-tabs reveal" ref={tabsRef}>
        {['all', 'cake', 'savoury', 'bread', 'snack'].map(cat => (
          <button 
            key={cat}
            className={`tab ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' && 'All Items'}
            {cat === 'cake' && 'Cakes & Pastries'}
            {cat === 'savoury' && 'Savoury Bakes'}
            {cat === 'bread' && 'Breads & Buns'}
            {cat === 'snack' && 'Biscuits & Snacks'}
          </button>
        ))}
      </div>

      <div className="menu-grid" ref={gridRef}>
        {filtered.map((item, i) => (
          <div key={i} className="menu-card">
            {item.badge && <div className="menu-card-badge">{item.badge}</div>}
            {item.image ? (
              <div className="menu-card-img-wrap">
                <img src={item.image} alt={item.name} className="menu-card-img" />
              </div>
            ) : (
              <div className="menu-card-icon">{item.icon}</div>
            )}
            <div className="menu-card-name">{item.name}</div>
            <div className="menu-card-desc">{item.desc}</div>
            <div className="menu-card-price">{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
