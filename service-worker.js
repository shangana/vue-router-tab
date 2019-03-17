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
    "revision": "0de75f06d3cbe4ced109fc11deec7f51"
  },
  {
    "url": "api.html",
    "revision": "4f1b3c1180b8d94a45b14ee5b97ecfbd"
  },
  {
    "url": "assets/css/0.styles.c873052f.css",
    "revision": "078be8e080c1584b4daf42ee0958edaf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0574dae6.js",
    "revision": "c3273ce43e3a085d49f74af874315b38"
  },
  {
    "url": "assets/js/11.a8adfce5.js",
    "revision": "819edc8199f7b419d8d7f7c749eb4e31"
  },
  {
    "url": "assets/js/2.6f06392f.js",
    "revision": "975553a586473598e80e431119de2513"
  },
  {
    "url": "assets/js/3.b66c5393.js",
    "revision": "6a69d3247e48c683725e4bde9a670c1e"
  },
  {
    "url": "assets/js/4.167e152b.js",
    "revision": "2d8c7c229dbe7de4531955650ce75038"
  },
  {
    "url": "assets/js/5.b96aeb14.js",
    "revision": "aa28a4e4d12abc821e12439ff28419b6"
  },
  {
    "url": "assets/js/6.b1dc62ad.js",
    "revision": "7dfd1b28ae15445b8f2b0dc1f8f6cad1"
  },
  {
    "url": "assets/js/7.f0a80545.js",
    "revision": "c957378a08f2779f39f88d01543a6481"
  },
  {
    "url": "assets/js/8.6dca4796.js",
    "revision": "6121cbfbb61a2e9082cba951400ca71a"
  },
  {
    "url": "assets/js/9.3fa7b9b0.js",
    "revision": "ab81eb5440c53aee59fcba24434ae452"
  },
  {
    "url": "assets/js/app.27284fd4.js",
    "revision": "b6ab7061edfef25f89e386cac78984a9"
  },
  {
    "url": "guide.html",
    "revision": "75b06646811ee74123f8c86710231134"
  },
  {
    "url": "index.html",
    "revision": "47686ab728f296514bfd9aa6cd8f0a6b"
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
