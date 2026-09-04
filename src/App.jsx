import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SkillMarquee from './components/SkillMarquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white font-sans transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
        <SkillMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
