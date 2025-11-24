import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BecomeAgencySection() { // Renommé pour la version Agence
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Couleur Orange pour le thème Agence
  const themeColor = "#F2994A";
  const themeHoverColor = "#d97706";
  const gradientFrom = "#FFF0E3"; // Orange très clair
  const gradientTo = "#FFD9B3";   // Orange clair

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Conteneur style "Carte" avec fond dégradé orange et bords arrondis */}
        <div 
          className="rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-sm"
          style={{ background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})` }}
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* --- Colonne Gauche : Texte --- */}
            <div 
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6"
              data-aos="fade-right"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Devenez agence de voyage.
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed max-w-md">
                  Découvrez des expériences culturelles et sportives uniques avec des passionnés locaux
                </p>
              </div>

              {/* Bouton d'action Orange */}
              <div className="pt-6">
                <button 
                  className="group flex items-center gap-3 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 active:scale-95"
                  style={{ 
                    backgroundColor: themeColor,
                    boxShadow: `0 10px 15px -3px ${themeColor}40, 0 4px 6px -2px ${themeColor}20`
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeHoverColor}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = themeColor}
                >
                  <img src="./play.png" alt="Google Play" className="h-6 w-6" />
                  <img src="./apple.png" alt="App Store" className="h-6 w-auto" />
                  <span className="text-base sm:text-lg">Wajed Agence</span>
                </button>
              </div>
            </div>

            {/* --- Colonne Droite : Image --- */}
            <div 
              className="relative h-full min-h-[300px] md:min-h-[500px] lg:min-h-full"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="/new2.png" // Ton image orange
                alt="Interface de l'application Wajed Agence"
                className="w-full h-full object-cover object-center lg:object-left"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}