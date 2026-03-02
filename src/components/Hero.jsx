import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  
  const { t, currentLang } = useLanguage();
  // ✅ Variable pour détecter si on est en Arabe (Right-To-Left)
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

      <div className="relative bg-gradient-to-br from-white via-[#F2F9F7] to-[#C7E8DB] max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 rounded-[2.5rem] shadow-sm border border-white/50">
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4C9580] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center py-10 relative z-10">
          
          {/* --- Colonne Gauche : Texte --- */}
          {/* ✅ Alignement forcé conditionnel : text-right (arabe) ou text-left (français) */}
          <div className={`space-y-4 text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            
            <div 
              data-aos="fade-down"
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-md border border-[#4C9580]/20 rounded-full shadow-sm w-fit mx-auto md:mx-0"
            >
              <img src="Badge.svg" alt="" className="w-5 h-5 drop-shadow-sm" />
              <span className="text-sm font-semibold text-[#3A7E6A] tracking-wide">
                {t('hero_services_badge')}
              </span>
            </div>

            <h1 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15]"
            >
              {t('hero_services_title_1')} <br />
              {t('hero_services_title_2')} <br />
              {t('hero_services_title_3')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C9580] to-[#2D6A58]">{t('hero_services_title_highlight')}</span>
            </h1>

            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium"
            >
              {t('hero_services_desc')}
            </p>

            {/* CTA Button Premium */}
            <div 
              className="flex justify-center md:justify-start pt-2"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <button className="group relative flex items-center gap-3 bg-[#4C9580] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-lg shadow-[#4C9580]/30 hover:shadow-[#4C9580]/50 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                
                {/* ✅ Ordre des icônes Apple / Play respecté selon la maquette */}
                <div className="flex gap-2 opacity-90">
                   <img src="./apple.png" alt="App Store" className="h-5 w-auto" />
                   <img src="./play.png" alt="Google Play" className="h-5 w-auto" />
                </div>
                
                <div className="h-5 w-px bg-white/30 mx-1"></div>
                
                <span className="font-bold tracking-wide text-sm sm:text-base">
                  {t('nav_download')}
                </span>
              </button>
            </div>
          </div>

          {/* --- Colonne Droite : Image Hero --- */}
          <div className="relative flex justify-center items-center md:justify-end">
            <div 
              data-aos="fade-left" 
              data-aos-delay="400"
              data-aos-duration="1200"
              className="relative animate-float z-20"
            >
               <img 
                 src="/Hero.png" 
                 alt="Application Wajed Interface" 
                 className="max-w-full md:max-w-[110%] h-auto drop-shadow-2xl"
                 style={{ filter: "drop-shadow(0px 20px 40px rgba(76, 149, 128, 0.25))" }}
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}