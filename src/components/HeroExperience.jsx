import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroExperience() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="md:p-8 mt-16 lg:p-12 font-sans overflow-hidden">
      
      {/* Animation de flottement personnalisée */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Conteneur Principal : Dégradé ajusté vers des tons chauds/orange doux */}
      <div className="relative bg-gradient-to-br from-white via-[#FFF8F2] to-[#FFE0C2] max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 rounded-[2.5rem] shadow-sm border border-white/50">
        
        {/* Élément décoratif d'arrière-plan (Cercle flou Orange) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F2994A] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center py-10  relative z-10">
          
          {/* --- Colonne Gauche : Texte --- */}
          <div className="space-y-4 text-center md:text-left">
            
            {/* Badge amélioré : Orange */}
            <div 
              data-aos="fade-down"
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-md border border-[#F2994A]/20 rounded-full shadow-sm w-fit mx-auto md:mx-0"
            >
              <img src="BadgeOrange.svg" alt="" className="w-5 h-5 drop-shadow-sm" />
              <span className="text-sm font-semibold text-[#D97706] tracking-wide">
                Nouveau sur mobile
              </span>
            </div>

            {/* Titre avec dégradé Orange */}
            <h1 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15]"
            >
              Vivez l'Algérie  <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2994A] to-[#D35400]">autrement</span>
            </h1>

            {/* Description */}
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium"
            >
              Trouvez en quelques clics des activités inoubliables : sorties en bateau, randonnées, balades à cheval et bien plus encore.
            </p>

            {/* CTA Button Premium : Orange */}
            <div 
              className="flex justify-center md:justify-start pt-2"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <button className="group relative flex items-center gap-3 bg-[#F2994A] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-lg shadow-[#F2994A]/30 hover:shadow-[#F2994A]/50 overflow-hidden">
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                
                {/* Icônes */}
                <div className="flex gap-2 opacity-90">
                   <img src="./play.png" alt="Google Play" className="h-5 w-auto" />
                   <img src="./apple.png" alt="App Store" className="h-5 w-auto" />
                </div>
                
                {/* Texte séparé par une petite ligne verticale */}
                <div className="h-5 w-px bg-white/30 mx-1"></div>
                
                <span className="font-bold tracking-wide text-sm sm:text-base">Télécharger l&apos;app</span>
              </button>
            </div>
          </div>

          {/* --- Colonne Droite : Image Hero --- */}
          <div className="relative flex justify-center items-center md:justify-end">
            
            {/* L'Image flotte */}
            <div 
              data-aos="fade-left" 
              data-aos-delay="400"
              data-aos-duration="1200"
              className="relative animate-float z-20"
            >
               <img 
                 src="/heroexp.png" 
                 alt="Wajed Experience Interface" 
                 className="max-w-full md:max-w-[110%] h-auto drop-shadow-2xl"
                 // Ombre portée adaptée à la couleur orange (RGBA: 242, 153, 74)
                 style={{ filter: "drop-shadow(0px 20px 40px rgba(242, 153, 74, 0.25))" }} 
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}