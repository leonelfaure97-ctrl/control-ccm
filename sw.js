const V='control-ccm-v6',SHELL=['./','index.html','manifest.json','logo.jpg','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','icons/favicon.png'];
const EXT=['cdn.tailwindcss.com','cdn.jsdelivr.net','www.gstatic.com'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
 if(r.method!=='GET'||!(u.origin===location.origin||EXT.includes(u.hostname)))return;
 e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>{
  const net=fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res}).catch(()=>hit||caches.match('index.html'));
  return hit||net}))});
