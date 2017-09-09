import { IS_DEVELOP } from './config'


export function registerServiceWorkers() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(function (registration) {
        console.log('Service Worker registration successful with scope: ',
          registration.scope);
      })
      .catch(function (err) {
        console.log('Service Worker registration failed: ', err);
      });
  }
}

export function unregisterServiceWorkers() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

export function initializeServiceWorkers() {
  if (IS_DEVELOP) {
    unregisterServiceWorkers()
  } else {
    registerServiceWorkers()
  }
}
