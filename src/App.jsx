import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WajedServices from './pages/WajedServices';
import WajedExperience from './pages/WajedExperience';





// ✅ ScrollToTop reste ici
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
    <div>
      <ScrollToTop />
    
     

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<WajedServices />} />
        <Route path='/experience' element={<WajedExperience />} />
        
        

      

       
      </Routes>


      

    
    </div>
  );
}

export default App;