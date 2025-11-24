import React, { useState } from 'react';

export default function ContactSection({ variant = 'home' }) {
  // variant : 'home', 'experience', 'go'

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
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* --- Partie gauche - Informations --- */}
          <div className="space-y-8 lg:space-y-12">
            {/* Titre */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                Une Question ?
              </h1>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                style={{ color: theme.main }} // Couleur dynamique
              >
                Contactez-Nous
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
              Que ce soit pour une question, un souci technique ou un retour, notre équipe vous répondra dans les plus brefs délais.
            </p>

            {/* Informations de contact */}
            <div className="space-y-6">
              
              {/* Item: Téléphone */}
              <div className="flex items-start gap-4">
                <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.light }}
                >
                  <svg className="w-6 h-6" style={{ color: theme.main }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Téléphone</h3>
                  <p className="text-xl font-bold text-gray-900">+213 770 123 456</p>
                </div>
              </div>

              {/* Item: Email */}
              <div className="flex items-start gap-4">
                <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.light }}
                >
                  <svg className="w-6 h-6" style={{ color: theme.main }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Email</h3>
                  <p className="text-xl font-bold text-gray-900">contact@wajed.dz</p>
                </div>
              </div>

              {/* Item: Adresse */}
              <div className="flex items-start gap-4">
                <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.light }}
                >
                  <svg className="w-6 h-6" style={{ color: theme.main }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Adresse</h3>
                  <p className="text-xl font-bold text-gray-900">Rue des Frères Mahmoudi, Alger, Algérie</p>
                </div>
              </div>

            </div>
          </div>

          {/* --- Partie droite - Formulaire --- */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="space-y-6">
              
              {/* Nom */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">Nom et prénom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ex: Mohamed Amine"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ '--tw-ring-color': theme.main, borderColor: 'transparent' }} // Astuce pour la couleur du focus
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ex: Mohamed.Amine@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ '--tw-ring-color': theme.main }}
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Sujet */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="ex: Question sur une réservation"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ '--tw-ring-color': theme.main }}
                  onFocus={(e) => e.target.style.borderColor = theme.main}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre besoin ici..."
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
                Envoyer le message
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}