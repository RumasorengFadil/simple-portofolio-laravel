import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, analytics }) {
    const statCards = [
        {
            title: 'Total Blogs',
            value: analytics.total_blogs,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            ),
            gradient: 'from-blue-500 to-cyan-400',
            bgGradient: 'from-blue-50 to-cyan-50',
            darkBgGradient: 'dark:from-blue-900/20 dark:to-cyan-900/20',
            change: '+12%',
            changeType: 'positive'
        },
        {
            title: 'Published Blogs',
            value: analytics.published_blogs,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-emerald-500 to-green-400',
            bgGradient: 'from-emerald-50 to-green-50',
            darkBgGradient: 'dark:from-emerald-900/20 dark:to-green-900/20',
            change: '+8%',
            changeType: 'positive'
        },
        {
            title: 'Total Projects',
            value: analytics.total_projects,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            gradient: 'from-purple-500 to-pink-400',
            bgGradient: 'from-purple-50 to-pink-50',
            darkBgGradient: 'dark:from-purple-900/20 dark:to-pink-900/20',
            change: '+5%',
            changeType: 'positive'
        },
        {
            title: 'Total Contacts',
            value: analytics.total_contacts,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            ),
            gradient: 'from-orange-500 to-red-400',
            bgGradient: 'from-orange-50 to-red-50',
            darkBgGradient: 'dark:from-orange-900/20 dark:to-red-900/20',
            change: '+15%',
            changeType: 'positive'
        }
    ];

    const quickActions = [
        {
            title: 'Create New Blog',
            description: 'Write and publish a new blog post',
            href: route('admin.blogs.create'),
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
            gradient: 'from-blue-500 to-cyan-400'
        },
        {
            title: 'Add New Project',
            description: 'Showcase your latest work',
            href: route('admin.projects.create'),
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            gradient: 'from-purple-500 to-pink-400'
        },
        {
            title: 'View Site',
            description: 'Check your live portfolio',
            href: route('home'),
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            ),
            gradient: 'from-emerald-500 to-green-400'
        }
    ];

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Welcome back, {auth.user.name}! 👋
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Here's what's happening with your portfolio today.
                        </p>
                    </div>
                    <div className="hidden sm:flex items-center space-x-3">
                        <div className="flex items-center px-3 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-sm font-medium">All systems operational</span>
                        </div>
                    </div>
                </div>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statCards.map((card, index) => (
                        <div
                            key={card.title}
                            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.bgGradient} ${card.darkBgGradient} p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                        {card.title}
                                    </p>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                                        {card.value}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <span className={`text-sm font-medium ${card.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                            {card.change}
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                            from last month
                                        </span>
                                    </div>
                                </div>
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${card.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {card.icon}
                                </div>
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Recent Activity */}
                    <div className="xl:col-span-2 space-y-6">
                        {/* Recent Blogs */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Blogs</h3>
                                    </div>
                                    <Link 
                                        href={route('admin.blogs.index')} 
                                        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
                                    >
                                        View all
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {analytics.recent_blogs.length > 0 ? (
                                        analytics.recent_blogs.map((blog, index) => (
                                            <div 
                                                key={blog.id} 
                                                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                                style={{
                                                    animationDelay: `${index * 100}ms`
                                                }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 dark:text-white line-clamp-1">
                                                            {blog.title}
                                                        </p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                                            {new Date(blog.created_at).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })}
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                                    blog.is_published 
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                                                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                                                }`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full mr-1 ${
                                                        blog.is_published ? 'bg-green-500' : 'bg-yellow-500'
                                                    }`}></div>
                                                    {blog.is_published ? 'Published' : 'Draft'}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-12">
                                            <svg className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                            <p className="text-gray-500 dark:text-gray-400">No blogs yet</p>
                                            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Create your first blog post to get started</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Recent Contacts */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-3">
                                        <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Contacts</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {analytics.recent_contacts.length > 0 ? (
                                        analytics.recent_contacts.map((contact, index) => (
                                            <div 
                                                key={contact.id} 
                                                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                                style={{
                                                    animationDelay: `${index * 100}ms`
                                                }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full flex items-center justify-center mr-3">
                                                        <span className="text-white font-medium text-sm">
                                                            {contact.name.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 dark:text-white">
                                                            {contact.name}
                                                        </p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                                            {contact.email}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {new Date(contact.created_at).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-12">
                                            <svg className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                            </svg>
                                            <p className="text-gray-500 dark:text-gray-400">No contacts yet</p>
                                            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">People will appear here when they contact you</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
                            </div>
                            <div className="p-6 space-y-3">
                                {quickActions.map((action, index) => (
                                    <Link
                                        key={action.title}
                                        href={action.href}
                                        className="block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md group"
                                        style={{
                                            animationDelay: `${index * 100}ms`
                                        }}
                                    >
                                        <div className="flex items-center">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${action.gradient} text-white mr-3 group-hover:scale-110 transition-transform duration-200`}>
                                                {action.icon}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                                    {action.title}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {action.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Performance Overview */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                            <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Blog Engagement</span>
                                        <span>78%</span>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-2">
                                        <div className="bg-white h-2 rounded-full" style={{width: '78%'}}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Project Views</span>
                                        <span>92%</span>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-2">
                                        <div className="bg-white h-2 rounded-full" style={{width: '92%'}}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Contact Response</span>
                                        <span>65%</span>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-2">
                                        <div className="bg-white h-2 rounded-full" style={{width: '65%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}