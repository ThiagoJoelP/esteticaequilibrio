import React, { useEffect, useRef, useState } from 'react'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className={`about__container ${isVisible ? 'about__container--visible' : ''}`}>
        <div className="about__left">
          <div className="about__image-frame">
            <div className="about__image-placeholder">
              <span className="about__image-icon">❋</span>
              <span>Estética Equilibrio</span>
            </div>
            <div className="about__image-accent"></div>
          </div>
        </div>

        <div className="about__right">
          <span className="about__label">Sobre Nosotros</span>
          <h2 className="about__title">
            Donde la ciencia se encuentra con el <em>arte del cuidado</em>
          </h2>
          <p className="about__text">
            En Estética Equilibrio creemos que cada persona es única. Nuestro equipo de profesionales
            combina las técnicas más avanzadas con un enfoque holístico para ofrecerte tratamientos
            que van más allá de lo estético.
          </p>
          <p className="about__text">
            Desde hace más de 10 años, nos dedicamos a realzar la belleza natural de cada cliente,
            creando experiencias personalizadas en un ambiente de absoluta calma y confianza.
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">10+</span>
              <span className="about__stat-label">Años de experiencia</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">5K+</span>
              <span className="about__stat-label">Clientes felices</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">20+</span>
              <span className="about__stat-label">Tratamientos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
