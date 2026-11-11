(async function(){
  async function loadParts(prefix, n){
    let s='';
    for(let i=1;i<=n;i++){
      const t = await (await fetch('./'+prefix+'.p'+i+'.b64')).text();
      s += t.trim();
    }
    const bin = atob(s);
    const bytes = new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i);
    return new TextDecoder('utf-8').decode(bytes);
  }
  try{
    const css = await loadParts('app.css', 4);
    const st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    const counts = [8, 3, 7, 9, 7, 3];
    let code='';
    for(let i=1;i<=6;i++){
      code += await loadParts('app-'+i, counts[i-1]);
    }
    (0,eval)(code);
  }catch(e){
    console.error(e);
    document.body.insertAdjacentHTML('beforeend','<p style="color:#f1c765;padding:20px;text-align:center;direction:rtl">خطا در بارگذاری. رفرش کنید.</p>');
  }
})();
