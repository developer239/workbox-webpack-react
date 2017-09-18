import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfig from './webpack.dev'


const PORT = process.env.PORT ? process.env.PORT : 8000
const IS_DEVELOP = process.env.NODE_ENV !== 'production'
const DIST_DIR = path.join(__dirname, 'public')

const app = express()

if (IS_DEVELOP) {
  const compiler = webpack(webpackDevConfig)
  app.get('/vendor/vendors.js', (req, res) => {
    res.sendFile(`${DIST_DIR}/vendor/vendors.js`)
  })
  app.use(
    webpackDevMiddleware(
      compiler,
      {
        publicPath: webpackDevConfig.output.publicPath,
      },
    ),
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
