import React, { useEffect, useRef } from 'react'
import './Reviews.css'

const reviews = [
  {
    name: 'Nazir Ansari',
    meta: 'Local Guide · 25 reviews · 5 months ago',
    avatar: 'N',
    color: 'linear-gradient(135deg, #C8843A, #A3601A)',
    rating: 5,
    text: '"Since 2002 I have been a regular customer. After school we would come straight here for patties with friends. The pineapple pastry was ₹5 then, now it\'s ₹50 — but the taste is exactly the same."'
  },
  {
    name: 'Shivangi Bhatnagar',
    meta: '8 reviews · 7 months ago',
    avatar: 'S',
    color: 'linear-gradient(135deg, #E05B5B, #C04040)',
    rating: 5,
    text: '"Visiting since childhood — we buy biscuits, rusk, patties, cake rusk, sandwich, cake, and pastries almost every week. Everything is absolutely yummy!"'
  },
  {
    name: 'Saumya Chaudhary',
    meta: 'Local Guide · 6 years ago',
    avatar: 'S',
    color: 'linear-gradient(135deg, #4A7C59, #2D5A40)',
    rating: 5,
    text: '"I love this bakery and always order cakes from here. They make beautiful cakes for kids too and customise it accordingly. They recently started making only eggless cakes only which is amazing."'
  },
  {
    name: 'Gunjan Agarwal',
    meta: 'Local Guide · 3 months ago',
    avatar: 'G',
    color: 'linear-gradient(135deg, #6B8DD6, #4A6CB8)',
    rating: 5,
    text: '"Bakery products are fresh and pastries have very limited sweetness which is nice."'
  },
  {
    name: 'Renewable Power Systems',
    meta: 'Local Guide · 6 years ago',
    avatar: 'R',
    color: 'linear-gradient(135deg, #D4922A, #A36C1A)',
    rating: 5,
    text: '"One of the Oldest and Yummiest bakeries in Sahibabad. Some of their specialties include vegetable Patty, chocolate pastry, red velvet cake and packed items for Navratri occasion"'
  },
  {
    name: 'Keshav Sharma',
    meta: 'Local Guide · a year ago',
    avatar: 'K',
    color: 'linear-gradient(135deg, #7B6D8D, #5A4D6C)',
    rating: 5,
    text: '"They provide really very good taste. They always use fresh materials for their products. There is a wide variety of various bakery items available in their shop. Also their friendly behaviour us one thing that takes you there everytime you think of a bakery."'
  },
  {
    name: 'Swati Saini',
    meta: 'Local Guide · 3 years ago',
    avatar: 'S',
    color: 'linear-gradient(135deg, #C8843A, #A3601A)',
    rating: 5,
    text: '"All kind of bakery items available here along with snacks. Quality and long variety of cakes available here and price also reasonable. They have their own range of cookies as well, dry fruit cookie is a must try."'
  },
  {
    name: 'Bhai! Pata Hai?',
    meta: 'Local Guide · 7 years ago',
    avatar: 'B',
    color: 'linear-gradient(135deg, #E05B5B, #C04040)',
    rating: 5,
    text: '"They make best cake in whole ghaziabad at cheapest price. I love urmi"'
  },
  {
    name: 'Harmit Singh',
    meta: 'Local Guide · 2 years ago',
    avatar: 'H',
    color: 'linear-gradient(135deg, #4A7C59, #2D5A40)',
    rating: 5,
    text: '"It\'s one my favorite stores since childhood. Been visiting for Patties and bakery products. Really great quality at reasonable price. Aloo patties, breads, biscuits are all amazing. Will recommend!!!"'
  },
  {
    name: 'anandita tyagi',
    meta: 'Local Guide · 7 years ago',
    avatar: 'A',
    color: 'linear-gradient(135deg, #6B8DD6, #4A6CB8)',
    rating: 5,
    text: '"Its a surprise that even after years and years the quality of the baked goods is still excellent. Their pineapple cake still is the best they have but there are other really good flavors as well. The veg puffs are still excellent."'
  },
  {
    name: 'Rahul Pandey',
    meta: 'Local Guide · a year ago',
    avatar: 'R',
    color: 'linear-gradient(135deg, #D4922A, #A36C1A)',
    rating: 5,
    text: '"Very very well bakery in this area, offering multiple bakery items like biscuits, namkeen, puff, rusk & cakes. Highly recommended"'
  },
  {
    name: 'pummy anupma',
    meta: 'Local Guide · 4 years ago',
    avatar: 'P',
    color: 'linear-gradient(135deg, #7B6D8D, #5A4D6C)',
    rating: 5,
    text: '"Urmi Kwality Bakery shop is just awesome. Here you all can buy sweets, cakes for birthday or any function, pastries, many chocolates and some delicious snacks. The shop is well maintained... The prices are also minimal so it\'s the best shop for everyone."'
  },
  {
    name: 'Vikkas Singh',
    meta: 'Local Guide · a year ago',
    avatar: 'V',
    color: 'linear-gradient(135deg, #C8843A, #A3601A)',
    rating: 5,
    text: '"This is the best bakery in the area. Everything which I have taken were always fresh and of good quality."'
  },
  {
    name: 'Ankit Agarwal',
    meta: 'Local Guide · 4 years ago',
    avatar: 'A',
    color: 'linear-gradient(135deg, #E05B5B, #C04040)',
    rating: 5,
    text: '"As per their name they are quality Baker\'s, all kind of bakery items available here along with snacks. quality and long variety of cakes available here and price also reasonable, they also deliver cake and other items."'
  },
  {
    name: 'Frezzing Flame',
    meta: 'Local Guide · 3 years ago',
    avatar: 'F',
    color: 'linear-gradient(135deg, #4A7C59, #2D5A40)',
    rating: 5,
    text: '"Amazing place love there service with decent and polite people around good efficiency for order based products superb quality of snaks at affordable price liked it very much"'
  }
]

export default function Reviews() {
  const headerRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
        }
      })
    }, { threshold: 0.12 })

    if (headerRef.current) observer.observe(headerRef.current)

    return () => observer.disconnect()
  }, [])

  // Duplicate reviews to create a seamless infinite scrolling effect
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section id="reviews">
      <div className="reviews-header reveal" ref={headerRef}>
        <div>
          <div className="section-label">What People Say</div>
          <h2 className="section-title">Loved by Sahibabad<br/>for Decades</h2>
        </div>
        <div className="rating-big">
          <div className="rating-num">4.3</div>
          <div>
            <div className="rating-stars">★★★★☆</div>
            <div className="rating-count">Based on 811 Google Reviews</div>
          </div>
        </div>
      </div>
      
      <div className="reviews-marquee-container">
        <div className="reviews-marquee-track">
          {duplicatedReviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-quote">"</div>
              <div className="review-top">
                <div className="reviewer-avatar" style={{ background: review.color }}>
                  {review.avatar}
                </div>
                <div>
                  <div className="reviewer-name">{review.name}</div>
                  <div className="reviewer-meta">{review.meta}</div>
                </div>
              </div>
              <div className="review-stars">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
