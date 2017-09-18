import path from 'path'
import express from 'express'
import compression from 'compression'


const PORT = process.env.PORT || 8080
const DIST_DIR = path.resolve(__dirname, '..', 'public')

const app = express()

app.use(express.static(DIST_DIR))
app.use(compression())

// Create route for static vendors.js file
app.get('/vendor/vendors.js', (req, res) => {
  res.sendFile(`${DIST_DIR}/vendor/vendors.js`)
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.info('Express is listening on PORT %s.', PORT)
})
