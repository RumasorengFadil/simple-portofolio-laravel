import { useState, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';

export default function AdminLayout({ user, header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navigation = [
        {
            name: 'Dashboard',
            href: route('admin.dashboard'),
            current: route().current('admin.dashboard'),
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                </svg>
            ),
        },
        {
            name: 'Blogs',
            href: route('admin.blogs.index'),
            current: route().current('admin.blogs.*'),
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            ),
        },
        {
            name: 'Projects',
            href: route('admin.projects.index'),
            current: route().current('admin.projects.*'),
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                {/* Sidebar */}
                <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
                    <div className="flex flex-col h-full">
                        {/* Logo */}
                        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
                            <Link href="/" className="flex items-center">
                                <ApplicationLogo className="h-8 w-auto text-white" />
                                <span className="ml-2 text-xl font-bold text-white">Admin</span>
                            </Link>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden text-white hover:bg-white/10 p-1 rounded-md"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 px-4 py-6 space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                                        item.current
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    <span className={`mr-3 transition-transform duration-200 ${item.current ? 'scale-110' : 'group-hover:scale-110'}`}>
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* User Profile */}
                        <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-medium text-sm">
                                            {user.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                                </div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('home')}>View Site</Dropdown.Link>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="lg:ml-64">
                    {/* Top bar */}
                    <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
                        <div className="px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setSidebarOpen(true)}
                                        className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                    {header && (
                                        <div className="ml-4 lg:ml-0">
                                            {header}
                                        </div>
                                    )}
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    {/* Dark mode toggle */}
                                    <button
                                        onClick={toggleDarkMode}
                                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-105"
                                    >
                                        {darkMode ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                        )}
                                    </button>

                                    {/* Notifications */}
                                    <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-105 relative">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 18h4v-4H4v4zM11 4h4v4h-4V4z" />
                                        </svg>
                                        <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Page content */}
                    <main className="p-6">
                        {children}
                    </main>
                </div>

                {/* Mobile sidebar overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}
            </div>
        </div>
    );
}