
import Hero from '../components/Hero.jsx';
import Fonctionnalités from '../components/Fonctionnalités.jsx';
import WhyUs from '../components/WhyUs.jsx';
import Faqs from '../components/Faqs.jsx';
import ContactSection from '../components/ConatctUs.jsx';
import Cta from '../components/Cta.jsx';
import Footer from '../components/Footer.jsx';
import BecomeProviderSection from '../components/CtaServices.jsx';
import Navbar from '../components/Navbar.jsx';

export default function WajedServices() {
  return (
    <div>
      <Navbar  />
      <section id="accueil">
        <Hero />
      </section>
      
      <section id="fonctionnalites">
        <Fonctionnalités />
      </section>
      
      <section id="whyus">
        <WhyUs />
      </section>
      <BecomeProviderSection />
      
      <section id="faq">
        <Faqs />
      </section>

       


      
      <section id="contact">
        <ContactSection />
      </section>
      <Footer variant='home'/>
      
      

    </div>
  )
}