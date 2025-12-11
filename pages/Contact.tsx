
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const subjectLabel = formData.subject ? t(`contact.subject_${formData.subject}`) : 'Contact';
        const emailSubject = `Contact: ${subjectLabel}`;
        
        const body = `Subject: ${subjectLabel}
Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}`;
        
        // Open default mail client with pre-filled data
        window.location.href = `mailto:info@megaplusvn.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;

        setFormData({ 
            name: '', 
            company: '',
            phone: '', 
            email: '', 
            subject: '',
            message: ''
        });
    };

    const subjectOptions = ['support', 'collaboration', 'pricing', 'other'];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
            {/* Contact Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection>
                        <div className="text-center mb-10 md:mb-12">
                            <span className="text-fastway-orange font-semibold text-sm md:text-base">{t('contact.badge')}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">{t('contact.title')}</h2>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
                                {t('contact.desc')}
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-12 rounded-lg shadow-xl transition-colors duration-300">
                            <form onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">{t('contact.form_name')} <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-fastway-orange dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">{t('contact.form_company')}</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-fastway-orange dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">{t('contact.form_phone')} <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-fastway-orange dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">{t('contact.form_email')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-fastway-orange dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">{t('contact.form_subject')}</label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-fastway-orange dark:bg-gray-700 dark:text-white appearance-none"
                                        >
                                            <option value="">{t('contact.subject_select')}</option>
                                            {subjectOptions.map(opt => (
                                                <option key={opt} value={opt}>{t(`contact.subject_${opt}`)}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 dark:text-gray-300">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">{t('contact.form_message')}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-fastway-orange dark:bg-gray-700 dark:text-white resize-none"
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-fastway-dark-blue text-white font-bold py-3 px-10 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                                    >
                                        {t('common.submit_request')}
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
