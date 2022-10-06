const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.webpackConfig({
//     stats: {
//         children: true,
//     },
// });

mix.js('resources/js/app.js', 'public/js').version()
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

mix.copy('resources/css/main.css', 'public/css/main.css');
mix.copy('resources/css/grid.css', 'public/css/');

