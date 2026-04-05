# SYNERGISTIC INTERACTION — CLAUDE CODE SESSION 14
## Domain DNS · ABN Footer · Real Regulatory RSS Feeds · Contact Form Email
### Document version: 1.0 | Created: April 2026

---

## PRE-AUTHORISATIONS — READ FIRST, APPLY FOR THE ENTIRE SESSION

All of the following are pre-authorised. Do not ask for confirmation on any of them at any point:

- ✅ Overwrite ANY existing file without asking
- ✅ Create ANY new file without asking
- ✅ Run `npm install` for any package without asking
- ✅ Run `vercel --prod` without asking
- ✅ Run `git add`, `git commit`, `git push` without asking
- ✅ Fix TypeScript errors autonomously without asking
- ✅ Continue past any build warning without asking
- ✅ Run `npm run build` and `npm run dev` without asking
- ✅ Update any content, copy, or configuration without asking

**Working directory:** `~/Documents/Synergistic_Interaction/DEVELOPMENT`
**Repo:** https://github.com/JTOSHIE/Synergistic_Interaction
**Live URL:** https://synergistic-interaction.vercel.app
**Target domain:** https://synergisticinteraction.com.au
**Branch:** main

Execute every task below in order without stopping. If a build error occurs, fix it autonomously and continue.

---

## STEP 0 — ORIENTATION

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT

# Confirm git state
git log --oneline -3
git status

# Find key files
find . -name "Footer*" -not -path "*/node_modules/*"
find . -name "regulatory-sources*" -not -path "*/node_modules/*"
find . -name "regulatory-feed*" -not -path "*/node_modules/*" -not -path "*/.next/*"
find . -name ".env*" -not -path "*/node_modules/*" -maxdepth 2

# Check current env example
cat .env.example 2>/dev/null || echo "no .env.example found"
cat .env.local 2>/dev/null || echo "no .env.local found"
```

Read all output before proceeding.

---

## TASK 1 — Add custom domain to Vercel

Connect `synergisticinteraction.com.au` to this Vercel project so the real domain resolves.

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
vercel domains add synergisticinteraction.com.au
```

Also add the www subdomain:
```bash
vercel domains add www.synergisticinteraction.com.au
```

Read the output carefully. Vercel will confirm the domain is added and may show DNS configuration instructions — the DNS A records have already been updated at Crazy Domains to point to `76.76.21.21` so this should propagate automatically within a few hours.

If Vercel asks to link to a project, confirm the Synergistic_Interaction project.

---

## TASK 2 — Update NEXT_PUBLIC_SITE_URL environment variable

The site URL environment variable must now use the real domain, not the Vercel subdomain.

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT

# Update in Vercel (production)
vercel env rm NEXT_PUBLIC_SITE_URL production --yes 2>/dev/null || true
echo "https://synergisticinteraction.com.au" | vercel env add NEXT_PUBLIC_SITE_URL production

# Update local .env.local
sed -i '' 's|NEXT_PUBLIC_SITE_URL=.*|NEXT_PUBLIC_SITE_URL=https://synergisticinteraction.com.au|g' .env.local 2>/dev/null || echo "NEXT_PUBLIC_SITE_URL=https://synergisticinteraction.com.au" >> .env.local
```

Verify:
```bash
grep "NEXT_PUBLIC_SITE_URL" .env.local
```

---

## TASK 3 — Replace ABN placeholder in Footer

Open `components/Footer.tsx`. Find the line containing `ABN: [pending registration]` or similar placeholder text.

Replace with the confirmed ABN:

```
ABN: 33 686 618 397
```

The full footer copyright line must read:
```
© 2025 Synergistic Interaction Pty Ltd — ABN 33 686 618 397. All rights reserved.
```

After editing, verify:
```bash
grep "ABN" components/Footer.tsx
```

Result must show `33 686 618 397` with no placeholder text remaining.

---

## TASK 4 — Wire real regulatory RSS feeds into lib/regulatory-sources.ts

The regulatory feed currently uses placeholder/AI-generated articles. Replace the entire sources configuration with real, verified, live RSS feed URLs from Australian regulatory bodies.

Open `lib/regulatory-sources.ts`. Read it in full to understand the current structure, then replace the sources array with the verified feeds below.

**The structure to use — adapt to whatever interface/type is already defined in the file:**

```typescript
// lib/regulatory-sources.ts
// Real Australian regulatory RSS feeds — verified April 2026
// All URLs confirmed live from official government sources

