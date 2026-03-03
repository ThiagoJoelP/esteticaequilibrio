import React, { useEffect, useRef, useState } from 'react'
import './Services.css'

const services = [
  {
    icon: '◆',
    title: 'Tratamientos Faciales',
    description: 'Limpieza profunda, hidratación, anti-age y tratamientos personalizados para cada tipo de piel.',
    price: 'Desde $8.000'
  },
  {
    icon: '◇',
    title: 'Depilación Láser',
    description: 'Tecnología de última generación para una depilación definitiva, segura y sin dolor.',
    price: 'Desde $5.000'
  },
  {
    icon: '○',
    title: 'Masajes Relajantes',
    description: 'Descontracturantes, piedras calientes, aromaterapia y técnicas orientales de relajación.',
    price: 'Desde $6.000'
  },
  {
    icon: '◈',
    title: 'Tratamientos Corporales',
    description: 'Reducción, reafirmación, drenaje linfático y tratamientos modeladores con aparatología.',
    price: 'Desde $7.000'
  },
  {
    icon: '✧',
    title: 'Manicura & Pedicura',
    description: 'Semipermanente, esculpidas, nail art y cuidado integral de manos y pies.',
    price: 'Desde $4.000'
  },
  {
    icon: '◎',
    title: 'Maquillaje Profesional',
    description: 'Social, novias, editorial. Realzamos tu belleza natural con productos de primera calidad.',
    price: 'Desde $10.000'
  }
]

const Services = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className={`services__container ${isVisible ? 'services__container--visible' : ''}`}>
        <div className="services__header">
          <span className="services__label">Nuestros Servicios</span>
          <h2 className="services__title">
            Tratamientos pensados <br /><em>para vos</em>
          </h2>
          <p className="services__subtitle">
            Cada servicio es una experiencia diseñada para nutrir tu cuerpo y tu espíritu.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div
              className="services__card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="services__card-icon">{service.icon}</span>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <span className="services__card-price">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
