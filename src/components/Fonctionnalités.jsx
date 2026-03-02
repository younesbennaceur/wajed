import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext'; // ✅ Import du système de langue

export default function FeaturesSection() {
  
  // ✅ Appel de la fonction de traduction 't' et vérification RTL (Arabe)
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

  // ✅ Utilisation des traductions dans le tableau
  const features = [
    {
      id: "01",
      title: t('feat_1_title'),
      titleBold: t('feat_1_bold'),
      description: t('feat_1_desc'),
      buttonText: t('feat_1_btn'),
      imageSrc: "1.png",
      imagePosition: "right"
    },
    {
      id: "02",
      title: t('feat_2_title'),
      titleBold: t('feat_2_bold'),
      description: t('feat_2_desc'),
      buttonText: t('feat_2_btn'),
      imageSrc: "2.png",
      imagePosition: "left"
    },
    {
      id: "03",
      title: t('feat_3_title'),
      titleBold: t('feat_3_bold'),
      description: t('feat_3_desc'),
      buttonText: t('feat_3_btn'),
      imageSrc: "3.png",
      imagePosition: "right"
    },
    {
      id: "04",
      title: t('feat_4_title'),
      titleBold: t('feat_4_bold'),
      description: t('feat_4_desc'),
      buttonText: t('feat_4_btn'),
      imageSrc: "4.png",
      imagePosition: "left"
    },
    {
      id: "05",
      title: t('feat_5_title'),
      titleBold: t('feat_5_bold'),
      description: t('feat_5_desc'),
      buttonText: t('feat_5_btn'),
      imageSrc: "5.png",
      imagePosition: "right"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          data-aos="fade-down" 
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {t('feat_header_1')}<br />
            {t('feat_header_2')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            {t('feat_subtitle')}
          </p>
        </div>

        {/* Liste des fonctionnalités */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                feature.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* --- Contenu texte --- */}
              <div
                // ✅ text-start force l'alignement naturel : à gauche en FR, à droite en DZ
                className={`space-y-4 md:space-y-6 text-start ${
                  feature.imagePosition === 'left' ? 'md:order-2' : 'md:order-1'
                }`}
                // ✅ Animation inversée intelligemment selon la langue pour éviter les chevauchements
                data-aos={
                  feature.imagePosition === 'left' 
                    ? (isRtl ? "fade-right" : "fade-left") 
                    : (isRtl ? "fade-left" : "fade-right")
                }
              >
                {/* Numéro */}
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#4C9580] opacity-20 select-none">
                  {feature.id}
                </div>

                {/* Titre */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4C9580] leading-tight">
                  {feature.title}{' '}
                  <span className="text-gray-900">{feature.titleBold}</span>
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bouton */}
                <button className="inline-block px-6 py-3 bg-white border-2 border-gray-300 hover:border-[#4C9580] text-gray-700 hover:text-[#4C9580] font-medium rounded-full transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95">
                  {feature.buttonText}
                </button>
              </div>

              {/* --- Image --- */}
              <div
                className={`relative ${
                  feature.imagePosition === 'left' ? 'md:order-1' : 'md:order-2'
                }`}
                // ✅ Animation inversée pour l'image
                data-aos={
                  feature.imagePosition === 'left' 
                    ? (isRtl ? "fade-left" : "fade-right") 
                    : (isRtl ? "fade-right" : "fade-left")
                }
                data-aos-delay="100" 
              >
                <div className="relative group">
                   <img 
                    src={feature.imageSrc} 
                    alt={feature.title} 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" 
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