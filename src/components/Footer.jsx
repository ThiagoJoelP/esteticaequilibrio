import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logoequilibrio.jpg" alt="Estética Equilibrio" className="footer__logo-img" />
              <div className="footer__logo-text-wrap">
                <span className="footer__logo-text">Estética Equilibrio</span>
                <span className="footer__logo-tagline">Más salud</span>
              </div>
            </div>
            <p className="footer__desc">Bienestar y tecnología estética para tu cuerpo.</p>
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
            <a href="#servicios">Mesoterapia</a>
            <a href="#servicios">Circuitos corporales</a>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Ubicación</h4>
            <span>Buenos Aires, Fleming y,</span>
            <span>X5152 Villa Carlos Paz,</span>
            <span>Córdoba</span>
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
