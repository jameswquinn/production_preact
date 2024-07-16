const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 9000, // CodeSandbox might override this setting
    open: true, // This works with the external browser
    host: '0.0.0.0', // Required to make it accessible externally
    allowedHosts: 'all', // Allowing all hosts, needed for CodeSandbox
    hot: true, // Enable hot module replacement
    historyApiFallback: true, // Fallback to index.html for single-page applications
    compress: true, // Enable gzip compression
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws', // Ensure WebSocket URL works correctly
    },
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow cross-origin requests
    },
  },
});
