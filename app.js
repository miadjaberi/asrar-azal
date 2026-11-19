(async function(){
  var parts=['s1.b64','s2.b64','s3.b64','s4.b64','s5.b64','s6.b64','s7.b64','s8.b64','s9.b64','s10.b64','s11.b64','s12.b64','s13.b64'];
  var b64='';
  for(var i=0;i<parts.length;i++){
    var r=await fetch(parts[i]+'?v=s1');
    if(!r.ok) throw new Error('load '+parts[i]);
    b64+=await r.text();
  }
  var bin=Uint8Array.from(atob(b64),function(c){return c.charCodeAt(0);});
  var code=await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
  (0,eval)(code);
})().catch(function(e){console.error(e);document.body.innerHTML='<p style="color:#fff;padding:20px;font-family:Tahoma,sans-serif">خطا در بارگذاری</p>';});
