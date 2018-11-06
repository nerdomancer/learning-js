"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect"); // Run a dev server
var open = require("gulp-open"); // Open an URL in a browser
var browserify = require("browserify"); // Bundles js
var reactify = require("reactify"); // Transforms React jsx to js
var source = require("vinyl-source-stream"); // Use conventional text streams with Gulp
var concat = require("gulp-concat"); // Concatenates files
var eslint = require("gulp-eslint"); // Lint js and jsx files

var config = {
    port : 9005,
    devBaseUrl : 'http://localhost',
    paths : {
        html : './src/*.html',
        js : './src/**/*.js',
        images : './src/images/*',
        favicon : './src/favicon.ico',
        css : [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        mainJs : './src/main.js',
        dist : './dist'
    }
}

// Start a local dev server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({ 
            app : 'firefox',
            uri : config.devBaseUrl + ':' + config.port + '/' 
        }));
});

gulp.task('html', function () {
   gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
})

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function () {
   gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());
        
    // publish favicon
    gulp.src(config.paths.favicon)
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('eslint', function () {
    return gulp.src(config.paths.js)
        .pipe(eslint({ config : 'eslint.config.json' }))
        .pipe(eslint.format());
});

gulp.task('watch', function () {
   gulp.watch(config.paths.html, ['html']); 
   gulp.watch(config.paths.js, ['js', 'eslint']); 
   gulp.watch(config.paths.images, ['images']); 
});

gulp.task('default', ['html', 'images', 'js', 'eslint', 'css', 'open', 'watch']);