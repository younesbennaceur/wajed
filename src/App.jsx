import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import WajedServices from './pages/WajedServices';
import WajedExperience from './pages/WajedExperience';

// 🌍 1. IMPORTER LE CONTEXTE DE LANGUE
import { LanguageProvider } from './components/LanguageContext'; 

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    // 🌍 2. ENVELOPPER L'APPLICATION AVEC LE PROVIDER
    <LanguageProvider>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<WajedServices />} />
          <Route path='/experience' element={<WajedExperience />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;