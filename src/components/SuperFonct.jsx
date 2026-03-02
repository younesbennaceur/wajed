import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; 

export default function SuperFonct() {
  // ✅ On récupère 'currentLang' pour savoir si on est en arabe (DZ)
  const { t, currentLang } = useLanguage();
  const isRtl = currentLang === 'DZ';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const wajedStyle = { 
    fontFamily: "'Croogla 4F', sans-serif", 
    fontWeight: 'normal',
    textTransform: 'lowercase' 
  };

  const features = [
    {
      id: "01",
      link: "/services",
      brand: t('brand_name'),
      service: t('service_1_name'),
      tagline: t('sf_service_1_tagline'),
      mainHeading: t('sf_service_1_heading'),
      description: t('sf_service_1_desc'),
      buttonText: <>{t('sf_service_1_btn')} <span style={wajedStyle}>{t('brand_name')}</span> {t('service_1_name')}</>,
      imageSrc: "super1.png", 
      imagePosition: "right",
      color: "#4C9580", 
      bgGlow: "bg-[#4C9580]/20",
      delay: 0
    },
    {
      id: "02",
      brand: t('brand_name'),
      link: "/experience",
      service: t('service_2_name'),
      tagline: t('sf_service_2_tagline'),
      mainHeading: t('sf_service_2_heading'),
      description: t('sf_service_2_desc'),
      buttonText: <>{t('sf_service_2_btn')} <span style={wajedStyle}>{t('brand_name')}</span> {t('service_2_name')}</>,
      imageSrc: "super2.png", 
      imagePosition: "left",
      color: "#F2994A", 
      bgGlow: "bg-[#F2994A]/20",
      delay: 100
    },
    {
      id: "03",
      brand: t('brand_name'),
      service: t('service_3_name'),
      tagline: t('sf_service_3_tagline'),
      mainHeading: t('sf_service_3_heading'),
      description: t('sf_service_3_desc'),
      buttonText: <>{t('sf_service_3_btn')} <span style={wajedStyle}>{t('brand_name')}</span> {t('service_3_name')}</>,
      imageSrc: "super3.png", 
      imagePosition: "right",
      color: "#26C6DA", 
      bgGlow: "bg-[#26C6DA]/20",
      delay: 200
    },
    {
      id: "04",
      brand: t('brand_name'),
      service: t('service_4_name'),
      tagline: t('sf_service_4_tagline'),
      mainHeading: t('sf_service_4_heading'),
      description: t('sf_service_4_desc'),
      buttonText: <>{t('sf_service_4_btn')} <span style={wajedStyle}>{t('brand_name')}</span> {t('service_4_name')}</>,
      imageSrc: "super4.png", 
      imagePosition: "left", 
      color: "#FF5252", 
      bgGlow: "bg-[#FF5252]/20",
      delay: 300
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden relative">
      
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Encadré --- */}
        <div 
          className="max-w-4xl mx-auto mb-8 relative"
          data-aos="fade-down"
        >
          <div className="text-center px-6 relative bg-white/50 backdrop-blur-sm rounded-[2.5rem]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              {t('sf_title_1')} <br className="hidden sm:block"/>
              {t('sf_title_2')} 
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto font-medium">
              <span style={wajedStyle} className="text-lg">{t('brand_name')}</span> {t('sf_desc_1')} <br />
              <span className="text-gray-500">{t('sf_desc_2')}</span> 
            </p>
          </div>
        </div>

        {/* --- Liste des Services --- */}
        <div className="space-y-4 md:space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                feature.imagePosition === 'left' ? 'lg:order-last' : ''
              }`}
            >
              {/* === COLONNE TEXTE === */}
              <div
                // ✅ Remplacement de lg:text-left par lg:text-start pour l'alignement naturel
                className={`space-y-6 md:space-y-8 text-center lg:text-start ${
                  feature.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
                }`}
                data-aos={feature.imagePosition === 'left' ? "fade-left" : "fade-right"}
              >
                <div>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-2 flex flex-wrap justify-center lg:justify-start gap-2">
                    <span style={{ color: feature.color, ...wajedStyle }}>{feature.brand}</span>
                    <span>{feature.service}</span>
                  </h3>
                  
                  <p className="text-lg font-bold opacity-90 mt-1" style={{ color: feature.color }}>
                    {feature.tagline}
                  </p>
                  
                  <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                    {feature.mainHeading}
                  </h4>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {feature.description}
                </p>

                <div className="pt-2">
                  <button 
                    className="group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border-2 bg-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                    style={{ borderColor: feature.color }}
                  >
                    <Link to={feature.link || "#"} className="font-bold text-sm sm:text-base" style={{ color: feature.color }}>
                      {feature.buttonText}
                    </Link>
                    {/* ✅ La flèche s'oriente dynamiquement vers la gauche (arabe) ou la droite (français) */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} 
                      fill="none" viewBox="0 0 24 24" stroke={feature.color} strokeWidth={2.5}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d={isRtl ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"} 
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* === COLONNE IMAGE === */}
              <div
                className={`relative flex justify-center ${
                  feature.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
                }`}
                data-aos={feature.imagePosition === 'left' ? "fade-right" : "fade-left"}
              >
                <div className="animate-float relative">
                   <img 
                    src={feature.imageSrc} 
                    alt={`${feature.brand} ${feature.service}`} 
                    className=""
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}