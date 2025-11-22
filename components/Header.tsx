
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const linkClass = "text-white hover:text-fastway-orange transition-colors duration-300";
  const activeLinkClass = "text-fastway-orange border-b-2 border-fastway-orange pb-1";

  return (
    <header className="bg-fastway-dark-blue/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white">
          <Logo className="h-8 w-auto" />
        </NavLink>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Home
          </NavLink>
          <NavLink 
            to="/company" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Company
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
