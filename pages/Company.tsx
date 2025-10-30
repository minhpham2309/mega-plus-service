import React from 'react';
import PricingIcon from '../components/icons/PricingIcon';
import TrackingIcon from '../components/icons/TrackingIcon';
import WarehouseIcon from '../components/icons/WarehouseIcon';
import SecurityIcon from '../components/icons/SecurityIcon';
import Typewriter from '../components/Typewriter';
import AnimatedSection from '../components/AnimatedSection';

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

             {/* Safe & Reliable Section */}
             <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <img src="https://picsum.photos/600/400?random=11" alt="Warehouse Professional" className="rounded-lg shadow-2xl w-full"/>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div>
                            <span className="text-fastway-orange font-semibold">What We Do</span>
                            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Safe, Reliable Logistic Solutions That Saves Your Time!</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
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

             {/* Featured Projects Section */}
            <section className="py-20 bg-fastway-dark">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold text-white mt-2 mb-4">Featured Projects</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">We presents the following case studies that exemplify the type of solutions and services we are providing across our customer base.</p>
                    </AnimatedSection>
                </div>
            </section>

        </div>
    );
};

export default Company;