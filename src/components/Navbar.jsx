import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');

  const languages = [
    { code: 'FR', name: 'Français', flag: './FR.png' },
    { code: 'EN', name: 'English', flag: './GB.png' },
    { code: 'DZ', name: 'العربية', flag: '/DZ.png' }
  ];

  const handleLangChange = (lang) => {
    setCurrentLang(lang.code);
    setLangOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Ferme le menu mobile
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white  z-50">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="">
            <img className='h-8 w-12 md:h-12 md:w-16' src="./Logo.png" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" onClick={(e) => handleNavClick(e, 'accueil')} className="text-gray-800 hover:text-teal-600 transition font-medium">
              Accueil
            </a>
            <a href="#fonctionnalites" onClick={(e) => handleNavClick(e, 'fonctionnalites')} className="text-gray-800 hover:text-teal-600 transition font-medium">
              Fonctionnalités
            </a>
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-gray-800 hover:text-teal-600 transition font-medium">
              FAQ
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-800 hover:text-teal-600 transition font-medium">
              Contact
            </a>
          </div>

          {/* Right Side - Language Dropdown & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 border-2 border-teal-600 rounded-full hover:bg-teal-50 transition"
              >
                <img src={languages.find(l => l.code === currentLang)?.flag} alt="" />
                <span className="text-sm font-medium text-teal-600">{currentLang}</span>
                <ChevronDown size={16} className={`text-teal-600 transition ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border-2 border-teal-600 rounded-lg shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className={`w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-teal-50 transition ${
                        currentLang === lang.code ? 'bg-teal-50' : ''
                      }`}
                    >
                      <img src={lang.flag} alt="" />
                      <span className={currentLang === lang.code ? 'font-bold text-teal-600' : 'text-gray-700'}>
                        {lang.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Download App Button */}
            <button className="hidden sm:flex items-center gap-2 bg-[#4C9580] hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition">
              <img src="./play.png" alt="" />
              <img src="./apple.png" alt="" />
              <span>Télécharger l&apos;app</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-200 pt-4">
            <a href="#accueil" onClick={(e) => handleNavClick(e, 'accueil')} className="block text-gray-800 hover:text-teal-600 font-medium">
              Accueil
            </a>
            <a href="#fonctionnalites" onClick={(e) => handleNavClick(e, 'fonctionnalites')} className="block text-gray-800 hover:text-teal-600 font-medium">
              Fonctionnalités
            </a>
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="block text-gray-800 hover:text-teal-600 font-medium">
              FAQ
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block text-gray-800 hover:text-teal-600 font-medium">
              Contact
            </a>
            <button className="flex gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition">
              <img src="./play.png" alt="" />
              <img src="./apple.png" alt="" />
              <span>Télécharger l&apos;app</span>
            </button>
            
            {/* Mobile Language Dropdown */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-2 px-3 py-2 border-2 border-teal-600 rounded-full hover:bg-teal-50 transition w-full justify-center"
              >
                <img src={languages.find(l => l.code === currentLang)?.flag} alt="" />
                <span className="text-sm font-medium text-teal-600">{currentLang}</span>
                <ChevronDown size={16} className={`text-teal-600 transition ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langOpen && (
                <div className="mt-2 space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className={`w-full text-left px-4 py-2 flex items-center space-x-2 rounded hover:bg-teal-50 transition ${
                        currentLang === lang.code ? 'bg-teal-50' : ''
                      }`}
                    >
                      <img src={lang.flag} alt="" />
                      <span className={currentLang === lang.code ? 'font-bold text-teal-600' : 'text-gray-700'}>
                        {lang.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}