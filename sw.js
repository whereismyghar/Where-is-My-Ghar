const CACHE_NAME = 'wimg-v30';
const STATIC_ASSETS = ['/', '/index.html', '/app-logo.webp', '/manifest-brand.json', '/safe-area.css', '/theme-tokens.css', '/i18n-runtime.js', '/precache-manifest.json'];

async function precacheAppAssets() {
  const response = await fetch('/precache-manifest.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load the app asset manifest: ${response.status}`);
  const assets = await response.json();
  if (!Array.isArray(assets) || !assets.every((asset) => typeof asset === 'string' && asset.startsWith('/'))) {
    throw new Error('The app asset manifest has an invalid format.');
  }
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll([...new Set([...STATIC_ASSETS, ...assets])]);
}

self.addEventListener('install', (event) => {
  event.waitUntil(precacheAppAssets());
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

  if (url.searchParams.has('wimg-connectivity-probe')) {
    event.respondWith(fetch(request));
    return;
  }

  // Return the cached app shell so its global connectivity fallback remains consistent.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
