const CACHE_NAME = 'studora-v1';
const ASSETS_TO_CACHE = [
  '/studora/',
  '/studora/index.html',
  '/studora/style.css',
  '/studora/about.html',
  '/studora/privacy.html',
  '/studora/contact.html',
  '/studora/terms.html'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
