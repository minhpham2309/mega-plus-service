
import React from 'react';
import AirFreightIcon from '../components/icons/AirFreightIcon';
import OceanFreightIcon from '../components/icons/OceanFreightIcon';
import RoadFreightIcon from '../components/icons/RoadFreightIcon';
import Typewriter from '../components/Typewriter';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100 dark:border-gray-700">
        <div className="text-fastway-orange w-16 h-16 mx-auto mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
);

const Home: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen snap-start flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-70 dark:bg-opacity-80"></div>
                <div className="relative text-center text-white z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight animate-fade-in-down">{t('home.hero_title')}</h1>
                    <Typewriter
                        tag="p"
                        text={t('home.hero_typewriter')}
                        className="text-xl md:text-2xl font-light"
                        speed={25}
                        startDelay={1000}
                    />
                </div>
            </section>

            {/* Services Intro Section */}
            <section className="min-h-screen snap-start flex flex-col justify-center py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                             <span className="text-fastway-orange font-semibold">{t('home.intro_badge')}</span>
                             <h2 className="text-4xl font-bold text-gray-800 dark:text-white mt-2">{t('home.intro_title')}</h2>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {t('home.intro_desc_1')}
                                </p>
                            </div>
                            <div>
                                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                     {t('home.intro_desc_2')}
                                 </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
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
            
            {/* Recent Articles Section */}
            <section className="min-h-screen snap-start flex flex-col justify-center py-20 bg-fastway-dark dark:bg-black transition-colors duration-300">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <div>
                            <span className="text-fastway-orange font-semibold">{t('home.articles_badge')}</span>
                            <h2 className="text-4xl font-bold text-white mt-2 mb-4">{t('home.articles_title')}</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                                 {t('home.articles_desc')}
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[1, 2, 3].map((i) => (
                            <AnimatedSection key={i} delay={i * 200}>
                                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300 h-full">
                                    <img src={`https://picsum.photos/400/250?random=${i}`} alt="Article" className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <span className="text-sm text-fastway-orange font-semibold">InsightsManagement</span>
                                        <h3 className="text-lg font-bold my-2 text-gray-800 dark:text-white">Importers achieve cost savings through better supply chain.</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Jun 20, 2024</p>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">We are currently amazing between the US and several nations around the globe most friendly with the US.</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection delay={600}>
                        <div>
                            <button className="mt-12 bg-fastway-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300">{t('common.view_all_news')}</button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Safe & Reliable Section */}
            <section className="min-h-screen snap-start flex items-center py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            
            {/* Air Freight Section */}
            <section className="snap-start">
                <div className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://www.melodylogistics.com/templates/pc/01/assets/img/bg/bg-subheader.jpg')" }}>
                    <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-60 dark:bg-opacity-80"></div>
                    <AnimatedSection>
                        <div className="relative container mx-auto px-6 text-center text-white z-10">
                            <h2 className="text-5xl font-extrabold mb-4 uppercase">{t('home.air_freight_section_title')}</h2>
                            <p className="text-lg font-light max-w-4xl mx-auto">
                                {t('home.air_freight_section_intro')}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                         <AnimatedSection>
                            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-5">
                                <p>{t('home.air_freight_p1')}</p>
                                <p>{t('home.air_freight_p2')}</p>
                                <p>{t('home.air_freight_p3')}</p>
                                <p>{t('home.air_freight_p4')}</p>
                                <p>{t('home.air_freight_p5')}</p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600 dark:text-gray-400">
                                    <li>{t('home.air_freight_li1')}</li>
                                    <li>{t('home.air_freight_li2')}</li>
                                    <li>{t('home.air_freight_li3')}</li>
                                </ul>
                                <p>{t('home.air_freight_p6')}</p>
                                 <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600 dark:text-gray-400">
                                    <li>{t('home.air_freight_li4')}</li>
                                    <li>{t('home.air_freight_li5')}</li>
                                    <li>{t('home.air_freight_li6')}</li>
                                    <li>{t('home.air_freight_li7')}</li>
                                </ul>
                                <p>{t('home.air_freight_p7')}</p>
                                <p>{t('home.air_freight_p8')}</p>
                                <p>{t('home.air_freight_p9')}</p>
                            </div>
                         </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div>
                                <img src="https://www.melodylogistics.com/uploads/2018/melodylogistics_com_ctc_t1545905594_VSY2.jpg" alt="Air Freight Logistics" className="rounded-lg shadow-xl w-full"/>
                            </div>
                         </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Sea Freight Section */}
            <section className="snap-start">
                <div className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://www.melodylogistics.com/templates/pc/01/assets/img/bg/bg-subheader.jpg')" }}>
                    <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-60 dark:bg-opacity-80"></div>
                    <AnimatedSection>
                        <div className="relative container mx-auto px-6 text-center text-white z-10">
                            <h2 className="text-5xl font-extrabold mb-4 uppercase">{t('home.sea_freight_section_title')}</h2>
                            <p className="text-lg font-light max-w-4xl mx-auto">
                                {t('home.sea_freight_section_intro')}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                         <AnimatedSection>
                            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-5">
                                <p>{t('home.sea_freight_p1')}</p>
                                <p>{t('home.sea_freight_p2')}</p>
                                <p>{t('home.sea_freight_p3')}</p>
                                <p>{t('home.sea_freight_p4')}</p>
                                <p>{t('home.sea_freight_p5')}</p>
                            </div>
                         </AnimatedSection>
                         <AnimatedSection delay={200}>
                            <div>
                                <img src="https://www.melodylogistics.com/uploads/2019/melodylogistics_com_ctc_t1550478918_90m0.jpg" alt="Sea Freight Logistics" className="rounded-lg shadow-xl w-full"/>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Domestics Transportation Section */}
            <section className="snap-start">
                <div className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://www.melodylogistics.com/templates/pc/01/assets/img/bg/bg-subheader.jpg')" }}>
                    <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-60 dark:bg-opacity-80"></div>
                    <AnimatedSection>
                        <div className="relative container mx-auto px-6 text-center text-white z-10">
                            <h2 className="text-5xl font-extrabold mb-4 uppercase">{t('home.domestic_section_title')}</h2>
                             <p className="text-lg font-light max-w-4xl mx-auto">
                                {t('home.domestic_section_intro')}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                        <AnimatedSection>
                            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-5">
                                <h4 className="font-bold text-lg text-white/90">{t('home.domestic_h1')}</h4>
                                <p>{t('home.domestic_p1')}</p>
                                <h4 className="font-bold text-lg text-white/90">{t('home.domestic_h2')}</h4>
                                <p>{t('home.domestic_p2')}</p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600 dark:text-gray-400">
                                    <li>{t('home.domestic_li1')}</li>
                                    <li>{t('home.domestic_li2')}</li>
                                    <li>{t('home.domestic_li3')}</li>
                                    <li>{t('home.domestic_li4')}</li>
                                    <li>{t('home.domestic_li5')}</li>
                                    <li>{t('home.domestic_li6')}</li>
                                </ul>
                                <p>{t('home.domestic_p3')}</p>
                                <p>{t('home.domestic_p4')}</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div>
                                <img src="https://www.melodylogistics.com/uploads/2019/melodylogistics_com_ctc_t1550479739_EmLS.jpg" alt="Domestics Transportation Logistics" className="rounded-lg shadow-xl w-full"/>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="min-h-screen snap-start flex flex-col justify-center py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <div>
                            <span className="text-fastway-orange font-semibold">{t('home.testimonials_badge')}</span>
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mt-2 mb-12">{t('home.testimonials_title')}</h2>
                        </div>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Ngocle Tu Thanh Thú', title: 'Marketing Officer', img: 5 },
                            { name: 'Phan My My', title: 'Logistics Manager', img: 6 },
                            { name: 'Phan Huong Giang', title: 'Sales Director', img: 7 },
                        ].map((t, i) => (
                             <AnimatedSection key={t.name} delay={i * 200}>
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full border border-gray-100 dark:border-gray-700">
                                    <img src={`https://picsum.photos/100/100?random=${t.img}`} alt={t.name} className="w-24 h-24 rounded-full mx-auto -mt-20 border-4 border-white dark:border-gray-800 shadow-md"/>
                                    <p className="text-gray-600 dark:text-gray-300 italic my-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna."</p>
                                    <h4 className="font-bold text-gray-800 dark:text-white">{t.name}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.title}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
