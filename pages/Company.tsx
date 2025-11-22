
import React from 'react';
import PricingIcon from '../components/icons/PricingIcon';
import TrackingIcon from '../components/icons/TrackingIcon';
import WarehouseIcon from '../components/icons/WarehouseIcon';
import SecurityIcon from '../components/icons/SecurityIcon';
import Typewriter from '../components/Typewriter';
import AnimatedSection from '../components/AnimatedSection';
import Partners from '../components/Partners';
import { useLanguage } from '../contexts/LanguageContext';

const AdvantageCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300">
        <div className="text-fastway-orange w-16 h-16 mx-auto mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);

const Company: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=10')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-70 dark:bg-opacity-80"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down">{t('company.hero_title')}</h1>
                    <Typewriter
                        tag="p"
                        text={t('company.hero_typewriter')}
                        className="text-xl md:text-2xl font-light"
                        speed={25}
                        startDelay={1000}
                    />
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div>
                            <span className="text-fastway-orange font-semibold">{t('home.safe_badge')}</span>
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mt-2 mb-4">{t('home.safe_title')}</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                {t('home.safe_desc')}
                            </p>
                            <button className="bg-fastway-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300">{t('common.schedule_appointment')}</button>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div>
                            <img src="https://picsum.photos/600/400?random=4" alt="Warehouse" className="rounded-lg shadow-2xl w-full"/>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* --- Content from About Us (Vision & Mission) --- */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('company.vision_title')}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {t('company.vision_desc')}
                        </p>
                        
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{t('company.mission_title')}</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300 list-disc list-inside">
                            <li>{t('company.mission_1')}</li>
                            <li>{t('company.mission_2')}</li>
                            <li>{t('company.mission_3')}</li>
                            <li>{t('company.mission_4')}</li>
                        </ul>
                    </AnimatedSection>
                </div>
            </section>

            {/* --- Content from About Us (Core Values) --- */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('company.core_value_title')}</h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                            <li className="flex flex-col">
                                <strong className="text-gray-800 dark:text-white mb-1">{t('company.cv_1_title')}</strong>
                                <span>{t('company.cv_1_desc')}</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gray-800 dark:text-white mb-1">{t('company.cv_2_title')}</strong>
                                <span>{t('company.cv_2_desc')}</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gray-800 dark:text-white mb-1">{t('company.cv_3_title')}</strong>
                                <span>{t('company.cv_3_desc')}</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gray-800 dark:text-white mb-1">{t('company.cv_4_title')}</strong>
                                <span>{t('company.cv_4_desc')}</span>
                            </li>
                        </ul>
                    </AnimatedSection>
                </div>
            </section>

            {/* --- Content from Who We Serve --- */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
                                    {t('company.vision_badge')}
                                </span>
                            </div>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>{t('company.vision_list_1')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>{t('company.vision_list_2')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>{t('company.vision_list_3')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>{t('company.vision_list_4')}</span>
                                </li>
                            </ul>
                        </AnimatedSection>

                        {/* Core Value */}
                        <AnimatedSection delay={300}>
                             <div className="mb-4">
                                <h2 className="text-2xl font-light text-gray-800 dark:text-white uppercase tracking-wide">{t('company.cv_badge')}</h2>
                                <div className="w-12 h-1 bg-fastway-orange mt-2"></div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                {t('company.cv_desc')}
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                         <div className="text-center mb-12">
                             <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{t('company.advantages_title')}</h2>
                             <p className="text-gray-500 dark:text-gray-400 mt-2">{t('company.advantages_desc')}</p>
                         </div>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-4 gap-8">
                        <AnimatedSection>
                            <AdvantageCard 
                                icon={<PricingIcon />} 
                                title={t('company.adv_pricing_title')} 
                                description={t('company.adv_pricing_desc')} 
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                             <AdvantageCard 
                                icon={<TrackingIcon />} 
                                title={t('company.adv_tracking_title')} 
                                description={t('company.adv_tracking_desc')} 
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={400}>
                             <AdvantageCard 
                                icon={<WarehouseIcon />} 
                                title={t('company.adv_warehouse_title')} 
                                description={t('company.adv_warehouse_desc')} 
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={600}>
                             <AdvantageCard 
                                icon={<SecurityIcon />} 
                                title={t('company.adv_security_title')} 
                                description={t('company.adv_security_desc')} 
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <Partners />
        </div>
    );
};

export default Company;
