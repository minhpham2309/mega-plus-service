
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
  ].join(' ');

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main ref={mainRef} className={mainClasses} style={{ overscrollBehavior: 'none' }}>
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
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
