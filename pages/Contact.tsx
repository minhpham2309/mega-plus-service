import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        alert('Thank you for your request! We will get back to you soon.');
        setFormData({ name: '', phone: '', email: '' });
    };

    return (
        <div className="bg-gray-50">
            {/* Contact Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <span className="text-fastway-orange font-semibold">Our Locations</span>
                            <h2 className="text-4xl font-bold text-gray-800 mt-2">Contact Us</h2>
                            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                                We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fastway-orange"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fastway-orange"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fastway-orange"
                                    />
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-fastway-dark-blue text-white font-bold py-3 px-10 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Contact;