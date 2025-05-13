🌐 Project Overview
Website: https://ask.kaymarconstruction.com
Backend: Node.js (Render)
Frontend: HTML + Tailwind (Netlify)
AI Engine: OpenAI GPT-3.5
Stripe: Live Mode Active
Owner: Mark Musolino
Lead Dev Assistant: Jack Cooper (AI)

✅ LIVE / FUNCTIONAL FEATURES
Core Website
 Landing Page with Profile Image + Sign In/Up

 Session-Based Auth with Email Login

 Google Sign-In / OAuth (Production Ready)

 Logout + Session Clearing

 Settings Page (Prompts Used, Token Count, Subscription Tier)

 Responsive Mobile-First Design

Chat System
 Kai Persona with Construction + Code Knowledge

 Token-Based Prompt Limit (Default 10)

 Mark's Account Has Unlimited Access

 Full Chat Interface with Typing Effect

 Region-Aware Language + Code Guidance

 Local Storage of Prompt Count

Menu Navigation
 Dropdown Menu Styled for Mobile + Desktop

 Updated: Black Button with White Hamburger Lines

 Structured Dropdown Menu with Hierarchy

 Links to Upgrade, Shop, Settings, Apprentice Hub, Quote Generator

 Logout Button

 Team Page with Bios and Photos

Shop
 Book Listings with Real Cover Art

 Links to External Amazon/KDP Active

Stripe Integration
 Live Payment Links Enabled:

Ask Kai Plus ($14.99/mo)

Ask Kai Premium ($29.99/mo)

Ask Kai Apprentice ($6.99/mo)

Token Packs: Mini, Standard, Pro

 Webhook Handler with Stripe Secret Key Deployed

 Webhook Listens for checkout.session.completed

Supabase Integration
 Supabase Project Live (Pro Tier)

 Users, Materials, Suppliers, Calculations Tables Created and Synced

 Supabase Insert Email on /register Endpoint

 RLS Enabled and Configured

 Environment Secrets (SUPABASE_URL + KEY) Added

⚙️ IN PROGRESS / PRIORITY DEVELOPMENT
Quote Generator
 GPT-Powered Material List Generator

 /quote Endpoint with Kai's Quoting Brain

 HTML Interface Completed

 Chat History Memory Across Prompts

 Append Structured Quote Summary in a Live Quote Panel

 Export to Copy + Disclaimer

 Export Materials List to Email Supplier (mailto Pre-Filled Message)

 User-Select Supplier (from Saved Supplier List)

 Add Preset Quick-Fill Options in Quote Generator (Common Deck Sizes)

 Saved Quotes Feature (Stored in Supabase)

Calculators
 Span Tables Page

 Rafter Length Calculator

 Decking Board Calculator

 Plasterboard Materials Calculator (Completed)

 Volume Calculator for Soil/Concrete/Rubbish

 Stair and Balustrade Calculator (UI Present – Logic Pending)

 Restrict Calculator Access by Plan Tier (Later Phase)

Apprentice Hub
 Banner + Resource List

 Live Tool Links (Rafter, Span Tables, Decking)

 Recommended Books Section with External Amazon Links

Material Pricing Scraper & Database
 Supabase Schema Created (Materials)

 Switch Bunnings + Bowens Scrapers to Puppeteer

 Focus Bowens as Priority Before Bunnings

 Validate Puppeteer Scraper on Render

 Build GET /materials?category= API for Frontend Material List

 Add Search Endpoint /materials/search?q=

 Add Scrape Source Logging for Audit/Debug

 Weekly Scraper Schedule for Bowens Confirmed

⏳ UPCOMING FEATURES
Auth & Membership
 Google Sign-In / OAuth (Live)

 Facebook Sign-In (In Setup)

 Apple / Microsoft OAuth (Optional)

 Reset Password via Email

 Save User Chat History (Supabase JSON Storage)

 Admin Dashboard to View Users/Emails and Monitor Token Balances

 Lock Site to Soft-Launch Participants Only (Whitelist Active)

Kai Brain Upgrades
 Quote Generator Brain Now Default on Homepage

 Prompt Users for Region/Code Before Answering

 Use Defaults for Common Timber, Spacing, Fasteners

 Integrate Real Brand Specs (Ekodeck, Hyne, Bunnings)

 Shorter, Clearer Answers (20–80 Words)

 Accurate Deck/Timber/Spacing Calculations with Location Check

 Reuse Session Memory Between Inputs

 Fix Kai Response Rendering on Main index.html

Quotes Management
 quotesManager.js (New Feature)

Manage Saved Quotes

Edit and Resend Quotes

Attach to Suppliers Dynamically

Export as PDF or Email Directly

Mobile App
 PWA Web App Wrapper

 Token Sync + Offline Chat View

 Mobile UI Now Live in Auth Pages

 Facebook Login Support in App

 App Store / Google Play Deployment

Admin & Support
 Track User Emails in Secure Backend (Supabase ✅)

 support@kaymarconstruction.com Setup

 Legal Disclaimers / Terms Page

 View Token Balances Server-Side

💡 FEATURE IDEAS (BOOKMARKED)
 Facade & Floorplan Designer GPT (Pro Series Exclusive)

 Construction Forum for Verified Users (Moderated)

 Scheduler/Calendar Integration with Google Calendar + SMS for Job Bookings

 Supplier Quote Email Draft (Active)

 Settings: Add Profile Picture Upload, Display Active Plan, and Allow Saved Supplier Emails

🧩 PRE-PRODUCTION LAUNCH CHECKLIST (UPDATED)
 dotenv Module Install Confirmed in Deployment (Render)

 SUPABASE_URL and SUPABASE_KEY Confirmed on Render Secrets

 Live /materials API Response Tested from Frontend

 materials.html Tested for UI Rendering and Backend Connection

 Error UI Confirmed (No Results Found, Fetch Fail)

 Schedule Weekly Refresh of Bowens Confirmed

 Confirm .env File Created and Working Locally

 Confirm askkai.js Running Clean in Terminal with Supabase

 Stripe Webhook Test Mode Reviewed

 Menu Dropdown and Nav Links Working Clean on All Pages

 Mobile Rendering Double-Checked for Layout Breaks

 Add Instructions to README for Local Test + Deploy

 Final Load Test of API Endpoints (askkai.js)

 Move Supabase Keys to Secure Storage Before Final Production

📢 Next Actions Suggested:

Finalize Quotes Manager Logic (quotesManager.js).

Complete Stair and Volume Calculator Logic.

Move all API URLs and Keys to Secure Config Files.

Add Missing README Instructions for Devs.

Perform Final Load/Stress Testing on API.

Would you like me to export this as project.md and include it directly for deployment? 📦✅

