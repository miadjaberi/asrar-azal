-- اسرار ازل: فروشگاه، سفارش و رسید پرداخت
-- این migration را فقط پس از بازبینی نهایی در Supabase اجرا کنید.
-- ایجاد سفارش و آپلود رسید باید از Edge Function امن با service role انجام شود؛
-- کلید service_role هرگز نباید در مرورگر یا GitHub Pages قرار گیرد.

create table if not exists public.store_products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null check (length(trim(name)) between 1 and 180),
  description text not null default '',
  category text not null default '',
  price_toman bigint not null check (price_toman >= 0),
  image_url text not null default '',
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.store_settings (
  id boolean primary key default true check (id = true),
  contact_phone text not null default '',
  contact_hours text not null default '۱۸ الی ۲۱',
  payment_card_number text not null default '',
  payment_card_holder text not null default '',
  payment_bank_name text not null default '',
  updated_at timestamptz not null default now()
);

insert into public.store_settings (id)
values (true)
on conflict (id) do nothing;

create table if not exists public.store_orders (
  id uuid primary key default gen_random_uuid(),
  order_code text not null unique,
  product_id uuid references public.store_products(id) on delete set null,
  product_name text not null,
  product_price_toman bigint not null check (product_price_toman >= 0),
  quantity integer not null check (quantity between 1 and 99),
  buyer_name text not null check (length(trim(buyer_name)) between 2 and 120),
  buyer_phone text not null check (length(trim(buyer_phone)) between 7 and 24),
  delivery_address text not null default '',
  total_toman bigint not null check (total_toman >= 0),
  receipt_path text not null,
  status text not null default 'pending_review'
    check (status in ('awaiting_receipt', 'pending_review', 'approved', 'rejected')),
  admin_note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint store_orders_total_matches check (total_toman = product_price_toman * quantity)
);

create index if not exists store_orders_created_at_idx
  on public.store_orders (created_at desc);
create index if not exists store_orders_status_idx
  on public.store_orders (status, created_at desc);

grant all on public.store_products to service_role;
grant all on public.store_settings to service_role;
grant all on public.store_orders to service_role;

alter table public.store_products enable row level security;
alter table public.store_settings enable row level security;
alter table public.store_orders enable row level security;

grant select on public.store_products to anon, authenticated;
grant insert, update, delete on public.store_products to authenticated;
grant select on public.store_settings to anon, authenticated;
grant insert, update, delete on public.store_settings to authenticated;
grant select, update on public.store_orders to authenticated;