export const regulatorySources = [
  {
    id: 'accc-product-safety-all',
    name: 'ACCC Product Safety — All Recalls',
    url: 'https://www.productsafety.gov.au/rss/recalls.xml',
    category: 'product-safety',
    description: 'All consumer product recalls published by ACCC Product Safety Australia',
    priority: 1,
  },
  {
    id: 'accc-product-safety-baby',
    name: 'ACCC Product Safety — Baby & Toddler Products',
    url: 'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10001',
    category: 'product-safety',
    description: 'Recalls specific to baby and toddler products — highest priority category',
    priority: 1,
  },
  {
    id: 'accc-product-safety-electrical',
    name: 'ACCC Product Safety — Electronics & Batteries',
    url: 'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10035',
    category: 'product-safety',
    description: 'Recalls for electronics, batteries, lithium-ion, and button battery products',
    priority: 1,
  },
  {
    id: 'accc-product-safety-home-garden',
    name: 'ACCC Product Safety — Home & Garden',
    url: 'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10044',
    category: 'product-safety',
    description: 'Recalls for home appliances, garden tools, outdoor furniture, and barbecues',
    priority: 2,
  },
  {
    id: 'accc-product-safety-kids-toys',
    name: 'ACCC Product Safety — Kids Toys',
    url: 'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10067',
    category: 'product-safety',
    description: 'Recalls for all children\'s toy categories',
    priority: 1,
  },
  {
    id: 'accc-product-safety-clothing',
    name: 'ACCC Product Safety — Clothing & Textiles',
    url: 'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10024',
    category: 'product-safety',
    description: 'Recalls for clothing including children\'s nightwear flammability',
    priority: 2,
  },
  {
    id: 'accc-product-safety-compulsory',
    name: 'ACCC Product Safety — Compulsory Recalls',
    url: 'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A40159',
    category: 'product-safety',
    description: 'Mandatory compulsory recalls issued by the ACCC — highest severity',
    priority: 1,
  },
  {
    id: 'cav-news-alerts',
    name: 'Consumer Affairs Victoria — News Alerts',
    url: 'https://www.consumer.vic.gov.au/RSS.aspx?RssType=newsalerts',
    category: 'regulatory-news',
    description: 'Consumer Affairs Victoria news alerts for businesses and consumers',
    priority: 2,
  },
  {
    id: 'cav-legislation-updates',
    name: 'Consumer Affairs Victoria — Legislation Updates',
    url: 'https://www.consumer.vic.gov.au/RSS.aspx?RssType=legislationupdates',
    category: 'regulatory-news',
    description: 'Legislative changes affecting Victorian retailers and traders',
    priority: 2,
  },
  {
    id: 'cav-court-actions',
    name: 'Consumer Affairs Victoria — Court Actions',
    url: 'https://www.consumer.vic.gov.au/RSS.aspx?RssType=courtactions',
    category: 'enforcement',
    description: 'Court actions taken by Consumer Affairs Victoria against businesses',
    priority: 1,
  },
  {
    id: 'cav-public-warnings',
    name: 'Consumer Affairs Victoria — Public Warnings',
    url: 'https://www.consumer.vic.gov.au/RSS.aspx?RssType=publicwarnings',
    category: 'enforcement',
    description: 'Public warnings issued by the Director of Consumer Affairs Victoria',
    priority: 1,
  },
  {
    id: 'cav-enforceable-undertakings',
    name: 'Consumer Affairs Victoria — Enforceable Undertakings',
    url: 'https://www.consumer.vic.gov.au/RSS.aspx?RssType=enforceableundertakings',
    category: 'enforcement',
    description: 'Enforceable undertakings — formal compliance commitments from businesses',
    priority: 2,
  },
];

export type RegulatorySource = typeof regulatorySources[number];
```

**Critical:** Preserve the existing type definitions, interfaces, and any AI prompt string already in the file. Only replace the sources array itself. Do not remove the AI parsing prompt or the OpenAI pipeline configuration — those are still needed for the feed ingest route.

After updating, verify the file exports correctly:
```bash
grep -n "productsafety.gov.au\|consumer.vic.gov.au" lib/regulatory-sources.ts | head -20
```

All lines must show real government URLs — no placeholder or example.com URLs remaining.

---

## TASK 5 — Remove placeholder articles from the regulatory feed API route

The feed API route at `app/api/regulatory-feed/route.ts` likely returns hardcoded placeholder articles as a fallback when KV storage is empty. These fake articles must be replaced with a message that real feed data is pending, or with a live fetch from the RSS sources directly.

Open `app/api/regulatory-feed/route.ts`. Read it in full.

**Option A — if the route returns hardcoded placeholder items:**
Replace the placeholder items array with an empty array and a status message:

```typescript
// No placeholder items — feed shows live data from regulatory RSS sources
// or empty state when KV has not yet been populated
const items: FeedItem[] = [];
```

Update the response to return:
```typescript
return NextResponse.json({
  items: [],
  lastUpdated: null,
  status: 'pending',
  message: 'Regulatory feed initialising — live data will appear after first scheduled ingest.',
});
```

**Option B — if the route already has a clean empty-state fallback:**
No change needed. Document as confirmed working.

After updating, run:
```bash
grep -n "placeholder\|example\|fake\|lorem\|ipsum\|test article" app/api/regulatory-feed/route.ts
```

Result must be zero matches.

---

## TASK 6 — Wire the contact form email via Resend

The contact form at `/get-started` validates and submits but currently only logs to console — no email is sent. This task wires up real email sending via Resend.

### Step 1 — Install Resend SDK

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
npm install resend
```

