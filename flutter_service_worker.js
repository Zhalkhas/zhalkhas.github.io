'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "335611f5b66a70aa7e6f049a8fb4b770",
"/": "335611f5b66a70aa7e6f049a8fb4b770",
"assets/AssetManifest.json": "4e3ce5f3b5c5ede62c6cc731fe7e113f",
"assets/assets/carousel1.jpg": "48e5e022d65809bc3f6c3c9cd413974a",
"assets/assets/carousel6.jpg": "7f364191073ec6f19e8bd240b8c73b68",
"assets/assets/carousel7.jpg": "74e8775cccf40abb53c34058f9ff76bf",
"assets/assets/carousel3.jpg": "34fa2dc0b29d1aa283d6ce315e4e6449",
"assets/assets/main.jpg": "045b3e020d82b00e69b04373d68c4a46",
"assets/assets/carousel5.jpg": "a5bf5cff4a11ba766561574671090fe0",
"assets/assets/round_avatar.png": "aaaeaf8bc35164cd7cf96e979bb6e4a1",
"assets/assets/carousel2.jpg": "612f7170de3ea56e7b607d4cae79cdbb",
"assets/assets/carousel4.jpg": "6342c237bc31c692815a48941ede925a",
"assets/FontManifest.json": "742813c2d43690b417bb9d2e469dc115",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/flutter_devicon/fonts/FlutterDEVICON.ttf": "b14c007aed8c5a8078b988f2c26e993e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "72e92dfc6fb2a1cdce459f165d55fc07",
"main.dart.js": "17dbfaf8d08b662c1dea7bce5bc18dce",
".git/COMMIT_EDITMSG": "145482bb9316e809e706a795d18a8995",
".git/index": "3a7a080c43cf75a982c29901533ab06c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "01651bacabc05fd69089f62de8240c51",
".git/refs/heads/master": "01651bacabc05fd69089f62de8240c51",
".git/objects/ce/33dbabac3dc50e147d8c6fd750520da33ae7e4": "b371bc64cb7153291e7a8286766f7bd3",
".git/objects/73/498ccffa15180b5daa9d5bd8059e28da8f9f44": "de12bb0b276a5464e72a57ee81cfe194",
".git/objects/8d/32d8878dec162e57c8ef076573c5fa56042823": "c83727c7952e1f0e60bf254f9271d666",
".git/objects/4b/546fc4092fba85fb9923f4039d53302fb4fcaa": "7964e7df45bc9beff8af7f6ccd9ce5d4",
".git/objects/3e/26d7be63d961b6eb9b44c558ee3c856971ccd0": "dbdb20565910b0e28f78ae558b28499b",
".git/objects/8b/c35708079cd6162fb900f6f438dd3e7f13189f": "48aeba70892c382fc2c42331b607d4dd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b3/32b952f3914e4312824fec47508c3bb492311a": "6caf33360d4da882838ddc6a697905fc",
".git/objects/08/fd45471b659599ed05f65e2ac74bbb44c06be7": "f651230fec585b389b2dcf7c78a52038",
".git/objects/08/2ee85228684a06a2cd2ae04ba1942095f86640": "ab79bac3f188a8a8267f971bef4b87ed",
".git/objects/e0/2d9c1bf560aecb26a1c2901fdf775506f690b2": "e30f9c81bfad5e041d4f67b4e874c5c8",
".git/objects/24/3285ccee750e70fe7b552ce233d8927d36c01e": "09cc164e1d53de11b0ebbefcaceb1735",
".git/objects/70/6b6a95820d0e3c7e9dbf1a8f53759393d30920": "b0e97c5f100c7a168f10297152c000bd",
".git/objects/e1/b75b7a4780d825b6f7647edd6d0eaecfa11193": "6747b9f9e945560799367d07069acc42",
".git/objects/79/f77d706091b78b373f2580e5c6b2aa593a78e3": "75ab8ef783d452cafbe258b9c8adacbd",
".git/objects/a6/0c41fa541e01314207653f49961ed66aab5788": "f138eb7b4322d5b8c17809fa8c68c063",
".git/objects/03/16c5d96c3a18ab21ab4d9ec689373f64867d5c": "beeed56bb1ffde1ec5a84340deb48eb0",
".git/objects/9e/8f811254fb4718baeaefdfe8cf196617102748": "0ba3cf3fd7f2100c4f8e2e5a45f61a2d",
".git/objects/ad/ca2903bf848674fa743d941ae062e5b73075f8": "c265e4045238f29ac6fd1b17d6e833ff",
".git/objects/a1/6d26338d777f2ca94778915ec027de9236dbbe": "559593bf9413ccf9412aa8f0b6f3ac4b",
".git/objects/e8/89a97a58ef7e8df7ee0d09a7059401387aaeed": "d550fe8275d20718237e43198a187d48",
".git/objects/bc/4b1e89795eb420d6f6d9ebc3797571120013a2": "e189b5645ce612a045ba14eadaa8c29a",
".git/objects/ef/ab0c4bc5ec30dd82ca39f9d35f20baf0b28fb8": "8c9306501d777ad9d5398aba0ff90420",
".git/objects/27/752c4be787ebb069f3d2843d6596a7d6543380": "5fab5774a1a5e2e8d9213651028159a7",
".git/objects/36/ad20d4aeeb6d015b496d98dfc87349340ff19f": "f2b33ed8dd98d9d0b4859cf8f31c216a",
".git/objects/0b/0525b71ef73405836418e2798b8070117f8084": "c275225b996e7cb531bab87f547dc6b3",
".git/objects/0b/7b8899949e205e58f3b4b437abdd7ea246cb48": "a08e6f351fe4d5486bb987f0957c876f",
".git/objects/f5/94c57c51d3c18fad230acf3fbfa15d1ad12ec7": "54a197e6be92b67143a92286660f5fce",
".git/objects/54/d992b8dc653453d8a1f0e72d1fd3b3f4ff7a82": "3eb13fdd729db4a1d6199975b08d16c6",
".git/objects/a5/282b2b2cf8bbf6ef9bf982975bb85ee184d862": "fdb99aedf23b61a36f19460d5dfa5430",
".git/objects/09/e71656e25ff79d673776d0772210fc7205ad79": "3f3408a56932109ebf26d42eb6fcb6d0",
".git/objects/ca/85ec2a1b7c5b680fffe3e5aa1c787832ba9501": "fa28f1cecd5777763c0d308111e05dbd",
".git/objects/80/62c6a5b26e847f513ed4847a2ff890b5304f0a": "4d3d79a85dc8b2e1617f37ad6fdd654a",
".git/objects/c6/20ddaf96f50b4196d433f081b32d119f274f29": "7b99ed418eabbb35dddbe990ab3a3f8d",
".git/objects/2d/5939d09a82c6e64c2c6fe084d56f373a7afbeb": "e1ce7f1c3011594ac8c6b7beb1e8f796",
".git/objects/1d/07ff06ad204dc872d547381d225d7c94c2079f": "e28c7678e173ddab6479b34ff942c7cf",
".git/objects/d3/44747377b003df9991a7edc21b9b682b88ac9c": "eedf830c715f1d109b5b9e5ee6b6c942",
".git/objects/89/54064de6481c7019587deb92ab3902ffdc3d76": "74784c0c7ab26451ebdee1143485013f",
".git/objects/48/217617005575345943d8460b76c03381fed224": "6eb02af7684e2da217c7c7aea938335e",
".git/objects/32/4b802d824d6d96d4b020649231513bcd18cfad": "dc5b20eec93868fccb84cc94fc20e203",
".git/objects/ed/518ab0d9620d356518c4b45b48308adf0e4aa5": "5cfcb173a790871f6978806a215eb35a",
".git/objects/ed/02dcf7240148154b0a203e34e59d2e4335408b": "5d4103fcdd96f892eeb37e164676b03e",
".git/objects/0a/71d552b672ae5d0abd7a9b28fd9b6162dfb320": "e8d6519183890037e502b4346d78a412",
".git/objects/6e/38edffe32100deb158c81458d61815fa70c20a": "7abca20873c339b3cc7e70c775503ed9",
".git/objects/02/78e18cfd83a24fe0caf438baa18135a07e50c0": "e9df7b73009f95af8cd516390dd572eb",
".git/objects/62/598ba7e50b83017c5eca9fa56ddde61193b19e": "023a9188486e15e2a2b326c802958400",
".git/objects/c5/014bf88f821f3c6cdf873f44832bcd5d70fcf6": "c6bf683d6f31536b6f950e6b2a271fff",
".git/objects/50/07f6b06dd3cba258471a823799bf605dc058e5": "62af5df3e04b2667618351a2c568b3f5",
".git/objects/50/5f9681e95e0d6e38119b8c6a749258838c2872": "f25143b7a047faeaa65561b071ad01d0",
".git/objects/8e/807acaf9799dbf75c28650dd890bbf9f2d9648": "fa8adbd17d181f655666ca1c1d78136c",
".git/objects/4e/81f653f6bd8dc656baeec1beb0f28ea1900e02": "5ce302e863d0330715e725679db3febe",
".git/objects/ac/94329a17fe73360e77e8bbd58e25574dbe2ba7": "e27a969f6b6406932b71210c2bb7b51c",
".git/objects/8c/f035bd3e0352d4d91c716a6937c7183ebeb5e2": "8019f6be3f215d9976ff1d82ed04051d",
".git/objects/25/f26fe7a337ac3bded9f5f9675e9cb956cbbdbb": "6bf3c22f4b049d82a550692f07b8d43c",
".git/objects/88/df7c896a1a7bbc986224840dcae3095b0ecd29": "2928d0cf588b8286e63ade7b69bae19c",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/config": "2c1471175db80b7154a4b426f6c3ce5f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "ab1b78a7dc5db1ee99d8e22cae88e71f",
".git/logs/refs/remotes/origin/master": "e686e3d2d6d35fd5cfa9c60c50463935",
".git/logs/refs/heads/master": "ab1b78a7dc5db1ee99d8e22cae88e71f",
"version.json": "8fc04d3bb5eefe8d781ad73b36e9c0a1",
"manifest.json": "87de623c624f363df6f4d1a711a4d742"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
