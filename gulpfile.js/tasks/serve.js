const gulp = require('gulp');
const bs   = require('browser-sync').get('main');

gulp.task('serve', function (callback) {
  bs.init({
            server: 'public'
          });
});
