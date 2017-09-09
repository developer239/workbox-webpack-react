const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    contentBase: './public',
    port: 3000,
  },
});
