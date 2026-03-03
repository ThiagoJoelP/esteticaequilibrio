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
      {/* Background image with blur - replace src later */}
      <div className="hero__bg-image">
        {/* Placeholder: reemplazar con la imagen real */}
        <div className="hero__bg-placeholder">Tu imagen de fondo aquí</div>
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

      {/* Wave animation at the bottom */}
      <div className="hero__waves">
        <svg className="hero__wave hero__wave--1" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" />
        </svg>
        <svg className="hero__wave hero__wave--2" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C240,30 480,100 720,60 C960,20 1200,90 1440,50 L1440,120 L0,120 Z" />
        </svg>
        <svg className="hero__wave hero__wave--3" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C180,100 540,10 900,70 C1080,90 1320,40 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
