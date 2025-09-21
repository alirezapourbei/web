
/* ------------------ Typing effect ------------------ */
const typingString = "وبسایت حرفه‌ای؛ نخستین و ماندگارترین نمای تبلیغاتی شما — ابزار کلیدی برای معرفی، اعتمادسازی، جذب مشتری و ارتقای موقعیت شغلی.";
const typeTarget = document.getElementById('typeContent');
let tpos=0;
(function type(){
  if(tpos < typingString.length){
    typeTarget.innerHTML += typingString.charAt(tpos);
    tpos++;
    setTimeout(type, 28);
  }
})();

/* ------------------ Section switching (show only target) ------------------ */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
function showSection(id){
  sections.forEach(s=>{
    if(s.id === id){ s.style.display='block'; s.classList.add('visible'); s.setAttribute('aria-hidden','false') }
    else { s.style.display='none'; s.classList.remove('visible'); s.setAttribute('aria-hidden','true') }
  });
  // hide article view if leaving blog
  if(id !== 'blog'){ document.getElementById('articleView').style.display='none' }
  // scroll to header for context
  document.getElementById('headerSection').scrollIntoView({behavior:'smooth'});
}
navLinks.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const target = link.getAttribute('data-target');
    showSection(target);
  });
});
// default: show profile
document.addEventListener('DOMContentLoaded', ()=>{ showSection('profile') });

/* ------------------ Counters in profile ------------------ */
function animateCounters(){
  const nums = document.querySelectorAll('.num');
  nums.forEach(el=>{
    const target = +el.getAttribute('data-target');
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = setInterval(()=>{
      cur += step;
      if(cur >= target){ cur = target; clearInterval(interval) }
      el.textContent = cur;
    }, 20);
  });
}
// run when profile visible
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click', ()=>{
    if(link.getAttribute('data-target') === 'profile') setTimeout(animateCounters,350);
  });
});
// also animate on load
setTimeout(animateCounters,800);

/* ------------------ Blog interactions ------------------ */
const blogCards = document.querySelectorAll('.blog-card');
const articleView = document.getElementById('articleView');

