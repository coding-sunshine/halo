@extends('layouts.gameLayout')
@section('content')
<div class="halo_intro"> <img src="{{ asset('images/halo_bg.png') }}">
    <div class="halo_intro_info">
        <h1>
            Get the Halo. <br />
            Be the Value Champion.
        </h1>
        <p>Catch the halo, send us the picture </br> at xyz and win the Lucky draw!</p>

        <div class="ring_section">
            <img src="{{ asset('images/static_ring.png') }}">

            <div class="glow_ring" style="display: none;">
                <img src="{{ asset('images/glow_ring.png') }}">
            </div>

            <div class="moving_ring">
                <img src="{{ asset('images/static_ring.png') }}">
            </div>

        </div>

        <div class="upload_avtar margin0">


            <div class="avtar_img">
                <img src="{{ asset('images/avtar.png') }}">
            </div>

        </div>

        <a href="{{ route('halo.congratulation') }}" class="custom-button"><span>Click Here to Catch the Halo</span></a>

    </div>
</div>
@endsection
