@extends('layouts.portfolio')

@section('content')
<!-- Hero Section -->
<section class="py-20 gradient-bg text-white">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-bold mb-6">About Me</h1>
        <p class="text-xl text-gray-200">
            Get to know the person behind the code
        </p>
    </div>
</section>

<!-- About Content -->
<section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Profile Image -->
            <div class="text-center lg:text-left">
                <div class="w-64 h-64 mx-auto lg:mx-0 mb-8 relative">
                    <div class="w-full h-full bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                        <svg class="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- About Text -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Hello! I'm a passionate developer</h2>
                <div class="space-y-4 text-gray-600 text-lg">
                    <p>
                        I'm a full-stack developer with a passion for creating innovative web applications 
                        that solve real-world problems. With over 3 years of experience in the field, 
                        I've had the privilege of working with diverse teams and technologies.
                    </p>
                    <p>
                        My journey in programming started during college when I discovered the joy of 
                        turning ideas into digital reality. Since then, I've been constantly learning 
                        and evolving with the ever-changing tech landscape.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new technologies, contributing to 
                        open-source projects, or sharing knowledge with the developer community. I believe 
                        in the power of technology to make a positive impact on people's lives.
                    </p>
                </div>

                <div class="mt-8">
                    <a href="{{ route('contact') }}" class="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                        Let's Work Together
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Skills Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p class="text-xl text-gray-600">
                Technologies and tools I work with
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Frontend -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
                <div class="space-y-3">
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">React.js</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-purple-600 h-2 rounded-full" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Vue.js</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-purple-600 h-2 rounded-full" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">JavaScript</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-purple-600 h-2 rounded-full" style="width: 95%"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Tailwind CSS</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-purple-600 h-2 rounded-full" style="width: 90%"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Backend -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
                <div class="space-y-3">
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Laravel</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 92%"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">PHP</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 88%"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Node.js</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 80%"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">MySQL</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tools & DevOps -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Tools & DevOps</h3>
                <div class="space-y-3">
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Git</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 95%"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Docker</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">AWS</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 70%"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Linux</span>
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 85%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Experience Section -->
<section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p class="text-xl text-gray-600">
                My professional journey and key milestones
            </p>
        </div>

        <div class="space-y-8">
            <!-- Experience Item 1 -->
            <div class="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-2xl">
                <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0h2a2 2 0 012 2v4.5M16 6h-4m0 0L8 6m4 0v12m-4-8.5L6 11m0 0L4 9m2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex-grow">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-900">Senior Full Stack Developer</h3>
                            <p class="text-purple-600 font-medium">Tech Solutions Inc.</p>
                        </div>
                        <span class="text-gray-500 text-sm md:text-base">2022 - Present</span>
                    </div>
                    <p class="text-gray-600 mt-3">
                        Led development of enterprise web applications using Laravel and React. 
                        Mentored junior developers and implemented best practices for code quality and performance.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <span class="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">Laravel</span>
                        <span class="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">React</span>
                        <span class="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">Team Leadership</span>
                    </div>
                </div>
            </div>

            <!-- Experience Item 2 -->
            <div class="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-2xl">
                <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex-grow">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-900">Full Stack Developer</h3>
                            <p class="text-blue-600 font-medium">Digital Innovations Ltd.</p>
                        </div>
                        <span class="text-gray-500 text-sm md:text-base">2020 - 2022</span>
                    </div>
                    <p class="text-gray-600 mt-3">
                        Developed and maintained multiple client projects using modern web technologies. 
                        Collaborated with design teams to implement pixel-perfect user interfaces.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <span class="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">Vue.js</span>
                        <span class="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">PHP</span>
                        <span class="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">MySQL</span>
                    </div>
                </div>
            </div>

            <!-- Experience Item 3 -->
            <div class="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-2xl">
                <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex-grow">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-900">Junior Developer</h3>
                            <p class="text-green-600 font-medium">StartUp Studios</p>
                        </div>
                        <span class="text-gray-500 text-sm md:text-base">2019 - 2020</span>
                    </div>
                    <p class="text-gray-600 mt-3">
                        Started my professional journey building web applications and learning best practices. 
                        Gained experience in agile development and modern web technologies.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <span class="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">JavaScript</span>
                        <span class="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">HTML/CSS</span>
                        <span class="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">Git</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Education Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p class="text-xl text-gray-600">
                Academic background and continuous learning
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-lg">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Bachelor of Computer Science</h3>
                <p class="text-purple-600 font-medium mb-2">University of Technology</p>
                <p class="text-gray-500 mb-4">2015 - 2019</p>
                <p class="text-gray-600">
                    Graduated with honors. Specialized in software engineering and web development. 
                    Active in programming clubs and hackathons.
                </p>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-lg">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Certifications</h3>
                <p class="text-blue-600 font-medium mb-2">Various Platforms</p>
                <p class="text-gray-500 mb-4">2019 - Present</p>
                <div class="space-y-2 text-gray-600">
                    <p>• AWS Certified Developer Associate</p>
                    <p>• Laravel Certification</p>
                    <p>• React Developer Certification</p>
                    <p>• Agile Project Management</p>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection