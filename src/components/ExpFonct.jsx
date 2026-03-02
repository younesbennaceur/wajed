import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext'; // ✅ Import du contexte de langue

export default function FeaturesExp() { 
  
  // ✅ Récupération de la fonction de traduction et vérification RTL
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

  const themeColor = "#F2994A"; 

  // ✅ On stocke les clés de traduction au lieu du texte en dur
  const features = [
    {
      id: "01",
      titleKey: "feat_exp_1_title",
      titleBoldKey: "feat_exp_1_bold",
      descKey: "feat_exp_1_desc",
      btnKey: "feat_exp_1_btn",
      imageSrc: "exp1.png", 
      imagePosition: "right"
    },
    {
      id: "02",
      titleKey: "feat_exp_2_title",
      titleBoldKey: "feat_exp_2_bold",
      descKey: "feat_exp_2_desc",
      btnKey: "feat_exp_2_btn",
      imageSrc: "exp2.png", 
      imagePosition: "left"
    },
    {
      id: "03",
      titleKey: "feat_exp_3_title",
      titleBoldKey: "feat_exp_3_bold",
      descKey: "feat_exp_3_desc",
      btnKey: "feat_exp_3_btn",
      imageSrc: "exp3.png", 
      imagePosition: "right"
    },
    {
      id: "04",
      titleKey: "feat_exp_4_title",
      titleBoldKey: "feat_exp_4_bold",
      descKey: "feat_exp_4_desc",
      btnKey: "feat_exp_4_btn",
      imageSrc: "exp4.png", 
      imagePosition: "left"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          data-aos="fade-down"
          dir={isRtl ? "rtl" : "ltr"} // ✅ Direction RTL globale pour l'en-tête
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {t('feat_exp_header_1')} <br />
            {t('feat_exp_header_2')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            {t('feat_exp_subtitle_1')} <br />
            {t('feat_exp_subtitle_2')}
          </p>
        </div>

        {/* Liste des fonctionnalités */}
        {/* ✅ Application de la direction RTL globale sur le conteneur principal */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40" dir={isRtl ? "rtl" : "ltr"}>
          {features.map((feature, index) => {
            
            // ✅ Calcul intelligent de l'inversion d'image en tenant compte du RTL
            // En RTL, "left" naturel devient "right". Il faut donc inverser la logique.
            const isImageLogicallyLeft = isRtl ? (feature.imagePosition === 'right') : (feature.imagePosition === 'left');

            return (
              <div
                key={feature.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center ${
                  isImageLogicallyLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* --- Contenu texte --- */}
                <div
                  // ✅ Alignement text-start s'adapte automatiquement à l'attribut dir="rtl"
                  className={`space-y-6 md:space-y-8 text-center md:text-start flex flex-col items-center md:items-start ${
                    isImageLogicallyLeft ? 'md:order-2' : 'md:order-1'
                  }`}
                  // ✅ Inversion des animations AOS en RTL
                  data-aos={isImageLogicallyLeft 
                    ? (isRtl ? "fade-right" : "fade-left") 
                    : (isRtl ? "fade-left" : "fade-right")}
                >
                  {/* Numéro (Orange) */}
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold opacity-30 select-none mb-4" style={{ color: themeColor }}>
                    {feature.id}
                  </div>

                  {/* Titre (Orange) */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: themeColor }}>
                    {t(feature.titleKey)}{' '}
                    <span className="text-gray-900 ">{t(feature.titleBoldKey)}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                    {t(feature.descKey)}
                  </p>

                  {/* Bouton (Style Pillule Orange) */}
                  <div className="pt-4 w-full flex justify-center md:justify-start">
                      <button 
                          className="inline-block px-8 py-4 bg-white border-2 font-bold rounded-full transition-all duration-300 text-sm sm:text-base hover:-translate-y-1 shadow-sm hover:shadow-md"
                          style={{
                              borderColor: themeColor,
                              color: themeColor
                          }}
                      >
                      {t(feature.btnKey)}
                      </button>
                  </div>
                </div>

                {/* --- Image --- */}
                <div
                  className={`relative ${
                    isImageLogicallyLeft ? 'md:order-1' : 'md:order-2'
                  }`}
                  // ✅ Inversion des animations AOS de l'image en RTL
                  data-aos={isImageLogicallyLeft 
                    ? (isRtl ? "fade-left" : "fade-right") 
                    : (isRtl ? "fade-right" : "fade-left")}
                  data-aos-delay="100" 
                >
                  <div className="relative group">
                     <img 
                      src={feature.imageSrc} 
                      alt={t(feature.titleKey)} 
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" 
                     />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}