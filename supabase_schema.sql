-- Create the backlog table
create table backlog (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  priority integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Realtime for this table
alter publication supabase_realtime add table backlog;

-- Policy (optional for prototype, allows public access as requested)
-- Note: You might need to enable RLS first to apply policies, but for this prototype we are assuming public access or disabling RLS.
-- alter table backlog enable row level security;
-- create policy "Public access" on backlog for all using (true);
