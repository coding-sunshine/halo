<!DOCTYPE html>
<html lang="en-US" xmlns:fb="http://ogp.me/ns/fb#" xmlns:addthis="http://www.addthis.com/help/api-spec">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0;">
    <title>Halo</title>
    <!-- CSS -->
    <link type="text/css" href="{{ asset('css/style.css') }}" rel="stylesheet">
    <!-- CSS -->
    @yield('page-styles')
</head>

<body>
    @yield('content')

    @yield('page-scripts')

    @stack('scripts')
</body>
</html>
