if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const r=e=>s(e,n),f={module:{uri:n},exports:o,require:r};i[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(a(...e),o)))}}define(["./workbox-665d1055"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/8tYMsddm5llw3WAKTi_jZ/_buildManifest.js",revision:"79a17dab666d8dd0e877f160d9e9caf8"},{url:"/_next/static/8tYMsddm5llw3WAKTi_jZ/_middlewareManifest.js",revision:"b8473bde57e80626206a2206e3b14c77"},{url:"/_next/static/8tYMsddm5llw3WAKTi_jZ/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/171-1e766c37c2b918c8.js",revision:"1e766c37c2b918c8"},{url:"/_next/static/chunks/2-a7a51164b01a5f13.js",revision:"a7a51164b01a5f13"},{url:"/_next/static/chunks/406-eb63bd705aba188e.js",revision:"eb63bd705aba188e"},{url:"/_next/static/chunks/445-d582972e50387eb4.js",revision:"d582972e50387eb4"},{url:"/_next/static/chunks/669-af50e33e8221387b.js",revision:"af50e33e8221387b"},{url:"/_next/static/chunks/683-2a151344b170472b.js",revision:"2a151344b170472b"},{url:"/_next/static/chunks/7112840a-663bb44ff6be5c1a.js",revision:"663bb44ff6be5c1a"},{url:"/_next/static/chunks/framework-9346e584cf5fb262.js",revision:"9346e584cf5fb262"},{url:"/_next/static/chunks/main-857e1692674a2fb6.js",revision:"857e1692674a2fb6"},{url:"/_next/static/chunks/pages/_app-4bcea9b3ef5b0807.js",revision:"4bcea9b3ef5b0807"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"d742f979193aeae4"},{url:"/_next/static/chunks/pages/admin-94cfe47b821011f1.js",revision:"94cfe47b821011f1"},{url:"/_next/static/chunks/pages/book/%5Bid%5D-f633d37856ddacb1.js",revision:"f633d37856ddacb1"},{url:"/_next/static/chunks/pages/chapter/%5Bid%5D/%5Bcid%5D-f8cf3b6af8e1e3a6.js",revision:"f8cf3b6af8e1e3a6"},{url:"/_next/static/chunks/pages/hymnmain-4205fd36b35e824f.js",revision:"4205fd36b35e824f"},{url:"/_next/static/chunks/pages/index-dd4fab300e1be930.js",revision:"dd4fab300e1be930"},{url:"/_next/static/chunks/pages/offering-5a5cc5b52a628ae9.js",revision:"5a5cc5b52a628ae9"},{url:"/_next/static/chunks/pages/onbibledetail-8b78cc68a5b0029e.js",revision:"8b78cc68a5b0029e"},{url:"/_next/static/chunks/pages/onmain-1bb5cae594a8ca5a.js",revision:"1bb5cae594a8ca5a"},{url:"/_next/static/chunks/pages/onprayerdetail-82b99177bf0281a5.js",revision:"82b99177bf0281a5"},{url:"/_next/static/chunks/pages/onthreedetail-7a28b41e8cadf573.js",revision:"7a28b41e8cadf573"},{url:"/_next/static/chunks/pages/praisedetail-008003d47f8016b1.js",revision:"008003d47f8016b1"},{url:"/_next/static/chunks/pages/praisemain-af54ff56c931fc84.js",revision:"af54ff56c931fc84"},{url:"/_next/static/chunks/pages/search-ad1e92159c21b2d4.js",revision:"ad1e92159c21b2d4"},{url:"/_next/static/chunks/pages/sermondetail-4819e580679937f5.js",revision:"4819e580679937f5"},{url:"/_next/static/chunks/pages/sermonmain-08fedaefe6ac7243.js",revision:"08fedaefe6ac7243"},{url:"/_next/static/chunks/pages/settings-3695796a396ee55e.js",revision:"3695796a396ee55e"},{url:"/_next/static/chunks/pages/weeklynews-b4a236c502d1a15f.js",revision:"b4a236c502d1a15f"},{url:"/_next/static/chunks/pages/weeklyorder-023a396b6f596bd1.js",revision:"023a396b6f596bd1"},{url:"/_next/static/chunks/pages/weeklysummary-282d243db5753b0c.js",revision:"282d243db5753b0c"},{url:"/_next/static/chunks/pages/weeklywords-02d00ac3f8867868.js",revision:"02d00ac3f8867868"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-043901969ab14c5d.js",revision:"043901969ab14c5d"},{url:"/_next/static/css/184a6c448a0a3052.css",revision:"184a6c448a0a3052"},{url:"/_next/static/css/1d8efe522a3dfcec.css",revision:"1d8efe522a3dfcec"},{url:"/_next/static/css/856134d9095633ad.css",revision:"856134d9095633ad"},{url:"/_next/static/css/89e0207573509fed.css",revision:"89e0207573509fed"},{url:"/_next/static/media/NanumBarunGothicWeb.af7b31ac.woff",revision:"af7b31ac"},{url:"/_next/static/media/NanumBarunGothicWeb.b5e296b7.ttf",revision:"b5e296b7"},{url:"/_next/static/media/NanumBarunGothicWebBold.7e787ad5.ttf",revision:"7e787ad5"},{url:"/_next/static/media/NanumBarunGothicWebBold.aefbddb7.woff",revision:"aefbddb7"},{url:"/_next/static/media/NanumBarunGothicWebLight.704553dc.woff",revision:"704553dc"},{url:"/_next/static/media/NanumBarunGothicWebUltraLight.4776cc96.ttf",revision:"4776cc96"},{url:"/_next/static/media/NanumBarunGothicWebUltraLight.99efa914.woff",revision:"99efa914"},{url:"/favicon.ico",revision:"14bc9ce25e233b308e72ac9cd8e073c1"},{url:"/firebase-logo.png",revision:"c3330f751280e6dd26199b48db7f1118"},{url:"/firebase-messaging-sw.js",revision:"8e02ebda07ee83a8458dcfc59f80802e"},{url:"/icons/ico_alarm.svg",revision:"78adb80a8f71e5f7ff2db52a9188c499"},{url:"/icons/ico_back.svg",revision:"66142efca9897e723e4d77a404dc4594"},{url:"/icons/ico_bible.svg",revision:"ae18de9430fab0f8cd376c6dcd3e42fc"},{url:"/icons/ico_bible_off.svg",revision:"3935487fed8cbe9ef6f8f130d23b1d38"},{url:"/icons/ico_blog.svg",revision:"94c8a8367dd1c4582fcde7be218ed555"},{url:"/icons/ico_blog2.svg",revision:"94c8a8367dd1c4582fcde7be218ed555"},{url:"/icons/ico_book.svg",revision:"6b72eadecdb0f4f26844d678d85d0843"},{url:"/icons/ico_check.svg",revision:"cb672f504a6497eb829ae93fc726b68a"},{url:"/icons/ico_check_off.svg",revision:"84b3de052aded0b6ba7db041cb571292"},{url:"/icons/ico_close.svg",revision:"f37af77d23e26d3debf70b8b8ffcf990"},{url:"/icons/ico_copy.svg",revision:"ced718a84d1901469e7696cc29f42160"},{url:"/icons/ico_delete.svg",revision:"e4a4fb93d99265427a84f12d327b1cef"},{url:"/icons/ico_drop.svg",revision:"5282955a26b08dd508c4c3c1fccc8b41"},{url:"/icons/ico_facebook.svg",revision:"0830f4b79e8e1330a4a12b26cd5c0d79"},{url:"/icons/ico_filter.svg",revision:"84934979e40afdf07972cdfaff0c12a7"},{url:"/icons/ico_home.svg",revision:"1ae500251b429cf7ed0890784cc9e10d"},{url:"/icons/ico_home_off.svg",revision:"66edd340fc8d0c0f76c30c4a325285a2"},{url:"/icons/ico_hymn.svg",revision:"a32e8793282d3fe80b5af328f1a1b881"},{url:"/icons/ico_instar.svg",revision:"8b3f59081a450b9d2af1ea79d526ffe5"},{url:"/icons/ico_kakao.svg",revision:"fbe3952a9f2777a270df3b7be681c8cb"},{url:"/icons/ico_list.svg",revision:"a541902a759ba92406cb257c41ed9095"},{url:"/icons/ico_menu.svg",revision:"d7296a4a7c1cbe36908c9a79b709eba9"},{url:"/icons/ico_menu_off.svg",revision:"078d8ea4f25a3ce9bb99cdff73922d91"},{url:"/icons/ico_message.svg",revision:"5f34f35eec0c45720dbabe5d9115a647"},{url:"/icons/ico_onseries.svg",revision:"99779710281b8478c2639e3e1ed23b90"},{url:"/icons/ico_onseries_off.svg",revision:"64f98ba96a3e56350a09675987056cb7"},{url:"/icons/ico_play.svg",revision:"c6139a3e4bc90920477916ad37f555ac"},{url:"/icons/ico_quick_bible.svg",revision:"572e338f0c565a5a856a3b7f184b2414"},{url:"/icons/ico_quick_bible1.svg",revision:"e203161601bb03bc9b57300000f0fff3"},{url:"/icons/ico_quick_hymn.svg",revision:"60d1061d1b8d1b8f3feaab7993bdb5fe"},{url:"/icons/ico_quick_mission.png",revision:"be9cc2fadfef87f7cc278bd8906be386"},{url:"/icons/ico_quick_mission.svg",revision:"668aee9cd941fafb6c618e175f190f56"},{url:"/icons/ico_quick_news.svg",revision:"6713dfd2122946fd8c1cf62b42e7dfa2"},{url:"/icons/ico_quick_offering.svg",revision:"d4912df6e5de249e9b79a30056987a8c"},{url:"/icons/ico_quick_onseries.svg",revision:"adfa97021110cb3e9ed4ecc32efddc4c"},{url:"/icons/ico_quick_praise.svg",revision:"ca1d376334463a73e27df78d6dc1ee85"},{url:"/icons/ico_quick_sermon.svg",revision:"c46157d90401e1504a3bde6ae8de7f61"},{url:"/icons/ico_quick_weekly.svg",revision:"c614a584c6988bf2f3f1d2d150acf0fb"},{url:"/icons/ico_sat.svg",revision:"ab7d784db509f099941f16bbbff74b5a"},{url:"/icons/ico_search.svg",revision:"5f3dc98764524968ab4c58364c9d8b12"},{url:"/icons/ico_sermon.svg",revision:"5ab57a4ad0e4aeb71c0c073764e5e855"},{url:"/icons/ico_sermon_off.svg",revision:"39deed28f33da4dceeba9c627c1de731"},{url:"/icons/ico_setting.svg",revision:"17cbe1f0ef63dbb9b25ff59e559219c1"},{url:"/icons/ico_share.svg",revision:"be8b24f4ff8c84964a3a1ddf8edbf0c2"},{url:"/icons/ico_swiper_left.svg",revision:"a5927008e99216df464cc7c87ef05cf7"},{url:"/icons/ico_swiper_right.svg",revision:"845c21a499d54f7f6743d0067544a304"},{url:"/icons/ico_trans.svg",revision:"921d0b0a767f56406597f2b62783430c"},{url:"/icons/ico_url.svg",revision:"b1523b4391fbeec9b54fc261268e59a5"},{url:"/icons/ico_youtube.svg",revision:"b317228d5b3db6e25648c79d05bb08a1"},{url:"/icons/icon_128x128.png",revision:"89d2d5d11e65f8dfe193710746e42bef"},{url:"/icons/icon_144x144.png",revision:"9e47b1d771a4236ab1ab8cc2f94439e8"},{url:"/icons/icon_152x152.png",revision:"f3f1788f962613bd10d650a8dd9a1d50"},{url:"/icons/icon_167x167.png",revision:"d046a0e799dad262cfe61fae9419f10b"},{url:"/icons/icon_16x16.png",revision:"7ea05e87c4f170b93fd50c9d75924353"},{url:"/icons/icon_180x180.png",revision:"b7e19f1b30ce92b47bef159b661cff94"},{url:"/icons/icon_192x192.png",revision:"f2bd5e173323ca2abd1c4a41cbbf753c"},{url:"/icons/icon_384x384.png",revision:"fbc4c5b4bfbe42dff46de2484c585b1a"},{url:"/icons/icon_512x512.png",revision:"47d7cd2e0985f4bc8af371452c701ce1"},{url:"/icons/icon_72x72.png",revision:"66b840c6c96d3ae7f593cd63884061f2"},{url:"/icons/icon_96x96.png",revision:"5c15fd186bd04b9f67d33e86ca2ec3c9"},{url:"/icons/icon_share_blog.png",revision:"915a68eb0aa44b5be8cf3f72458a9815"},{url:"/icons/icon_share_kakao.png",revision:"809b7ec56f15c595dacd2fa09a2c295b"},{url:"/icons/icon_share_sms.png",revision:"c7556e661bf1dbc0d9c4cb890b5e0553"},{url:"/icons/icon_share_url.png",revision:"336a3dec2a3d9d807f5587b064e71cca"},{url:"/icons/thumb_bwm.svg",revision:"d7a31ccdc754501062c558b0eceab22a"},{url:"/icons/thumb_cba.svg",revision:"44a12c9605fb5f0f696e1d0a1c910dfa"},{url:"/icons/thumb_elementary.svg",revision:"244cd3f64261a4ef362bf7c5f64b95da"},{url:"/icons/thumb_high.svg",revision:"c2277171b5bf4f61f2a81445502eec95"},{url:"/icons/thumb_secondary.svg",revision:"4c75c5f3f8b03a5f5ae6d29195fc4134"},{url:"/images/bg_jubo.png",revision:"00652382b045857c85d9c3232623c071"},{url:"/images/default_img.jpg",revision:"e814120bd59aa85f87f7351e9a21060d"},{url:"/images/img_hymn.svg",revision:"eaf4272415995099adda7bfc058d36cb"},{url:"/images/logo.svg",revision:"1b86473c00b595d2ce5bcc80445898e1"},{url:"/images/main/banner01.png",revision:"b1cebd31fd4c117292638d82e3d91133"},{url:"/images/main_bn_1.png",revision:"9bb48275dce1d119ce9e5cdc7ffdd901"},{url:"/images/main_bn_2.png",revision:"16817667f3bd6d325dee41b111eb848e"},{url:"/images/onthree/img_three01.png",revision:"a93da5765787d77368879c93de2193a3"},{url:"/images/onthree/img_three02.png",revision:"153a8f84c44399db3412f8f0a94c96e2"},{url:"/images/splash-1125x2436.png",revision:"f12e543be336371640e743a1e341be7a"},{url:"/images/splash-1242x2208.png",revision:"8462f5222a548879c02651a800634e68"},{url:"/images/splash-1536x2048.png",revision:"33a00c6aae9302248f53afd808eca872"},{url:"/images/splash-1668x2224.png",revision:"1f5ead321119567a4dd36e5d61886efa"},{url:"/images/splash-2048x2732.png",revision:"c492497613181895513e8af8eb344f42"},{url:"/images/splash-640x1136.png",revision:"eb384f059302285495660c736b9662c1"},{url:"/images/splash-750x1334.png",revision:"048c9821d91a1974d8fc67ed911d1b6e"},{url:"/images/splash_test.jpg",revision:"cbf39fbb4b926790ec1498cb2e3222f1"},{url:"/images/w1.png",revision:"cfa32c86a644ecddada1ca4467557188"},{url:"/images/w2.png",revision:"97db982be35804ab11220741cafe61cb"},{url:"/images/w3.png",revision:"baca7e203849134e87e9f4c74766bbbf"},{url:"/images/w4.png",revision:"971120f44fd10f53680d1d777b0c004f"},{url:"/images/w5.png",revision:"8e708180fabbc4e4e222f8919aa3891d"},{url:"/manifest.json",revision:"fceb9f0e221e81c99b715e106fef1f9c"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
