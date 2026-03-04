# BAIDU SEO SETUP
## Synergistic Interaction Website — V7 §6 Mandarin Search

---

## Why Baidu SEO Matters

Panda Mart leadership and Chinese retail procurement teams research suppliers
on Baidu (>70% Chinese search market share). Baidu requires:
1. SSR content (bot does not execute JS)
2. Baidu Webmaster Tools verification
3. Baidu Analytics (equivalent of Google Analytics for Baidu ranking signals)
4. `<meta name="keywords">` tags (Baidu uses these, unlike Google)
5. Fast page load from mainland China

---

## Step 1: Verify Site in Baidu Webmaster Tools

1. Go to ziyuan.baidu.com
2. Create account (requires Chinese phone number or use existing Baidu account)
3. Add site: `synergisticinteraction.com.au`
4. Choose verification method: **HTML tag** (add to `<head>`)
5. Add verification meta tag to `app/layout.tsx`:
   ```html
   <meta name="baidu-site-verification" content="[VERIFICATION_CODE]" />
   ```
6. Verify ownership in Baidu Webmaster Tools

---

## Step 2: Generate Mandarin Sitemap

```typescript
// app/sitemap-zh.xml/route.ts
export async function GET() {
  const baseUrl = 'https://synergisticinteraction.com.au/zh';
  const pages = ['', '/our-approach', '/why-compliance-matters', '/get-started'];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
```

---

## Step 3: Submit Sitemap to Baidu

In Baidu Webmaster Tools:
1. Go to: 数据引入 (Data Import) → 链接提交 (Link Submission)
2. Sitemap submission: `https://synergisticinteraction.com.au/sitemap-zh.xml`
3. Submit

---

## Step 4: Baidu Analytics

```html
<!-- Add to app/layout.tsx — conditionally for zh locale only -->
<!-- Replace [BAIDU_ID] with actual tracking ID from Baidu Analytics -->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?[BAIDU_ID]";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
```

---

## Step 5: Mandarin Meta Tags

```tsx
// For Mandarin pages — add to page metadata
export const metadata: Metadata = {
  title: '合规优先的品类管理 | Synergistic Interaction',
  description: '澳大利亚领先的合规优先品类管理咨询公司。符合ISO 37301:2021标准的九维框架体系。',
  // Baidu uses keywords meta tag (unlike Google)
  keywords: '品类管理, 合规管理, ISO37301, 供应商管理, 零售咨询',
  other: {
    'baidu-site-verification': '[VERIFICATION_CODE]',
  },
};
```

---

## Step 6: Verify Baidu Crawlability

```bash
# Simulate Baidu bot user agent
curl -A "Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)" \
  https://synergisticinteraction.com.au/zh/

# Verify: Chinese content present in response body
```
