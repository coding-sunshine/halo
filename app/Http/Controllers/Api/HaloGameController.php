<?php

namespace App\Http\Controllers\Api;

use App\Models\Game;
use Illuminate\Http\File;
use App\Mail\GameShareMail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class HaloGameController extends Controller
{
    public function fileUpload(Request $request)
    {
        $fileName = time().'_'.$request->file->getClientOriginalName();

        $path = Storage::disk('public')->putFileAs(
            'temp/uploads', $request->file('file'), $fileName
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
            'temp/shared', $request->get('file'), $fileName
        );

        return response()->json([
            'success'=>'You have successfully shared file.',
            'file_path'=> 'storage/'.$path
        ]);
    }

    public function companyList()
    {
        $companyNames = config('app-custom-var.company_names');

        return response()->json($companyNames);
    }

    public function detailSubmit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|max:255|email',
            'company' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation' => $validator->errors()
            ]);
        }

        $companyNames = config('app-custom-var.company_names');
        $companyShortNames = config('app-custom-var.company_short_names');

        $name = $request->get('name');
        $company = $request->get('company');
        $email = $request->get('email');

        // Add Temp files to stored directory
        $profile_photo = new File($request->get('profile_photo'));
        $profileExt = pathinfo($profile_photo, PATHINFO_EXTENSION);

        $profileFileName = $name.'_'.$companyShortNames[$company].'.'.$profileExt;

        $profile_photo_path = Storage::disk('public')->putFileAs(
            'stored/uploads', $profile_photo, $profileFileName
        );

        $shared_photo = new File($request->get('shared_photo'));
        $sharedExt = pathinfo($shared_photo, PATHINFO_EXTENSION);

        $sharedFileName = $name.'_'.$companyShortNames[$company].'.'.$sharedExt;

        $shared_photo_path = Storage::disk('public')->putFileAs(
            'stored/shared', $shared_photo, $sharedFileName
        );

        // Create DB record
        $detail = [
            'name' => $name,
            'email' => $email,
            'company' => $company,
            'profile_photo' => $profile_photo_path,
            'shared_photo' => $shared_photo_path,
        ];

        $exists = Game::where('email', $email)->first();
        if($exists) {
            $exists->name = $name;
            $exists->company = $company;
            $exists->profile_photo = $profile_photo_path;
            $exists->shared_photo = $shared_photo_path;
            $exists->save();
        } else {
            Game::create($detail);
        }

        // Send Mail
        $detail['company_name'] = $companyNames[$company];
        Mail::to($email)->send(new GameShareMail($detail));

        // Remove Temp files
        Storage::disk('public')->delete(str_replace("storage/", "", $request->get('profile_photo')));
        Storage::disk('public')->delete(str_replace("storage/", "", $request->get('shared_photo')));

        return response()->json([
            'success'=>'You have successfully save and shared the file.',
        ]);
    }
}
