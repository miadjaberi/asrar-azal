const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const im=u=>{u=String(u||'');if((/^(\/_blob\/[0-9a-f]+|data:image\/)/.test(u)||/^\/?shop\/[a-z0-9._-]+$/i.test(u)))return u;try{const cfg=window.ASRAR_SUPABASE_CONFIG||{},base=new URL(cfg.url),x=new URL(u);return x.protocol==='https:'&&x.origin===base.origin?x.href:''}catch(e){return''}};
const bgObserver=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;const el=entry.target,url=el.dataset.bg;if(url){el.style.backgroundImage=`url("${url}")`;el.dataset.bgLoaded='1'}bgObserver.unobserve(el)}},{rootMargin:'180px 0px'}):null;
function observeBackgrounds(root=document){root.querySelectorAll('[data-bg]').forEach(el=>{if(!el.dataset.bg||el.dataset.bgLoaded)return;if(bgObserver)bgObserver.observe(el);else{el.style.backgroundImage=`url("${el.dataset.bg}")`;el.dataset.bgLoaded='1'}})}
const GR=['linear-gradient(160deg,#3a4a3a,#161a16)','linear-gradient(170deg,#3b1d86,#d9822b)','linear-gradient(170deg,#1c2a5a,#6a5aa8)','linear-gradient(170deg,#6a3a14,#e0a040)','linear-gradient(170deg,#0f4a4a,#3aa890)'];
const D={brand:{name:'اسرار ازل',sub:'سرکتاب • رمل • مکاشفه',logo:'',tg:'khatmjaberi'},
banners:[{t:'اسرار ازل\nپرده رازها',p:'در این سرا، سرکتاب و رمل و مکاشفه با هم جمع‌اند. با نیت پاک قدم بگذار.',b:'ورود',img:'',go:'lib'},{t:'اشتراک ویژه،\nدسترسی کامل',p:'با اشتراک، به ابزارها و محتوای ویژه دسترسی داشته باشید.',b:'مشاهده اشتراک‌ها',img:'',go:'cafe'},{t:'ابزارهای\nتخصصی',p:'ابجد، رمل، دلیل الحیران، همزاد و اسماء الحسنی در اختیار شماست.',b:'مشاهده ابزارها',img:'',go:'istk'},{t:'دعاها و اذکار\nویژه',p:'دعاها و اذکار منتخب را بخوانید و در آرامش همراهشان باشید.',b:'مشاهده دعاها',img:'',go:'comm'}],
quick:[{t:'فروشگاه',s:'دسته‌بندی و جستجو',pg:'lib'},{t:'اشتراک‌ها و پیام‌ها',s:'ارتباط با مدیریت',pg:'cafe'},{t:'مودال‌ها',s:'ابزارهای تخصصی',pg:'istk'},{t:'دعاها و اذکار ویژه',s:'منتخب برای شما',pg:'comm'}],
secT:'فروشگاه',all:'مشاهده همه',
books:[{"t": "چشم ببر", "a": "۵٬۰۰۰ تومان · محدود", "cat": "محدود", "rate": 4.8, "desc": "چشم زخم ادارات دادگاه برای برد و هیبت و نفوذ \nقدرت در تکلم", "img": "shop/p1.jpeg"}, {"t": "چشم زخم و رفع حسادت و گشایده عقده", "a": "۳٬۰۰۰ تومان · موجود", "cat": "موجود", "rate": 4.8, "desc": "هیبت \nقدرت \nابطال \nسحر \nو جادو \nچشم زخم", "img": "shop/p2.jpeg"}, {"t": "خر مهره اصل پاکستان", "a": "۱۵ تومان · اولویت اولین سفارش", "cat": "اولویت اولین سفارش", "rate": 4.8, "desc": "شانس و اقبال", "img": "shop/p3.jpeg"}, {"t": "دستور رایگان طلسم تخم‌مرغ", "a": "۱۰۱ تومان · جدید", "cat": "جدید", "rate": 4.8, "desc": "زیبایی و دشمنی", "img": "shop/p4.jpeg"}, {"t": "طلسم رزق و روزی و گشایش کار", "a": "۳٬۰۰۰ تومان · جدید", "cat": "جدید", "rate": 4.8, "desc": "رزق و روزی \nگشایش \nفتوحات \nبرد کردن معاملات \nخرید و فروش", "img": "shop/p5.jpeg"}, {"t": "طلسم یهودی جلب و محبت مجرب", "a": "۵٬۰۰۰ تومان · محدود", "cat": "محدود", "rate": 4.8, "desc": "جلب مشتری \nجلب مطلوب \nهمسر  دوست شما", "img": "shop/p6.jpeg"}, {"t": "قفل زبانبند سکاک محبتی برای زوج یا مطلوب شما", "a": "۳٬۳۰۰ تومان · محدود", "cat": "محدود", "rate": 4.8, "desc": "محبتی \nزبانبندی \nتوافقی \nشراکت \nبرد", "img": "shop/p7.jpeg"}, {"t": "مهره مار افعی قابل تست آفریقایی", "a": "۱۰٬۰۰۰ تومان · ویژه❗محدود", "cat": "ویژه❗محدود", "rate": 5, "desc": "محبتی \nازدواج \nگشایش اقبال \nمعاملات \nزبانبند و غیره", "img": "shop/p8.jpeg"}, {"t": "مهره موکل دار سلطانی بری مغربی", "a": "۱۲ تومان · محدود", "cat": "محدود", "rate": 4.8, "desc": "جلب \nخیر \nمنفعت \nبرکت", "img": "shop/p9.png"}, {"t": "مهره های برزمی معروف به مهره برد", "a": "۱۳۰٬۰۰۰ تومان · محدود", "cat": "محدود", "rate": 4.8, "desc": "برد در هر چه در نظر داری لازم باشد و مشکل دار هستی", "img": "shop/p10.jpeg"}],
acts:{title:'اعمال امروز',dateT:'تاریخ امروز',hOff:'0',zekrT:'ذکر روز و اعمال آن',recT:'پیشنهادات استاد و مدیریت',recB:'پیشنهادهای استاد و مدیریت را از پنل مدیریت وارد کنید.',contT:'ارتباط با ما',contB:'برای ارتباط با ما از راه‌های زیر اقدام کنید.',phone:'09392979200',chT:'مشخصات کانال',tg:'khatmjaberi',site:'dbamag.ir',ig:'khatmjaberi'},
zekrs:[{day:'شنبه',z:'متن ذکر روز را از پنل مدیریت وارد کنید.',tr:'ترجمه ذکر',am:'اعمال این روز'},{day:'یکشنبه',z:'متن ذکر روز را از پنل مدیریت وارد کنید.',tr:'ترجمه ذکر',am:'اعمال این روز'},{day:'دوشنبه',z:'متن ذکر روز را از پنل مدیریت وارد کنید.',tr:'ترجمه ذکر',am:'اعمال این روز'},{day:'سه‌شنبه',z:'متن ذکر روز را از پنل مدیریت وارد کنید.',tr:'ترجمه ذکر',am:'اعمال این روز'},{day:'چهارشنبه',z:'متن ذکر روز را از پنل مدیریت وارد کنید.',tr:'ترجمه ذکر',am:'اعمال این روز'},{day:'پنجشنبه',z:'متن ذکر روز را از پنل مدیریت وارد کنید.',tr:'ترجمه ذکر',am:'اعمال این روز'},{day:'جمعه',z:'متن ذکر روز را از پنل مدیریت وارد کنید.',tr:'ترجمه ذکر',am:'اعمال این روز'}],
notes:[{t:'بنر متحرک و جذاب',p:'با حرکت نور، تغییر خودکار تصاویر و اسلایدر قابل لمس، جذب توجه بدون ایجاد مزاحمت در استفاده از اپ.'},{t:'کارت‌های چرخان',p:'نمایش پیشنهادها با اسلایدر خودکار و امکان کشیدن انگشت برای دیدن کتاب‌های بعدی.'},{t:'تعامل و کشف بیشتر',p:'با لمس کارت‌ها، جزئیات بیشتر نمایش داده می‌شود؛ مثل معرفی کتاب، خلاصه، نقد و امتیاز کاربران.'}],
foot:'اسرار ازل — سرکتاب، رمل و مکاشفه',
welcome:{on:'1',t:'بسم الله الرحمن الرحیم',b:'اسرار ازل را نه تو دانی و نه من\nوین حرف معما نه تو خوانی و نه من\nهست از پسِ پرده گفت‌وگوی من و تو\nچون پرده برافتد نه تو مانی و نه من\n\nنتایج ابزارها بر پایه روش‌های سنتی است و جایگزین توکل، مشورت با عالم دینی و پزشک نیست.\nبا نیت پاک و آرامش از برنامه استفاده کنید.',btn:'موافقم'},
ann:{on:'0',t:'اعلان ویژه',b:'متن اعلان را از پنل مدیریت وارد کنید.',btn:'متوجه شدم'},set:{slide:5,cards:6,pin:'1234',logoPos:'l',logoSize:36},
modals:[{"t":"سبب القادم","s":"کشف سبب و نیت","b":"راهنمای استفاده: نام و نام مادر را وارد کنید\nورودیهای این ابزار: اسم شما، اسم مادر شما، اسم روز\nخروجی: یکی از هفت سبب اصلی (مصلحت، فکر فاسد، دزدی، کار خیر، کار شر، فساد بین زنان، محبت) به همراه توضیح کوتاه.\n\nمعانی نتایج:\n1. برای مصلحت خاص (مربوط به یک هدف و نیت ویژه)\n2. برای فکر فاسد (ناشی از تفکرات نادرست و منفی)\n3. برای دزدی (مربوط به مال و اموال دیگران)\n4. برای انجام کار خیر (نیت نیک و رفتار پسندیده)\n5. برای انجام کار شر (عمل ناپسند و آسیب‌رسان)\n6. به خاطر فساد بین زنان (ناشی از اختلافات و مشکلات میان زنان)\n7. برای محبت (برآمده از عشق و علاقه قلبی)"},{"t":"محبت زن به مرد","s":"محبت و علاقه","b":"راهنمای استفاده: نام زن و مرد را وارد کنید\nورودیهای این ابزار: اسم زن، اسم مرد\nخروجی: وضعیت علاقه قلبی زن به مرد در سه حالت (دوست دارد، دوست ندارد، میان هر دو).\n\nمعانی نتایج:\n1. زن، مرد را دوست دارد (علاقه قلبی و صمیمیت وجود دارد)\n2. زن، مرد را دوست ندارد (بهتر است انتظارات خود را تعدیل کنید)\n3. وضعیت بین دوست داشتن و نداشتن است (نیاز به زمان و شناخت بیشتر دارد)"},{"t":"راستگو و شفای بیمار","s":"راستسنجی و شفا","b":"راهنمای استفاده: اطلاعات خواستهشده را وارد کنید.\nورودیهای این ابزار: اسم گوینده، روز، اسم بیمار، اسم مادر بیمار\nخروجی: نتیجه راستگویی گوینده (راستگو / دروغگو) و همچنین وضعیت شفای بیمار."},{"t":"دوست، دشمنی، تجاری","s":"رابطه و تجارت","b":"راهنمای استفاده: اطلاعات خواستهشده را وارد کنید.\nورودیهای این ابزار: اسم شریک اول، اسم شریک دوم، روز، اسم شخص، اسم مادر شخص\nخروجی: نتیجه شرکت و معامله (سه حالت) و نتیجه دوست یا دشمن بودن طرف مقابل (چهار حالت).\n\nمعانی نتایج:\n1. سودی نخواهد بود\n2. به تدریج پیشرفت خواهد کرد\n3. خیر، برکت و تداوم دارد\n4. دشمن تو است\n5. دوست تو است\n6. در ظاهر دوست تو است\n7. هیچ خیری برای تو در او نیست"},{"t":"علت بیماری ۱۲تایی","s":"بیماری و درمان","b":"راهنمای استفاده: نام بیمار، مادر و روز را وارد کنید\nورودیهای این ابزار: اسم بیمار، اسم مادر بیمار، روز سوال\nخروجی: یکی از دوازده علت بیماری بر پایه روش سنتی.\n\nمعانی نتایج:\n1. از سحر و جن است\n2. از چشم (نظر) زن است\n3. از بیماری علاج‌ناپذیر است\n4. از چشم (نظر) مرد است\n5. از قرین (همنشین) مذکر است\n6. از باد طبیعی است یا باد اجنه یا نفخ است\n7. از عارضه زمینی است\n8. از تغییر خون است\n9. از صفرا است\n10. از سحر انسانی است\n11. از قرین مؤنث است\n12. از غم و اندوه است"},{"t":"علت بیماری","s":"بیماری و درمان","b":"راهنمای استفاده: نام بیمار، مادر و روز را وارد کنید\nورودیهای این ابزار: اسم شخص، اسم مادر شخص، روز\nخروجی: یکی از هفت علت بیماری بر پایه روش سنتی.\n\nمعانی نتایج:\n1. علت بیماری از جن و موجودات ماورایی است\n2. بیماری از هوای آلوده یا تغییرات آب و هوایی ناشی شده است\n3. بیماری ممکن است از سحر یا چشم زخم باشد\n4. بیماری از چشم زخم یا حسادت دیگران است\n5. بیماری مربوط به خون یا گردش خون است\n6. بیماری از سودا یا افسردگی است\n7. بیماری از صفرا یا مشکلات گوارشی است"},{"t":"آمدن غایب","s":"غایب و بازگشت","b":"راهنمای استفاده: نام غایب، مادر و روز رفتن را وارد کنید\nورودیهای این ابزار: اسم شخص غایب، اسم مادر غایب، روز رفتن\nخروجی: زمان و حالت بازگشت غایب در چهار حالت (زود میآید، معطل میشود، بازنمیگردد، دیر میآید).\n\nمعانی نتایج:\n1. زود می‌آید\n2. توقف می‌کند (معطل می‌شود)\n3. می‌ماند و بازنمی‌گردد\n4. دیر می‌آید"},{"t":"بخت و اقبال","s":"طالع و بخت","b":"راهنمای استفاده: نام و نام مادر را وارد کنید\nورودیهای این ابزار: اسم شخص، اسم مادر شخص\nخروجی: یکی از چهار طالع بخت و اقبال به همراه توضیح.\n\nمعانی نتایج:\n1. طالع اشرافی - این فرد می‌تواند در طبقه‌ای از اجتماع قرار گیرد که مرفه و ثروتمندند\n2. طالع حادثه‌ساز - این افراد تیرانداز هستند\n3. طالع کم‌درآمد - این طبقه‌ای است که افراد به سختی امرار معاش می‌کنند\n4. طالع عرفانی - این افراد به مسائل معنوی علاقه زیادی دارند"},{"t":"ستاره طالع","s":"طالع و ستاره","b":"راهنمای استفاده: نام و نام مادر را وارد کنید\nورودیهای این ابزار: اسم طالب، اسم مادر طالب\nخروجی: برج، طالع (سیاره) و طبیعت آن (آتشی، خاکی، هوایی، آبی).\n\nمعانی نتایج:\n1. برج جدی — طالع مریخ — آتشی\n2. برج ثور — طالع زهره — خاکی\n3. برج جوزا — طالع عطارد — هوایی\n4. برج سرطان — طالع ماه — آبی\n5. برج اسد — طالع خورشید — آتشی\n6. برج سنبله — طالع عطارد — خاکی\n7. برج میزان — طالع زهره — هوایی\n8. برج عقرب — طالع مریخ — آبی\n9. برج قوس — طالع مشتری — آتشی\n10. برج جدی — طالع زحل — خاکی\n11. برج دلو — طالع عطارد — هوایی\n12. برج حوت — طالع مشتری — آبی"},{"t":"عاقبت ازدواج","s":"ازدواج","b":"راهنمای استفاده: نام مرد و زن را وارد کنید\nورودیهای این ابزار: اسم مرد، اسم زن\nخروجی: یکی از نه حالت عاقبت ازدواج به همراه توضیح.\n\nمعانی نتایج:\n1. ازدواج مناسب است - زن حاکم می‌شود\n2. ازدواج خیر و برکت است\n3. عاقبت می‌تواند ناخوش باشد\n4. ازدواج همراه با دلسردی\n5. ازدواج مناسب همراه با فرزند\n6. اختلاف مشکلات و طلاق احتمال ۸۰ درصد\n7. ازدواج عالی\n8. مناسب نیست - سختی، جدایی و خیانت\n9. همانند نتیجه ۸ است ولی فوت ندارد"},{"t":"ماشین حساب و ابجد","s":"ابجد و محاسبه","b":"راهنمای استفاده: اطلاعات خواستهشده را وارد کنید.\nورودیهای این ابزار: متن یا نام، نوع حساب، عدد اول، عدد دوم، عملیات، عبارت ریاضی\nخروجی: ارزش ابجد کبیر، صغیر یا وسیط یک نام یا عبارت؛ و انجام چهار عمل اصلی و باقیمانده روی اعداد."},{"t":"دلیل الحیران","s":"حیرت و تصمیم","b":"راهنمای استفاده: نام، مادر، نوع و جنسیت را انتخاب کنید\nورودیهای این ابزار: نام شخص، نام مادر، نوع محاسبه، جنسیت، روز هفته\nخروجی: یکی از نه مرتبه دلیل الحیران به همراه توضیح وضعیت.\n\nمعانی نتایج:\n1. طالع بلندپایه - زندگی مرفه و ثروتمند\n2. طالع متوسط - زندگی متوسط با تلاش\n3. طالع کوتاه - زندگی پرچالش\n4. طالع هنرمند - خلاق، مشهور\n5. طالع موسیقیدان - هنرمند، تیزهوش\n6. طالع شاعر - عاطفی، علاقه‌مند به شعر\n7. طالع ورزشکار - قوی، ورزشکار\n8. طالع تاجر - باهوش، تاجر موفق\n9. طالع عابد - معنوی، صبور"},{"t":"رمل امام علی (۴۶ سؤال)","s":"رمل","b":"راهنمای استفاده: نام، مادر، روز، عدد و سوال را انتخاب کنید\nورودیهای این ابزار: نام طالب، نام مادر طالب، روز، عدد انتخابی (1-1000)، انتخاب سوال (1-46)\nخروجی: پاسخ رمل به یکی از ۴۶ سؤال انتخابشده، بر پایه خانههای رمل.\n\nسؤالات قابل انتخاب (۱ تا ۴۶):\n1. آیا حاجت برآورده می‌شود یا خیر؟\n2. آیا کار انجام می‌شود یا خیر؟\n3. عاقبت سؤال‌کننده در خواسته‌اش چیست؟\n4. آیا اتصال به مطلوب حاصل می‌شود یا خیر؟\n5. مطلوب در چه مکانی است؟\n6. آیا مطلوب به شما می‌آید یا باید دنبال آن بروید؟\n7. اتصال به آنچه می‌طلبید نزدیک است یا دور؟\n8. آیا کرب و بلا رفع می‌شود یا خیر؟\n9. آیا آنچه می‌آید خیر است یا شر؟\n10. آیا راز محفوظ می‌ماند یا فاش می‌شود؟\n11. حرکت در روز بهتر است یا در شب؟\n12. عاقبت سفر چیست؟\n13. عاقبت تجارت چیست؟\n14. عاقبت خرید چیست؟\n15. عاقبت فروش چیست؟\n16. عاقبت دوستی چیست؟\n17. آیا شخص به وعده خود عمل می‌کند یا خیر؟\n18. آیا مدیون بدهی خود را می‌پردازد یا خیر؟\n19. آیا دین ادا می‌شود یا خیر؟\n20. آیا امانت بازگردانده می‌شود یا خیر؟\n21. آیا خبر صحیح است یا دروغ؟\n22. مدت زمان چقدر است؟\n23. عاقبت ازدواج چیست؟\n24. آیا مطلّقه به همسر خود بازمی‌گردد یا خیر؟\n25. آیا فرزندی حاصل می‌شود یا خیر؟\n26. آیا زن حامله است یا خیر؟\n27. آیا حاملگی تثبیت می‌شود یا خیر؟\n28. تعداد فرزند در شکم مادر چقدر است؟\n29. جنسیت نوزاد چیست؟\n30. در چه روزی زن زایمان می‌کند؟\n31. وضعیت غایب چیست؟\n32. آیا غایب بازمی‌گردد یا خیر؟\n33. وضعیت فراری یا هارب چیست؟\n34. آیا فراری بازمی‌گردد یا خیر؟\n35. آیا بیمار شفا می‌یابد یا خیر؟\n36. آیا متهم بی‌گناه است یا خیر؟\n37. عاقبت مخاصمه چیست؟\n38. حکم قاضی درباره سؤال‌کننده چیست؟\n39. آیا مال مسروقه بازمی‌گردد یا خیر؟\n40. وضعیت و صفت دزد چیست؟\n41. آیا دزد بین متهمان است یا خیر؟\n42. راهنمای بیرون کشیدن دزد از میان متهمان\n43. آیا زندانی آزاد می‌شود یا خیر؟\n44. آیا شخص به مقام یا سلطنت می‌رسد یا خیر؟\n45. وضعیت حکم و رفتار سلطان و حاکم چیست؟\n46. آیا جنگ رخ می‌دهد یا خیر؟"},{"t":"همزاد قرین (۲۸ نتیجه)","s":"همزاد و قرین","b":"راهنمای استفاده: نام، نام مادر و تاریخ تولد را وارد کنید\nورودیهای این ابزار: نام شخص، نام مادر، تاریخ تولد\nخروجی: وضعیت قرین علوی و سفلی و تناسب نام در یکی از ۲۸ نتیجه.\n\nمعانی نتایج:\n1. قرین علوی قویتر است پس اسم مناسب است\n2. قرین علوی قویتر است و بسیار خیر می‌بیند\n3. قرین سفلی بسیار از قرین علوی قویتر است؛ اسم مناسب نیست و فقر می‌آورد\n4. مناسب است؛ قرین علوی قویتر است\n5. قرین سفلی قویتر است خیلی خیلی زیاد\n6. قرین علوی قویتر است و شخص خیر زیادی می‌بیند\n7. قرین علوی قویتر است و شخص خیر زیادی می‌بیند\n8. قرین علوی قویتر است و شخص خیر زیادی می‌بیند\n9. قرین سفلی زیاد قویتر از قرین علوی نیست؛ حامل این اسم همیشه مریض و بدحال خواهد بود\n10. قرین از جنس شیطانی است؛ اگر شخص نجنبد و مشکل را حل نکند، بدبخت خواهد شد\n11. اسم مناسب است\n12. مناسب است\n13. تابع قرینی دارد: أم‌الصبیان\n14. تابع قرینی دارد: أم‌الصبیان\n15. بسیار مناسب است\n16. قرین علوی با قرین سفلی در یک اندازه هستند\n17. قرین سفلی قویتر است\n18. مناسب است\n19. اسم مناسب است و برای صاحب اسم رزق بسیار می‌آورد\n20. قرین سفلی قویتر است خیلی خیلی زیاد\n21. تابع قرینی دارد: أم‌الصبیان (قرین سفلی بیش از اندازه قوی است)\n22. مناسب است\n23. اسم خوب است؛ هر دو قرین در یک اندازه‌اند اما حامل اسم از چیزی می‌ترسد که از جن به او ضرر می‌رسد\n24. مناسب است\n25. هر دو قرین در یک اندازه‌اند ولی این شخص ممکن است در تصادف یا اتفاقی بدنش توسط جن تسخیر شود\n26. مناسب است و خیر و رزق برایش می‌آورد\n27. قرین علوی بسیار قویتر است و این شخص خیر زیادی در زندگی می‌بیند\n28. هر دو قرین در یک اندازه‌اند ولی ممکن است در خواب/حمام/تصادف بدنش توسط جن تسخیر شود"},{"t":"مکاشفه موکلین (۱۶ خانه)","s":"مکاشفه","b":"راهنمای استفاده: نام، مادر، روز و عدد را وارد کنید\nورودیهای این ابزار: نام طالب، نام مادر، روز، عدد انتخابی (1-1000)\nخروجی: یکی از شانزده خانه؛ متن عربی، ترجمه فارسی و نتیجهگیری.\n\nخانههای مکاشفه:\n1. دار القمر - منزل العلوم — همه چیز خوب پیش می‌رود، اقدام کن.\n2. دار عطارد - منزل التجارة — شرایط مساعد است، با اعتماد به نفس پیش برو.\n3. دار الزهرة - منزل المحبة — موقعیت خوبی برای شروع رابطه یا کار جدید.\n4. دار الشمس - منزل السلطة — پس از سختی، آسانی می‌آید. امیدوار باش.\n5. دار المريخ - منزل الجهاد — بهترین زمان برای اقدامات مهم.\n6. دار المشتری - منزل البركة — صبر کن، این زمان مناسب اقدام نیست.\n7. دار زحل - منزل الصبر — مراقب باش، شرایط خطرناک است.\n8. دار الثوابت - منزل الأمان — همه چیز برعکس است، فعلاً کاری نکن.\n9. دار الأسرار - منزل الكشف — بهترین نتایج در انتظار توست.\n10. دار النور - منزل الهداية — کمی صبر کن، گره باز می‌شود.\n11. دار الفتح - منزل النصر — زمان مناسبی برای ملاقات و ارتباط.\n12. دار الرحمة - منزل العفو — تمرکز بر باطن و معنویت.\n13. دار الابتلاء - منزل الامتحان — راهت باز است، برو جلو.\n14. دار التمام - منزل الختام — مراقب از دست دادن باش.\n15. دار البدء - منزل التجديد — با کمک دیگران به نتیجه می‌رسی.\n16. دار الوصل - منزل اللقاء — چیزهای خوب به سمت تو می‌آیند."},{"t":"ستاره چینی","s":"سازگاری زوج","b":"راهنمای استفاده: اطلاعات آقا و خانم را وارد کنید\nورودیهای این ابزار: نام آقا، نام مادر آقا، نام خانم، نام مادر خانم\nخروجی: سازگار، ناسازگار یا دخالت خانواده؛ همراه با جمع کل و باقیمانده تقسیم بر ۵."},{"t":"استخراج موکل","s":"موکل و اسماء","b":"راهنمای استفاده: نام شخص را وارد کنید\nورودیهای این ابزار: اسم شخص\nخروجی: ابجد نام، نام موکل، اسم متناظر از اسماء الحسنی، متن توکیل، تعداد تکرار و عمل پیشنهادی."},{"t":"اسماء الحسنی","s":"اسماء الحسنی","b":"راهنمای استفاده: عدد مورد نظر را وارد کنید\nورودیهای این ابزار: عدد مورد نظر (1-1000)\nخروجی: اسم متناظر با عدد واردشده (دقیق یا نزدیکترین) برای ذکر و عبادت."},{"t":"طلسمساز وفق (بخش ۱ و ۲)","s":"طلسم و وفق","b":"راهنمای استفاده: اطلاعات شخص، حاجت، برج، سوره، آیه و روش ختم در این بخش محاسبه می‌شود.\nورودیهای این ابزار: نام شما، نام مادر شما، تاریخ تولد (اختیاری)، موضوع حاجت، توضیحات اضافی، نام شخص (طالب)، نام مادر شخص، نام شخص موردنظر (در صورت نیاز)\nخروجی: بخش ۱: شناسایی شخص و روش ختم بر اساس حاجت؛ بخش ۲: وفق مثلث، موکلین علوی و سفلی، ملک حاکم و متن توکیل."},{"t":"سن ازدواج","s":"ازدواج","b":"راهنمای استفاده: تاریخ تولد را وارد کنید. محاسبه در پس‌زمینه انجام می‌شود و نتیجه در سه عدد نمایش داده خواهد شد. این ابزار صرفاً راهنمای تقریبی است.\nورودیهای این ابزار: روز تولد، ماه تولد، سال تولد\nخروجی: سه عدد بهصورت سال، ماه و روز بهعنوان شاخص تقریبی سن ازدواج."}],
plans:[{t:'اشتراک یک‌ماهه',price:'۰ تومان',d:'توضیحات از پنل مدیریت قابل ویرایش است.'},{t:'اشتراک سه‌ماهه',price:'۰ تومان',d:'توضیحات از پنل مدیریت قابل ویرایش است.'},{t:'اشتراک یک‌ساله',price:'۰ تومان',d:'توضیحات از پنل مدیریت قابل ویرایش است.'}],
duas:[{t:'دعای ویژه ۱',b:'متن این دعا را از پنل مدیریت وارد کنید.'},{t:'ذکر ویژه ۱',b:'متن این ذکر را از پنل مدیریت وارد کنید.'}],
pages:{prof:{t:'پروفایل',b:'اطلاعات حساب شما در این بخش نمایش داده می‌شود.'}},rev:4};
D.modals.push({t:'ازدواج یا جدایی',s:'محاسبه ابجد ترتیبی زوجین',b:`راهنمای استفاده: نام آقا، نام مادر آقا، نام خانم و نام مادر خانم را وارد کنید.\nروش محاسبه: ابجد ترتیبی ۲۸ حرفی هر چهار نام محاسبه می‌شود، سپس ۱۸۴ به جمع افزوده و باقیمانده تقسیم بر ۲۸ از جدول نتایج استخراج می‌شود.\nقواعد ویژه: ژ به ز، گ به ک، چ به ج و پ به ب تبدیل می‌شود؛ موسی به موسا و مصطفی به مصطفا تبدیل می‌شوند؛ واژهٔ سماء در محاسبه منظور نمی‌شود.`});
const HAS=typeof claude!=='undefined';let U=null,C=structuredClone(D),db=null,ART='',bi=0,ci=1,ti=0,bt,cur='home',lq='',lc='';
let sbClient=null;try{const cfg=window.ASRAR_SUPABASE_CONFIG||{};if(cfg.url&&cfg.anonKey&&window.supabase?.createClient)sbClient=window.supabase.createClient(cfg.url,cfg.anonKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}})}catch(e){console.error('Supabase configuration error',e)}
const art0=$('.art');ART=art0?art0.outerHTML:'';if(art0)art0.remove();
const lg0=$('#lg');const lw=document.createElement('span');lw.id='lw';let LG=lg0?lg0.outerHTML:'';if(lg0)lg0.replaceWith(lw);else{const host=document.querySelector('.ttl');if(host)host.appendChild(lw);}
const tr=$('#tr'),dots=$('#dots'),cv=$('#cv');
let mine=[];try{mine=JSON.parse(localStorage.getItem('mine')||'[]')}catch(e){}
const saveMine=()=>{try{localStorage.setItem('mine',JSON.stringify(mine))}catch(e){}};
const cov=(b,i,c='')=>`<div class="cov ${c}" ${im(b.img)?`data-bg="${im(b.img)}"`:''} style="background:${GR[i%5]};background-size:cover">${im(b.img)?'':esc(b.t)}</div>`;
function swipe(el,fn){let x=null;el.addEventListener('pointerdown',e=>x=e.clientX);el.addEventListener('pointerup',e=>{if(x!==null&&Math.abs(e.clientX-x)>40)fn(e.clientX-x);x=null})}
function render(){
 $('#bn1').textContent=C.brand.name;$('#bn2').textContent=C.brand.sub;
 lw.innerHTML=im(C.brand.logo)?`<img class="lgi" src="${im(C.brand.logo)}" alt="">`:LG;
 tr.innerHTML=`<div class="track">${C.banners.map((b,i)=>{const u=im(b.img);return `<div class="slide ${u?'':'s'+i%4}" ${u?`style="background:linear-gradient(270deg,#0a081800,#0a0818e0 75%),url(${u}) center/cover"`:''}><div class="bt"><h2>${esc(b.t).replace(/\n/g,'<br>')}</h2><p>${esc(b.p)}</p><button class="btn" data-go="${esc(b.go||'lib')}"><svg class="i"><use href="#cl"/></svg>${esc(b.b)}</button></div>${u?'':ART}</div>`}).join('')}</div>`;
 dots.innerHTML=C.banners.map(()=>'<i></i>').join('');[...dots.children].forEach((d,j)=>d.onclick=()=>go(j));
 go(Math.min(bi,C.banners.length-1));
 $('#qk').innerHTML=C.quick.map((q,i)=>`<button class="q" data-go="${esc(q.pg)}"><div class="ic"><svg class="i"><use href="#${['book','cup','star','users'][i%4]}"/></svg></div><b>${esc(q.t)}</b><small>${esc(q.s)}</small></button>`).join('');
 $('#st').textContent=C.secT;$('#al').textContent=C.all;
 cv.querySelectorAll('.bk').forEach(e=>e.remove());
 C.books.forEach((b,k)=>{const e=document.createElement('div');e.className='bk';e.style.backgroundImage=GR[k%5];const image=im(b.img);if(image)e.dataset.bg=image;e.innerHTML=`<b class="cap">${esc(b.t)}</b><small>${esc(b.a)}</small>`;e.onclick=()=>ci==k?show('book',k):cc(k);cv.appendChild(e)});
 cc(Math.min(ci,C.books.length-1));
 tt(ti);
 $('#nt').innerHTML=C.notes.map((n,i)=>`<div class="note n${i%3+1}"><h4><svg class="i"><use href="#${['sp','layers','sp'][i%3]}"/></svg>${esc(n.t)}</h4><p>${esc(n.p)}</p></div>`).join('');
 $('#ft').textContent=C.foot;
 const S=C.set||{};$('.ttl').className='ttl '+(S.logoPos||'l');document.documentElement.style.setProperty('--ls',Math.min(80,Math.max(20,parseInt(S.logoSize)||36))+'px');
 const nl=(b,t)=>{b.lastChild.textContent=t};nl(navs[0],'خانه');nl(navs[1],C.quick[0].t);nl(navs[3],C.quick[2].t);nl(navs[4],(C.pages.prof||{}).t||'پروفایل');
 if(cur!='home')show(cur,curArg);
}
function go(k){const n=C.banners.length||1;bi=(k+n)%n;const track=tr.querySelector('.track');if(track)track.style.transform='translate3d('+(-bi*100)+'%,0,0)';[...dots.children].forEach((d,j)=>d.classList.toggle('on',j==bi));clearInterval(bt);if(n>1)bt=setInterval(()=>go(bi+1),((C.set||{}).slide||5)*1000)}
function cc(k){const n=C.books.length;if(!n)return;ci=(k+n)%n;[...cv.querySelectorAll('.bk')].forEach((e,j)=>{let o=j-ci;if(o>n/2)o-=n;if(o<-n/2)o+=n;const a=Math.abs(o);e.style.opacity=a>2?0:a==2?.45:a==1?.8:1;e.style.zIndex=10-a;e.style.pointerEvents=a>2?'none':'auto';e.style.transform='translateX('+(o*78)+'px) scale('+(1.08-a*.2)+') rotateY('+(-o*22)+'deg)';if(a<=1&&e.dataset.bg&&!e.dataset.bgLoaded){e.style.backgroundImage=`url("${e.dataset.bg}")`;e.dataset.bgLoaded='1'}})}
function fmtD(l,o,off=0){try{return new Intl.DateTimeFormat(l,o).format(new Date(Date.now()+off*864e5))}catch(e){return '—'}}
const hd=x=>String(x||'').replace(/[^A-Za-z0-9_.]/g,''),sd=x=>String(x||'').replace(/^https?:\/\//,'').replace(/[^A-Za-z0-9.\-\/]/g,''),ln=x=>esc(x).replace(/\n/g,'<br>');
function tt(k){ti=(k+5)%5;const a=C.acts,z=C.zekrs[(new Date().getDay()+1)%7]||{};let h='';
 if(ti==0)h=`<h5>${esc(a.dateT)}</h5><div class="dl"><span>شمسی</span><b>${fmtD('fa-IR-u-ca-persian',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</b></div><div class="dl"><span>میلادی</span><b>${fmtD('fa-IR-u-ca-gregory',{day:'numeric',month:'long',year:'numeric'})}</b></div><div class="dl"><span>قمری</span><b>${fmtD('fa-IR-u-ca-islamic-umalqura',{day:'numeric',month:'long',year:'numeric'},parseInt(a.hOff)||0)}</b></div>`;
 else if(ti==1)h=`<h5>${esc(a.zekrT)} <small class="mm">(${esc(z.day)})</small></h5><p><b>${ln(z.z)}</b></p><p><span class="mm">ترجمه:</span> ${ln(z.tr)}</p><p><span class="mm">اعمال:</span> ${ln(z.am)}</p>`;
 else if(ti==2)h=`<h5>${esc(a.recT)}</h5><p>${ln(a.recB)}</p>`;
 else if(ti==3){const p=String(a.phone||'').replace(/[^0-9+]/g,'');h=`<h5>${esc(a.contT)}</h5><p>${ln(a.contB)}</p>${p?`<a href="tel:${p}">📞 ${esc(a.phone)}</a>`:''}<a href="https://t.me/${hd(a.tg)}" target="_blank" rel="noopener">✈️ @${hd(a.tg)}</a>`}
 else h=`<h5>${esc(a.chT)}</h5><a href="https://t.me/${hd(a.tg)}" target="_blank" rel="noopener">✈️ تلگرام: @${hd(a.tg)}</a><a href="https://${sd(a.site)}" target="_blank" rel="noopener">🌐 سایت: ${sd(a.site)}</a><a href="https://instagram.com/${hd(a.ig)}" target="_blank" rel="noopener">📷 اینستاگرام: @${hd(a.ig)}</a>`;
 $('#tx').innerHTML=`<small class="mm">${esc(a.title)} · ${ti+1}/5</small>`+h}
$$('[data-b]').forEach(b=>b.onclick=()=>go(bi-(+b.dataset.b)));$$('[data-c]').forEach(b=>b.onclick=()=>cc(ci+(+b.dataset.c)));$$('[data-t]').forEach(b=>b.onclick=()=>tt(ti+(+b.dataset.t)));
swipe($('.today'),d=>tt(ti+(d>0?-1:1)));swipe(tr,d=>go(bi+(d>0?-1:1)));swipe(cv,d=>cc(ci+(d>0?-1:1)));(function L(){setTimeout(()=>{cc(ci+1);L()},((C.set||{}).cards||6)*1000)})();
const mo=$('#mo');let mq=[],mst=false;
const hs=t=>[...t].reduce((h,c)=>(h*31+c.charCodeAt(0))|0,0);
function startM(){if(mst)return;mst=true;const w=C.welcome,a=C.ann;
 const seen=(st,k)=>{try{return window[st].getItem(k)}catch(e){return null}};
 if(w&&w.on!=='0'&&!seen('sessionStorage','w'))mq.push({x:w,st:'sessionStorage',k:'w'});
 if(a&&a.on==='1'&&!seen('localStorage','a'+hs(a.t+a.b)))mq.push({x:a,st:'localStorage',k:'a'+hs(a.t+a.b)});nextM()}
function nextM(){const m=mq.shift();if(!m){mo.style.display='none';return}
 mo.innerHTML=`<div class="mc"><h3>${esc(m.x.t)}</h3><p>${esc(m.x.b).replace(/\n/g,'<br>')}</p><button class="btn" id="mok">${esc(m.x.btn||'باشه')}</button></div>`;mo.style.display='flex';
 $('#mok').onclick=()=>{try{window[m.st].setItem(m.k,'1')}catch(e){}nextM()}}
$('#fab').onclick=()=>{show('cafe');setTimeout(()=>{const t=$('#mt');if(t)t.focus()},60)};
if(!sbClient)setTimeout(startM,1200);
/* pages */
let curArg=0;const pg=$('#pg');
const navs=$$('nav button');
function setNav(i){navs.forEach((b,j)=>b.classList.toggle('on',j==i&&j!=2))}
function head(t,b='home'){return `<div class="ph"><button class="back" data-go="${b}"><svg class="i"><use href="#cr"/></svg></button><h3>${esc(t)}</h3></div>`}
function grid(l){return l.map(([b,i])=>`<div class="gc" data-bk="${i}">${cov(b,i)}<b>${esc(b.t)}</b><small>${esc(b.a)}</small></div>`).join('')||'<p style="color:var(--mut);font-size:13px">موردی یافت نشد.</p>'}
function libList(){return C.books.map((b,i)=>[b,i]).filter(([b])=>(!lc||(lc=='__mine'?mine.includes(b.t):b.cat==lc))&&(!lq||(b.t+b.a).includes(lq)))}
function show(p,a=0){cur=p;curArg=a;if(p=='home'){pg.style.display='none';setNav(0);return}
 pg.style.display='block';pg.scrollTop=0;let h='';
 if(p=='lib'){const cats=[...new Set(C.books.map(b=>b.cat).filter(Boolean))];setNav(1);
  h=head(C.quick[0].t)+`<input class="in" id="sq" placeholder="جستجوی نام کتاب یا نویسنده" value="${esc(lq)}"><div class="chips"><button class="chip ${lc?'':'on'}" data-cat="">همه</button>${cats.map(c=>`<button class="chip ${lc==c?'on':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}<button class="chip ${lc=='__mine'?'on':''}" data-cat="__mine">★ کتاب‌های من</button></div><div class="grid" id="gr">${grid(libList())}</div>`}
 else if(p=='book'){const b=C.books[a];if(!b){return show('lib')}const sv=mine.includes(b.t);
  h=head('معرفی کتاب','lib')+`<div class="dt">${cov(b,a)}<h2>${esc(b.t)}</h2><div class="m">${esc(b.a)} · ${esc(b.cat)} · ★ ${esc(b.rate)}</div><p>${esc(b.desc)}</p><div style="text-align:center;margin-top:14px"><button class="btn" data-mine="${esc(b.t)}">${sv?'حذف از کتاب‌های من':'افزودن به کتاب‌های من'}</button></div></div>`}
 else if(p=='cafe'){setNav(-1);h=head(C.quick[1].t)+`<h4 class="sh">اشتراک‌ها</h4>${C.plans.map((x,i)=>`<div class="box"><b>${esc(x.t)}</b><span class="pr">${esc(x.price)}</span><p class="mm" style="margin:6px 0 10px">${esc(x.d)}</p><button class="btn" data-plan="${i}">درخواست اشتراک</button></div>`).join('')}<h4 class="sh">پیام به مدیریت</h4><textarea class="in" id="mt" rows="4" placeholder="پیام خود را بنویسید…"></textarea><div style="margin-top:8px"><button class="btn" id="ms">ارسال از طریق تلگرام</button> <span id="mst" class="mm"></span></div>`}
 else if(p=='istk'){setNav(3);h=head(C.quick[2].t)+`<div class="grid">${C.modals.map((m,i)=>`<div class="gc" data-md="${i}"><div class="cov" style="height:110px;background:${GR[i%5]}"><svg class="i" style="width:28px;height:28px;color:var(--gold)"><use href="#sp"/></svg></div><b>${esc(m.t)}</b><small>${esc(m.s)}</small></div>`).join('')}</div>`}
 else if(p=='modal'){setNav(3);const m=C.modals[a]||{t:'',b:''};const mids=['sababModal','marSepModal','aghatModal','marriageAgeModal','sotareChiniModal','mohabbatModal','rastegooModal','elateBimariModal','elateBimari12Modal','behboodModal','amadanModal','bahtModal','setareModal','abjadCalcModal','simpleMathModal','advancedMathModal','dalilModal','ramlModal','hamzadModal','mokashefeMokelinModal','sherakatModal','dostDoshmaniModal','mokelModal','asmaniModal','tilsmModal'];const logo=im(C.brand.logo)?`<img class="modal-logo-img" src="${im(C.brand.logo)}" alt="لوگو">`:($('#lg')?$('#lg').outerHTML.replace('id="lg"','class="modal-logo-svg"'):'<span class="modal-logo-fallback">✦</span>');h=head('ابزارهای تخصصی','istk')+`<section class="modal-panel"><div class="modal-brand">${logo}</div><h2 class="modal-title">${esc(m.t)}</h2><section class="toolform" id="${mids[a]||('modalTool'+a)}">${(window.ASRAR_MODAL_HTML&&window.ASRAR_MODAL_HTML[a])||''}</section><details class="modal-guide"><summary>راهنمای استفاده از این پنجره</summary><div class="txt">${esc(m.b||'راهنمایی برای این بخش ثبت نشده است.').split('\n').map(l=>`<p>${l}</p>`).join('')}</div></details></section>`}
 else if(p=='comm'){setNav(-1);h=head(C.quick[3].t)+C.duas.map(d=>`<details class="box"><summary class="sm">${esc(d.t)}</summary><div class="txt" style="margin-top:8px">${esc(d.b).split('\n').map(l=>`<p>${l}</p>`).join('')}</div></details>`).join('')}
 else if(p=='mine'){setNav(3);h=head('کتاب‌های من')+`<div class="grid">${grid(C.books.map((b,i)=>[b,i]).filter(([b])=>mine.includes(b.t)))}</div>`}
 else{const x=C.pages[p]||{t:'',b:''};if(p=='prof')setNav(4);h=head(x.t)+`<div class="txt">${esc(x.b).split('\n').map(l=>`<p>${l}</p>`).join('')}</div>`}
 pg.innerHTML=h;observeBackgrounds(pg);if(p==='modal'&&typeof ramlQuestions!=='undefined'){const q=$('#ramlQuestion');if(q&&!q.options.length)q.innerHTML=ramlQuestions.map(x=>`<option value=\"${x.id}\">${x.id}. ${esc(x.title)}</option>`).join('')}if(p==='modal'&&document.getElementById('hayranName')){selectedType='adult';selectedGender='male'}const sq=$('#sq');if(sq)sq.oninput=()=>{lq=sq.value.trim();$('#gr').innerHTML=grid(libList())}}
document.addEventListener('click',e=>{const t=e.target.closest('[data-go],[data-bk],[data-cat],[data-mine],[data-plan],[data-md],#ms');if(!t)return;
 if(t.dataset.plan!==undefined){const m=$('#mt');m.value='درخواست اشتراک: '+C.plans[+t.dataset.plan].t;m.focus();return}
 if(t.id=='ms'){sendMsg();return}
 if(t.dataset.md!==undefined){show('modal',+t.dataset.md);return}
 if(t.dataset.go)show(t.dataset.go);else if(t.dataset.bk)show('book',+t.dataset.bk);
 else if(t.dataset.cat!==undefined){lc=t.dataset.cat;show('lib')}
 else{const k=t.dataset.mine;mine=mine.includes(k)?mine.filter(x=>x!=k):[...mine,k];saveMine();show('book',curArg)}});
const adminShortcut=$('header .circ');if(adminShortcut)adminShortcut.dataset.go='prof';const headerLibraryLink=$('header .hr > svg');if(headerLibraryLink)headerLibraryLink.dataset.go='lib';
['home','lib','lib','istk','prof'].forEach((g,i)=>navs[i].dataset.go=g);
async function sendMsg(){const m=$('#mt'),o=$('#mst'),x=m.value.trim();if(!x)return;const u='https://t.me/'+encodeURIComponent((C.brand.tg||'khatmjaberi').replace('@',''))+'?text='+encodeURIComponent(x.slice(0,1000));try{await navigator.clipboard.writeText(x)}catch(e){}window.open(u,'_blank','noopener');o.textContent='تلگرام باز می‌شود؛ متن پیام کپی هم شد.'}
/* admin */
let A,tab=0;const adm=$('#adm'),ap=$('#ap');
const getP=(o,p)=>p.split('.').reduce((x,k)=>x?.[k],o);
const setP=(o,p,v)=>{const ks=p.split('.');const l=ks.pop();ks.reduce((x,k)=>x[k],o)[l]=v};
const F=(p,l,k='')=>{const v=getP(A,p)??'';return k=='a'?`<label class="af">${l}<textarea data-p="${p}">${esc(v)}</textarea></label>`:k=='s'?`<label class="af">${l}<select data-p="${p}">${[['lib','فروشگاه'],['cafe','اشتراک‌ها و پیام‌ها'],['istk','مودال‌ها'],['comm','دعاها و اذکار']].map(([a,b])=>`<option value="${a}" ${v==a?'selected':''}>${b}</option>`).join('')}</select></label>`:k=='o'?`<label class="af">${l}<select data-p="${p}"><option value="1" ${v!='0'&&v!==false?'selected':''}>فعال</option><option value="0" ${v=='0'||v===false?'selected':''}>غیرفعال</option></select></label>`:k=='p'?`<label class="af">${l}<select data-p="${p}">${[['l','لوگو سمت چپ عنوان (پیش‌فرض)'],['r','لوگو سمت راست عنوان'],['top','لوگو بالای عنوان']].map(([a,b])=>`<option value="${a}" ${v==a?'selected':''}>${b}</option>`).join('')}</select></label>`:k=='i'?`<div class="af">${l}<br>${im(v)?`<img class="thm" src="${im(v)}" loading="lazy" decoding="async">`:''}<button class="ab g" data-up="${p}">انتخاب از گالری</button>${v?`<button class="ab r" data-clr="${p}">حذف تصویر</button>`:''}</div>`:`<label class="af">${l}<input data-p="${p}" value="${esc(v)}"></label>`};
const L=(key,fields,tpl,del=1)=>A[key].map((x,i)=>`<div class="box">${fields.map(([f,l,k])=>F(key+'.'+i+'.'+f,l,k)).join('')}${del?`<button class="ab r" data-del="${key}.${i}">حذف</button>`:''}</div>`).join('')+(tpl?`<button class="ab" data-add="${key}">+ افزودن</button>`:'');
const TABS=['عمومی','بنرها','دسترسی‌ها','فروشگاه (کتاب‌ها)','اعمال امروز','توضیحات','اشتراک‌ها','مودال‌ها','دعاها و اذکار','پروفایل','تنظیمات','پنجره‌ها'];function tabHtml(){switch(tab){
 case 0:return `<div class="box">${F('brand.name','نام برند')}${F('brand.sub','زیرعنوان')}${F('brand.logo','لوگو','i')}${F('secT','عنوان بخش پیشنهادها')}${F('all','متن «مشاهده همه»')}${F('todayT','عنوان کتاب امروز')}${F('foot','متن پایین صفحه')}</div>`;
 case 1:return L('banners',[['t','عنوان (با Enter خط جدید)','a'],['p','توضیح','a'],['b','متن دکمه'],['go','مقصد دکمه','s'],['img','تصویر پس‌زمینه','i']],1);
 case 2:return L('quick',[['t','عنوان'],['s','زیرعنوان']],0,0);
 case 3:return L('books',[['t','نام کتاب'],['a','نویسنده'],['cat','دسته‌بندی'],['rate','امتیاز'],['desc','توضیحات','a'],['img','تصویر جلد','i']],1);
 case 4:return `<div class="box" style="border-color:#4a3a9a"><b style="color:var(--gold)">کارت «اعمال امروز»</b><p class="mm" style="margin-top:6px;line-height:1.9">این کارت نمایشی است و محتوای آن فقط از همین پنل پر می‌شود؛ کاربر نهایی هیچ فیلد ورودی یا دکمه ویرایشی در اسلایدها نمی‌بیند.</p></div>`
 +`<div class="box"><b class="mm">اسلاید ۱ — تاریخ امروز <span style="color:var(--gold2)">· فقط مدیریت</span></b>${F('acts.title','عنوان کارت')}${F('acts.dateT','عنوان اسلاید تاریخ')}${F('acts.hOff','تنظیم تاریخ قمری (از ۲- تا ۲ روز)')}</div>`
 +`<div class="box"><b class="mm">اسلاید ۲ — ذکر روز <span style="color:var(--gold2)">· فقط مدیریت</span></b>${F('acts.zekrT','عنوان اسلاید ذکر روز')}</div>`
 +`<div class="box"><b class="mm">اسلاید ۳ — پیشنهادات <span style="color:var(--gold2)">· فقط مدیریت</span></b>${F('acts.recT','عنوان پیشنهادات')}${F('acts.recB','متن پیشنهادات استاد و مدیریت','a')}</div>`
 +`<div class="box"><b class="mm">اسلاید ۴ — ارتباط با استاد <span style="color:#7ee0a0">· قابل تعامل برای کاربر</span></b>${F('acts.contT','عنوان ارتباط با ما')}${F('acts.contB','متن','a')}${F('acts.phone','شماره تماس')}</div>`
 +`<div class="box"><b class="mm">اسلاید ۵ — مشخصات کانال <span style="color:var(--gold2)">· فقط مدیریت</span></b>${F('acts.chT','عنوان مشخصات کانال')}${F('acts.tg','آیدی تلگرام (بدون @)')}${F('acts.site','آدرس سایت')}${F('acts.ig','آیدی اینستاگرام (بدون @)')}</div>`
 +`<h4 class="sh">ذکر روزانه (شنبه تا جمعه) <span class="mm" style="font-weight:400">· فقط مدیریت</span></h4>`
 +L('zekrs',[['day','روز'],['z','ذکر','a'],['tr','ترجمه','a'],['am','اعمال','a']],0,0);
 case 5:return L('notes',[['t','عنوان'],['p','متن','a']],0,0);
 case 6:return L('plans',[['t','عنوان اشتراک'],['price','قیمت'],['d','توضیحات','a']],1);
 case 7:return L('modals',[['t','عنوان'],['s','زیرعنوان'],['b','متن / توضیحات','a']],0,0);
 case 8:return L('duas',[['t','عنوان'],['b','متن دعا یا ذکر','a']],1);
 case 10:return `<div class="box">${F('set.slide','فاصله تعویض خودکار بنر (ثانیه)')}${F('set.cards','فاصله تعویض خودکار کارت‌ها (ثانیه)')}${F('set.logoPos','مکان لوگو در هدر','p')}${F('set.logoSize','اندازه لوگو (۲۰ تا ۸۰ پیکسل)')}${F('brand.tg','آیدی تلگرام مدیر برای دریافت پیام‌ها (بدون @)')}${HAS?'':F('set.pin','رمز ورود مدیر (فقط نسخه مستقل)')}</div><div class="box"><button class="ab g" data-act="exp">خروجی JSON</button><button class="ab g" data-act="imp">وارد کردن JSON</button><button class="ab r" data-act="rst">بازگشت به پیش‌فرض</button></div>`;
 case 11:return `<div class="box"><b>پنجره خوش‌آمدگویی (هر نشست یک بار)</b>${F('welcome.on','وضعیت','o')}${F('welcome.t','عنوان')}${F('welcome.b','متن','a')}${F('welcome.btn','متن دکمه')}</div><div class="box"><b>پنجره اعلان (برای هر متن جدید یک بار)</b>${F('ann.on','وضعیت','o')}${F('ann.t','عنوان')}${F('ann.b','متن','a')}${F('ann.btn','متن دکمه')}</div>`;
 default:return Object.keys(A.pages).map(k=>`<div class="box">${F('pages.'+k+'.t','عنوان صفحه')}${F('pages.'+k+'.b','متن صفحه','a')}</div>`).join('')}}
function admR(msg=''){ap.innerHTML=`<h2>پنل مدیریت<button class="ab g" id="xc">✕</button></h2><div class="tabs">${TABS.map((t,i)=>`<button class="chip ${i==tab?'on':''}" data-tab="${i}">${t}</button>`).join('')}</div>${tabHtml()}<div class="sv"><button class="ab" id="sv">ذخیره و انتشار</button><span id="sm" style="font-size:12px;color:var(--mut)">${msg}</span></div>`}
const NEW={banners:{t:'عنوان',p:'توضیح',b:'مشاهده',img:'',go:'lib'},books:{t:'کتاب جدید',a:'',cat:'',rate:4,desc:'',img:''},today:{q:'',a:''},plans:{t:'اشتراک جدید',price:'',d:''},duas:{t:'دعای جدید',b:''}};
ap.addEventListener('input',e=>{const p=e.target.dataset.p;if(p)setP(A,p,e.target.value)});
ap.addEventListener('click',async e=>{const t=e.target.closest('button');if(!t)return;const d=t.dataset;
 if(t.id=='xc'){adm.style.display='none';return}
 if(d.tab!==undefined){tab=+d.tab;admR()}
 else if(d.act=='exp'){const j=JSON.stringify(A,null,1);try{const dl=HAS?await claude.use('downloads'):null;if(dl)await dl.save({filename:'cafe-content.json',data:j});else{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([j],{type:'application/json'}));a.download='cafe-content.json';a.click()}}catch(x){}}
 else if(d.act=='imp'){const f=document.createElement('input');f.type='file';f.accept='.json';f.onchange=async()=>{try{A={...structuredClone(D),...JSON.parse(await f.files[0].text())};admR('وارد شد؛ برای انتشار ذخیره کنید')}catch(x){$('#sm').textContent='فایل نامعتبر'}};f.click()}
 else if(d.act=='rst'){if(t.dataset.sure){A=structuredClone(D);admR('به پیش‌فرض برگشت؛ برای اعمال ذخیره کنید')}else{t.dataset.sure=1;t.textContent='مطمئنید؟ دوباره بزنید'}}
 else if(d.add){A[d.add].push({...NEW[d.add]});admR()}
 else if(d.del){const[k,i]=d.del.split('.');A[k].splice(+i,1);admR()}
 else if(d.clr){setP(A,d.clr,'');admR()}
 else if(d.up){const as=HAS?await claude.use('assets'):null;if(HAS&&!as&&!sbClient){$('#sm').textContent='آپلود در دسترس نیست';return}
  const f=document.createElement('input');f.type='file';f.accept='image/*';f.onchange=async()=>{try{$('#sm').textContent='در حال آپلود…';if(sbClient){const file=f.files[0],safeName=String(file.name||'image').toLowerCase().replace(/[^a-z0-9._-]+/g,'-').slice(-80),path=Date.now()+'-'+safeName;const bucket=(window.ASRAR_SUPABASE_CONFIG||{}).storageBucket||'asrar-assets';const {data,error}=await sbClient.storage.from(bucket).upload(path,file,{upsert:true,contentType:file.type||'image/jpeg'});if(error)throw error;const pub=sbClient.storage.from(bucket).getPublicUrl(data.path);setP(A,d.up,pub.data.publicUrl)}else if(as){const r=await as.upload(f.files[0]);setP(A,d.up,r.url.startsWith('/_blob/')?r.url:'/_blob/'+r.id)}else{if(f.files[0].size>1.5e6)throw 0;const fr=new FileReader();setP(A,d.up,await new Promise((ok,no)=>{fr.onload=()=>ok(fr.result);fr.onerror=no;fr.readAsDataURL(f.files[0])}))}admR('تصویر بارگذاری شد؛ برای انتشار ذخیره کنید')}catch(x){$('#sm').textContent='خطا در آپلود'}};f.click()}
 else if(t.id=='sv'){if(sbClient&&!ADM){$('#sm').textContent='ورود مدیر لازم است';return}if(!sbClient&&HAS&&!db){$('#sm').textContent='ذخیره‌سازی در دسترس نیست';return}
  try{if(sbClient){const cfg=window.ASRAR_SUPABASE_CONFIG||{},payload={key:cfg.contentKey||'main',content:JSON.parse(JSON.stringify(A)),updated_at:new Date().toISOString()};const {error}=await sbClient.from(cfg.contentTable||'site_content').upsert(payload);if(error)throw error}else if(HAS)await db.doc('site/content').set(JSON.parse(JSON.stringify(A)));else localStorage.setItem('site',JSON.stringify(A));C=structuredClone(A);render();$('#sm').textContent='ذخیره شد ✓'}catch(x){$('#sm').textContent='ذخیره نشد: '+(x.message||'دسترسی مدیر لازم است')}}});
function openAdm(){A=structuredClone(C);A.set=A.set||{slide:5,cards:6,pin:'1234'};admR();adm.style.display='flex'}
let ADM=false;$('#lw').onclick=async()=>{if(ADM)return openAdm();if(sbClient){try{let {data:current}=await sbClient.auth.getUser();let user=current?.user;if(!user){const email=prompt('ایمیل مدیر Supabase');if(!email)return;const password=prompt('رمز عبور مدیر');if(!password)return;const {data,error}=await sbClient.auth.signInWithPassword({email,password});if(error)throw error;user=data.user}if(user?.app_metadata?.role!=='admin'){await sbClient.auth.signOut();throw new Error('این حساب مجوز مدیریت ندارد')}ADM=true;openAdm()}catch(e){alert('ورود مدیر انجام نشد: '+(e.message||'خطای نامشخص'))}return}if(!HAS){alert('پنل مدیریت پس از راه‌اندازی و اتصال Supabase فعال می‌شود.');return}};
(async()=>{try{const u=U=await claude.use('user');if(u&&await u.canEdit())ADM=true;
 db=await claude.use('db');if(db)db.doc('site/content').onSnapshot(s=>{if(s.exists){C={...structuredClone(D),...s.data()};render()}startM()})}catch(e){}})();
if(!HAS)try{const x=localStorage.getItem('site');if(x){const saved=JSON.parse(x);C={...structuredClone(D),...saved};if((saved.rev||0)<(D.rev||0)){C.books=structuredClone(D.books);C.secT=D.secT;C.rev=D.rev;}}}catch(e){}
render();setNav(0);
async function loadSupabaseContent(){if(!sbClient)return;const cfg=window.ASRAR_SUPABASE_CONFIG||{};try{const {data,error}=await sbClient.from(cfg.contentTable||'site_content').select('content').eq('key',cfg.contentKey||'main').maybeSingle();if(error)throw error;if(data?.content&&typeof data.content==='object'){C={...structuredClone(D),...data.content};render()}}catch(e){console.error('Supabase content load failed',e)}finally{startM()}}
if(sbClient)loadSupabaseContent();

// قفل کردن حرکت صفحه (جلوگیری از کشیده شدن کل اپ)
document.addEventListener('touchmove', function(e){
  if(e.target&&typeof e.target.closest==='function'&&e.target.closest('.scroll, .pg, .banner, .cv, .track')) return;
  e.preventDefault();
}, {passive:false});

// PWA install support — online-only: the service worker never stores app files or provides offline fallbacks.
if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{});});}

