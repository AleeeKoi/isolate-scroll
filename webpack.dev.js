const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo - ' + pkg.name,
      template: __dirname + '/static/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8080,
    stats: 'errors-only',
    overlay: {
      warnings: false,
      errors: true
    }
  }
});
