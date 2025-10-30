
import React from 'react';
import AirFreightIcon from '../components/icons/AirFreightIcon';
import OceanFreightIcon from '../components/icons/OceanFreightIcon';
import RoadFreightIcon from '../components/icons/RoadFreightIcon';
import Typewriter from '../components/Typewriter';
import AnimatedSection from '../components/AnimatedSection';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
        <div className="text-fastway-orange w-16 h-16 mx-auto mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen snap-start flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-70"></div>
                <div className="relative text-center text-white z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight animate-fade-in-down">Fastway is Clean and Professional Template.</h1>
                    <Typewriter
                        tag="p"
                        text="Fastway - Transport & Logistic HTML Template"
                        className="text-xl md:text-2xl font-light"
                        speed={25}
                        startDelay={1000}
                    />
                </div>
            </section>

            {/* Services Intro Section */}
            <section className="min-h-screen snap-start flex flex-col justify-center py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                             <span className="text-fastway-orange font-semibold">Best Solutions, Real Fast!</span>
                             <h2 className="text-4xl font-bold text-gray-800 mt-2">Delivering the Best Global Logistics Solutions.</h2>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies.
                                </p>
                            </div>
                            <div>
                                 <p className="text-gray-600 leading-relaxed">
                                     We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience!
                                 </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
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
            
            {/* Recent Articles Section */}
            <section className="min-h-screen snap-start flex flex-col justify-center py-20 bg-fastway-dark">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <div>
                            <span className="text-fastway-orange font-semibold">Our Services</span>
                            <h2 className="text-4xl font-bold text-white mt-2 mb-4">Recent Articles</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                                 Follow our latest news and thoughts which focuses exclusively on insight, industry trends, top news headlines.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[1, 2, 3].map((i) => (
                            <AnimatedSection key={i} delay={i * 200}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 h-full">
                                    <img src={`https://picsum.photos/400/250?random=${i}`} alt="Article" className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <span className="text-sm text-fastway-orange font-semibold">InsightsManagement</span>
                                        <h3 className="text-lg font-bold my-2 text-gray-800">Importers achieve cost savings through better supply chain.</h3>
                                        <p className="text-sm text-gray-500 mb-4">Jun 20, 2024</p>
                                        <p className="text-gray-600 text-sm">We are currently amazing between the US and several nations around the globe most friendly with the US.</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection delay={600}>
                        <div>
                            <button className="mt-12 bg-fastway-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300">View All News</button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Safe & Reliable Section */}
            <section className="min-h-screen snap-start flex items-center py-20 bg-white">
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
            
            {/* Air Freight Section */}
            <section className="snap-start">
                <div className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://www.melodylogistics.com/templates/pc/01/assets/img/bg/bg-subheader.jpg')" }}>
                    <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-60"></div>
                    <AnimatedSection>
                        <div className="relative container mx-auto px-6 text-center text-white z-10">
                            <h2 className="text-5xl font-extrabold mb-4 uppercase">AIR FREIGHT</h2>
                            <p className="text-lg font-light max-w-4xl mx-auto">
                                Mega Plus Import Export Co., Ltd would like to extend our warmest greetings and best wishes for long-term, successful business cooperation with you.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="py-20 bg-white">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                         <AnimatedSection>
                            <div className="text-gray-700 leading-relaxed space-y-5">
                                <p>Mega Plus Import Export Co., Ltd would like to extend our warmest greetings and best wishes for long-term, successful business cooperation with you.</p>
                                <p>Our head office is located in Ho Chi Minh City, Vietnam, with a strong presence and partners in major ports and logistics hubs nationwide. With a team of dynamic, experienced, and well-trained professionals, Mega Plus is proud to deliver fast and reliable logistics and trading services that meet international standards.</p>
                                <p>Guided by our motto — “Fast - Accurate - Safe - Trusted”, Mega Plus is committed to providing flexible and efficient logistics and trading solutions tailored to the specific requirements of each customer, in both import and export operations.</p>
                                <p>Since our establishment, we have been continuously expanding our global network of partners and agents, ensuring smooth connections across markets in Asia, Europe, and the Americas.</p>
                                <p>In addition to our logistics expertise, Mega Plus also specializes in importing and exporting a wide range of products, including:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                    <li>Agricultural products (fresh fruits, dried fruits, nuts, coconut products, etc.)</li>
                                    <li>Plastic scrap materials and recycled goods</li>
                                    <li>Consumer and industrial commodities upon request</li>
                                </ul>
                                <p>We also offer full-service solutions covering:</p>
                                 <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                    <li>Freight forwarding (air, sea, and inland transport)</li>
                                    <li>Customs clearance and documentation</li>
                                    <li>Cargo insurance, inspection, and certificate of origin (C/O)</li>
                                    <li>Packaging, fumigation, and warehouse handling</li>
                                </ul>
                                <p>With reliable partnerships with major shipping lines and airlines, we ensure timely shipments, cost efficiency, and transparency at every stage of the process.</p>
                                <p>We are currently offering special promotions and flexible service packages for new business partners — please feel free to contact us for more details.</p>
                                <p>📨 We sincerely look forward to receiving your inquiries soon and building a successful partnership together!</p>
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
                    <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-60"></div>
                    <AnimatedSection>
                        <div className="relative container mx-auto px-6 text-center text-white z-10">
                            <h2 className="text-5xl font-extrabold mb-4 uppercase">SEA FREIGHT</h2>
                            <p className="text-lg font-light max-w-4xl mx-auto">
                                Mega Plus has established strong partnerships and service contracts with many reputable shipping lines such as CMA-CGM, MSC, OOCL, ZIM, WAN HAI, YML, PIL, APL, and CK LINE, allowing us to provide customers with a wide range of transit time options and competitive freight rates.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                         <AnimatedSection>
                            <div className="text-gray-700 leading-relaxed space-y-5">
                                <p>Mega Plus has established strong partnerships and service contracts with many reputable shipping lines such as CMA-CGM, MSC, OOCL, ZIM, WAN HAI, YML, PIL, APL, and CK LINE, allowing us to provide customers with a wide range of transit time options and competitive freight rates.</p>
                                <p>We are capable of handling both LCL (Less than Container Load) and FCL (Full Container Load) shipments, as well as offering door-to-door delivery services from and to all major ports worldwide through our trusted global agent network.</p>
                                <p>At Mega Plus, we place great emphasis on service reliability, financial stability, and experienced staff when building long-term partnerships with carriers and clients. These values ensure every shipment is handled with the utmost care, efficiency, and professionalism.</p>
                                <p>Our dedicated team closely monitors each cargo movement — from departure to final destination — keeping our customers fully updated and confident throughout the entire logistics process.</p>
                                <p>We are committed to providing logistics solutions that are fast, accurate, safe, and cost-effective, ensuring every shipment arrives on time and in perfect condition.</p>
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
                    <div className="absolute inset-0 bg-fastway-dark-blue bg-opacity-60"></div>
                    <AnimatedSection>
                        <div className="relative container mx-auto px-6 text-center text-white z-10">
                            <h2 className="text-5xl font-extrabold mb-4 uppercase">DOMESTICS TRANSPORTATION</h2>
                             <p className="text-lg font-light max-w-4xl mx-auto">
                                Domestic Waterway & Inland Services Mega Plus operates regular domestic waterway routes three times a week from Ho Chi Minh City to Da Nang, Hai Phong, and Hanoi, and vice versa.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="py-20 bg-white">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                        <AnimatedSection>
                            <div className="text-gray-700 leading-relaxed space-y-5">
                                <h4 className="font-bold text-lg">Domestic Waterway & Inland Services</h4>
                                <p>Mega Plus operates regular domestic waterway routes three times a week from Ho Chi Minh City to Da Nang, Hai Phong, and Hanoi, and vice versa. We also provide daily inland trucking services for LCL cargo to all major provinces across Vietnam, ensuring fast, safe, and cost-efficient delivery nationwide.</p>
                                <h4 className="font-bold text-lg">Comprehensive Logistics Solutions</h4>
                                <p>Mega Plus provides end-to-end logistics and supply chain services, covering the entire process from warehousing to customs and distribution. Our logistics operations include:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                    <li>Project logistics / Oversized & heavy cargo handling</li>
                                    <li>Warehousing, storage, and nationwide distribution</li>
                                    <li>Household and personal effects moving services</li>
                                    <li>Professional packing and unpacking services</li>
                                    <li>Transit cargo transportation from Cat Lai Port to Cambodia by truck or sea</li>
                                    <li>Consultancy and assistance for import licensing (for food, animal-origin products, pharmaceuticals, etc.)</li>
                                </ul>
                                <p>In addition, Mega Plus offers cargo insurance and is an Authorized Customs Broker, ensuring smooth, compliant, and secure customs procedures for every shipment.</p>
                                <p>Our goal is to deliver integrated logistics solutions with the core values of Speed – Accuracy – Safety – Trust, meeting both domestic and international business demands.</p>
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
            <section className="min-h-screen snap-start flex flex-col justify-center py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <div>
                            <span className="text-fastway-orange font-semibold">What People Say</span>
                            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-12">Testimonials</h2>
                        </div>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Ngocle Tu Thanh Thú', title: 'Marketing Officer', img: 5 },
                            { name: 'Phan My My', title: 'Logistics Manager', img: 6 },
                            { name: 'Phan Huong Giang', title: 'Sales Director', img: 7 },
                        ].map((t, i) => (
                             <AnimatedSection key={t.name} delay={i * 200}>
                                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                                    <img src={`https://picsum.photos/100/100?random=${t.img}`} alt={t.name} className="w-24 h-24 rounded-full mx-auto -mt-20 border-4 border-white shadow-md"/>
                                    <p className="text-gray-600 italic my-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna."</p>
                                    <h4 className="font-bold text-gray-800">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.title}</p>
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
