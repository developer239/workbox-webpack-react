const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const DIST_DIR = 'public'
const SRC_DIR = 'src'

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    publicPath: '/',
    filename: '[name]-[hash].min.js',
    path: path.resolve(__dirname, DIST_DIR),
  },
  plugins: [
    new CleanWebpackPlugin([DIST_DIR]),
    new HtmlWebpackPlugin({
      template: 'src/_tpl/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'report.html',
    }),
    new CopyWebpackPlugin([
      { from: path.join(SRC_DIR, '/_tpl/favicon.ico'), to: 'favicon.ico' },
      { from: path.join(SRC_DIR, '/_tpl/icon-192x192.png'), to: 'icon-192x192.png' },
      { from: path.join(SRC_DIR, '/_tpl/icon-512x512.png'), to: 'icon-512x512.png' },
      { from: path.join(SRC_DIR, '/_tpl/manifest.json'), to: 'manifest.json' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      './node_modules',
      './src',
    ],
  },
}
