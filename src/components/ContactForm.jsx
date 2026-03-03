import React, { useState, useEffect, useCallback } from 'react'
import { SERVICES } from './Services'
import '../styles/ContactForm.css'

const INTENCIONES = [
  { id: 'precio', label: 'Quiero saber el precio', emoji: '💰' },
  { id: 'reservar', label: 'Quiero reservar', emoji: '📅' },
  { id: 'pagar', label: 'Quiero pagar', emoji: '💳' },
]

const WHATSAPP_NUMBER = '5493541000000'
const EMAIL = 'info@esteticaequilibrio.com'

const ContactForm = () => {
  const [service, setService] = useState('')
  const [intencion, setIntencion] = useState('')
  const [nombre, setNombre] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const ref = React.useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const handler = (e) => setService(e.detail)
    window.addEventListener('selectService', handler)
    return () => window.removeEventListener('selectService', handler)
  }, [])

  const serviceName = SERVICES.find(s => s.id === service)?.title || ''
  const intencionData = INTENCIONES.find(i => i.id === intencion)

  const buildMessage = useCallback(() => {
    if (!service || !intencion || !nombre.trim()) return ''
    const greeting = `Hola, soy ${nombre.trim()}. `
    const serviceText = `Vi en tu página que ofrecés sesiones de ${serviceName}.`

    let intentText = ''
    if (intencion === 'precio') intentText = ' Estoy interesado/a en saber el precio de una sesión completa.'
    if (intencion === 'reservar') intentText = ' Me gustaría reservar un turno para una sesión.'
    if (intencion === 'pagar') intentText = ' Quisiera saber cómo puedo realizar el pago de una sesión.'

    return `${greeting}${serviceText}${intentText}`
  }, [service, intencion, nombre, serviceName])

  const message = buildMessage()
  const canSend = service && intencion && nombre.trim()

  const sendWhatsApp = () => {
    if (!canSend) return
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const sendEmail = () => {
    if (!canSend) return
    const subject = `Consulta sobre ${serviceName}`
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.location.href = url
  }

  return (
    <section id="contacto" className="contact" ref={ref}>
      <div className={`contact__inner ${vis ? 'contact__inner--visible' : ''}`}>
        <div className="contact__info">
          <span className="section-label">Contacto</span>
          <h2 className="section-title">Reservá tu <em>sesión</em></h2>
          <p className="contact__desc">
            Seleccioná el servicio que te interesa y cómo querés comunicarte.
            Armamos el mensaje por vos.
          </p>
          <div className="contact__data">
            <div className="contact__data-item">
              <span>📱</span>
              <div>
                <strong>WhatsApp</strong>
                <span>+54 3541 00-0000</span>
              </div>
            </div>
            <div className="contact__data-item">
              <span>✉️</span>
              <div>
                <strong>Email</strong>
                <span>{EMAIL}</span>
              </div>
            </div>
            <div className="contact__data-item">
              <span>📍</span>
              <div>
                <strong>Dirección</strong>
                <span>Av. San Martín 1234, Villa Carlos Paz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          <div className="cf">
            {/* Nombre - obligatorio */}
            <div className="cf__group">
              <label className="cf__label">Tu nombre <span className="cf__required">*</span></label>
              <input
                type="text"
                className={`cf__input ${!nombre.trim() && nombre !== '' ? 'cf__input--error' : ''}`}
                placeholder="Ej: María"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                required
              />
              {!nombre.trim() && nombre !== '' && (
                <span className="cf__error-msg">El nombre es obligatorio</span>
              )}
            </div>

            {/* Servicio */}
            <div className="cf__group">
              <label className="cf__label">¿Qué servicio te interesa? <span className="cf__required">*</span></label>
              <div className="cf__chips">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    className={`cf__chip ${service === s.id ? 'cf__chip--active' : ''}`}
                    onClick={() => setService(s.id)}
                  >
                    {s.icon} {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Intención */}
            <div className="cf__group">
              <label className="cf__label">¿Qué necesitás? <span className="cf__required">*</span></label>
              <div className="cf__chips">
                {INTENCIONES.map(i => (
                  <button
                    key={i.id}
                    className={`cf__chip ${intencion === i.id ? 'cf__chip--active' : ''}`}
                    onClick={() => setIntencion(i.id)}
                  >
                    {i.emoji} {i.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview */}
            {canSend && (
              <div className="cf__preview">
                <div className="cf__preview-header">
                  <span>💬</span>
                  <span>Vista previa del mensaje</span>
                </div>
                <p className="cf__preview-text">{message}</p>
              </div>
            )}

            {/* Botones de envío */}
            <div className="cf__actions">
              <button
                className="cf__send cf__send--wa"
                onClick={sendWhatsApp}
                disabled={!canSend}
                title={!canSend ? 'Completá todos los campos' : ''}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enviar por WhatsApp
              </button>
              <button
                className="cf__send cf__send--email"
                onClick={sendEmail}
                disabled={!canSend}
                title={!canSend ? 'Completá todos los campos' : ''}
              >
                ✉️ Enviar por Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
