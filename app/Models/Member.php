<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = [
        'image_path',
        'name',
        'position',
        'phone_number',
        'is_active',
        'category',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}