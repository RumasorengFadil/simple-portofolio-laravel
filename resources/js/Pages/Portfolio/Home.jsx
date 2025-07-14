import { Head, Link } from '@inertiajs/react';
import PortfolioLayout from '../../Layouts/PortfolioLayout';
import { useEffect, useState } from 'react';

export default function Home({ featuredProjects = [] }) {
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShown(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <PortfolioLayout>
            <Head title="Home" />
            
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center gradient-bg text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-800 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Hi, I'm <span className="text-yellow-400">Fadil Hijayat Rumasoreng</span>
                        </h1>
                        <p className={`text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-800 delay-200 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Full Stack Developer & Creative Problem Solver
                        </p>
                        <p className={`text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto transition-all duration-800 delay-400 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            I craft digital experiences that blend beautiful design with powerful functionality. 
                            Passionate about creating solutions that make a difference.
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-800 delay-600 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <Link href={route('projects')} className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                                View My Work
                            </Link>
                            <Link href={route('contact')} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            I specialize in creating full-stack web applications with modern technologies
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend Development</h3>
                            <p className="text-gray-600 mb-6">
                                Creating responsive and interactive user interfaces with React, Vue.js, and modern CSS frameworks.
                            </p>
                            <div className="flex flex-wrap justify-center gap-2">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">React</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Vue.js</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Tailwind</span>
                            </div>
                        </div>

                        <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Development</h3>
                            <p className="text-gray-600 mb-6">
                                Building scalable server-side applications with PHP, Laravel, Node.js, and database design.
                            </p>
                            <div className="flex flex-wrap justify-center gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Laravel</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Node.js</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">MySQL</span>
                            </div>
                        </div>

                        <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps & Deployment</h3>
                            <p className="text-gray-600 mb-6">
                                Deploying applications with CI/CD pipelines, Docker, and cloud platforms for optimal performance.
                            </p>
                            <div className="flex flex-wrap justify-center gap-2">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Docker</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">AWS</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Git</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            {featuredProjects && featuredProjects.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Here are some of my recent projects that showcase my skills and creativity
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredProjects.map((project) => (
                                <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                                    {project.image ? (
                                        <div className="h-48 bg-gray-200 overflow-hidden">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                    ) : (
                                        <div className="h-48 bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                            </svg>
                                        </div>
                                    )}
                                    
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies_array && project.technologies_array.map((tech, index) => (
                                                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{tech.trim()}</span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex space-x-3">
                                            {project.demo_url && (
                                                <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.github_url && (
                                                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                                    GitHub
                                                </a>
                                            )}
                                            <Link href={route('projects.show', project.id)} className="flex-1 bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link href={route('projects')} className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                                View All Projects
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Call to Action Section */}
            <section className="py-20 gradient-bg text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
                    <p className="text-xl mb-8 text-gray-200">
                        I'm always excited to take on new challenges and create amazing digital experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={route('contact')} className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                            Start a Project
                        </Link>
                        <Link href={route('resume')} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                            Download Resume
                        </Link>
                    </div>
                </div>
            </section>
        </PortfolioLayout>
    );
}