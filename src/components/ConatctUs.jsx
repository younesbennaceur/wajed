import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

export default function ContactSection({ variant = 'home' }) {
  const { t, currentLang } = useLanguage();
  const isRtl = currentLang === 'DZ';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Nouvel état pour gérer le chargement (bouton désactivé pendant l'envoi)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Configuration des Thèmes ---
  const themes = {
    home: {
      main: '#4C9580', 
      light: '#4C958020',
      hover: '#3d7a68', 
    },
    experience: {
      main: '#F2994A', 
      light: '#F2994A20',
      hover: '#d97706', 
    },
    go: {
      main: '#26C6DA', 
      light: '#26C6DA20',
      hover: '#00acc1', 
    }
  };

  const theme = themes[variant] || themes.home;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Appel direct avec un chemin relatif
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(t('contact_success') || 'Message envoyé avec succès !'); 
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error("Erreur de connexion au serveur:", error);
      alert('Impossible de contacter le serveur. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ✅ Gestion de la direction RTL pour l'ensemble du bloc */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          dir={isRtl ? "rtl" : "ltr"}
        >
          
          {/* --- Partie gauche - Informations --- */}
          <div className={`space-y-8 lg:space-y-12 ${isRtl ? 'text-right' : 'text-left'}`}>
            {/* Titre */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                {t('contact_title_1')}
              </h1>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                style={{ color: theme.main }}
              >
                {t('contact_title_2')}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
              {t('contact_desc')}
            </p>
          </div>

          {/* --- Partie droite - Formulaire --- */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            {/* J'ai ajouté text-left/right ici aussi pour s'assurer que les labels et placeholders suivent la langue */}
            <div className={`space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              
              {/* Nom */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">{t('contact_label_name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact_ph_name')}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                  style={{ '--tw-ring-color': theme.main, borderColor: 'transparent' }} 
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">{t('contact_label_email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact_ph_email')}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                  style={{ '--tw-ring-color': theme.main }}
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Sujet */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">{t('contact_label_subject')}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact_ph_subject')}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                  style={{ '--tw-ring-color': theme.main }}
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">{t('contact_label_message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact_ph_message')}
                  rows="6"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${isRtl ? 'text-right' : 'text-left'}`}
                  style={{ '--tw-ring-color': theme.main }}
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                ></textarea>
              </div>

              {/* Bouton d'envoi Dynamique */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting} // Désactive le bouton pendant l'envoi
                className="w-full py-4 bg-white border-2 font-semibold rounded-full transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                    borderColor: theme.main, 
                    color: isSubmitting ? '#ffffff' : theme.main,
                    backgroundColor: isSubmitting ? theme.main : '#ffffff' 
                }}
                onMouseEnter={(e) => {
                    if(!isSubmitting) {
                      e.currentTarget.style.backgroundColor = theme.main;
                      e.currentTarget.style.color = '#ffffff';
                    }
                }}
                onMouseLeave={(e) => {
                    if(!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = theme.main;
                    }
                }}
              >
                {isSubmitting ? 'Envoi en cours...' : t('contact_btn')}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}