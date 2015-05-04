/* global require: true */
'use strict';

var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
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

var karmaParseConfig = require('karma/lib/config').parseConfig,
    karma = require('karma'),
    gutil = require('gulp-util');

gulp.task('test', function () {
    var log = gutil.log,
        colors = gutil.colors,
        server = karma.server,
        config = karmaParseConfig(__dirname + '/test/karma.conf.js', {});

    server.start(config, function (exitCode) {
        log('Karma has exited with ' + colors.red(exitCode));
        process.exit(exitCode);
    });
});