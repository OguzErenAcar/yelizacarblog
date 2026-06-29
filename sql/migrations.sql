-- Yeliz Acar Blog — Supabase Migration SQL
-- Strapi tablolarının PostgreSQL karşılıkları

-- 1. Profiles (Supabase Auth ile bağlantılı)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Media (logo ve info görselleri için)
CREATE TABLE media (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  alt_text TEXT,
  caption TEXT,
  width INTEGER,
  height INTEGER,
  formats JSONB,
  hash TEXT,
  ext TEXT,
  mime TEXT,
  size NUMERIC,
  url TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Logos
CREATE TABLE logos (
  id SERIAL PRIMARY KEY,
  height TEXT NOT NULL,
  width TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT false,
  user_id UUID REFERENCES profiles(id),
  row_of_number INTEGER NOT NULL UNIQUE,
  logo_id INTEGER REFERENCES media(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. Infos
CREATE TABLE infos (
  id SERIAL PRIMARY KEY,
  img_height TEXT NOT NULL,
  img_width TEXT NOT NULL,
  header TEXT,
  description TEXT,
  user_id UUID REFERENCES profiles(id),
  is_active BOOLEAN NOT NULL DEFAULT false,
  profile_image_id INTEGER REFERENCES media(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. Info Time Lines
CREATE TABLE info_time_lines (
  id SERIAL PRIMARY KEY,
  header TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT false,
  row_of_number INTEGER NOT NULL UNIQUE,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 6. Links
CREATE TABLE links (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  link_url TEXT NOT NULL,
  font_url TEXT,
  font_name TEXT,
  is_active BOOLEAN NOT NULL DEFAULT false,
  user_id UUID REFERENCES profiles(id),
  row_of_number INTEGER NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 7. Projects
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT false,
  is_main BOOLEAN NOT NULL DEFAULT false,
  row_of_number INTEGER NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 8. Project Images
CREATE TABLE project_images (
  id SERIAL PRIMARY KEY,
  project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  name TEXT,
  alt_text TEXT,
  width INTEGER,
  height INTEGER,
  formats JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 9. Messages (Contact Form)
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
