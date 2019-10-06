<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content={{ csrf_token() }}>
        <title>Dashboard</title>
        <link 
            rel="stylesheet" 
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
            crossorigin="anonymous"
        />
        <link
            href="{{ mix('css/dashboard.css') }}"
            rel="stylesheet"
            type="text/css"
        />
    </head>
    <body>
        <div id="dashboard"></div>
        <script src="{{ mix('js/dashboard.js') }}"></script>
    </body>
</html>
