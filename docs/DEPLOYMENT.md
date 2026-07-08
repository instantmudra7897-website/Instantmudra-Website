# Deployment Guide — Instant Mudra

## 1. Website (automatic)

Push (or upload) to `main` → GitHub Pages rebuilds in ~1 minute.

Live URL: https://instantmudra7897-website.github.io/Instantmudra-Website/

There is no build step. What is in the repo is what ships.

## 2. Google Apps Script (MANUAL — easy to forget)

Editing `script.js` in this repo does **not** change the live endpoint.

1. Open script.google.com → the lead-capture project.
2. Replace the code with the current contents of `script.js`.
3. **Deploy → Manage deployments → ✏️ Edit → Version: "New version" → Deploy.**
4. Keep the same deployment — do NOT create a new one (that would change the URL and break the form).

Skipping step 3 means the old code keeps running.

## 3. Pre-deployment QA checklist

- [ ] Open index.html locally in a browser — no console errors
- [ ] EMI calculator updates on slider move
- [ ] Eligibility checker returns a result for both tracks
- [ ] Submit a test lead (name "TEST DELETE") → appears in Google Sheet with all columns filled
- [ ] Mobile width (≤768px): hamburger menu opens and closes
- [ ] `robots.txt` and `sitemap.xml` reachable
- [ ] Delete the test lead afterwards

## 4. Post-deployment verification

1. Hard-refresh the live site (Ctrl+Shift+R).
2. Check GitHub → repo → Deployments shows the new build.
3. Submit one real-path test lead per week to catch silent Apps Script failures (no-cors hides errors from users).

## 5. Rollback

See RECOVERY.md. Short version: revert the commit on GitHub, Pages redeploys automatically; Apps Script has its own version history under Manage deployments.