// Modal implementation layer: original supplied calculations + modal-specific forms
window.ASRAR_MODAL_HTML = {"0": "<div class=\"input-group\">\n    <label>👤 اسم شما:</label>\n    <input type=\"text\" id=\"sababName\" placeholder=\"مثال: محمد\">\n</div>\n<div class=\"input-group\">\n    <label>👩 اسم مادر شما:</label>\n    <input type=\"text\" id=\"sababMother\" placeholder=\"مثال: فاطمه\">\n</div>\n<div class=\"input-group\">\n    <label>📅 اسم روز:</label>\n    <select id=\"sababDay\">\n        <option value=\"السبت\">السبت (شنبه)</option>\n        <option value=\"الاحد\">الاحد (یکشنبه)</option>\n        <option value=\"الاثنین\">الاثنین (دوشنبه)</option>\n        <option value=\"الثلاث\">الثلاث (سه‌شنبه)</option>\n        <option value=\"الاربعا\">الاربعا (چهارشنبه)</option>\n        <option value=\"الخمیس\">الخمیس (پنجشنبه)</option>\n        <option value=\"الجمعه\">الجمعه (جمعه)</option>\n    </select>\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateSabab()\">🧮 محاسبه دلیل آینده</button>\n<div class=\"calculation-box\" id=\"sababCalcSteps\" style=\"display:none;\">\n    <div class=\"calculation-step\" id=\"step1\"></div>\n    <div class=\"calculation-step\" id=\"step2\"></div>\n    <div class=\"calculation-step\" id=\"step3\"></div>\n    <div class=\"calculation-step\" id=\"step4\"></div>\n    <div class=\"calculation-step\" id=\"step5\"></div>\n</div>\n<div class=\"result-box\" id=\"sababResult\" style=\"display:none;\">\n    <div class=\"result-value\" id=\"sababNumber\"></div>\n    <div class=\"result-description\" id=\"sababDescription\"></div>\n</div>", "1": "<div class=\"input-group\">\n    <label>♀️ اسم زن:</label>\n    <input type=\"text\" id=\"womanName\" placeholder=\"مثال: زهرا\">\n</div>\n<div class=\"input-group\">\n    <label>♂️ اسم مرد:</label>\n    <input type=\"text\" id=\"manName\" placeholder=\"مثال: علی\">\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateMohabbat()\">💓 محاسبه محبت</button>\n<div class=\"calculation-box\" id=\"mohabbatCalcSteps\" style=\"display:none;\">\n    <div class=\"calculation-step\" id=\"mohabbatStep1\"></div>\n    <div class=\"calculation-step\" id=\"mohabbatStep2\"></div>\n    <div class=\"calculation-step\" id=\"mohabbatStep3\"></div>\n</div>\n<div class=\"result-box\" id=\"mohabbatResult\" style=\"display:none;\">\n    <div class=\"result-value\" id=\"mohabbatNumber\"></div>\n    <div class=\"result-description\" id=\"mohabbatDescription\"></div>\n</div>", "2": "<div class=\"tab-buttons\">\n    <button class=\"tab-btn active\" onclick=\"changeTab('rastegoo','rastegooTab',event)\">راستگویی</button>\n    <button class=\"tab-btn\" onclick=\"changeTab('rastegoo','behboodTab',event)\">تشخیص بهبود بیمار</button>\n</div>\n\n<div class=\"tab-content active\" id=\"rastegooTab\">\n    <div class=\"input-group\">\n        <label>👤 اسم گوینده:</label>\n        <input type=\"text\" id=\"rastegooName\" placeholder=\"مثال: احمد\">\n    </div>\n    <div class=\"input-group\">\n        <label>📅 روز:</label>\n        <select id=\"rastegooDay\">\n            <option value=\"السبت\">السبت (شنبه)</option>\n            <option value=\"الاحد\">الاحد (یکشنبه)</option>\n            <option value=\"الاثنین\">الاثنین (دوشنبه)</option>\n            <option value=\"الثلاث\">الثلاث (سه‌شنبه)</option>\n            <option value=\"الاربعا\">الاربعا (چهارشنبه)</option>\n            <option value=\"الخمیس\">الخمیس (پنجشنبه)</option>\n            <option value=\"الجمعه\">الجمعه (جمعه)</option>\n        </select>\n    </div>\n    <button class=\"calculate-btn\" onclick=\"calculateRastegoo()\">💬 تشخیص راستگویی</button>\n    <div class=\"result-box\" id=\"rastegooResult\" style=\"display:none;\">\n        <div class=\"result-value\" id=\"rastegooValue\"></div>\n        <div class=\"result-description\" id=\"rastegooDescription\"></div>\n    </div>\n</div>\n\n<div class=\"tab-content\" id=\"behboodTab\">\n    <div class=\"input-group\">\n        <label>🤒 اسم بیمار:</label>\n        <input type=\"text\" id=\"behboodName\" placeholder=\"مثال: مریم\">\n    </div>\n    <div class=\"input-group\">\n        <label>👩 اسم مادر بیمار:</label>\n        <input type=\"text\" id=\"behboodMother\" placeholder=\"مثال: سکینه\">\n    </div>\n    <button class=\"calculate-btn\" onclick=\"calculateBehbood()\">💓 تشخیص بهبود</button>\n    <div class=\"result-box\" id=\"behboodResult\" style=\"display:none;\">\n        <div class=\"result-value\" id=\"behboodValue\"></div>\n        <div class=\"result-description\" id=\"behboodDescription\"></div>\n    </div>\n</div>", "3": "<div class=\"tab-buttons\">\n    <button class=\"tab-btn active\" onclick=\"changeTab('dostDoshmani','sherkatTab',event)\">شراکت تجاری</button>\n    <button class=\"tab-btn\" onclick=\"changeTab('dostDoshmani','dostTab',event)\">تشخیص دوست/دشمن</button>\n</div>\n\n<div class=\"tab-content active\" id=\"sherkatTab\">\n    <div class=\"input-group\">\n        <label>👨‍💼 اسم شریک اول:</label>\n        <input type=\"text\" id=\"sharik1\" placeholder=\"مثال: حسن\">\n    </div>\n    <div class=\"input-group\">\n        <label>👨‍💼 اسم شریک دوم:</label>\n        <input type=\"text\" id=\"sharik2\" placeholder=\"مثال: حسین\">\n    </div>\n    <button class=\"calculate-btn\" onclick=\"calculateSherkat()\">📈 محاسبه شراکت</button>\n    <div class=\"result-box\" id=\"sherkatResult\" style=\"display:none;\">\n        <div class=\"result-value\" id=\"sherkatValue\"></div>\n        <div class=\"result-description\" id=\"sherkatDescription\"></div>\n    </div>\n</div>\n\n<div class=\"tab-content\" id=\"dostTab\">\n    <div class=\"input-group\">\n        <label>📅 روز:</label>\n        <select id=\"dostDay\">\n            <option value=\"السبت\">السبت (شنبه)</option>\n            <option value=\"الاحد\">الاحد (یکشنبه)</option>\n            <option value=\"الاثنین\">الاثنین (دوشنبه)</option>\n            <option value=\"الثلاث\">الثلاث (سه‌شنبه)</option>\n            <option value=\"الاربعا\">الاربعا (چهارشنبه)</option>\n            <option value=\"الخمیس\">الخمیس (پنجشنبه)</option>\n            <option value=\"الجمعه\">الجمعه (جمعه)</option>\n        </select>\n    </div>\n    <div class=\"input-group\">\n        <label>👤 اسم شخص:</label>\n        <input type=\"text\" id=\"dostName\" placeholder=\"مثال: رضا\">\n    </div>\n    <div class=\"input-group\">\n        <label>👩 اسم مادر شخص:</label>\n        <input type=\"text\" id=\"dostMother\" placeholder=\"مثال: زینب\">\n    </div>\n    <button class=\"calculate-btn\" onclick=\"calculateDost()\">👥 تشخیص رابطه</button>\n    <div class=\"result-box\" id=\"dostResult\" style=\"display:none;\">\n        <div class=\"result-value\" id=\"dostValue\"></div>\n        <div class=\"result-description\" id=\"dostDescription\"></div>\n    </div>\n</div>", "4": "<div class=\"input-group\">\n    <label>🤒 اسم بیمار:</label>\n    <input type=\"text\" id=\"bimari12Name\" placeholder=\"مثال: اکبر\">\n</div>\n<div class=\"input-group\">\n    <label>👩 اسم مادر بیمار:</label>\n    <input type=\"text\" id=\"bimari12Mother\" placeholder=\"مثال: خدیجه\">\n</div>\n<div class=\"input-group\">\n    <label>📅 روز سوال:</label>\n    <select id=\"bimari12Day\">\n        <option value=\"السبت\">السبت (شنبه)</option>\n        <option value=\"الاحد\">الاحد (یکشنبه)</option>\n        <option value=\"الاثنین\">الاثنین (دوشنبه)</option>\n        <option value=\"الثلاث\">الثلاث (سه‌شنبه)</option>\n        <option value=\"الاربعا\">الاربعا (چهارشنبه)</option>\n        <option value=\"الخمیس\">الخمیس (پنجشنبه)</option>\n        <option value=\"الجمعه\">الجمعه (جمعه)</option>\n    </select>\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateBimari12()\">🔍 تشخیص علت بیماری</button>\n<div class=\"result-box\" id=\"bimari12Result\" style=\"display:none;\">\n    <div class=\"result-value\" id=\"bimari12Value\"></div>\n    <div class=\"result-description\" id=\"bimari12Description\"></div>\n</div>", "5": "<div class=\"input-group\">\n    <label>👤 اسم شخص غایب:</label>\n    <input type=\"text\" id=\"ghaebName\" placeholder=\"مثال: کریم\">\n</div>\n<div class=\"input-group\">\n    <label>👩 اسم مادر غایب:</label>\n    <input type=\"text\" id=\"ghaebMother\" placeholder=\"مثال: بتول\">\n</div>\n<div class=\"input-group\">\n    <label>📅 روز رفتن:</label>\n    <select id=\"ghaebDay\">\n        <option value=\"\">انتخاب کنید</option>\n        <option value=\"السبت\">السبت (شنبه)</option>\n        <option value=\"الاحد\">الاحد (یکشنبه)</option>\n        <option value=\"الاثنین\">الاثنین (دوشنبه)</option>\n        <option value=\"الثلاث\">الثلاث (سه‌شنبه)</option>\n        <option value=\"الاربعا\">الاربعا (چهارشنبه)</option>\n        <option value=\"الخمیس\">الخمیس (پنجشنبه)</option>\n        <option value=\"الجمعه\">الجمعه (جمعه)</option>\n    </select>\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateGhaeb()\">🚶 تشخیص آمدن غایب</button>\n<div class=\"result-box\" id=\"ghaebResult\" style=\"display:none;\">\n    <div class=\"result-value\" id=\"ghaebValue\"></div>\n    <div class=\"result-description\" id=\"ghaebDescription\"></div>\n</div>", "6": "<div class=\"input-group\">\n    <label>👤 اسم شخص:</label>\n    <input type=\"text\" id=\"bahtName\" placeholder=\"مثال: عباس\">\n</div>\n<div class=\"input-group\">\n    <label>👩 اسم مادر شخص:</label>\n    <input type=\"text\" id=\"bahtMother\" placeholder=\"مثال: نرگس\">\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateBaht()\">👑 محاسبه طالع</button>\n<div class=\"result-box\" id=\"bahtResult\" style=\"display:none;\">\n    <div class=\"result-value\" id=\"bahtValue\"></div>\n    <div class=\"result-description\" id=\"bahtDescription\"></div>\n</div>", "7": "<div class=\"input-group\">\n    <label>🤒 اسم شخص:</label>\n    <input type=\"text\" id=\"bimariName\" placeholder=\"مثال: فرهاد\">\n</div>\n<div class=\"input-group\">\n    <label>👩 اسم مادر شخص:</label>\n    <input type=\"text\" id=\"bimariMother\" placeholder=\"مثال: لیلا\">\n</div>\n<div class=\"input-group\">\n    <label>📅 روز:</label>\n    <select id=\"bimariDay\">\n        <option value=\"السبت\">السبت (شنبه)</option>\n        <option value=\"الاحد\">الاحد (یکشنبه)</option>\n        <option value=\"الاثنین\">الاثنین (دوشنبه)</option>\n        <option value=\"الثلاث\">الثلاث (سه‌شنبه)</option>\n        <option value=\"الاربعا\">الاربعا (چهارشنبه)</option>\n        <option value=\"الخمیس\">الخمیس (پنجشنبه)</option>\n        <option value=\"الجمعه\">الجمعه (جمعه)</option>\n    </select>\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateBimari()\">🔍 تشخیص علت بیماری</button>\n<div class=\"result-box\" id=\"bimariResult\" style=\"display:none;\">\n    <div class=\"result-value\" id=\"bimariValue\"></div>\n    <div class=\"result-description\" id=\"bimariDescription\"></div>\n</div>", "8": "<div class=\"input-group\">\n    <label>👤 اسم طالب:</label>\n    <input type=\"text\" id=\"setareName\" placeholder=\"مثال: امیر\">\n</div>\n<div class=\"input-group\">\n    <label>👩 اسم مادر طالب:</label>\n    <input type=\"text\" id=\"setareMother\" placeholder=\"مثال: سمیرا\">\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateSetare()\">🌟 محاسبه ستاره طالع</button>\n<div class=\"result-box\" id=\"setareResult\" style=\"display:none;\">\n    <div class=\"result-value\" id=\"setareValue\"></div>\n    <div class=\"result-description\" id=\"setareDescription\"></div>\n</div>", "9": "<div class=\"tab-buttons\">\n    <button class=\"tab-btn active\" onclick=\"changeTab('calculator','abjadTabCalc',event)\">محاسبه ابجد</button>\n    <button class=\"tab-btn\" onclick=\"changeTab('calculator','simpleMathTab',event)\">ماشین حساب ساده</button>\n    <button class=\"tab-btn\" onclick=\"changeTab('calculator','advancedMathTab',event)\">ماشین حساب پیشرفته</button>\n</div>\n\n<div class=\"tab-content active\" id=\"abjadTabCalc\">\n    <div class=\"input-group\">\n        <label>🔤 متن یا نام:</label>\n        <input type=\"text\" id=\"abjadText\" placeholder=\"مثال: علی\">\n    </div>\n    <div class=\"input-group\">\n        <label>📋 نوع حساب:</label>\n        <select id=\"abjadType\">\n            <option value=\"kabir\">ابجد کبیر</option>\n            <option value=\"saghir\">ابجد صغیر</option>\n            <option value=\"vasit\">ابجد وسیط</option>\n        </select>\n    </div>\n    <button class=\"calculate-btn\" onclick=\"calculateAbjadCalc()\">🧮 محاسبه ابجد</button>\n    <div class=\"result-box\" id=\"abjadResult\" style=\"display:none;\">\n        <div class=\"calculation-box\"><div class=\"calculation-step\" id=\"abjadCalc\"></div></div>\n        <div class=\"result-value\" id=\"abjadValue\"></div>\n        <div class=\"result-description\" id=\"abjadDescription\"></div>\n    </div>\n</div>\n\n<div class=\"tab-content\" id=\"simpleMathTab\">\n    <div class=\"input-group\">\n        <label>🔢 عدد اول:</label>\n        <input type=\"number\" id=\"num1\" placeholder=\"مثال: 125\">\n    </div>\n    <div class=\"input-group\">\n        <label>🔢 عدد دوم:</label>\n        <input type=\"number\" id=\"num2\" placeholder=\"مثال: 66\">\n    </div>\n    <div class=\"input-group\">\n        <label>⚙️ عملیات:</label>\n        <select id=\"operation\">\n            <option value=\"+\">جمع (+)</option>\n            <option value=\"-\">تفریق (-)</option>\n            <option value=\"*\">ضرب (×)</option>\n            <option value=\"/\">تقسیم (÷)</option>\n            <option value=\"%\">باقیمانده (%)</option>\n        </select>\n    </div>\n    <button class=\"calculate-btn\" onclick=\"calculateMath()\">= محاسبه</button>\n    <div class=\"result-box\" id=\"mathResult\" style=\"display:none;\">\n        <div class=\"result-value\" id=\"mathValue\"></div>\n    </div>\n</div>\n\n<div class=\"tab-content\" id=\"advancedMathTab\">\n    <div class=\"input-group\">\n        <label>🧮 عبارت ریاضی:</label>\n        <textarea id=\"mathExpression\" rows=\"3\" placeholder=\"مثال: 125 + 66 + 33 + 80 + 14\"></textarea>\n    </div>\n    <button class=\"calculate-btn\" onclick=\"calculateAdvancedMath()\">= محاسبه عبارت</button>\n    <div class=\"calculation-box\" id=\"advancedMathSteps\" style=\"display:none;\">\n        <div class=\"calculation-step\" id=\"mathSteps\"></div>\n    </div>\n    <div class=\"result-box\" id=\"advancedMathResult\" style=\"display:none;\">\n        <div class=\"result-value\" id=\"advancedMathValue\"></div>\n    </div>\n</div>", "10": "<div class=\"input-group\">\n    <label>♂️ اسم مرد:</label>\n    <input type=\"text\" id=\"ezdevajMan\" placeholder=\"مثال: مهدی\">\n</div>\n<div class=\"input-group\">\n    <label>♀️ اسم زن:</label>\n    <input type=\"text\" id=\"ezdevajWoman\" placeholder=\"مثال: زهرا\">\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateEzdevaj()\">💕 محاسبه عاقبت ازدواج</button>\n<div class=\"result-box\" id=\"ezdevajResult\" style=\"display:none;\">\n    <div class=\"result-value\" id=\"ezdevajValue\"></div>\n    <div class=\"result-description\" id=\"ezdevajDescription\"></div>\n</div>", "11": "<div class=\"input-group\">\n    <label>👤 نام شخص:</label>\n    <input type=\"text\" id=\"hayranName\" placeholder=\"مثال: احمد\">\n</div>\n<div class=\"input-group\">\n    <label>👩 نام مادر:</label>\n    <input type=\"text\" id=\"hayranMother\" placeholder=\"مثال: فاطمه\">\n</div>\n<div class=\"input-group\">\n    <label>👥 نوع محاسبه:</label>\n    <div class=\"radio-group\">\n        <div class=\"radio-btn active\" data-type=\"adult\" onclick=\"selectType('adult')\">👤 بزرگسال</div>\n        <div class=\"radio-btn\" data-type=\"child\" onclick=\"selectType('child')\">👶 کودک</div>\n    </div>\n</div>\n<div id=\"genderSection\" class=\"input-group\">\n    <label>⚧ جنسیت:</label>\n    <div class=\"radio-group\">\n        <div class=\"radio-btn active\" data-gender=\"male\" onclick=\"selectGender('male')\">♂️ مرد</div>\n        <div class=\"radio-btn\" data-gender=\"female\" onclick=\"selectGender('female')\">♀️ زن</div>\n    </div>\n</div>\n<div id=\"daySection\" class=\"input-group\" style=\"display:none;\">\n    <label>📅 روز هفته:</label>\n    <select id=\"hayranDay\">\n        <option value=\"السبت\">السبت (شنبه)</option>\n        <option value=\"الاحد\">الاحد (یکشنبه)</option>\n        <option value=\"الاثنین\">الاثنین (دوشنبه)</option>\n        <option value=\"الثلاث\">الثلاث (سه شنبه)</option>\n        <option value=\"الاربعا\">الاربعا (چهارشنبه)</option>\n        <option value=\"الخمیس\">الخمیس (پنجشنبه)</option>\n        <option value=\"الجمعه\">الجمعه (جمعه)</option>\n    </select>\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateHayran()\">🧮 محاسبه طالع</button>\n<div class=\"result-box\" id=\"hayranResult\" style=\"display:none;\">\n    <div class=\"result-value\" id=\"hayranNumber\"></div>\n    <div class=\"result-description\" id=\"hayranDescription\"></div>\n</div>", "12": "<div class=\"input-group\">\n    <label>👤 نام طالب:</label>\n    <input type=\"text\" id=\"ramlName\" placeholder=\"مثال: محسن\">\n</div>\n<div class=\"input-group\">\n    <label>👩 نام مادر طالب:</label>\n    <input type=\"text\" id=\"ramlMother\" placeholder=\"مثال: معصومه\">\n</div>\n<div class=\"input-group\">\n    <label>📅 روز:</label>\n    <select id=\"ramlDay\">\n        <option value=\"السبت\">السبت (شنبه)</option>\n        <option value=\"الاحد\">الاحد (یکشنبه)</option>\n        <option value=\"الاثنین\">الاثنین (دوشنبه)</option>\n        <option value=\"الثلاث\">الثلاث (سه‌شنبه)</option>\n        <option value=\"الاربعا\">الاربعا (چهارشنبه)</option>\n        <option value=\"الخمیس\">الخمیس (پنجشنبه)</option>\n        <option value=\"الجمعه\">الجمعه (جمعه)</option>\n    </select>\n</div>\n<div class=\"input-group\">\n    <label>🔢 عدد انتخابی (1-1000):</label>\n    <input type=\"number\" id=\"ramlNumber\" placeholder=\"مثال: 123\" min=\"1\" max=\"1000\">\n</div>\n<div class=\"input-group\">\n    <label>❓ انتخاب سوال (1-46):</label>\n    <select id=\"ramlQuestion\"></select>\n</div>\n<div class=\"list-item\" style=\"background: rgba(255,215,0,0.1);\">\n    <strong>ℹ️ منبع:</strong>\n    <span class=\"detail\">رمل امام علی (ع) - ۴۶ سوال کامل با پاسخ‌های اصلی</span>\n</div>\n<button class=\"calculate-btn\" onclick=\"calculateRaml()\">✨ گرفتن رمل</button>\n<div class=\"calculation-box\" id=\"ramlCalcSteps\" style=\"display:none;\">\n    <div class=\"calculation-step\" id=\"ramlStep1\"></div>\n    <div class=\"calculation-step\" id=\"ramlStep2\"></div>\n    <div class=\"calculation-step\" id=\"ramlStep3\"></div>\n    <div class=\"calculation-step\" id=\"ramlStep4\"></div>\n    <div class=\"calculation-step\" id=\"ramlStep5\"></div>\n</div>\n<div class=\"result-box\" id=\"ramlResult\" style=\"display:none;\">\n    <div class=\"result-title\" id=\"ramlQuestionTitle\"></div>\n    <div class=\"result-description\" id=\"ramlAnswer\"></div>\n</div>", "13": "<div class='input-group'><label>نام</label><input id='hamzadName'></div><div class='input-group'><label>نام مادر</label><input id='hamzadMother'></div><div class='input-group'><label>نوع تقویم</label><select id='hamzadCalendar'><option value='shamsi'>شمسی</option><option value='gregorian'>میلادی</option></select></div><div class='input-group'><label>سال</label><input type='number' id='hamzadYear'></div><div class='input-group'><label>ماه</label><input type='number' id='hamzadMonth' min='1' max='12'></div><div class='input-group'><label>روز</label><input type='number' id='hamzadDay' min='1' max='31'></div><button class='calculate-btn' onclick='calculateHamzad()'>محاسبه همزاد قرین</button><div class='result-box' id='hamzadResult'></div>", "14": "<p>فرم مکاشفه در دسترس نیست.</p>", "15": "<div class='input-group'><label>♂️ نام آقا:</label><input type='text' id='sotareManName' placeholder='مثال: محمد'></div>\n<div class='input-group'><label>👩 نام مادر آقا:</label><input type='text' id='sotareManMother' placeholder='مثال: مریم'></div>\n<div class='input-group'><label>♀️ نام خانم:</label><input type='text' id='sotareWomanName' placeholder='مثال: فاطمه'></div>\n<div class='input-group'><label>👩 نام مادر خانم:</label><input type='text' id='sotareWomanMother' placeholder='مثال: بتول'></div>\n<button class='calculate-btn' onclick='calculateSotareChini()'>⭐ محاسبه سازگاری</button><div class='result-box' id='sotareResult' style='display:none'></div>", "16": "<div class='input-group'><label>👤 اسم شخص:</label><input type='text' id='mokelName' placeholder='مثال: علی'></div>\n<button class='calculate-btn' onclick='calculateMokel()'>📿 استخراج موکل</button><div class='result-box' id='mokelResult' style='display:none'></div>", "17": "<div class='input-group'><label>🔢 عدد مورد نظر (۱-۱۰۰۰):</label><input type='number' id='asmaniNumber' placeholder='مثال: 110' min='1' max='1000'></div>\n<button class='calculate-btn' onclick='calculateAsmani()'>🌟 یافتن اسماء الحسنی</button><div class='result-box' id='asmaniResult' style='display:none'></div>", "18": "<p class='mm'>فرم و محاسبات این مودال در فایل دادهٔ قابل بازیابی، کد کامل و قابل اتکایی نداشت؛ برای جلوگیری از ساخت فرمول یا وفق جعلی، این بخش دست‌نخورده مانده است.</p>", "19": "<div class='input-group'><label>روز تولد (شمسی)</label><input type='number' id='marriageDay' placeholder='۱۷' min='1' max='31'></div>\n<div class='input-group'><label>ماه تولد (شمسی)</label><input type='number' id='marriageMonth' placeholder='۰۹' min='1' max='12'></div>\n<div class='input-group'><label>سال تولد (شمسی)</label><input type='number' id='marriageYear' placeholder='۱۳۷۳' min='1200' max='1450'></div>\n<button class='calculate-btn' onclick='calculateMarriageAge()'>آشکار کن ✦</button><div class='result-box' id='marriageAgeResult' style='display:none'></div>"};

