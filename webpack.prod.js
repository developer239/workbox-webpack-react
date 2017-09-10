const webpack = require('webpack')
const merge = require('webpack-merge')
const workboxPlugin = require('workbox-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const DIST_DIR = 'public'
const SRC_DIR = 'src'

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new UglifyJSPlugin(),
    // eslint-disable-next-line
    new workboxPlugin({
      globDirectory: DIST_DIR,
      globPatterns: ['**/*.{html,js,css}'],
      swDest: path.join(DIST_DIR, 'sw.js'),
      modifyUrlPrefix: {
        '/': '',
      },
    }),
    new CopyWebpackPlugin([
      { from: path.join(SRC_DIR, '/_tpl/favicon.ico'), to: 'favicon.ico' },
      { from: path.join(SRC_DIR, '/_tpl/icon-192x192.png'), to: 'icon-192x192.png' },
      { from: path.join(SRC_DIR, '/_tpl/icon-512x512.png'), to: 'icon-512x512.png' },
      { from: path.join(SRC_DIR, '/_tpl/manifest.json'), to: 'manifest.json' },
    ]),
  ],
})
