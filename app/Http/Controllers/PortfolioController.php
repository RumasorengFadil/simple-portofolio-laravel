<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PortfolioController extends Controller
{
    public function home()
    {
        $featuredProjects = Project::featured()->ordered()->take(3)->get();
        return view('portfolio.home', compact('featuredProjects'));
    }

    public function about()
    {
        return view('portfolio.about');
    }

    public function projects()
    {
        $projects = Project::ordered()->get();
        return view('portfolio.projects', compact('projects'));
    }

    public function projectShow($id)
    {
        $project = Project::findOrFail($id);
        return view('portfolio.project-detail', compact('project'));
    }

    public function contact()
    {
        return view('portfolio.contact');
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
