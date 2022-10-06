<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/grid.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">

    <script>
        (function () {
            window.Laravel = {
                csrf_token: '{{ csrf_token() }}' 
            }
        })();
    </script>
</head>
<body>
    <div id="App">
        @if(Auth::user())
            @if(Auth::user()->role->permission != null)
                <mainapp :user="{{Auth::user()}}" :permissions="{{Auth::user()->role->permission}}"></mainapp>
            @else
                <mainapp :user="{{Auth::user()}}" :permissions='null'></mainapp>
            @endif
        @else
            <mainapp :user="false"></mainapp>
        @endif
    </div>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
