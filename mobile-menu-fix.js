(function(){
  function init(){
    const header=document.querySelector('header');
    if(!header) return;
    const container=header.querySelector('.nav');
    const nav=header.querySelector('nav');
    if(!container||!nav) return;

    let btn=container.querySelector('.mobile-menu-btn');
    if(!btn){
      btn=document.createElement('button');
      btn.className='mobile-menu-btn';
      btn.type='button';
      btn.setAttribute('aria-label','Abrir menu');
      btn.setAttribute('aria-expanded','false');
      btn.textContent='☰';
      container.insertBefore(btn,container.querySelector('.btn'));
    }

    const style=document.createElement('style');
    style.textContent=`
      @media (max-width:850px){
        header{position:sticky!important;top:0!important;z-index:99999!important;width:100%!important;background:rgba(3,9,16,.98)!important}
        header .nav{position:relative!important;display:flex!important;align-items:center!important;justify-content:space-between!important;min-height:64px!important;width:calc(100% - 28px)!important;margin:auto!important}
        header .mobile-menu-btn{display:flex!important;align-items:center!important;justify-content:center!important;visibility:visible!important;opacity:1!important;position:relative!important;z-index:100001!important;width:44px!important;height:44px!important;min-width:44px!important;padding:0!important;margin-left:8px!important;border:1px solid #19a7ff!important;border-radius:7px!important;background:#071525!important;color:#fff!important;font-size:23px!important;line-height:1!important;cursor:pointer!important}
        header nav{display:none!important;position:absolute!important;left:0!important;right:0!important;top:62px!important;z-index:100000!important;flex-direction:column!important;align-items:stretch!important;gap:0!important;padding:8px!important;background:#06111d!important;border:1px solid #19a7ff!important;border-radius:8px!important;box-shadow:0 18px 40px rgba(0,0,0,.8)!important}
        header nav.mobile-open{display:flex!important;visibility:visible!important;opacity:1!important}
        header nav.mobile-open a{display:block!important;padding:14px!important;border-bottom:1px solid #17304a!important;color:#fff!important;font-size:14px!important;background:#06111d!important}
        header nav.mobile-open a:last-child{border-bottom:0!important}
        header>.container>.btn{display:none!important}
      }
      @media (min-width:851px){header .mobile-menu-btn{display:none!important}}
    `;
    document.head.appendChild(style);

    btn.onclick=function(ev){
      ev.preventDefault();ev.stopPropagation();
      const open=nav.classList.toggle('mobile-open');
      btn.textContent=open?'✕':'☰';
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
    };
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',function(){
      nav.classList.remove('mobile-open');btn.textContent='☰';btn.setAttribute('aria-expanded','false');
    }));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();