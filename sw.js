const CACHE = 'asrar-azal-v7-modals';
const ASSETS = [
  './',
  './index.html',
  './app.css',
  './app.js',
  './app-1.js',
  './app-2.js',
  './app-3.js',
  './app-4.js',
  './app-5.js',
  './app-6.js',
  './manifest.webmanifest',
  './icon.svg'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
