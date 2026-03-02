import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext'; // ✅ Import du système de langue

export default function FAQ() {
  // ✅ On récupère la fonction de traduction 't'
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,    
        offset: 100,    
        easing: 'ease-out-cubic', 
      });
    }, []);

  // ✅ On remplace le texte en dur par les appels de traduction
  const faqs = [
    {
      question: t('faq_q1'),
      answer: t('faq_a1')
    },
    {
      question: t('faq_q2'),
      answer: t('faq_a2')
    },
    {
      question: t('faq_q3'),
      answer: t('faq_a3')
    },
    {
      question: t('faq_q4'),
      answer: t('faq_a4')
    },
    {
      question: t('faq_q5'),
      answer: t('faq_a5')
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div  className="bg-white py-12 md:py-20">
      <div data-aos="fade-down" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-black">
            {t('faq_title')} {/* ✅ Traduction */}
          </h2>
          {/* Remplacement du <br/> par max-w-2xl pour un meilleur affichage multilingue */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('faq_subtitle')} {/* ✅ Traduction */}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 last:border-b-0">
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                // ✅ text-start remplace text-left pour bien s'aligner en arabe
                className="w-full px-6 py-5 flex items-center justify-between text-start hover:bg-gray-50 transition"
              >
                {/* ✅ pe-4 (padding-end) remplace pr-4 pour s'adapter à l'arabe */}
                <h3 className="text-base font-bold text-gray-900 pe-4">
                  {faq.question}
                </h3>
                <span className={`text-gray-600 flex-shrink-0 transition text-2xl ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  −
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                // ✅ Ajout de text-start ici aussi
                <div className="px-6 pb-5 bg-gray-50 text-start">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}