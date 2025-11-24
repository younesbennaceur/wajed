import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BecomeProviderSection() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Conteneur principal style "Carte" avec fond dégradé et bords arrondis */}
        <div className="bg-gradient-to-br from-[#E8F6F2] to-[#D4EDE6] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* --- Colonne Gauche : Texte --- */}
            <div 
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6"
              data-aos="fade-right" // Animation venant de la gauche
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Devenez Prestataire
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg md:text-xl font-medium text-gray-700">
                  Proposez vos services, on s’occupe du reste.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
                  Gagnez en visibilité, recevez des missions locales et gérez tout depuis l’app Wajed.
                </p>
              </div>

              {/* Bouton d'action */}
              <div className="pt-6">
                <button className="group flex items-center gap-3 bg-[#4C9580] hover:bg-[#3d7a68] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg shadow-[#4C9580]/20 hover:shadow-[#4C9580]/40 hover:-translate-y-1 active:scale-95">
                  {/* Remplace par tes icônes Play Store / Apple si tu les as séparées, sinon une seule image */}
                  <img src="./play.png" alt="Google Play" className="h-6 w-6" />
                  <img src="./apple.png" alt="App Store" className="h-6 w-auto" />
                  <span className="text-base sm:text-lg">Wajed Prestataire</span>
                </button>
              </div>
            </div>

            {/* --- Colonne Droite : Image --- */}
            {/* h-full et object-cover sont importants pour que l'image remplisse la zone et soit coupée par les bords arrondis */}
            <div 
              className="relative h-full min-h-[300px] md:min-h-[500px] lg:min-h-full"
              data-aos="fade-left" // Animation venant de la droite
              data-aos-delay="200"
            >
              <img
                src="/new.png" // Ton image
                alt="Interface de l'application Wajed Prestataire"
                className="w-full h-full object-cover object-center lg:object-left"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}