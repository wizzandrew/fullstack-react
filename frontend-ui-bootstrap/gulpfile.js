'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass')(require('node-sass'));
let browserSync = require('browser-sync');

function _sass() {
    return gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
}

function _browserSync(cb) {
    var files = [
        './*.html',
        './*css/*.scss',
        './js/*.js',
        './img/*.{png,jpg,gif}'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });

    //
    cb();
}

function watch() {
    gulp.watch('./css/*.scss', _sass);
}


// Default task
let build = gulp.series(_browserSync, gulp.parallel(watch));

// Exports
exports._browserSync = _browserSync;
exports._sass = sass;
exports.watch = watch;

// Default task
exports.default = build;
