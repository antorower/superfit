if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>s(e,n),o={module:{uri:n},exports:r,require:t};a[n]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Storage/gym-background-small.png",revision:"3e5bed124b552e96b79c82dc153b6251"},{url:"/Storage/gym-background.jpg",revision:"c4d5fdffbc09971ae6f2c6b61ed94107"},{url:"/Storage/muscular-man-home-small.png",revision:"dda426de616238965a599eb31c62b0a1"},{url:"/Storage/weight-background-small.png",revision:"d951b3ef77ae512610a81ddf9c9756f1"},{url:"/Storage/weight-background.jpg",revision:"262fe117e29caa06bdb8e2e9251829e5"},{url:"/_next/app-build-manifest.json",revision:"8a184a1e72dbbd89e5a8ddff70619823"},{url:"/_next/static/chunks/123-389cbc009b2fa12a.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/173-b8402f5bfdfd4b71.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/23-9a832c37672685bd.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/230-7c697025fcaff8c8.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/231-a501d99c89d5a04b.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/930-16607f09fe6c195f.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/app/%5Blanguage%5D/contact/page-a8341f70bbf8fc7d.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/app/%5Blanguage%5D/layout-b7a8c1f8e7162926.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/app/%5Blanguage%5D/page-df2cf202678de463.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/app/%5Blanguage%5D/services/page-d4b887935bdcbcfc.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/app/%5Blanguage%5D/team/layout-336f5167398c980c.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/app/%5Blanguage%5D/team/page-af3ea8a07ea56b06.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/app/%5Blanguage%5D/testimonials/page-0fb3c4605b6f7571.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/app/_not-found/page-f0f5b16907ba99b8.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/fd9d1056-1a6cec4e37df8ae8.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/main-app-cf541e24ee7e849d.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/main-cfa3fe352d102640.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-42b23e205537b07b.js",revision:"ibm1Rt6a93IlorrmCR84Z"},{url:"/_next/static/css/4f3d422d4eaf4e3a.css",revision:"4f3d422d4eaf4e3a"},{url:"/_next/static/ibm1Rt6a93IlorrmCR84Z/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/ibm1Rt6a93IlorrmCR84Z/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/0e5e1c6a8db9e432-s.woff2",revision:"f201ef2b6f1307dd8b1ec0c0deffceea"},{url:"/_next/static/media/120a5a1920781bd0-s.p.woff2",revision:"8c4b05d4371467ba1d0bc60839c6dcb9"},{url:"/_next/static/media/28aa5118b38b86e4-s.p.woff2",revision:"db5317b009a0dedd66dab31d7889b5f3"},{url:"/_next/static/media/3263d47450c31525.woff2",revision:"52925f4192e11f73e072dcfbd91d242e"},{url:"/_next/static/media/343c4e53384b218b-s.p.woff2",revision:"e3301c0102425179fbe7ebd2f338e539"},{url:"/_next/static/media/39aa2b9ad46ddbfc-s.woff2",revision:"253cf82b41739592d870cb223939ffc8"},{url:"/_next/static/media/4816c29d9ab83346.woff2",revision:"9a6486983313738a8a36af1d9d875436"},{url:"/_next/static/media/483de911b1a0d258-s.woff2",revision:"28502b06e67112e0bf77a784aee917d0"},{url:"/_next/static/media/5693677ef07d9b51-s.woff2",revision:"96b57d1ae0a86dcf7913589b27426343"},{url:"/_next/static/media/6ebb97b5c9fa4e03-s.p.woff2",revision:"39aff03d2a35b1c80f210051f35d4b2b"},{url:"/_next/static/media/7a7012758df5a81e-s.woff2",revision:"26024640d95a44fd98f614d6f4372e4b"},{url:"/_next/static/media/7c16c8204ab29534-s.woff2",revision:"eac32b711872911e7e7c107eb7a7901a"},{url:"/_next/static/media/80b1a0e600ca6d83-s.woff2",revision:"584ea11fad4f10a879c8530e7575cbbf"},{url:"/_next/static/media/8720059dfa14a1fe-s.woff2",revision:"1254e937b1635a843bc7bdee51de2aeb"},{url:"/_next/static/media/8ae82e195feca25a.p.woff2",revision:"c2ed17998919294926dca0e10a54e80a"},{url:"/_next/static/media/98a28a5430a3cf7f-s.p.woff2",revision:"7dada9344a370f25dc1d3b7030da67b6"},{url:"/_next/static/media/9bcd2c693a36f961-s.p.woff2",revision:"580587313acd254e4484d5fd3323e308"},{url:"/_next/static/media/c1edb83e2eb4a66c-s.woff2",revision:"20a534c8a4932ae31aaee287fb197329"},{url:"/_next/static/media/c92a7156c4d6cba0.woff2",revision:"c340c454503c782f8d0ddc2473731b16"},{url:"/_next/static/media/df2942b6de9d14b5-s.woff2",revision:"47e8ccc33b3dcfbe6d31914569515bf4"},{url:"/_next/static/media/f1df6186c8d69644-s.woff2",revision:"307c90aaa7d9c628155ee8cb913b8382"},{url:"/_next/static/media/f3d73cdcacbba62d.p.woff2",revision:"7ab3459cfe45ae5a435c2a131333c655"},{url:"/_next/static/media/f756da832d8c34d4-s.woff2",revision:"ef6b28a1181a73b788c8669d6ad9adc8"},{url:"/_next/static/media/fe527d7e958a1f7f.woff2",revision:"945d2e3ec936afc7b2695a3b4261b4d7"},{url:"/apple-touch-icon.png",revision:"d83aca28e58bdd9d85621d3aff49acbc"},{url:"/call-now.svg",revision:"6c270ae696e93d5c2d4e5e8adcc9e060"},{url:"/gb-flag.svg",revision:"873c89d7ed7f2f2d7734c9990d18e18a"},{url:"/georgia.webp",revision:"85c29331105d0b175e0bbe5c88c2fd5c"},{url:"/greece-flag.svg",revision:"da34f9358c7638581b1c5d5f28f61df7"},{url:"/gym-background.webp",revision:"9612f17c56dfd53b7c5d0f4fcf171d3d"},{url:"/gym-profile.webp",revision:"5b2096ff79a4961f2ecb66b78f4a30f4"},{url:"/icon-192x192.png",revision:"13fd3cb0102426f3cb1b952a68052dbb"},{url:"/icon-512x512.png",revision:"ffb6a2e4ce2347d04c1a36437327607e"},{url:"/icons/address.svg",revision:"e056018ca2ac8893ac5f83c306175c43"},{url:"/icons/calendar-black.svg",revision:"e482dd8d28eac612654cb75ff7a7ece2"},{url:"/icons/calendar-yellow.svg",revision:"a0934a8b3d33711b53ea166283e5eecf"},{url:"/icons/calendar.svg",revision:"ad36846313d5f766461f2885c53bd6d9"},{url:"/icons/call-white.svg",revision:"3f9affd0127b4dfebb90679c7b2fcadf"},{url:"/icons/call.svg",revision:"6e1071d3267738a0a430c0473a797691"},{url:"/icons/close-dark.svg",revision:"36529fa42a62858d9faa3a1a2654a139"},{url:"/icons/close.svg",revision:"b8a628cb28fcace5751369bfc7c83e63"},{url:"/icons/doctor-bag.svg",revision:"b46932744be3d947348387b7477f39a4"},{url:"/icons/email.svg",revision:"437dc7f4380fe5eee159fa0c37155b1f"},{url:"/icons/eye.svg",revision:"b99031d6ba349cc83c50a61af06eb7d4"},{url:"/icons/food.svg",revision:"5a7d7d74d1856fbf800b91cfb08251fa"},{url:"/icons/group.svg",revision:"b9778119bca2925b3ebb6e1ee2f30728"},{url:"/icons/home-yellow.svg",revision:"960e341869fefdaba5396173f747884d"},{url:"/icons/home.svg",revision:"87a450c6df3b6ce69c5fae1e18aa740f"},{url:"/icons/instagram-icon.png",revision:"d3623506421df94f36240b6f6be96167"},{url:"/icons/logo-letters-only.svg",revision:"612a16fa75643f2b2003defda137f27d"},{url:"/icons/logo-with-letters.svg",revision:"1ff4fdea2964a3d22106ce2201de9b6b"},{url:"/icons/logo.png",revision:"d3655283d7f316c835a4453820502825"},{url:"/icons/logo.svg",revision:"de605a507e02aea6349db53c850f86aa"},{url:"/icons/map-yellow.svg",revision:"0cb27669361dd4999e3871707fdbbf0d"},{url:"/icons/map.svg",revision:"68aaa2c3c208e25493afb338c66d01eb"},{url:"/icons/menu.svg",revision:"1c290c2097b38a0e5633bb080f47f2b3"},{url:"/icons/robot-dark.svg",revision:"8da0820291e3ecc18549362fda4add28"},{url:"/icons/robot.svg",revision:"647f21b71ff3b6684b8227acff7b406b"},{url:"/icons/spinning.svg",revision:"10d9004050bce89839b67739e63cbc0c"},{url:"/icons/star.svg",revision:"81aaadcfab79df4bea19f8ecd59d9d4a"},{url:"/icons/strong.svg",revision:"92d09e95af0517516c2644217ff99a3e"},{url:"/icons/team.svg",revision:"52eaae07a9221bd81ae0e437dc5493ba"},{url:"/icons/telephone-yellow.svg",revision:"1ecad648eeb6081bdacfbe076d790145"},{url:"/icons/telephone.svg",revision:"430ce9a3b2ceb0e9b92cdcd504a9e741"},{url:"/icons/tik-tok-icon.jpg",revision:"7d8d84fa1865fa612eb31f55a08da718"},{url:"/icons/weight-gym.svg",revision:"4296fc805d1de91fdd49f218c08d411a"},{url:"/icons/weight-yellow.svg",revision:"c615d9f15fb56b3812d65b368c636192"},{url:"/icons/weight.svg",revision:"da40581c35c5250370c66660cf221085"},{url:"/manifest.json",revision:"402c80afae0bd0a47178a1ebc2669901"},{url:"/muscular-man-home.webp",revision:"14de714f5cd7bb545c268d5053ca64a8"},{url:"/weight-background.webp",revision:"0a55107d61131da09651171f31016240"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
