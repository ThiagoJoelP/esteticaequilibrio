import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import ContactForm from './components/ContactForm'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <ContactForm />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