window.ASRAR_MODAL_HTML['20'] = `<div class="input-group"><label>♂️ نام آقا:</label><input id="marSepMan" type="text" placeholder="مثال: حسان"></div>
<div class="input-group"><label>👩 نام مادر آقا:</label><input id="marSepManMother" type="text" placeholder="مثال: مریم"></div>
<div class="input-group"><label>♀️ نام خانم:</label><input id="marSepWoman" type="text" placeholder="مثال: میسا"></div>
<div class="input-group"><label>👩 نام مادر خانم:</label><input id="marSepWomanMother" type="text" placeholder="مثال: نور"></div>
<button class="calculate-btn" onclick="calculateMarriageSeparation()">💍 محاسبه ازدواج یا جدایی</button>
<div class="result-box" id="marSepResult" style="display:none"></div>`;

// بازچینی مودال‌ها بر اساس موضوع و تفکیک پنجره‌های چندموضوعی
(function reorganizeModalCatalog(){
 const oldMeta=D.modals.slice(), oldHtml=window.ASRAR_MODAL_HTML;
 function divFragment(source,id){
  const marker='id="'+id+'"', at=source.indexOf(marker); if(at<0)return '';
  const start=source.lastIndexOf('<div',at); const re=/<\/?div\b[^>]*>/gi; re.lastIndex=start; let depth=0,m;
  while((m=re.exec(source))){if(/^<\//.test(m[0]))depth--;else depth++;if(depth===0)return source.slice(start,re.lastIndex);}
  return '';
 }
 function inner(fragment){const a=fragment.indexOf('>'),b=fragment.lastIndexOf('</div>');return a>=0&&b>a?fragment.slice(a+1,b):fragment;}
 const truth=inner(divFragment(oldHtml[2],'rastegooTab'));
 const healing=inner(divFragment(oldHtml[2],'behboodTab'));
 const business=inner(divFragment(oldHtml[3],'sherkatTab'));
 const friend=inner(divFragment(oldHtml[3],'dostTab'));
 const abjad=inner(divFragment(oldHtml[9],'abjadTabCalc'));
 const simple=inner(divFragment(oldHtml[9],'simpleMathTab'));
 const advanced=inner(divFragment(oldHtml[9],'advancedMathTab'));
 const meta=(title,sub,guide)=>({t:title,s:sub,b:guide});
 const orderedMeta=[
  oldMeta[0],meta('ازدواج یا جدایی','ازدواج و جدایی','نام آقا، نام مادر آقا، نام خانم و نام مادر خانم را وارد کنید. فقط پاسخ نهایی نمایش داده می‌شود.'),oldMeta[9],meta('سن ازدواج','سه سن احتمالی','تاریخ تولد شمسی را با روز، ماه و سال وارد کنید تا سه سن پیشنهادی نمایش داده شود.'),meta('طالع‌بینی چینی ازدواج','سازگاری ازدواج','نام آقا، نام مادر آقا، نام خانم و نام مادر خانم را وارد کنید. نتیجه در کادر پاسخ نمایش داده می‌شود.'),oldMeta[1],
  meta('صحت کلام','راستگویی','نام گوینده و روز را وارد کنید و نتیجه را مشاهده کنید.'),oldMeta[5],oldMeta[4],
  meta('شفای بیمار','وضعیت بهبود بیمار','نام بیمار و نام مادر بیمار را وارد کنید. این خروجی سنتی جایگزین تشخیص یا درمان پزشکی نیست.'),
  meta('شراکت تجاری','سود و سرانجام شراکت','نام دو شریک را وارد کنید تا نتیجه سنتی شراکت نمایش داده شود.'),
  meta('دوست یا دشمن','شناخت رابطه','نام شخص، نام مادر و روز را وارد کنید.'),
  oldMeta[6],oldMeta[7],oldMeta[8],
  meta('محاسبه ابجد','ارزش حروف','متن یا نام و نوع حساب را انتخاب کنید. فقط نتیجه نهایی نمایش داده می‌شود.'),
  meta('ماشین حساب ساده','محاسبه عددی','دو عدد و نوع عملیات را وارد کنید.'),
  meta('ماشین حساب پیشرفته','محاسبه عبارت','عبارت ریاضی مورد نظر را وارد کنید.'),
  oldMeta[11],oldMeta[12],oldMeta[13],oldMeta[14],meta('استخراج موکل','نام موکل و توکیل','نام شخص و خواسته مورد نظر را وارد کنید. نام موکل و متن توکیل در کادر پاسخ نمایش داده می‌شود.'),oldMeta[17],oldMeta[18]
 ];
 const orderedHtml=[oldHtml[0],oldHtml[20],oldHtml[10],oldHtml[19],oldHtml[15],oldHtml[1],truth,oldHtml[7],oldHtml[4],healing,business,friend,oldHtml[5],oldHtml[6],oldHtml[8],abjad,simple,advanced,oldHtml[11],oldHtml[12],oldHtml[13],oldHtml[14],oldHtml[16].replace("<button class='calculate-btn'", "<div class='input-group'><label>📝 خواسته یا درخواست:</label><input type='text' id='mokelRequest' placeholder='خواسته خود را وارد کنید'></div><button class='calculate-btn'"),oldHtml[17],oldHtml[18]];
 D.modals=orderedMeta; C.modals=orderedMeta.slice();
 window.ASRAR_MODAL_HTML={}; orderedHtml.forEach((v,i)=>window.ASRAR_MODAL_HTML[String(i)]=v||'');
})();
const abjadKabir = {
    'ا':1,'آ':1,'أ':1,'إ':1,'ب':2,'ج':3,'د':4,'ه':5,'ة':5,
    'و':6,'ز':7,'ح':8,'ط':9,'ی':10,'ي':10,'ئ':10,'ى':10,
    'ک':20,'ك':20,'ل':30,'م':40,'ن':50,'س':60,'ع':70,'ف':80,
    'ص':90,'ق':100,'ر':200,'ش':300,'ت':400,'ث':500,'خ':600,
    'ذ':700,'ض':800,'ظ':900,'غ':1000
};

const abjadSaghir = {
    'ا':1,'ب':2,'ج':3,'د':4,'ه':5,'و':6,'ز':7,'ح':8,'ط':9,
    'ی':10,'ک':20,'ل':30,'م':40,'ن':50,'س':60,'ع':70,'ف':80,
    'ص':90,'ق':100,'ر':200,'ش':300,'ت':400,'ث':500,'خ':600,
    'ذ':700,'ض':800,'ظ':900,'غ':1000
};

const abjadVasit = {
    'ا':1,'ب':2,'ج':3,'د':4,'ه':5,'و':6,'ز':7,'ح':8,'ط':9,
    'ی':10,'ک':11,'ل':12,'م':13,'ن':14,'س':15,'ع':16,'ف':17,
    'ص':18,'ق':19,'ر':20,'ش':21,'ت':22,'ث':23,'خ':24,'ذ':25,
    'ض':26,'ظ':27,'غ':28
};

const abjadSpecial = {
    'ا':1,'ب':2,'ج':3,'د':4,'ه':5,'ز':6,'ح':7,'ط':8,'ی':9,
    'ک':10,'ل':8,'م':6,'ن':2,'س':0,'ع':10,'ف':8,'ص':6,
    'ق':4,'ر':8,'ش':0,'ت':4,'ث':8,'خ':0,'ذ':0,'ض':8,
    'ظ':0,'غ':4
};

const hejaiLetters = {
    'ا':1,'آ':1,'أ':1,'إ':1,'ء':1,'ئ':1,'ب':2,'ت':3,'ث':4,
    'ج':5,'ح':6,'خ':7,'د':8,'ذ':9,'ر':10,'ز':11,'س':12,
    'ش':13,'ص':14,'ض':15,'ط':16,'ظ':17,'ع':18,'غ':19,'ف':20,
    'ق':21,'ك':22,'ک':22,'ل':23,'م':24,'ن':25,'ه':26,'ة':26,
    'و':27,'ى':28,'ی':28
};


const ramlQuestionsPart1 = [
    { id: 1, title: "آیا حاجت برآورده می‌شود یا خیر؟", opts: ["در یُسْت و زود برآورده می‌شود", "بعد از تنگی و سختی برآورده می‌شود", "برآورده نمی‌شود و مانع آن مرد یا شخصی است", "در یُسر و از آن خیر و گشایش حاصل می‌شود", "پس از انتظار طولانی برآورده می‌شود", "به‌سرعت برآورده می‌شود", "در سختی و پس از انتظار طولانی برآورده می‌شود", "برآورده نمی‌شود و مانع آن حسد و کینه است", "برآورده می‌شود و از آن خیر و روزی نصیب می‌شود", "پس از سختی و تلاش و رنج برآورده می‌شود", "در یسر و شادمانی برآورده می‌شود", "پس از ناامیدی و دل‌زدگی برآورده می‌شود", "برآورده نمی‌شود و مانع آن مکر و فریب است", "پس از مدت طولانی برآورده می‌شود", "در یُسر و با خیری برآورده می‌شود", "پس از شدت و زحمت برآورده می‌شود"] },
    { id: 2, title: "آیا کار انجام می‌شود یا خیر؟", opts: ["کار انجام می‌شود", "کار انجام می‌شود", "کار انجام می‌شود", "کار انجام می‌شود اما بعد از زحمت و نزدیک به عدم انجام", "کار انجام می‌شود", "کار انجام نمی‌شود", "کار انجام نمی‌شود", "در آخر خراب می‌شود", "کار انجام می‌شود", "کار انجام نمی‌شود", "کار انجام می‌شود", "کار انجام می‌شود", "کار انجام می‌شود", "کار انجام نمی‌شود", "کار انجام نمی‌شود", "کار انجام می‌شود"] },
    { id: 3, title: "عاقبت سؤال‌کننده در خواسته‌اش چیست؟", opts: ["عاقبت نیک و پسندیده", "عاقبت نیک اما همراه تلاش و رنج", "مطلوب حاصل می‌شود و به مراد می‌رسد", "عاقبت مختلط از خوبی و بدی", "عاقبت ناپسند مگر اینکه صاحب منصب باشد؛ در آن صورت خوب است", "عاقبت نیک و پسندیده", "عاقبت بد و ناپسند", "عاقبت بد و ناپسند", "عاقبت نیک و پسندیده", "عاقبت همراه رنج ولی در نهایت نیکو", "عاقبت ناپسند", "آغاز با سختی و پایان با یسر و شادمانی", "عاقبت خوب", "عاقبت خوب اما همراه زحمت و تلاش", "عاقبت خوب ولی آغازش نزاع و اختلاف دارد", "ابتدا غم و اندوه سپس خوشی و سعادت"] },
    { id: 4, title: "آیا اتصال به مطلوب حاصل می‌شود یا خیر؟", opts: ["ارتباط حاصل نمی‌شود", "ارتباط حاصل می‌شود", "ارتباط دور است", "ارتباط حاصل می‌شود", "ارتباط از راه نظر است اما اجتماع نیست", "ارتباط بعد از مدت طولانی حاصل می‌شود", "ارتباط از جانب مطلوب خواهد بود", "ارتباط حاصل نمی‌شود", "ارتباط حاصل می‌شود", "ارتباط هنگام حضور خویشاوندان یا اعضاء فامیل خواهد بود", "ارتباط دور است", "ارتباط حاصل نمی‌شود", "ارتباط کامل حاصل می‌شود", "ارتباط بعد از مدت طولانی حاصل می‌شود", "ارتباط کامل حاصل می‌شود", "ارتباط حاصل نمی‌شود"] },
    { id: 5, title: "مطلوب در چه مکانی است؟", opts: ["پیش برادران و نزدیکانش (خویشاوندان)", "پیش دوستان و عزیزانش", "در میان همسایگان یا نزدیکان ساکن", "در منزل و خانهٔ خودش", "پیش پدر و بزرگان خانواده", "در جای شاد و خوشایند", "پیش برادران و نزدیکانش", "پیش دوستان و عزیزانش", "پیش دوستان و عزیزانش", "در میان همسایگان یا نزدیکان", "در مکان شادی و فرح", "پیش دوستان و عزیزانش", "در حال بیماری یا زندان", "پیش دوستان و عزیزانش", "در منزل و محل سکونتش شناخته‌شده", "پیش پدر یا بزرگان خانواده"] },
    { id: 6, title: "آیا مطلوب به شما می‌آید یا باید دنبال آن بروید؟", opts: ["مطلوب به تو می‌آید", "مطلوب به تو می‌آید", "لازم است که تو برایش تلاش کنی", "لازم است تلاش کنی", "لازم است تلاش کنی", "مطلوب پس از زمان طولانی می‌آید", "مطلوب به تو می‌آید", "مطلوب به تو می‌آید", "مطلوب به تو می‌آید", "باید برای آن تلاش کنی", "تماس و اجتماع بین طالب و مطلوب صورت نمی‌پذیرد", "باید برای آن تلاش کنی", "مطلوب به تو می‌آید", "باید برای آن تلاش کنی", "تماس رخ نمی‌دهد و اجتماع پیش نمی‌آید", "باید برای آن تلاش کنی"] },
    { id: 7, title: "اتصال به آنچه می‌طلبید نزدیک است یا دور؟", opts: ["اتصال نزدیک است", "اتصال دور است", "اتصال صورت نمی‌پذیرد", "اتصال دور است", "اتصال نزدیک است", "اتصال نزدیک است", "اتصال نزدیک است", "یا اتصال صورت نمی‌پذیرد یا دور خواهد بود", "اتصال دور است", "اتصال دور است", "اتصال نزدیک است", "اتصال دور است", "اتصال نزدیک است", "اتصال نزدیک است", "اتصال دور است", "اتصال دور است"] },
    { id: 8, title: "آیا کرب و بلا رفع می‌شود یا خیر؟", opts: ["پس از زمان طولانی رفع می‌شود", "مصیبت طولانی می‌شود", "به‌سرعت و عاجل رفع می‌شود", "پس از هفت روز رفع می‌شود", "پس از چند روز رفع می‌شود", "پس از زمان طولانی رفع می‌شود", "به‌سرعت رفع می‌شود", "طول می‌کشد سپس رفع می‌شود", "پس از سه روز رفع می‌شود", "به‌سرعت رفع می‌شود", "پس از زمان طولانی رفع می‌شود", "طول می‌کشد سپس رفع می‌شود", "به‌سرعت رفع می‌شود", "به‌سرعت رفع می‌شود", "پس از هفت روز رفع می‌شود", "طول می‌کشد سپس رفع می‌شود"] },
    { id: 9, title: "آیا آنچه می‌آید خیر است یا شر؟", opts: ["آینده خیر است", "آینده خیر است", "آینده خیر است", "مخلوطی از خیر و شر", "مخلوطی از خیر و شر", "آینده شر است", "آینده شر است", "آینده شر است", "آینده خیر است", "مخلوطی اما گرایش به خیر", "آینده خیر است", "مخلوطی اما گرایش به شر", "آینده شر است", "آینده خیر است", "آینده خیر است", "در آن خیر و شر هست"] },
    { id: 10, title: "آیا راز محفوظ می‌ماند یا فاش می‌شود؟", opts: ["راز فاش نمی‌شود", "راز فاش و برملا می‌شود", "راز مخفی و محفوظ می‌ماند", "راز فاش می‌شود", "راز فاش می‌شود", "راز محفوظ و مخفی می‌ماند", "راز نزد افراد ناشناس فاش می‌شود", "راز فاش و آشکار می‌شود", "راز نزد کسانی که نمی‌شناسی فاش می‌شود", "دیگران از آن اطلاع پیدا می‌کنند", "راز محفوظ و مخفی می‌ماند", "راز فاش می‌شود", "راز مخفی نگه داشته می‌شود", "راز فاش و شناخته می‌شود", "راز فاش می‌شود و معلوم می‌گردد", "راز محفوظ و مخفی می‌ماند"] },
    { id: 11, title: "حرکت در روز بهتر است یا در شب؟", opts: ["حرکت در روز بهتر است", "حرکت در شب بهتر است", "در شب و روز تفاوتی نیست", "حرکت در روز بهتر است", "حرکت در روز بهتر است", "حرکت در شب بهتر است", "حرکت در شب بهتر است", "حرکت در شب بهتر است", "در شب و روز تفاوتی نیست", "حرکت در روز مناسب‌تر است", "حرکت در روز بهتر است", "حرکت در روز بهتر است", "حرکت در شب بهتر است", "حرکت در شب بهتر است", "حرکت در روز بهتر است", "حرکت در شب بهتر است"] },
    { id: 12, title: "عاقبت سفر چیست؟", opts: ["سفر همراه فرح و آسایش است", "سفر همراه رنج و زحمت است", "سفر خیر و روزی به همراه دارد", "سفر شاد و مفرح است", "سفر همراه خسارت و رنج است", "سفر همراه خیر و روزی است", "سفر سختی دارد اما با سود", "سفر همراه روزی و خیر و زحمت است", "سفر شاد و سرورآفرین است", "سفر همراه رنج و تلاش است", "سفر شاد و مفرح است", "سفر روزی دارد اما با زحمت", "سفر آسایش و روزی و خیر دارد", "سفر آسوده و شادی دارد اما خسارت مالی", "سفر روزی‌آور و پرثمر است با تلاش", "سفر آسوده و مفرح و همراه خیر و روزی است"] },
    { id: 13, title: "عاقبت تجارت چیست؟", opts: ["تجارت همراه سود و فراوانی است", "سود کم دارد", "زحمت و تلاش بیش از سود است", "تجارت خسارت دارد", "سود و روزی نصیب می‌شود", "سود کمتر از سرمایه اولیه دارد", "خسارت و زحمت دارد", "زحمت با سود اندک", "رزق و سود دارد", "خسارت همراه رنج", "سود و روزی دارد", "سود فراوان دارد", "زحمت و تلاش با سود کم", "سود کم با تلاش زیاد", "سود و روزی فراوان", "سود و روزی در پی دارد"] },
    { id: 14, title: "عاقبت خرید چیست؟", opts: ["خرید همراه نحسی است", "خوش‌یُمنی در خرید", "خوش‌یُمنی در خرید", "نحسی در خرید", "نحسی در خرید", "خیر در خرید", "خیر در خرید", "باید قرعه را در زمان دیگر تکرار کرد", "نحسی در خرید", "نحسی در خرید", "خیر در خرید", "خیر در خرید", "خیر در خرید", "خیر در خرید", "خیر در خرید", "نحسی در خرید"] },
    { id: 15, title: "عاقبت فروش چیست؟", opts: ["فروش با سود و منفعت است", "بین سود و ضرر در نوسان است", "فروشنده در ضرر است", "فروش همراه سود است", "سودی که تکرار نمی‌شود", "خرابی و ضرر", "فروش با سود و منفعت", "نه ضرر دارد نه منفعت", "خسارت در فروش", "فروش با سود و منفعت", "فروش با سود و منفعت", "نه منفعت نه زیان", "فروش بهتر است", "خسارت دارد؛ بهتر صبر شود", "فروش سودآور است", "فروش مفید و سودآور است"] },
    { id: 16, title: "عاقبت دوستی چیست؟", opts: ["دوستی با مهر و احترام و فداکاری و اتحاد", "دوستی همراه خنده، تمسخر، جدایی و اختلاف", "دوستی با نجابت، صدق، بخشش و آرامش قلب", "ابتدا شادمانی و سپس نزاع و اختلاف", "دوستی پایدار و در ارتباط و موافق", "دوستی همراه حسد، غیبت و بدخواهی", "دوستی همراه خیر، خوشی و انس", "شادی و انس ولی سپس جدایی", "نجابت، بخشش، خیر و روزی", "محبت و مهربانی همراه انس و شادی", "انس، بخشش، روزی، صدق و برادری", "بخشنده ولی ناپاسخ", "شادی و اخذ و اهداء", "دوستی همراه مکر، حیله و نزاع", "دوستی خوب با انس و صدق ولی گاهی نزاع", "دوستی با عشق، فداکاری و خیر"] },
    { id: 17, title: "آیا شخص به وعده خود عمل می‌کند یا خیر؟", opts: ["وعده را اجرا می‌کند", "پس از مدت طولانی وعده را اجرا می‌کند", "وعده را اجرا می‌کند", "وعده را وفا نمی‌کند", "پس از اختلاف و وعید وعده را اجرا می‌کند", "وعده را اجرا می‌کند", "وعده را اجرا می‌کند", "وعده را اجرا می‌کند", "وعده را اجرا می‌کند", "نیت او نقض عهد است", "وعده را اجرا می‌کند", "پس از تأخیر و بهانه وعده را اجرا می‌کند", "وعده را اجرا می‌کند", "نقض عهد می‌کند", "نقض عهد می‌کند", "وعده را به‌طور کامل اجرا می‌کند"] },
    { id: 18, title: "آیا مدیون بدهی خود را می‌پردازد یا خیر؟", opts: ["مدیون بدهی خود را می‌پردازد", "پس از تأخیر و طول انتظار آن را می‌پردازد", "مدیون پرداخت می‌کند", "پس از وعده و تأخیر پرداخت می‌شود", "مدیون بدهی را بازپس نمی‌دهد", "مدیون بازنمی‌پردازد", "طلبکار دِین خود را پس می‌گیرد", "مدیون بدهی خود را می‌پردازد", "طلبکار دِین را پس می‌گیرد", "مدیون بدهی را می‌پردازد", "مدیون از دین انکار می‌کند", "مدیون دین را بازنمی‌گرداند", "پس از تأخیر و وعید دین پرداخت می‌شود", "طلبکار دِین را پس می‌گیرد", "مدیون بدهی را می‌پردازد", "مدیون دین را بازنمی‌گرداند"] },
    { id: 19, title: "آیا دین ادا می‌شود یا خیر؟", opts: ["دین سریعاً ادا می‌شود", "دین قسطی و پراکنده ادا می‌شود", "دین فقط پس از زمان طولانی و رنج ادا می‌شود", "دین با سختی ادا می‌شود و نزدیک است ادا نشود", "دین پیش از موعد ادا می‌شود", "دین با سختی و پراکنده ادا می‌شود", "طلبکار جای دیگری را نشان می‌دهد", "دین ناقص ادا می‌شود", "پرداخت دین با تأخیر انجام می‌شود", "بخشی نقد و بخشی به‌صورت چیز دیگری ادا می‌شود", "پس از صلح دین ادا می‌شود", "دین با تأخیر ادا می‌شود", "دین ناقص ادا می‌شود", "دین با تأخیر ادا می‌شود", "دین با سختی ادا می‌شود و نزدیک است ادا نشود", "دین سریعاً ادا می‌شود"] },
    { id: 20, title: "آیا امانت بازگردانده می‌شود یا خیر؟", opts: ["اگر خدا بخواهد بازمی‌گردد", "امانت بازنمی‌گردد", "پس از تذکر و وعید بازمی‌گردد", "امانت بازگردانده می‌شود", "امانت فاسد می‌شود", "پس از تأخیر و سختی بازمی‌گردد", "امانت بازمی‌گردد", "امانت بازمی‌گردد", "امانت بازمی‌گردد", "پس از زمان طولانی بازمی‌گردد", "امانت بازمی‌گردد", "امانت بازنمی‌گردد", "امانت بازمی‌گردد", "امانت فاسد می‌شود", "امانت بازنمی‌گردد", "امانت بازمی‌گردد"] },
    { id: 21, title: "آیا خبر صحیح است یا دروغ؟", opts: ["خبر حقیقت و صادق است", "آنچه شنیدی درست نیست", "مخلوطی از صدق و کذب", "غیرصحیح و دروغ است", "خبر حق و صادق است", "خبر حق و صادق است", "در آن صدق و کذب هست", "باطل و دروغ", "خبر حق و صادق است", "در آن صدق و کذب هست", "خبر حقیقت دارد", "خبر حقیقت دارد", "باطل و دروغ", "باطل و دروغ", "در آن صدق و کذب هست", "در آن صدق و کذب هست"] },
    { id: 22, title: "مدت زمان چقدر است؟", opts: ["یک روز", "سه روز", "پنج روز", "هفت روز", "یک جمعه (هفته)", "دو جمعه (دو هفته)", "سه جمعه (سه هفته)", "چهار جمعه (چهار هفته)", "سه ماه", "پنج ماه", "هفت ماه", "ده ماه", "یک سال", "دو سال", "سه سال", "چهار سال"] },
    { id: 23, title: "عاقبت ازدواج چیست؟", opts: ["اتفاق و خیر و پیوند", "اختلاف و تنگی و ناراحتی", "مخلوطی از روزهای موافق و مخالف", "شاد و ساکن، آرامش و هم‌نشینی", "راحتی و کمی سختی", "نحسی و جدایی", "اتفاق با اندکی اختلاف", "اتفاق و خوشی و آرامش", "اختلاف و جدایی", "خوشی و آرامش ولی گاهی دوری در بستر", "آرامش، خیر و توافق", "نزاع و جدایی و دوری در بستر", "خوشی و آرامش و محبّت", "آغاز خوش و پایان با سختی", "آرامش و خوشی و سعادت", "فراق و وصال متناوب"] }
];

const ramlQuestionsPart2 = [
    { id: 24, title: "آیا مطلّقه به همسر خود بازمی‌گردد یا خیر؟", opts: ["برنمی‌گردد و طرف تمایل ندارد", "بازمی‌گردد", "پس از مدت طولانی بازمی‌گردد", "تمایل دارد و بازمی‌گردد", "تمایل دارد ولی بازنمی‌گردد", "تمایل دارد ولی بازنمی‌گردد", "او تمایل دارد ولی برگردانده نمی‌شود", "بازمی‌گردد", "بازمی‌گردد و پذیرفته می‌شود", "نه تمایل دارد نه بازمی‌گردد", "بازمی‌گردد", "تمایل دارد اما پذیرفته نمی‌شود", "تمایل دارد ولی بازنمی‌گردد", "بازمی‌گردد", "بازمی‌گردد", "تمایل دارد اما بازگردانده نمی‌شود"] },
    { id: 25, title: "آیا فرزندی حاصل می‌شود یا خیر؟", opts: ["فرزندی حاصل نمی‌شود", "رزق فرزند خواهد شد", "رزق فرزند نصیب می‌شود", "پس از انتظار طولانی فرزند حاصل می‌شود", "رزق فرزند خواهد شد", "رزق فرزند خواهد شد", "خطر عقیم بودن هست", "پس از انتظار طولانی صاحب فرزند می‌شود", "رزق فرزند خواهد شد", "رزق فرزند خواهد شد", "پس از انتظار طولانی صاحب فرزند می‌شود", "پس از انتظار طولانی و نگرانی از عقیم بودن", "رزق فرزند خواهد شد", "رزق فرزند خواهد شد", "رزق فرزند پس از انتظار طولانی", "پس از انتظار طولانی صاحب فرزند می‌شود؛ اگر بیش از 9 سال گذرد نگرانی از عقیم بودن"] },
    { id: 26, title: "آیا زن حامله است یا خیر؟", opts: ["حامل نیست", "حامل است", "حامل نیست", "حامل است", "حامل نیست", "حامل نیست", "حامل نیست", "حامل است", "حامل است", "حامل است", "حامل است", "حامل نیست", "حامل نیست", "حامل نیست", "حامل است", "حامل است"] },
    { id: 27, title: "آیا حاملگی تثبیت می‌شود یا خیر؟", opts: ["حاملگی تثبیت می‌شود", "حاملگی تثبیت می‌شود", "حاملگی تثبیت می‌شود", "خطر سقط وجود دارد", "حاملگی تثبیت می‌شود", "خطر سقط وجود دارد", "حاملگی تثبیت می‌شود", "خطر سقط وجود دارد", "خطر سقط وجود دارد", "حاملگی تثبیت می‌شود", "حاملگی تثبیت می‌شود", "خطر سقط وجود دارد", "حاملگی تثبیت می‌شود", "حاملگی تثبیت می‌شود", "خطر سقط وجود دارد", "حاملگی تثبیت می‌شود"] },
    { id: 28, title: "تعداد فرزند در شکم مادر چقدر است؟", opts: ["تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "دو قلو", "تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "تک‌نوزاد", "دو قلو"] },
    { id: 29, title: "جنسیت نوزاد چیست؟", opts: ["نوزاد پسر", "نوزاد پسر", "نوزاد دختر", "نوزاد پسر", "نوزاد دختر", "نوزاد دختر", "نوزاد دختر", "نوزاد دختر", "نوزاد دختر", "نوزاد پسر", "نوزاد پسر", "نوزاد دختر", "نوزاد پسر", "نوزاد پسر", "نوزاد دختر", "نوزاد دختر"] },
    { id: 30, title: "در چه روزی زن زایمان می‌کند؟", opts: ["دوشنبه", "سه‌شنبه", "پنج‌شنبه", "جمعه", "چهارشنبه", "دوشنبه", "شنبه", "یک‌شنبه", "یک‌شنبه", "شنبه", "پنج‌شنبه", "چهارشنبه", "شنبه", "جمعه", "سه‌شنبه", "شنبه"] },
    { id: 31, title: "وضعیت غایب چیست؟", opts: ["در خوبی و سلامت", "در خوبی و سلامت", "دل‌مشغولی، افکار پریشان، کمی بی‌پولی", "ممکن است فوت کرده باشد", "در خوبی و سلامت", "در خوبی و سلامت", "در تنگنا و درد", "ممکن است فوت کرده باشد", "ممکن است فوت کرده باشد", "در درد و عذاب", "احتمالاً محبوس است", "در خوبی و سلامت", "محبوس در جهت شرق", "در خوبی و سلامت", "محبوس است", "در خوبی و سلامت"] },
    { id: 32, title: "آیا غایب بازمی‌گردد یا خیر؟", opts: ["به‌زودی بازمی‌گردد", "پس از هفت روز؛ اگر نشد پس از هفت ماه؛ اگر باز نشد پس از هفت سال", "به‌زودی بازمی‌گردد", "بازنمی‌گردد", "پس از سه روز یا هفت روز بازمی‌گردد", "پس از چند روز بازمی‌گردد", "پس از یک یا چند روز بازمی‌گردد", "بازنمی‌گردد", "بازنمی‌گردد", "پس از هفت روز یا در صورت تأخیر پس از یک ماه بازمی‌گردد", "پس از یک روز بازمی‌گردد", "پس از چهار روز یا اگر تأخیر شود پس یک هفته و اگر بازهم تأخیر کند پس دو هفته", "پس از سه روز بازمی‌گردد", "پس از چند روز بازمی‌گردد", "پس از هفت روز بازمی‌گردد", "پس از سه روز یا پس از سه هفته بازمی‌گردد"] },
    { id: 33, title: "وضعیت فراری یا هارب چیست؟", opts: ["در شهر گیج و سرگردان است", "در شهر به اختیار خود خارج شده", "با خوشی و میل در کنار دیگران است", "معذور و در غم و اندوه است", "با کسی که پیش او رفت‌وآمد داشته", "محبوس است و نمی‌تواند خارج شود", "محبوس و قادر به بازگشت نیست", "آزاد و نمی‌خواهد بازگردد", "گیج و سرگردان است", "در مکر و فریب است", "با کسی که میل دارد است", "در پشیمانی و آرزوی بازگشت ولی ناتوان", "در تنگی و حبس", "آزاد و نمی‌خواهد بازگردد", "با کسی که میل دارد است", "در اندوه و پشیمانی"] },
    { id: 34, title: "آیا فراری بازمی‌گردد یا خیر؟", opts: ["به‌سرعت پیدا می‌شود", "به‌راحتی یا بازمی‌گردد سریع", "پس از مدت طولانی پیدا می‌شود", "پس از مدت طولانی پیدا می‌شود", "به‌راحتی یا بازمی‌گردد سریع", "پس از چند روز بازمی‌گردد و بیش از هفت روز نمی‌شود", "به‌راحتی مکانش را نشان می‌دهد", "پس از چند روز بازمی‌گردد", "به‌راحتی مکانش معلوم می‌شود", "پس از چند روز پیدا می‌شود", "برنمی‌گردد؛ قرعه را دوباره تکرار کن", "پس از چند روز بازمی‌گردد", "بازنمی‌گردد", "در همان روز یا شب یا پس از سه روز بازمی‌گردد", "پس از چند روز بازمی‌گردد", "بین یک تا سه روز پیدا می‌شود"] },
    { id: 35, title: "آیا بیمار شفا می‌یابد یا خیر؟", opts: ["پس از مدت طولانی بهبود می‌یابد", "خیر؛ بیمار از دنیا می‌رود", "بیمار به‌سرعت بهبود می‌یابد", "خیر؛ بیمار درگذرد", "بیمار پس از چند روز بهبود می‌یابد", "بیمار پس از مدت طولانی بهبود می‌یابد", "بهبود پس از ماه‌ها یا یک سال", "بهبود پس از شدت بیماری", "شفا می‌یابد", "شفا نمی‌یابد", "پس از شدت بهبود می‌یابد", "پس از چند روز بهبود می‌یابد", "پس از درمان طولانی بهبود می‌یابد", "شفا نمی‌یابد", "پس از چند روز بهبود می‌یابد", "پس از درمان طولانی بهبود می‌یابد"] },
    { id: 36, title: "آیا متهم بی‌گناه است یا خیر؟", opts: ["متهم بی‌گناه است", "متهم به جرم محکوم می‌شود", "متهم به جرم محکوم می‌شود", "متهم به جرم محکوم می‌شود", "متهم بی‌گناه است", "متهم بی‌گناه است", "متهم بی‌گناه است", "متهم بی‌گناه است", "متهم بی‌گناه است", "متهم بی‌گناه است", "متهم بی‌گناه است", "متهم بی‌گناه است", "متهم به جرم محکوم می‌شود", "متهم به جرم محکوم می‌شود", "متهم به جرم محکوم می‌شود", "متهم به جرم محکوم می‌شود"] },
    { id: 37, title: "عاقبت مخاصمه چیست؟", opts: ["خصم از سؤال‌کننده قوی‌تر است", "خصم بر سؤال‌کننده غلبه می‌کند", "دو طرف در قوت برابرند", "سؤال‌کننده خصم را مغلوب می‌کند", "سؤال‌کننده خصم را مغلوب می‌کند", "سؤال‌کننده پیروز می‌شود", "خصم بر سؤال‌کننده غلبه می‌کند", "سؤال‌کننده بر خصم پیروز می‌شود", "سؤال‌کننده از خصم قوی‌تر است", "سؤال‌کننده از خصم قوی‌تر است", "خصم از سؤال‌کننده قوی‌تر است", "خصم از سؤال‌کننده قوی‌تر است", "دو طرف در قوت برابرند", "خصم از سؤال‌کننده قوی‌تر است", "سؤال‌کننده بر خصم غالب می‌شود", "دو طرف برابرند"] },
    { id: 38, title: "حکم قاضی درباره سؤال‌کننده چیست؟", opts: ["سؤال‌کننده مغلوب خواهد شد", "سؤال‌کننده غالب است و عاقبتش خوب است", "سؤال‌کننده غالب و پیروز می‌شود", "سؤال‌کننده مغلوب می‌شود", "سؤال‌کننده مغلوب می‌شود", "سؤال‌کننده پیروز و منتصر می‌شود", "سؤال‌کننده غالب است", "سؤال‌کننده غالب است", "سؤال‌کننده مغلوب است", "سؤال‌کننده مغلوب است", "سؤال‌کننده غالب است", "سؤال‌کننده نتیجهٔ نیک خواهد داشت", "سؤال‌کننده نتیجهٔ نیک خواهد داشت", "سؤال‌کننده پیروز و ظافر می‌شود", "عاقبت سؤال‌کننده نیکو خواهد بود", "سؤال‌کننده مغلوب می‌شود"] },
    { id: 39, title: "آیا مال مسروقه بازمی‌گردد یا خیر؟", opts: ["مسروقه بازنمی‌گردد", "مسروقه بازنمی‌گردد", "مسروقه بازمی‌گردد", "مسروقه بازنمی‌گردد", "مسروقه بازنمی‌گردد", "مسروقه بازنمی‌گردد", "مسروقه بازمی‌گردد", "مسروقه ناقص بازمی‌گردد", "مسروقه پاره یا بریدگی‌خورده بازمی‌گردد", "مسروقه بازمی‌گردد", "مسروقه فاسد بازمی‌گردد", "مسروقه بازنمی‌گردد", "مسروقه بازمی‌گردد", "مسروقه بازمی‌گردد", "مسروقه بازمی‌گردد", "مسروقه بازنمی‌گردد"] },
    { id: 40, title: "وضعیت و صفت دزد چیست؟", opts: ["دزد از نزدیکان یا افرادی است که پناه می‌دهد", "دزد از اهل خانه یا خویشاوندان نزدیک است", "دزد از فرزندان عم یا خویشان نسبی", "دزد از برادران یا خواهران است", "دزد از فرزندان خاله یا خاله‌زاده‌ها", "دزد غریبه و دور است", "دزد از اهل خانه یا کسی که زیاد رفت‌وآمد دارد", "دزد غریبه و دور", "دزد از اهل خانه یا خویشاوند است", "دزد از اهل خانه یا خویشاوند است", "دزد خود سؤال‌کننده است", "دزد از دوستان یا همسایگان سؤال‌کننده است", "دزد غریبهٔ دور", "دزد از دوستان یا همسایگان سؤال‌کننده است", "دزد غریبه و دور", "دزد کسی است که زیاد به محل مسروقه سر می‌زند"] },
    { id: 41, title: "آیا دزد بین متهمان است یا خیر؟", opts: ["دزد در میان متهمان نیست", "دزد بین متهمان است", "دزد در میان متهمان نیست", "دزد بین متهمان است", "دزد بین متهمان است", "دزد بین متهمان است", "دزد در میان متهمان نیست", "دزد بین متهمان است", "دزد در میان متهمان نیست", "دزد بین متهمان است", "دزد بین متهمان است", "دزد در میان متهمان نیست", "دزد بین متهمان است", "دزد بین متهمان است", "دزد در میان متهمان نیست", "دزد بین متهمان است"] },
    { id: 42, title: "راهنمای بیرون کشیدن دزد از میان متهمان", opts: ["در جهت شمال", "در جهت شمال", "در جهت راست (راست بودن)", "در جهت راست", "در جهت راست", "در جهت راست", "در جهت شمال", "در جهت شمال", "در جهت راست", "در جهت شمال", "در جهت راست", "در جهت راست", "در جهت شمال", "در جهت شمال", "در جهت راست", "در جهت شمال"] },
    { id: 43, title: "آیا زندانی آزاد می‌شود یا خیر؟", opts: ["به‌زودی آزاد می‌شود", "در زندان فوت می‌کند", "پس از زمان طولانی آزاد می‌شود", "پس از زمان طولانی آزاد می‌شود", "پس از یک سال و اگر بیشتر شد پس هفت سال", "به‌سرعت آزاد می‌شود", "پس از زمان طولانی آزاد می‌شود", "به‌سرعت آزاد می‌شود", "به‌زودی آزاد می‌شود", "پس از چند روز یا اگر بیشتر شد پس یک ماه آزاد می‌شود", "پس از چند سال آزاد می‌شود", "پس از یک ماه آزاد می‌شود", "به‌زودی آزاد می‌شود", "پس از یک ماه آزاد می‌شود", "مدت حبس طولانی می‌شود", "به‌سرعت آزاد می‌شود"] },
    { id: 44, title: "آیا شخص به مقام یا سلطنت می‌رسد یا خیر؟", opts: ["به آنچه می‌خواهد و مقصودش می‌رسد", "به مقام یا چیزی کمتر از آن می‌رسد", "به حکومت و منصب می‌رسد", "نمی‌رسد و حاصل نمی‌شود", "نمی‌رسد", "خسارت و بازگشت و بی‌فایده", "نمی‌رسد", "نمی‌رسد ولی چیزی کمتر از آن می‌یابد", "نمی‌رسد", "ممکن است سلطان یا چیزی مشابه شود", "به خواسته‌ها و عنوان موردنظر می‌رسد", "نمی‌رسد", "نمی‌رسد", "نمی‌رسد", "نمی‌رسد", "به حکومت و منصب می‌رسد"] },
    { id: 45, title: "وضعیت حکم و رفتار سلطان و حاکم چیست؟", opts: ["با خود مشغول است و به حکم و رعیت نمی‌پردازد", "عزت دارد و نفوذ دارد؛ ممکن است ولیعهدی پیدا کند", "جبّار و ستمگر، فتنه و جنگ زیاد", "نشان‌دهنده فساد مملکت و ضعف اطاعت", "حکمش ظلم و جور است", "وظایف را می‌شناسد و به‌جا می‌آورد", "عادل و محبوب", "سیر و کارش ستوده و عادل است", "ضعیف و بیمار و تمایل به ظلم", "بسیاُر در سفر و حرکت است، به عدالت فرمان می‌دهد", "ملک و ثروت به دست می‌آورد و بر دشمنان چیره می‌شود", "عادل و محبوب", "ثروتمند و دارای یاران و مورد استقبال رعیّت", "ضعیف و ترسو، ممکن است شورش شود", "عادل و صالح و محبوب", "حکمش ظالمانه است و طول نمی‌کشد"] },
    { id: 46, title: "آیا جنگ رخ می‌دهد یا خیر؟", opts: ["جنگ رخ نخواهد داد", "جنگ رخ نخواهد داد", "نشانهٔ خشونت هست و جنگ ممکن است", "جنگ رخ نخواهد داد", "جنگ رخ نخواهد داد", "جنگ رخ می‌دهد", "جنگ رخ می‌دهد", "جنگ رخ می‌دهد و نظامی وارد می‌شود", "جنگ رخ می‌دهد و بلا وارد می‌شود", "جنگ رخ می‌دهد", "جنگ رخ نخواهد داد", "جنگ رخ نخواهد داد", "جنگ رخ نخواهد داد", "جنگ رخ نخواهد داد", "جنگ رخ می‌دهد", "جنگ رخ می‌دهد"] }
];

// ترکیب نهایی:
const ramlQuestions = [...ramlQuestionsPart1, ...ramlQuestionsPart2];const DEFAULT_MOKASHEFE_DATA = [
    {
        number: 1,
        name: "دار القمر - منزل العلوم",
        summary: "خبرهای خوب می‌آید. نامه یا پیام مثبت دریافت می‌کنی. غایب برمی‌گردد. کارت برکت دارد. ازدواج موفق است. بیمار بهبود می‌یابد.",
        arabicText: "الله متعال فرمود. قالوا أتعجبین من قضای الله رحمة الله و برکاته علیکم أهل البیت إنه حمید مجید. و سعد منقلب کوکبه الزهرة تدل على ورود کتاب من عند الاحباب و تدل على الاجتماع و الاتصال و تدل على قدوم الغائب. و هی علامة الافراح و تدل على الشموع الموقودة هذا الشکل یدل على الرزق الموجود و على دفع کید الحسود و على کثرة الافراح و الایام الملاة و انت ناوی على حرکة فیها برکة و ان سالت عن الغائب الذی قلبک من اجله فی متاعب و قلبه من اجلک فی لظی و وجد فانه یاتیک بکل السعد و ان شاء الله عن قریب قادم و یاتی الیک سالم و ان سالت عن الحمل فانه ذکر و لابد من بلوغ الامال و ان سالت من الزواج فانه صالح و الحج الیک ناجح و الفرح واصل و المقصود الیک حاصل و ان سالت عن المريض فان الشفاء من بعد الاسقام و نجات له من سائر الآلام و شموع عزک موقودة و الحواسد مكمودة و حاجتك مقضية و امورك مرضية.",
        mood: "روشنایی و امید"
    },
    {
        number: 2,
        name: "دار عطارد - منزل التجارة",
        summary: "خیر و برکت در انتظار توست. تفکر کن اما ترس نداشته باش. کارت موفق می‌شود. سود مالی داری. سفر مبارک است.",
        arabicText: "قال تعالى: سلام علیکم طبتم فادخلوها خالدین. یدل على الخیر والسعادة ویدل على کثرة التفکر والخوف. ان هذا الشکل سعد خارج کوکبة المشتری و هو دلیل العلم والدین والقضاء انة یدل على الامر الرشید وعلى بعد التنکید وعلى الامور الحمیدة والثورات الشدیدة.",
        mood: "ثبات و پیروزی"
    },
    {
        number: 3,
        name: "دار الزهرة - منزل المحبة",
        summary: "سلامتی و طول عمر داری. عشق و محبت در راه است. از مشکلات رها می‌شوی. تصمیم‌گیری‌هایت درست است.",
        arabicText: "قال تعالى: یا نار کونی بردا وسلاما علی ابراهیم. یدل على صحة الجسم وقوة النفس وطول الحیاة والمعیشة الحسنة ویدل على السؤال عن خطبة او عشق او مودة او اتصال وعلى رجوع ما خرج از الید وصحة المريض.",
        mood: "عشق و سلامت"
    },
    {
        number: 4,
        name: "دار الشمس - منزل السلطة",
        summary: "غم‌ها می‌رود. موفقیت در کار. پول به دست می‌آوری. روزی نزدیک است. صبر نتیجه می‌دهد.",
        arabicText: "قال تعالى: الحمد لله الذی اذهب عنا الحزن ان ربنا لغفور شکور. هذا الشکل سعد ثابت کوکبة القمر وهو دلیل النقلة والحرکات والاسفار والفتوح هذا الشکل یدل على الفرح والسرور ونجاح الامر ولا بد از قبض مال وتنصلح لک کل الاحوال.",
        mood: "قدرت و گشایش"
    },
    {
        number: 5,
        name: "دار المريخ - منزل الجهاد",
        summary: "خوشبختی همراه توست. بیمار بهبود می‌یابد. آرزوها برآورده می‌شود. شادی پایدار است.",
        arabicText: "قال تعالی: فاذا عزمت فتوکل. قیل ان کوکبة المریخ وهو دلیل الجند والسلاح والحرب هذا الشکل یدل على السعد القائم مع الخیرات ویدل على حصول المسرات ورایة الفرح لک تدوم ویدل على حیاة المريض وصحته وذهاب الامراض العارضة و رجوع الهارب.",
        mood: "اقتدار و حرکت"
    },
    {
        number: 6,
        name: "دار المشتری - منزل البركة",
        summary: "دوره‌ای سخت در پیش است. چیزی از دست می‌رود. شادی کم می‌شود. سفر نکن.",
        arabicText: "قال تعالى: والذین اذا اصابتهم مصیبة قالوا انا لله وانا الیه راجعون. یدل على کثرة الهم والغم ولا بد از خروج شئ من الید ویدل على تلف الاحوال هذا الشکل نحس خارج وهی دلیل على الارذال من الناس.",
        mood: "احتیاط"
    },
    {
        number: 7,
        name: "دار زحل - منزل الصبر",
        summary: "خطر فاش شدن راز. ترس و نگرانی. آتش و آسیب. اعتماد نکن.",
        arabicText: "قال تعلی: واصبر وما صبرک الا بالله. لا بد از کتم السر والرجوع عن هذا الامر واحذر یفشی سرک للغیر وتدل على الفزع والخوف وانت تریید اتصال امراة، ویدل على الحرق والنار ویدل على الخروج عن الطاعة وعلى ضیق الصدور.",
        mood: "هشدار"
    },
    {
        number: 8,
        name: "دار الثوابت - منزل الأمان",
        summary: "مشکلات پیچیده. خیانت و بی‌اعتمادی. کارها وارونه پیش می‌رود.",
        arabicText: "قال تعالى: ان الله مع الصابرین. وقال تعالى: وسیق الذین اتقوا ربهم الى الجنة زمرا. هذا شکل نحییس دنیوی وهو بلاء واجره علی الله وعاقبته عند الله عظیمة.",
        mood: "صبر و استقامت"
    },
    {
        number: 9,
        name: "دار الأسرار - منزل الكشف",
        summary: "موفقیت بزرگ. حل مشکلات. دیدار دوستان. درمان بیماری. سود زیاد.",
        arabicText: "یدل على صلاح بیت النفس والحیاة والاتصال وقضاء الحاجات وخدمة رجل جلیل القدر، وهو دلیل المسرات الحسنة و الحاجات مقضیة. هذا الشکل سعد خارج کوکبه الشمس وهو دلیل الملوک.",
        mood: "گشایش بزرگ"
    },
    {
        number: 10,
        name: "دار النور - منزل الهداية",
        summary: "کارها گیر دارد. نیاز به صبر. مشکلات موقتی. چشم‌زخم احتمالی.",
        arabicText: "قال تعالى: ولا تمشی فی الارض مرحا انک لن تخرق الارض ولن تبلغ الجبال طولا. یدل على صلاح المسالة بعد تعویقها الشدید والطویل وعلى ان السؤال عن حامل او مسجون او عن شئ عن العین وهو یرید ای جتماع به.",
        mood: "تأمل و انتظار"
    },
    {
        number: 11,
        name: "دار الفتح - منزل النصر",
        summary: "دیدارهای خوب. ارتباطات مثبت. بهبود بیماری. رسیدن به خواسته.",
        arabicText: "قال تعالى: وَتَرَى الْمَلَائِكَةَ حَافِّينَ مِنْ حَوْلِ الْعَرْشِ يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ... فیها بشری باجتماع بالمطلوب ونیل المرغوب ویدل على عافیة النفس وطیب العیش وکثرة الارزاق.",
        mood: "پیروزی و موفقیت"
    },
    {
        number: 12,
        name: "دار الرحمة - منزل العفو",
        summary: "آرامش درونی. حل مشکلات پنهان. روزی پنهان. معنویت قوی.",
        arabicText: "قال تعالى: یستبشرون بنعمة من الله وفضل و ان الله لا یضیع اجر المؤمنین... النصرة الداخلة ما ظهر لمدیون الا قضی دینه ولا لمسجون الا فک سجنه.",
        mood: "آرامش و بخشش"
    },
    {
        number: 13,
        name: "دار الابتلاء - منزل الامتحان",
        summary: "مسیر روشن. سفر خوب. نجات از دشمن. سلامتی کامل.",
        arabicText: "قال تعالى: وما النصر الا من عند الله. نصر وخیر مقبل سریع فلا تعب فیه من الان ویدل على عافیة الجسم وطول الحیاة.",
        mood: "آزمون و موفقیت"
    },
    {
        number: 14,
        name: "دار التمام - منزل الختام",
        summary: "از دست دادن. ترس و نگرانی. شرایط مبهم.",
        arabicText: "القبض الخارج فهو شئ قد خرج وصعب رجوعه او تحصله ناری، نحس، له کوکب وهمی یسمى الراس والخوف فی جمیع الاشیاء.",
        mood: "احتیاط کامل"
    },
    {
        number: 15,
        name: "دار البدء - منزل التجديد",
        summary: "رسیدن به هدف. کمک غیبی. نتیجه خوب پس از انتظار.",
        arabicText: "قال تعالى: متکئین على رفراف خضر وعبقری حسان. تدل على بلوغ المطلوب والاجتماع بالمحبوب فعاقبته جیدة وان طال الانتظار وهو ممتزج سعد بنحس.",
        mood: "شروع تازه"
    },
    {
        number: 16,
        name: "دار الوصل - منزل اللقاء",
        summary: "دریافت پنهان. خبر خوب. روزی ناگهانی. برکت الهی.",
        arabicText: "قال تعالى: وَإِن يَمْسَسْكَ اللهُ بِضُرٍّ فَلاَ كَاشِفَ لَهُ إِلاَّ هُوَ... سعد، کوکبه الشمس والقبض الداخل لا تنساه یعطی کل سائل مناه شئ مقبل وداخل علیک خبر تسمع او رزق یاتی.",
        mood: "وصال و دیدار"
    }
];function calculateSabab() {
    var name = document.getElementById('sababName').value.trim();
    var mother = document.getElementById('sababMother').value.trim();
    var day = document.getElementById('sababDay').value;
    if (!name || !mother) { showNotification('لطفاً تمام فیلدها را پر کنید', 'error'); return; }
    var nv = calculateAbjad(name, 'kabir');
    var mv = calculateAbjad(mother, 'kabir');
    var dv = calculateAbjad(day, 'kabir');
    var total = nv + mv + dv;
    var result = reduceByX(total, 7);
    var results = {
        1: 'برای مصلحت خاص (مربوط به یک هدف و نیت ویژه)',
        2: 'برای فکر فاسد (ناشی از تفکرات نادرست و منفی)',
        3: 'برای دزدی (مربوط به مال و اموال دیگران)',
        4: 'برای انجام کار خیر (نیت نیک و رفتار پسندیده)',
        5: 'برای انجام کار شر (عمل ناپسند و آسیب‌رسان)',
        6: 'به خاطر فساد بین زنان (ناشی از اختلافات و مشکلات میان زنان)',
        7: 'برای محبت (برآمده از عشق و علاقه قلبی)'
    };
    document.getElementById('sababCalcSteps').style.display = 'block';
    setElementText('step1', 'ابجد "' + name + '" = ' + nv);
    setElementText('step2', 'ابجد مادر "' + mother + '" = ' + mv);
    setElementText('step3', 'ابجد روز "' + day + '" = ' + dv);
    setElementText('step4', 'جمع کل = ' + nv + ' + ' + mv + ' + ' + dv + ' = ' + total);
    setElementText('step5', 'حاصل ۷-۷ = ' + result);
    setElementText('sababNumber', 'عدد ' + result);
    setElementText('sababDescription', results[result] || '');
    document.getElementById('sababResult').style.display = 'block';
    showNotification('محاسبه سبب القادم با موفقیت انجام شد');
}
function calculateMohabbat() {
    var w = document.getElementById('womanName').value.trim();
    var m = document.getElementById('manName').value.trim();
    if (!w || !m) { showNotification('لطفاً هر دو اسم را وارد کنید', 'error'); return; }
    var wv = calculateAbjad(w, 'kabir');
    var mv = calculateAbjad(m, 'kabir');
    var result = reduceByX(wv + mv, 3);
    var results = {
        1: 'زن، مرد را دوست دارد (علاقه قلبی و صمیمیت وجود دارد)',
        2: 'زن، مرد را دوست ندارد (بهتر است انتظارات خود را تعدیل کنید)',
        3: 'وضعیت بین دوست داشتن و نداشتن است (نیاز به زمان و شناخت بیشتر دارد)'
    };
    document.getElementById('mohabbatCalcSteps').style.display = 'block';
    setElementText('mohabbatStep1', 'ابجد زن "' + w + '" = ' + wv);
    setElementText('mohabbatStep2', 'ابجد مرد "' + m + '" = ' + mv);
    setElementText('mohabbatStep3', 'حاصل ۳-۳ = ' + result);
    setElementText('mohabbatNumber', 'عدد ' + result);
    setElementText('mohabbatDescription', results[result] || '');
    document.getElementById('mohabbatResult').style.display = 'block';
    showNotification('محاسبه محبت زن به مرد با موفقیت انجام شد');
}
function calculateRastegoo() {
    var name = document.getElementById('rastegooName').value.trim();
    var day = document.getElementById('rastegooDay').value;
    if (!name) { showNotification('لطفاً اسم گوینده را وارد کنید', 'error'); return; }
    var isTruthful = (calculateAbjad(name, 'kabir') + calculateAbjad(day, 'kabir')) % 2 === 1;
    setElementText('rastegooValue', isTruthful ? 'گوینده راستگو است' : 'گوینده دروغگو است');
    setElementText('rastegooDescription', isTruthful
        ? 'این شخص حقیقت را می‌گوید و قابل اعتماد است.'
        : 'گفته‌های این شخص نیاز به بررسی بیشتر دارد.');
    document.getElementById('rastegooResult').style.display = 'block';
    showNotification('تشخیص راستگویی انجام شد');
}
function calculateBehbood() {
    var name = document.getElementById('behboodName').value.trim();
    var mother = document.getElementById('behboodMother').value.trim();
    if (!name || !mother) { showNotification('لطفاً تمام فیلدها را پر کنید', 'error'); return; }
    var willRecover = reduceByX(calculateAbjad(name, 'kabir') + calculateAbjad(mother, 'kabir'), 12) % 2 === 1;
    setElementText('behboodValue', willRecover ? 'بیمار بهبود می‌یابد' : 'بیمار بهبود نمی‌یابد');
    setElementText('behboodDescription', willRecover
        ? 'به اذن خداوند، بیمار شفا خواهد یافت.'
        : 'نیاز به مراقبت و درمان بیشتر دارد.');
    document.getElementById('behboodResult').style.display = 'block';
    showNotification('تشخیص بهبود بیمار انجام شد');
}
function calculateSherkat() {
    var s1 = document.getElementById('sharik1').value.trim();
    var s2 = document.getElementById('sharik2').value.trim();
    if (!s1 || !s2) { showNotification('لطفاً اسم هر دو شریک را وارد کنید', 'error'); return; }
    var result = calculateRemainder(calculateAbjad(s1, 'kabir') + calculateAbjad(s2, 'kabir'), 3);
    var results = {
        1: 'سودی نخواهد بود',
        2: 'به تدریج پیشرفت خواهد کرد',
        3: 'خیر، برکت و تداوم دارد'
    };
    setElementText('sherkatValue', 'عدد ' + result);
    setElementText('sherkatDescription', results[result] || '');
    document.getElementById('sherkatResult').style.display = 'block';
    showNotification('محاسبه شراکت تجاری انجام شد');
}
function calculateDost() {
    var day = document.getElementById('dostDay').value;
    var name = document.getElementById('dostName').value.trim();
    var mother = document.getElementById('dostMother').value.trim();
    if (!day || !name || !mother) { showNotification('لطفاً تمام فیلدها را پر کنید', 'error'); return; }
    var result = reduceByX(calculateAbjad(day, 'kabir') + calculateAbjad(name, 'kabir') + calculateAbjad(mother, 'kabir'), 4);
    var results = {
        1: 'دشمن تو است',
        2: 'دوست تو است',
        3: 'در ظاهر دوست تو است',
        4: 'هیچ خیری برای تو در او نیست'
    };
    setElementText('dostValue', 'عدد ' + result);
    setElementText('dostDescription', results[result] || '');
    document.getElementById('dostResult').style.display = 'block';
    showNotification('تشخیص دوست/دشمن انجام شد');
}
function calculateBimari12() {
    var name = document.getElementById('bimari12Name').value.trim();
    var mother = document.getElementById('bimari12Mother').value.trim();
    var day = document.getElementById('bimari12Day').value;
    if (!name || !mother || !day) { showNotification('لطفاً تمام فیلدها را پر کنید', 'error'); return; }
    var result = reduceByX(calculateAbjad(name, 'kabir') + calculateAbjad(mother, 'kabir') + calculateAbjad(day, 'kabir'), 12);
    var results = {
        1: 'از سحر و جن است',
        2: 'از چشم (نظر) زن است',
        3: 'از بیماری علاج‌ناپذیر است',
        4: 'از چشم (نظر) مرد است',
        5: 'از قرین (همنشین) مذکر است',
        6: 'از باد طبیعی است یا باد اجنه یا نفخ است',
        7: 'از عارضه زمینی است',
        8: 'از تغییر خون است',
        9: 'از صفرا است',
        10: 'از سحر انسانی است',
        11: 'از قرین مؤنث است',
        12: 'از غم و اندوه است'
    };
    setElementText('bimari12Value', 'عدد ' + result);
    setElementText('bimari12Description', results[result] || '');
    document.getElementById('bimari12Result').style.display = 'block';
    showNotification('تشخیص علت بیماری انجام شد');
}
function calculateGhaeb() {
    var name = document.getElementById('ghaebName').value.trim();
    var mother = document.getElementById('ghaebMother').value.trim();
    var day = document.getElementById('ghaebDay').value;
    if (!name || !mother) { showNotification('لطفاً اسم و اسم مادر را وارد کنید', 'error'); return; }
    var result = reduceByX(calculateAbjad(name, 'special') + calculateAbjad(mother, 'special') + (day ? calculateAbjad(day, 'special') : 0), 4);
    var results = {
        1: 'زود می‌آید',
        2: 'توقف می‌کند (معطل می‌شود)',
        3: 'می‌ماند و بازنمی‌گردد',
        4: 'دیر می‌آید'
    };
    setElementText('ghaebValue', 'عدد ' + result);
    setElementText('ghaebDescription', results[result] || '');
    document.getElementById('ghaebResult').style.display = 'block';
    showNotification('تشخیص آمدن غایب انجام شد');
}
function calculateBaht() {
    var name = document.getElementById('bahtName').value.trim();
    var mother = document.getElementById('bahtMother').value.trim();
    if (!name || !mother) { showNotification('لطفاً اسم و اسم مادر را وارد کنید', 'error'); return; }
    var r = reduceByX(calculateAbjad(name, 'kabir') + calculateAbjad(mother, 'kabir'), 4);
    if (r === 4) r = 0;
    var results = {
        0: 'طالع اشرافی - این فرد می‌تواند در طبقه‌ای از اجتماع قرار گیرد که مرفه و ثروتمندند',
        1: 'طالع حادثه‌ساز - این افراد تیرانداز هستند',
        2: 'طالع کم‌درآمد - این طبقه‌ای است که افراد به سختی امرار معاش می‌کنند',
        3: 'طالع عرفانی - این افراد به مسائل معنوی علاقه زیادی دارند'
    };
    setElementText('bahtValue', 'عدد ' + r);
    setElementText('bahtDescription', results[r] || '');
    document.getElementById('bahtResult').style.display = 'block';
    showNotification('محاسبه بخت و اقبال انجام شد');
}
function calculateBimari() {
    var name = document.getElementById('bimariName').value.trim();
    var mother = document.getElementById('bimariMother').value.trim();
    var day = document.getElementById('bimariDay').value;
    if (!name || !mother || !day) { showNotification('لطفاً تمام فیلدها را پر کنید', 'error'); return; }
    var result = reduceByX(calculateAbjad(name, 'kabir') + calculateAbjad(mother, 'kabir') + calculateAbjad(day, 'kabir'), 7);
    var results = {
        1: 'علت بیماری از جن و موجودات ماورایی است',
        2: 'بیماری از هوای آلوده یا تغییرات آب و هوایی ناشی شده است',
        3: 'بیماری ممکن است از سحر یا چشم زخم باشد',
        4: 'بیماری از چشم زخم یا حسادت دیگران است',
        5: 'بیماری مربوط به خون یا گردش خون است',
        6: 'بیماری از سودا یا افسردگی است',
        7: 'بیماری از صفرا یا مشکلات گوارشی است'
    };
    setElementText('bimariValue', 'عدد ' + result);
    setElementText('bimariDescription', results[result] || '');
    document.getElementById('bimariResult').style.display = 'block';
    showNotification('تشخیص علت بیماری انجام شد');
}
function calculateSetare() {
    var name = document.getElementById('setareName').value.trim();
    var mother = document.getElementById('setareMother').value.trim();
    if (!name || !mother) { showNotification('لطفاً اسم و اسم مادر را وارد کنید', 'error'); return; }
    var stars = [
        { star: 'برج جدی', taleh: 'مریخ', nature: 'آتشی' },
        { star: 'برج ثور', taleh: 'زهره', nature: 'خاکی' },
        { star: 'برج جوزا', taleh: 'عطارد', nature: 'هوایی' },
        { star: 'برج سرطان', taleh: 'ماه', nature: 'آبی' },
        { star: 'برج اسد', taleh: 'خورشید', nature: 'آتشی' },
        { star: 'برج سنبله', taleh: 'عطارد', nature: 'خاکی' },
        { star: 'برج میزان', taleh: 'زهره', nature: 'هوایی' },
        { star: 'برج عقرب', taleh: 'مریخ', nature: 'آبی' },
        { star: 'برج قوس', taleh: 'مشتری', nature: 'آتشی' },
        { star: 'برج جدی', taleh: 'زحل', nature: 'خاکی' },
        { star: 'برج دلو', taleh: 'عطارد', nature: 'هوایی' },
        { star: 'برج حوت', taleh: 'مشتری', nature: 'آبی' }
    ];
    var r = reduceByX(calculateAbjad(name, 'kabir') + calculateAbjad(mother, 'kabir'), 12);
    var st = stars[r - 1];
    setElementText('setareValue', 'عدد ' + r);
    setElementText('setareDescription', 'برج: ' + st.star + ' - طالع: ' + st.taleh + ' - طبیعت: ' + st.nature);
    document.getElementById('setareResult').style.display = 'block';
    showNotification('محاسبه ستاره طالع انجام شد');
}
function calculateAbjadCalc() {
    var text = document.getElementById('abjadText').value.trim();
    var type = document.getElementById('abjadType').value;
    if (!text) { showNotification('لطفاً متن را وارد کنید', 'error'); return; }
    var total = 0, calc = '';
    var tbl = type === 'kabir' ? abjadKabir : type === 'saghir' ? abjadSaghir : abjadVasit;
    for (var i = 0; i < text.length; i++) {
        var c = text[i];
        var v = tbl[c] || 0;
        if (type === 'saghir') v = v % 9 || 9;
        else if (type === 'vasit' && v > 9) v = Math.floor(v / 2);
        total += v;
        if (c !== ' ') calc += c + '=' + v + ' ';
    }
    setElementText('abjadCalc', calc);
    setElementText('abjadValue', 'مجموع: ' + total);
    var desc = total % 2 === 1 ? 'عدد فرد' : 'عدد زوج';
    if (total % 3 === 0) desc += ' | مضرب 3';
    if (total % 7 === 0) desc += ' | مضرب 7';
    if (total % 9 === 0) desc += ' | مضرب 9';
    setElementText('abjadDescription', desc);
    document.getElementById('abjadResult').style.display = 'block';
    showNotification('محاسبه ابجد انجام شد');
}
function calculateMath() {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var op = document.getElementById('operation').value;
    if (isNaN(n1) || isNaN(n2)) { showNotification('لطفاً اعداد معتبر وارد کنید', 'error'); return; }
    var r;
    switch (op) {
        case '+': r = n1 + n2; break;
        case '-': r = n1 - n2; break;
        case '*': r = n1 * n2; break;
        case '/': if (n2 === 0) { showNotification('تقسیم بر صفر', 'error'); return; } r = n1 / n2; break;
        case '%': r = n1 % n2; break;
    }
    setElementText('mathValue', r.toString());
    document.getElementById('mathResult').style.display = 'block';
    showNotification('محاسبه انجام شد');
}
function calculateAdvancedMath() {
    var exp = document.getElementById('mathExpression').value.trim();
    if (!exp) { showNotification('لطفاً عبارت را وارد کنید', 'error'); return; }
    try {
        var clean = exp.replace(/\s+/g, '').replace(/×/g, '*').replace(/÷/g, '/').replace(/[^0-9\+\-\*\/\%\(\)\.]/g, '');
        if (!clean) { showNotification('عبارت نامعتبر', 'error'); return; }
        var result = new Function('return ' + clean)();
        if (isNaN(result) || !isFinite(result)) { showNotification('نتیجه نامعتبر', 'error'); return; }
        document.getElementById('advancedMathSteps').style.display = 'block';
        setElementText('mathSteps', exp + ' = ' + result);
        setElementText('advancedMathValue', result.toString());
        document.getElementById('advancedMathResult').style.display = 'block';
        showNotification('محاسبه انجام شد');
    } catch (e) { showNotification('خطا در محاسبه', 'error'); }
}
function calculateEzdevaj() {
    var man = document.getElementById('ezdevajMan').value.trim();
    var woman = document.getElementById('ezdevajWoman').value.trim();
    if (!man || !woman) { showNotification('لطفاً هر دو اسم را وارد کنید', 'error'); return; }
    var result = reduceByX(calculateAbjad(man, 'kabir') + calculateAbjad(woman, 'kabir') + 7, 9);
    var results = {
        1: 'ازدواج مناسب است - زن حاکم می‌شود',
        2: 'ازدواج خیر و برکت است',
        3: 'عاقبت می‌تواند ناخوش باشد',
        4: 'ازدواج همراه با دلسردی',
        5: 'ازدواج مناسب همراه با فرزند',
        6: 'اختلاف مشکلات و طلاق احتمال ۸۰ درصد',
        7: 'ازدواج عالی',
        8: 'مناسب نیست - سختی، جدایی و خیانت',
        9: 'همانند نتیجه ۸ است ولی فوت ندارد'
    };
    setElementText('ezdevajValue', 'عدد ' + result);
    setElementText('ezdevajDescription', results[result] || '');
    document.getElementById('ezdevajResult').style.display = 'block';
    showNotification('محاسبه عاقبت ازدواج انجام شد');
}
function calculateHayran() {
    var name = document.getElementById('hayranName').value.trim();
    var mother = document.getElementById('hayranMother').value.trim();
    if (!name || !mother) { showNotification('لطفاً نام و نام مادر را وارد کنید', 'error'); return; }
    var total;
    if (selectedType === 'adult') {
        total = calculateAbjad(name, 'hejai') + calculateAbjad(mother, 'hejai');
    } else {
        var dayEl = document.getElementById('hayranDay');
        total = calculateAbjad(name, 'hejai') + calculateAbjad(mother, 'hejai') + (dayEl ? calculateAbjad(dayEl.value, 'hejai') : 0);
    }
    var result = calculateRemainder(total, 9);
    var results = {
        1: 'طالع بلندپایه - زندگی مرفه و ثروتمند',
        2: 'طالع متوسط - زندگی متوسط با تلاش',
        3: 'طالع کوتاه - زندگی پرچالش',
        4: 'طالع هنرمند - خلاق، مشهور',
        5: 'طالع موسیقیدان - هنرمند، تیزهوش',
        6: 'طالع شاعر - عاطفی، علاقه‌مند به شعر',
        7: 'طالع ورزشکار - قوی، ورزشکار',
        8: 'طالع تاجر - باهوش، تاجر موفق',
        9: 'طالع عابد - معنوی، صبور'
    };
    setElementText('hayranNumber', 'مرتبه ' + result);
    setElementText('hayranDescription', results[result] || '');
    document.getElementById('hayranResult').style.display = 'block';
    showNotification('محاسبه دلیل الحیران انجام شد');
}
function calculateRaml() {
    var name = document.getElementById('ramlName').value.trim();
    var mother = document.getElementById('ramlMother').value.trim();
    var day = document.getElementById('ramlDay').value;
    var number = parseInt(document.getElementById('ramlNumber').value);
    var qid = parseInt(document.getElementById('ramlQuestion').value);
    if (!name || !mother || !day || !number || !qid) { showNotification('لطفاً تمام فیلدها را پر کنید', 'error'); return; }
    if (number < 1 || number > 1000) { showNotification('عدد باید بین 1 تا 1000 باشد', 'error'); return; }
    var nv = calculateAbjad(name, 'kabir');
    var mv = calculateAbjad(mother, 'kabir');
    var dv = calculateAbjad(day, 'kabir');
    var total = nv + mv + dv + number;
    var result = calculateRemainder(total, 16);
    var question = ramlQuestions.find(function(q) { return q.id === qid; });
    if (!question) { showNotification('سوال یافت نشد', 'error'); return; }
    document.getElementById('ramlCalcSteps').style.display = 'block';
    setElementText('ramlStep1', 'ابجد نام: ' + nv);
    setElementText('ramlStep2', 'ابجد مادر: ' + mv);
    setElementText('ramlStep3', 'ابجد روز: ' + dv);
    setElementText('ramlStep4', 'عدد انتخابی: ' + number);
    setElementText('ramlStep5', 'جمع: ' + total + ' → باقیمانده ۱۶ = ' + result);
    setElementText('ramlQuestionTitle', question.title);
    setElementText('ramlAnswer', 'پاسخ شماره ' + result + ': ' + (question.opts[(result - 1) % question.opts.length] || 'نامشخص'));
    document.getElementById('ramlResult').style.display = 'block';
    showNotification('رمل امام علی با موفقیت انجام شد');
}
function calculateMokashefe() {
    var name = document.getElementById('mokashefeName').value.trim();
    var mother = document.getElementById('mokashefeMother').value.trim();
    var day = document.getElementById('mokashefeDay').value;
    var number = parseInt(document.getElementById('mokashefeNumber').value);
    if (!name || !mother || !number) { showNotification('لطفاً تمام فیلدها را پر کنید', 'error'); return; }
    if (number < 1 || number > 1000) { showNotification('عدد بین 1 تا 1000', 'error'); return; }
    var nv = calculateAbjad(name, 'kabir');
    var mv = calculateAbjad(mother, 'kabir');
    var dv = calculateAbjad(day, 'kabir');
    var result = calculateRemainder(nv + mv + dv + number, 16);
    var data = getMokashefeData();
    var house = data.find(function(h) { return h.number === result; }) || data[0];
    setElementText('mokashefeHouseName', 'خانه ' + house.number + ': ' + house.name);
    setElementText('mokashefeDescription', '📋 خلاصه: ' + house.summary + '\n\n🎭 حالت: ' + house.mood);
    setElementText('mokashefeArabicText', '📜 متن اصلی:\n' + house.arabicText);
    document.getElementById('mokashefeResult').style.display = 'block';
    showNotification('مکاشفه با موفقیت انجام شد');
}
function calculateAbjad(text, type) {
    type = type || 'kabir';
    if (!text || text.trim() === '') return 0;
    var total = 0;
    var tbl = type === 'kabir' ? abjadKabir : type === 'saghir' ? abjadSaghir : type === 'vasit' ? abjadVasit : type === 'special' ? abjadSpecial : type === 'hejai' ? hejaiLetters : abjadKabir;
    var s = String(text).trim();
    for (var i = 0; i < s.length; i++) {
        if (tbl[s[i]] !== undefined) total += tbl[s[i]];
    }
    return total;
}
function reduceByX(number, x) {
    var r = number;
    while (r > x) r -= x;
    return r === 0 ? x : r;
}
function calculateRemainder(total, divisor) {
    var r = total % divisor;
    return r === 0 ? divisor : r;
}
function safeText(text) {
    if (!text) return '';
    try { return String(text).replace(/[\u0000-\u001F\u007F-\u009F]/g, ''); } catch(e) { return ''; }
}
function setElementText(id, text) {
    var el = document.getElementById(id);
    if (el) { el.innerHTML = ''; el.appendChild(document.createTextNode(safeText(text))); }
}
function showNotification(msg, type) {
    type = type || 'success';
    var n = document.getElementById('notification');
    if (n) {
        n.innerHTML = '';
        n.appendChild(document.createTextNode(safeText(msg)));
        n.style.background = type === 'success' ? 'linear-gradient(135deg,#2ecc71,#27ae60)' : 'linear-gradient(135deg,#e74c3c,#c0392b)';
        n.style.display = 'block';
        setTimeout(function() { n.style.display = 'none'; }, 3000);
    }
}
function changeTab(modalName, tabId, event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    var modal = document.getElementById(modalName + 'Modal');
    if (!modal) return;
    modal.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    modal.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
    if (event && event.target) event.target.classList.add('active');
    var tgt = document.getElementById(tabId);
    if (tgt) tgt.classList.add('active');
    if (modalName === 'settings' && tabId === 'settingsAdmin') buildMokashefeAdminPanel();
}
function getMokashefeData() {
    try {
        var saved = localStorage.getItem('mokashefeData');
        if (saved) return JSON.parse(saved);
    } catch(e) {}
    return JSON.parse(JSON.stringify(DEFAULT_MOKASHEFE_DATA));
}
// Ensure the supplied Persian letters are counted by abjad kabir.
Object.assign(abjadKabir, {'پ':2,'چ':3,'ژ':7,'گ':20});
let selectedType='adult', selectedGender='male';function selectType(v){selectedType=v;const g=document.getElementById('genderSection'),d=document.getElementById('daySection');if(g)g.style.display=v==='child'?'none':'block';if(d)d.style.display=v==='child'?'block':'none';document.querySelectorAll('#dalilModal [data-type]').forEach(x=>x.classList.toggle('active',x.dataset.type===v))}function selectGender(v){selectedGender=v;document.querySelectorAll('#dalilModal [data-gender]').forEach(x=>x.classList.toggle('active',x.dataset.gender===v))}
function calcChineseStar(){const ids=['csMan','csManMother','csWoman','csWomanMother'];const vals=ids.map(id=>calculateAbjad(document.getElementById(id).value,'kabir'));if(ids.some(id=>!document.getElementById(id).value.trim()))return showNotification('همه نام‌ها را وارد کنید','error');const total=vals.reduce((a,b)=>a+b,0),r=total%5;const msg=r===1||r===3?'سازگار':r===2||r===4?'ناسازگار':'احتمال دخالت خانواده';document.getElementById('csResult').innerHTML='<b>'+msg+'</b>';document.getElementById('csResult').style.display='block'}
function calcMokel(){const n=document.getElementById('mokelName').value.trim();if(!n)return showNotification('نام را وارد کنید','error');const v=calculateAbjad(n,'kabir');let x=v,parts=[];[1000,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1].forEach(k=>{while(x>=k){parts.push(k);x-=k}});document.getElementById('mokelResult').innerHTML='<b>نام موکل: '+parts.map(k=>({1000:'غ',900:'ظ',800:'ض',700:'ذ',600:'خ',500:'ث',400:'ت',300:'ش',200:'ر',100:'ق',90:'ص',80:'ف',70:'ع',60:'س',50:'ن',40:'م',30:'ل',20:'ك',10:'ي',9:'ط',8:'ح',7:'ز',6:'و',5:'ه',4:'د',3:'ج',2:'ب',1:'ا'}[k]||'')).join('')+'ائیل</p><p>اسم متناظر از بانک اسماء در فایل در دسترس نیست.</p>';document.getElementById('mokelResult').style.display='block'}
function calcAsma(){const n=Number(document.getElementById('asmaNumber').value);if(!Number.isInteger(n)||n<1||n>1000)return showNotification('عدد باید بین ۱ تا ۱۰۰۰ باشد','error');document.getElementById('asmaResult').textContent='بانک کامل اسماء الحسنی در فایل‌های قابل بازیابی این نسخه موجود نیست؛ از نمایش نام حدسی خودداری شد.';document.getElementById('asmaResult').style.display='block'}
function normalizeHamzad(s){return String(s||'').replace(/[چ]/g,'ج').replace(/[پ]/g,'ب').replace(/[ژ]/g,'ز').replace(/[گ]/g,'ک').replace(/[آأإ]/g,'ا').replace(/[يئى]/g,'ی').replace(/ة/g,'ه').replace(/ك/g,'ک').replace(/[^ء-ی]/g,'')}
const HAMZAD_RESULTS={1:'قرین علوی قویتر است پس اسم مناسب است',2:'قرین علوی قویتر است و بسیار خیر می‌بیند',3:'قرین سفلی بسیار از قرین علوی قویتر است؛ اسم مناسب نیست و فقر می‌آورد',4:'مناسب است؛ قرین علوی قویتر است',5:'قرین سفلی قویتر است خیلی خیلی زیاد',6:'قرین علوی قویتر است و شخص خیر زیادی می‌بیند',7:'قرین علوی قویتر است و شخص خیر زیادی می‌بیند',8:'قرین علوی قویتر است و شخص خیر زیادی می‌بیند',9:'قرین سفلی زیاد قویتر از قرین علوی نیست؛ حامل این اسم همیشه مریض و بدحال خواهد بود',10:'قرین از جنس شیطانی است؛ اگر شخص نجنبد و مشکل را حل نکند، بدبخت خواهد شد',11:'اسم مناسب است',12:'مناسب است',13:'تابع قرینی دارد: أم‌الصبیان',14:'تابع قرینی دارد: أم‌الصبیان',15:'بسیار مناسب است',16:'قرین علوی با قرین سفلی در یک اندازه هستند',17:'قرین سفلی قویتر است',18:'مناسب است',19:'اسم مناسب است و برای صاحب اسم رزق بسیار می‌آورد',20:'قرین سفلی قویتر است خیلی خیلی زیاد',21:'تابع قرینی دارد: أم‌الصبیان (قرین سفلی بیش از اندازه قوی است)',22:'مناسب است',23:'اسم خوب است؛ هر دو قرین در یک اندازه‌اند اما حامل اسم از چیزی می‌ترسد که از جن به او ضرر می‌رسد',24:'مناسب است',25:'هر دو قرین در یک اندازه‌اند ولی این شخص ممکن است در تصادف یا اتفاقی بدنش توسط جن تسخیر شود',26:'مناسب است و خیر و رزق برایش می‌آورد',27:'قرین علوی بسیار قویتر است و این شخص خیر زیادی در زندگی می‌بیند',28:'هر دو قرین در یک اندازه‌اند ولی ممکن است در خواب/حمام/تصادف بدنش توسط جن تسخیر شود'};
function jalaliToGregorian(jy,jm,jd){jy+=1595;let days=-355668+365*jy+Math.floor(jy/33)*8+Math.floor(((jy%33)+3)/4)+jd+(jm<7?(jm-1)*31:(jm-7)*30+186);let gy=400*Math.floor(days/146097);days%=146097;if(days>36524){gy+=100*Math.floor(--days/36524);days%=36524;if(days>=365)days++}gy+=4*Math.floor(days/1461);days%=1461;if(days>365){gy+=Math.floor((days-1)/365);days=(days-1)%365}let gd=days+1;const leap=(gy%4===0&&gy%100!==0)||gy%400===0;const md=[0,31,leap?29:28,31,30,31,30,31,31,30,31,30,31];let gm=1;while(gm<=12&&gd>md[gm]){gd-=md[gm];gm++}return [gy,gm,gd]}
function dateToLetters(num){const vals=[[1000,'غ'],[900,'ظ'],[800,'ض'],[700,'ذ'],[600,'خ'],[500,'ث'],[400,'ت'],[300,'ش'],[200,'ر'],[100,'ق'],[90,'ص'],[80,'ف'],[70,'ع'],[60,'س'],[50,'ن'],[40,'م'],[30,'ل'],[20,'ک'],[10,'ی'],[9,'ط'],[8,'ح'],[7,'ز'],[6,'و'],[5,'ه'],[4,'د'],[3,'ج'],[2,'ب'],[1,'ا']];let out='';for(const [v,c] of vals)while(num>=v){out+=c;num-=v}return out}
function digitAbjad(c){let v=calculateAbjad(c,'kabir');return String(v).split('').reduce((a,b)=>a+Number(b),0)}
function calculateHamzad(){const n=document.getElementById('hamzadName').value.trim(),m=document.getElementById('hamzadMother').value.trim(),cal=document.getElementById('hamzadCalendar').value,y=+document.getElementById('hamzadYear').value,mo=+document.getElementById('hamzadMonth').value,d=+document.getElementById('hamzadDay').value;if(!n||!m||!y||mo<1||mo>12||d<1||d>31)return showNotification('اطلاعات نام و تاریخ را کامل و صحیح وارد کنید','error');let gy,gm,gd;if(cal==='shamsi'){[gy,gm,gd]=jalaliToGregorian(y,mo,d);if(gm<1||gm>12||gd<1||gd>31)return showNotification('تاریخ شمسی معتبر نیست','error')}else{gy=y;gm=mo;gd=d;const dt=new Date(gy,gm-1,gd);if(dt.getFullYear()!==gy||dt.getMonth()!==gm-1||dt.getDate()!==gd)return showNotification('تاریخ میلادی معتبر نیست','error')}const unique=[...new Set(normalizeHamzad(n+m))];const nameSum=unique.reduce((s,c)=>s+digitAbjad(c),0);const dateLetters=[dateToLetters(gy),dateToLetters(gm),dateToLetters(gd)].join('');const dateSum=[...new Set(dateLetters)].reduce((s,c)=>s+digitAbjad(c),0);const r=((nameSum+dateSum-1)%28)+1;const el=document.getElementById('hamzadResult');el.innerHTML='<b>نتیجه '+r+' از ۲۸</b><p>'+HAMZAD_RESULTS[r]+'</p>';el.style.display='block'}


// User-supplied data: Chinese star, mokel extraction, Asma al-Husna, and marriage-age modal.
const asmaDatabase = {
1:"الاحد",2:"الصمد",3:"الودود",4:"القدوس",5:"السلام",6:"المؤمن",7:"المهیمن",8:"العزیز",9:"الجبار",10:"المتکبر",
11:"الخالق",12:"البارئ",13:"المصور",14:"الغفار",15:"القهار",16:"الوهاب",17:"الرزاق",18:"الفتاح",19:"العلیم",20:"القابض",
21:"الباسط",22:"الخافض",23:"الرافع",24:"المعز",25:"المذل",26:"السمیع",27:"البصیر",28:"الحکم",29:"العدل",30:"اللطیف",
31:"الخبیر",32:"الحلیم",33:"العظیم",34:"الغفور",35:"الشکور",36:"العلی",37:"الکبیر",38:"الحفیظ",39:"المقیت",40:"الحسیب",
41:"الجلیل",42:"الکریم",43:"الرقیب",44:"المجیب",45:"الواسع",46:"الحکیم",47:"الودود",48:"المجید",49:"الباعث",50:"الشهید",
51:"الحق",52:"الوکیل",53:"القوی",54:"المتین",55:"الولی",56:"الحمید",57:"المحصی",58:"المبدی",59:"المعید",60:"المحیی",
61:"الممیت",62:"الحی",63:"القیوم",64:"الواجد",65:"الماجد",66:"الواحد",67:"الاحد",68:"الصمد",69:"القادر",70:"المقتدر",
71:"المقدم",72:"المؤخر",73:"الاول",74:"الآخر",75:"الظاهر",76:"الباطن",77:"الوالی",78:"المتعالی",79:"البر",80:"التواب",
81:"المنتقم",82:"العفو",83:"الرئوف",84:"مالک",85:"ذوالجلال",86:"المقسط",87:"الجامع",88:"الغنی",89:"المغنی",90:"المانع",
91:"الضار",92:"النافع",93:"النور",94:"الهادی",95:"البدیع",96:"الباقی",97:"الوارث",98:"الرشید",99:"الصبور",100:"الرحمن",
110:"العلی",130:"الغنی",132:"الرحمن",136:"الرحیم",168:"الحی",200:"القادر",232:"الرحیم",260:"العظیم",290:"الکریم",300:"الرحیم",320:"الرحمن",1000:"الغفور"
};
Object.assign(abjadKabir, {'پ':2,'چ':3,'ژ':7,'گ':20});
function calculateSotareChini(){
 const ids=['sotareManName','sotareManMother','sotareWomanName','sotareWomanMother'];
 const vals=ids.map(id=>document.getElementById(id).value.trim());
 if(vals.some(v=>!v)){showNotification('لطفاً همه فیلدها را پر کنید','error');return;}
 const manSum=calculateAbjad(vals[0],'kabir')+calculateAbjad(vals[1],'kabir');
 const womanSum=calculateAbjad(vals[2],'kabir')+calculateAbjad(vals[3],'kabir');
 const remainder=(manSum+womanSum)%5;let resultType,resultText;
 if(remainder===1||remainder===3){resultType='✅ سازگار';resultText='این دو نفر از لحاظ اخلاقی و رفتاری با هم سازگاری دارند. تفاهم و همدلی خوبی بین آنها وجود خواهد داشت.';}
 else if(remainder===2||remainder===4){resultType='❌ ناسازگار';resultText='این دو نفر از لحاظ اخلاقی و رفتاری سازگاری ندارند. نیاز به تلاش و گذشت بیشتری برای تفاهم دارند.';}
 else{resultType='⚠️ دخالت خانواده';resultText='ممکن است مخالفت و دخالت خانواده‌ها باعث ایجاد مشکل در این ارتباط شود. نیاز به مدیریت روابط خانوادگی دارید.';}
 const box=document.getElementById('sotareResult');box.innerHTML='<h3>'+resultType+'</h3><p>'+resultText+'</p>';box.style.display='block';showNotification('نتیجه آماده شد');
}
function calculateMokel(){
 const name=document.getElementById('mokelName').value.trim();
 const requestField=document.getElementById('mokelRequest');
 const request=requestField?requestField.value.trim():'';
 if(!name){showNotification('لطفاً اسم شخص را وارد کنید','error');return;}
 if(!request){showNotification('لطفاً خواسته خود را وارد کنید','error');return;}
 const abjadValue=calculateAbjad(name,'kabir');
 const abjadLetters={1:'ا',2:'ب',3:'ج',4:'د',5:'ه',6:'و',7:'ز',8:'ح',9:'ط',10:'ی',20:'ک',30:'ل',40:'م',50:'ن',60:'س',70:'ع',80:'ف',90:'ص',100:'ق',200:'ر',300:'ش',400:'ت',500:'ث',600:'خ',700:'ذ',800:'ض',900:'ظ',1000:'غ'};
 let letters='',temp=abjadValue;const values=[1000,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1];
 for(let i=0;i<values.length;i++){while(temp>=values[i]){letters+=abjadLetters[values[i]]||'';temp-=values[i];}}
 const mokelName=letters+'ائیل';const asma=asmaDatabase[abjadValue]||'اسم متناظر یافت نشد';
 const tokil='یا '+mokelName+' أقسم علیک بال'+asma+' الا ما فعلت '+request;
 const box=document.getElementById('mokelResult');
 box.innerHTML='<h3>📿 نتیجه استخراج</h3><p><strong>اسم موکل:</strong> '+esc(mokelName)+'</p><p><strong>اسم متناظر از اسماء الحسنی:</strong> '+esc(asma)+'</p><div style="margin-top:12px;padding:12px;border-radius:12px;background:rgba(255,204,0,.10)"><p><strong>📿 توکیل:</strong></p><p style="font-family:monospace;font-size:14px;overflow-wrap:anywhere">'+esc(tokil)+'</p><p><small>🕯️ عمل: عود + صلوات</small></p></div>';
 box.style.display='block';showNotification('نتیجه آماده شد');
}
function calculateAsmani(){
 const number=parseInt(document.getElementById('asmaniNumber').value,10);
 if(!number||number<1||number>1000){showNotification('لطفاً عددی بین 1 تا 1000 وارد کنید','error');return;}
 let asma=asmaDatabase[number],exact=asma?'دقیق':'نزدیکترین';
 if(!asma){let closest=null,minDiff=Infinity;for(const key in asmaDatabase){if(Object.prototype.hasOwnProperty.call(asmaDatabase,key)){const diff=Math.abs(number-Number(key));if(diff<minDiff){minDiff=diff;closest=key;}}}if(closest!==null)asma=asmaDatabase[closest]+' (نزدیکترین: '+closest+')';}
 const resultText='<h3 style="color:#ffd700;text-align:center">🌟 اسماء الحسنی</h3><p><strong>عدد مورد نظر:</strong> '+number+'</p><p><strong>اسم متناظر ('+exact+'):</strong> '+esc(asma||'یافت نشد')+'</p><div style="margin-top:10px;padding:8px;background:rgba(255,255,255,.1);border-radius:8px"><small>✨ برای عبادت و ذکر روزانه می‌توانید این اسم را تکرار کنید</small></div>';
 document.getElementById('asmaniResult').innerHTML=resultText;document.getElementById('asmaniResult').style.display='block';showNotification('جستجوی اسماء الحسنی انجام شد');
}
function calculateMarriageAge(){
 const day=parseInt(document.getElementById('marriageDay').value,10),month=parseInt(document.getElementById('marriageMonth').value,10),year=parseInt(document.getElementById('marriageYear').value,10);
 const resultBox=document.getElementById('marriageAgeResult');resultBox.style.display='none';
 if(!day||!month||!year||day<1||day>31||month<1||month>12||year<1200||year>1450){showNotification('لطفاً روز، ماه و سال تولد را درست وارد کن.','error');return;}
 const dm=String(day).padStart(2,'0')+String(month).padStart(2,'0');const dmNum=parseInt(dm,10);const product=dmNum*year;const digits=String(product).split('').map(d=>parseInt(d,10));
 const maxDigit=Math.max(...digits);const hitIndices=digits.map((d,i)=>d===maxDigit?i:-1).filter(i=>i!==-1);const primaryIndex=hitIndices[0];
 const ages=[17+primaryIndex,17+primaryIndex+8,17+primaryIndex+16];const labels=['نخست','دوم','سوم'];
 const points=ages.map((age,idx)=>'<div style="display:inline-flex;flex-direction:column;align-items:center;gap:6px;min-width:68px;margin:6px"><strong style="font-size:'+(idx===0?'34px':'27px')+';color:'+(idx===0?'#e8c65a':'#cfc3a5')+'">'+String(age).replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d])+'</strong><span style="font-size:12px;color:#cfc3a5">'+labels[idx]+'</span></div>').join('');
 resultBox.innerHTML='<h3 style="text-align:center;color:#e8c65a">سه نقطه‌ی روشن در مسیر عمر</h3><div style="display:flex;justify-content:center;align-items:flex-end;gap:8px;flex-wrap:wrap;padding:12px 0">'+points+'</div><div style="padding:14px;border:1px solid rgba(201,162,39,.25);border-radius:12px;color:#cfc3a5;line-height:2;text-align:center"><p>سن ازدواج شما احتمالاً یکی از همین سه عدد است — البته قطعیت و سرنوشت تنها در دست خداوند است، الله اعلم بالصواب. اگر دقیقاً با هیچ‌کدام از این اعداد مطابقت نداشت، جای نگرانی نیست؛ معمولاً با یک سال کمتر یا بیشتر نسبت به همین سه عدد همراه است.</p><p style="color:#e8c65a">پیشنهاد می‌کنیم بین خانواده، اقوام و دوستان خود امتحانش کنید و ببینید چقدر دقیق است ✦</p></div>';
 resultBox.style.display='block';showNotification('محاسبه سن ازدواج انجام شد');resultBox.scrollIntoView({behavior:'smooth',block:'nearest'});
}



