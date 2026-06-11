import React from 'react'
import './Marquee.css'

export default function Marquee() {
  const items = [
    'Pineapple Cake', 'Aloo Patties', 'Chocolate Cake', 'Fresh Bread & Buns',
    'Cookies & Biscuits', 'Rusk & Cake Rusk', 'Cream Rolls', 'Pizza Base',
    'Custom Birthday Cakes', 'Sandwiches', 'Pastries'
  ]

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-dot">✦</span> {item}
          </div>
        ))}
      </div>
    </div>
  )
}
