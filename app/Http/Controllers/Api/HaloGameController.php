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
            'success'=>'You have successfully uploaded file.',
            'file_path'=> 'storage/'.$path
        ]);
    }

    public function fileShare(Request $request)
    {
        $fileName = time().'_shared.jpg';

        $path = Storage::disk('public')->putFileAs(
            'shared', $request->get('file'), $fileName
        );

        return response()->json([
            'success'=>'You have successfully shared file.',
            'file_path'=> 'storage/'.$path
        ]);
    }
}
