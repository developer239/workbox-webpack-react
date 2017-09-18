import webpack from 'webpack'
import path from 'path'


const vendors = [
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux',
  'redux-thunk',
]

module.exports = {
  devtool: 'source-map',
  entry: {
    vendors,
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
  output: {
    filename: 'vendors.js',
    path: path.resolve(__dirname, '..', 'public', 'vendor'),
    library: 'vendor',
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'vendor',
      path: path.resolve(__dirname, '..', 'public', 'vendor', 'vendor-manifest.json'),
    }),
  ],
}
