import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark">E</span>
              <span className="footer__logo-text">Estética Equilibrio</span>
            </div>
            <p className="footer__tagline">Bienestar y tecnología estética para tu cuerpo.</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navegación</h4>
            <a href="#hero">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Servicios</h4>
            <a href="#servicios">Radiofrecuencia</a>
            <a href="#servicios">Electroestimulación</a>
            <a href="#servicios">Masajes Reductores</a>
            <a href="#servicios">Criolipólisis</a>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <a href="https://wa.me/5493541000000" target="_blank" rel="noopener">WhatsApp</a>
            <a href="mailto:info@esteticaequilibrio.com">Email</a>
            <span>Av. San Martín 1234</span>
            <span>Villa Carlos Paz, Córdoba</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; 2026 Estética Equilibrio. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
