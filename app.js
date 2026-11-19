(async function(){
  var urls=[
    'https://cdn.jsdelivr.net/gh/miadjaberi/asrar-azal@8b395c146a34e408fdc20172194f70bc606f3111/app.js',
    'https://raw.githubusercontent.com/miadjaberi/asrar-azal/8b395c146a34e408fdc20172194f70bc606f3111/app.js'
  ];
  var lastErr;
  for(var i=0;i<urls.length;i++){
    try{
      var r=await fetch(urls[i],{cache:'no-store'});
      if(!r.ok) throw new Error('http '+r.status);
      var code=await r.text();
      if(code.length<1000) throw new Error('short');
      (0,eval)(code);
      return;
    }catch(e){lastErr=e;}
  }
  throw lastErr||new Error('load failed');
})().catch(function(e){
  console.error(e);
  document.body.innerHTML='<p style="color:#fff;padding:20px;font-family:Tahoma,sans-serif;direction:rtl;text-align:center">خطا در بارگذاری. چند ثانیه صبر کنید و رفرش کنید.<br><small>'+String(e)+'</small></p>';
});
