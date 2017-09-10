const webpack = require('webpack')
const merge = require('webpack-merge')
const workboxPlugin = require('workbox-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')
const path = require('path')


const DIST_DIR = 'public'

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
  ],
})
