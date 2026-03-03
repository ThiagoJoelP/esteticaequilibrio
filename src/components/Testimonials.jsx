import React, { useEffect, useRef, useState } from 'react'
import '../styles/Testimonials.css'

const testimonials = [
  {
    name: 'María G.',
    text: 'Increíble experiencia. Desde la primera sesión de radiofrecuencia noté mi piel más firme. El ambiente es hermoso y la atención es de primera.',
    service: 'Radiofrecuencia',
  },
  {
    name: 'Luciana T.',
    text: 'Los masajes reductores me cambiaron la vida. Se nota el profesionalismo y la dedicación en cada sesión. 100% recomendable.',
    service: 'Masajes Reductores',
  },
  {
    name: 'Sofía M.',
    text: 'Probé la criolipólisis y los resultados superaron mis expectativas. Todo el proceso fue cómodo y sin dolor. Volveré seguro.',
    service: 'Criolipólisis',
  },
]

const Testimonials = () => {
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
    <section id="testimonios" className="test" ref={ref}>
      <div className={`test__inner ${vis ? 'test__inner--visible' : ''}`}>
        <div className="test__header">
          <span className="section-label">Testimonios</span>
          <h2 className="section-title">Lo que dicen <em>nuestras clientas</em></h2>
        </div>
        <div className="test__grid">
          {testimonials.map((t, i) => (
            <div className="test-card" key={i}>
              <div className="test-card__quote">“</div>
              <p className="test-card__text">{t.text}</p>
              <div className="test-card__author">
                <div className="test-card__avatar">{t.name[0]}</div>
                <div>
                  <strong className="test-card__name">{t.name}</strong>
                  <span className="test-card__svc">{t.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder para fotos del centro */}
        <div className="test__photos">
          <div className="test__photo-placeholder">
            <span>📷</span> Foto del centro 1
          </div>
          <div className="test__photo-placeholder">
            <span>📷</span> Foto del centro 2
          </div>
          <div className="test__photo-placeholder">
            <span>📷</span> Foto del centro 3
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
