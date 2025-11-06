const CACHE = 'pwa-cache-v2';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './src/app.js',
    './manifest.json',
    './offline.html'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
});


self.addEventListener('fetch', (e) => {
    const req = e.request;

    if (req.mode === 'navigate') {
        e.respondWith(
            fetch(req).catch(() => caches.match('./offline.html'))
        );
        return;
    }

    e.respondWith(
        caches.match(req).then(r => r || fetch(req))
    );
});
