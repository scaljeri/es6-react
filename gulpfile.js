/* global require: true */
'use strict';

var gulp          = require('gulp'),
    to5Browserify = require('6to5-browserify'),
    source        = require('vinyl-source-stream'),
    browserify    = require('browserify');

gulp.task("default", function () {
  browserify({ debug: true })
    .transform(to5Browserify)
    .require('./app/js/test.jsx', { entry: true })
    .bundle()
    .pipe(source('all.js'))
    .pipe(gulp.dest('./dist'));
}); 
