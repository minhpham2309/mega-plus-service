
import React from 'react';
import AirFreightIcon from '../components/icons/AirFreightIcon';
import OceanFreightIcon from '../components/icons/OceanFreightIcon';
import RoadFreightIcon from '../components/icons/RoadFreightIcon';
import AnimatedSection from '../components/AnimatedSection';
import Typewriter from '../components/Typewriter';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 h-full">
        <div className="text-fastway-orange w-16 h-16 md:w-20 md:h-20 mx-auto mb-6">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const Services: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=20')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-70 dark:bg-opacity-80"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
                     <Typewriter
                        tag="h1"
                        text={t('services.hero_typewriter')}
                        className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight"
                        speed={25}
                        startDelay={500}
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection>
                        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">{t('services.intro_title')}</h2>
                            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mt-4">
                                {t('services.intro_desc')}
                            </p>
                        </div>
                    </AnimatedSection>
                    
                    <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                        <AnimatedSection>
                            <ServiceCard 
                                icon={<AirFreightIcon />} 
                                title={t('home.service_air_title')} 
                                description={t('home.service_air_desc')} 
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <ServiceCard 
                                icon={<OceanFreightIcon />} 
                                title={t('home.service_ocean_title')} 
                                description={t('home.service_ocean_desc')} 
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={400}>
                            <ServiceCard 
                                icon={<RoadFreightIcon />} 
                                title={t('home.service_road_title')} 
                                description={t('home.service_road_desc')} 
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection>
                        <div className="text-center mb-12 md:mb-20">
                             <h2 className="text-2xl md:text-4xl font-light text-gray-800 dark:text-white uppercase tracking-wide">{t('services.why_choose_us')}</h2>
                             <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic mt-2">{t('services.why_choose_us_sub')}</p>
                             <div className="w-12 md:w-16 h-1 bg-fastway-orange mx-auto mt-6"></div>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                        {/* Item 1 */}
                        <AnimatedSection delay={100}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="shrink-0 text-fastway-orange flex justify-center md:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-2 md:mb-3 uppercase tracking-wide text-center md:text-left">{t('services.wcu_1_title')}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm text-justify">
                                        {t('services.wcu_1_desc')}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Item 2 */}
                        <AnimatedSection delay={200}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="shrink-0 text-fastway-orange flex justify-center md:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-2 md:mb-3 uppercase tracking-wide text-center md:text-left">{t('services.wcu_2_title')}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm text-justify">
                                        {t('services.wcu_2_desc')}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Item 3 */}
                        <AnimatedSection delay={300}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="shrink-0 text-fastway-orange flex justify-center md:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-2 md:mb-3 uppercase tracking-wide text-center md:text-left">{t('services.wcu_3_title')}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm text-justify">
                                        {t('services.wcu_3_desc')}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Item 4 */}
                        <AnimatedSection delay={400}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="shrink-0 text-fastway-orange flex justify-center md:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-2 md:mb-3 uppercase tracking-wide text-center md:text-left">{t('services.wcu_4_title')}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm text-justify">
                                        {t('services.wcu_4_desc')}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
