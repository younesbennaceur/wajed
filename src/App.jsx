// App.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

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
      <Navbar />
      <Home />
    </div>
  );
}

export default App;