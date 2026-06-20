import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-links a')

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'))
          const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`)
          if (active) active.classList.add('active')
        }
      })
    }, { threshold: 0.5 })

    sections.forEach(s => navObserver.observe(s))

    return () => {
      observer.disconnect()
      navObserver.disconnect()
    }
  }, [])

  return (
    <>
      <Nav />
      <main style={{ marginLeft: '140px' }}>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}