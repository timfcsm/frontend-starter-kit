const path = require('path');

const source = path.join(__dirname, '..', 'frontend');
const dist   = path.join(__dirname, '..', 'public', 'skin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  prod: prod,

  paths: {
    source: source,
    dist  : dist,

    sass  : path.join(source, 'scss'),
    svg   : path.join(source, 'svg'),
    js    : path.join(source, 'js'),
    views : path.join('.', 'core'),
    css   : path.join(dist, 'css'),
    images: path.join(dist, 'images')
  },

  PlzOptions: {
    minifier      : prod,
    mqpacker      : false,
    filters       : false,
    rem           : true,
    pseudoElements: true,
    opacity       : true,
    autoprefixer  : {
      browsers: ['ie 8', 'ie 9', '> 1%']
    }
  }
};
