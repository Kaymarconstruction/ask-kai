# Ask Kai – Full Website Status & Development Tracker

Website: https://ask.kaymarconstruction.com  
Backend: Node.js (Render)  
Frontend: HTML + Tailwind (Netlify)  
AI Engine: OpenAI GPT-3.5  
Stripe: Live mode active  
Owner: Mark Musolino  
Lead Dev Assistant: Jack Cooper (AI)  

---

## ✅ LIVE / FUNCTIONAL FEATURES

### Core Website
- [x] Landing Page with profile image + sign in/up
- [x] Session-based auth with email login
- [x] Logout + session clearing
- [x] Settings page (prompts used, token count, subscription tier)
- [x] Responsive mobile-first design

### Chat System
- [x] Kai persona with construction + code knowledge
- [x] Token-based prompt limit (default 10)
- [x] Mark's account has unlimited access
- [x] Full chat interface with typing effect
- [x] Region-aware language + code guidance
- [x] Local storage of prompt count

### Menu Navigation
- [x] Dropdown menu styled for mobile + desktop
- [x] Links to Upgrade, Shop, Settings, Apprentice Hub, Quote Generator
- [x] Logout button
- [x] Team page with bios and photos

### Shop
- [x] Book listings with real cover art
- [x] Links to external Amazon/KDP to be updated after approval

### Stripe Integration
- [x] Live payment links enabled for:
  - Ask Kai Plus ($14.99/mo)
  - Ask Kai Premium ($29.99/mo)
  - Ask Kai Apprentice ($6.99/mo)
  - Token Packs: Mini, Standard, Pro
- [x] Webhook handler with Stripe secret key deployed
- [x] Webhook listens for checkout.session.completed

---

## ⚙️ IN PROGRESS / PRIORITY DEVELOPMENT

### Quote Generator
- [x] GPT-powered material list generator
- [x] `/quote` endpoint with Kai's quoting brain
- [x] HTML interface completed
- [x] Chat history memory across prompts
- [x] Append structured quote summary in a live quote panel
- [x] Export to copy + disclaimer
- [x] Export materials list to email supplier (mailto pre-filled message)
- [x] User-select supplier (from saved email list in settings)

### User Registration
- [x] Register stores emails to Supabase
- [x] Supabase setup with users table
- [x] Connected to backend via supabase-js client
- [ ] Add `/users` admin-only route to list all stored emails
- [ ] Optional: Add email confirmation + welcome email

### Calculators
- [x] Span Tables Page
- [x] Rafter Length Calculator
- [x] Decking Board Calculator
- [ ] Volume calculator for soil/concrete/rubbish
- [ ] Stair and Balustrade (UI present – coming soon)
- [ ] Restrict access by plan tier (later)

### Apprentice Hub
- [x] Banner + resource list
- [x] Live tool links (Rafter, Span Tables, Decking)
- [x] Recommended Books section

### Index Page Fix (NEW)
- [ ] Fix Kai chat logic on `index.html` (
