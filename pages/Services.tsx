
import React from 'react';
import AirFreightIcon from '../components/icons/AirFreightIcon';
import OceanFreightIcon from '../components/icons/OceanFreightIcon';
import RoadFreightIcon from '../components/icons/RoadFreightIcon';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
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
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">Reliable & Express Logistic Solutions Saves Your Time!</h1>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-800">Delivering the Best Global Logistics Solutions.</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-10">
                        <ServiceCard 
                            icon={<AirFreightIcon />} 
                            title="Air Freight" 
                            description="We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air." 
                        />
                        <ServiceCard 
                            icon={<OceanFreightIcon />} 
                            title="Ocean Freight" 
                            description="We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by sea." 
                        />
                        <ServiceCard 
                            icon={<RoadFreightIcon />} 
                            title="Road Freight" 
                            description="We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by road." 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
