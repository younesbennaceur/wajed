import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function SuperFonct() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const features = [
    {
      id: "01",
      link: "/services",
      brand: "Wajed",
      service: "Home Services",
      tagline: "Trouvez un prestataire",
      mainHeading: "Laissez les pro s'en occuper 🛠️",
      description: "Postez une annonce ou trouvez un prestataire qualifié!",
      buttonText: "Découvrez les fonctionnalités de Wajed Home Services",
      imageSrc: "super1.png", 
      imagePosition: "right",
      color: "#4C9580", // Vert
      bgGlow: "bg-[#4C9580]/20",
      delay: 0
    },
    {
      id: "02",
      brand: "Wajed",
      link: "/experience",
      service: "Experience",
      tagline: "Toutes les activités en un clic.",
      mainHeading: "Amusez vous! 🏄",
      description: "Réservez une sortie en bateau, une balade a cheval le long de la plage ou une excursion en jetski? Trouvez encore plus d'activités!",
      buttonText: "Découvrez les fonctionnalités de Wajed Experience",
      imageSrc: "super2.png", 
      imagePosition: "left",
      color: "#F2994A", // Orange
      bgGlow: "bg-[#F2994A]/20",
      delay: 100
    },
    {
      id: "03",
      brand: "Wajed",
      service: "Go",
     
      tagline: "Bougez en toute confiance!",
      mainHeading: "Partagez votre trajet 🚗",
      description: "La route solo c'est ennuyant 🥺 Faites des économies, partagez la route!",
      buttonText: "Découvrez les fonctionnalités de Wajed Go",
      imageSrc: "super3.png", 
      imagePosition: "right",
      color: "#26C6DA", // Cyan/Bleu ciel
      bgGlow: "bg-[#26C6DA]/20",
      delay: 200
    },
    // --- NOUVELLE SECTION AJOUTÉE (Wajed Club) ---
    {
      id: "04",
      brand: "Wajed",
      service: "Club",
     
      tagline: "Entrez dans le CLUB !",
      mainHeading: "Des avantages exclusifs 💎",
      // J'ai combiné les points de l'image en une phrase fluide
      description: "Profitez de frais de réservation gratuits, -10% sur tous les services Wajed, du Cashback, des Workshops exclusifs et bien plus encore !",
      buttonText: "Rejoindre le Wajed Club",
      imageSrc: "super4.png", // N'oublie pas d'ajouter cette image
      imagePosition: "left", // Alternance : Gauche
      color: "#FF5252", // Rose/Rouge (Couleur du logo Club)
      bgGlow: "bg-[#FF5252]/20",
      delay: 300
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden relative">
      
      {/* Animation de flottement */}
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
              Une App Qui En Cache <br className="hidden sm:block"/>
              Des Autres 🙈
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto font-medium">
              Wajed réunit tous vos services à domicile. <br />
              <span className="text-gray-500">Réservez, publiez, échangez, payez et recommandez.</span>
            </p>
          </div>
        </div>

        {/* --- Liste des Services --- */}
        <div className="space-y-4 md:space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* === COLONNE TEXTE === */}
              <div
                className={`space-y-6 md:space-y-8 text-center lg:text-left ${
                  feature.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
                }`}
                data-aos={feature.imagePosition === 'left' ? "fade-left" : "fade-right"}
              >
                <div>
                  {/* Titre Principal (Wajed + Service) */}
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-2">
                    <span style={{ color: feature.color }}>{feature.brand}</span>{' '}
                    {feature.service}
                  </h3>
                  
                  {/* Tagline Colorée */}
                  <p className="text-lg font-bold opacity-90" style={{ color: feature.color }}>
                    {feature.tagline}
                  </p>
                  
                  {/* Sous-titre Noir */}
                  <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                    {feature.mainHeading}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {feature.description}
                </p>

                {/* Bouton Pillule */}
                <div className="pt-2">
                  <button 
                    className="group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border-2 bg-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                    style={{ borderColor: feature.color }}
                  >
                    <Link to={feature.link} className="font-bold text-sm sm:text-base" style={{ color: feature.color }}>
                      {feature.buttonText}
                    </Link>
                    {/* Petite flèche qui bouge au hover */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                      fill="none" viewBox="0 0 24 24" stroke={feature.color} strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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
                {/* Conteneur Image avec Flottement */}
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