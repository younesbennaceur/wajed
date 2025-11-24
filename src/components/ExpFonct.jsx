import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeaturesExp() { // Renommé pour Wajed Experience
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Couleur Orange pour le thème Experience
  const themeColor = "#F2994A"; 

  const features = [
    {
      id: "01",
      title: "Découverte",
      titleBold: "personnalisée",
      description: "Trouvez des expériences qui vous correspondent : randonnées dans le Hoggar, ateliers de cuisine traditionnelle, cours de calligraphie arabe, sessions de surf à Tipaza... Filtrez par ville, catégorie et disponibilité.",
      buttonText: "Vivez une expérience avec des gens de confiance.",
      imageSrc: "exp1.png", // Remplace par ton image orange
      imagePosition: "right"
    },
    {
      id: "02",
      title: "Hôtes vérifiés",
      titleBold: "et passionnés",
      description: "Chaque prestataire est vérifié par Wajed. Partagez des moments avec des guides locaux, artisans, sportifs et créateurs culturels qui connaissent leur domaine sur le bout des doigts.",
      buttonText: "Vivez une expérience avec des gens de confiance.",
      imageSrc: "exp2.png", // Remplace par ton image orange
      imagePosition: "left"
    },
    {
      id: "03",
      title: "Réservation",
      titleBold: "simplifiée",
      description: "Réservez en quelques clics, communiquez directement avec votre hôte, et recevez toutes les informations pratiques. Paiement sécurisé et confirmation instantanée.",
      buttonText: "Réservez en quelques clics",
      imageSrc: "exp3.png", // Remplace par ton image orange
      imagePosition: "right"
    },
    {
      id: "04",
      title: "Avis et",
      titleBold: "recommandations",
      description: "Filtrez par service, localisation, avis et disponibilités pour trouver le professionnel qui vous correspond.",
      buttonText: "Regardez les avis de nos agences",
      imageSrc: "exp4.png", // Remplace par ton image orange
      imagePosition: "left"
    }
    // J'ai retiré le 5ème élément car il n'était pas sur ta maquette orange
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
            Bougez En Toute Confiance! <br />
            Partagez Votre Trajet 🚗
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Wajed réunit tous vos services à domicile. <br />
            Réservez, publiez, échangez, payez et recommandez.
          </p>
        </div>

        {/* Liste des fonctionnalités */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center ${
                feature.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* --- Contenu texte --- */}
              <div
                className={`space-y-6 md:space-y-8 text-center md:text-left ${
                  feature.imagePosition === 'left' ? 'md:order-2' : 'md:order-1'
                }`}
                data-aos={feature.imagePosition === 'left' ? "fade-left" : "fade-right"}
              >
                {/* Numéro (Orange) */}
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold opacity-30 select-none mb-4" style={{ color: themeColor }}>
                  {feature.id}
                </div>

                {/* Titre (Orange) */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: themeColor }}>
                  {feature.title}{' '}
                  <span className="text-gray-900 ">{feature.titleBold}</span>
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                  {feature.description}
                </p>

                {/* Bouton (Style Pillule Orange) */}
                <div className="pt-4">
                    <button 
                        className="inline-block px-8 py-4 bg-white border-2 font-bold rounded-full transition-all duration-300 text-sm sm:text-base hover:-translate-y-1 shadow-sm hover:shadow-md"
                        style={{
                            borderColor: themeColor,
                            color: themeColor
                        }}
                    >
                    {feature.buttonText}
                    </button>
                </div>
              </div>

                {/* --- Image --- */}
              <div
                className={`relative ${
                  feature.imagePosition === 'left' ? 'md:order-1' : 'md:order-2'
                }`}
                // Logique d'animation : Inverse du texte pour qu'ils se rencontrent au milieu
                data-aos={feature.imagePosition === 'left' ? "fade-right" : "fade-left"}
                // Petit délai supplémentaire pour que l'image arrive juste après le texte (optionnel, supprimez si vous préférez synchro)
                data-aos-delay="100" 
              >
                <div className="relative group">
                   {/* Ajout de style à l'image pour qu'elle soit plus belle (arrondie + ombre) */}
                   <img 
                    src={feature.imageSrc} 
                    alt={feature.title} 
                    className="w-full h-auto   transition-transform duration-500 group-hover:scale-[1.02]" 
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