Tables.md – Supabase Schema Requirements

1. Users Table (Already Exists)

Column Name	Type	Notes

id	UUID (PK)	Primary Key
email	Text	Unique
created_at	Timestamp	Default Now()
profile_pic_url	Text	Optional profile image
plan_tier	Text	Free, Plus, Premium
prompt_count	Int	Tracks prompt usage
saved_suppliers	JSONB	Array of Supplier IDs
saved_contacts	JSONB	Array of Contact IDs
saved_quotes	JSONB	Array of Quote IDs
saved_emails	JSONB	Array of Email Draft IDs


ALTER TABLE users 
ADD COLUMN profile_pic_url TEXT,
ADD COLUMN plan_tier TEXT DEFAULT 'Free',
ADD COLUMN prompt_count INT DEFAULT 0,
ADD COLUMN saved_suppliers JSONB,
ADD COLUMN saved_contacts JSONB,
ADD COLUMN saved_quotes JSONB,
ADD COLUMN saved_emails JSONB;


---

2. Suppliers Table

Column Name	Type	Notes

id	UUID (PK)	Primary Key
user_id	UUID	FK to Users
name	Text	Supplier Name
email	Text	Email Address
phone	Text	Optional
notes	Text	Notes/Comments
created_at	Timestamp	Default Now()


CREATE TABLE suppliers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);


---

3. Materials Table (Pricing Table - Already Exists)

Ensure it contains:

Column Name	Type	Notes

id	UUID (PK)	Primary Key
name	Text	Material Name
type	Text	e.g., Timber, Fixings
size	Text	Dimensions (e.g., 90x45)
unit_price	Numeric	Per unit
supplier	Text	Default Supplier Name
created_at	Timestamp	Default Now()



---

4. Quotes Table

Column Name	Type	Notes

id	UUID (PK)	Primary Key
user_id	UUID	FK to Users
project_type	Text	Decking, Pergola
location	Text	Country/Region
project_data	JSONB	Full Project Form
generated_list	Text	Final Material List
created_at	Timestamp	Default Now()


CREATE TABLE quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  project_type TEXT,
  location TEXT,
  project_data JSONB,
  generated_list TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);


---

5. Email Drafts Table

Column Name	Type	Notes

id	UUID (PK)	Primary Key
user_id	UUID	FK to Users
subject	Text	Email Subject
body	Text	Email Body
created_at	Timestamp	Default Now()


CREATE TABLE email_drafts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  subject TEXT,
  body TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);


---

Code Files That Will Require Updates

File	Update Required

askkai.js	Add Supabase Integration for Saving/Loading Quotes, Suppliers, Drafts
quote.html	Add Supabase Save/Load Logic for Suppliers and Quotes
settings.html	Load Saved Quotes, Email Drafts, Suppliers from Supabase
quote.js	Use Supabase Materials Table for Accurate Pricing and Calculations



---

Would you like me to generate the updated code files directly with Supabase integration logic included?

