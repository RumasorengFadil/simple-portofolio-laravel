import { Head, Link } from '@inertiajs/react';
import PortfolioLayout from '../../Layouts/PortfolioLayout';

export default function ProjectDetail({ project }) {
    return (
        <PortfolioLayout>
            <Head title={project ? project.title : 'Project Details'} />
            
            {project ? (
                <>
                    {/* Hero Section */}
                    <section className="py-20 gradient-bg text-white">
                        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                            <div className="mb-6">
                                <Link href={route('projects')} className="inline-flex items-center text-white hover:text-gray-200 transition-colors">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                    Back to Projects
                                </Link>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
                            <p className="text-xl text-gray-200">
                                {project.description}
                            </p>
                        </div>
                    </section>

                    {/* Project Content */}
                    <section className="py-20 bg-gray-50">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {/* Project Image */}
                                <div className="lg:col-span-2">
                                    {project.image ? (
                                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                                            <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
                                        </div>
                                    ) : (
                                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                                            <div className="h-96 bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">
                                                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Description */}
                                    <div className="bg-white rounded-2xl shadow-lg p-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                                        <div className="prose prose-gray max-w-none">
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                {project.description}
                                            </p>
                                            {project.long_description && (
                                                <div className="mt-6 text-gray-600 leading-relaxed">
                                                    {project.long_description.split('\n').map((paragraph, index) => (
                                                        <p key={index} className="mb-4">{paragraph}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info Sidebar */}
                                <div className="space-y-8">
                                    {/* Project Meta */}
                                    <div className="bg-white rounded-2xl shadow-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                                        <div className="space-y-3">
                                            {project.category && (
                                                <div>
                                                    <span className="text-gray-600 font-medium">Category:</span>
                                                    <span className="ml-2 text-gray-900">{project.category}</span>
                                                </div>
                                            )}
                                            {project.client && (
                                                <div>
                                                    <span className="text-gray-600 font-medium">Client:</span>
                                                    <span className="ml-2 text-gray-900">{project.client}</span>
                                                </div>
                                            )}
                                            {project.year && (
                                                <div>
                                                    <span className="text-gray-600 font-medium">Year:</span>
                                                    <span className="ml-2 text-gray-900">{project.year}</span>
                                                </div>
                                            )}
                                            {project.featured && (
                                                <div>
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                        ⭐ Featured Project
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    {project.technologies_array && project.technologies_array.length > 0 && (
                                        <div className="bg-white rounded-2xl shadow-lg p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies_array.map((tech, index) => (
                                                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Links */}
                                    <div className="bg-white rounded-2xl shadow-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Project Links</h3>
                                        <div className="space-y-3">
                                            {project.demo_url && (
                                                <a 
                                                    href={project.demo_url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                                                >
                                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                    </svg>
                                                    View Live Demo
                                                </a>
                                            )}
                                            {project.github_url && (
                                                <a 
                                                    href={project.github_url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                                >
                                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                    View Source Code
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Contact CTA */}
                                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-lg p-6 text-white">
                                        <h3 className="text-xl font-bold mb-3">Interested in Similar Work?</h3>
                                        <p className="text-purple-100 mb-4">
                                            Let's discuss how I can help bring your project to life.
                                        </p>
                                        <Link 
                                            href={route('contact')}
                                            className="inline-flex items-center bg-white text-purple-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                                        >
                                            Get In Touch
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Project Not Found</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            The project you're looking for doesn't exist or has been removed.
                        </p>
                        <Link 
                            href={route('projects')}
                            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
                        >
                            Back to Projects
                        </Link>
                    </div>
                </section>
            )}
        </PortfolioLayout>
    );
}