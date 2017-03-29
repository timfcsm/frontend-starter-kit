const config = require("../config");

const gulp       = require('gulp');
const $          = require('gulp-load-plugins')();
const browserify = require('browserify');
const babelify   = require('babelify');
const buffer     = require('vinyl-buffer');
const source     = require('vinyl-source-stream');
const bs         = require('browser-sync').get('main');


gulp.task('js', function () {

  const bundler = browserify({
                               entries: config.paths.js + '/main.js',
                               debug  : !config.prod
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
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.if(config.prod, $.uglify()))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.paths.js_dist))
    .pipe(bs.stream());
});
