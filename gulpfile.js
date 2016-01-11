var gulp = require('gulp');
var concat = require('gulp-concat');

// List of .js libs.
var jsLibFiles = [
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/angular2/bundles/http.dev.js',
    'node_modules/material-design-lite/material.min.js'
];

// List of .css libs.
var cssLibFiles = [
    'node_modules/material-design-lite/material.min.css',
    'app/styles/demo.css'
];

// Concat all .js libs.
gulp.task('js', function() {
    return gulp.src(jsLibFiles)
               .pipe(concat('angular2crud.js'))
               .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
    return gulp.src(cssLibFiles)
               .pipe(concat('angular2crud.css'))
               .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js', 'css']);