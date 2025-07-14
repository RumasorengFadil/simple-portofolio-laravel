<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function home()
    {
        $featuredProjects = Project::featured()->ordered()->take(3)->get();
        return Inertia::render('Portfolio/Home', [
            'featuredProjects' => $featuredProjects
        ]);
    }

    public function about()
    {
        return Inertia::render('Portfolio/About');
    }

    public function projects()
    {
        $projects = Project::ordered()->get();
        
        return Inertia::render('Portfolio/Projects', [
            'projects' => $projects
        ]);
    }

    public function projectShow($id)
    {
        $project = Project::findOrFail($id);
        
        return Inertia::render('Portfolio/ProjectDetail', [
            'project' => $project
        ]);
    }

    public function contact()
    {
        return Inertia::render('Portfolio/Contact');
    }

    public function contactStore(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Contact::create($request->all());

        // Optional: Send email notification
        // Mail::to('your@email.com')->send(new ContactMail($request->all()));

        return redirect()->back()->with('success', 'Thank you for your message! I\'ll get back to you soon.');
    }

    public function resume()
    {
        // Return resume download or view
        return response()->download(public_path('files/resume.pdf'));
    }
}
