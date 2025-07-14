import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function Projects({ projects }) {
    return (
        <PublicLayout title="Projects">
            {/* Hero Section */}
            <section className="py-20 gradient-bg text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold mb-6">My Projects</h1>
                    <p className="text-xl text-gray-200">
                        A showcase of my creative work and technical expertise
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {projects && projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                                    {project.image ? (
                                        <div className="h-48 bg-gray-200 overflow-hidden">
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-48 bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                            </svg>
                                        </div>
                                    )}
                                    
                                    <div className="p-6">
                                        {project.featured && (
                                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-3">
                                                ⭐ Featured
                                            </div>
                                        )}
                                        
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                                        
                                        {project.technologies && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.split(',').map((tech, index) => (
                                                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        
                                        <div className="flex space-x-3">
                                            {project.demo_url && (
                                                <a 
                                                    href={project.demo_url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.github_url && (
                                                <a 
                                                    href={project.github_url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                                >
                                                    Code
                                                </a>
                                            )}
                                            <Link 
                                                href={route('projects.show', project.id)} 
                                                className="flex-1 border border-purple-600 text-purple-600 text-center py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Projects Yet</h3>
                            <p className="text-gray-600 max-w-md mx-auto">
                                I'm working on some exciting projects that will be showcased here soon. 
                                In the meantime, feel free to check out my other work!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies I Use</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Here are some of the technologies and tools I frequently work with in my projects
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[
                            { name: 'React', color: 'text-blue-600', bg: 'bg-blue-100' },
                            { name: 'Vue.js', color: 'text-green-600', bg: 'bg-green-100' },
                            { name: 'Laravel', color: 'text-red-600', bg: 'bg-red-100' },
                            { name: 'Node.js', color: 'text-green-600', bg: 'bg-green-100' },
                            { name: 'TypeScript', color: 'text-blue-600', bg: 'bg-blue-100' },
                            { name: 'Python', color: 'text-yellow-600', bg: 'bg-yellow-100' },
                            { name: 'MySQL', color: 'text-blue-600', bg: 'bg-blue-100' },
                            { name: 'MongoDB', color: 'text-green-600', bg: 'bg-green-100' },
                            { name: 'Docker', color: 'text-blue-600', bg: 'bg-blue-100' },
                            { name: 'AWS', color: 'text-orange-600', bg: 'bg-orange-100' },
                            { name: 'Tailwind', color: 'text-cyan-600', bg: 'bg-cyan-100' },
                            { name: 'Git', color: 'text-gray-600', bg: 'bg-gray-100' }
                        ].map((tech, index) => (
                            <div key={index} className="text-center group">
                                <div className={`w-16 h-16 ${tech.bg} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow duration-300`}>
                                    <span className={`text-xl font-bold ${tech.color}`}>
                                        {tech.name.substring(0, 2)}
                                    </span>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Skills */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes My Projects Special</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Every project I work on follows these core principles
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance</h3>
                            <p className="text-gray-600">
                                Optimized for speed and efficiency with clean, maintainable code
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsive</h3>
                            <p className="text-gray-600">
                                Beautiful designs that work perfectly on all devices and screen sizes
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Friendly</h3>
                            <p className="text-gray-600">
                                Intuitive interfaces designed with user experience as the top priority
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Secure</h3>
                            <p className="text-gray-600">
                                Built with security best practices and modern authentication systems
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 gradient-bg text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        I'm always excited to work on new projects and bring creative ideas to life. 
                        Let's discuss how we can work together!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href={route('contact')} 
                            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Start a Project
                        </Link>
                        <Link 
                            href={route('about')} 
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Learn More About Me
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}