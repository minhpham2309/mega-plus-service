
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-fastway-dark-blue text-gray-300 snap-start border-t border-gray-700">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="mb-6">
                <Logo className="h-8 w-auto md:h-10 text-white" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-white mb-1 uppercase tracking-wide">
              {t('footer.company_name')}
            </h3>
            <div className="space-y-4 mt-4 text-sm md:text-base">
                <div>
                    <span className="font-bold block text-white">{t('footer.head_office_label')}:</span>
                    <span>{t('footer.head_office_address')}</span>
                </div>
                <div>
                    <span className="font-bold block text-white">{t('footer.tax_office_label')}:</span>
                    <span>{t('footer.tax_office_address')}</span>
                </div>
                <div>
                    <span className="font-bold text-white">{t('footer.phone_label')}: </span>
                    <span>{t('footer.phone_number')}</span>
                </div>
                 <div>
                    <span className="font-bold text-white">{t('footer.email_label')}: </span>
                    <span>{t('footer.email_address')}</span>
                </div>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="md:pl-12">
            <h4 className="text-lg font-bold text-white mb-6 uppercase border-b-2 border-fastway-orange inline-block pb-1">
                {t('footer.about_us_title')}
            </h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                  <Link to="/" className="hover:text-fastway-orange transition-colors duration-300 flex items-center">
                    <span className="mr-2">›</span> {t('footer.link_home')}
                  </Link>
              </li>
              <li>
                  <Link to="/about" className="hover:text-fastway-orange transition-colors duration-300 flex items-center">
                    <span className="mr-2">›</span> {t('footer.link_about')}
                  </Link>
              </li>
               <li>
                  <Link to="/services" className="hover:text-fastway-orange transition-colors duration-300 flex items-center">
                    <span className="mr-2">›</span> {t('footer.link_services')}
                  </Link>
              </li>
              <li>
                  <a href="#" className="hover:text-fastway-orange transition-colors duration-300 flex items-center">
                    <span className="mr-2">›</span> {t('common.view_all_news')}
                  </a>
              </li>
              <li>
                  <Link to="/contact" className="hover:text-fastway-orange transition-colors duration-300 flex items-center">
                    <span className="mr-2">›</span> {t('footer.link_contact')}
                  </Link>
              </li>
               <li>
                  <a href="#" className="hover:text-fastway-orange transition-colors duration-300 flex items-center">
                    <span className="mr-2">›</span> {t('footer.link_policy')}
                  </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Fanpage */}
          <div>
             <h4 className="text-lg font-bold text-white mb-6 uppercase border-b-2 border-fastway-orange inline-block pb-1">
                {t('footer.fanpage_title')}
            </h4>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm">
                <div className="h-32 bg-cover bg-center relative" style={{ backgroundImage: "url('https://picsum.photos/400/200')" }}>
                     <div className="absolute inset-0 bg-black/20"></div>
                     <div className="absolute bottom-4 left-4 flex items-center">
                         <div className="w-12 h-12 bg-white p-1 rounded-md shadow">
                             <Logo className="w-full h-full text-fastway-dark-blue" />
                         </div>
                         <div className="ml-3 text-white shadow-black drop-shadow-md">
                             <div className="font-bold text-sm md:text-base">Mega Plus</div>
                             <div className="text-xs">Logistics Company</div>
                         </div>
                     </div>
                </div>
                <div className="p-4 bg-[#F0F2F5] flex justify-between items-center">
                    <div className="text-xs text-gray-600">10K followers</div>
                    <a 
                        href="https://www.facebook.com/share/1A5TpztteM/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#1877F2] text-white text-xs font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors flex items-center gap-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        Follow Page
                    </a>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
