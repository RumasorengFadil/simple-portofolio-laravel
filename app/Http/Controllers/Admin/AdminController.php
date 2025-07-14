<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Project;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $analytics = [
            'total_blogs' => Blog::count(),
            'published_blogs' => Blog::where('is_published', true)->count(),
            'total_projects' => Project::count(),
            'total_contacts' => Contact::count(),
            'recent_blogs' => Blog::latest()->take(5)->get(['id', 'title', 'created_at', 'is_published']),
            'recent_contacts' => Contact::latest()->take(5)->get(['id', 'name', 'email', 'created_at']),
        ];

        return Inertia::render('Admin/Dashboard', [
            'analytics' => $analytics
        ]);
    }
}