const articles = {
  a1: {
    title: "تأثیر وبسایت بر رشد و معرفی کسب‌وکار",
    content: `
      <h3>مقدمه</h3>
      <p>در عصر دیجیتال، حضور آنلاین دیگر یک گزینهٔ لوکس نیست؛ بلکه لازمهٔ رقابت است. وبسایت، شبیه دفتر کار شما در فضای مجازی است؛ اولین مکانی که مشتری بالقوه با آن روبرو می‌شود و در چند ثانیهٔ نخست دربارهٔ کیفیت و اعتماد شما قضاوت می‌کند. این متن به صورت جامع و عملی بررسی می‌کند که چگونه وبسایت می‌تواند رشد مستدام کسب‌وکار را رقم بزند.</p>

      <h4>وبسایت؛ نقطهٔ آغاز اعتبارسازی</h4>
      <p>ظاهرِ حرفه‌ای، ساختارِ منطقی محتوا، نمایش نمونه‌کارها و نظرات مشتریان، همگی باعث می‌شوند که مخاطب با دید اعتمادآمیز به شما نگاه کند. یک سایت بد یا ناقص می‌تواند اعتماد را از بین ببرد؛ بنابراین سرمایه‌گذاری هوشمندانه روی طراحی و تجربهٔ کاربری باعث افزایش احتمال همکاری می‌شود.</p>

      <h4>جذب هدفمند از طریق سئو و محتوا</h4>
      <p>سئو و محتوا، موتور محرک ورودی‌های باکیفیت به سایت هستند. تولید محتوا (مقالات، راهنما، صفحات مخصوص محصول) و بهینه‌سازی تکنیکی باعث می‌شود افراد جستجوکننده‌ی مرتبط به سایت شما برسند — ورودی‌هایی که نرخ تبدیل بالاتری دارند. برای مثال، یک کسب‌وکار خدماتی که مقالات تخصصی منتشر کند، در جستجوهای محلی دیده می‌شود و تماس‌های واقعی دریافت می‌کند.</p>

      <h4>تبدیل بازدیدکننده به مشتری</h4>
      <p>وجود مسیرهای واضح تبدیل (CTA)، صفحات فرود اختصاصی و فرم‌های تماس ساده باعث افزایش نرخ تبدیل می‌شود. طراحی تجربهٔ کاربری (UX) که مسیر مخاطب را ساده کند، مستقیماً بر فروش اثر می‌گذارد. طراحی صحیح فرم‌ها، پیشنهادهای شفاف و استفاده از نشانه‌های اعتماد (نمادها، گارانتی، نمونه‌کار) بسیار موثر است.</p>

      <h4>مثال عملی: رشد یک فروشگاه محلی</h4>
      <p>یک فروشگاه لوازم خانگی محلی با طراحی صفحات محصول استاندارد، افزودن محتوای آموزشی برای هر محصول و اجرای کمپین‌های محلی، توانست در زمان ۶ ماه ترافیک ارگانیک خود را ۲٫۵ برابر و فروش آنلاین را سه برابر کند. این موفقیت نتیجهٔ ترکیب سئو محلی، UX مناسب و تبلیغات هدفمند بود.</p>

      <h4>نکات عملی برای داشتن سایت تاثیرگذار</h4>
      <ul>
        <li>سرعت بالای سایت و انتخاب هاست مناسب</li>
        <li>طراحی واکنش‌گرا و تجربهٔ موبایل برتر</li>
        <li>محتوای آموزنده و ساختار یافته با تمرکز بر پرسش‌های واقعی کاربران</li>
        <li>صفحات فرود مرتبط با هر کمپین تبلیغاتی</li>
        <li>تحلیل رفتار کاربران و بهبود مستمر</li>
      </ul>

      <h4>جمع‌بندی</h4>
      <p>وبسایت یک دارایی بلندمدت است؛ البته نه هر وبسایتی، بلکه سایتی با طراحی مناسب، محتوا و مسیرهای تبدیل. آنچه مشتری می‌بیند، تصمیم می‌گیرد — و این همان جایی است که وبسایتِ حرفه‌ای تفاوت‌ساز است.</p>
    `
  },

  a2: {
    title: "تأثیر هوش مصنوعی بر موقعیت‌های شغلی و زندگی اجتماعی",
    content: `
      <h3>مقدمه</h3>
      <p>هوش مصنوعی در حال بازتعریف بسیاری از جنبه‌های کاری و اجتماعی ماست. از خودکارسازی وظایف تکراری تا بهبود تصمیم‌گیری‌های پیچیده؛ AI فرصت‌هایی ایجاد می‌کند اما در عین حال سوالات مهمی دربارهٔ آیندهٔ کار و عدالت اجتماعی مطرح می‌نماید.</p>

      <h4>فرصت‌های نوین</h4>
      <p>ظهور نقش‌هایی مثل مهندس داده، متخصص یادگیری ماشین، تحلیل‌گر هوش تجاری و مهندسین MLOps نشان‌دهندهٔ نیاز بازار به افراد مسلط بر داده و الگوریتم است. کسب مهارت‌های مرتبط با داده و تحلیل، درهای جدیدی را به روی افراد باز می‌کند.</p>

      <h4>مشاغل در معرض اتوماسیون</h4>
      <p>وظایف مقرون به قاعده و تکراری مانند پردازش‌های داده‌ای، کارهای اداری ساده و حتی برخی فرآیندهای تولیدی در معرض اتوماسیون هستند. اما مشاغلی که نیاز به خلاقیت، تصمیم‌گیری پیچیده و همدلی انسانی دارند همچنان ارزشمند باقی می‌مانند.</p>

      <h4>مهارت‌های فردی و سازمانی لازم</h4>
      <ul>
        <li>درک پایه‌ای از داده‌ها و ابزارهای تحلیلی</li>
        <li>توانایی کار تیمی و ارتباط موثر با ذینفعان</li>
        <li>یادگیری مادام‌العمر و انعطاف‌پذیری شغلی</li>
      </ul>

      <h4>تأثیرات اجتماعی</h4>
      <p>AI می‌تواند خدمات پزشکی را شخصی‌سازی کند، تجربهٔ کاربری را بهتر کند و تصمیم‌گیری‌ها را تسهیل نماید؛ اما بدون سیاست‌گذاری مناسب، خطر افزایش نابرابری وجود دارد. آموزش و دسترسی برابر به منابع آموزشی از الزامات مهم این گذار است.</p>

      <h4>چگونه از AI به سود خود استفاده کنیم؟</h4>
      <p>به جای ترس، AI را به‌عنوان ابزار کمکی در نظر بگیرید: خودکارسازی کارهای تکراری، استفاده از ابزارهای تحلیلی برای تصمیم‌گیری بهتر و ایجاد محصولات هوشمندتر. کسانی که توانایی تعامل با این ابزارها را داشته باشند، در محیط کاری آینده برتری خواهند داشت.</p>

      <h4>جمع‌بندی</h4>
      <p>هوش مصنوعی تحولی است که هم فرصت و هم مسئولیت همراه دارد. آموزش، سیاست‌های حمایتی و تمرکز بر مهارت‌های انسانی مکمل، کلید موفقیت در عصر AI است.</p>
    `
  },

  a3: {
    title: "نکات طلایی برای پیشرفت و تحول موقعیت شغلی",
    content: `
      <h3>مقدمه</h3>
      <p>پیشرفت شغلی صرفاً به گذر زمان وابسته نیست؛ بلکه به برنامه، هدف و اجرای متمرکز نیاز دارد. این متن یک نقشهٔ عملیاتی برای تحول شغلی ارائه می‌دهد که ترکیبی از برندسازی شخصی، مهارت‌آموزی و شبکه‌سازی است.</p>

      <h4>برندسازی شخصی</h4>
      <p>وبسایت شخصی و پروفایل‌های حرفه‌ای (مثل لینکدین) محلی‌اند که تصویر شما را به کارفرما یا مشتری منتقل می‌کنند. محتوای آموزشی، نمونه‌کار و مطالعات موردی باعث می‌شود دیده شوید و فرصت‌های بهتری جذب کنید.</p>

      <h4>برنامهٔ ۶ ماههٔ عملی</h4>
      <ol>
        <li>ماه ۱–۲: انتخاب حوزه و یادگیری پایه‌ای (مثلاً یک فریم‌ورک یا مهارت)</li>
        <li>ماه ۳–۴: ساخت پروژهٔ نمایشی و انتشار آن همراه با مستندات</li>
        <li>ماه ۵: مشارکت در پروژه‌های مشترک یا متن‌باز</li>
        <li>ماه ۶: جمع‌آوری بازخورد، بهینه‌سازی و ارائهٔ نتایج به صورت پیوست در رزومه/وبسایت</li>
      </ol>

      <h4>شبکه‌سازی هدفمند</h4>
      <p>کیفیت شبکه بیش از کمیت آن ارزشمند است؛ با همکاران متخصص تبادل نظر کنید، در رویدادهای محلی و آنلاین حضور یابید و از فرصت‌های همکاری کوتاه‌مدت برای نشان دادن توانمندی استفاده کنید.</p>

      <h4>اندازه‌گیری نتایج</h4>
      <p>برای جذب توجه، نتایج ملموس ارائه دهید: افزایش درصد ترافیک، کاهش زمان بارگذاری، بهبود نرخ تبدیل و موارد قابل سنجش دیگر. اعداد باعث اعتماد می‌شوند.</p>

      <h4>نتیجه‌گیری</h4>
      <p>پیشرفت شغلی ترکیبی از مهارت، اثبات کار و شبکه‌سازی است. با برنامهٔ متمرکز و نمایش نتایج واقعی، مسیر شما برای ارتقاء شغلی هموارتر خواهد شد.</p>
    `
  },

  a4: {
    title: "وبسایت به‌عنوان سرمایه‌گذاری بلندمدت",
    content: `
      <h3>مقدمه</h3>
      <p>نگاه به وبسایت به‌عنوان هزینه، اغلب مانع اتخاذ تصمیمات استراتژیک می‌شود. اما وقتی وبسایت را سرمایه بدانیم، رویکرد برنامه‌ریزی، نگهداری و اندازه‌گیری تغییر می‌کند. این مقاله به روش‌های سنجش ROI و استراتژی‌های افزایش ارزش می‌پردازد.</p>

      <h4>هزینه‌ها و نگهداری</h4>
      <p>هزینهٔ اولیه شامل طراحی و توسعه است؛ هزینه‌های جاری شامل هاست، امنیت، تولید محتوا و سئو می‌شود. این هزینه‌ها در صورتی که با استراتژی درست همراه شوند، نتایجی قابل‌توجه ایجاد می‌کنند.</p>

      <h4>روش‌های اندازه‌گیری ROI</h4>
      <p>برای هر هدف (فروش، لید، ثبت‌نام) شاخص‌های کلیدی عملکرد تعریف کنید و از ابزارهای تحلیلی برای رصد استفاده کنید. ROI را با فرمول ساده محاسبه کنید و نتایج را دوره‌ای بازبینی نمایید.</p>

      <h4>مثال عددی</h4>
      <p>فرض کنید هزینهٔ اولیه ۱۰ میلیون تومان و هزینهٔ ماهانه نگهداری ۵۰۰ هزار تومان. اگر در ۶ ماه اول سایت ۳۰ میلیون تومان فروش اضافی ایجاد کند، ROI مثبت و چشمگیر خواهد بود. این اعداد نشان می‌دهد سرمایه‌گذاری هوشمندانه بازدهی دارد.</p>

      <h4>نتیجه‌گیری</h4>
      <p>وبسایتِ برنامه‌ریزی‌شده، برای برند و کسب‌وکار یک دارایی است. ترکیب طراحی، محتوا و تحلیل باعث می‌شود که سرمایه‌گذاری به رشد مداوم و قابل اندازه‌گیری تبدیل گردد.</p>
    `
  }
};

