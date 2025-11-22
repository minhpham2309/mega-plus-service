
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const linkClass = "text-white hover:text-fastway-orange transition-colors duration-300 text-lg font-medium";
  const activeLinkClass = "text-fastway-orange border-b-2 border-fastway-orange pb-1";
  
  // Mobile link classes
  const mobileLinkClass = "text-white hover:text-fastway-orange transition-colors duration-300 text-2xl font-bold py-2";
  const mobileActiveLinkClass = "text-fastway-orange";

  const openMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden'; // Lock scroll
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = ''; // Unlock scroll (safer than 'unset')
  };

  return (
    <>
      <header className="bg-fastway-dark-blue/95 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300 dark:bg-gray-900/95 shadow-md">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-white z-50" onClick={closeMenu}>
            <Logo className="h-8 w-auto md:h-10" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/company" 
              className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
            >
              {t('nav.company')}
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
            >
              {t('nav.services')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
            >
              {t('nav.contact')}
            </NavLink>
            
            {/* Controls: Dark Mode & Language */}
            <div className="pl-4 border-l border-gray-600 ml-4 flex items-center gap-3">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none hover:text-fastway-orange transition-colors"
            onClick={openMenu}
            aria-label="Open Menu"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Fixed, Full Screen, High Z-index */}
      <div className={`fixed inset-0 bg-[#0A1729] dark:bg-gray-950 z-[100] transform transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            
            {/* Close Button Header */}
            <div className="flex justify-end p-6 relative z-10">
               <button 
                 onClick={closeMenu}
                 className="text-white p-2 hover:text-fastway-orange transition-colors focus:outline-none"
                 aria-label="Close Menu"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
               </button>
            </div>

            {/* Nav Items Centered */}
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8 -mt-20 w-full">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? `${mobileLinkClass} ${mobileActiveLinkClass}` : mobileLinkClass}
                onClick={closeMenu}
              >
                {t('nav.home')}
              </NavLink>
              <NavLink 
                to="/company" 
                className={({ isActive }) => isActive ? `${mobileLinkClass} ${mobileActiveLinkClass}` : mobileLinkClass}
                onClick={closeMenu}
              >
                {t('nav.company')}
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => isActive ? `${mobileLinkClass} ${mobileActiveLinkClass}` : mobileLinkClass}
                onClick={closeMenu}
              >
                {t('nav.services')}
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? `${mobileLinkClass} ${mobileActiveLinkClass}` : mobileLinkClass}
                onClick={closeMenu}
              >
                {t('nav.contact')}
              </NavLink>
              
              {/* Mobile Controls */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-700 w-48 justify-center">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </nav>
      </div>
    </>
  );
};

export default Header;
