import { Head, Link } from '@inertiajs/react';
import PortfolioLayout from '../../Layouts/PortfolioLayout';

export default function Projects({ projects = [] }) {
    return (
        <PortfolioLayout>
            <Head title="Projects" />
            
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
                                        {project.featured && (
                                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-3">
                                                ⭐ Featured
                                            </div>
                                        )}
                                        
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
                    ) : (
                        <div className="text-center py-20">
                            <svg className="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Projects Yet</h3>
                            <p className="text-gray-600">Projects will be displayed here once they are added.</p>
                        </div>
                    )}
                </div>
            </section>
        </PortfolioLayout>
    );
}