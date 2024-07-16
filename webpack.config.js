module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return require('./webpack.dev.js');
  } else {
    return require('./webpack.prod.js');
  }
};
