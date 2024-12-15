// sw.js - Service Worker script

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                'CB015456',  // Update this path
                '/CB015456/index.html',  // Update this path
                '/CB015456/styles/fn.css',  // Update this path
                '/CB015456/scripts/script.js',  // Update this path
                '/CB015456/favicons/favicon-32x32.png',  // Update this path
                '/CB015456/favicons/favicon-16x16.png'  // Update this path
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
