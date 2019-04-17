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
    "revision": "8b7dbbc846be52a9829a27d8cea7f2fe"
  },
  {
    "url": "api.html",
    "revision": "25872e9e1a25e33c6769ff6791a52c20"
  },
  {
    "url": "assets/css/0.styles.98118687.css",
    "revision": "4606cee0c3fc2e56ce685a9a22ab32e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77a5d856.js",
    "revision": "f468341af5e78e80569ff0848ddf34ff"
  },
  {
    "url": "assets/js/11.a8adfce5.js",
    "revision": "819edc8199f7b419d8d7f7c749eb4e31"
  },
  {
    "url": "assets/js/2.9e2e18a7.js",
    "revision": "436883e836de0ecbba59ca15bd96f7e4"
  },
  {
    "url": "assets/js/3.b99b5dbc.js",
    "revision": "d0e64f54ad44a974005bb303f89b961b"
  },
  {
    "url": "assets/js/4.b8e086dc.js",
    "revision": "b836f726ea927d9ec908124210c9b6a4"
  },
  {
    "url": "assets/js/5.56253de1.js",
    "revision": "cbc36aa67c4741e5eba625c8d3c529db"
  },
  {
    "url": "assets/js/6.44252ef5.js",
    "revision": "e870f521f4de55ec0d5215acedc9991c"
  },
  {
    "url": "assets/js/7.a0a2a200.js",
    "revision": "f0ff7e84ab80e476ce0a7f243b982521"
  },
  {
    "url": "assets/js/8.f2924163.js",
    "revision": "9659ca3336c5094cabdddd24dd530978"
  },
  {
    "url": "assets/js/9.69570057.js",
    "revision": "36c73b7ad571ac1c924293f4c2df3360"
  },
  {
    "url": "assets/js/app.dca3b1af.js",
    "revision": "aaa1d32adf1da688c5f7c9fca8d8fa46"
  },
  {
    "url": "guide.html",
    "revision": "19161e9b32f3478b43fe7240930c6eb3"
  },
  {
    "url": "index.html",
    "revision": "3c5fd1db25f6b1312de7bf45c28880df"
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
