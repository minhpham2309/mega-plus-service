
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Partners from '../components/Partners';

const WhoWeServe: React.FC = () => {
    return (
        <div>
            {/* Hero Section with Intro Text */}
            <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=99')" }}>
                <div className="absolute inset-0 bg-[#1B2538]/95"></div>
                <div className="relative container mx-auto px-6 text-center text-white z-10">
                    <h1 className="text-4xl md:text-5xl font-normal mb-8 uppercase tracking-wider">ABOUT US</h1>
                    <p className="text-lg md:text-xl font-light italic max-w-4xl mx-auto text-gray-300 leading-relaxed">
                        We are one of the fastest growing freight forwarder and logistics solution provider because we always give our full experience to all our partners and do our best to keep the communication and the cargo moving. Our mission is to provide flexible and reliable services to our customers.
                    </p>
                     <div className="w-16 h-1 bg-fastway-orange mx-auto mt-8"></div>
                </div>
            </section>

            {/* Images and Content Section */}
            <section className="py-16 bg-white">
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
                                    VISION
                                </span>
                            </div>
                            <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>Becoming one of the most reliable freight forwarders favored by customers.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>Specialized in providing competitive services and solutions.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>Ensuring the satisfaction of customers and global partners.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">-</span>
                                    <span>Making development of the international trade between Vietnam and other countries in the world.</span>
                                </li>
                            </ul>
                        </AnimatedSection>

                        {/* Core Value */}
                        <AnimatedSection delay={300}>
                             <div className="mb-4">
                                <h2 className="text-2xl font-light text-gray-800 uppercase tracking-wide">CORE VALUE</h2>
                                <div className="w-12 h-1 bg-fastway-orange mt-2"></div>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                We believe our customs are able to enjoy employees’ sense of service, responsiveness and professionalism.
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