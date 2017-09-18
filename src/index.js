import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { initializeServiceWorkers } from './workbox'
import store from './store'
import routes from './routes'


const render = () => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
    ),
    // eslint-disable-next-line
    document.getElementById('root'),
  )
}

render()
initializeServiceWorkers()

if (module.hot) {
  module.hot.accept()
}
