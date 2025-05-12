1. Users Table

Purpose:
Store user profiles, preferences, saved data, and usage tracking.

Column Name	Type	Notes

id	UUID	Primary Key, default UUID
email	TEXT	Unique, user’s email
created_at	TIMESTAMP	Auto-generated
profile_pic_url	TEXT	Profile picture storage URL
plan_tier	TEXT	'Free', 'Plus', 'Premium'
prompt_count	INT	Track free prompt usage
saved_suppliers	JSONB	Array of saved supplier objects
saved_contacts	JSONB	Array of saved contacts
saved_quotes	JSONB	Array of saved material lists
saved_emails	JSONB	Array of saved email drafts


SQL:

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    profile_pic_url TEXT,
    plan_tier TEXT DEFAULT 'Free',
    prompt_count INT DEFAULT 0,
    saved_suppliers JSONB,
    saved_contacts JSONB,
    saved_quotes JSONB,
    saved_emails JSONB
);


---

2. Suppliers Table

Purpose:
Store suppliers, either globally for Kai’s knowledge or linked to user accounts.

Column Name	Type	Notes

id	UUID	Primary Key
user_id	UUID	FK to Users (nullable for global)
supplier_name	TEXT	Supplier’s name (Required)
email	TEXT	Contact email
phone	TEXT	Contact phone
notes	TEXT	Optional notes
created_at	TIMESTAMP	Auto-generated


SQL:

CREATE TABLE IF NOT EXISTS suppliers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    supplier_name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);


---

3. Materials Table

Purpose:
Store master material list with sizes, prices, and supplier data.

Column Name	Type	Notes

id	UUID	Primary Key
category	TEXT	e.g., 'Decking', 'Pergola'
material_name	TEXT	e.g., 'Merbau Timber'
size	TEXT	e.g., '90x45', '140x19'
unit_price	NUMERIC	Price per unit, Default 0.00
supplier	TEXT	Supplier name (optional)
created_at	TIMESTAMP	Auto-generated


SQL:

CREATE TABLE IF NOT EXISTS materials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    material_name TEXT NOT NULL,
    size TEXT,
    unit_price NUMERIC(10, 2) DEFAULT 0.00 NOT NULL CHECK (unit_price >= 0),
    supplier TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);


---

4. Calculations Table

Purpose:
Store logic for material calculations by project type and region.

Column Name	Type	Notes

id	UUID	Primary Key
project_type	TEXT	e.g., 'decking', 'pergola'
region	TEXT	e.g., 'AUS', 'US', 'UK'
formula	JSONB	Calculation logic as JSON
description	TEXT	Human-readable explanation
created_at	TIMESTAMP	Auto-generated


SQL:

CREATE TABLE IF NOT EXISTS calculations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_type TEXT NOT NULL,
    region TEXT NOT NULL,
    formula JSONB NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);


---

Code Updates Required After Tables Go Live

File	Update Required	Description

askkai.js	Yes	Integrate Calculations & Materials Table for working logic.
quote.html	Yes	Fetch suppliers from user data, apply real material pricing and calculations.
settings.html	Yes	Manage saved contacts, quotes, suppliers, and email drafts via Supabase.
