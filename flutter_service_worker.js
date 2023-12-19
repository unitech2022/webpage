'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "77d313c68312d9f8e0c729ebaef166ad",
"index.html": "d237f3ea9cdcb33da4e617045e2f3db0",
"/": "d237f3ea9cdcb33da4e617045e2f3db0",
"main.dart.js": "c5bccfa5e0cfb978a3af8a5c53da6c66",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c23279b69260867a9f4ab60236ad9a1c",
"assets/AssetManifest.json": "86c07e4f229098475ca42a7d8f3332f0",
"assets/NOTICES": "4180788f11dc7c288b43403a6cbab7fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a9b741edc6676ddeffbdb5f9870e7b2f",
"assets/fonts/MaterialIcons-Regular.otf": "bf152e84817daed5fd39cf31344bc67e",
"assets/assets/images/deal4.png": "d102fae0243f56f2d83c91bb3972b775",
"assets/assets/images/deal1.png": "6170270e647b170ec68a5305c40ad93a",
"assets/assets/images/deal2.png": "458452c3adac5936e7c5d4482e09cb31",
"assets/assets/images/image1.jpeg": "6d41e50c90d1755ade74ad1a8516d0b6",
"assets/assets/images/deal3.png": "e4ef4d4030143e9970850fc1f486633a",
"assets/assets/images/cat1.png": "17606df0c6195869a134cb01b08470e6",
"assets/assets/images/cat2.png": "5be893187152d289ae9d9d9c7d736343",
"assets/assets/images/person.png": "2863e80f1290a9a139b78eba85f63f41",
"assets/assets/images/img3.jpeg": "05c4f20edc6b2922e8ac1db0cd677cba",
"assets/assets/images/Payment.png": "e27f68545e1dc06e53a6bd8a0e8e2259",
"assets/assets/images/pro3.png": "430a24e52a150fdb986211bd65c3bcc0",
"assets/assets/images/pro2.png": "9d61338b4eac9af7b1b95d402a7c7953",
"assets/assets/images/svgexpor3.png": "cc199747e99b3030115f074b5b578d5f",
"assets/assets/images/svgexpor2.png": "2f6b1d6e6852cf9c6a40ffcb7728ac53",
"assets/assets/images/pro1.png": "caae1c993a01438049fb5d4c292a1365",
"assets/assets/images/logo.png": "44a7a4fc1b7d20e61a3c532f601d4a68",
"assets/assets/images/cate3.png": "a92b1b6e5647f7a0817cf79dcb66cb67",
"assets/assets/images/cate7.png": "7e9ebb84e6a26875e1e4e562539b1202",
"assets/assets/images/pro5.png": "3ee181f204dbc3223d94be96a6a7c739",
"assets/assets/images/pro4.png": "1b2820a11826bf2fc575c3f7ad7f71ba",
"assets/assets/images/cate6.png": "4c17e293295c1f4724aef75c2dc14bc5",
"assets/assets/images/cate4.png": "848d602f9332f9445a6a9fad326d6429",
"assets/assets/images/cate5.png": "4bd2dd13876aa2750823d9bf72106d39",
"assets/assets/images/svgexport1.png": "a4eacf873e0651d5aca99ef0b1b98b12",
"assets/assets/images/Offer1.png": "40fee4b79784cd8e31b2723feb73ab10",
"assets/assets/images/imge2.jpeg": "ef77bf9f64b04d3b69118fa7b5a0fbdf",
"assets/assets/images/Offer2.png": "fac20359697a95cb33d2d6ee623cf266",
"assets/assets/icons/grid.svg": "1f2bc35fb8414114c4d0500bd1d47b5b",
"assets/assets/icons/search.svg": "d1f3faa2ed9b977e32b9b5529d5b30af",
"assets/assets/icons/edit2.svg": "50badb056e2cfcac21be39bf69e683e8",
"assets/assets/icons/face.svg": "29c5bb391b135e97cc3a42b6452e8406",
"assets/assets/icons/home.svg": "904ef5b94685055e93d592084366a264",
"assets/assets/icons/alrm.svg": "3338928ee3603c8a50f31cb075c71b2b",
"assets/assets/icons/newproducts.svg": "6ed94cb57f8b92f556ef50f23aca6ae8",
"assets/assets/icons/locationitem.svg": "aad61075445008ca2a9d5b6ce45e7a11",
"assets/assets/icons/prom.svg": "17fdb9c4450a8c0a388272da214e3ea2",
"assets/assets/icons/review.svg": "3a1f14a09c6bb591d5bdc9a2966676c1",
"assets/assets/icons/lclock.svg": "d406daa9f19aaf0dcd1dcde1efe947a1",
"assets/assets/icons/arrow-right.svg": "65e89ace6a7df8d3220e16a426e53335",
"assets/assets/icons/cart2.svg": "b7e33a462fccff2ec76d818f954b774c",
"assets/assets/icons/arrow-right2.svg": "2a6ddfe5eea4e61e16e129c3ea98b594",
"assets/assets/icons/offer.svg": "c43b686e4630d5dbf0c16cf3817cb2ae",
"assets/assets/icons/li_heart.svg": "88065e9321f731525a8b19265ee5139e",
"assets/assets/icons/mappin.svg": "248272461de17982cb369f15f367aa75",
"assets/assets/icons/map2.svg": "570fa3b2a11b06525b79336bff42d1b7",
"assets/assets/icons/li_shopping-cart.svg": "9563e1df3e0eec64b48d1fbd8aad8231",
"assets/assets/icons/back.svg": "78e60280fb444e74544962f21f88f3d9",
"assets/assets/icons/star.svg": "0f6bd87badaa52e08d4091adceeab4af",
"assets/assets/icons/edit.svg": "9b048eb43da7872395c8cd15053b7c5e",
"assets/assets/icons/payment1.png": "91e8aa3f5c5583f2e34523e4b5be4e62",
"assets/assets/icons/hot.svg": "7ea0813c7d0b78465f89f891a039b4ba",
"assets/assets/icons/linked.svg": "9429f672f4009d068c618cd9c67458ad",
"assets/assets/icons/call.svg": "e4d2817e5824ab7ce8d5d4ef4541d6bd",
"assets/assets/icons/insta.svg": "1133da0257cfdf0274ad5c9141820efd",
"assets/assets/icons/arrow-left.svg": "79112960ee251e7efa6b3ae78ddd6a44",
"assets/assets/icons/drop.svg": "511bbb781cbae3084981b0959a423a28",
"assets/assets/icons/graph.svg": "df98ca6c9d538744c19ed42cfe305b13",
"assets/assets/icons/twetr.svg": "16fedfe3547abce24965887fe3d1cfe4",
"assets/assets/icons/li_mail.svg": "594e9ea7dc14653fccbe591ee4a796e6",
"assets/assets/i18n/en.json": "3eda6fcce74c395822124c25504dee25",
"assets/assets/i18n/ar.json": "00ab520841b939cf3ec8e15e69401eea",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