drop policy if exists "Public read active store products" on public.store_products;
create policy "Public read active store products"
on public.store_products for select
to anon, authenticated
using (is_active = true or (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins manage store products" on public.store_products;
create policy "Admins manage store products"
on public.store_products for all
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Public read store settings" on public.store_settings;
create policy "Public read store settings"
on public.store_settings for select
to anon, authenticated
using (true);

drop policy if exists "Admins manage store settings" on public.store_settings;
create policy "Admins manage store settings"
on public.store_settings for all
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins read store orders" on public.store_orders;
create policy "Admins read store orders"
on public.store_orders for select
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins update store orders" on public.store_orders;
create policy "Admins update store orders"
on public.store_orders for update
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- هیچ policy عمومی برای درج/خواندن سفارش وجود ندارد.
-- Edge Function با service role سفارش را ثبت می‌کند و وضعیت را فقط با
-- کد پیگیری + تلفن خریدار، بدون افشای اطلاعات شخصی، برمی‌گرداند.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'asrar-payment-receipts',
  'asrar-payment-receipts',
  false,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set public = false,
    file_size_limit = 5242880,
    allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp'];

drop policy if exists "Admins view payment receipts" on storage.objects;
create policy "Admins view payment receipts"
on storage.objects for select
to authenticated
using (
  bucket_id = 'asrar-payment-receipts'
  and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

drop policy if exists "Admins delete payment receipts" on storage.objects;
create policy "Admins delete payment receipts"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'asrar-payment-receipts'
  and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);


-- Rate limiting for public order endpoints; keys are one-way hashes, not raw IPs.
create table if not exists public.store_order_rate_limits (
  key_hash text primary key,
  window_started_at timestamptz not null default now(),
  request_count integer not null default 0 check (request_count >= 0)
);
alter table public.store_order_rate_limits enable row level security;
revoke all on public.store_order_rate_limits from anon, authenticated;
grant all on public.store_order_rate_limits to service_role;

create or replace function public.consume_store_order_rate_limit(
  p_key_hash text,
  p_limit integer,
  p_window_seconds integer
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  insert into public.store_order_rate_limits (key_hash, window_started_at, request_count)
  values (p_key_hash, now(), 1)
  on conflict (key_hash) do update
    set window_started_at = case
          when public.store_order_rate_limits.window_started_at
               < now() - make_interval(secs => p_window_seconds)
          then now()
          else public.store_order_rate_limits.window_started_at
        end,
        request_count = case
          when public.store_order_rate_limits.window_started_at
               < now() - make_interval(secs => p_window_seconds)
          then 1
          else public.store_order_rate_limits.request_count + 1
        end
  returning request_count into v_count;

  return v_count <= p_limit;
end;
$$;

revoke all on function public.consume_store_order_rate_limit(text, integer, integer) from public, anon, authenticated;
grant execute on function public.consume_store_order_rate_limit(text, integer, integer) to service_role;


-- Seed the ten currently published shop items once. Existing admin-edited prices
-- are never overwritten when this migration is reapplied.
insert into public.store_products
  (slug, name, description, category, price_toman, image_url, sort_order, is_active)
values
  ('p1', 'چشم ببر', 'چشم زخم ادارات دادگاه برای برد و هیبت و نفوذ 
قدرت در تکلم', 'محدود', 5000, 'shop/p1.jpeg', 1, true),
  ('p2', 'چشم زخم و رفع حسادت و گشایده عقده', 'هیبت 
قدرت 
ابطال 
سحر 
و جادو 
چشم زخم', 'موجود', 3000, 'shop/p2.jpeg', 2, true),
  ('p3', 'خر مهره اصل پاکستان', 'شانس و اقبال', 'اولویت اولین سفارش', 15, 'shop/p3.jpeg', 3, true),
  ('p4', 'دستور رایگان طلسم تخم‌مرغ', 'زیبایی و دشمنی', 'جدید', 101, 'shop/p4.jpeg', 4, true),
  ('p5', 'طلسم رزق و روزی و گشایش کار', 'رزق و روزی 
گشایش 
فتوحات 
برد کردن معاملات 
خرید و فروش', 'جدید', 3000, 'shop/p5.jpeg', 5, true),
  ('p6', 'طلسم یهودی جلب و محبت مجرب', 'جلب مشتری 
جلب مطلوب 
همسر  دوست شما', 'محدود', 5000, 'shop/p6.jpeg', 6, true),
  ('p7', 'قفل زبانبند سکاک محبتی برای زوج یا مطلوب شما', 'محبتی 
زبانبندی 
توافقی 
شراکت 
برد', 'محدود', 3300, 'shop/p7.jpeg', 7, true),
  ('p8', 'مهره مار افعی قابل تست آفریقایی', 'محبتی 
ازدواج 
گشایش اقبال 
معاملات 
زبانبند و غیره', 'ویژه❗محدود', 10000, 'shop/p8.jpeg', 8, true),
  ('p9', 'مهره موکل دار سلطانی بری مغربی', 'جلب 
خیر 
منفعت 
برکت', 'محدود', 12, 'shop/p9.png', 9, true),
  ('p10', 'مهره های برزمی معروف به مهره برد', 'برد در هر چه در نظر داری لازم باشد و مشکل دار هستی', 'محدود', 130000, 'shop/p10.jpeg', 10, true)
on conflict (slug) do nothing;
