const webpack = require('webpack')
const path = require('path')


const vendors = [
  'express',
  'heroku-ssl-redirect',
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux',
  'redux-thunk',
]

module.exports = {
  devtool: 'source-map',
  // vendors is array of libraries used
  entry: {
    vendors,
  },
  module: {
    rules: [
      {
        // some libraries are using json files, but webpack does NOT support json out of the box
        test: /\.json$/,
        use: 'json-loader',
      },
      // this config is for libraries - no need to add babel or other loaders
    ],
  },
  output: {
    // real app MUST have [hash] in filename
    filename: 'vendors.js',
    path: path.resolve(__dirname, 'public/vendor'),
    // name of global variable under which is bundle stored
    // in this case window.vendor
    library: 'vendor',
  },
  plugins: [
    new webpack.DllPlugin({
      // name of global variable which should other bundles use to get referenced module
      // should be same as output.library
      name: 'vendor',
      path: path.resolve(__dirname, 'public/vendor/vendor-manifest.json'),
    }),
  ],
}
