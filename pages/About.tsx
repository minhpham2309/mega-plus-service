
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Partners from '../components/Partners';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div>
            {/* Banner */}
            <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=99')" }}>
                <div className="absolute inset-0 bg-[#1B2538]/95"></div>
                <div className="relative container mx-auto px-6 text-center text-white z-10">
                    <h1 className="text-4xl md:text-5xl font-normal mb-8 uppercase tracking-wider">{t('about.banner_title')}</h1>
                    <p className="text-lg md:text-xl font-light italic max-w-4xl mx-auto text-gray-300 leading-relaxed">
                        {t('about.banner_desc')}
                    </p>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div className="overflow-hidden rounded-lg shadow-xl">
                            <img 
                                src="https://cdn.jetphotos.com/full/6/89182_1527179929.jpg" 
                                alt="Vision - Boeing 777" 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('about.vision_title')}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {t('about.vision_desc')}
                        </p>
                        
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{t('about.mission_title')}</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300 list-disc list-inside">
                            <li>{t('about.mission_1')}</li>
                            <li>{t('about.mission_2')}</li>
                            <li>{t('about.mission_3')}</li>
                            <li>{t('about.mission_4')}</li>
                        </ul>
                    </AnimatedSection>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div className="overflow-hidden rounded-lg shadow-xl">
                            <img 
                                src="https://img.freepik.com/premium-photo/large-container-ship-is-docked-port-with-containers-stacked-its-deck-cargo-red-bo_1308352-38395.jpg?w=2000" 
                                alt="Core Values - Container Ship" 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('about.core_value_title')}</h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                            <li className="flex flex-col">
                                <strong className="text-gray-800 dark:text-white mb-1">{t('about.cv_1_title')}</strong>
                                <span>{t('about.cv_1_desc')}</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gray-800 dark:text-white mb-1">{t('about.cv_2_title')}</strong>
                                <span>{t('about.cv_2_desc')}</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gray-800 dark:text-white mb-1">{t('about.cv_3_title')}</strong>
                                <span>{t('about.cv_3_desc')}</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gray-800 dark:text-white mb-1">{t('about.cv_4_title')}</strong>
                                <span>{t('about.cv_4_desc')}</span>
                            </li>
                        </ul>
                    </AnimatedSection>
                </div>
            </section>

            {/* Partners Section */}
            <Partners />
        </div>
    );
};

export default About;
