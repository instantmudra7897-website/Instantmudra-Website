# Roadmap — Instant Mudra Platform

Goal: the most automated loan-generation platform possible — minimal manual work, maximum lead quality and conversion.

## Now (this month)

- [ ] **Redeploy Apps Script** so the 22-field capture goes live (blocker for everything below).
- [ ] Create GA4 + Microsoft Clarity accounts; paste IDs into index.html placeholders.
- [ ] Register site in Google Search Console; submit sitemap.xml.
- [ ] Set up / verify Google Business Profile (Burari, Delhi) — biggest local-SEO lever for a DSA.
- [ ] Remove Dashboard link from public navbar (keep direct URL for staff).

## Next (1–3 months)

- [ ] Thank-you page after form submit → enables conversion tracking per source (JustDial vs Google vs referral ROI).
- [ ] Auto-sync Google Sheet → Airtable via Apps Script trigger (kill manual copying).
- [ ] Email/WhatsApp notification to staff on new lead (Apps Script `MailApp` first — free, 5-minute build).
- [ ] Lead scoring in Airtable: formula on amount, property ownership, vintage, ITR → High/Medium/Low priority.
- [ ] Duplicate detection: flag repeat phone numbers on entry.
- [ ] Daily lead-summary email (count by source and product).

## Later (3–6 months)

- [ ] Dedicated landing pages per product (LAP, Business Loan, Home Loan) for SEO + ad campaigns.
- [ ] Blog / content hub targeting "loan against property Delhi"-type queries.
- [ ] WhatsApp Business API automated follow-up sequences.
- [ ] n8n / Make.com pipeline: lead → assignment → reminders → status updates.
- [ ] Referral program page with tracked referral codes (referrer field already captured).
- [ ] Monthly KPI dashboard: leads, conversion, approval rate, ticket size, revenue, marketing ROI.

## Principles

Ship small and verify live; never break the lead form (it is the business); every feature must reduce manual work or increase conversions — otherwise it waits.
