import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomCursor from './components/ui/CustomCursor';
import PageLoader from './components/ui/PageLoader';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide default cursor for md+ screens
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none';
    }
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/aura-the-coffee">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading && <PageLoader />}
      </AnimatePresence>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
