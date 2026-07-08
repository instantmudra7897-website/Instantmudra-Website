# Security Policy — Instant Mudra

## Rules (non-negotiable)

1. **Never commit secrets** to this repo: Airtable PATs, Google credentials, API keys, GitHub tokens. The repo is public.
2. **Never hard-code tokens in HTML/JS.** The dashboard asks for the Airtable PAT at runtime and stores it only in the operator's browser `localStorage`.
3. Airtable PAT scope must be minimal: `data.records:read` + `data.records:write` on the CRM base only. Rotate at airtable.com/create/tokens if a device is lost.
4. Customer PII (names, phones, incomes) lives in Google Sheets + Airtable — never copy it into the repo, screenshots, or public docs.

## Current exposure (accepted / known)

| Item | Exposure | Risk | Mitigation |
|---|---|---|---|
| Apps Script URL | Public in index.html | Spam submissions possible | Acceptable; add honeypot field if spam appears |
| Airtable Base ID | Visible in dashboard.html | Low — useless without a PAT | Consider removing from public repo |
| dashboard.html | Publicly reachable URL | Structure visible, data is not | `Disallow` in robots.txt; recommend removing navbar link |
| Contact details | Public by design | — | — |

## If a secret leaks

1. Revoke it immediately (Airtable token page / Google account security).
2. Create a replacement with minimal scope.
3. Remove it from git history (`git filter-repo`) — deleting the file is NOT enough on a public repo.
4. Assume it was copied: check Airtable/Sheet revision history for unexpected changes.

## Review checklist before every commit

- [ ] No `pat...`, `AIza...`, `ghp_...` strings in the diff
- [ ] No customer data in committed files
- [ ] Form still posts to the intended Apps Script URL
