const CACHE_NAME = 'quran-app-v1';
const assets = [
  'index.html',
  'style.css',
  'script.js',
  'manifest.json'
];

// تثبيت التطبيق وتخزين الملفات الأساسية
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق وجلب البيانات
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});