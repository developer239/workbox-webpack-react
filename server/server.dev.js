import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfig from '../webpack/webpack.dev'


const PORT = 3000
const DIST_DIR = path.resolve(__dirname, '..', 'public')

const app = express()

const compiler = webpack(webpackDevConfig)
app.use(webpackDevMiddleware(compiler, { publicPath: webpackDevConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler, { log: false }))

// Create route for static vendors.js file
app.get('/vendor/vendors.js', (req, res) => {
  res.sendFile(`${DIST_DIR}/vendor/vendors.js`)
})

app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.info('Express is listening on PORT %s.', PORT)
})
