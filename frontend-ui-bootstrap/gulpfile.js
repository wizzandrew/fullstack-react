'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass')(require('node-sass'));
let browserSync = require('browser-sync');
let del = require('del');
let imagemin = require('gulp-imagemin');
let uglify = require('gulp-uglify');
let usemin = require('gulp-usemin');
let rev = require('gulp-rev');
let cleanCss = require('gulp-clean-css');
let flatmap = require('gulp-flatmap');
let htmlmin = require('gulp-htmlmin');

function _sass() {
    return gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
}

function _watch() {
    gulp.watch('./css/*.scss', _sass);
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

function _clean() {
    return del(['deploy']);
}

function _copyFonts(cb) {
    gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./deploy/fonts'));

    //
    cb();
}

function _imagemin() {
    return gulp.src('img/*.{png,jpg,gif}')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('deploy/img'));
}


// Takes html files, looks up .css + .js files
// Combines, concatenates, minifies, uglifies
// Replaces files with the resulting file in the "deploy" folder
// -flatmap helps to process each .html file parallel with same set of operations
// -rev adds 24bit string to the file name
function _usemin() {
    return gulp.src('./*.html')
        .pipe(flatmap(function (stream, file) {
            return stream
                .pipe(usemin({
                    css: [rev()],
                    html: [function () { return htmlmin({ collapseWhitespace: true }) }],
                    js: [uglify(), rev()],
                    inlinejs: [uglify()],
                    inlinecss: [cleanCss(), 'concat']
                }))
        }))
        .pipe(gulp.dest('deploy/'));
}


// Default task
let def = gulp.series(_browserSync, gulp.parallel(_watch));
let build = gulp.series(_clean, gulp.parallel(_copyFonts, _imagemin, _usemin));

// Exports
exports._browserSync = _browserSync;
exports._sass = _sass;
exports._watch = _watch;
exports._clean = _clean;
exports._copyFonts = _copyFonts;
exports._imagemin = _imagemin;
exports._usemin = _usemin;
exports.build = build;


// Default task
exports.default = def;
