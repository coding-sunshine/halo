<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class HaloGameController extends Controller
{
    public function fileUpload(Request $request)
    {
        $fileName = time().'_'.$request->file->getClientOriginalName();

        $path = Storage::disk('public')->putFileAs(
            'uploads', $request->file('file'), $fileName
        );

        return response()->json([
            'success'=>'You have successfully upload file.',
            'file_path'=> 'storage/'.$path
        ]);
    }
}
