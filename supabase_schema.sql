-- DDL Schema Setup for portfolio migration
-- Execute this script in your Supabase SQL Editor (https://supabase.com/dashboard)

-- 1. Create articles table
create table public.articles (
  id uuid default gen_random_uuid() primary key,
  date text not null,
  title text not null,
  href text not null,
  takeaway text not null,
  tags text[] default '{}'::text[],
  content text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for articles
alter table public.articles enable row level security;

-- Policies for articles
create policy "Allow public read access" on public.articles for select using (true);
create policy "Allow all actions to service role" on public.articles using (auth.role() = 'service_role');


-- 2. Create photos table
create table public.photos (
  id uuid default gen_random_uuid() primary key,
  src text not null,
  alt text not null,
  name text not null,
  gallery text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for photos
alter table public.photos enable row level security;

-- Policies for photos
create policy "Allow public read access" on public.photos for select using (true);
create policy "Allow all actions to service role" on public.photos using (auth.role() = 'service_role');


-- 3. Create site_changes table
create table public.site_changes (
  id uuid default gen_random_uuid() primary key,
  date text not null,
  added text[] default '{}'::text[],
  fixed text[] default '{}'::text[],
  changed text[] default '{}'::text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for site_changes
alter table public.site_changes enable row level security;

-- Policies for site_changes
create policy "Allow public read access" on public.site_changes for select using (true);
create policy "Allow all actions to service role" on public.site_changes using (auth.role() = 'service_role');


-- 4. Create books table
create table public.books (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  author text not null,
  "publishedYear" integer,
  rating numeric,
  "coverUrl" text not null,
  "wikiUrl" text not null,
  review text,
  status text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for books
alter table public.books enable row level security;

-- Policies for books
create policy "Allow public read access" on public.books for select using (true);
create policy "Allow all actions to service role" on public.books using (auth.role() = 'service_role');


-- 5. Create storage bucket for gallery if not exists
insert into storage.buckets (id, name, public) 
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

-- Storage policies for public read access
create policy "Public Access" on storage.objects 
  for select using (bucket_id = 'gallery');

-- Storage policies for service role inserts/updates
create policy "Allow Service Role Inserts" on storage.objects 
  for insert with check (bucket_id = 'gallery');

create policy "Allow Service Role Updates" on storage.objects 
  for update using (bucket_id = 'gallery');
