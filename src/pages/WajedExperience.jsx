
import HeroExperience from '../components/HeroExperience.jsx';
import FeaturesExperience from '../components/ExpFonct.jsx';
import WhyUs from '../components/WhyUs.jsx';
import Faqs from '../components/Faqs.jsx';
import ContactSection from '../components/ConatctUs.jsx';
import Navbar from '../components/Navbar.jsx';
import BecomeAgencySection from '../components/Provider.jsx';
import Footer from '../components/Footer.jsx';


export default function WajedExperience() {
  return (
    <div>
      <Navbar variant="experience" />
      <section id="accueil">
        <HeroExperience />
      </section>
      
      <section id="fonctionnalites">
        <FeaturesExperience />
      </section>
      
    
      
      <section id="faq">
        <Faqs />
      </section>
      <BecomeAgencySection />
      <section id="contact">
        <ContactSection variant="experience" />
      </section>
      <Footer variant='experience'/>
      
       


      
     
      
      

    </div>
  )
}