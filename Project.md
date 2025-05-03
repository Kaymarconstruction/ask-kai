# Ask Kai – Full Project Checklist & Status  
Website: https://ask.kaymarconstruction.com  
Backend: Render | Frontend: Netlify | Stripe: Test Mode  
Owner: Mark Musolino | Dev Assistant: Jack (AI Partner)

---

## ✅ LIVE / WORKING FEATURES

### Core Website
- [x] Landing page with Kai avatar and one-liner
- [x] Sign Up (email/password)
- [x] Sign In with `sessionStorage` auth
- [x] Session redirect to `index.html` if not signed in
- [x] Logout clears session/token state

### Chat System
- [x] Continuous chat with GPT memory
- [x] Australian carpenter persona: Kai Marlow
- [x] Typing animation effect
- [x] Chat scrolls & saves each prompt visually

### Token System
- [x] 25 free prompt cap per user (stored in `localStorage`)
- [x] Token tracking (kaiTokens) for purchased access
- [x] Error messages when limit reached

### Menu / Navigation
- [x] Dropdown menu button styled as black hamburger
- [x] Links to Upgrade, Shop, Settings, Logout

### Stripe + Upgrades
- [x] Stripe test-mode checkout for:
  - Ask Kai Plus
  - Ask Kai Premium
  - Mini (10), Standard (50), Pro (100) token packs
- [x] `?pack=` values added to redirect URLs
- [x] `purchase-complete.html` auto-credits tokens via JS
- [x] Confirmation message based on pack

### Settings Page
- [x] `settings.html` shows:
  - User email
  - Prompts used
  - Tokens remaining
  - Upgrade + logout buttons

---

## ⚠️ IN PROGRESS / HIGH PRIORITY

### Access Lock
- [ ] Limit login access to `mark@kaymarconstruction.com` only (temp lockdown)
- [ ] Other users shown: "Access is currently restricted"

### Menu Buildout
- [ ] Build initial `shop.html` layout for digital content
- [ ] Add placeholders for:
  - `quote-generator.html`
  - `span-tables.html`
  - `apprentice-hub.html`

### Stripe & Token Flow
- [ ] Stripe webhook support (server-side verification)
- [ ] Stripe metadata match to determine token amounts
- [ ] Server-side token sync with `localStorage`

---

## ⏳ UPCOMING FEATURES

### Auth & Users
- [ ] Google sign-in / social login
- [ ] Save prompts per user
- [ ] Forgot password / reset flow
- [ ] Email verification / user roles (free, plus, premium)

### Digital Products
- [ ] Upload, list, and sell digital carpentry books/tools
- [ ] Kindle / Amazon listing walkthrough
- [ ] PDF watermarking with user email
- [ ] Shop menu integration

### Mobile App Build
- [ ] Web wrapper app for iOS + Android
- [ ] Offline mode
- [ ] Token sync & chat access

### Admin & Support
- [ ] Admin dashboard: users, purchases, tokens
- [ ] Support email (support@kaymarconstruction.com)
- [ ] Web traffic tracking
- [ ] Team bio page (Kai, Jack, Mark)

---

_Last updated: 2025-05-03_
