const CACHE_NAME = "treecetrain-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/apple-touch-icon.png",
  "./icons/favicon.png",
  "./icons/icon-1024.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
  "./icons/icon-rounded-256.png",
  "./icons/splash-1125x2436.png",
  "./icons/splash-1170x2532.png",
  "./icons/splash-1179x2556.png",
  "./icons/splash-1206x2622.png",
  "./icons/splash-1242x2208.png",
  "./icons/splash-1242x2688.png",
  "./icons/splash-1284x2778.png",
  "./icons/splash-1290x2796.png",
  "./icons/splash-1320x2868.png",
  "./icons/splash-640x1136.png",
  "./icons/splash-750x1334.png",
  "./icons/splash-828x1792.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const network = fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
