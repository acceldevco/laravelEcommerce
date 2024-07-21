<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Details extends Model
{
    use HasFactory;
    public function orders(): HasMany
    {
        return  $this->HasMany(Orders::class, 'id');
    }
    
    public function users(): HasOne
    {
        return  $this->HasOne(User::class, 'id');
    }
}
