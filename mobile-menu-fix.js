(function(){
  function addMeta(name,content){if(!document.head.querySelector('meta[name="'+name+'"]')){const m=document.createElement('meta');m.name=name;m.content=content;document.head.appendChild(m)}}
  function addProperty(property,content){if(!document.head.querySelector('meta[property="'+property+'"]')){const m=document.createElement('meta');m.setAttribute('property',property);m.content=content;document.head.appendChild(m)}}
  function addLink(rel,href,type){if(!document.head.querySelector('link[rel="'+rel+'"]')){const l=document.createElement('link');l.rel=rel;l.href=href;if(type)l.type=type;document.head.appendChild(l)}}
  function addSEO(){
    const title='ROGIT | Infraestrutura, Redes e Segurança de TI em Sinop-MT';
    const description='ROGIT - Soluções em tecnologia para empresas: infraestrutura, redes, segurança da informação, firewall, Windows Server, Linux, VMware, Zabbix, backup e suporte técnico.';
    document.title=title;addMeta('description',description);addMeta('robots','index, follow, max-image-preview:large');addMeta('theme-color','#06101c');addMeta('author','ROGIT - Rogério Carvalho');addLink('canonical','https://rogit.com.br/');addLink('icon','./favicon.svg','image/svg+xml');addLink('manifest','./site.webmanifest');
    addProperty('og:type','website');addProperty('og:locale','pt_BR');addProperty('og:title','ROGIT | Soluções em Tecnologia');addProperty('og:description',description);addProperty('og:url','https://rogit.com.br/');addProperty('og:site_name','ROGIT');addProperty('og:image','https://rogit.com.br/rogit-logo.svg');addProperty('og:image:alt','ROGIT - Soluções em Tecnologia');
    addMeta('twitter:card','summary_large_image');addMeta('twitter:title','ROGIT | Soluções em Tecnologia');addMeta('twitter:description',description);addMeta('twitter:image','https://rogit.com.br/rogit-logo.svg');
  }
  function applyBranding(){
    const brand=document.querySelector('.brand');
    if(!brand)return;
    brand.innerHTML='<img class="rogit-logo" src="./rogit-logo.svg" alt="ROGIT - Soluções em Tecnologia">';
    const st=document.createElement('style');
    st.textContent='.brand{display:flex!important;align-items:center!important;min-width:0!important}.rogit-logo{display:block;width:250px;max-width:38vw;height:auto;object-fit:contain;filter:drop-shadow(0 0 14px rgba(8,124,255,.18))}@media(max-width:950px){.rogit-logo{width:220px;max-width:58vw}}@media(max-width:560px){.rogit-logo{width:205px;max-width:62vw}}';
    document.head.appendChild(st);
  }
  function fixWhatsApp(){
    const wa=document.querySelector('.float-wa');if(!wa)return;
    wa.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.66 1.83-1.29.23-.64.23-1.18.16-1.29-.07-.12-.25-.18-.52-.32zM16.03 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.45 1.7 6.39L3.14 29l6.79-1.78a12.75 12.75 0 0 0 6.1 1.55h.01c7.05 0 12.78-5.73 12.78-12.78S23.08 3.2 16.03 3.2zm0 23.41h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.58 10.58 0 0 1-1.62-5.65c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c-.01 5.86-4.78 10.62-10.65 10.62z"/></svg>';
    wa.setAttribute('aria-label','Falar no WhatsApp');wa.setAttribute('title','Falar no WhatsApp');
  }
  function init(){
    addSEO();applyBranding();fixWhatsApp();
    const header=document.querySelector('header');if(!header)return;
    const container=header.querySelector('.nav'),nav=header.querySelector('nav');if(!container||!nav)return;
    let btn=container.querySelector('.menu-btn')||container.querySelector('.mobile-menu-btn');
    if(!btn){btn=document.createElement('button');btn.className='menu-btn';btn.type='button';btn.textContent='☰';btn.setAttribute('aria-label','Abrir menu');container.appendChild(btn)}
    btn.onclick=function(e){e.preventDefault();e.stopPropagation();const open=nav.classList.toggle('mobile-open');btn.textContent=open?'✕':'☰';btn.setAttribute('aria-expanded',open?'true':'false')};
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('mobile-open');btn.textContent='☰'}));
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();