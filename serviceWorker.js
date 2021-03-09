const cache_name = "game-v1";
const assets = [
    "/",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/ABC.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/AandB.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/first_click.gif",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/game.html",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/grid6*8.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/index.html",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/isocolumn.gif",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/isocolumn.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/isorow.gif",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/isorow.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/manifest.json",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/script.js",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/script_instruction.js",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/second_click.gif",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/set_grid.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/show-instruction.gif",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/style_instruction.css",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/styles.css",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/third_click.gif",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square150x150Logo.scale-100.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square150x150Logo.scale-125.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square150x150Logo.scale-150.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square150x150Logo.scale-200.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square150x150Logo.scale-400.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square310x310Logo.scale-100.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square310x310Logo.scale-125.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square310x310Logo.scale-150.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square310x310Logo.scale-200.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square310x310Logo.scale-400.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.scale-100.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.scale-125.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.scale-150.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.scale-200.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.scale-400.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-16.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-16_altform-unplated.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-24.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-24_altform-unplated.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-256.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-256_altform-unplated.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-32.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-32_altform-unplated.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-48.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square44x44Logo.targetsize-48_altform-unplated.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square71x71Logo.scale-100.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square71x71Logo.scale-125.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square71x71Logo.scale-150.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square71x71Logo.scale-200.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/Square71x71Logo.scale-400.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/StoreLogo.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/StoreLogo.scale-100.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/StoreLogo.scale-125.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/StoreLogo.scale-150.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/StoreLogo.scale-200.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/StoreLogo.scale-400.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/android-launchericon-144-144.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/android-launchericon-192-192.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/android-launchericon-48-48.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/android-launchericon-512-512.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/android-launchericon-72-72.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/android-launchericon-96-96.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/chrome-extensionmanagementpage-48-48.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/chrome-favicon-16-16.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/chrome-installprocess-128-128.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/firefox-general-128-128.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/firefox-general-16-16.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/firefox-general-256-256.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/firefox-general-32-32.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/firefox-general-48-48.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/firefox-general-64-64.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/firefox-general-90-90.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/firefox-marketplace-128-128.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/firefox-marketplace-512-512.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/msteams-192-192.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/msteams-silhouette-32-32.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-smallsquare-24-24.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-smallsquare-30-30.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-smallsquare-42-42.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-smallsquare-54-54.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-squarelogo-120-120.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-squarelogo-150-150.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-squarelogo-210-210.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-squarelogo-270-270.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-storelogo-50-50.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-storelogo-70-70.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windows-storelogo-90-90.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-appicon-106-106.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-appicon-44-44.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-appicon-62-62.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-mediumtile-150-150.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-mediumtile-210-210.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-mediumtile-360-360.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-smalltile-170-170.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-smalltile-71-71.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-smalltile-99-99.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-storelogo-120-120.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-storelogo-50-50.png",
    "https://ruzhuang.github.io/Bynum-s-game-with-precautions/icons/windowsphone-storelogo-70-70.png",
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