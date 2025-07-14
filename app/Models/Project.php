<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'technologies',
        'image',
        'demo_url',
        'github_url',
        'featured',
        'order'
    ];

    protected $casts = [
        'featured' => 'boolean',
    ];

    public function getTechnologiesArrayAttribute()
    {
        return explode(',', $this->technologies);
    }

    public function scopeFeatured($query)
    {
        return $query->where('featured', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc')->orderBy('created_at', 'desc');
    }
}
