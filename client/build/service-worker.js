"use strict";var precacheConfig=[["/index.html","9750707c52696ff3eedca3f7062580a2"],["/static/css/main.508fae51.css","d011918571324c549eb158b517a1490e"],["/static/js/0.c096c5ae.chunk.js","c97b8d1071161414227794cd48251302"],["/static/js/main.1e11c66c.js","5ba740cf01235a90f1f266a728ceaaba"],["/static/media/BertuccelliRobin3Circle2.3cb833c6.png","3cb833c61f93abf852d9e2bf135a4cc2"],["/static/media/bethRest2.24060be0.png","24060be09cfa90b5c863b15a5c5e0e7a"],["/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/static/media/brettFavre.98c5da8f.png","98c5da8f6b387597fd30e137cbe80b38"],["/static/media/candiMatchSS200.f00aff6d.png","f00aff6d0b8d7d6a1d95325c32a1fbd8"],["/static/media/dessaAlibi.e5d0fceb.png","e5d0fceb807b9152a9d2ca0bee7fb5f3"],["/static/media/drupal.097f09a7.png","097f09a775e7221b46f81ae59e40af4f"],["/static/media/feminineMystique200.c683c864.png","c683c864ea5abc245d44ab9bed6d4a69"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/handlebars.aff4bd72.png","aff4bd724943a92646fa01296ca6cd29"],["/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/static/media/intoTemptation.593e8c36.png","593e8c3633894bd71d5fc94666f98659"],["/static/media/javascript.33eae4f2.png","33eae4f20d92540b947ae402dcdd755a"],["/static/media/jquery.450f2b96.png","450f2b96f7e9a4dd6bd4203e9ae7d6d1"],["/static/media/neilGaiman.32a78daf.png","32a78dafc9f5dbec1b5875cd72fbd115"],["/static/media/node_js.d42672d4.png","d42672d4d185739d26257ed5c653c740"],["/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/static/media/profile200.224be88b.png","224be88b1e9cf13de61b55d765f8fadd"],["/static/media/publicDomain.41f08b9e.png","41f08b9e6c16033a893594a9dfddf503"],["/static/media/react.2ff1c121.png","2ff1c12171200d82cc706ace04fabf71"],["/static/media/walkingDeadClickyGame.647c2ffa.png","647c2ffa301c41ad2e1ff7bc70dfc463"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});