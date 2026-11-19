(async function(){
  var parts = ['app.p1.js','app.p2.js','app.p3.js','app.p4.js','app.p5.js','app.p6.js'];
  var code = '';
  for (var i = 0; i < parts.length; i++) {
    var r = await fetch(parts[i] + '?v=assist1');
    if (!r.ok) throw new Error('load ' + parts[i]);
    code += await r.text();
  }
  (0, eval)(code);
})().catch(function(e){ console.error(e); document.body.innerHTML = '<p style="color:#fff;padding:20px;font-family:sans-serif">خطا در بارگذاری برنامه</p>'; });
