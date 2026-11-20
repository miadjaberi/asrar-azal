// Online-only Service Worker for installable PWA.
// No Cache API, no offline shell, and no offline fallback.
self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Pass requests directly to the network. When offline, requests fail normally.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request));
});
