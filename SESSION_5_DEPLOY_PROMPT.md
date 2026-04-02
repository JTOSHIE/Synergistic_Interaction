# SYNERGISTIC INTERACTION — SESSION 5: LOCAL PREVIEW + VERCEL DEPLOYMENT
## Claude Code Directive: Run site locally, fix visual issues, deploy to Vercel
### Do not stop. Do not ask for confirmation. Fix errors as encountered.

---

## CONTEXT

The website code is complete and `npm run build` passes. It has never been viewed in a browser.
This session: run it locally, fix any runtime/visual issues, then deploy to Vercel for a live preview URL.

**Working directory:** `~/Documents/Synergistic_Interaction/DEVELOPMENT`
**Repository:** `https://github.com/JTOSHIE/Synergistic_Interaction`
**Target outcome:** A live Vercel preview URL Joshua can open in any browser

---

## TASK 1: START LOCAL DEV SERVER AND VERIFY ALL PAGES LOAD

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
npm run dev
```

Wait for "Ready" message. The server will be at http://localhost:3000.

While the dev server runs, open a **second terminal tab** and use `curl` to verify each page returns HTTP 200:

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/our-approach
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/why-compliance-matters
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/get-started
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/zh
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/sitemap.xml
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/robots.txt
```

Every page must return 200. If any return 500, read the terminal error output and fix the file causing the error.

Stop the dev server with Ctrl+C once all pages verify as 200.

---

## TASK 2: FIX KNOWN POTENTIAL RUNTIME ISSUES

Check for and fix these specific issues that pass TypeScript build but can fail at runtime:

### Issue A — ScrollToTop import missing from layout

Verify `app/layout.tsx` imports and renders `<ScrollToTop />`. Open the file and check:

```bash
grep -n "ScrollToTop" app/layout.tsx
```

If it returns nothing, add the import and component:

Open `app/layout.tsx` and:
1. Add after the last import line: `import ScrollToTop from '@/components/ScrollToTop';`
2. Add before `</body>`: `<ScrollToTop />`

### Issue B — @vercel/analytics import

Verify the Analytics import works:

```bash
grep -n "Analytics" app/layout.tsx
```

If it shows `@vercel/analytics/react`, verify the package is installed:

```bash
ls node_modules/@vercel/analytics 2>/dev/null && echo "installed" || echo "missing"
```

If missing:
```bash
npm install @vercel/analytics
```

### Issue C — next/image domains for logo.svg

The logo uses `next/image` for SVGs. Verify it loads without warnings. If there are image warnings:

In `next.config.ts`, add to the `images` config:
```typescript
images: {
  formats: ['image/avif', 'image/webp'],
  dangerouslyAllowSVG: true,
  contentDispositionType: 'attachment',
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
}
```

### Issue D — Missing closing fragment in ComponentAccordion

```bash
grep -n "</>" components/ComponentAccordion.tsx
```

There should be exactly one `</>` closing the outer fragment. If missing, add it before the final `);`.

### Issue E — ComplianceVisualization canvas aspect ratio on mobile

Verify the canvas element has correct responsive sizing:

```bash
grep -n "aspect-video" components/ComplianceVisualization.tsx
```

Should return one result. If missing, the canvas will have zero height.

---

