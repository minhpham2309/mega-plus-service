
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-fastway-dark-blue text-gray-300 snap-start">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('footer.about_company')}</h3>
            <p className="mb-4">
              {t('footer.about_desc')}
            </p>
            <p>{t('footer.email')}</p>
            <p>{t('footer.phone')}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.who_we_are')}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-fastway-orange">{t('footer.about_us')}</Link></li>
              <li><a href="#!" className="hover:text-fastway-orange">{t('footer.meet_team')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.who_we_serve')}</h4>
            <ul className="space-y-2">
              <li><Link to="/who-we-serve" className="hover:text-fastway-orange">{t('footer.about_us')}</Link></li>
              <li><a href="#!" className="hover:text-fastway-orange">{t('footer.meet_team')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-fastway-orange">{t('footer.request_quote')}</a></li>
              <li><a href="#!" className="hover:text-fastway-orange">{t('footer.track_trace')}</a></li>
              <li><a href="#!" className="hover:text-fastway-orange">{t('footer.meet_team')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
