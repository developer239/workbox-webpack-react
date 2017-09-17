const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT ? process.env.PORT : 8081
const dist = path.join(__dirname, 'public')


function ensureSecure(req, res, next) { // eslint-disable-line
  if (req.secure) {
    return next()
  }

  res.redirect(`https://${req.hostname} ${req.url}`)
}

app.use(express.static(dist))
app.all('*', ensureSecure)

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(port, (error) => {
  if (error) {
    console.log(error) // eslint-disable-line no-console
  }
  console.info('Express is listening on port %s.', port) // eslint-disable-line no-console
})
