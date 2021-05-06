<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HaloGameController extends Controller
{
    public function index()
    {
        return view('game.index');
    }

    public function game()
    {
        return view('game.game');
    }

    public function play()
    {
        return view('game.play');
    }

    public function congratulation()
    {
        return view('game.congratulations');
    }
}
