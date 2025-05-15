# PROJECT.md - Ask.KaymarConstruction.com Production Sign-Off

## Project Overview
**Owner:** Mark - Kaymar Construction  
**Lead Dev:** Code GPT  
**Objective:** Launch AI-powered construction assistant with subscriptions, calculators, and generation tools.

---

## Current Stack & Services

| Service     | Details          |
|--------------|------------------|
| Frontend     | Netlify (`askkai`) |
| Backend/API  | Render (`askkai_backend_clean`) |
| Database     | Supabase (`askkai-db`) |
| AI Engine    | OpenAI (Integration Pending) |

---

## Supabase Configuration

- **SUPABASE_URL:**  
  `https://ndvmxpkoyoimibntetef.supabase.co`

- **SUPABASE_KEY (anon public):**  
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kdm14cGtveW9pbWlibnRldGVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MDgxODksImV4cCI6MjA2MjA4NDE4OX0.-U4Jfb33aFfoAec-fhhFqjHExezWcKoEYwkSVgibjE4`

- **Supabase Project Name:** `askkai-db`  
- **Deployment Status:** Confirmed present on both Netlify & Render

---

## Auth & API Integrations

| Service     | Details                |
|--------------|------------------------|
| Facebook App ID | `2841591242694736` (Development Mode) |
| Google Client ID | `713262892255-cnmp61htnsg5lfenuurj2a8g3ha0jafg.apps.googleusercontent.com` |
| Google Browser Key | `AIzaSyAe36e1KpVN8JjLVU30D1rBHYB-EXI9J7U` |

---

## Database Tables (Confirmed)

| Table Name   | Status    |
|--------------|-----------|
| users        | ✅ Confirmed |
| suppliers    | ✅ Confirmed |
| materials    | ✅ Confirmed |
| calculations | ✅ Confirmed |

---

## Current Development Tasks

| File          | Status  | Description |
|----------------|---------|-------------|
| signin.html    | 🔧 Pending | UI Fix, Enhance Social Buttons, Supabase Auth Integration |
| signup.html    | 🔧 Pending | Same as above |
| askkai.js      | 🔧 Pending | Integrate Calculations & Material Tables for Project Calculations |
| quote.html     | 🔧 Pending | Supplier Fetching, Material Pricing Logic |
| settings.html  | 🔧 Pending | Manage Contacts, Suppliers, Quotes, and Emails via Supabase |

---

## Outstanding Items Before Auth Page Work

1. ✅ Supabase Config Confirmed (Across Netlify & Render).  
2. ✅ All Required Environment Keys Provided.  
3. ❓ **Final Check: Is Payment Gateway Selected? (e.g., Stripe, PayPal?)**  
4. ❓ **Do you have a preferred CSS framework (Tailwind, Bootstrap) or should I optimize based on existing styles?**  
5. ❓ **Would you like a standardized `.env` example prepared for local testing?**

---

## Command to Refresh My Context:
