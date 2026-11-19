(async function(){
  var url='https://cdn.jsdelivr.net/gh/miadjaberi/asrar-azal@8b395c146a34e408fdc20172194f70bc606f3111/app.js';
  var r=await fetch(url);
  if(!r.ok) throw new Error('fetch');
  var code=await r.text();
  (0,eval)(code);
})().catch(function(e){
  console.error(e);
  document.body.innerHTML='<p style="color:#fff;padding:20px;font-family:Tahoma,sans-serif;direction:rtl">خطا در بارگذاری برنامه. صفحه را رفرش کنید.</p>';
});