// مودال مستقل «ازدواج یا جدایی» بر پایه ابجد ترتیبی ۲۸ حرفی
const marriageSeparationOrderedValues = {
 'ا':1,'ب':2,'ج':3,'د':4,'ه':5,'و':6,'ز':7,'ح':8,'ط':9,'ی':10,
 'ک':11,'ل':12,'م':13,'ن':14,'س':15,'ع':16,'ف':17,'ص':18,'ق':19,
 'ر':20,'ش':21,'ت':22,'ث':23,'خ':24,'ذ':25,'ض':26,'ظ':27,'غ':28
};
const marriageSeparationResults = {
 1:'ازدواج بین آن‌ها اتفاق نمی‌افتد.',
 2:'ازدواج بین آن‌ها حاصل نمی‌شود.',
 3:'ازدواج انجام می‌شود و خیر زیادی دارد.',
 4:'ازدواج انجام می‌شود اما دور است؛ بعید است.',
 5:'ازدواج رخ نمی‌دهد.',
 6:'ازدواج اتفاق می‌افتد اما مسئله‌ای باعث طلاق می‌شود.',
 7:'ازدواج رخ نمی‌دهد چون یکی از دو طرف خیانت‌کار است.',
 8:'ازدواج همراه با خیر، سرور و شادی است و به‌زودی اتفاق می‌افتد.',
 9:'به کسی که طلب ازدواج کرده بگو خواسته‌اش برآورده می‌شود.',
 10:'ازدواج بین آن‌ها اتفاق می‌افتد، اما با تأخیر.',
 11:'ازدواج بین آن‌ها رخ می‌دهد اما در آینده‌ای دور.',
 12:'بله، ازدواج انجام می‌شود اما در آینده‌ی دور.',
 13:'ازدواج اتفاق نمی‌افتد چون یکی خیانت‌کار است.',
 14:'ازدواج حاصل نمی‌شود چون یکی از دو طرف اهل نیرنگ و خیانت است.',
 15:'ازدواجی مبارک که همراه با خیر، شادی و توفیق است و به‌زودی اتفاق می‌افتد.',
 16:'ازدواج بین آن‌ها حاصل نمی‌شود.',
 17:'ازدواج بین آن‌ها حاصل نمی‌شود.',
 18:'به کسی که طلب ازدواج کرده بشارت بده: بله، ازدواج به زودی، به اذن خدا.',
 19:'ازدواج اتفاق نمی‌افتد چون یکی از آن‌ها اهل نیرنگ و دروغ است.',
 20:'ازدواج همراه با خیر و روزی است و به زودی اتفاق می‌افتد.',
 21:'بله، ازدواج اتفاق می‌افتد اما در آینده‌ی دور.',
 22:'ازدواج بین آن‌ها رخ نمی‌دهد.',
 23:'ازدواج مبارک است و در آن تفاهم و سازش وجود دارد و به‌زودی اتفاق می‌افتد.',
 24:'به کسی که طلب ازدواج کرده بشارت بده؛ خواسته‌اش به زودی، به اذن خدا برآورده می‌شود.',
 25:'ازدواج همراه با خیر، شادی و سرور است و به‌زودی اتفاق می‌افتد.',
 26:'ازدواج بین آن‌ها انجام نمی‌شود چون یکی از طرفین اهل نیرنگ و خیانت است.',
 27:'به کسی که طلب ازدواج کرده بشارت بده؛ خواسته‌اش به اذن خدا برآورده خواهد شد.',
 28:'ازدواج بین آن‌ها اتفاق نمی‌افتد.'
};
function normalizeMarriageSeparationName(value){
 let s=String(value||'').trim().replace(/ي|ى|ئ/g,'ی').replace(/ك/g,'ک').replace(/[أإآٱ]/g,'ا').replace(/ة/g,'ه');
 s=s.replace(/موسی/g,'موسا').replace(/مصطفی/g,'مصطفا');
 s=s.replace(/ژ/g,'ز').replace(/گ/g,'ک').replace(/چ/g,'ج').replace(/پ/g,'ب');
 // «سماء» طبق دستور کاربر از محاسبه کنار گذاشته می‌شود.
 s=s.replace(/(^|\s)سماء(?=\s|$)/g,' ');
 return [...s].filter(ch=>Object.prototype.hasOwnProperty.call(marriageSeparationOrderedValues,ch)).join('');
}
function calculateMarriageSeparationNameValue(value){
 const normalized=normalizeMarriageSeparationName(value);let total=0;
 for(const ch of normalized){if(marriageSeparationOrderedValues[ch]!==undefined)total+=marriageSeparationOrderedValues[ch];}
 return {normalized,total};
}
function calculateMarriageSeparation(){
 const ids=['marSepMan','marSepManMother','marSepWoman','marSepWomanMother'];
 const raw=ids.map(id=>{const el=document.getElementById(id);return el?el.value.trim():'';});
 if(raw.some(v=>!v)){showNotification('لطفاً هر چهار نام را وارد کنید','error');return;}
 const sum=raw.map(calculateMarriageSeparationNameValue).reduce((n,x)=>n+x.total,0);
 const remainder=(sum+184)%28, resultNumber=remainder===0?28:remainder;
 const box=document.getElementById('marSepResult');
 box.innerHTML='<h3>💍 نتیجه ازدواج یا جدایی</h3><p>'+esc(marriageSeparationResults[resultNumber])+'</p><small style="display:block;margin-top:9px;color:#dcecff">این نتیجه بر پایه یک روش سنتی است و پیش‌بینی قطعی آینده یا مبنای تصمیم مهم زندگی نیست.</small>';
 box.style.display='block';showNotification('نتیجه آماده شد');
}


