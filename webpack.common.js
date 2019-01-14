const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const camelCase = require('lodash/camelCase');
const pkg = require('./package.json');
const libraryName = camelCase(pkg.name);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: libraryName + '.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  optimization: {
    minimize: false
  }
};
