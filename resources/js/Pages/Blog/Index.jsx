import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function Index({ blogs }) {
    return (
        <PublicLayout title="Blog">
            {/* Hero Section */}
            <section className="py-20 gradient-bg text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold mb-6">Blog</h1>
                    <p className="text-xl text-gray-200">
                        Thoughts, tutorials, and insights about web development and technology
                    </p>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {blogs && blogs.data && blogs.data.length > 0 ? (
                        <div className="space-y-8">
                            {/* Featured Post (first post) */}
                            {blogs.data[0] && (
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="md:flex">
                                        {blogs.data[0].featured_image ? (
                                            <div className="md:w-1/2">
                                                <img 
                                                    src={blogs.data[0].featured_image} 
                                                    alt={blogs.data[0].title}
                                                    className="w-full h-64 md:h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="md:w-1/2 bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">
                                                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                        )}
                                        <div className="md:w-1/2 p-8">
                                            <div className="flex items-center mb-4">
                                                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full mr-3">
                                                    Featured
                                                </span>
                                                <span className="text-gray-500 text-sm">
                                                    {new Date(blogs.data[0].published_at || blogs.data[0].created_at).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                                <Link 
                                                    href={route('blog.show', blogs.data[0].slug)}
                                                    className="hover:text-purple-600 transition-colors duration-200"
                                                >
                                                    {blogs.data[0].title}
                                                </Link>
                                            </h2>
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {blogs.data[0].excerpt || blogs.data[0].content.substring(0, 200) + '...'}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm text-gray-700">
                                                        {blogs.data[0].user ? blogs.data[0].user.name : 'Admin'}
                                                    </span>
                                                </div>
                                                <Link 
                                                    href={route('blog.show', blogs.data[0].slug)}
                                                    className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                                                >
                                                    Read More →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Regular Posts Grid */}
                            {blogs.data.length > 1 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {blogs.data.slice(1).map((blog) => (
                                        <article key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                                            {blog.featured_image ? (
                                                <div className="h-48 overflow-hidden">
                                                    <img 
                                                        src={blog.featured_image} 
                                                        alt={blog.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="h-48 bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">
                                                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                            )}
                                            
                                            <div className="p-6">
                                                <div className="flex items-center mb-3">
                                                    <span className="text-gray-500 text-sm">
                                                        {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                                
                                                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                                    <Link 
                                                        href={route('blog.show', blog.slug)}
                                                        className="hover:text-purple-600 transition-colors duration-200"
                                                    >
                                                        {blog.title}
                                                    </Link>
                                                </h3>
                                                
                                                <p className="text-gray-600 mb-4 line-clamp-3">
                                                    {blog.excerpt || blog.content.substring(0, 120) + '...'}
                                                </p>
                                                
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-xs text-gray-700">
                                                            {blog.user ? blog.user.name : 'Admin'}
                                                        </span>
                                                    </div>
                                                    <Link 
                                                        href={route('blog.show', blog.slug)}
                                                        className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                                                    >
                                                        Read More →
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Blog Posts Yet</h3>
                            <p className="text-gray-600 max-w-md mx-auto">
                                I'm working on some exciting content that will be published here soon. 
                                Check back later for updates!
                            </p>
                        </div>
                    )}

                    {/* Pagination */}
                    {blogs && blogs.links && blogs.links.length > 3 && (
                        <div className="mt-12 flex justify-center">
                            <div className="flex space-x-1">
                                {blogs.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`px-4 py-2 text-sm rounded-lg ${
                                            link.active
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                                        } ${!link.url ? 'opacity-50 cursor-not-allowed' : 'transition-colors duration-200'}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-purple-100 mb-6">
                            Get notified when I publish new articles about web development, 
                            technology trends, and coding tips.
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
                            No spam. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Topics/Categories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Topics I Write About</h2>
                        <p className="text-lg text-gray-600">
                            Explore different areas of web development and technology
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'React & Vue.js', color: 'blue', icon: '⚛️' },
                            { name: 'Laravel & PHP', color: 'red', icon: '🐘' },
                            { name: 'JavaScript Tips', color: 'yellow', icon: '💡' },
                            { name: 'Web Development', color: 'green', icon: '🌐' },
                            { name: 'Database Design', color: 'purple', icon: '🗃️' },
                            { name: 'DevOps & Deployment', color: 'gray', icon: '🚀' },
                            { name: 'UI/UX Design', color: 'pink', icon: '🎨' },
                            { name: 'Career Advice', color: 'indigo', icon: '💼' }
                        ].map((topic, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                                <div className="text-3xl mb-3">{topic.icon}</div>
                                <h3 className="font-semibold text-gray-900">{topic.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}