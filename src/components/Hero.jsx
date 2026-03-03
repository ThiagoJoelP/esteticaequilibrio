import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-pattern"></div>
      <div className="hero__overlay"></div>
      
      <div className={`hero__content ${visible ? 'hero__content--visible' : ''}`}>
        <span className="hero__badge">✦ Centro de Estética Integral</span>
        <h1 className="hero__title">
          Tu belleza,
          <br />
          <em>en equilibrio</em>
        </h1>
        <p className="hero__subtitle">
          Descubrí un espacio donde el bienestar y la belleza se encuentran.
          Tratamientos personalizados que realzan tu esencia natural.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="hero__btn hero__btn--primary">Agendar Turno</a>
          <a href="#services" className="hero__btn hero__btn--secondary">Ver Servicios</a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
