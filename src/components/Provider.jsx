import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext'; // ✅ Import du système de langue

export default function BecomeAgencySection() { 
  
  // ✅ Appel de la fonction de traduction 't' et détection RTL
  const { t, currentLang } = useLanguage();
  const isRtl = currentLang === 'DZ';

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
              // ✅ text-start garantit un bon alignement (gauche en FR, droite en DZ)
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 text-start"
              // ✅ Inversion de l'animation pour l'arabe
              data-aos={isRtl ? "fade-left" : "fade-right"}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {t('agency_title')} {/* ✅ Traduction */}
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed max-w-md">
                  {t('agency_desc')} {/* ✅ Traduction */}
                </p>
              </div>

              {/* Bouton d'action Orange */}
              <div className="pt-6">
                <button 
                  className="group flex items-center gap-3 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 active:scale-95 w-fit"
                  style={{ 
                    backgroundColor: themeColor,
                    boxShadow: `0 10px 15px -3px ${themeColor}40, 0 4px 6px -2px ${themeColor}20`
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeHoverColor}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = themeColor}
                >
                  <img src="./play.png" alt="Google Play" className="h-6 w-6" />
                  <img src="./apple.png" alt="App Store" className="h-6 w-auto" />
                  <span className="text-base sm:text-lg">{t('agency_btn')}</span> {/* ✅ Traduction */}
                </button>
              </div>
            </div>

            {/* --- Colonne Droite : Image --- */}
            <div 
              className="relative h-full min-h-[300px] md:min-h-[500px] lg:min-h-full"
              // ✅ Inversion de l'animation pour l'arabe
              data-aos={isRtl ? "fade-right" : "fade-left"}
              data-aos-delay="200"
            >
              <img
                src="/new2.png" 
                alt="Interface de l'application Wajed Agence"
                // object-left devient naturel en LTR, mais object-center est souvent plus sûr sur mobile
                className={`w-full h-full object-cover ${isRtl ? 'lg:object-right' : 'lg:object-left'} object-center`}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}