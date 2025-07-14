import { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Contact({ success, errors: serverErrors }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => reset()
        });
    };

    return (
        <PublicLayout title="Contact">
            {/* Hero Section */}
            <section className="py-20 gradient-bg text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl text-gray-200">
                        Have a project in mind? Let's work together to bring your ideas to life
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
                            
                            {success && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                    {success}
                                </div>
                            )}

                            {Object.keys(serverErrors).length > 0 && (
                                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                    <ul className="list-disc pl-5">
                                        {Object.values(serverErrors).map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <InputLabel htmlFor="name" value="Name" />
                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                            placeholder="Your full name"
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="email" value="Email" />
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            placeholder="your.email@example.com"
                                        />
                                        <InputError message={errors.email} className="mt-2" />
                                    </div>
                                </div>

                                <div>
                                    <InputLabel htmlFor="subject" value="Subject" />
                                    <TextInput
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        value={data.subject}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('subject', e.target.value)}
                                        required
                                        placeholder="What's this about?"
                                    />
                                    <InputError message={errors.subject} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="message" value="Message" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        rows="6"
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        placeholder="Tell me about your project or idea..."
                                        required
                                    />
                                    <InputError message={errors.message} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-end">
                                    <PrimaryButton disabled={processing}>
                                        {processing ? 'Sending...' : 'Send Message'}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    I'm always interested in hearing about new opportunities and exciting projects. 
                                    Whether you have a question, want to discuss a potential collaboration, or just 
                                    want to say hello, I'd love to hear from you!
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Email</h4>
                                            <p className="text-gray-600">your.email@example.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Phone</h4>
                                            <p className="text-gray-600">+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Location</h4>
                                            <p className="text-gray-600">Your City, Country</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Response Time</h4>
                                            <p className="text-gray-600">Usually within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
                                <p className="text-gray-600 mb-6">
                                    Connect with me on social media for updates on my latest projects and insights.
                                </p>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <a 
                                        href="#" 
                                        className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                    >
                                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499-.043.848-.196.848-.43 0-.213-.008-.781-.011-1.533-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112.026 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 11.974C22 6.465 17.535 2 12.026 2z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium text-gray-900">GitHub</span>
                                    </a>

                                    <a 
                                        href="#" 
                                        className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                    >
                                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium text-gray-900">LinkedIn</span>
                                    </a>

                                    <a 
                                        href="#" 
                                        className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                    >
                                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                        <span className="font-medium text-gray-900">Twitter</span>
                                    </a>

                                    <a 
                                        href="#" 
                                        className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                    >
                                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium text-gray-900">Facebook</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">
                            Here are some common questions I get asked
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                What's your typical project timeline?
                            </h3>
                            <p className="text-gray-600">
                                Project timelines vary depending on complexity, but most projects take 2-8 weeks from 
                                start to finish. I'll provide a detailed timeline during our initial consultation.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Do you work with clients remotely?
                            </h3>
                            <p className="text-gray-600">
                                Absolutely! I work with clients worldwide and am experienced in remote collaboration 
                                using modern communication tools and project management platforms.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                What technologies do you specialize in?
                            </h3>
                            <p className="text-gray-600">
                                I specialize in modern web technologies including Laravel, React, Vue.js, Node.js, 
                                and various databases. I'm always learning new technologies to stay current.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Do you provide ongoing support?
                            </h3>
                            <p className="text-gray-600">
                                Yes! I offer various support packages for ongoing maintenance, updates, and 
                                enhancements after project completion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 gradient-bg text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Let's discuss your ideas and see how we can work together to create something amazing. 
                        I'm excited to hear about your project!
                    </p>
                    <a 
                        href="#contact-form" 
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Send Me a Message
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </section>
        </PublicLayout>
    );
}