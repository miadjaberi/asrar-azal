(async function(){
  async function loadGzParts(prefix, n){
    let s='';
    for(let i=1;i<=n;i++) s += (await (await fetch('./'+prefix+'.p'+i+'.b64')).text()).trim();
    const bin = Uint8Array.from(atob(s), c => c.charCodeAt(0));
    const ds = new DecompressionStream('gzip');
    const stream = new Blob([bin]).stream().pipeThrough(ds);
    return await new Response(stream).text();
  }
  try{
    const css = await loadGzParts('css.gz', 3);
    const st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    const code = await loadGzParts('js.gz', 25);
    (0,eval)(code);
  }catch(e){
    console.error(e);
    document.body.insertAdjacentHTML('beforeend','<p style="color:#f1c765;padding:20px;text-align:center;direction:rtl">خطا در بارگذاری. رفرش کنید.</p>');
  }
})();
