<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::published()
            ->latest()
            ->with('user')
            ->paginate(10);

        return Inertia::render('Blog/Index', [
            'blogs' => $blogs
        ]);
    }

    public function show(Blog $blog)
    {
        // Ensure the blog is published or redirect
        if (!$blog->is_published || ($blog->published_at && $blog->published_at->isFuture())) {
            abort(404);
        }

        return Inertia::render('Blog/Show', [
            'blog' => $blog->load('user')
        ]);
    }
}
