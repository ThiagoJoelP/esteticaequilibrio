import React, { useEffect, useState } from 'react'
import '../styles/Hero.css'

const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Background image with blur */}
      <div className="hero__bg-image">
        <img src="/masajesreductores.png" alt="Estética Equilibrio" />
      </div>
      <div className="hero__overlay" />

      <div className={`hero__content ${visible ? 'hero__content--visible' : ''}`}>
        <span className="hero__badge">Estética Corporal & Facial</span>
        <h1 className="hero__title">
          Bienestar y tecnología<br />
          estética <em>para tu cuerpo</em>
        </h1>
        <p className="hero__sub">
          Tratamientos personalizados con tecnología de última generación.
          Resultados visibles desde la primera sesión.
        </p>
        <div className="hero__actions">
          <a href="#contacto" className="hero__btn hero__btn--primary">Reservar tu sesión</a>
          <a href="#servicios" className="hero__btn hero__btn--ghost">Ver servicios</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
