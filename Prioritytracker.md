Ask Kai – Priority Tracker

Production Launch Priorities

1. User Authentication (Secure Login)

[ ] Implement Supabase Auth with Google OAuth

[ ] Create signin.html and signup.html UI

[ ] Lock all pages behind login (except soft-launch accounts)

[ ] Create whitelisted admin access override


2. Material & Pricing Database

[ ] Scrape Bunnings / Bowens websites for materials and pricing

[ ] Design Supabase schema: materials table with category, type, size, unit_price

[ ] Integrate material selection into Kai quoting logic


3. UI & UX Polishing

[x] Finalize chat logic and materials list formatting on index.html

[x] Restore full dropdown menu functionality

[x] Add calculator hub link

[x] Improve Ask Kai profile section & blurb

[ ] Standardize footer, spacing, colors across all pages


4. Feature Expansion

[ ] Create calculators.html interface

[ ] Decking Calculator

[ ] Rafter Calculator

[ ] Stair Stringer Calculator

[ ] Area / Volume Calculator


[ ] Add links and back navigation buttons


5. Content Gate + Launch

[ ] Lock site to only soft-launch testers

[ ] Collect soft launch tester emails

[ ] Launch monitoring & error logging system

[ ] Prepare Stripe plans for production mode


6. Mobile App Conversion (Exported)

[x] Export full front-end ZIP

[ ] Choose stack: React Native vs Capacitor

[ ] Build login & Kai chat for Android/iOS prototype


Notes:

The current index.html is stable and production-ready

settings.html UI now allows supplier entry, profile upload

Supabase schema ready for users, suppliers tables

