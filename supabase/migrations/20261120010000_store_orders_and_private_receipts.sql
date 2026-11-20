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
