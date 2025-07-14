import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function ProjectDetail({ project }) {
    return (
        <PublicLayout title={project.title}>
            {/* Hero Section */}
            <section className="py-20 gradient-bg text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <Link 
                            href={route('projects')} 
                            className="inline-flex items-center text-gray-200 hover:text-white mb-6 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Back to Projects
                        </Link>
                        
                        {project.featured && (
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-yellow-900 mb-4">
                                ⭐ Featured Project
                            </div>
                        )}
                        
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            {project.description}
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {project.demo_url && (
                            <a 
                                href={project.demo_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                                Live Demo
                            </a>
                        )}
                        {project.github_url && (
                            <a 
                                href={project.github_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499-.043.848-.196.848-.43 0-.213-.008-.781-.011-1.533-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112.026 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 11.974C22 6.465 17.535 2 12.026 2z" clipRule="evenodd" />
                                </svg>
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Project Image */}
            {project.image && (
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-96 md:h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Project Details */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                                <div className="prose max-w-none text-gray-600 leading-relaxed">
                                    <p className="text-lg mb-6">{project.description}</p>
                                    
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                                    <ul className="space-y-2">
                                        <li>• Responsive design that works across all devices</li>
                                        <li>• Modern and intuitive user interface</li>
                                        <li>• Optimized performance and fast loading times</li>
                                        <li>• Secure and scalable architecture</li>
                                        <li>• Clean, maintainable code structure</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Development Process</h3>
                                    <p>
                                        This project was built using modern development practices and tools. 
                                        I focused on creating a scalable architecture that can grow with the 
                                        business needs while maintaining excellent performance and user experience.
                                    </p>
                                    
                                    <p>
                                        The development process included thorough planning, wireframing, 
                                        responsive design implementation, and extensive testing across 
                                        different browsers and devices.
                                    </p>
                                </div>
                            </div>

                            {/* Screenshots/Gallery (if you want to add multiple images later) */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Highlights</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Modern Design</h4>
                                        <p className="text-gray-600 text-sm">
                                            Clean, contemporary interface that provides excellent user experience
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                                        <p className="text-gray-600 text-sm">
                                            Optimized for speed with fast loading times and smooth interactions
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Responsive</h4>
                                        <p className="text-gray-600 text-sm">
                                            Works perfectly on desktop, tablet, and mobile devices
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Scalable</h4>
                                        <p className="text-gray-600 text-sm">
                                            Built with growth in mind using modern, maintainable code
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Technologies */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                                {project.technologies ? (
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.split(',').map((tech, index) => (
                                            <span 
                                                key={index} 
                                                className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium"
                                            >
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-600">Technologies not specified</p>
                                )}
                            </div>

                            {/* Project Links */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Links</h3>
                                <div className="space-y-3">
                                    {project.demo_url && (
                                        <a 
                                            href={project.demo_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center w-full p-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-colors duration-200"
                                        >
                                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github_url && (
                                        <a 
                                            href={project.github_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center w-full p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors duration-200"
                                        >
                                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499-.043.848-.196.848-.43 0-.213-.008-.781-.011-1.533-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112.026 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 11.974C22 6.465 17.535 2 12.026 2z" clipRule="evenodd" />
                                            </svg>
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Info</h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="font-medium text-gray-900">Status:</span>
                                        <span className="ml-2 text-gray-600">Completed</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">Type:</span>
                                        <span className="ml-2 text-gray-600">Web Application</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">Role:</span>
                                        <span className="ml-2 text-gray-600">Full Stack Developer</span>
                                    </div>
                                    {project.featured && (
                                        <div>
                                            <span className="font-medium text-gray-900">Featured:</span>
                                            <span className="ml-2 text-purple-600">⭐ Yes</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Contact CTA */}
                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-2xl shadow-lg text-white">
                                <h3 className="text-lg font-semibold mb-3">Interested in Similar Work?</h3>
                                <p className="text-purple-100 text-sm mb-4">
                                    I'd love to help bring your project ideas to life with the same attention to detail and quality.
                                </p>
                                <Link 
                                    href={route('contact')} 
                                    className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Get In Touch
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Projects */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">More Projects</h2>
                        <p className="text-lg text-gray-600">
                            Check out some of my other work
                        </p>
                    </div>
                    <div className="text-center">
                        <Link 
                            href={route('projects')} 
                            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                        >
                            View All Projects
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}