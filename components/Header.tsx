
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const linkClass = "text-white hover:text-fastway-orange transition-colors duration-300";
  const activeLinkClass = "text-fastway-orange border-b-2 border-fastway-orange pb-1";

  return (
    <header className="bg-fastway-dark-blue/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300 dark:bg-gray-900/90">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white">
          <Logo className="h-8 w-auto" />
        </NavLink>
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
          <div className="pl-4 border-l border-gray-600 ml-4 flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
