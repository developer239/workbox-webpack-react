import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import { initializeServiceWorkers } from './workbox'


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
),
// eslint-disable-next-line
  document.getElementById('root'))
initializeServiceWorkers()
