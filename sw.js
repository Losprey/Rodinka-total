// FamilyWeek Ultimate 2026 — Service Worker
// Verzia: 2.0.0

const CACHE_NAME = 'familyweek-v3';
const ASSETS = [
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap'
];

// Inštalácia – predcache všetkých assetov
self.addEventListener('install', event => {
  console.log('[SW] Inštalujem FamilyWeek v2...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS.filter(a => !a.startsWith('http'))))
      .then(() => self.skipWaiting())
  );
});

// Aktivácia – vymaž staré cache
self.addEventListener('activate', event => {
  console.log('[SW] Aktivujem...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => {
        console.log('[SW] Mažem starý cache:', k);
        return caches.delete(k);
      }))
    ).then(() => self.clients.claim())
  );
});

// Fetch – Cache First pre assety, Network First pre API
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Google Fonts – cache first
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        });
      })
    );
    return;
  }

  // Lokálne súbory – cache first, fallback na network
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => {
          // Offline fallback
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
          return new Response('Offline – FamilyWeek', { status: 503 });
        });
      })
    );
    return;
  }

  // Ostatné requesty – network only
  event.respondWith(fetch(event.request).catch(() => new Response('Offline', { status: 503 })));
});

// Push notifikácie (pripravené pre budúce použitie)
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'FamilyWeek pripomienka',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/' }
  };
  event.waitUntil(
    self.registration.showNotification(data.title || 'FamilyWeek', options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url || '/'));
});
