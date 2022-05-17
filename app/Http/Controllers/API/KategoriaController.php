<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\kategoria;

class KategoriaController extends Controller
{
    public function index(){
        return response()->json(kategoria::all());
    }
}
