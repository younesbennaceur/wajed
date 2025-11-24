import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SuperAppHero() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    // h-screen force l'affichage sur exactement 100% de la fenêtre. overflow-hidden coupe ce qui dépasse.
    <section className="h-screen w-full bg-white overflow-hidden flex flex-col pt-32 relative font-sans">
      
      {/* --- Styles d'animation --- */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .animate-float-delayed { animation: float 5s ease-in-out infinite; animation-delay: 2s; }
      `}</style>

      {/* === LES CARTES SERVICES (Positionnées dans l'espace vide Gauche/Droite) === */}
      
      {/* Carte Gauche - Plus grande (w-56 / w-64) et centrée dans le vide gauche */}
      <div 
        className="hidden xl:block absolute left-[10%] top-[60%] -translate-y-1/2 z-10 w-64"
        data-aos="fade-right" data-aos-delay="600"
      >
        <div className="animate-float-slow">
           <img src="/service card left.png" alt="Service Card" className="w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"/>
        </div>
      </div>

      {/* Carte Droite - Plus grande et centrée dans le vide droite */}
      <div 
        className="hidden xl:block absolute right-[10%] top-[60%] -translate-y-1/2 z-10 w-64"
        data-aos="fade-left" data-aos-delay="800"
      >
        <div className="animate-float-delayed">
           <img src="/service card right.png" alt="Service Card" className="w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"/>
        </div>
      </div>


      {/* === ZONE DU HAUT : TEXTE (Flexible) === */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 text-center z-20 pb-4">
           
           {/* Badge */}
           <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#4C9580]/30 rounded-full shadow-sm mb-6">
              <img src="Badge.svg" alt="" className="w-4 h-4"/>
              <span className="text-[#4C9580] text-sm font-bold tracking-wide">Nouveau sur mobile</span>
           </div>

           {/* Titre */}
           <h1 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
             La Super App Du Service <br className="hidden md:block"/> En Algérie!
           </h1>
           
           {/* Sous-titre */}
           <p data-aos="fade-up" data-aos-delay="200" className="text-sm md:text-lg text-gray-600 max-w-xl mx-auto mb-8 font-medium">
             Trouvez en quelques clics un prestataire de confiance pour vos besoins ou loisirs.
           </p>
           
           {/* Bouton */}
           {/* CTA Button Premium */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="flex justify-center"
            >
              <button className="group relative flex items-center gap-3 bg-[#4C9580] text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-lg shadow-[#4C9580]/30 hover:shadow-[#4C9580]/50 overflow-hidden">
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                
                {/* Icônes */}
                <div className="flex gap-2 opacity-90">
                   <img src="./play.png" alt="Google Play" className="h-5 w-5" />
                   <img src="./apple.png" alt="App Store" className="h-5 w-5" />
                </div>
                
              
                <div className="h-5 w-px bg-white/30 mx-1"></div>
                
                <span className="font-bold tracking-wide text-sm sm:text-base">Télécharger l&apos;app</span>
              </button>
            </div>
      </div>


      
      <div className="relative w-full h-[35vh] sm:h-[42vh] md:h-[48vh] flex justify-center items-end shrink-0 z-20 mt-4 md:mt-8">
          
         
          <div 
            data-aos="fade-up" data-aos-delay="200"
           
            className="h-full w-auto max-w-full flex items-end"
          >
            {/* On garde l'animation de flottement sur l'ensemble */}
            <div className="animate-float origin-bottom h-full">
              <img 
                src="/groupe.png" 
                alt="Wajed App Interface" 
                // object-contain assure que toute l'image est visible sans être coupée
                // object-bottom colle l'image en bas du conteneur
                className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
          
      </div>
    </section>
  );
}