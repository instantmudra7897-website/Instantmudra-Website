# Backup Guide — Instant Mudra

## Source-of-truth map

| Asset | Source of truth | Backup location | Frequency |
|---|---|---|---|
| Website code | GitHub repo (`main`) | Google Drive `/InstantMudra/Website-Backups/` | After every release |
| Apps Script code | script.google.com | `script.js` in repo (mirror) | Every change |
| Leads (raw) | Google Sheet | Sheet → File → Make a copy (monthly) | Monthly |
| CRM data | Airtable | Airtable → CSV export per table | Monthly |
| Business docs / marketing assets | Google Drive | Drive is primary; keep local copy of contracts | — |

## Release backup procedure

After each deployment:

1. Download the repo as ZIP (GitHub → Code → Download ZIP) **or** copy the release files.
2. Save to Drive as `Website-Backups/YYYY-MM-DD-description.zip`.
3. Verify the ZIP opens and contains index.html.

## Data backup procedure (monthly, 1st of month)

1. Google Sheet → File → Make a copy → name `Leads-Backup-YYYY-MM`.
2. Airtable → each table → ⋯ → Download CSV → save to Drive `/InstantMudra/CRM-Backups/YYYY-MM/`.

## Restore priorities

1. **Website down** → RECOVERY.md §1 (minutes).
2. **Lead flow broken** → RECOVERY.md §2 (highest business impact — every lost hour is lost leads).
3. **CRM data damaged** → Airtable has built-in revision history (Record → Activity); trash retains deleted records 7 days (free plan).
