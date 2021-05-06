<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any?}', function () {
    return view('welcome');
});

// Route::get('halo', 'HaloGameController@index')->name('halo.index');
// Route::get('halo/game', 'HaloGameController@game')->name('halo.game');
// Route::get('halo/play', 'HaloGameController@play')->name('halo.play');
// Route::get('halo/congratulation', 'HaloGameController@congratulation')->name('halo.congratulation');
