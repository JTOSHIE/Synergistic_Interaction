# VERCEL DEPLOYMENT SETUP
## Synergistic Interaction Website

---

## 1. Connect Repository

1. Go to vercel.com → New Project
2. Import from GitHub: `JTOSHIE/Synergistic_Interaction`
3. Root directory: `DEVELOPMENT/`
4. Framework preset: **Next.js** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `.next` (default)

---

## 2. Environment Variables

Set these in Vercel Project Settings → Environment Variables:

```bash
# Production only
OPENAI_API_KEY=sk-...
ACCC_FEED_URL=https://...
CAV_FEED_URL=https://...
TGA_FEED_URL=https://...

# Email notifications (contact form)
EMAIL_SERVICE_API_KEY=...
NOTIFICATION_EMAIL=joshua@synergisticinteraction.com.au
```

**NEVER commit these to git. Never put in `.env` file in repository.**

---

## 3. Domain Configuration

1. Vercel → Project → Settings → Domains
2. Add custom domain: `synergisticinteraction.com.au`
3. Add `www.synergisticinteraction.com.au` → redirect to apex
4. Configure DNS at domain registrar:
   ```
   A record:   @   →   76.76.19.19
   CNAME:      www →   cname.vercel-dns.com
   ```
5. SSL certificate: Auto-provisioned by Vercel (Let's Encrypt)

---

## 4. Deployment Configuration

```json
// vercel.json (place in DEVELOPMENT/)
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["syd1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

---

## 5. Production Deployment

```bash
# Push to main branch triggers auto-deploy
git push origin main

# Or deploy manually
npx vercel --prod
```

---

## 6. Post-Deployment Verification

- [ ] Site accessible at custom domain
- [ ] HTTPS redirect working
- [ ] All four pages load
- [ ] Vercel Analytics enabled (Dashboard → Analytics tab)
- [ ] Function logs accessible (Dashboard → Functions tab)
