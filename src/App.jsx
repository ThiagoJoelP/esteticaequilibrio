import React from 'react'
import './App.css'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Jost', sans-serif",
      background: '#FAF8F5',
      color: '#2C2421'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '3rem',
          fontWeight: 300,
          marginBottom: '1rem',
          color: '#8B7355'
        }}>
          ✦ Estética Equilibrio
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#3D3330' }}>
          Sitio en construcción — ¡Próximamente!
        </p>
      </div>
    </div>
  )
}

export default App
