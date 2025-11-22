
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fastway-dark-blue text-gray-300 snap-start">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Mega Plus</h3>
            <p className="mb-4">
              Our global logistics expertise, advanced supply chain technology & customized solutions will help you develop and implement successful supply.
            </p>
            <p>Email: info@fastwaylogistics.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Who We Are</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-fastway-orange">About Us</Link></li>
              <li><a href="#!" className="hover:text-fastway-orange">Meet Our Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Who We Serve</h4>
            <ul className="space-y-2">
              <li><Link to="/who-we-serve" className="hover:text-fastway-orange">About Us</Link></li>
              <li><a href="#!" className="hover:text-fastway-orange">Meet Our Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-fastway-orange">Request A Quote</a></li>
              <li><a href="#!" className="hover:text-fastway-orange">Track & Trace</a></li>
              <li><a href="#!" className="hover:text-fastway-orange">Meet Our Team</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mega Plus. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
