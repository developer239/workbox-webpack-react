const path = require('path')
const express = require('express')
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev');


const PORT = process.env.PORT ? process.env.PORT : 8000
const DIST_DIR = path.join(__dirname, 'public')
const IS_DEVELOP = process.env.NODE_ENV !== 'production'

const app = express()

if (IS_DEVELOP) {
  const compiler = webpack(config)
  app.use(
    webpackDevMiddleware(
      compiler,
      {
        publicPath: config.output.publicPath,
      }
    )
  )
  app.use(webpackHotMiddleware(compiler, {
    log: false,
  }))
} else {
  app.use(express.static(DIST_DIR))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
}

app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.info('Express is listening on PORT %s.', PORT)
})
