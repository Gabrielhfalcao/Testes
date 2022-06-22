<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tabela extends Model
{
    protected $fillable = ['name', 'description'];
    protected $guarded = ['id', 'created_at', 'update_at'];
    protected $table = 'tabela1';
}
