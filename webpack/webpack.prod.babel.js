import webpack from 'webpack'
import merge from 'webpack-merge'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import workboxPlugin from 'workbox-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'
import common from './webpack.common'


const DIST_DIR = 'public'
const SRC_DIR = 'src'

export default merge(common, {
  entry: {
    app: './src/index.js',
  },
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
      swDest: path.join(__dirname, '..', DIST_DIR, 'sw.js'),
      swSrc: path.join(__dirname, '..', SRC_DIR, 'workboxServiceWorker.js'),
      modifyUrlPrefix: {
        '/': '',
      },
    }),
    new CopyWebpackPlugin([
      { from: require.resolve('workbox-sw'), to: 'workbox-sw.prod.js' },
    ]),
  ],
})
