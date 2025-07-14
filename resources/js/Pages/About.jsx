import PublicLayout from '@/Layouts/PublicLayout';

export default function About() {
    return (
        <PublicLayout title="About Me">
            {/* Hero Section */}
            <section className="py-20 gradient-bg text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold mb-6">About Me</h1>
                    <p className="text-xl text-gray-200">
                        Get to know the person behind the code
                    </p>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Profile Image */}
                        <div className="text-center lg:text-left">
                            <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 relative">
                                <div className="w-full h-full bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* About Text */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hello! I'm a passionate developer</h2>
                            <div className="space-y-4 text-gray-600 text-lg">
                                <p>
                                    I'm a full-stack developer with a passion for creating innovative web applications 
                                    that solve real-world problems. With over 3 years of experience in the field, 
                                    I've had the privilege of working with diverse teams and technologies.
                                </p>
                                <p>
                                    My journey in programming started during college when I discovered the joy of 
                                    turning ideas into digital reality. Since then, I've been constantly learning 
                                    and evolving, staying up-to-date with the latest technologies and best practices.
                                </p>
                                <p>
                                    When I'm not coding, you can find me exploring new technologies, contributing to 
                                    open-source projects, or sharing my knowledge through blog posts and mentoring 
                                    fellow developers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Here are the technologies and tools I work with regularly
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Frontend */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">React/Next.js</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Vue.js</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">TypeScript</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Tailwind CSS</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-cyan-600 h-2 rounded-full" style={{width: '95%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Laravel</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-red-600 h-2 rounded-full" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Node.js</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Python</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-yellow-600 h-2 rounded-full" style={{width: '75%'}}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Express.js</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-gray-600 h-2 rounded-full" style={{width: '80%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tools & Others */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & DevOps</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Git/GitHub</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-gray-600 h-2 rounded-full" style={{width: '95%'}}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Docker</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">AWS</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-orange-600 h-2 rounded-full" style={{width: '70%'}}></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">MySQL/MongoDB</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
                        <p className="text-xl text-gray-600">
                            Key milestones in my development career
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
                        
                        {/* Timeline items */}
                        <div className="space-y-12">
                            <div className="relative flex items-center">
                                <div className="flex-1 text-right pr-8">
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Senior Full Stack Developer</h3>
                                        <p className="text-purple-600 font-medium mb-2">Tech Company • 2023 - Present</p>
                                        <p className="text-gray-600">
                                            Leading development of scalable web applications using modern tech stack. 
                                            Mentoring junior developers and architecting complex systems.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                                <div className="flex-1 pl-8"></div>
                            </div>

                            <div className="relative flex items-center">
                                <div className="flex-1 pr-8"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                                <div className="flex-1 text-left pl-8">
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Stack Developer</h3>
                                        <p className="text-blue-600 font-medium mb-2">Digital Agency • 2021 - 2023</p>
                                        <p className="text-gray-600">
                                            Developed and maintained multiple client projects using Laravel, React, and Vue.js. 
                                            Improved application performance by 40% through optimization.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex items-center">
                                <div className="flex-1 text-right pr-8">
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Junior Developer</h3>
                                        <p className="text-green-600 font-medium mb-2">Startup Company • 2020 - 2021</p>
                                        <p className="text-gray-600">
                                            Started my professional journey building web applications and learning 
                                            industry best practices. Contributed to various frontend and backend projects.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                                <div className="flex-1 pl-8"></div>
                            </div>

                            <div className="relative flex items-center">
                                <div className="flex-1 pr-8"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-600 rounded-full border-4 border-white"></div>
                                <div className="flex-1 text-left pl-8">
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Computer Science Degree</h3>
                                        <p className="text-yellow-600 font-medium mb-2">University • 2016 - 2020</p>
                                        <p className="text-gray-600">
                                            Graduated with honors in Computer Science. Specialized in web development 
                                            and software engineering principles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fun Facts */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Fun Facts About Me</h2>
                        <p className="text-xl text-gray-600">
                            A few interesting things you might want to know
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">☕</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
                            <p className="text-gray-600">Cups of coffee consumed while coding</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                            <p className="text-gray-600">Projects completed successfully</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎮</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
                            <p className="text-gray-600">Years of professional experience</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📚</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
                            <p className="text-gray-600">Always learning new technologies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 gradient-bg text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        I'm always interested in new opportunities and exciting projects. 
                        Let's create something amazing together!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href={route('contact')} 
                            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Get In Touch
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank"
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}