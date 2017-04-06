const gulp   = require('gulp');
const $      = require('gulp-load-plugins')();
const cached = require('gulp-cached');
const config = require('../config');
const bs     = require('browser-sync').get('main');


gulp.task('assets', () => {
  return gulp.src([`${config.paths.assets}/**/*`])
    .pipe($.plumber({
                      errorHandler: $.notify.onError(err => ({
                        title  : 'Assets',
                        message: err.message
                      }))
                    }))
    .pipe(cached('assets'))
    .pipe($.if(!config.prod, $.revReplace({
                                            manifest: gulp.src('manifest/assets.json', {allowEmpty: true})
                                          })))
    .pipe($.image({
                    pngquant      : true,
                    optipng       : true,
                    zopflipng     : false,
                    jpegRecompress: false,
                    jpegoptim     : true,
                    mozjpeg       : true,
                    gifsicle      : true,
                    svgo          : {
                      disable: ['cleanupIDs']
                    },
                    concurrent    : 10
                  }))
    .pipe($.size({ title: 'ASSETS', gzip: config.prod }))
    .pipe(gulp.dest(config.paths.assets_dist))
    .pipe(bs.stream());
});
