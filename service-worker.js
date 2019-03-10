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
    "revision": "ff6f8cdaf1c5c29aab8e7321ddd94068"
  },
  {
    "url": "api.html",
    "revision": "b8e170eada076230a4c2f0898e6c8a99"
  },
  {
    "url": "assets/css/0.styles.c62e57f9.css",
    "revision": "84fcbf507ce0b5b094755c0b885c2a62"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c9e85165.js",
    "revision": "6483e6133225856c8842e7aa71db2456"
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
    "url": "assets/js/3.dfc9d0d8.js",
    "revision": "57b9a98f7a128817c2567b7ac054b19b"
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
    "url": "assets/js/9.5d74cde4.js",
    "revision": "379b6ac443d841144c46681be4ada4e8"
  },
  {
    "url": "assets/js/app.ad92c7a8.js",
    "revision": "1ba003bd1dc0cfe97aef6831dd8252da"
  },
  {
    "url": "guide.html",
    "revision": "89807320bda5c76ed69db3bd6ab4dcf0"
  },
  {
    "url": "img/logo.png",
    "revision": "6a5bef9058a790ef467337fa28bca68a"
  },
  {
    "url": "index.html",
    "revision": "c21fc6415f7c1305244c5e860fa1d6a2"
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
