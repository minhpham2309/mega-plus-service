
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Partners from '../components/Partners';

const About: React.FC = () => {
    return (
        <div>
            {/* Banner */}
            <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=99')" }}>
                <div className="absolute inset-0 bg-[#1B2538]/95"></div>
                <div className="relative container mx-auto px-6 text-center text-white z-10">
                    <h1 className="text-4xl md:text-5xl font-normal mb-8 uppercase tracking-wider">ABOUT US</h1>
                    <p className="text-lg md:text-xl font-light italic max-w-4xl mx-auto text-gray-300 leading-relaxed">
                        MEGAPLUS – we are proud to be a pioneer in providing comprehensive solutions to bring fresh agricultural products to consumers with the right quality, at the right place and at the right time. With a commitment to bring sustainable value to customers
                    </p>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-20 bg-white">
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

            {/* Core Values Section */}
            <section className="py-20 bg-gray-50">
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

            {/* Partners Section */}
            <Partners />
        </div>
    );
};

export default About;