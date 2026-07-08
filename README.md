# InstantMudra Website

Loan distribution (DSA) website — LAP, Business, Home & Personal Loans. Delhi & Pan-India.

## Files
- `index.html` — main site (landing, EMI calculator, eligibility checker, lead form)
- `dashboard.html` — internal CRM dashboard (Airtable-backed; not indexed)
- `script.js` — Google Apps Script code for lead capture (copy into script.google.com)
- `robots.txt`, `sitemap.xml` — SEO

## Lead flow
Website form → Apps Script Web App → Google Sheet (all 22 fields incl. UTM/referrer attribution) → Airtable CRM

## ⚠️ Deploying Apps Script changes
Updating `script.js` in this repo does NOT update the live endpoint. You must:
1. Open script.google.com → your lead-capture project
2. Replace the code with the contents of `script.js`
3. Deploy → Manage deployments → ✏️ Edit → Version: **New version** → Deploy

## Analytics
GA4 and Microsoft Clarity snippets are in `index.html` `<head>` as commented TODO blocks — paste your IDs and uncomment.

## Changelog
- 2026-07-08: Fixed lead data loss (Apps Script now saves all form fields), added UTM/referrer source tracking, mobile hamburger menu, SEO pack (canonical, Open Graph, JSON-LD FinancialService schema, robots.txt, sitemap.xml, favicon), analytics placeholders.
