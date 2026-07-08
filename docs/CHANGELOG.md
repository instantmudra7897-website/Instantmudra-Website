# Changelog — Instant Mudra Website

All notable changes to this project. Format: date, change, impact.

## 2026-07-08 — Lead-data fix + SEO + mobile release (commit e6ee882)

### Fixed
- **Critical: lead data loss.** Apps Script saved only 6 of 17 form fields (and one, `data.type`, never existed — column was always blank). Now captures all 22 fields including state, email, property details, business financials.
- **Mobile navigation missing.** Nav links disappeared below 768px with no fallback; added hamburger menu.

### Added
- Marketing attribution: UTM / gclid / referrer capture; leads auto-tagged JustDial / Google Organic / Google Ads / Campaign / Referral / Direct.
- SEO pack: canonical URL, Open Graph tags, JSON-LD `FinancialService` schema, favicon, `robots.txt` (dashboard excluded), `sitemap.xml`.
- GA4 + Microsoft Clarity placeholder snippets (commented TODO in `<head>`).
- `README.md` rewritten with Apps Script deployment guide.
- `/docs` folder (this documentation set).

### Action required
- Redeploy Apps Script (new version) — repo copy is a mirror only.
- Add GA4 / Clarity IDs when accounts are created.

## Earlier history (pre-changelog)

- 2026-06: "Final PRO working website" — landing page, EMI calculator, dual-track eligibility checker, lead form with conditional fields, CRM dashboard (Airtable), WhatsApp float.
- Initial: repo created, GitHub Pages enabled.

## 2026-07-08 (later) — Redesign + analytics + pipeline verification

### Added
- Premium redesign: midnight ink + emerald palette, hero photography, trust-stats strip, SVG line icons, Plus Jakarta Sans (commit 8e21cfd).
- Google Analytics 4 (G-8G6S4396RX) with `generate_lead` conversion event carrying loan type, source, and amount (commit b1cfcc2).
- Microsoft Clarity tracking.

### Fixed
- Website form pointed at a deleted Apps Script deployment; repointed to the new Version 3 endpoint (commit 5edbbeb).
- Apps Script web app access was "Only myself", silently rejecting all submissions; changed to "Anyone" and verified doPost end-to-end (test lead processed in 1.8s).

### Verified
- Full pipeline: form POST → Apps Script → Google Sheet + owner alert + auto-reply. Airtable sync pending token on line 3.