### Step 2 — Open the contact API route

Open `app/api/contact/route.ts`. Read it in full.

### Step 3 — Add Resend email sending

Find the section in the route where it currently logs the submission to console (something like `console.log('Contact form submission:', data)`). Replace that section with real email sending:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Inside the POST handler, after validation passes:
const { data: emailData, error: emailError } = await resend.emails.send({
  from: 'Website <noreply@synergisticinteraction.com.au>',
  to: [process.env.CONTACT_DESTINATION_EMAIL ?? 'jt@synergisticinteraction.com.au'],
  replyTo: body.email,
  subject: `Category Assessment Request — ${body.organisation ?? body.name}`,
  html: `
    <h2>New Category Assessment Request</h2>
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Organisation:</strong> ${body.organisation ?? '—'}</p>
    <p><strong>Role:</strong> ${body.role ?? '—'}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone ?? '—'}</p>
    <p><strong>Categories:</strong> ${Array.isArray(body.categories) ? body.categories.join(', ') : (body.categories ?? '—')}</p>
    <p><strong>Message:</strong><br>${body.message ?? '—'}</p>
    <p><strong>Referral:</strong> ${body.referral ?? '—'}</p>
    <hr>
    <p style="color:#888;font-size:12px;">Submitted via synergisticinteraction.com.au/get-started</p>
  `,
});

if (emailError) {
  console.error('Resend error:', emailError);
  // Still return success to the user — log the error server-side
}
```

**Important:** If the file already has Resend code that is commented out (lines starting with `//`), uncomment those lines instead of rewriting. The original implementation may already be correct — read the file first.

### Step 4 — Update .env.local

```bash
# Add RESEND_API_KEY placeholder if not already present
grep -q "RESEND_API_KEY" .env.local || echo "RESEND_API_KEY=your_resend_api_key_here" >> .env.local
grep -q "CONTACT_DESTINATION_EMAIL" .env.local || echo "CONTACT_DESTINATION_EMAIL=jt@synergisticinteraction.com.au" >> .env.local
```

### Step 5 — Add environment variables to Vercel

```bash
# CONTACT_DESTINATION_EMAIL
echo "jt@synergisticinteraction.com.au" | vercel env add CONTACT_DESTINATION_EMAIL production

# Note: RESEND_API_KEY must be added manually after obtaining the key from resend.com
# Command to run after getting the key:
# echo "your_actual_key" | vercel env add RESEND_API_KEY production
```

Print a reminder at the end of this task:
```
⚠️  RESEND_API_KEY must still be added to Vercel manually.
    1. Go to resend.com — sign up free
    2. Create an API key
    3. Run: echo "re_xxxx..." | vercel env add RESEND_API_KEY production
    4. Then redeploy: vercel --prod
```

---

## TASK 7 — Update sitemap and canonical URLs

The sitemap likely still references the Vercel subdomain. Update it to use the real domain.

Open `app/sitemap.ts`. Find any hardcoded reference to `synergistic-interaction.vercel.app`. Replace with `synergisticinteraction.com.au`.

Also check `app/robots.ts` for the same hardcoded domain reference and update if found.

Verify:
```bash
grep -n "vercel.app" app/sitemap.ts app/robots.ts 2>/dev/null
```

Result must be zero matches — both files must use `synergisticinteraction.com.au`.

---

## BUILD

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
rm -rf .next
npm run build 2>&1
```

Build must pass with zero errors. Fix TypeScript errors autonomously.

Common issues:
- `Resend` import path — use `import { Resend } from 'resend'`
- Environment variable type — wrap with `?? 'fallback'` if TypeScript flags undefined
- RSS source type mismatch — match the interface already defined in regulatory-sources.ts

Rebuild until clean.

---

## DEPLOY

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
vercel --prod
```

After deployment, note the deployment URL in the output.

---

