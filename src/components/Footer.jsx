import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer({ variant = 'home' }) {
  // variant peut être : 'home', 'experience', 'go'

  // --- Configuration des Thèmes ---
  const themes = {
    home: {
      // Le dégradé original vert menthe
      gradientTo: 'to-[#9fdac3]', 
      logo: '/Logo.png',
      // Couleur des icônes au survol
      hoverColor: 'hover:text-[#4C9580]' ,
      watermark: '/watermarkGreen.png' // Si tu veux un watermark différent pour Home
    },
    experience: {
      // Un dégradé orange très doux (Pêche)
      gradientTo: 'to-[#FFE0C2]', 
      logo: '/exp.png', // Assure-toi d'avoir ce logo
      hoverColor: 'hover:text-[#F2994A]',
      watermark: '/watermarkOrange.png' // Si tu veux un watermark différent pour Experience
    },
    go: {
      // Un dégradé bleu cyan très doux
      gradientTo: 'to-[#B2EBF2]', 
      logo: '/LogoGo.png', // Assure-toi d'avoir ce logo
      hoverColor: 'hover:text-[#26C6DA]',
      watermark: '/watermarkGo.png' // Si tu veux un watermark différent pour Go
    }
  };

  // Sélection du thème actif
  const theme = themes[variant] || themes.home;

  return (
    // On applique le dégradé dynamiquement ici
    <div className={`bg-gradient-to-b from-white ${theme.gradientTo} relative`}>
      
      {/* Background Image Section (Watermark) */}
      <div className="relative h-80 sm:h-96 md:h-120 flex items-center justify-center overflow-hidden">
        {/* Large Watermark Image - Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60 mix-blend-multiply">
          {/* Note: Si tu veux que le gros watermark change aussi, 
             tu peux ajouter une propriété 'watermark' dans l'objet themes 
          */}
          <img
            src={theme.watermark}
            alt="Wajed Watermark"
            className="w-[80%] max-w-[600px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left - Logo & Copyright */}
            <div className="flex items-center gap-4">
              {/* Logo Dynamique */}
              <img src={theme.logo} alt={`Wajed ${variant}`} className="h-10 w-auto" />
              <p className="text-sm text-gray-600">
                © 2025 Wajed. Tous droits réservés.
              </p>
            </div>

            {/* Right - Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-300 ${theme.hoverColor}`}
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-300 ${theme.hoverColor}`}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-300 ${theme.hoverColor}`}
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}