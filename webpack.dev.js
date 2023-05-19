const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },

  devServer: {
    static: path.join(__dirname, 'src'),
  },
});
