const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')


const DEV_PORT = 3000

module.exports = merge(common, {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js',
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './public',
    port: DEV_PORT,
  },
})
