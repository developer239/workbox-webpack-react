const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const common = require('./webpack.common')


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
      globPatterns: ['**/*.{html,js,css,ico}'],
      swDest: path.join(DIST_DIR, 'sw.js'),
      swSrc: path.join(SRC_DIR, 'workboxServiceWorker.js'),
      modifyUrlPrefix: {
        '/': '',
      },
    }),
    new CopyWebpackPlugin([
      { from: require.resolve('workbox-sw'), to: 'workbox-sw.prod.js' },
    ]),
  ],
})
