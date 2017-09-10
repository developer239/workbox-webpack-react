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

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
),
// eslint-disable-next-line
  document.getElementById('root'))
initializeServiceWorkers()
