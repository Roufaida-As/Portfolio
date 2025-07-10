import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FloatingParticles from '../components/FloatingParticles';
import { useTheme } from "../../themeProvider";

const Contact = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const EMAILJS_SERVICE_ID = 'service_8cpl93w';
    const EMAILJS_TEMPLATE_ID = 'template_y90pkm3';
    const EMAILJS_PUBLIC_KEY = 'eHoNHKsh7N6eQegmL';


    useEffect(() => {
        if (submitStatus) {
            // Add animation class when message appears
            const messageElement = document.querySelector(submitStatus === 'success' ? '.bg-green-100' : '.bg-red-100');
            if (messageElement) {
                messageElement.classList.add('animate-fade-in');
                messageElement.style.opacity = '0';
                messageElement.style.transform = 'translateY(-10px)';

                // Animate in
                setTimeout(() => {
                    messageElement.style.transition = 'opacity 0.5s, transform 0.5s';
                    messageElement.style.opacity = '1';
                    messageElement.style.transform = 'translateY(0)';
                }, 10);

                // Animate out before removal
                const timer = setTimeout(() => {
                    messageElement.style.opacity = '0';
                    messageElement.style.transform = 'translateY(10px)';

                    setTimeout(() => {
                        setSubmitStatus(null);
                    }, 500);
                }, 2500);

                return () => clearTimeout(timer);
            }
        }
    }, [submitStatus]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    email_id: formData.email,
                    message: formData.message,
                    to_email: 'mr_asbar@esi.dz',
                },
                EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', response);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            value: "mr_asbar@esi.dz",
            link: "mailto:mr_asbar@esi.dz"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Phone",
            value: "+213 558727069",
            link: "tel:+213558727069"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Location",
            value: "Algeria",
            link: null
        }
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/asbar-roufaida-658b50254/",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: "GitHub",
            url: "https://github.com/Roufaida-As",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            name: "Instagram",
            url: "https://instagram.com/roufaida-as",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        }
    ];

    return (
        <section
            id="contact"
            className={`py-16 px-4 md:px-8 relative ${darkMode
                ? 'bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900'
                : 'bg-gradient-to-br from-slate-50 via-white to-purple-50'
                }`}
        >
            {/* Floating particles */}
            <FloatingParticles darkMode={darkMode} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode
                        ? 'text-white'
                        : 'text-slate-800'
                        }`}>
                        Get In Touch
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8 p-8">
                        <div>
                            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className={`p-3 rounded-full ${darkMode
                                            ? 'bg-slate-800/50 text-purple-400 border border-slate-700/50'
                                            : 'bg-purple-50 text-purple-600 border border-purple-100'
                                            }`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className={`text-sm hover:text-purple-600 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* Contact Form */}
                    <div className={`p-8 rounded-2xl backdrop-blur-sm ${darkMode
                        ? 'bg-slate-800/50 border border-slate-700/50'
                        : 'bg-white/70 border border-purple-100/50'
                        }`}>
                        <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                            Send me a message
                        </h3>

                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    Failed to send message. Please try again or contact me directly.
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${darkMode
                                            ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400'
                                            : 'bg-white/50 border-purple-200 text-slate-900 placeholder-slate-500'
                                            }`}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${darkMode
                                            ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400'
                                            : 'bg-white/50 border-purple-200 text-slate-900 placeholder-slate-500'
                                            }`}
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none ${darkMode
                                        ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400'
                                        : 'bg-white/50 border-purple-200 text-slate-900 placeholder-slate-500'
                                        }`}
                                    placeholder="Tell me about your project or just say hello..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                                    } text-white shadow-lg hover:shadow-xl`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;