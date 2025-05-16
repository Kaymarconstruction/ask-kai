Project.md

Project: Ask Kai – Web Application


---

Application Overview

Ask Kai is a web application designed to provide AI-powered carpentry and construction advice.
It features AI chat functionality, user authentication, subscription management, and user profile capabilities.


---

Current Project Structure

Pages Implemented

index.html → AI Chat Interface ✅

signin.html → User Authentication (Email, Google, Facebook) ✅

signup.html → User Registration ✅

settings.html → User Profile Management ⚠️ (Partially Complete)

upgrade.html → Subscription Plan Management (Pending)

contacts.html & addcontacts.html → Contacts Management (Pending Implementation)


Backend

API Hosted on Render (Express.js, OpenAI Integration).

Supabase used for Authentication, Database, and Storage.



---

Current Functional Status

Feature	Status	Notes

Authentication	✅ Working	Google, Facebook, Email OAuth
Chat AI	✅ Working	Connected to OpenAI API
Profile Picture	⚠️ Broken	Storage policy & upload errors
Settings Page	⚠️ Partial	UI Loads, but API returns errors
Contacts	⚠️ Pending	UI/DB functionality incomplete
Subscription Plans	⚠️ Pending	Upgrade page under development



---

Identified Technical Issues

1. Supabase Storage (profile-pictures bucket):

Public Access Not Configured Properly.

Missing correct RLS and Storage Policies.

Upload errors due to "Row Level Security Policy" violations.



2. Supabase RLS on users Table:

Missing or incorrect policies to allow users to update their own profile_pic_url.

user.id should be used for all secure references instead of user.email.



3. Storage Upload Logic in settings.html:

Incorrect file paths using user.email.

Missing Metadata during uploads to satisfy RLS.



4. UI/UX Issues:

Settings page lacks responsive design polish.

Profile image upload fails without appropriate user feedback.

Email, Subscription Tier, and Token Usage are stuck on "Loading...".



5. Missing Pages & Incomplete Navigation:

contacts.html, addcontacts.html, and suppliers.html not fully implemented.

Upgrade functionality missing payment integration.





---

Immediate Fixes Required

Supabase RLS Policies

-- USERS Table Policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow user to view their own data"
ON public.users FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Allow user to update their own data"
ON public.users FOR UPDATE
USING (auth.uid() = id);

CREATE POLICY "Allow user to insert their own data"
ON public.users FOR INSERT
WITH CHECK (auth.uid() = id);

-- Storage Bucket Policies (profile-pictures)
ALTER STORAGE POLICY profile-pictures ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow upload of own profile pic"
ON storage.objects FOR INSERT
USING (auth.uid() IS NOT NULL)
WITH CHECK (metadata->>'user_id' = auth.uid());

CREATE POLICY "Allow read access to all"
ON storage.objects FOR SELECT
USING (true);

Code Updates Needed

Update uploadProfilePic() to include metadata:


const { error: uploadError } = await client.storage
  .from(BUCKET)
  .upload(filePath, file, { 
    upsert: true, 
    cacheControl: '3600', 
    metadata: { user_id: user.id } 
  });

Ensure Storage Public URL generation is properly configured.

Refactor all Supabase DB queries to use user.id for security and RLS compliance.

Improve error handling and show user-friendly toast notifications for all failures.



---

UI/UX Enhancements Planned

Settings.html:

Fully responsive layout.

Proper display of profile info and token usage.

Add “Delete Account” and “Reset Password” actions.


index.html:

Finalize chat UI polish and loading animations.


Add missing navigation and page links to all menus.



---

Long-Term Roadmap

Integrate Stripe for subscription management and tier upgrades.

Add advanced user analytics and usage reports.

Finalize all remaining pages:

contacts.html

addcontacts.html

suppliers.html

upgrade.html


Complete full production security review before public launch.



---

Do you want me to generate the full updated settings.html now with these changes applied?

