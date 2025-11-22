
import React from 'react';
import PricingIcon from '../components/icons/PricingIcon';
import TrackingIcon from '../components/icons/TrackingIcon';
import WarehouseIcon from '../components/icons/WarehouseIcon';
import SecurityIcon from '../components/icons/SecurityIcon';
import Typewriter from '../components/Typewriter';
import AnimatedSection from '../components/AnimatedSection';
import Partners from '../components/Partners';

const AdvantageCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-6">
        <div className="text-fastway-orange w-16 h-16 mx-auto mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Company: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=10')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-70"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down">Competitive Advantages For The Largest Companies!</h1>
                    <Typewriter
                        tag="p"
                        text="Safe, Reliable & Express Logistic Solutions That Saves Your Time"
                        className="text-xl md:text-2xl font-light"
                        speed={25}
                        startDelay={1000}
                    />
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div>
                            <span className="text-fastway-orange font-semibold">What We Do</span>
                            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Safe, Reliable & Express Logistic Solutions That Saves Your Time!</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience.
                            </p>
                            <button className="bg-fastway-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300">Schedule An Appointment</button>
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
            <section className="py-20 bg-gray-50">
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Vision</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            To become the leading and most prestigious enterprise in Southeast Asia by 2030 — specializing in import-export consulting, international logistics, and the supply of premium agricultural products and food.
                        </p>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-3">🚀 Mission</h3>
                        <ul className="space-y-3 text-gray-600 list-disc list-inside">
                            <li>To be one of the most reliable and customer-preferred freight forwarders.</li>
                            <li>To deliver competitive logistics solutions with professionalism and efficiency.</li>
                            <li>To ensure the utmost satisfaction of our customers and global partners.</li>
                            <li>To promote and facilitate the growth of international trade between Vietnam and the world.</li>
                        </ul>
                    </AnimatedSection>
                </div>
            </section>

            {/* --- Content from About Us (Core Values) --- */}
            <section className="py-20 bg-white">
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Core Value</h2>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex flex-col">
                                <strong className="text-gray-800 mb-1">Customer-Centric:</strong>
                                <span>We always prioritize our customers’ benefits and experiences in every service we deliver.</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gray-800 mb-1">Continuous Innovation:</strong>
                                <span>We continuously improve our processes through innovation and technology application.</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gray-800 mb-1">Professionalism:</strong>
                                <span>Our team is committed to responsibility, integrity, and efficiency in every operation.</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gray-800 mb-1">Development:</strong>
                                <span>We pursue sustainable growth for both our company and our partners.</span>
                            </li>
                        </ul>
                    </AnimatedSection>
                </div>
            </section>

            {/* --- Content from Who We Serve --- */}
            <section className="py-16 bg-gray-50">
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

            {/* Advantages Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                         <div className="text-center mb-12">
                             <h2 className="text-3xl font-bold text-gray-800">Our Advantages</h2>
                             <p className="text-gray-500 mt-2">Why leading companies choose us</p>
                         </div>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-4 gap-8">
                        <AnimatedSection>
                            <AdvantageCard 
                                icon={<PricingIcon />} 
                                title="Transparent Pricing" 
                                description="International supply chains involves challenging regulations."
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                             <AdvantageCard 
                                icon={<TrackingIcon />} 
                                title="Real-Time Tracking" 
                                description="Ensure customers' supply chains are fully compliant by practices."
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={400}>
                             <AdvantageCard 
                                icon={<WarehouseIcon />} 
                                title="Warehouse Storage" 
                                description="Depending on your product, we provide warehouse activities."
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={600}>
                             <AdvantageCard 
                                icon={<SecurityIcon />} 
                                title="Security For Cargo" 
                                description="High security requirements and are certified to local standards."
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
