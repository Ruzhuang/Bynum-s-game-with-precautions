const cache_name = "game-v1";
const assets = [
    "/AandB.png",
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cache_name).then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            console.log("fetch request");
            console.log(fetchEvent.request);
            console.log("caches.match result");
            console.log(res)
            return res || fetch(fetchEvent.request)
        })
    )
})