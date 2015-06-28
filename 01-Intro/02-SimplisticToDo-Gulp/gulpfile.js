/* jshint node:true, jquery:false */
'use strict';

var gulp = require('gulp');
var $$ = require('gulp-load-plugins')({lazy: true});
var del = require('del');
var path = require('path');
var karma = require('karma').server;
var protractor = $$.protractor.protractor;
var runSequence = require('run-sequence');

gulp.task('clean', function (cb) {
    del(['dist/*'], cb);
});

gulp.task('analyze', function () {
    var basePath = path.resolve('./src/app/');
    $$.util.log('Analyzing sources in ' + basePath);

    return gulp.src([basePath + '/**/*.js', '!./Content/bower_components/**/*'])
        .pipe($$.jshint())
        .pipe($$.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($$.jshint.reporter('fail'));
});

gulp.task('test', function() {
    return karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        //reporters: ['progress', 'coverage', 'junit']
        reporters: ['progress', 'coverage']
    });
});

gulp.task('serve', function() {
    //gulp.src('src')
    gulp.src('dist')
        .pipe($$.webserver({
            livereload: true,
            directoryListing: false,
            open: 'index.html'
        }));
});

gulp.task('e2e', function() {

    runSequence('serve',
        function() {
            gulp.src(["./src/e2e/**/*Spec.js"])
                .pipe(protractor({
                    configFile: "./src/e2e/protractor.conf.js",
                    args: ['--baseUrl', 'http://127.0.0.1:8000']
                }))
                .on('error', function (e) {
                    throw e
                })
                .pipe($$.exit());
        });
});

gulp.task('release', ['clean'], function(){

    var assets = $$.useref.assets();
    var jsFilter = $$.filter('**/*.js');
    var cssFilter = $$.filter('**/*.css');
    var htmlFilter = $$.filter('**/*.html');

    return gulp.src('./src/index.html')
        .pipe(assets)               // Concatenate asset-groups with gulp-useref
        .pipe($$.debug({title: 'Asset Files:'}))
        .pipe(jsFilter)
        .pipe($$.uglify())             // Minify all javascript sources
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($$.minifyCss())          // Minify CSS sources
        .pipe(cssFilter.restore())
        .pipe($$.rev())                // Rename the concatenated files with a hash-prefix
        .pipe(assets.restore())
        .pipe($$.useref())             // Replace the original references in the html with the concatenated and processed resources by usemin
        .pipe($$.revReplace())         // Replace the usemin generated resources with the reved resources
        .pipe(htmlFilter)
        .pipe($$.htmlmin({removeComments: true}))  // Remove comments from html
        .pipe(htmlFilter.restore())
        .pipe($$.debug({title: 'Processed output File: '}))
        .pipe(gulp.dest('dist/'));
});

//gulp.task('default', ['analyze', 'release']); // Dependencies are run in parallel, so an error in analyze does not stop the build
gulp.task('default', function(){
    runSequence('analyze', 'release');
});

gulp.task('watch', function () {
    gulp.watch(['./src/index.html', './src/app/**/*.js'], ['default']);
});
