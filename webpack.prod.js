const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const camelCase = require('lodash/camelCase');
const pkg = require('./package.json');
const libraryName = camelCase(pkg.name);

module.exports = merge(common, {
  entry: {
    [libraryName]: './src/index.js',
    [libraryName + '.min']: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true
    })]
  }
});
