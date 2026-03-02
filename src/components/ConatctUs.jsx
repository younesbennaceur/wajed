import React, { useState } from 'react';
import { useLanguage } from './LanguageContext'; // ✅ Import du système de langue

export default function ContactSection({ variant = 'home' }) {
  // variant : 'home', 'experience', 'go'

  // ✅ Appel de la fonction de traduction 't'
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // --- Configuration des Thèmes ---
  const themes = {
    home: {
      main: '#4C9580',       // Vert Principal
      light: '#4C958020',    // Vert très clair (pour fond d'icônes)
      hover: '#3d7a68',      // Vert foncé (hover)
    },
    experience: {
      main: '#F2994A',       // Orange Principal
      light: '#F2994A20',    // Orange très clair
      hover: '#d97706',      // Orange foncé
    },
    go: {
      main: '#26C6DA',       // Cyan Principal
      light: '#26C6DA20',    // Cyan très clair
      hover: '#00acc1',      // Cyan foncé
    }
  };

  const theme = themes[variant] || themes.home;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // On pourrait aussi traduire l'alerte !
    alert(t('contact_success') || 'Message envoyé avec succès !'); 
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* --- Partie gauche - Informations --- */}
          <div className="space-y-8 lg:space-y-12">
            {/* Titre */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                {t('contact_title_1')} {/* ✅ Traduction */}
              </h1>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                style={{ color: theme.main }} // Couleur dynamique
              >
                {t('contact_title_2')} {/* ✅ Traduction */}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
              {t('contact_desc')} {/* ✅ Traduction */}
            </p>

          </div>

          {/* --- Partie droite - Formulaire --- */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="space-y-6">
              
              {/* Nom */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">{t('contact_label_name')}</label> {/* ✅ Traduction */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact_ph_name')} // ✅ Traduction placeholder
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ '--tw-ring-color': theme.main, borderColor: 'transparent' }} 
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">{t('contact_label_email')}</label> {/* ✅ Traduction */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact_ph_email')} // ✅ Traduction placeholder
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ '--tw-ring-color': theme.main }}
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Sujet */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">{t('contact_label_subject')}</label> {/* ✅ Traduction */}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact_ph_subject')} // ✅ Traduction placeholder
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ '--tw-ring-color': theme.main }}
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">{t('contact_label_message')}</label> {/* ✅ Traduction */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact_ph_message')} // ✅ Traduction placeholder
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ '--tw-ring-color': theme.main }}
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                ></textarea>
              </div>

              {/* Bouton d'envoi Dynamique */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-white border-2 font-semibold rounded-full transition-all duration-300 text-lg"
                style={{ 
                    borderColor: theme.main, 
                    color: theme.main 
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.main;
                    e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = theme.main;
                }}
              >
                {t('contact_btn')} {/* ✅ Traduction */}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}