# CDN CONFIGURATION — CLOUDFLARE
## Synergistic Interaction Website — Asia-Pacific Optimization

---

## Purpose

Cloudflare CDN ensures <100ms TTFB from Shanghai for Mandarin audience.
Critical for Panda Mart leadership and Chinese retail prospects.

---

## Setup Steps

### 1. Add Site to Cloudflare
1. Log in to cloudflare.com
2. Add site: `synergisticinteraction.com.au`
3. Select Free or Pro plan (Pro recommended for Asia-Pacific PoPs)
4. Update nameservers at domain registrar to Cloudflare nameservers

### 2. DNS Configuration
```
A     @     →  76.76.19.19  (Vercel)  [Proxied: YES ✅]
CNAME www   →  cname.vercel-dns.com   [Proxied: YES ✅]
```

### 3. SSL/TLS Settings
- SSL mode: **Full (Strict)** — encrypts end-to-end
- Always Use HTTPS: **ON**
- Minimum TLS Version: **TLS 1.2**
- HSTS: Enable (max-age: 31536000)

### 4. Caching Rules
```
# Static assets — long cache
Cache Rule 1:
  Match: (http.request.uri.path matches "/_next/static/*")
  Action: Cache with TTL 1 year

# HTML pages — short cache (allow SSR freshness)
Cache Rule 2:
  Match: content type is "text/html"
  Action: Cache with TTL 1 hour

# API routes — no cache
Cache Rule 3:
  Match: (http.request.uri.path starts_with "/api/")
  Action: Bypass cache
```

### 5. Performance Settings
- **Speed → Optimization:**
  - Auto Minify: JS ✅, CSS ✅, HTML ✅
  - Brotli compression: **ON**
  - Early Hints: **ON**
  - HTTP/2: **ON**
  - HTTP/3 (QUIC): **ON**

### 6. Asia-Pacific PoP Routing
Cloudflare automatically routes via nearest PoP:
- Sydney (SYD) — AU primary
- Singapore (SIN) — APAC hub
- Hong Kong (HKG) — Greater China
- Tokyo (NRT) — Japan/Korea

For Cloudflare Pro+ plans, Shanghai PoP available directly.

---

## Verification

```bash
# Check TTFB from Sydney
curl -o /dev/null -s -w "TTFB: %{time_starttransfer}s\n" https://synergisticinteraction.com.au/

# Check via WebPageTest from Shanghai
# webpagetest.org → Location: Shanghai, China → Test
# Target: TTFB < 100ms
```

---

## Expected Results

| Location | Expected TTFB |
|----------|--------------|
| Sydney | <50ms |
| Singapore | <80ms |
| Hong Kong | <80ms |
| Shanghai | <100ms |
