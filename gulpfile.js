var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var print = require('gulp-print');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var bump = require('gulp-bump');
var injectVersion = require(__dirname + '/assets/external/js/util/gulp-inject-version');

var paths = {
  init: 'assets/external/js/init/**/*.js',
  features: 'assets/external/js/features/**/*.js',
  app: 'app/**/**/*.js',
  css: ['assets/external/css/**/*.css', 'assets/css/**/*.scss'],
  html: 'dev/index.html'
};

// To maintain all tasks easily, they are put into variables below
var watchBuild = ['init', 'features', 'app', 'sass', 'inject', 'watch'];
var jsTasks = ['init', 'features', 'app'];
var cssTasks = ['sass'];
var minifyTasks = ['minifyJS', 'minifyCSS'];

gulp.task('init', function(done) {
  gulp.src(paths.init)
    .pipe(concat('init.min.js'))
    .pipe(gulp.dest('assets/compressed/'))
    .on('end', done);
});

gulp.task('features', function(done) {
  gulp.src(paths.features)
    .pipe(concat('features.min.js'))
    .pipe(gulp.dest('assets/compressed/'))
    .on('end', done);
});

gulp.task('app', function(done) {
  gulp.src(paths.app)
    .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/compressed/'))
    .on('end', done);
});

gulp.task('sass', function(done) {
  gulp.src(paths.css)
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('styles.min.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/compressed/'))
    .on('end', done);
});

// Because uglifying is slow we only want to do it when neccessary (prod)
gulp.task('minifyJS', jsTasks, function(done) {
  gulp.src('assets/compressed/**/*.min.js')
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest('assets/compressed/'))
    .on('end', done);
});

gulp.task('minifyCSS', cssTasks, function(done) {
  gulp.src('assets/compressed/**/*.min.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('assets/compressed/'))
    .on('end', done);
});

// *******  Versioning - auto increment patch version of package.json on watch/file-change and update it index.html
// patch the version
gulp.task('bump', function(done){
  gulp.src('package.json')
  .pipe(bump())
  .pipe(gulp.dest(''))
  .on('end', done);
});

// inject:
gulp.task('inject', ['bump'], function (done) {
  gulp.src(paths.html)
  .pipe(injectVersion({
    package_file: 'package.json'
  }))
  .pipe(gulp.dest(''))
  .on('end', done);
});
// *******  Versioning End


// Run 'gulp' during development
gulp.task('default', watchBuild);

// Run 'gulp prod' to minify files for production
// Usually only neccessary to run from production server
gulp.task('prod', minifyTasks);

gulp.task('watch', function() {
  gulp.watch(paths.init, ['init', 'inject']);
  gulp.watch(paths.features, ['features', 'inject']);
  gulp.watch(paths.app, ['app', 'inject']);
  gulp.watch(paths.css, ['sass', 'inject']);
  gulp.watch(paths.html, ['inject']);
});