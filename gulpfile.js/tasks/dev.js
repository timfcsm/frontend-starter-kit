const gulp        = require('gulp');
const runSequence = require('run-sequence').use(gulp);

gulp.task('dev', (cb) => {
  return runSequence(
    'build',
    'serve',
    cb
  );
});
