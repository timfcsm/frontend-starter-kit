const $      = require('gulp-load-plugins')();
const gulp   = require('gulp');
const config = require('../config');
const path = require('path');


gulp.task('pug', () => {
  return gulp.src(path.join(config.paths.pug, '*.pug'))
    .pipe($.plumber({
                      errorHandler: $.notify.onError(err => ({
                        title  : 'Pug',
                        message: err.message
                      }))
                    }))
    //.pipe($.cached('pug'))
    .pipe($.pug({
                  pretty: true
                }))
    .pipe(gulp.dest(config.paths.views))
    .pipe($.size({ title: 'PUG', gzip: false }));
});
