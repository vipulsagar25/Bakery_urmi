import React, { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Menu from './components/Menu'
import Specialty from './components/Specialty'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import './App.css'

export default function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleLoad = () => setShowLoader(false)
    if (document.readyState === 'complete') {
      setShowLoader(false)
    } else {
      window.addEventListener('load', handleLoad)
      const timer = setTimeout(() => setShowLoader(false), 600)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(timer)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {showLoader && <Loader />}
      <Navigation scrollY={scrollY} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Specialty />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButtons scrollY={scrollY} />
    </>
  )
}
