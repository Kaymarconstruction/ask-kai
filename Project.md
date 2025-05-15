# PROJECT.md - Ask.KaymarConstruction.com Production Sign-Off

## Project Overview
**Owner:** Mark - Kaymar Construction  
**Lead Dev:** Code GPT  
**Objective:** Launch AI-powered construction assistant with subscriptions, calculators, and productivity tools.

---

## Current Stack
- **Frontend:** Netlify  
- **Backend/API:** Render  
- **Database/Storage:** Supabase  
- **AI Brain:** OpenAI API (To be integrated)  
- **Payments:** Stripe (Webhook Integrated)  

---

## Database Tables

| Table Name   | Status      |
|--------------|-------------|
| users        | ✅ Confirmed |
| suppliers    | ✅ Confirmed |
| materials    | ✅ Confirmed |
| calculations | ✅ Confirmed |

---

## Development Progress

| Component      | Status      | Notes |
|----------------|-------------|-------|
| signin.html    | ✅ Finalized | UI/UX polished, Supabase Auth integrated, Social Auth working. |
| signup.html    | ✅ Finalized | UI/UX polished, Supabase Auth integrated, Social Auth working. |
| askkai.js      | ⏳ Pending   | Next task: Integrate calculations & materials logic. |
| quote.html     | ⏳ Pending   | Requires supplier and material integration. |
| settings.html  | ⏳ Pending   | Manage saved contacts, quotes, suppliers, and emails. |

---

## Stripe Webhook Integration
- **Endpoint:** https://askkai-backend-clean.onrender.com/webhook  
- **Event:** `checkout.session.completed` (Confirmed)  
- **Secrets Management:**  
```env
STRIPE_SECRET_KEY=sk_live_***********  
STRIPE_WEBHOOK_SECRET=whsec_***********