/* open article on click */
blogCards.forEach(card=>{
  card.addEventListener('click', ()=> openArticle(card.getAttribute('data-id')));
  card.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') openArticle(card.getAttribute('data-id')) });
});

/* preview behavior: already CSS handles hover slide; ensure accessible keyboard focus shows preview */
blogCards.forEach(card=>{
  card.addEventListener('focus', ()=>{ card.classList.add('focused') });
  card.addEventListener('blur', ()=>{ card.classList.remove('focused') });
});

function openArticle(id){
  const a = articles[id];
  if(!a) return;
  articleView.innerHTML = `<h3>${a.title}</h3>` + a.content + `<div style="margin-top:16px"><button class="submit-btn" onclick="closeArticle()">بازگشت به لیست</button></div>`;
  articleView.style.display='block';
  articleView.scrollIntoView({behavior:'smooth', block:'center'});
}

/* close article view -> keep blog displayed */
function closeArticle(){ articleView.style.display='none'; document.getElementById('blog').scrollIntoView({behavior:'smooth'}); }

/* ---------- form submit via Fetch (Formsubmit example) ---------- */
const form = document.getElementById('mainForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const fd = new FormData(form);
    // <-- place your own endpoint here (Formsubmit token or backend)
    fetch('https://formsubmit.co/53af1c24fc28af3318567158363350e3', { method:'POST', body:fd, headers:{'Accept':'application/json'} })
    .then(res=>{
      if(res.ok){ document.getElementById('successModal').classList.add('show'); document.getElementById('successModal').setAttribute('aria-hidden','false'); form.reset(); }
      else alert('خطا در ارسال فرم — لطفاً دوباره تلاش کنید.');
    }).catch(()=> alert('خطا در اتصال به سرور — اینترنت یا آدرس مقصد را بررسی کنید.'));
  });
}
function closeSuccess(){ document.getElementById('successModal').classList.remove('show'); document.getElementById('successModal').setAttribute('aria-hidden','true'); }

/* ---------- theme toggle (simple) ---------- */
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('light-mode');
});

/* ---------- close previews when leaving blog list (optional) ---------- */
const blogList = document.getElementById('blogList');
if(blogList){
  blogList.addEventListener('mouseleave', ()=>{
    document.querySelectorAll('.preview').forEach(p=>{ p.style.opacity=0; p.style.pointerEvents='none'; p.style.transform='translateX(18px) translateY(-6px)'; });
  });
}

/* Accessibility: allow nav links via keyboard to show sections */
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); link.click(); }
  });
});
