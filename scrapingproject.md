Ask Kai – Materials Scraping Project

Objective

To build and maintain a dynamic pricing database for Kai’s material quote engine by scraping real-time or periodically refreshed supplier data.


---

Next Steps – Phase 1: Bunnings First

1. Scraper Setup

[ ] Write Node.js scraper script for:

https://www.bunnings.com.au/products/building-hardware/timber

https://www.bunnings.com.au/products/building-hardware/decking

https://www.bunnings.com.au/products/building-hardware/structural-timber


[ ] Parse product title, size, price, unit, category, supplier

[ ] Output into JSON array format


2. Supabase Integration

[ ] Define materials table schema:

id, name, category, subcategory, size, unit_price, unit, supplier, url, last_updated


[ ] Write API or batch insert method to Supabase


3. Cron + Automation

[ ] Deploy scraping script to Render or cron job scheduler (e.g. GitHub Actions, Railway)

[ ] Update schedule: weekly or biweekly refresh



---

Phase 2: Supplier Expansion

Timber & Decking

[ ] Bowens: https://www.bowens.com.au/shop/building-supplies/timber/


Landscaping

[ ] Daisy’s: https://www.daisysgarden.com.au/products/soil/

[ ] Diaco’s: https://diacos.com.au/product-category/soils-and-mulch/


Electrical

[ ] Middy’s: https://www.middys.com.au/products/category/electrical


Plumbing

[ ] Reece: https://www.reece.com.au/plumbing/

[ ] Plumbed In: https://plumbedin.com.au/product-category/shower-screens/


Concrete

[ ] Economix: https://economix.com.au/concrete/prices/

[ ] Mentone Premix: https://mentonepremix.com.au/our-products/


Paint

[ ] Paint Spot: https://www.paintspot.com.au/product-category/paint/

[ ] Paint Inspirations: https://paintinspirations.com.au/collections/paint


Rubbish Removal / Skip Bins

[ ] BinHireMelbourne: https://www.binhirem.com.au/skip-bins/

[ ] SkipBinHireAustralia: https://www.skipbinhireaustralia.com.au/bin-prices/



---

Metadata Tags Strategy

category: framing, decking, soil, mulch, plumbing, electrical, paint, concrete

supplier: bunnings, bowens, daisy, diacos, reece, middys, etc

unit: m, m2, m3, each, pack

region: default VIC (future expansion)



---

Notes

Prioritize suppliers with public pricing

Log failed or missing prices

Respect rate limits and robots.txt rules

Store last_updated timestamp


Last updated: 2025-05-10

Next action: Start with Bunnings scraper for timber/decking



Scraping project initialized and saved to scrapingproject.md.

Next step: Start with building the Bunnings timber/decking scraper.

a. Want the initial Node.js scraper template now?
b. Or define the Supabase materials schema setup script first?

