/* global require: true */
'use strict';

var gulp          = require('gulp'),
    source        = require('vinyl-source-stream'),
    browserify    = require('browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    babelify = require('babelify');

gulp.task('build', function () {
  browserify({
    entries: './app/js/app.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('all.js'))
  .pipe(gulp.dest('dist'));
});

/*
gulp.task('babel', function () {
    return gulp.src('app/js/app.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
*/