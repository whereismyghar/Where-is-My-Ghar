const CACHE_NAME = 'wimg-v6';
const STATIC_ASSETS = ['/Where-is-My-Ghar/', '/Where-is-My-Ghar/index.html', '/Where-is-My-Ghar/manifest.json', '/Where-is-My-Ghar/offline.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Skip Supabase API calls and cross-origin
  if (url.hostname.includes('supabase') || url.hostname !== self.location.hostname) {
    return;
  }

  // Network-first for navigation, cache fallback for offline
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match('/Where-is-My-Ghar/offline.html').then((r) => r || caches.match(request).then((cached) => cached || caches.match('/Where-is-My-Ghar/index.html'))))
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request, { cache: 'reload' }).then((response) => {
        if (response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
