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
    "revision": "2c846710e58b9d5156c11605b77a1095"
  },
  {
    "url": "api.html",
    "revision": "a017db0c92e437a8809c4f2a8eb80e23"
  },
  {
    "url": "assets/css/0.styles.56c8a7ca.css",
    "revision": "d0710838519e5980e13d6c7b9ffaf1aa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.13530d62.js",
    "revision": "180233c1e1473cc48c3d57073677a86b"
  },
  {
    "url": "assets/js/11.3ac90f81.js",
    "revision": "9e34db5ee81f063f6836b82aa868b383"
  },
  {
    "url": "assets/js/2.143854f2.js",
    "revision": "e30ea8a5e0092f96daf9914428a14d60"
  },
  {
    "url": "assets/js/3.47ae7a1f.js",
    "revision": "e1ddfce49b0a3e1b8a316d38b6ee7d65"
  },
  {
    "url": "assets/js/4.fb8d864b.js",
    "revision": "0903594b3defcea62e61453f97e3cd17"
  },
  {
    "url": "assets/js/5.f6a88ef8.js",
    "revision": "480a5100484dbb989cffd8eb8233c230"
  },
  {
    "url": "assets/js/6.df8e87bd.js",
    "revision": "e967c97bb29aa0db4270d9377a6b7269"
  },
  {
    "url": "assets/js/7.97c521c9.js",
    "revision": "8a7f900621edc95790ac02ece5fc9f80"
  },
  {
    "url": "assets/js/8.20791f54.js",
    "revision": "4b94e2a3ea01b8c58a0bb44493c1e55a"
  },
  {
    "url": "assets/js/9.1df9aa87.js",
    "revision": "7d2a66608e236d54a85b74f840455213"
  },
  {
    "url": "assets/js/app.e9f9b483.js",
    "revision": "07b3f61a2b820ee4a91df124a673b025"
  },
  {
    "url": "guide.html",
    "revision": "eb6c12dee7b6a3e701c0320273dc3475"
  },
  {
    "url": "img/logo.png",
    "revision": "6a5bef9058a790ef467337fa28bca68a"
  },
  {
    "url": "index.html",
    "revision": "ba0a70b94ea96d9b50e72685df9e3fb4"
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
