const merge = require('webpack-merge')
const common = require('./webpack.common')


const DEV_PORT = 3000

module.exports = merge(common, {
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
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    port: DEV_PORT,
  },
})
