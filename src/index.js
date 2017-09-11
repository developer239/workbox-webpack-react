import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './app'
import { initializeServiceWorkers } from './workbox'
import reducer from './reducer'


const middleware = [thunk]

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

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
