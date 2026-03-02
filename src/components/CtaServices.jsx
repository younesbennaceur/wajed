import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext'; // ✅ Import du contexte de langue

export default function BecomeProviderSection() {
  
  // ✅ Récupération de la fonction de traduction et vérification RTL
  const { t, currentLang } = useLanguage();
  const isRtl = currentLang === 'DZ';

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
          
          {/* ✅ Ajout de dir="rtl" pour inverser automatiquement la grille en Arabe */}
          <div className="grid grid-cols-1 lg:grid-cols-2" dir={isRtl ? "rtl" : "ltr"}>
            
            {/* --- Colonne 1 : Texte --- */}
            <div 
              // ✅ text-start s'adapte automatiquement à la direction
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 text-start items-start"
              // ✅ Inversion de l'animation en RTL
              data-aos={isRtl ? "fade-left" : "fade-right"} 
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {t('prestataire_title')}
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg md:text-xl font-medium text-gray-700">
                  {t('prestataire_subtitle')}
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
                  {t('prestataire_desc')}
                </p>
              </div>

              {/* Bouton d'action */}
              <div className="pt-6 flex">
                <button 
                  // ✅ Inversion des éléments du bouton en Arabe
                  className={`group flex items-center gap-3 bg-[#4C9580] hover:bg-[#3d7a68] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg shadow-[#4C9580]/20 hover:shadow-[#4C9580]/40 hover:-translate-y-1 active:scale-95 ${isRtl ? 'flex-row-reverse' : ''}`}
                >
                  <img src="./play.png" alt="Google Play" className="h-6 w-6" />
                  <img src="./apple.png" alt="App Store" className="h-6 w-auto" />
                  <span className="text-base sm:text-lg">{t('prestataire_btn')}</span>
                </button>
              </div>
            </div>

            {/* --- Colonne 2 : Image --- */}
            <div 
              className="relative h-full min-h-[300px] md:min-h-[500px] lg:min-h-full"
              // ✅ Inversion de l'animation en RTL
              data-aos={isRtl ? "fade-right" : "fade-left"} 
              data-aos-delay="200"
            >
              <img
                src="/new.png" 
                alt={t('prestataire_title')}
                // ✅ Ajustement du centrage de l'image (s'aligne à droite en RTL pour ne pas être coupée du mauvais côté)
                className={`w-full h-full object-cover object-center ${isRtl ? 'lg:object-right' : 'lg:object-left'}`}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}