// پاک‌سازی نمایش داده‌های محاسباتی؛ فقط پاسخ نهایی برای کاربر قابل مشاهده است.
document.addEventListener('click',function(e){const b=e.target.closest('.calculate-btn');if(!b)return;const form=b.closest('.toolform');if(!form)return;b.classList.add('pressed-feedback');setTimeout(()=>b.classList.remove('pressed-feedback'),420);form.querySelectorAll('.calculation-box,.calculation-step').forEach(x=>{x.style.display='none';x.setAttribute('aria-hidden','true')});});
window.ASRAR_MODAL_HTML['21']="<div class=\"input-group\"><label>👤 نام طالب:</label><input type=\"text\" id=\"mokashefeName\" placeholder=\"مثال: مرتضی\"></div>\n<div class=\"input-group\"><label>👩 نام مادر:</label><input type=\"text\" id=\"mokashefeMother\" placeholder=\"مثال: معصومه\"></div>\n<div class=\"input-group\"><label>📅 روز:</label><select id=\"mokashefeDay\"><option value=\"السبت\">السبت (شنبه)</option><option value=\"الاحد\">الاحد (یکشنبه)</option><option value=\"الاثنین\">الاثنین (دوشنبه)</option><option value=\"الثلاث\">الثلاث (سه‌شنبه)</option><option value=\"الاربعا\">الاربعا (چهارشنبه)</option><option value=\"الخمیس\">الخمیس (پنجشنبه)</option><option value=\"الجمعه\">الجمعه (جمعه)</option></select></div>\n<div class=\"input-group\"><label>🔢 عدد انتخابی (۱ تا ۱۰۰۰):</label><input type=\"number\" id=\"mokashefeNumber\" placeholder=\"مثال: ۲۵۶\" min=\"1\" max=\"1000\"></div>\n<button class=\"calculate-btn\" type=\"button\" onclick=\"calculateMokashefe()\">🔮 محاسبه مکاشفه</button>\n<div class=\"result-box\" id=\"mokashefeResult\" style=\"display:none\"><div class=\"result-title\" id=\"mokashefeHouseName\"></div><div class=\"result-description\" id=\"mokashefeDescription\"></div><div class=\"result-description\" id=\"mokashefeArabicText\"></div></div>";
window.ASRAR_MODAL_HTML['24']="<div class=\"v8-talisman-tabs\">\n        <button type=\"button\" class=\"v8-talisman-tab active\" data-tab=\"t1\" onclick=\"switchTalismanPart('t1')\">بخش ۱ · شناسایی و ختم</button>\n        <button type=\"button\" class=\"v8-talisman-tab\" data-tab=\"t2\" onclick=\"switchTalismanPart('t2')\">بخش ۲ · وفق مثلث و موکلین</button>\n      </div>\n\n      <section id=\"talismanPart1\" class=\"v8-talisman-part active\">\n        <div class=\"modal-guide\">🔮 اطلاعات شخص، حاجت، برج، سوره، آیه و روش ختم در این بخش محاسبه می‌شود.</div>\n        <div class=\"input-group\"><label>👤 نام شما</label><input type=\"text\" id=\"t1UserName\" placeholder=\"مثال: میعاد\"></div>\n        <div class=\"input-group\"><label>👩 نام مادر شما</label><input type=\"text\" id=\"t1MotherName\" placeholder=\"مثال: فاطمه\"></div>\n        <div class=\"input-group\"><label>📅 تاریخ تولد (اختیاری)</label><input type=\"date\" id=\"t1BirthDate\"></div>\n        <div class=\"input-group\"><label>🎯 موضوع حاجت</label>\n          <select id=\"t1HajatSubject\">\n            <option value=\"\">— بدون حاجت (فقط شناسایی) —</option>\n            <option value=\"رزق\">💰 رزق و روزی</option><option value=\"وظیفة\">💼 شغل و کار</option><option value=\"زواج\">💍 ازدواج</option>\n            <option value=\"محبة\">❤️ محبت</option><option value=\"شفاء\">🩺 شفا و درمان</option><option value=\"علم\">📚 علم و دانش</option>\n            <option value=\"مال\">🏦 ثروت و سرمایه</option><option value=\"صحة\">🌿 سلامتی</option><option value=\"ولد\">👶 فرزند</option>\n            <option value=\"سکینة\">🕊️ آرامش</option><option value=\"دفع بلا\">🛡️ دوری از بلا</option><option value=\"دفع عدو\">⚔️ دفع دشمن</option>\n            <option value=\"قرض\">💰 قرض و بدهکاری</option><option value=\"سفر\">🧳 سفر</option>\n          </select>\n        </div>\n        <div class=\"input-group\"><label>📝 توضیحات اضافی</label><input type=\"text\" id=\"t1ExtraNote\" placeholder=\"توضیح خاص...\" autocomplete=\"off\"></div>\n        <button class=\"calculate-btn\" type=\"button\" onclick=\"generateTalismanPart1()\">✨ دریافت نتیجه بخش ۱</button>\n        <div id=\"talismanPart1Result\" class=\"result-box\" style=\"display:none;\"></div>\n      </section>\n\n      <section id=\"talismanPart2\" class=\"v8-talisman-part\" style=\"display:none;\">\n        <div class=\"modal-guide\">🧿 وفق مثلث، موکلین علوی و سفلی، ملک حاکم و متن توکیل در این بخش تولید می‌شود.</div>\n        <div class=\"input-group\"><label>👤 نام شخص (طالب)</label><input type=\"text\" id=\"t2UserName\" placeholder=\"مثال: میعاد\"></div>\n        <div class=\"input-group\"><label>👩 نام مادر شخص</label><input type=\"text\" id=\"t2MotherName\" placeholder=\"مثال: فاطمه\"></div>\n        <div class=\"input-group\"><label>🎯 موضوع حاجت</label>\n          <select id=\"t2HajatSubject\">\n            <option value=\"رزق و روزی\">💰 رزق و روزی</option><option value=\"ثروت\">💎 ثروت و سرمایه</option><option value=\"محبت\">❤️ محبت و الفت</option>\n            <option value=\"ازدواج\">💍 ازدواج</option><option value=\"کار\">💼 پیدا کردن کار</option><option value=\"شفا\">🩺 شفا و درمان</option>\n            <option value=\"دفع بلا\">🛡️ دفع بلا و دشمن</option><option value=\"علم\">📚 علم و دانش</option><option value=\"آرامش\">🕊️ آرامش و سکینه</option>\n          </select>\n        </div>\n        <div class=\"input-group\"><label>📝 نام شخص موردنظر (در صورت نیاز)</label><input type=\"text\" id=\"t2TargetName\" placeholder=\"مثال: سارا\"></div>\n        <button class=\"calculate-btn\" type=\"button\" onclick=\"generateTalismanPart2()\">✨ تولید طلسم وفق مثلث</button>\n        <div id=\"talismanPart2Result\" class=\"result-box\" style=\"display:none;\"></div>\n      </section>";

