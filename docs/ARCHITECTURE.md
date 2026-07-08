# Architecture — Instant Mudra Platform

## Overview

Instant Mudra is a loan-distribution (DSA) platform built on a zero-cost, low-maintenance stack: static frontend, serverless lead capture, spreadsheet + Airtable CRM.

```
Visitor
  │
  ▼
GitHub Pages (index.html)          ← this repo, auto-deploys from main
  │  lead form (JSON POST, no-cors)
  ▼
Google Apps Script Web App         ← code mirrored in script.js
  │  appendRow (22 columns)
  ▼
Google Sheet ("Leads")             ← raw lead log
  │  (manual / future sync)
  ▼
Airtable CRM (base appZpq15iDiYBLLrA)
  ▲
  │  Airtable REST API (PAT stored in browser localStorage)
dashboard.html                     ← internal CRM dashboard (noindex, internal use)
```

## Components

| Component | Tech | Location | Deploys via |
|---|---|---|---|
| Website | HTML/CSS/JS, single file | `index.html` | GitHub Pages (push to `main`) |
| CRM dashboard | HTML/JS + Airtable API | `dashboard.html` | GitHub Pages |
| Lead capture | Google Apps Script | `script.js` (mirror) | Manual redeploy in script.google.com |
| Lead store | Google Sheet | Google account | — |
| CRM | Airtable | base `appZpq15iDiYBLLrA` | — |
| SEO | robots.txt, sitemap.xml, JSON-LD | repo root / index head | GitHub Pages |

## Key design decisions

- **Single-file pages, no build step.** Inline CSS/JS keeps deploys trivial and Core Web Vitals fast (no render-blocking assets, system fonts only).
- **`no-cors` form POST.** The browser cannot read the Apps Script response, so the form always shows success. Trade-off accepted for zero-backend simplicity; mitigate by checking the Sheet daily.
- **Attribution captured client-side.** UTM/gclid/referrer stored in `sessionStorage` on first landing, attached to every lead.
- **`script.js` is a mirror, not the live endpoint.** The live code runs in script.google.com — see DEPLOYMENT.md.

## Data contract (form → Apps Script)

22 fields: `timestamp, name, phone, email, state, product, amount, proptype, proploc, propval, vintage, turnover, gst, itr, income, emis, source, utm_source, utm_medium, utm_campaign, gclid, referrer`.

Changing form field IDs in `index.html` requires a matching change in `script.js` **and** a new Apps Script deployment.
