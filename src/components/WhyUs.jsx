import React from 'react';
import { useLanguage } from './LanguageContext'; // ✅ Import du système de langue

export default function Pourquoi() {
  
  // ✅ Appel de la fonction de traduction 't'
  const { t } = useLanguage();

  // ✅ Utilisation des traductions dans le tableau
  const features = [
    t('why_feat_1'),
    t('why_feat_2'),
    t('why_feat_3'),
    t('why_feat_4'),
    t('why_feat_5')
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 flex justify-center gap-2 flex-wrap">
            <span className="text-black">{t('why_title_1')}</span>
            <span className="text-[#4C9580] font-normal" style={{ fontFamily: "'Croogla 4F', sans-serif", textTransform: 'lowercase' }}>
              {t('brand_name')}
            </span>
            <span className="text-black">{t('why_title_2')}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('why_subtitle')}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left - Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Checkmark Circle */}
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full border-2 border-teal-600 bg-white">
                    <svg
                      className="h-4 w-4 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {/* Text */}
                {/* ✅ text-start force l'alignement naturel du texte (gauche ou droite) */}
                <div className="text-start">
                  <p className="text-2xl font-medium text-gray-900 leading-snug">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Images */}
          <div className="md:flex justify-center items-center">
            <div className="relative w-full h-96 flex justify-center items-center">
              {/* Phones Container */}
              <img className="w-128 lg:h-120 object-contain drop-shadow-xl" src="./pourquoi.png" alt="Pourquoi Wajed" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}