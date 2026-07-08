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
