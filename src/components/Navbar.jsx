import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ variant = 'home' }) { 
  // 'variant' peut être : 'home' (défaut), 'experience', ou 'go'

  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [superAppOpen, setSuperAppOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // --- 1. CONFIGURATION DES THEMES ---
  const themes = {
    home: {
      color: '#4C9580',
      logo: '/Logo.png', 
      buttonBg: 'bg-[#4C9580]',
      buttonHover: 'hover:bg-[#3d7a68]',
      textHover: 'hover:text-[#4C9580]',
      bgHoverLight: 'hover:bg-[#4C9580]/5', // Pour les items du menu
      shadow: 'shadow-[#4C9580]/30'
    },
    experience: {
      color: '#F2994A',
      logo: '/exp.png',
      buttonBg: 'bg-[#F2994A]',
      buttonHover: 'hover:bg-[#d97706]',
      textHover: 'hover:text-[#F2994A]',
      bgHoverLight: 'hover:bg-[#F2994A]/5',
      shadow: 'shadow-[#F2994A]/30'
    },
    go: {
      color: '#26C6DA',
      logo: '/LogoGo.png',
      buttonBg: 'bg-[#26C6DA]',
      buttonHover: 'hover:bg-[#00acc1]',
      textHover: 'hover:text-[#26C6DA]',
      bgHoverLight: 'hover:bg-[#26C6DA]/5',
      shadow: 'shadow-[#26C6DA]/30'
    }
  };

  const currentTheme = themes[variant] || themes.home;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'FR', name: 'Français', flag: './FR.png' },
    { code: 'EN', name: 'English', flag: './GB.png' },
    { code: 'DZ', name: 'العربية', flag: '/DZ.png' }
  ];

  const superAppLinks = [
    { name: 'Wajed Home Services', path: '/services', icon: './Logo.png' },
    { name: 'Wajed Experience', path: '/experience', icon: './exp.png' },
    { name: 'Wajed Go', icon: './go.png' }
  ];

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleSuperAppClick = (path) => {
    navigate(path);
    setSuperAppOpen(false);
    setIsOpen(false);
  };

  const handleLangChange = (lang) => {
    setCurrentLang(lang.code);
    setLangOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-gray-100/50 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          
          {/* --- Logo Dynamique --- */}
          <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <img className='h-8 w-auto md:h-10' src={currentTheme.logo} alt={`Wajed ${variant}`} />
          </Link>

          {/* --- Desktop Menu --- */}
          <div className="hidden md:flex items-center space-x-8">
            
            <Link 
                
                to="/" 
                className={`text-gray-600 font-medium transition-colors relative group ${currentTheme.textHover}`}
            >
              Accueil
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full`} style={{ backgroundColor: currentTheme.color }}></span>
            </Link>
            
            <a 
                href="#fonctionnalites" 
                onClick={(e) => handleNavClick(e, 'fonctionnalites')} 
                className={`text-gray-600 font-medium transition-colors relative group ${currentTheme.textHover}`}
            >
              Fonctionnalités
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full`} style={{ backgroundColor: currentTheme.color }}></span>
            </a>
            
            {/* === Super App Dropdown (CORRIGÉ) === */}
            <div className="relative group">
              <button
                onClick={() => setSuperAppOpen(!superAppOpen)}
                // Petit délai au blur pour permettre le clic sur le lien
                onBlur={() => setTimeout(() => setSuperAppOpen(false), 200)}
                className={`flex items-center gap-1 text-gray-600 font-medium transition-colors outline-none ${currentTheme.textHover}`}
              >
                Super App
                <ChevronDown size={16} className={`transition-transform duration-300 ${superAppOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Contenu du Dropdown */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transition-all duration-300 origin-top ${
                superAppOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
              }`}>
                {superAppLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleSuperAppClick(link.path)}
                    className={`w-full text-left px-4 py-3 flex items-center space-x-4 rounded-xl transition-colors group/item ${currentTheme.bgHoverLight}`}
                  >
                    <div className="bg-gray-50 p-2 rounded-lg group-hover/item:bg-white transition-colors shadow-sm">
                        {link.icon && <img src={link.icon} alt="" className="w-6 h-6 object-contain" />}
                    </div>
                    <span className={`text-gray-700 font-medium ${currentTheme.textHover}`}>{link.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className={`text-gray-600 font-medium transition-colors ${currentTheme.textHover}`}>
              FAQ
            </a>
             <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')} 
                className={`text-gray-600 font-medium transition-colors relative group ${currentTheme.textHover}`}
            >
              Contactez-nous
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full`} style={{ backgroundColor: currentTheme.color }}></span>
            </a>
          </div>
          

          {/* --- Right Side (Desktop) --- */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                onBlur={() => setTimeout(() => setLangOpen(false), 200)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
              >
                <img src={languages.find(l => l.code === currentLang)?.flag} alt="" className="w-5 h-5 rounded-full object-cover shadow-sm" />
                <span className="text-sm font-medium text-gray-600">{currentLang}</span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>

              {/* Language Dropdown */}
              <div className={`absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 ${
                  langOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang)}
                    className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                      currentLang === lang.code ? `${currentTheme.bgHoverLight} ${currentTheme.color}` : 'text-gray-600'
                    }`}
                  >
                    <img src={lang.flag} alt="" className="w-5 h-5 rounded-full shadow-sm" />
                    <span className="text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button Dynamique */}
            <button 
                className={`flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:-translate-y-0.5 ${currentTheme.buttonBg} ${currentTheme.buttonHover} ${currentTheme.shadow}`}
            >
              <img src="./play.png" alt="" className="w-4 h-4" />
              <img src="./apple.png" alt="" className="w-4 h-4" />
              <span className="text-sm">Télécharger</span>
            </button>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors ${currentTheme.textHover}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- Mobile Menu Content (CORRIGÉ) --- */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-4">
             <Link 
                
                to="/" 
                className={`text-gray-600 font-medium transition-colors relative group ${currentTheme.textHover}`}
            >
              Accueil
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full`} style={{ backgroundColor: currentTheme.color }}></span>
            </Link>
            <a href="#fonctionnalites" onClick={(e) => handleNavClick(e, 'fonctionnalites')} className={`block px-4 py-2 text-gray-700 rounded-xl font-medium transition-colors ${currentTheme.bgHoverLight} ${currentTheme.textHover}`}>
              Fonctionnalités
            </a>
            
            {/* Mobile Super App Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setSuperAppOpen(!superAppOpen)}
                className={`w-full flex items-center justify-between px-4 py-2 text-gray-700 font-medium transition-colors ${currentTheme.bgHoverLight} ${currentTheme.textHover}`}
              >
                <span>Super App</span>
                <ChevronDown size={16} className={`transition-transform ${superAppOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`space-y-1 pl-4 border-l-2 border-gray-100 ml-4 mt-1 transition-all duration-300 ${superAppOpen ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
                {superAppLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleSuperAppClick(link.path)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 transition-colors ${currentTheme.textHover}`}
                  >
                    {link.icon && <img src={link.icon} alt="" className="w-10 h-5 " />}
                    <span>{link.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className={`block px-4 py-2 text-gray-700 rounded-xl font-medium transition-colors ${currentTheme.bgHoverLight} ${currentTheme.textHover}`}>
              FAQ
            </a>
             <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')} 
                className={`text-gray-600 font-medium transition-colors relative group ${currentTheme.textHover}`}
            >
              Contactez-nous
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full`} style={{ backgroundColor: currentTheme.color }}></span>
            </a>
            
            
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
               {/* Mobile Lang */}
               <div className="flex justify-center gap-2">
                  {languages.map((lang) => (
                    <button 
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 border ${
                        currentLang === lang.code 
                            ? `border-[${currentTheme.color}] text-[${currentTheme.color}]` // Fallback simple
                            : 'border-gray-200 text-gray-500'
                      }`}
                      style={{ 
                          borderColor: currentLang === lang.code ? currentTheme.color : '',
                          color: currentLang === lang.code ? currentTheme.color : '',
                          backgroundColor: currentLang === lang.code ? `${currentTheme.color}10` : '' // 10 = hex alpha
                      }}
                    >
                      <img src={lang.flag} alt="" className="w-4 h-4 rounded-full"/>
                      {lang.code}
                    </button>
                  ))}
               </div>

               <button className={`w-full flex justify-center items-center gap-2 text-white px-6 py-3 rounded-xl font-medium shadow-lg active:scale-95 transition-transform ${currentTheme.buttonBg} ${currentTheme.shadow}`}>
                <img src="./play.png" alt="" className="w-5 h-5" />
                <img src="./apple.png" alt="" className="w-5 h-5" />
                <span>Télécharger l&apos;app</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}