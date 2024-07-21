<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Orders extends Model
{
    use HasFactory;
    public function products(): HasMany
    {
        return  $this->HasMany(Products::class,'id','product_id');
    }
    public function detail(): HasOne
    {
        return  $this->HasOne(Details::class,'id','user_id');
    }
}
