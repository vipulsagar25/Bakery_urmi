import React, { useRef, useEffect } from 'react'
import { MessageCircle, ArrowUp } from 'lucide-react'
import './FloatingButtons.css'

export default function FloatingButtons({ scrollY }) {
  const backToTopRef = useRef(null)

  useEffect(() => {
    if (backToTopRef.current) {
      if (scrollY > 400) {
        backToTopRef.current.classList.add('show')
      } else {
        backToTopRef.current.classList.remove('show')
      }
    }
  }, [scrollY])

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="floating-buttons">
      <a href="https://wa.me/919999114013" target="_blank" rel="noopener noreferrer" className="floating-btn wa-btn" title="Chat on WhatsApp">
        <span style={{ display: 'flex', alignItems: 'center' }}><MessageCircle size={28} fill="white" color="white" /></span>
      </a>
      <button 
        ref={backToTopRef}
        className="floating-btn back-to-top"
        onClick={handleBackToTop}
        title="Back to top"
      >
        <span style={{ display: 'flex', alignItems: 'center' }}><ArrowUp size={28} /></span>
      </button>
    </div>
  )
}
