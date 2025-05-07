Ask Kai – Full Website Status & Development Tracker

Website: https://ask.kaymarconstruction.com
Backend: Node.js (Render)
Frontend: HTML + Tailwind (Netlify)
AI Engine: OpenAI GPT-3.5
Stripe: Live mode active
Owner: Mark Musolino
Lead Dev Assistant: Jack Cooper (AI)


---

✅ LIVE / FUNCTIONAL FEATURES

Core Website

[x] Landing Page with profile image + sign in/up

[x] Session-based auth with email login

[x] Google Sign-In / OAuth (now production ready)

[x] Logout + session clearing

[x] Settings page (prompts used, token count, subscription tier)

[x] Responsive mobile-first design


Chat System

[x] Kai persona with construction + code knowledge

[x] Token-based prompt limit (default 10)

[x] Mark's account has unlimited access

[x] Full chat interface with typing effect

[x] Region-aware language + code guidance

[x] Local storage of prompt count


Menu Navigation

[x] Dropdown menu styled for mobile + desktop

[x] Links to Upgrade, Shop, Settings, Apprentice Hub, Quote Generator

[x] Logout button

[x] Team page with bios and photos


Shop

[x] Book listings with real cover art

[x] Links to external Amazon/KDP now active


Stripe Integration

[x] Live payment links enabled for:

Ask Kai Plus ($14.99/mo)

Ask Kai Premium ($29.99/mo)

Ask Kai Apprentice ($6.99/mo)

Token Packs: Mini, Standard, Pro


[x] Webhook handler with Stripe secret key deployed

[x] Webhook listens for checkout.session.completed


Supabase Integration

[x] Supabase project live (Pro Tier)

[x] Users table created with UUID, email, created_at

[x] Supabase insert email on /register endpoint

[x] RLS enabled and fixed

[x] Environment secrets (SUPABASE_URL + KEY) added



---

⚙️ IN PROGRESS / PRIORITY DEVELOPMENT

Quote Generator

[x] GPT-powered material list generator

[x] /quote endpoint with Kai's quoting brain

[x] HTML interface completed

[x] Chat history memory across prompts

[x] Append structured quote summary in a live quote panel

[x] Export to copy + disclaimer

[x] Export materials list to email supplier (mailto pre-filled message)

[x] User-select supplier (from saved email list in settings)


Calculators

[x] Span Tables Page

[x] Rafter Length Calculator

[x] Decking Board Calculator

[ ] Volume calculator for soil/concrete/rubbish

[ ] Stair and Balustrade (UI present – coming soon)

[ ] Restrict access by plan tier (later)


Apprentice Hub

[x] Banner + resource list

[x] Live tool links (Rafter, Span Tables, Decking)

[x] Recommended Books section with external Amazon links



---

⏳ UPCOMING FEATURES

Auth & Membership

[x] Google Sign-In / OAuth (live)

[ ] Facebook Sign-In (in setup)

[ ] Apple / Microsoft OAuth (optional but recommended)

[ ] Reset password via email

[ ] Save user chat history

[ ] Admin dashboard to view users/emails

[ ] Lock site to soft-launch participants only (whitelist active)


Kai Brain Upgrades

[x] Quote generator brain now default on homepage

[ ] Prompt users for region/code before answering

[ ] Use defaults for common timber, spacing, fasteners

[ ] Use real brand specs (Ekodeck, Hyne, Bunnings)

[ ] Shorter, clearer answers (20–80 words)

[ ] Accurate deck/timber/spacing calculations with location check

[ ] Reuse session memory between inputs

[ ] Fix Kai response rendering on main index.html (materials not appearing)


Mobile App

[x] PWA Web App wrapper

[x] Token sync + offline chat view

[x] Mobile UI now live in auth pages

[ ] Facebook login support in app

[ ] App Store / Google Play deployment


Admin & Support

[x] Track user emails in secure backend (Supabase ✅)

[x] support@kaymarconstruction.com setup

[x] Legal disclaimers / terms page

[ ] View token balances server-side



---

FEATURE IDEAS (BOOKMARKED)

[ ] Facade & Floorplan Designer GPT (Pro Series Exclusive)

[ ] Construction Forum for verified users (moderated)

[ ] Scheduler/Calendar integration with Google Calendar + SMS for job bookings

[x] Supplier quote email draft:

Button below materials list: "Email Supplier"

Opens user's email client with prefilled:

Subject: Material Quote Request

Body: "Hi [Supplier Name], I would like a quote for the following materials to be delivered to [address] on [date]:\n\n[List]\n\nRegards, [User]"



[x] Settings: add profile picture upload, display active plan, and allow saved supplier emails


Last updated: 2025-05-09 by Jack

Project board has been updated with:

Facebook and Apple OAuth status

Mobile UI confirmation

New scheduler/SMS calendar idea

Privacy & TOS links


Next step: Finish configuring your Facebook app with:

App icon (1024x1024)

Privacy Policy URL: https://ask.kaymarconstruction.com/privacy.html

Terms of Service URL: https://ask.kaymarconstruction.com/terms.html

Add your app domain: ask.kaymarconstruction.com




Project.md has been updated and saved.

Next step: Deploy the Facebook login integration on your signup and signin pages using the App ID and Client Secret already configured.

a. Want to proceed with Apple login setup next?
b. Or update the mobile splash/icon assets in the app deployment pipeline?

