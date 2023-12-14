'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "77d313c68312d9f8e0c729ebaef166ad",
"index.html": "dc73003c0c37328337a7d9fb571888cb",
"/": "dc73003c0c37328337a7d9fb571888cb",
"main.dart.js": "c814dde0bd97d3822ff06ef77fc824bb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c23279b69260867a9f4ab60236ad9a1c",
"assets/AssetManifest.json": "e6ede4b9b4b729f23870ebf5a3d1e894",
"assets/NOTICES": "a12d13fdc637a762c7c571d023384f8b",
"assets/FontManifest.json": "c6623a8a28cffb49ad6b9e2c51630b66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e759b6c4c54e7d749a5bbd4b98d77f88",
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
"assets/assets/icons/marker_black.svg": "bdc97cbb0481aadc9a539337e87daa86",
"assets/assets/icons/face.svg": "29c5bb391b135e97cc3a42b6452e8406",
"assets/assets/icons/cart_menu.svg": "7f4bd05d9008036f23ade03d11865350",
"assets/assets/icons/translate.svg": "3361134987d6078db47da93b1dac9c1b",
"assets/assets/icons/account.svg": "e5cae2ca150557f352c16f5f2818dec1",
"assets/assets/icons/home.svg": "904ef5b94685055e93d592084366a264",
"assets/assets/icons/logout.svg": "6b2ecc644a3455d2f5ea743378ac50cc",
"assets/assets/icons/alrm.svg": "3338928ee3603c8a50f31cb075c71b2b",
"assets/assets/icons/newproducts.svg": "6ed94cb57f8b92f556ef50f23aca6ae8",
"assets/assets/icons/icon_logo.svg": "ef43869a45b9481eb06d27cd55658e5f",
"assets/assets/icons/locationitem.svg": "aad61075445008ca2a9d5b6ce45e7a11",
"assets/assets/icons/prom.svg": "17fdb9c4450a8c0a388272da214e3ea2",
"assets/assets/icons/review.svg": "3a1f14a09c6bb591d5bdc9a2966676c1",
"assets/assets/icons/cart_item.svg": "55b72f106b047a24977204c143f28706",
"assets/assets/icons/city.svg": "a07d1b11d4056597ffc979e792b1fa37",
"assets/assets/icons/lclock.svg": "d406daa9f19aaf0dcd1dcde1efe947a1",
"assets/assets/icons/fillter2.svg": "26ddaeb3205a015f3dcc35640872834c",
"assets/assets/icons/arrow-right.svg": "65e89ace6a7df8d3220e16a426e53335",
"assets/assets/icons/successd.svg": "186ec3754bc5e4da59eea053c2e23829",
"assets/assets/icons/us.svg": "54e02e35564fca45062049b575ccd37a",
"assets/assets/icons/cart2.svg": "b7e33a462fccff2ec76d818f954b774c",
"assets/assets/icons/arrow-right2.svg": "2a6ddfe5eea4e61e16e129c3ea98b594",
"assets/assets/icons/logo_black.svg": "89953f1e828c89aebf32def2bc771a96",
"assets/assets/icons/offer.svg": "c43b686e4630d5dbf0c16cf3817cb2ae",
"assets/assets/icons/chate.svg": "bd8b5206cd3d36f606e764cfc816c60c",
"assets/assets/icons/marker_e.svg": "bf839e55844e88fa8c616f6ac49a67f9",
"assets/assets/icons/li_heart.svg": "88065e9321f731525a8b19265ee5139e",
"assets/assets/icons/mappin.svg": "248272461de17982cb369f15f367aa75",
"assets/assets/icons/logout2.svg": "2382bb46a532b03601fa04f672ac3595",
"assets/assets/icons/upload2.svg": "e073bc383c8ed3bde7a15e4eaa5c5b63",
"assets/assets/icons/fav_menu.svg": "354d0697cdcf2b99609d780de5ab8f9f",
"assets/assets/icons/fillter.svg": "2b7cd37b8bae255d029adb6745e03f1d",
"assets/assets/icons/add.svg": "2766a5e9d7ce61e9c263668040119f20",
"assets/assets/icons/close.svg": "ac2e735cda4319c8cbcb93bad9c1596c",
"assets/assets/icons/orders.svg": "89d9d7a66113de4b7d6e2736f63b1c45",
"assets/assets/icons/map2.svg": "570fa3b2a11b06525b79336bff42d1b7",
"assets/assets/icons/noty.svg": "69d0951a9c23eb295d59bf91dd148254",
"assets/assets/icons/li_shopping-cart.svg": "9563e1df3e0eec64b48d1fbd8aad8231",
"assets/assets/icons/marker.svg": "87a1233be30c16cf3e0409f09a639144",
"assets/assets/icons/back.svg": "78e60280fb444e74544962f21f88f3d9",
"assets/assets/icons/paypal.svg": "ffeeec3da8e51b5880f1e885f1a54e38",
"assets/assets/icons/logo_whit.svg": "986b267533dfb7c3b44c2dd09a0f91ce",
"assets/assets/icons/google.svg": "6508216d44891b29f7302f95b5732914",
"assets/assets/icons/provider.svg": "f6ac80eae6e35f069a93fb5e0cb02701",
"assets/assets/icons/providers.svg": "2599ecb4f9832dfb590531a01b781297",
"assets/assets/icons/star.svg": "0f6bd87badaa52e08d4091adceeab4af",
"assets/assets/icons/edit.svg": "9b048eb43da7872395c8cd15053b7c5e",
"assets/assets/icons/cash.svg": "8867bd9034148251e2550e0cc7f2fbe7",
"assets/assets/icons/payment1.png": "91e8aa3f5c5583f2e34523e4b5be4e62",
"assets/assets/icons/home_menu.svg": "16657b9cafa3914d80d5606228429f98",
"assets/assets/icons/walet.svg": "86703763eda16a116d8d97f2ea7cafc8",
"assets/assets/icons/hot.svg": "7ea0813c7d0b78465f89f891a039b4ba",
"assets/assets/icons/delete.svg": "cb0a8f287b047049104916fa949dc8a7",
"assets/assets/icons/linked.svg": "9429f672f4009d068c618cd9c67458ad",
"assets/assets/icons/aboute_provider.svg": "55c02727d2f4c2d72b75c9efda553a2e",
"assets/assets/icons/success.svg": "a2edb090352ea474edb1cb2b7eb3036f",
"assets/assets/icons/call.svg": "e4d2817e5824ab7ce8d5d4ef4541d6bd",
"assets/assets/icons/location.svg": "69e78170d5313e0f11b328afefd5013e",
"assets/assets/icons/location_tick.svg": "a07d1b11d4056597ffc979e792b1fa37",
"assets/assets/icons/insta.svg": "1133da0257cfdf0274ad5c9141820efd",
"assets/assets/icons/arrow-left.svg": "79112960ee251e7efa6b3ae78ddd6a44",
"assets/assets/icons/pay1.svg": "bd59eb36a070cb8902be0786d1a4de87",
"assets/assets/icons/upload.svg": "36766f3fc45b793c70f00340eab4391f",
"assets/assets/icons/date.svg": "d1cda606aafaf4e4403cd760b49c4d26",
"assets/assets/icons/account2.svg": "d6edb5d61085d45a5965d9741412f525",
"assets/assets/icons/drop.svg": "511bbb781cbae3084981b0959a423a28",
"assets/assets/icons/menu.svg": "6a9e09530073cabc03b2debc69fefd71",
"assets/assets/icons/menu2.svg": "d75f507a933512fb6a0bf45f4abe14f8",
"assets/assets/icons/graph.svg": "df98ca6c9d538744c19ed42cfe305b13",
"assets/assets/icons/twetr.svg": "16fedfe3547abce24965887fe3d1cfe4",
"assets/assets/icons/left.svg": "2a6ddfe5eea4e61e16e129c3ea98b594",
"assets/assets/icons/print.svg": "d9c4a199aff981d828a0146a674d1a40",
"assets/assets/icons/li_mail.svg": "594e9ea7dc14653fccbe591ee4a796e6",
"assets/assets/i18n/en.json": "3eda6fcce74c395822124c25504dee25",
"assets/assets/i18n/ar.json": "00ab520841b939cf3ec8e15e69401eea",
"assets/assets/fonts/montserrat_medium.ttf": "128c3c68ca7303b88442a347292291fa",
"assets/assets/fonts/montserrat_regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/fonts/cairo_medium.ttf": "4592243cbbb2e907ed45f50ab8dc04f9",
"assets/assets/fonts/montserrat_semibold.ttf": "cbdecee7a45d92a998429b0290bf02b0",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/montserrat_light.ttf": "bcf14e7123e6a0a873151c78e5c316c6",
"assets/assets/fonts/tajawal_medium.ttf": "c81990ce0e3f3273528f89d0e3942fcb",
"assets/assets/fonts/cairo-bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/tajawal_bold.ttf": "b7fe4edd2139b0fa72371f56f0ec0b69",
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
