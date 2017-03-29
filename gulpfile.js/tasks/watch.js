const gulp            = require("gulp");
const path            = require("path");
const bs              = require('browser-sync').create('main');
const webpack         = require('webpack');
const config          = require("../config");
const webpackCallback = require('./js');
const webpackConfig   = require('../../webpack/webpack.config.dev');

gulp.task('watch', ['build'], function () {
  webpackConfig.watch = true;

  bs.init({
            server: 'public'
          });

  gulp.watch(path.join(config.paths.views, '**', '*.html'), bs.reload);
  gulp.watch(path.join(config.paths.sass, '**', '*.scss'), ['css']);
  gulp.watch(path.join(config.paths.svg, '**', '*.svg'), ['svg']);
  gulp.watch(path.join(config.paths.js, '**', '*.js'), ['js']);
});
