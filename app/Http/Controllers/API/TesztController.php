<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\teszt;

class TesztController extends Controller
{
    public function index(){
        $teszt = response()->json(teszt::with('kategoria')->get());
        return $teszt;
    } 

    public function teszt($id)
    {
        $teszt = teszt::where('kategorianev', $id)->get();
        return response()->json($teszt);
    }

}
