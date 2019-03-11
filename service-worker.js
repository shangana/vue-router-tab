/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f1df5bf8dc4d8ca738fdee086132c769"
  },
  {
    "url": "api.html",
    "revision": "907b1b22415cf3ea91787ef4f9d798cd"
  },
  {
    "url": "assets/css/0.styles.958b0a52.css",
    "revision": "e0a0227604709b4bffd26b477dae7616"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1779792f.js",
    "revision": "078e61a64458aa56f29031b25e6aff2c"
  },
  {
    "url": "assets/js/11.81e95644.js",
    "revision": "9df1620d423f5dc2251ccc3c1be77304"
  },
  {
    "url": "assets/js/2.6e116356.js",
    "revision": "a60d8260772bea19aa8b1566001094ad"
  },
  {
    "url": "assets/js/3.04df3504.js",
    "revision": "4632c3451d98ed41bc0862d4db78645a"
  },
  {
    "url": "assets/js/4.ce4f2856.js",
    "revision": "72b765a546b9a5fac884a70e62f06c83"
  },
  {
    "url": "assets/js/5.29ab201e.js",
    "revision": "80a7ace74fe3a182a1c5dce009e7d580"
  },
  {
    "url": "assets/js/6.58b27e7f.js",
    "revision": "5716cb2317afb7d56cd8faaf3770d69c"
  },
  {
    "url": "assets/js/7.16272338.js",
    "revision": "319c24603f802f8063826bedbf487d19"
  },
  {
    "url": "assets/js/8.f5036b71.js",
    "revision": "bf22b0dc16f1bf29ae922dc0d26766dc"
  },
  {
    "url": "assets/js/9.af1f0627.js",
    "revision": "3e9d3819b75c35f085c04a7fb6e33651"
  },
  {
    "url": "assets/js/app.e6178106.js",
    "revision": "651627466dd1e9099f515d150e23ed2b"
  },
  {
    "url": "guide.html",
    "revision": "9fd4d8761ad15afa680c4803440d1097"
  },
  {
    "url": "img/logo.png",
    "revision": "6a5bef9058a790ef467337fa28bca68a"
  },
  {
    "url": "index.html",
    "revision": "671f00426580a8883ccb414a9b7104c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
