 if(t.dataset.go)show(t.dataset.go);else if(t.dataset.bk)show('book',+t.dataset.bk);
 else if(t.dataset.cat!==undefined){lc=t.dataset.cat;show('lib');}
 else if(t.dataset.n!==undefined){const n=+t.dataset.n;if(n===0)show('home');else if(n===1)show('lib');else if(n===3)show('istk');else if(n===4)show('prof');else if(n===2)show('cafe');}
});
document.addEventListener('input',e=>{if(e.target.id==='sq'){lq=e.target.value.trim();show('lib');}});
function render(){
 const b=C.brand;const bn1=$('#bn1'),bn2=$('#bn2');if(bn1)bn1.textContent=b.name;if(bn2)bn2.textContent=b.sub;
 const tr=$('#tr');if(tr){tr.innerHTML=C.banners.map((x,i)=>`<div class="slide s${i%4}"><div class="bt"><h2>${esc(x.t)}</h2><p>${esc(x.p)}</p><button data-go="${esc(x.go||'lib')}">${esc(x.b)}</button></div></div>`).join('');}
 const dots=$('#dots');if(dots)dots.innerHTML=C.banners.map((_,i)=>`<i class="${i===bi?'on':''}"></i>`).join('');
 const qk=$('#qk');if(qk)qk.innerHTML=C.quick.map(q=>`<button class="q" data-go="${esc(q.pg)}"><div class="ic"><svg class="i"><use href="#${q.pg==='lib'?'book':q.pg==='istk'?'star':q.pg==='cafe'?'users':'cup'}"/></svg></div><b>${esc(q.t)}</b><small>${esc(q.s)}</small></button>`).join('');
 const st=$('#st'),al=$('#al');if(st)st.textContent=C.secT;if(al)al.textContent=C.all;
 const cv=$('#cv');if(cv){const arrs=[...cv.querySelectorAll('.arr')];cv.querySelectorAll('.bk').forEach(e=>e.remove());C.books.forEach((bk,i)=>{const el=document.createElement('div');el.className='bk';el.style.background=GR[i%GR.length];el.innerHTML=`<h4>${esc(bk.t)}</h4><small>${esc(bk.a)}</small>`;el.dataset.bk=i;cv.insertBefore(el,arrs[1]||null);});cc(ci);}
 tt(ti);go(bi);
}
render();
swipe($('#bn'),dx=>go(bi+(dx<0?1:-1)));
swipe($('#cv'),dx=>cc(ci+(dx<0?1:-1)));
swipe($('.today'),dx=>tt(ti+(dx<0?1:-1)));
document.addEventListener('click',e=>{const a=e.target.closest('[data-b]');if(a)go(bi+(+a.dataset.b));const c=e.target.closest('[data-c]');if(c)cc(ci+(+c.dataset.c));const t=e.target.closest('[data-t]');if(t)tt(ti+(+t.dataset.t));});
// welcome
(function(){const w=C.welcome;if(!w||w.on!=='1')return;const mo=$('#mo');if(!mo)return;mo.style.display='flex';mo.innerHTML=`<div class="mc"><h3>${esc(w.t)}</h3><p style="white-space:pre-line">${esc(w.b)}</p><button class="btn" id="wok">${esc(w.btn||'موافقم')}</button></div>`;$('#wok')?.addEventListener('click',()=>{mo.style.display='none';});})();
// service worker already in index
console.log('asrar-azal core UI ready');
