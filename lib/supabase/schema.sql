-- Refined tables for WFSK content management

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Members (Covers Team, Directors, Executive, Black Belts)
CREATE TYPE member_role AS ENUM ('director', 'executive', 'instructor', 'black_belt');

CREATE TABLE members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    belt_dan TEXT,
    image_url TEXT NOT NULL,
    role member_role NOT NULL,
    country TEXT DEFAULT 'Global',
    show_belt BOOLEAN DEFAULT true,
    belt_color TEXT DEFAULT '#E81E26',
    achievements TEXT[] DEFAULT '{}',
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Branches
CREATE TABLE branches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    country_name TEXT NOT NULL,
    place_name TEXT NOT NULL,
    description TEXT NOT NULL,
    instructor_name TEXT NOT NULL,
    image_url TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. World Record Section
CREATE TABLE world_record (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    image_url TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Initial World Record Entry
INSERT INTO world_record (title, description, image_url) VALUES 
('World Record Holders', 'WFSK (World Federation of Shotokan Karate) has achieved world records, notably for the Largest Black Belt Awarding Ceremony with 404 Indian students under one federation in late 2024.', '/images/team_photo.jpg')
ON CONFLICT DO NOTHING;

-- Enable RLS
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE branches ENABLE ROW LEVEL SECURITY;
ALTER TABLE world_record ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public Read Access" ON members FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON branches FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON world_record FOR SELECT USING (true);

CREATE POLICY "Admin CRUD Access" ON members FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin CRUD Access" ON branches FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin CRUD Access" ON world_record FOR ALL TO authenticated USING (true);

-- 4. News & Events
CREATE TABLE news_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT NOT NULL,
    image_url TEXT,
    video_url TEXT,
    media_type TEXT DEFAULT 'image',
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE news_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON news_events FOR SELECT USING (true);
CREATE POLICY "Admin CRUD Access" ON news_events FOR ALL TO authenticated USING (true);
