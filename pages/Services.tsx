
import React from 'react';
import AirFreightIcon from '../components/icons/AirFreightIcon';
import OceanFreightIcon from '../components/icons/OceanFreightIcon';
import RoadFreightIcon from '../components/icons/RoadFreightIcon';
import AnimatedSection from '../components/AnimatedSection';
import Typewriter from '../components/Typewriter';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300 h-full">
        <div className="text-fastway-orange w-20 h-20 mx-auto mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=20')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-70"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
                     <Typewriter
                        tag="h1"
                        text="Reliable & Express Logistic Solutions Saves Your Time!"
                        className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
                        speed={25}
                        startDelay={500}
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold text-gray-800">Delivering the Best Global Logistics Solutions.</h2>
                            <p className="text-lg text-gray-600 mt-4">
                                Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies.
                            </p>
                        </div>
                    </AnimatedSection>
                    
                    <div className="grid md:grid-cols-3 gap-10">
                        <AnimatedSection>
                            <ServiceCard 
                                icon={<AirFreightIcon />} 
                                title="Air Freight" 
                                description="We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air." 
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <ServiceCard 
                                icon={<OceanFreightIcon />} 
                                title="Ocean Freight" 
                                description="We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by sea." 
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={400}>
                            <ServiceCard 
                                icon={<RoadFreightIcon />} 
                                title="Road Freight" 
                                description="We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by road." 
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="text-center mb-20">
                             <h2 className="text-3xl md:text-4xl font-light text-gray-800 uppercase tracking-wide">WHY CHOOSE US?</h2>
                             <p className="text-gray-500 italic mt-2">Reasons to choose us as your cargo transport partner</p>
                             <div className="w-16 h-1 bg-fastway-orange mx-auto mt-6"></div>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Item 1 */}
                        <AnimatedSection delay={100}>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="shrink-0 text-fastway-orange">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-700 mb-3 uppercase tracking-wide">NATIONWIDE BRANCH NETWORK</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm text-justify">
                                        Mega Plus boasts an extensive system of branches and offices nationwide, including Hanoi, Hai Phong, Da Nang, Dong Nai, Binh Duong, Can Tho, and Ho Chi Minh City. We are confident in our ability to handle all domestic and international freight transportation needs.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Item 2 */}
                        <AnimatedSection delay={200}>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="shrink-0 text-fastway-orange">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-700 mb-3 uppercase tracking-wide">DIVERSE SERVICES</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm text-justify">
                                        With over 10 years of experience in freight forwarding and logistics, Mega Plus understands the diverse needs of our clients. We continuously strive to build flexible and comprehensive service offerings to meet the most stringent customer requirements.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Item 3 */}
                        <AnimatedSection delay={300}>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="shrink-0 text-fastway-orange">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-700 mb-3 uppercase tracking-wide">GLOBAL STRENGTH</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm text-justify">
                                        By placing your trust in Mega Plus, you ensure peace of mind regarding financial stability, vast resources, and a global agency network. As a member of WCA, FIATA, PPL Network, Neptune, VLA, and VCCI, we provide globally standardized, cost-effective, and high-quality solutions.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Item 4 */}
                        <AnimatedSection delay={400}>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="shrink-0 text-fastway-orange">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-700 mb-3 uppercase tracking-wide">OPTIMAL SOLUTIONS</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm text-justify">
                                        Although there are many service providers in the logistics industry today, Mega Plus is dedicated to consistently finding the best, most efficient solutions for your specific freight transportation needs.
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
