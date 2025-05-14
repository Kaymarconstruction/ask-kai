# 🌐 Project Overview

**Website**: [https://ask.kaymarconstruction.com](https://ask.kaymarconstruction.com)  
**Backend**: Node.js (Render)  
**Frontend**: HTML + Tailwind (Netlify)  
**AI Engine**: OpenAI GPT-3.5  
**Stripe**: Live Mode Active  
**Owner**: Mark Musolino  
**Lead Dev Assistant**: Jack Cooper (AI)  

---

## ✅ LIVE / FUNCTIONAL FEATURES

### Core Website
- [x] Landing Page with Profile Image + Sign In/Up  
- [x] Session-Based Auth with Email Login  
- [x] Google Sign-In / OAuth (Production Ready)  
- [x] Logout + Session Clearing  
- [x] Settings Page (Prompts Used, Token Count, Subscription Tier)  
- [x] Responsive Mobile-First Design  

### Chat System
- [x] Kai Persona with Construction + Code Knowledge  
- [x] Token-Based Prompt Limit (Default 10)  
- [x] Mark's Account Has Unlimited Access  
- [x] Full Chat Interface with Typing Effect  
- [x] Region-Aware Language + Code Guidance  
- [x] Local Storage of Prompt Count  

### Menu Navigation
- [x] Dropdown Menu Styled for Mobile + Desktop  
- [x] Updated: Black Button with White Hamburger Lines  
- [x] Structured Dropdown Menu with Hierarchy  
- [x] Links to Upgrade, Shop, Settings, Apprentice Hub, Quote Generator  
- [x] Logout Button  
- [x] Team Page with Bios and Photos  

### Shop
- [x] Book Listings with Real Cover Art  
- [x] Links to External Amazon/KDP Active  

### Stripe Integration
- [x] Live Payment Links Enabled:
    - Ask Kai Plus ($14.99/mo)
    - Ask Kai Premium ($29.99/mo)
    - Ask Kai Apprentice ($6.99/mo)
    - Token Packs: Mini, Standard, Pro
- [x] Webhook Handler with Stripe Secret Key Deployed  
- [x] Webhook Listens for `checkout.session.completed`  

### Supabase Integration
- [x] Supabase Project Live (Pro Tier)  
- [x] Users, Materials, Suppliers, Calculations Tables Created and Synced  
- [x] Supabase Insert Email on /register Endpoint  
- [x] RLS Enabled and Configured  
- [x] Environment Secrets (SUPABASE_URL + KEY) Added  

---

## ⚙️ IN PROGRESS / PRIORITY DEVELOPMENT

### Quote Generator
- [x] GPT-Powered Material List Generator  
- [x] `/quote` Endpoint with Kai's Quoting Brain  
- [x] HTML Interface Completed  
- [x] Chat History Memory Across Prompts  
- [x] Append Structured Quote Summary in a Live Quote Panel  
- [x] Export to Copy + Disclaimer  
- [x] Export Materials List to Email Supplier (mailto Pre-Filled Message)  
- [x] User-Select Supplier (from Saved Supplier List)  
- [ ] Add Preset Quick-Fill Options in Quote Generator (Common Deck Sizes)  
- [x] Saved Quotes Feature (Stored in Supabase)  

### Calculators
- [x] Span Tables Page  
- [x] Rafter Length Calculator  
- [x] Decking Board Calculator  
- [x] Plasterboard Materials Calculator (Completed)  
- [ ] Volume Calculator for Soil/Concrete/Rubbish  
- [ ] Stair and Balustrade Calculator (UI Present – Logic Pending)  
- [ ] Restrict Calculator Access by Plan Tier (Later Phase)  

### Apprentice Hub
- [x] Banner + Resource List  
- [x] Live Tool Links (Rafter, Span Tables, Decking)  
- [x] Recommended Books Section with External Amazon Links  

### Material Pricing Scraper & Database
- [x] Supabase Schema Created (Materials)  
- [ ] Switch Bunnings + Bowens Scrapers to Puppeteer  
- [x] Focus Bowens as Priority Before Bunnings  
- [ ] Validate Puppeteer Scraper on Render  
- [x] Build GET `/materials?category=` API for Frontend Material List  
- [x] Add Search Endpoint `/materials/search?q=`  
- [x] Add Scrape Source Logging for Audit/Debug  
- [ ] Weekly Scraper Schedule for Bowens Confirmed  

---

## ⏳ UPCOMING FEATURES

### Auth & Membership
- [x] Google Sign-In / OAuth (Live)  
- [ ] Facebook Sign-In (In Setup)  
- [ ] Apple / Microsoft OAuth (Optional)  
- [ ] Reset Password via Email  
- [ ] Save User Chat History (Supabase JSON Storage)  
- [ ] Admin Dashboard to View Users/Emails and Monitor Token Balances  
- [ ] Lock Site to Soft-Launch Participants Only (Whitelist Active)  

### Kai Brain Upgrades
- [x] Quote Generator Brain Now Default on Homepage  
- [ ] Prompt Users for Region/Code Before Answering  
- [ ] Use Defaults for Common Timber, Spacing, Fasteners  
- [ ] Integrate Real Brand Specs (Ekodeck, Hyne, Bunnings)  
- [ ] Shorter, Clearer Answers (20–80 Words)  
- [ ] Accurate Deck/Timber/Spacing Calculations with Location Check  
- [ ] Reuse Session Memory Between Inputs  
- [ ] Fix Kai Response Rendering on Main `index.html`  

### Quotes Management
- [ ] `quotesManager.js` (New Feature)  
    - Manage Saved Quotes  
    - Edit and Resend Quotes  
    - Attach to Suppliers Dynamically  
    - Export as PDF or Email Directly  

### Mobile App
- [x] PWA Web App Wrapper  
- [x] Token Sync + Offline Chat View  
- [x] Mobile UI Now Live in Auth Pages  
- [ ] Facebook Login Support in App  
- [ ] App Store / Google Play Deployment  

### Admin & Support
- [x] Track User Emails in Secure Backend (Supabase ✅)  
- [x] support@kaymarconstruction.com Setup  
- [x] Legal Disclaimers / Terms Page  
- [ ] View Token Balances Server-Side  

---

## 💡 FEATURE IDEAS (BOOKMARKED)
- [ ] Facade & Floorplan Designer GPT (Pro Series Exclusive)  
- [ ] Construction Forum for Verified Users (Moderated)  
- [ ] Scheduler/Calendar Integration with Google Calendar + SMS for Job Bookings  
- [x] Supplier Quote Email Draft (Active)  
- [x] Settings: Add Profile Picture Upload, Display Active Plan, and Allow Saved Supplier Emails  

---

## 🧩 PRE-PRODUCTION LAUNCH CHECKLIST (UPDATED)
- [x] `dotenv` Module Install Confirmed in Deployment (Render)  
- [x] `SUPABASE_URL` and `SUPABASE_KEY` Confirmed on Render Secrets  
- [x] Live `/materials` API Response Tested from Frontend  
- [x] `materials.html` Tested for UI Rendering and Backend Connection  
- [x] Error UI Confirmed (No Results Found, Fetch Fail)  
- [x] Schedule Weekly Refresh of Bowens Confirmed  
- [x] Confirm `.env` File Created and Working Locally  
- [x] Confirm `askkai.js` Running Clean in Terminal with Supabase  
- [x] Stripe Webhook Test Mode Reviewed  
- [x] Menu Dropdown and Nav Links Working Clean on All Pages  
- [x] Mobile Rendering Double-Checked for Layout Breaks  
- [x] Add Instructions to README for Local Test + Deploy  
- [ ] Final Load Test of API Endpoints (`askkai.js`)  
- [ ] Move Supabase Keys to Secure Storage Before Final Production  

---

### 📢 **Next Actions Suggested:**
- Finalize Quotes Manager Logic (`quotesManager.js`).  
- Complete Stair and Volume Calculator Logic.  
- Move all API URLs and Keys to Secure Config Files.  
- Add Missing README Instructions for Devs.  
- Perform Final Load/Stress Testing on API.  

---

**Exported on:** May 14, 2025
