import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function Show({ blog }) {
    const publishedDate = new Date(blog.published_at || blog.created_at);
    
    return (
        <PublicLayout title={blog.title}>
            {/* Navigation Breadcrumb */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center space-x-2 text-sm text-gray-500">
                        <Link href={route('home')} className="hover:text-purple-600 transition-colors duration-200">
                            Home
                        </Link>
                        <span>→</span>
                        <Link href={route('blog.index')} className="hover:text-purple-600 transition-colors duration-200">
                            Blog
                        </Link>
                        <span>→</span>
                        <span className="text-gray-900">{blog.title}</span>
                    </nav>
                </div>
            </section>

            {/* Article Header */}
            <article className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {blog.title}
                        </h1>
                        
                        {blog.excerpt && (
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                {blog.excerpt}
                            </p>
                        )}
                        
                        <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {blog.user ? blog.user.name : 'Admin'}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {publishedDate.toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <button 
                                    onClick={() => navigator.share ? navigator.share({
                                        title: blog.title,
                                        url: window.location.href
                                    }) : navigator.clipboard.writeText(window.location.href)}
                                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                                    </svg>
                                    Share
                                </button>
                                
                                <span className="text-gray-400">•</span>
                                
                                <span className="text-sm text-gray-600">
                                    {Math.ceil(blog.content.split(' ').length / 200)} min read
                                </span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {blog.featured_image && (
                        <div className="mb-8">
                            <img 
                                src={blog.featured_image} 
                                alt={blog.title}
                                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    )}

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="text-gray-700 leading-relaxed space-y-6">
                            {blog.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-6">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Article Footer */}
                    <footer className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-4">Share this article:</span>
                                <div className="flex space-x-3">
                                    <a 
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                    
                                    <a 
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    
                                    <a 
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            
                            <Link 
                                href={route('blog.index')}
                                className="flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                            >
                                ← Back to Blog
                            </Link>
                        </div>
                    </footer>
                </div>
            </article>

            {/* Author Bio */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center mr-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {blog.user ? blog.user.name : 'Admin'}
                                </h3>
                                <p className="text-gray-600">Full Stack Developer</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            I'm a passionate full-stack developer who loves creating innovative web applications. 
                            When I'm not coding, I enjoy sharing my knowledge through blog posts and helping 
                            others learn programming. Follow me for more insights about web development!
                        </p>
                        
                        <div className="flex space-x-4">
                            <Link 
                                href={route('about')}
                                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                            >
                                Learn More About Me
                            </Link>
                            <Link 
                                href={route('contact')}
                                className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles / More from Blog */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">More Articles</h2>
                        <p className="text-lg text-gray-600">
                            Continue reading with these related articles
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <Link 
                            href={route('blog.index')}
                            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                        >
                            View All Articles
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                        <h2 className="text-3xl font-bold mb-4">Enjoyed This Article?</h2>
                        <p className="text-purple-100 mb-6">
                            Subscribe to get notified when I publish new articles about web development, 
                            programming tips, and technology insights.
                        </p>
                        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            />
                            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-purple-200 text-sm mt-4">
                            No spam ever. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}