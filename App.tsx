
import React, { createContext, useRef, RefObject } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import Contact from './pages/Contact';

export const ScrollContainerContext = createContext<RefObject<HTMLElement> | null>(null);

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const mainRef = useRef<HTMLElement>(null);

  const mainClasses = [
    'flex-grow',
    'overflow-y-auto',
    'scroll-smooth',
    isHomePage ? 'snap-y snap-mandatory' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main ref={mainRef} className={mainClasses}>
        <ScrollContainerContext.Provider value={mainRef}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
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
