// pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero.jsx';
import Fonctionnalités from '../components/Fonctionnalités.jsx';
import WhyUs from '../components/WhyUs.jsx';
import Faqs from '../components/Faqs.jsx';
import ContactSection from '../components/ConatctUs.jsx';

export default function Home() {
  return (
    <div>
      <section id="accueil">
        <Hero />
      </section>
      
      <section id="fonctionnalites">
        <Fonctionnalités />
      </section>
      
      <section id="whyus">
        <WhyUs />
      </section>
      
      <section id="faq">
        <Faqs />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}