## VERIFY

```bash
# Check all pages return 200 on the Vercel URL (domain DNS may still be propagating)
LIVE="https://synergistic-interaction.vercel.app"
for path in "" "/about" "/services" "/category-expertise" "/our-approach" "/why-compliance-matters" "/get-started" "/zh"; do
  echo "$path: $(curl -s -o /dev/null -w '%{http_code}' $LIVE$path)"
done

# Check real domain (may return timeout if DNS not yet propagated — that is expected)
echo "Real domain check: $(curl -s -o /dev/null -w '%{http_code}' --max-time 10 https://synergisticinteraction.com.au || echo 'DNS still propagating')"

# Confirm ABN in footer source
curl -s https://synergistic-interaction.vercel.app | grep -o "ABN.*397" || echo "ABN not found in page source — check footer component"

# Confirm no placeholder articles in feed
curl -s https://synergistic-interaction.vercel.app/api/regulatory-feed | grep -i "placeholder\|example\|lorem" || echo "✅ No placeholders in feed"

# Confirm real RSS URLs in regulatory sources
grep "productsafety.gov.au\|consumer.vic.gov.au" lib/regulatory-sources.ts | wc -l
```

The last command must return at least 6 (confirming six or more real government URLs are present).

---

## COMMIT AND PUSH

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
git add -A
git commit -m "Session 14: real domain connected, ABN 33 686 618 397 in footer, real regulatory RSS feeds wired, contact form Resend integration, sitemap/robots domain update"
git push origin main
```

---

## UPDATE SI_PROJECT_STATUS.md

Add Session 14 to the sessions log:
```
| Session 14 | Domain synergisticinteraction.com.au connected to Vercel, ABN 33 686 618 397 added to footer, real ACCC + Consumer Affairs Victoria RSS feeds wired (replacing all placeholders), contact form Resend email wiring, sitemap + robots domain updated | TBC files |
```

Update the gaps table — mark these as resolved:
- ABN number → ✅ Resolved — 33 686 618 397
- Resend email wiring → ⚠️ Partially done — RESEND_API_KEY still needs to be added to Vercel manually after obtaining from resend.com
- Regulatory feed → ✅ Real RSS sources wired — live data after first Vercel Cron ingest

---

## COMPLETION REPORT

Print this when done:

```
═══════════════════════════════════════════════════════════
SYNERGISTIC INTERACTION — SESSION 14 COMPLETE
═══════════════════════════════════════════════════════════

DOMAIN:
  synergisticinteraction.com.au added to Vercel:   [ done ]
  NEXT_PUBLIC_SITE_URL updated to real domain:     [ done ]
  Sitemap + robots updated to real domain:         [ done ]
  DNS propagation (may take up to 24hrs):          [ pending ]

CONTENT:
  ABN 33 686 618 397 in footer:                   [ done ]

REGULATORY FEED:
  Real ACCC Product Safety RSS feeds:              [ done ]
  Real Consumer Affairs Victoria RSS feeds:        [ done ]
  Placeholder articles removed:                    [ done ]
  Number of real RSS sources configured:           [ N ]

CONTACT FORM:
  Resend SDK installed:                            [ done ]
  Email sending code wired:                        [ done ]
  CONTACT_DESTINATION_EMAIL set in Vercel:         [ done ]
  RESEND_API_KEY — STILL NEEDED:                   [ ⚠️ manual step required ]

BUILD:
  npm run build:                                   [ pass ]

DEPLOY:
  vercel --prod:                                   [ deployed ]

PAGES (all 200):
  /               /about           /services       [ 200 ]
  /category-expertise              /our-approach   [ 200 ]
  /why-compliance-matters          /get-started    [ 200 ]
  /zh                                              [ 200 ]

NEXT MANUAL STEP:
  1. Go to resend.com — sign up (free)
  2. Verify domain: synergisticinteraction.com.au
  3. Create API key
  4. Run: echo "re_xxxx" | vercel env add RESEND_API_KEY production
  5. Run: vercel --prod (redeploy with key active)

═══════════════════════════════════════════════════════════
```

---

## NON-NEGOTIABLE ABSOLUTES (always in force)

1. No Panda Mart attribution — zero reference anywhere in code, copy, or assets
2. G-Force is a currently operating business — do not imply closure or sale
3. Cornell University framing: experience within programs independently validated
4. Four international retail markets: USA, UK, Australia, New Zealand
5. Copyright year is 2025 (business established — not 2026)
6. Contact email is `jt@synergisticinteraction.com.au` everywhere — not `joshua@`

---

*Synergistic Interaction — Session 14 Prompt | April 2026 | Strictly Confidential*
