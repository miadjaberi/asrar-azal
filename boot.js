(async function(){
  try{
    let b64='';
    for(let i=1;i<=9;i++){
      const r=await fetch('./payload.p'+i+'.b64');
      if(!r.ok) throw new Error('payload.p'+i+' '+r.status);
      b64+=(await r.text()).trim();
    }
    const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
    const ds=new DecompressionStream('gzip');
    const stream=new Blob([bin]).stream().pipeThrough(ds);
    const text=await new Response(stream).text();
    const data=JSON.parse(text);
    const st=document.createElement('style');
    st.textContent=data.css;
    document.head.appendChild(st);
    (0,eval)(data.js);
  }catch(e){
    console.error(e);
    document.body.insertAdjacentHTML('beforeend','<p style="color:#f1c765;padding:20px;text-align:center;direction:rtl">خطا در بارگذاری: '+e.message+'</p>');
  }
})();