(function(){
  const ABJ={ا:1,ب:2,ج:3,د:4,ه:5,و:6,ز:7,ح:8,ط:9,ی:10,ک:20,ل:30,م:40,ن:50,س:60,ع:70,ف:80,ص:90,ق:100,ر:200,ش:300,ت:400,ث:500,خ:600,ذ:700,ض:800,ظ:900,غ:1000,ة:5,أ:1,إ:1,آ:1,ئ:10,ى:10,ك:20,ي:10};
  const Z={1:['حمل','آتش','🔥','مریخ','سه‌شنبه'],2:['ثور','خاک','🌍','زهره','جمعه'],3:['جوزا','هوا','🌬️','عطارد','چهارشنبه'],4:['سرطان','آب','💧','ماه','دوشنبه'],5:['اسد','آتش','🔥','خورشید','یکشنبه'],6:['سنبله','خاک','🌍','عطارد','چهارشنبه'],7:['میزان','هوا','🌬️','زهره','جمعه'],8:['عقرب','آب','💧','مریخ','سه‌شنبه'],9:['قوس','آتش','🔥','مشتری','پنج‌شنبه'],10:['جدی','خاک','🌍','زحل','شنبه'],11:['دلو','هوا','🌬️','زحل','شنبه'],12:['حوت','آب','💧','مشتری','پنج‌شنبه']};
  const S={1:['فاتحه',7],2:['بقره',286],3:['آل عمران',200],4:['نساء',176],5:['مائده',120],6:['انعام',165],7:['اعراف',206],8:['انفال',75],9:['توبه',129],10:['یونس',109],11:['هود',123],12:['یوسف',111],13:['رعد',43],14:['ابراهیم',52],15:['حجر',99],16:['نحل',128],17:['اسراء',111],18:['کهف',110],19:['مریم',98],20:['طه',135],21:['انبیاء',112],22:['حج',78],23:['مؤمنون',118],24:['نور',64],25:['فرقان',77],26:['شعراء',227],27:['نمل',93],28:['قصص',88],29:['عنکبوت',69],30:['روم',60],31:['لقمان',34],32:['سجده',30],33:['احزاب',73],34:['سبأ',54],35:['فاطر',45],36:['یس',83],37:['صافات',182],38:['ص',88],39:['زمر',75],40:['غافر',85],41:['فصلت',54],42:['شوری',53],43:['زخرف',89],44:['دخان',59],45:['جاثیه',37],46:['احقاف',35],47:['محمد',38],48:['فتح',29],49:['حجرات',18],50:['ق',45],51:['ذاریات',60],52:['طور',49],53:['نجم',62],54:['قمر',55],55:['الرحمن',78],56:['واقعه',96],57:['حدید',29],58:['مجادله',22],59:['حشر',24],60:['ممتحنه',13],61:['صف',14],62:['جمعه',11],63:['منافقون',11],64:['تغابن',18],65:['طلاق',12],66:['تحریم',12],67:['ملک',30],68:['قلم',52],69:['حاقه',52],70:['معارج',44],71:['نوح',28],72:['جن',28],73:['مزمل',20],74:['مدثر',56],75:['قیامت',40],76:['انسان',31],77:['مرسلات',50],78:['نبأ',40],79:['نازعات',46],80:['عبس',42],81:['تکویر',29],82:['انفطار',19],83:['مطففین',36],84:['انشقاق',25],85:['بروج',22],86:['طارق',17],87:['اعلی',19],88:['غاشیه',26],89:['فجر',30],90:['بلد',20],91:['شمس',15],92:['لیل',21],93:['ضحی',11],94:['شرح',8],95:['تین',8],96:['علق',19],97:['قدر',5],98:['بینه',8],99:['زلزال',8],100:['عادیات',11],101:['قارعه',11],102:['تکاثر',8],103:['عصر',3],104:['همزه',9],105:['فیل',5],106:['قریش',4],107:['ماعون',7],108:['کوثر',3],109:['کافرون',6],110:['نصر',3],111:['مسد',5],112:['اخلاص',4],113:['فلق',5],114:['ناس',6]};
  const BASE={1:500,2:510,3:520,4:530,5:540,6:550,7:560,8:570,9:580,10:590,11:600,12:610};
  function ab(t){return [...String(t||'')].reduce((n,c)=>n+(ABJ[c]||0),0)}
  function n2l(n,rev){if(n<=0)return '';let ks=Object.keys(ABJ).map(k=>ABJ[k]).filter((v,i,a)=>a.indexOf(v)===i).sort((a,b)=>b-a),r='',x=n;ks.forEach(v=>{while(x>=v){let k=Object.keys(ABJ).find(k=>ABJ[k]===v);r+=k;x-=v}});return rev?[...r].reverse().join(''):r}
  function safe(t){return String(t??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
  function get(id){return (document.getElementById(id)||{}).value||''}
  function zodiac(n,m){let total=ab(n)+ab(m),r=total%12||12;return {total,r,d:Z[r]}}
  function saveEvent(type,payload){try{if(typeof window.v8ServerFirstSave==='function')window.v8ServerFirstSave(type,payload)}catch(e){}}
  window.switchTalismanPart=function(id){document.querySelectorAll('.v8-talisman-tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===id));document.getElementById('talismanPart1').style.display=id==='t1'?'block':'none';document.getElementById('talismanPart2').style.display=id==='t2'?'block':'none'};
  window.generateTalismanPart1=function(){
    let n=get('t1UserName').trim(),m=get('t1MotherName').trim(),h=get('t1HajatSubject'),note=get('t1ExtraNote').trim();
    if(!n||!m){showNotification('لطفاً نام و نام مادر را وارد کنید','error');return}
    let z=zodiac(n,m),total=z.total+(h?ab(h):0),sn=total;while(sn>114)sn-=114;if(sn===0)sn=114;let si=S[sn]||['نامشخص',1],ay=sn%si[1]||si[1],days=sn;
    let html=`<div class="v8-talisman-output"><b>🔢 ابجد کل:</b> ${total}<br><b>🌟 برج:</b> ${z.d[0]} (${z.r}) ${z.d[2]}<br><b>🔥 عنصر:</b> ${z.d[1]}<br><b>🪐 سیاره:</b> ${z.d[3]}<br><b>📅 روز مناسب:</b> ${z.d[4]}<br><b>📖 سوره:</b> ${si[0]} (${sn})<br><b>📄 آیه:</b> ${ay} از ${si[1]}<br><b>🎯 حاجت:</b> ${safe(h||'بدون حاجت')}${note?'<br><b>📝 توضیح:</b> '+safe(note):''}<hr><b>📖 روش ختم:</b><br>به مدت ${days} روز، هر روز ۱ بار سوره ${safe(si[0])} خوانده شود؛ یا در ۱ روز ${days} بار. پس از هر بار یک صلوات و در پایان دعا برای حاجت.</div>`;
    document.getElementById('talismanPart1Result').innerHTML=html;document.getElementById('talismanPart1Result').style.display='block';
    saveEvent('talisman_part1',{name:n,mother:m,hajat:h,birthDate:get('t1BirthDate'),result:{abjad:total,zodiac:z.r,surah:sn,ayah:ay}});
  };
  window.generateTalismanPart2=function(){
    let n=get('t2UserName').trim(),m=get('t2MotherName').trim(),h=get('t2HajatSubject'),target=get('t2TargetName').trim();
    if(!n||!m){showNotification('لطفاً نام و نام مادر را وارد کنید','error');return}
    let z=zodiac(n,m),base=BASE[z.r]||500,w=[[base+4,base+9,base+2],[base+3,base+5,base+7],[base+8,base+1,base+6]];
    let right=[w[0][2],w[1][2],w[2][2]],left=[w[0][0],w[1][0],w[2][0]];
    let al=right.map(x=>{let c=x-51;return {num:x,calc:c,name:n2l(c,false)+'ئیل'}}),sf=left.map(x=>{let c=x-319;return {num:x,calc:c,name:n2l(c,true)+'طیش'}});
    let amc=al.reduce((a,x)=>a+x.calc,0)-51,smc=sf.reduce((a,x)=>a+x.calc,0);let am=n2l(amc,false)+'ئیل',sm=n2l(smc,true)+'طیش';
    let grid=w.flat().map(x=>`<div class="v8-waqf-cell">${x}</div>`).join('');
    let text=`یا العون العلوی ${al.map(x=>x.name).join(' و ')}\nو بحق الملک الحاکم علیکم ${am}\n\nیا العون السفلی ${sf.map(x=>x.name).join(' و ')}\nو بحق الملک الحاکم علیکم ${sm}\n\n${target?`اجیبوا و احضرولی ${target} ابن ${m}`:'بحق هذه الأسماء المباركة اقضوا حاجتی'}\n\n${h?`﴿ برای ${h} ﴾`:''}`;
    let html=`<div class="v8-talisman-output"><b>🌟 برج:</b> ${z.d[0]} (${z.r})<div class="v8-waqf-grid">${grid}</div><b>🌟 موکلین علوی:</b> ${al.map(x=>safe(x.name)).join(' — ')}<br><b>👑 ملک حاکم علوی:</b> ${safe(am)}<br><br><b>👿 موکلین سفلی:</b> ${sf.map(x=>safe(x.name)).join(' — ')}<br><b>👑 ملک حاکم سفلی:</b> ${safe(sm)}<br><br><b>🎯 حاجت:</b> ${safe(h)}<pre style="white-space:pre-wrap;direction:rtl;text-align:right;color:#f5d76e;font-family:inherit;line-height:2;margin-top:10px;">${safe(text)}</pre><button class="v8-copy-btn" type="button" onclick="copyV8TalismanText()">📋 کپی متن توکیل</button></div>`;
    document.getElementById('talismanPart2Result').innerHTML=html;document.getElementById('talismanPart2Result').style.display='block';window._v8TalismanText=text;
    saveEvent('talisman_part2',{name:n,mother:m,hajat:h,target:target,zodiac:z.r,base:base,waqf:w,alawi:al,safli:sf,masters:{alawi:am,safli:sm},text:text});
  };
  window.calculateVefq=function(){window.generateTalismanPart1()};
  window.copyV8TalismanText=function(){navigator.clipboard?.writeText(window._v8TalismanText||'').then(()=>showNotification('متن توکیل کپی شد')).catch(()=>showNotification('کپی خودکار در دسترس نیست','error'))};
})();
