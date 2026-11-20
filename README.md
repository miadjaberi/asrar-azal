# اسرار ازل

وب‌اپ آنلاین: https://miadjaberi.github.io/asrar-azal/

## اصول پروژه
- اجرای آنلاین؛ هیچ قابلیت آفلاین یا پاسخ جایگزین آفلاین در Service Worker وجود ندارد.
- ظاهر، چیدمان و محتوای فعلی باید حفظ شوند.
- فایل‌های اصلی روی GitHub Pages میزبانی می‌شوند.
- Supabase برای محتوای زنده، ورود مدیر و ذخیره تصاویر در نظر گرفته شده است.

## راه‌اندازی Supabase (پس از ساخت پروژه)
1. در Supabase یک پروژه بسازید.
2. فایل `supabase/migrations/20261120000000_initial_online_backend.sql` را در SQL Editor اجرا کنید.
3. از Project Settings -> API، مقدار Project URL و Publishable key (یا anon public key قدیمی) را بگیرید.
4. این دو مقدار را فقط در `supabase-config.js` وارد کنید. کلید service_role/secret هرگز نباید در مرورگر قرار گیرد.
5. در Authentication -> Users یک کاربر مدیر بسازید.
6. در SQL Editor، ایمیل واقعی همان مدیر را جایگزین کنید و دستور زیر را اجرا کنید تا نقش فقط در app_metadata ثبت شود:

```sql
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
where email = 'YOUR_ADMIN_EMAIL';
```

7. کاربر مدیر یک‌بار خارج و دوباره وارد شود تا JWT جدید با نقش admin دریافت کند.
8. برنامه پس از پیکربندی، محتوای عمومی را از جدول `site_content` می‌خواند. پنل مدیریت با ایمیل/رمز Supabase وارد می‌شود و ذخیره محتوا و آپلود تصاویر را به Supabase می‌فرستد.

## امنیت
- جدول محتوا برای بازدیدکنندگان فقط خواندنی است.
- نوشتن محتوا و آپلود/حذف فایل فقط برای کاربری مجاز است که `app_metadata.role=admin` دارد.
- کلید service_role/secret فقط برای محیط امن سمت سرور است و نباید در HTML، JavaScript یا GitHub Pages قرار گیرد.
- این مخزن هنوز هیچ Project URL یا کلید واقعی Supabase ندارد؛ تا ساخت پروژه و تکمیل `supabase-config.js` اتصال واقعی فعال نمی‌شود.

## PWA
- Manifest و Service Worker برای نصب‌پذیری وب‌اپ تنظیم شده‌اند.
- Service Worker فقط درخواست شبکه را عبور می‌دهد؛ Cache و offline fallback ندارد.
