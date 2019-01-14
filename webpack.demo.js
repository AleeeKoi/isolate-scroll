const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'demo')
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['demo']),
    new HtmlWebpackPlugin({
      title: 'Demo - ' + pkg.name,
      template: __dirname + '/static/index.html'
    })
  ]
});
