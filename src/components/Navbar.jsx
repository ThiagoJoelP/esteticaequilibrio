import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Testimonios', href: '#testimonios' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-mark">E</span>
          <span className="nav__logo-text">Equilibrio</span>
        </a>

        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.name}>
              <a href={l.href} className="nav__link" onClick={() => setMenuOpen(false)}>{l.name}</a>
            </li>
          ))}
          <li className="nav__links-cta-mobile">
            <a href="#contacto" className="nav__cta" onClick={() => setMenuOpen(false)}>Reservar</a>
          </li>
        </ul>

        <a href="#contacto" className="nav__cta nav__cta--desktop">Reservar Sesión</a>

        <button className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
