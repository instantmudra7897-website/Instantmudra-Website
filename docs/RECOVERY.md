# Recovery / Troubleshooting Guide — Instant Mudra

## 1. Website is down or broken after a change

**Fast rollback (no tools needed):**
1. GitHub → repo → Commits → click the last good commit.
2. Browse files → download the broken file's good version → upload it back via "Add file → Upload files" (overwrites).
3. Or: click ⋯ on the bad commit → Revert (if available) / use `git revert <sha>` locally.
4. Pages redeploys automatically in ~1 minute. Hard-refresh (Ctrl+Shift+R).

**Pages not building:** repo → Settings → Pages → confirm Source = `main`; check the Deployments panel for errors.

## 2. Leads are not arriving in the Google Sheet

Highest-priority failure — the form always shows "success" to visitors (no-cors), so this fails silently.

1. Submit a test lead yourself. Wait 1 minute, check the Sheet.
2. script.google.com → project → **Executions**: look for failed `doPost` runs and the error text.
3. Common causes:
   - Apps Script redeployed as a **new deployment** → URL changed → update `APPS_SCRIPT_URL` in index.html, or redeploy as new *version* of the old deployment.
   - Sheet renamed/moved, or the script's linked spreadsheet changed.
   - `JSON.parse` error → someone changed form field names without updating the script.
4. Rollback: Deploy → Manage deployments → ✏️ → pick a previous **Version** → Deploy.

## 3. Dashboard shows no data

1. Airtable PAT expired/revoked → create a new token (scopes: `data.records:read`, `data.records:write`), enter it in dashboard Settings.
2. Base ID changed or table renamed → check dashboard code constants vs Airtable.
3. Rate limit (5 req/s/base) → wait and reload.

## 4. Airtable data damaged or deleted

- Single records: record → Activity history → restore field values.
- Deleted records: base trash (clock icon) — retained ~7 days on free plan.
- Bulk damage: restore from the latest monthly CSV in Drive `/InstantMudra/CRM-Backups/`.

## 5. Emergency contacts / access

- GitHub account: instantmudra7897-website
- Apps Script + Sheet + Drive: business Google account (dhiren.igral007@gmail.com)
- Airtable base: appZpq15iDiYBLLrA
- If locked out of Google: account recovery first — it holds the lead pipeline.
