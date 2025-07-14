@extends('layouts.portfolio')

@section('content')
<!-- Hero Section -->
<section class="py-20 gradient-bg text-white">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-bold mb-6">Get In Touch</h1>
        <p class="text-xl text-gray-200">
            Have a project in mind? Let's work together to bring your ideas to life
        </p>
    </div>
</section>

<!-- Contact Content -->
<section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
                
                @if (session('success'))
                    <div class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        {{ session('success') }}
                    </div>
                @endif

                @if ($errors->any())
                    <div class="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        <ul class="list-disc pl-5">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <form action="{{ route('contact.store') }}" method="POST" class="space-y-6">
                    @csrf
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <input type="text" 
                                   id="name" 
                                   name="name" 
                                   value="{{ old('name') }}"
                                   required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input type="email" 
                                   id="email" 
                                   name="email" 
                                   value="{{ old('email') }}"
                                   required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors">
                        </div>
                    </div>
                    
                    <div>
                        <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                            Subject *
                        </label>
                        <input type="text" 
                               id="subject" 
                               name="subject" 
                               value="{{ old('subject') }}"
                               required
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors">
                    </div>
                    
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                            Message *
                        </label>
                        <textarea id="message" 
                                  name="message" 
                                  rows="6" 
                                  required
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none">{{ old('message') }}</textarea>
                    </div>
                    
                    <button type="submit" 
                            class="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                        Send Message
                    </button>
                </form>
            </div>

            <!-- Contact Info -->
            <div class="space-y-8">
                <!-- Contact Details -->
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm text-gray-600">Email</p>
                                <p class="text-gray-900 font-medium">your@email.com</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm text-gray-600">Phone</p>
                                <p class="text-gray-900 font-medium">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm text-gray-600">Location</p>
                                <p class="text-gray-900 font-medium">Your City, Country</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Social Links -->
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <a href="#" class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg class="w-6 h-6 text-gray-800 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span class="text-gray-900 font-medium">GitHub</span>
                        </a>
                        
                        <a href="#" class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg class="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span class="text-gray-900 font-medium">LinkedIn</span>
                        </a>
                        
                        <a href="#" class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg class="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                            <span class="text-gray-900 font-medium">Twitter</span>
                        </a>
                        
                        <a href="#" class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg class="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169-.234-.48-.412-.861-.412-.861 0-1.483.554-1.483 1.528v.008c0 .662.516 1.528 1.405 1.528.503 0 .861-.234.861-.412v-.008c0-.529-.398-.936-.922-1.232zM12 5.25c3.717 0 6.75 3.033 6.75 6.75s-3.033 6.75-6.75 6.75-6.75-3.033-6.75-6.75S8.283 5.25 12 5.25zm0 .562c-3.379 0-6.188 2.809-6.188 6.188S8.621 18.188 12 18.188s6.188-2.809 6.188-6.188S15.379 5.812 12 5.812z"/>
                            </svg>
                            <span class="text-gray-900 font-medium">Portfolio</span>
                        </a>
                    </div>
                </div>

                <!-- Availability -->
                <div class="bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded-2xl text-white">
                    <h3 class="text-2xl font-bold mb-4">Available for Projects</h3>
                    <p class="text-purple-100 mb-6">
                        I'm currently accepting new projects and would love to hear about your ideas.
                    </p>
                    <div class="flex items-center text-green-300">
                        <div class="w-3 h-3 bg-green-300 rounded-full mr-3 animate-pulse"></div>
                        <span class="font-medium">Available Now</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p class="text-xl text-gray-600">
                Common questions about working together
            </p>
        </div>

        <div class="space-y-6" x-data="{ openItem: 0 }">
            <div class="border border-gray-200 rounded-lg">
                <button @click="openItem = openItem === 0 ? null : 0" 
                        class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-900">What services do you offer?</span>
                    <svg class="w-5 h-5 text-gray-500 transform transition-transform" 
                         :class="{ 'rotate-180': openItem === 0 }" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div x-show="openItem === 0" x-cloak class="px-6 pb-4">
                    <p class="text-gray-600">
                        I offer full-stack web development services including frontend development with React/Vue.js, 
                        backend development with Laravel/Node.js, database design, API development, and deployment services.
                    </p>
                </div>
            </div>

            <div class="border border-gray-200 rounded-lg">
                <button @click="openItem = openItem === 1 ? null : 1" 
                        class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-900">What's your typical project timeline?</span>
                    <svg class="w-5 h-5 text-gray-500 transform transition-transform" 
                         :class="{ 'rotate-180': openItem === 1 }" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div x-show="openItem === 1" x-cloak class="px-6 pb-4">
                    <p class="text-gray-600">
                        Project timelines vary based on complexity and requirements. A simple website typically takes 2-4 weeks, 
                        while complex web applications can take 2-6 months. I provide detailed timelines during the planning phase.
                    </p>
                </div>
            </div>

            <div class="border border-gray-200 rounded-lg">
                <button @click="openItem = openItem === 2 ? null : 2" 
                        class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-900">Do you work with startups?</span>
                    <svg class="w-5 h-5 text-gray-500 transform transition-transform" 
                         :class="{ 'rotate-180': openItem === 2 }" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div x-show="openItem === 2" x-cloak class="px-6 pb-4">
                    <p class="text-gray-600">
                        Absolutely! I love working with startups and understand their unique needs for rapid development, 
                        scalability, and cost-effective solutions. I offer flexible engagement models to fit startup budgets.
                    </p>
                </div>
            </div>

            <div class="border border-gray-200 rounded-lg">
                <button @click="openItem = openItem === 3 ? null : 3" 
                        class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-900">What's your communication style?</span>
                    <svg class="w-5 h-5 text-gray-500 transform transition-transform" 
                         :class="{ 'rotate-180': openItem === 3 }" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div x-show="openItem === 3" x-cloak class="px-6 pb-4">
                    <p class="text-gray-600">
                        I believe in transparent and frequent communication. I provide regular updates on project progress, 
                        respond promptly to questions, and am available for video calls to discuss complex requirements.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection