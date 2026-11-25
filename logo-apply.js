(function(){
  try{
    var data=window.ASRAR_LOGO_DATA;
    if(!data)return;
    var lw=document.getElementById('lw');
    if(lw && !lw.querySelector('img')){
      var img=document.createElement('img');
      img.className='lgi'; img.alt=''; img.src=data;
      lw.appendChild(img);
    }
    var lg=document.getElementById('lg');
    if(lg && !lg.src) lg.src=data;
    var obs=new MutationObserver(function(){
      var host=document.querySelector('#pg .modal-panel')||document.querySelector('#pg section');
      if(!host)return;
      if(host.querySelector('.modal-logo-img[data-brand="1"]'))return;
      var old=host.querySelector('.modal-logo-fallback, .modal-logo-svg, .modal-logo-img');
      var ni=document.createElement('img');
      ni.className='modal-logo-img'; ni.setAttribute('data-brand','1'); ni.alt='لوگو'; ni.src=data;
      if(old) old.replaceWith(ni); else host.insertBefore(ni, host.firstChild);
    });
    var pg=document.getElementById('pg');
    if(pg) obs.observe(pg,{childList:true,subtree:true});
  }catch(e){}
})();
