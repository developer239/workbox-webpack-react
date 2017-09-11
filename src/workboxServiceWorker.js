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

/*
 * This one is little bit tricky. Server side routing is not set up yet. We have client side
 * routing only. Every react-router route has a fallback to '/' route in http-server. We don't
 * care about anything else yet.
 */
workboxSW.router.registerRoute('/',
  workboxSW.strategies.staleWhileRevalidate(),
)
