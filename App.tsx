
import React, { createContext, useRef, RefObject, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import WhoWeServe from './pages/WhoWeServe';
import useSmoothScroll from './hooks/useSmoothScroll';
import { LanguageProvider } from './contexts/LanguageContext';

export const ScrollContainerContext = createContext<RefObject<HTMLElement> | null>(null);

const AppContent: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Apply the smooth scroll effect to the main container and get the reset function
  const { scrollToTop } = useSmoothScroll(mainRef);

  // Automatically scroll to top whenever the route changes
  useEffect(() => {
    scrollToTop();
  }, [location.pathname, scrollToTop]);

  const mainClasses = [
    'flex-grow',
    'overflow-y-auto',
    'w-full', // Ensure full width
  ].join(' ');

  return (
    // Use supports-[height:100dvh] for better mobile browser support (address bar handling)
    // max-w-[100vw] prevents horizontal overflow
    <div className="flex flex-col h-screen supports-[height:100dvh]:h-[100dvh] w-full max-w-[100vw] overflow-hidden">
      <Header />
      <main 
        ref={mainRef} 
        className={mainClasses} 
        style={{ 
            overscrollBehavior: 'none',
            WebkitOverflowScrolling: 'touch' // Critical for smooth iOS scrolling
        }}
      >
        <ScrollContainerContext.Provider value={mainRef}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
          </Routes>
          <Footer />
        </ScrollContainerContext.Provider>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
