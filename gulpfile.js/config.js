const path = require('path');

const source = path.join(__dirname, '..', 'frontend');
const dist   = path.join(__dirname, '..', 'public', 'skin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  prod: prod,

  paths: {
    source: source,
    dist  : dist,

    sass       : path.join(source, 'scss'),
    pug        : path.join(source, 'pug'),
    svg        : path.join(source, 'svg'),
    js         : path.join(source, 'js'),
    assets     : path.join(source, 'assets'),
    views      : path.join(source, 'views'),
    css        : path.join(dist, 'css'),
    js_dist    : path.join(dist, 'js'),
    images     : path.join(dist, 'images'),
    assets_dist: path.join(dist, '..', 'assets'),
    html       : path.join(dist, 'pages')
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
