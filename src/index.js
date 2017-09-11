import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './app'
import { initializeServiceWorkers } from './workbox'
import store from './store'


const render = (AppComponent) => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <BrowserRouter>
          <AppComponent />
        </BrowserRouter>
      </Provider>
    ),
    // eslint-disable-next-line
    document.getElementById('root')
  )
}

render(App)
initializeServiceWorkers()

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const UpdatedApp = require('./app').default
    render(UpdatedApp)
  })
}
