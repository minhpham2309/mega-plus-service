
import React from 'react';
import AirFreightIcon from '../components/icons/AirFreightIcon';
import OceanFreightIcon from '../components/icons/OceanFreightIcon';
import RoadFreightIcon from '../components/icons/RoadFreightIcon';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="text-fastway-orange w-16 h-16 mx-auto mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-70"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight animate-fade-in-down">Fastway is Clean and Professional Template.</h1>
                    <p className="text-xl md:text-2xl font-light animate-fade-in-up">Fastway - Transport & Logistic HTML Template</p>
                </div>
            </section>

            {/* Services Intro Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <span className="text-fastway-orange font-semibold">Best Solutions, Real Fast!</span>
                         <h2 className="text-4xl font-bold text-gray-800 mt-2">Delivering the Best Global Logistics Solutions.</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             <p className="text-lg text-gray-600 leading-relaxed">
                                Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 md:grid-cols-1">
                             {/* Placeholder for text from design */}
                             <p className="text-gray-600 leading-relaxed">
                                 We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience!
                             </p>
                        </div>
                    </div>

                    <div className="mt-16 grid md:grid-cols-3 gap-8">
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
            
            {/* Recent Articles Section */}
            <section className="py-20 bg-fastway-dark">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-fastway-orange font-semibold">Our Services</span>
                    <h2 className="text-4xl font-bold text-white mt-2 mb-4">Recent Articles</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">Follow our latest news and thoughts which focuses exclusively on insight, industry trends, top news headlines.</p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                                <img src={`https://picsum.photos/400/250?random=${i}`} alt="Article" className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <span className="text-sm text-fastway-orange font-semibold">InsightsManagement</span>
                                    <h3 className="text-lg font-bold my-2 text-gray-800">Importers achieve cost savings through better supply chain.</h3>
                                    <p className="text-sm text-gray-500 mb-4">Jun 20, 2024</p>
                                    <p className="text-gray-600 text-sm">We are currently amazing between the US and several nations around the globe most friendly with the US.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-12 bg-fastway-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300">View All News</button>
                </div>
            </section>

            {/* Safe & Reliable Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-fastway-orange font-semibold">What We Do</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Safe, Reliable & Express Logistic Solutions That Saves Your Time!</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience.
                        </p>
                        <button className="bg-fastway-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300">Schedule An Appointment</button>
                    </div>
                    <div>
                        <img src="https://picsum.photos/600/400?random=4" alt="Warehouse" className="rounded-lg shadow-2xl"/>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-fastway-orange font-semibold">What People Say</span>
                    <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-12">Testimonials</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Ngocle Tu Thanh Thú', title: 'Marketing Officer', img: 5 },
                            { name: 'Phan My My', title: 'Logistics Manager', img: 6 },
                            { name: 'Phan Huong Giang', title: 'Sales Director', img: 7 },
                        ].map(t => (
                            <div key={t.name} className="bg-white p-8 rounded-lg shadow-lg">
                                <img src={`https://picsum.photos/100/100?random=${t.img}`} alt={t.name} className="w-24 h-24 rounded-full mx-auto -mt-20 border-4 border-white shadow-md"/>
                                <p className="text-gray-600 italic my-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna."</p>
                                <h4 className="font-bold text-gray-800">{t.name}</h4>
                                <p className="text-sm text-gray-500">{t.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
