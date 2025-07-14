<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'subject',
        'message',
        'read'
    ];

    protected $casts = [
        'read' => 'boolean',
    ];

    public function scopeUnread($query)
    {
        return $query->where('read', false);
    }

    public function markAsRead()
    {
        $this->update(['read' => true]);
    }
}
