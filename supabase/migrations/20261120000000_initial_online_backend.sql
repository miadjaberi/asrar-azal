-- اسرار ازل: online-only content backend
-- Run this file once in Supabase Dashboard -> SQL Editor.

create table if not exists public.site_content (
  key text primary key,
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;
grant select on public.site_content to anon, authenticated;
grant insert, update, delete on public.site_content to authenticated;

drop policy if exists "Public can read site content" on public.site_content;
create policy "Public can read site content"
on public.site_content for select
to anon, authenticated
using (true);

drop policy if exists "Admins manage site content" on public.site_content;
create policy "Admins manage site content"
on public.site_content for all
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('asrar-assets', 'asrar-assets', true, 5242880, array['image/jpeg','image/png','image/webp','image/gif','image/svg+xml'])
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view Asrar assets" on storage.objects;
create policy "Public can view Asrar assets"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'asrar-assets');

drop policy if exists "Admins upload Asrar assets" on storage.objects;
create policy "Admins upload Asrar assets"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'asrar-assets'
  and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

drop policy if exists "Admins update Asrar assets" on storage.objects;
create policy "Admins update Asrar assets"
on storage.objects for update
to authenticated
using (
  bucket_id = 'asrar-assets'
  and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
)
with check (
  bucket_id = 'asrar-assets'
  and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

drop policy if exists "Admins delete Asrar assets" on storage.objects;
create policy "Admins delete Asrar assets"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'asrar-assets'
  and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);
