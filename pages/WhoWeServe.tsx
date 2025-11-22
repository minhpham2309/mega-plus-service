
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Partners from '../components/Partners';
import { useLanguage } from '../contexts/LanguageContext';

const WhoWeServe: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div>
            {/* Hero Section with Intro Text */}
            <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=99')" }}>
                <div className="absolute inset-0 bg-[#1B2538]/95"></div>
                <div className="relative container mx-auto px-6 text-center text-white z-10">
                    <h1 className="text-4xl md:text-5xl font-normal mb-8 uppercase tracking-wider">{t('who_we_serve.banner_title')}</h1>
                    <p className="text-lg md:text-xl font-light italic max-w-4xl mx-auto text-gray-300 leading-relaxed">
                        {t('who_we_serve.banner_desc')}
                    </p>
                     <div className="w-16 h-1 bg-fastway-orange mx-auto mt-8"></div>
                </div>
            </section>

            {/* Images and Content Section */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    
                    {/* Two Images Row */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <AnimatedSection>
                            <div className="overflow-hidden h-64 md:h-80 w-full">
                                <img 
                                    src="https://logistics-manager.com/wp-content/uploads/2019/10/CargoSphere-Launches-New-Maersk-Spot-Product-on-their-Neutral-Rates-Platform-1000x600.jpg" 
                                    alt="Sea Freight Maersk" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div className="overflow-hidden h-64 md:h-80 w-full">
                                <img 
                                    src="https://trans.vn/wp-content/uploads/2016/03/Depositphotos_35651917_original-580x350-300x181.jpg" 
                                    alt="Air Freight Engine" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Content Row: Vision & Core Value */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        
                        {/* Vision */}
                        <AnimatedSection delay={100}>
                            <div className="mb-6">
                                <span className="bg-[#4A72C8] text-white text-lg font-medium px-4 py-1 uppercase tracking-wide">
                                    {t('who_we_serve.vision_badge')}
                                </span>
                            </div>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>{t('who_we_serve.vision_1')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>{t('who_we_serve.vision_2')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>{t('who_we_serve.vision_3')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>{t('who_we_serve.vision_4')}</span>
                                </li>
                            </ul>
                        </AnimatedSection>

                        {/* Core Value */}
                        <AnimatedSection delay={300}>
                             <div className="mb-4">
                                <h2 className="text-2xl font-light text-gray-800 dark:text-white uppercase tracking-wide">{t('who_we_serve.core_value_title')}</h2>
                                <div className="w-12 h-1 bg-fastway-orange mt-2"></div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                {t('who_we_serve.core_value_desc')}
                            </p>
                        </AnimatedSection>

                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <Partners />
        </div>
    );
};

export default WhoWeServe;
