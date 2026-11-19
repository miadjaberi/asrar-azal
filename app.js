(async function(){
  var n=3, parts=[];
  for(var i=1;i<=n;i++){
    var r=await fetch('s'+i+'.b64?v=5',{cache:'no-store'});
    if(!r.ok) throw new Error('chunk '+i);
    parts.push(await r.text());
  }
  var b64=parts.join('');
  var bin=atob(b64);
  var bytes=new Uint8Array(bin.length);
  for(var j=0;j<bin.length;j++) bytes[j]=bin.charCodeAt(j);
  var ds=new DecompressionStream('gzip');
  var stream=new Response(bytes).body.pipeThrough(ds);
  var code=await new Response(stream).text();
  (0,eval)(code);
})().catch(function(e){
  console.error(e);
  document.body.innerHTML='<p style="color:#fff;padding:20px;direction:rtl;text-align:center;font-family:Tahoma">خطا در بارگذاری. رفرش کنید.<br><small>'+e+'</small></p>';
});
