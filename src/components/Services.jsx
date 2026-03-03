import React, { useEffect, useRef, useState } from 'react'
import '../styles/Services.css'

export const SERVICES = [
  {
    id: 'radiofrecuencia',
    icon: '◈',
    title: 'Radiofrecuencia',
    desc: 'Estimula la producción de colágeno y elastina, logrando una piel más firme y rejuvenecida sin cirugía.',
  },
  {
    id: 'electroestimulacion',
    icon: '⚡',
    title: 'Electroestimulación',
    desc: 'Tonificación muscular profunda mediante impulsos eléctricos que modelan tu silueta de forma segura.',
  },
  {
    id: 'masajes',
    icon: '✦',
    title: 'Masajes Reductores',
    desc: 'Técnicas manuales especializadas que activan la circulación y ayudan a reducir medidas de forma natural.',
  },
  {
    id: 'criolipólisis',
    icon: '❄',
    title: 'Criolipólisis',
    desc: 'Eliminación de grasa localizada por frío controlado. Un procedimiento no invasivo con resultados duraderos.',
  },
  {
    id: 'reafirmacion',
    icon: '✧',
    title: 'Reafirmación y Cuidado de Piel',
    desc: 'Tratamientos faciales y corporales que nutren, hidratan y devuelven la luminosidad natural de tu piel.',
  },
]

const Services = () => {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleInfo = (serviceId) => {
    const el = document.getElementById('contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    // Dispatch custom event to preselect service
    window.dispatchEvent(new CustomEvent('selectService', { detail: serviceId }))
  }

  return (
    <section id="servicios" className="services" ref={ref}>
      <div className={`services__inner ${vis ? 'services__inner--visible' : ''}`}>
        <div className="services__header">
          <span className="section-label">Nuestros Servicios</span>
          <h2 className="section-title">Tratamientos pensados <em>para vos</em></h2>
          <p className="services__sub">Tecnología de última generación combinada con atención profesional y personalizada.</p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div className="svc-card" key={s.id} style={{ animationDelay: `${i * 0.08}s` }}>
              {/* Placeholder para imagen del servicio */}
              <div className="svc-card__img">
                <span>{s.icon}</span>
                <small>📷 Imagen</small>
              </div>
              <div className="svc-card__body">
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
                <button className="svc-card__btn" onClick={() => handleInfo(s.id)}>
                  Quiero más info →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
