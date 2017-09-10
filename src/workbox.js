import { IS_DEVELOP } from './config'


export function registerServiceWorkers() {
  // eslint-disable-next-line
  if ('serviceWorker' in navigator) {
    // eslint-disable-next-line
    navigator.serviceWorker.register('sw.js')
      .then((registration) => {
        console.log('Service Worker registration successful with scope: ',
          registration.scope)
      })
      .catch((err) => {
        console.log('Service Worker registration failed: ', err)
      })
  }
}

export function unregisterServiceWorkers() {
  // eslint-disable-next-line
  if ('serviceWorker' in navigator) {
    // eslint-disable-next-line
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister()
    })
  }
}

export function initializeServiceWorkers() {
  if (IS_DEVELOP) {
    unregisterServiceWorkers()
  } else {
    registerServiceWorkers()
  }
}
