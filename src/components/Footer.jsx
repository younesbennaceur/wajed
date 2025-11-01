import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-gradient-to-b  from-white  to-[#9fdac3]  relative">
      {/* Background Image Section */}
      <div 
        className="relative h-120  "
        
      >
        {/* Large Watermark Image - Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
          <img
            src="/wajed.png"
            alt="Wajed Watermark"
            className="w-180 h-auto"
          />
        </div>

       
      </div>

      {/* Footer Content */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left - Logo & Copyright */}
            <div className="flex items-center gap-4">
              <img src="./Logo.png" alt="Wajed" className="h-10 w-14" />
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
                className="text-gray-600 hover:text-teal-600 transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition"
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