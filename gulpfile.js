//Gulp Dependencies
var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify_css = require('gulp-minify-css');
var prettify = require('gulp-prettify');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var pngquant = require('imagemin-pngquant');
var del = require("del");
//Tasks
gulp.task('clean', function(cb) {
    del(['build/*'], cb);
});
gulp.task('build_js_components', ['clean'], function() {
    var js_files = ["bower_components/jquery/dist/jquery.js", 'bower_components/materialize/dist/js/materialize.min.js', 'js_common/**.js'];
    gulp.src(js_files).pipe(concat('components.js')).pipe(uglify({
        mangle: false
    })).pipe(gulp.dest('build'))
});
gulp.task('build_css_components', ['clean'], function() {
    return gulp.src(['bower_components/materialize/dist/css/materialize.min.css', 'css/*.css']).pipe(concat('styles.css')).pipe(minify_css({
        keepBreaks: true
    })).pipe(gulp.dest('build'))
});
gulp.task('move_fonts', ['clean'], function() {
    gulp.src('bower_components/materialize/dist/font/**').pipe(gulp.dest('build/font'));
});
gulp.task('prettify_and_move_html', ['clean'], function() {
    gulp.src('html/*.html').pipe(prettify({
        indent_size: 2
    })).pipe(gulp.dest('build'))
});
gulp.task('optimize_images', ['clean'], function() {
    return gulp.src('img/**').pipe(imagemin({
        progressive: true,
        svgoPlugins: [{
            removeViewBox: false
        }],
        use: [pngquant()]
    })).pipe(gulp.dest('build/img'));
});
gulp.task('move_standalone_js_files', ['clean'], function() {
    return gulp.src('js_solo/*.js').pipe(uglify()).pipe(gulp.dest('build/js'));
});
gulp.task('move_other_files', ['clean'], function() {
    return gulp.src('other/**').pipe(gulp.dest('build'));
});
gulp.task('watch', function () {
    watch('html/*.html', batch(function (events, done) {
        gulp.start('default', done);
    }));
    watch('img/**', batch(function (events, done) {
        gulp.start('optimize_images', done);
    }));
    watch('js_solo/**', batch(function (events, done) {
        gulp.start('move_standalone_js_files', done);
    }));
});
// Default Task
gulp.task('default', ['clean', 'build_js_components', 'build_css_components', 'move_fonts', 'prettify_and_move_html', 'optimize_images', 'move_standalone_js_files', 'move_other_files']);