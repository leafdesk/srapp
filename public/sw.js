if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"4f5ca87a6870c96ad6fb0f65adfdac9b"},{url:"/_next/static/VnL3RgpCIji-nq2bM_Kks/_buildManifest.js",revision:"4ae67cac8e2f16a4095e806d969d4872"},{url:"/_next/static/VnL3RgpCIji-nq2bM_Kks/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/VnL3RgpCIji-nq2bM_Kks/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/176-7129345c6a5be50f.js",revision:"66609e7db4722472e826b7431b9d850e"},{url:"/_next/static/chunks/666-ef607f4cd41549ba.js",revision:"1f3733059c422531b8f755bc8c2ef82d"},{url:"/_next/static/chunks/669-710c9949a7a12ac0.js",revision:"f25d6a26904e99a4ada505076d55bb73"},{url:"/_next/static/chunks/7112840a-528576f6d2ade99c.js",revision:"957ebf82862b9f45ed5df322fa035265"},{url:"/_next/static/chunks/732-c52a2ba3057a411e.js",revision:"f382e5e4aebee483a4679a1cdd5e82fb"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"4328303147a9363db368b17367be6c71"},{url:"/_next/static/chunks/main-8f95d81205aabba2.js",revision:"70a35a129c9e95dbd8dc25594bc1d7d3"},{url:"/_next/static/chunks/pages/_app-e9dbef20cd70acb5.js",revision:"52141531c074ca691957bf975d005fd6"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"66a54eebfe4647af5ccd0ddebae9c60c"},{url:"/_next/static/chunks/pages/admin-fe07cb2f85e36a70.js",revision:"c8b10a2930c6f9c3270e8102929c3347"},{url:"/_next/static/chunks/pages/bibledetail-ba217a9ff4659532.js",revision:"2ba658cebab1dbfdb0d20afcd9b87051"},{url:"/_next/static/chunks/pages/biblelist-3474e5d9a9ba97c9.js",revision:"a8d23e4cf048dda6241436c75c7acd43"},{url:"/_next/static/chunks/pages/biblemain-55f53b984f196e76.js",revision:"8693bf73a350bd8fa2b87b074d7cfe73"},{url:"/_next/static/chunks/pages/boardview-144b567d0cdc2281.js",revision:"d16ff251c0862f35e1ad172afcb24074"},{url:"/_next/static/chunks/pages/boardwrite-c1717d0735ae5361.js",revision:"c01c55aa17d4fe8a9e6e2cff990deb9e"},{url:"/_next/static/chunks/pages/book/%5Bid%5D-2b258887054d04b5.js",revision:"fab89d835806f1d13b14ecb8f6e2bca3"},{url:"/_next/static/chunks/pages/chapter/%5Bid%5D-6538fb2c4cde2434.js",revision:"960c5cf031ec68ddc9791c77944c2714"},{url:"/_next/static/chunks/pages/csdeclaration-143b3c3ac6c5d3a9.js",revision:"02a165bd94bafce25f99e344e861649a"},{url:"/_next/static/chunks/pages/csmain-213a371c8c11fac1.js",revision:"f7434ed8bb3fccc3f5ce8d6683712206"},{url:"/_next/static/chunks/pages/csnotice-b771c544d5a64870.js",revision:"5012f8cebe70963ae1d8bc6d2a9245a9"},{url:"/_next/static/chunks/pages/index-0d4a63565ae4d4ad.js",revision:"8aa8fb4694e50742efa5cc7865bf43e9"},{url:"/_next/static/chunks/pages/onsub-cbc736405a13f9b4.js",revision:"9fe1af11fce1cbd2e69870ca4fa3329b"},{url:"/_next/static/chunks/pages/praisedetail-183a680ed53220c5.js",revision:"14bbefce0b01c8d5af2bdfa0de568f51"},{url:"/_next/static/chunks/pages/praiselist-776fd0f3261654d7.js",revision:"5c3b9b8a3f3fbaeba5e16e37e13f565a"},{url:"/_next/static/chunks/pages/praisemain-e8689b66ae203d53.js",revision:"ac0b5c3f5643895b211f01ce0e82c7ae"},{url:"/_next/static/chunks/pages/praisesub-6616d93724decc4a.js",revision:"b057f148d2d543c51fb5c0d24a4c5001"},{url:"/_next/static/chunks/pages/search-2510b2b4e66be51f.js",revision:"b4abef77f527da1f89d8d9c24363528a"},{url:"/_next/static/chunks/pages/sermon-306eda1fa0f1a65b.js",revision:"b818349dec9647cb0106fa90647c8e3b"},{url:"/_next/static/chunks/pages/settings-08d3f72a8a61c3cd.js",revision:"7322bcc2f9de239414d675ab4e656892"},{url:"/_next/static/chunks/pages/weeklymain-fb1190402626df8e.js",revision:"e5c80367a4f8b9e0c118f3f794ec78ae"},{url:"/_next/static/chunks/pages/weeklynews-f76eaa644e08cd17.js",revision:"83d8e5dfb707722fcaa1303f06667b62"},{url:"/_next/static/chunks/pages/weeklyorder-1bfbf1c611179d8b.js",revision:"6c4b320225a2fb4b19d006ca6fa91c1b"},{url:"/_next/static/chunks/pages/weeklysummary-e698f37952fa410f.js",revision:"c8338483b7788f2412c18c11a5179d70"},{url:"/_next/static/chunks/pages/weeklywords-2aa7ea63d3a27fd9.js",revision:"c531370fe7d2c9a10a714f55e4358fa8"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-b927671265afed5e.js",revision:"d8897984dc2b7090ed622d8f9ffbbd4f"},{url:"/_next/static/css/1d8efe522a3dfcec.css",revision:"666b6162e13d32b2b2773328e80bf6bb"},{url:"/_next/static/css/4440ca6be7cf7d44.css",revision:"a2b61d81156f202b20ef4c64fa2edd79"},{url:"/_next/static/css/8c12b0946505aa9c.css",revision:"ab7b00c34c70f6bfb169bc4fb9c687b1"},{url:"/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/firebase-logo.png",revision:"c3330f751280e6dd26199b48db7f1118"},{url:"/firebase-messaging-sw.js",revision:"8e02ebda07ee83a8458dcfc59f80802e"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/manifest.json",revision:"f1aa3b50d8454263d485f339736ec44c"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