## TASK 3: GENERATE OG IMAGE

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT/public
```

Open `og-image.html` in Safari to screenshot it, OR use Node to generate it:

```bash
# Check if puppeteer is available globally
npx puppeteer --version 2>/dev/null || echo "not installed"
```

If puppeteer is available, generate the PNG:

```bash
node -e "
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto('file://' + process.cwd() + '/og-image.html');
  await page.screenshot({ path: 'og-image.png' });
  await browser.close();
  console.log('og-image.png generated');
})();
"
```

If puppeteer is not available, skip — this is a post-launch task.

---

## TASK 4: CREATE VERCEL DEPLOYMENT CONFIGURATION

Create the `.vercelignore` file to exclude development-only files:

**File:** `~/Documents/Synergistic_Interaction/DEVELOPMENT/.vercelignore`

```
.env.local
.env*.local
*.md
node_modules
.next
```

Verify `vercel.json` exists and is correct:

```bash
cat vercel.json
```

Should show the cron configuration and security headers. If the file is missing, create it:

**File:** `~/Documents/Synergistic_Interaction/DEVELOPMENT/vercel.json`

```json
{
  "crons": [
    {
      "path": "/api/regulatory-feed/ingest",
      "schedule": "0 20 * * *"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## TASK 5: INSTALL VERCEL CLI AND DEPLOY

```bash
npm install -g vercel
```

Verify installation:

```bash
vercel --version
```

Log in to Vercel (this will open a browser for authentication):

```bash
vercel login
```

Select "Continue with GitHub" when prompted. Authorise in the browser that opens.

---

## TASK 6: DEPLOY TO VERCEL (PREVIEW)

From the DEVELOPMENT directory:

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
vercel
```

When prompted, answer:

- **Set up and deploy?** → `Y`
- **Which scope?** → Select the account (jtoshie or personal)
- **Link to existing project?** → `N` (first deployment)
- **Project name?** → `synergistic-interaction`
- **In which directory is your code located?** → `./` (current directory — DEVELOPMENT is the root)
- **Want to modify settings?** → `N`

Wait for deployment to complete. It will print a preview URL like:
`https://synergistic-interaction-abc123.vercel.app`

Save that URL — that is the preview link Joshua can open.

---

## TASK 7: SET ENVIRONMENT VARIABLES ON VERCEL

After deployment, set the minimum required environment variables so the site functions correctly on the preview URL:

```bash
vercel env add NEXT_PUBLIC_SITE_URL
```
When prompted for value, enter:
```
https://synergistic-interaction.vercel.app
```
When asked which environments, select: **Production, Preview, Development**

```bash
vercel env add CONTACT_DESTINATION_EMAIL
```
Value:
```
joshua@synergisticinteraction.com.au
```
Environments: Production, Preview, Development

---

## TASK 8: TRIGGER A PRODUCTION DEPLOYMENT WITH ENV VARS

The first `vercel` command created a preview deployment. To create a production deployment with the env vars applied:

```bash
vercel --prod
```

Wait for completion. It will print a production URL like:
`https://synergistic-interaction.vercel.app`

---

## TASK 9: VERIFY LIVE DEPLOYMENT

Check all pages on the live URL (replace the URL with the actual one printed in Task 8):

```bash
LIVE_URL="https://synergistic-interaction.vercel.app"

curl -s -o /dev/null -w "Home: %{http_code}\n" "$LIVE_URL"
curl -s -o /dev/null -w "Our Approach: %{http_code}\n" "$LIVE_URL/our-approach"
curl -s -o /dev/null -w "Why Compliance: %{http_code}\n" "$LIVE_URL/why-compliance-matters"
curl -s -o /dev/null -w "Get Started: %{http_code}\n" "$LIVE_URL/get-started"
curl -s -o /dev/null -w "Mandarin: %{http_code}\n" "$LIVE_URL/zh"
curl -s -o /dev/null -w "Sitemap: %{http_code}\n" "$LIVE_URL/sitemap.xml"
curl -s -o /dev/null -w "Robots: %{http_code}\n" "$LIVE_URL/robots.txt"
```

All should return 200. If any return 500, check Vercel logs:

```bash
vercel logs --prod
```

Fix errors and redeploy with `vercel --prod`.

---

## TASK 10: FINAL COMMIT AND STATUS REPORT

Commit any fixes made during this session:

```bash
cd ~/Documents/Synergistic_Interaction
git add -A
git status
```

Only commit if there are actual changes:

```bash
git diff --staged --stat
```

If there are changes:

```bash
git commit -m "Session 5: runtime fixes, vercel config, deployment

- Fixed any runtime errors found during local dev server test
- Added .vercelignore
- Verified all 7 pages return HTTP 200
- Deployed to Vercel production"

git push origin main
```

---

## TASK 11: PRINT FINAL STATUS REPORT

After completing all tasks, print the following report filling in the actual values:

```
═══════════════════════════════════════════════════
SYNERGISTIC INTERACTION — SESSION 5 COMPLETE
═══════════════════════════════════════════════════

LOCAL DEV:
  All pages verified: [ yes / no ]
  Runtime errors fixed: [ list them or "none" ]

VERCEL DEPLOYMENT:
  Preview URL: [paste URL here]
  Production URL: [paste URL here]
  All pages HTTP 200: [ yes / no ]
  Errors encountered: [ list or "none" ]

ENVIRONMENT VARIABLES SET:
  NEXT_PUBLIC_SITE_URL: [ yes / no ]
  CONTACT_DESTINATION_EMAIL: [ yes / no ]

STILL REQUIRED BEFORE FULL LAUNCH:
  1. Resend API key → contact form sends emails
  2. OpenAI API key → regulatory feed goes live
  3. Vercel KV → feed stores approved items
  4. Domain DNS → synergisticinteraction.com.au points to Vercel
  5. Component copy sign-off (components 1,2,4,5,6,7)
  6. ABN number for footer
  7. Logo final approval or replacement

NEXT SESSION:
  - Visual review of live site
  - Mobile responsiveness check
  - Wire up contact form email (Resend)
  - Custom domain setup
═══════════════════════════════════════════════════
```
