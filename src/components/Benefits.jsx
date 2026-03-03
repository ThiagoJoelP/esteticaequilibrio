import React, { useEffect, useRef, useState } from 'react'
import '../styles/Benefits.css'

const items = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/3524/3524659.png',
    title: 'Tecnología avanzada',
    desc: 'Equipos de última generación para tratamientos seguros y efectivos.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
    title: 'Resultados visibles',
    desc: 'Notarás cambios reales desde tu primera sesión de tratamiento.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/681/681494.png',
    title: 'Atención personalizada',
    desc: 'Cada plan se diseña a medida según tus objetivos y necesidades.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
    title: 'Ambiente profesional',
    desc: 'Un espacio pensado para tu relajación, confort y bienestar.',
  },
]

const Benefits = () => {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="beneficios" className="benefits" ref={ref}>
      <div className={`benefits__inner ${vis ? 'benefits__inner--visible' : ''}`}>
        <div className="benefits__text">
          <span className="section-label">Por qué elegirnos</span>
          <h2 className="section-title">Tu bienestar es nuestra <em>prioridad</em></h2>
        </div>
        <div className="benefits__grid">
          {items.map((item, i) => (
            <div className="benefit" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <img src={item.icon} alt={item.title} className="benefit__icon" />
              <h3 className="benefit__title">{item.title}</h3>
              <p className="benefit__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
