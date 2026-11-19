(async function(){
  var n=6, parts=[];
  for(var i=1;i<=n;i++){
    var r=await fetch('p'+i+'.js.txt?v=5',{cache:'no-store'});
    if(!r.ok) throw new Error('part '+i+' '+r.status);
    parts.push(await r.text());
  }
  (0,eval)(parts.join(''));
})().catch(function(e){
  console.error(e);
  document.body.innerHTML='<p style="color:#fff;padding:20px;direction:rtl;text-align:center;font-family:Tahoma">خطا در بارگذاری دستیار.<br><small>'+e+'</small></p>';
});
