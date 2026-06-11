import React from 'react'
import './Loader.css'

export default function Loader() {
  return (
    <div id="loader">
      <div className="loader-bread">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="55" rx="32" ry="16" fill="#A3601A" opacity="0.5"/>
          <path d="M10 50 Q10 28 40 28 Q70 28 70 50 Q70 62 40 62 Q10 62 10 50Z" fill="#C8843A"/>
          <path d="M15 44 Q15 30 40 30 Q65 30 65 44" stroke="#E8C4A0" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
          <circle cx="28" cy="22" r="7" fill="#C8843A"/>
          <circle cx="40" cy="18" r="8" fill="#C8843A"/>
          <circle cx="52" cy="22" r="7" fill="#C8843A"/>
          <path d="M22 24 Q40 14 58 24" fill="#C8843A"/>
          <circle cx="26" cy="20" r="3" fill="#E8C4A0" opacity="0.4"/>
          <circle cx="40" cy="16" r="3.5" fill="#E8C4A0" opacity="0.4"/>
          <circle cx="54" cy="20" r="3" fill="#E8C4A0" opacity="0.4"/>
        </svg>
      </div>
      <div className="loader-text">Baking something special…</div>
      <div className="loader-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
