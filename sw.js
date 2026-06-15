// Service Worker — basic offline caching for Cert Mastery
const CACHE_NAME = 'cert-mastery-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './data/questions.js',
  './data/questions_aws_p1.js',
  './data/questions_aws_p2.js',
  './data/questions_aws_p3.js',
  './data/questions_securityplus.js',
  './data/questions_securityplus_p1.js',
  './data/questions_securityplus_p2.js',
  './data/questions_securityplus_p3.js',
  './data/questions_cissp.js',
  './data/questions_cissp_p1.js',
  './data/questions_cissp_p2.js',
  './data/questions_cissp_p3.js',
  './data/questions_pmp.js',
  './data/questions_pmp_p1.js',
  './data/questions_pmp_p2.js',
  './data/questions_pmp_p3.js',
  './data/questions_nce.js',
  './data/questions_nce_p1.js',
  './data/questions_nce_p2.js',
  './data/questions_nce_p3.js',
  './data/questions_ncmhce.js',
  './data/questions_ncmhce_p1.js',
  './data/questions_ncmhce_p2.js',
  './data/questions_ncmhce_p3.js',
  './data/notes.js',
  './data/notes_cissp_pmp.js',
  './data/notes_mentalhealth.js',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(() => {
        // Best-effort: ignore failures
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        // Cache new same-origin GETs
        if (response && response.status === 200 && event.request.url.startsWith(self.location.origin)) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, copy)).catch(() => {});
        }
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
