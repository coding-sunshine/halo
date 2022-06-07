<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('fileUpload','Api\HaloGameController@fileUpload');
Route::post('fileShare','Api\HaloGameController@fileShare');
Route::get('companyList','Api\HaloGameController@companyList');
Route::post('detailSubmit','Api\HaloGameController@detailSubmit');
