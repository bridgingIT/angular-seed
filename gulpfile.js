var gulp = require('gulp'),
    buildConfig = require('./config/build.config'),
    concat = require('gulp-concat'),
    footer = require('gulp-footer'),
    header = require('gulp-header'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    karma = require('karma').server;

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('build', ['test'], function () {
    return gulp.src(buildConfig.jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(jshint.reporter('fail'))
        .pipe(header(buildConfig.closureStart))
        .pipe(footer(buildConfig.closureEnd))
        .pipe(concat(buildConfig.filename))
        .pipe(header(buildConfig.banner))
        .pipe(gulp.dest(buildConfig.dist))
        .pipe(uglify())
        .pipe(header(buildConfig.banner))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest(buildConfig.dist));
});


gulp.task('default', ['build']);