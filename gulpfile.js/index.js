const gulp = require('gulp');

require('./tasks/watch');
require('./tasks/css');
require('./tasks/svg');
require('./tasks/js');
require('./tasks/assets');
require('./tasks/pug');
require('./tasks/serve');
require('./tasks/dev');

gulp.task('build', ['css', 'svg', 'js', 'pug', 'assets']);

gulp.task('default', ['build']);
