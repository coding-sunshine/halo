@extends('layouts.gameLayout')
@section('content')
<div class="halo_intro"> <img src="{{ asset('images/halo_bg.png') }}">
    <div class="halo_intro_info">
        <h1>
            Get the Halo. <br />
            Be the Value Champion.
        </h1>
        <p>Catch the halo, send us the picture </br> at xyz and win the Lucky draw!</p>

        <div class="upload_avtar">
            <div class="avtar_img"></div>

        </div>

        <a class="custom-button" href="{{ route('halo.play') }}"><span>Upload Picture</span></a>

    </div>
</div>
@endsection
