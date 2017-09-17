// eslint-disable-next-line
importScripts('workbox-sw.prod.js')

/**
 * Create an instance of WorkboxSW.
 * Setting clientsClaims to true tells our service worker to take control as
 * soon as it's activated.
 */
// eslint-disable-next-line
const workboxSW = new WorkboxSW({ clientsClaim: true })

/**
 * DO NOT CREATE OR UPDATE THIS LIST BY HAND!
 *  Workbox will fill this array by files that are chosen by globPatterns.
 */
workboxSW.precache([])

workboxSW.router.registerRoute('/*',
  workboxSW.strategies.staleWhileRevalidate(),
)
