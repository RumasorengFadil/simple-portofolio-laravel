@extends('layouts.portfolio')

@section('content')
<!-- Hero Section -->
<section class="py-20 gradient-bg text-white">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-bold mb-6">My Projects</h1>
        <p class="text-xl text-gray-200">
            A showcase of my creative work and technical expertise
        </p>
    </div>
</section>

<!-- Projects Grid -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        @if($projects->count() > 0)
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach($projects as $project)
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    @if($project->image)
                        <div class="h-48 bg-gray-200 overflow-hidden">
                            <img src="{{ $project->image }}" alt="{{ $project->title }}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        </div>
                    @else
                        <div class="h-48 bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">
                            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                        </div>
                    @endif
                    
                    <div class="p-6">
                        @if($project->featured)
                            <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-3">
                                ⭐ Featured
                            </div>
                        @endif
                        
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ $project->title }}</h3>
                        <p class="text-gray-600 mb-4 line-clamp-3">{{ $project->description }}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-4">
                            @foreach($project->technologies_array as $tech)
                                <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{{ trim($tech) }}</span>
                            @endforeach
                        </div>
                        
                        <div class="flex space-x-3">
                            @if($project->demo_url)
                                <a href="{{ $project->demo_url }}" target="_blank" class="flex-1 bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                                    Live Demo
                                </a>
                            @endif
                            @if($project->github_url)
                                <a href="{{ $project->github_url }}" target="_blank" class="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                    GitHub
                                </a>
                            @endif
                            <a href="{{ route('projects.show', $project->id) }}" class="flex-1 bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                                Details
                            </a>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        @else
            <div class="text-center py-20">
                <svg class="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">No Projects Yet</h3>
                <p class="text-gray-600">Projects will be displayed here once they are added.</p>
            </div>
        @endif
    </div>
</section>
@endsection