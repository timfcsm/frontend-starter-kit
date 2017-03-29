
const config = require("../config");

const gulp       = require('gulp'),
      $          = require('gulp-load-plugins')(),
      browserify = require('browserify'),
      babelify   = require('babelify'),
      buffer     = require('vinyl-buffer'),
      source     = require('vinyl-source-stream');


gulp.task('js', function (callback) {

  const bundler = browserify({
                               entries: config.paths.js + 'main.js',
                               debug: !config.prod
                             });
  bundler.transform(babelify.configure({
                                         presets: ["es2015"]
                                       }));

  return bundler.bundle()
    .pipe($.plumber({
                      errorHandler: $.notify.onError(err => ({
                        title  : 'Scripts',
                        message: err.message
                      }))
                    }))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.if(config.prod, $.uglify()))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(options.dst))
    .pipe(options.bs.stream());
});
