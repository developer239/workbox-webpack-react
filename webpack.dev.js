const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    port: 3000,
  },
});
