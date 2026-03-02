import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext'; // ✅ Ajout de l'import

export default function HeroExperience() {
  // ✅ Récupération de la langue et vérification si on est en Arabe
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
    <div className="md:p-8 mt-16 lg:p-12 font-sans overflow-hidden">
      
      {/* Animation de flottement personnalisée */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Conteneur Principal : Dégradé ajusté vers des tons chauds/orange doux */}
      <div className="relative bg-gradient-to-br from-white via-[#FFF8F2] to-[#FFE0C2] max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 rounded-[2.5rem] shadow-sm border border-white/50">
        
        {/* Élément décoratif d'arrière-plan (Cercle flou Orange) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F2994A] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse pointer-events-none"></div>

        {/* ✅ Ajout de dir={isRtl ? "rtl" : "ltr"} pour inverser toute la grille d'un coup */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center py-10 relative z-10"
          dir={isRtl ? "rtl" : "ltr"}
        >
          
          {/* --- Colonne 1 : Texte --- */}
          {/* ✅ Remplacement de md:text-left par md:text-start (s'adapte au RTL) */}
          <div className="space-y-4 text-center md:text-start flex flex-col items-center md:items-start">
            
            {/* Badge amélioré : Orange */}
            <div 
              data-aos="fade-down"
              // ✅ Inversion du sens des icônes/texte pour le badge
              className={`inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-md border border-[#F2994A]/20 rounded-full shadow-sm w-fit ${isRtl ? 'flex-row-reverse' : ''}`}
            >
              <img src="BadgeOrange.svg" alt="" className="w-5 h-5 drop-shadow-sm" />
              <span className="text-sm font-semibold text-[#D97706] tracking-wide">
                {t('hero_exp_badge')}
              </span>
            </div>

            {/* Titre avec dégradé Orange */}
            <h1 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15]"
            >
              {t('hero_exp_title_1')}<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2994A] to-[#D35400]">
                 {t('hero_exp_title_2')}
               </span>
            </h1>

            {/* Description */}
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed font-medium"
            >
              {t('hero_exp_desc')}
            </p>

            {/* CTA Button Premium : Orange */}
            <div 
              // ✅ md:justify-start devient naturel avec le parent flex
              className="flex justify-center md:justify-start pt-2 w-full"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <button 
                // ✅ Inversion du bouton en Arabe
                className={`group relative flex items-center gap-3 bg-[#F2994A] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-lg shadow-[#F2994A]/30 hover:shadow-[#F2994A]/50 overflow-hidden ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                
                {/* Icônes */}
                <div className={`flex gap-2 opacity-90 ${isRtl ? 'flex-row-reverse' : ''}`}>
                   <img src="./play.png" alt="Google Play" className="h-5 w-auto" />
                   <img src="./apple.png" alt="App Store" className="h-5 w-auto" />
                </div>
                
                {/* Texte séparé par une petite ligne verticale */}
                <div className="h-5 w-px bg-white/30 mx-1"></div>
                
                {/* ✅ On réutilise la traduction nav_download que tu as déjà dans ton contexte */}
                <span className="font-bold tracking-wide text-sm sm:text-base">{t('nav_download')}</span>
              </button>
            </div>
          </div>

          {/* --- Colonne 2 : Image Hero --- */}
          {/* ✅ md:justify-end s'adapte automatiquement avec le dir="rtl" du parent */}
          <div className="relative flex justify-center items-center md:justify-end">
            
            {/* L'Image flotte */}
            <div 
              // ✅ Inversion de l'animation en RTL
              data-aos={isRtl ? "fade-right" : "fade-left"} 
              data-aos-delay="400"
              data-aos-duration="1200"
              className="relative animate-float z-20"
            >
               <img 
                 src="/heroexp.png" 
                 alt="Wajed Experience Interface" 
                 className="max-w-full md:max-w-[110%] h-auto drop-shadow-2xl"
                 style={{ filter: "drop-shadow(0px 20px 40px rgba(242, 153, 74, 0.25))" }} 
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}