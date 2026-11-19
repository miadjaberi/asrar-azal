(async function(){
  var parts=['app.gz.1.b64','app.gz.2.b64','app.gz.3.b64','app.gz.4.b64','app.gz.5.b64','app.gz.6.b64','app.gz.7.b64','app.gz.8.b64','app.gz.9.b64'];
  var b64='';
  for(var i=0;i<parts.length;i++){
    var r=await fetch(parts[i]+'?v=g1');
    if(!r.ok) throw new Error('load '+parts[i]);
    b64+=await r.text();
  }
  var bin=Uint8Array.from(atob(b64),function(c){return c.charCodeAt(0);});
  var stream=new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip')));
  var code=await stream.text();
  (0,eval)(code);
})().catch(function(e){console.error(e);document.body.innerHTML='<p style="color:#fff;padding:20px;font-family:Tahoma,sans-serif">خطا در بارگذاری</p>';});
