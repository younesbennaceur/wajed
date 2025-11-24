import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeaturesSection() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Une animation douce (1 seconde)
      once: true,     // L'animation ne se joue qu'une fois pour ne pas gêner la lecture
      offset: 100,    // Déclenche l'animation un peu avant que l'élément soit tout en haut
      easing: 'ease-out-cubic', // Une courbe de vitesse naturelle
    });
  }, []);

  const features = [
    {
      id: "01",
      title: "Vous pouvez cherchez un",
      titleBold: "prestataire adapté à vos besoins",
      description: "Filtrez par service, localisation, prix et disponibilités pour trouver le professionnel qui vous correspond.",
      buttonText: "Réservez un prestataire dès !",
      imageSrc: "1.png",
      imagePosition: "right"
    },
    {
      id: "02",
      title: "Postez une annonce",
      titleBold: "en quelques secondes",
      description: "Décrivez votre besoin en détaillant la tâche, le lieu et vos attentes; les prestataires vous contactent avec leurs propositions.",
      buttonText: "Postez des annonces dès maintenant",
      imageSrc: "2.png",
      imagePosition: "left"
    },
    {
      id: "03",
      title: "Négociez le tarif",
      titleBold: "selon votre budget",
      description: "Comparez les offres, contactez les tôt, échangez rapidement avec les prestataires et trouvez le bon accord pour vous.",
      buttonText: "Choisissez dans l'app",
      imageSrc: "3.png",
      imagePosition: "right"
    },
    {
      id: "04",
      title: "Payez en toute sécurité",
      titleBold: "par carte ou en espèces",
      description: "Payez par carte dès l'application ou en espèces selon le prestataire. Vos transactions sont toujours sécurisées.",
      buttonText: "100% sécurisé",
      imageSrc: "4.png",
      imagePosition: "left"
    },
    {
      id: "05",
      title: "Gagnez des récompenses",
      titleBold: " en invitant vos proches",
      description: "Invitez vos amis à rejoindre l’application. Lorsqu’ils s’inscrivent, ils reçoivent 200 DA et vous gagnez 100 DA dès leur première prestation.",
      buttonText: "Disponible pour tous les utilisateurs",
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
          data-aos="fade-down" // Le titre descend du haut
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Un Service,<br />
            Plusieurs Possibilités
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Profitez de nos solutions flexibles pour tous vos besoins du quotidien. Une plateforme complète à portée de main.
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
                className={`space-y-4 md:space-y-6 ${
                  feature.imagePosition === 'left' ? 'md:order-2' : 'md:order-1'
                }`}
                // Logique d'animation : Si l'image est à gauche (donc texte à droite), le texte vient de la droite (fade-left). Sinon l'inverse.
                data-aos={feature.imagePosition === 'left' ? "fade-left" : "fade-right"}
              >
                {/* Numéro */}
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#4C9580] opacity-20 select-none">
                  {feature.id}
                </div>

                {/* Titre */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4C9580] leading-tight">
                  {feature.title}{' '}
                  <span className="text-gray-900 ">{feature.titleBold}</span>
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