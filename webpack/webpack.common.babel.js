import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'

import dllManifest from '../public/vendor/vendor-manifest.json'


const DIST_DIR = 'public'
const SRC_DIR = 'src'

export default {
  output: {
    publicPath: '/',
    filename: '[name]-[hash].min.js',
    path: path.resolve(__dirname, '..', DIST_DIR),
  },
  plugins: [
    new CleanWebpackPlugin(
      [DIST_DIR],
      {
        exclude: ['vendor'],
      },
    ),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: dllManifest,
    }),
    new HtmlWebpackPlugin({
      template: 'src/_tpl/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '..', SRC_DIR, '_tpl', 'favicon.ico'), to: 'favicon.ico' },
      {
        from: path.resolve(__dirname, '..', SRC_DIR, '_tpl', 'icon-192x192.png'),
        to: 'icon-192x192.png',
      },
      {
        from: path.resolve(__dirname, '..', SRC_DIR, '_tpl', 'icon-512x512.png'),
        to: 'icon-512x512.png',
      },
      {
        from: path.resolve(__dirname, '..', SRC_DIR, '_tpl', 'manifest.json'),
        to: 'manifest.json',
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
