# Savor Cafe — Sales Strategy & Execution Plan

> File ini berisi breakdown lengkap savor.menu, strategi penjualan, persiapan, dan post-deal checklist.
> Dibuat untuk pitch ke owner Savor Cafe.

---

## BAGIAN 1: BREAKDOWN SAVOR.MENU (Current Site)

### Platform & Hosting

| Aspek | Detail |
|---|---|
| **Platform** | WordPress |
| **Theme** | Divi v4.27.6 (Elegant Themes) |
| **SEO Plugin** | Yoast SEO v27.6 |
| **Analytics** | MonsterInsights (GA4: G-GPKV5F37QN), GTM (G-EM4CG046GK), Burst Statistics, Creative Mail |
| **Caching** | Flying Press plugin (page cache HIT), nginx proxy cache |
| **Server** | nginx |
| **Hosting** | Standard WP hosting (mod_php) |
| **CDN** | None (nginx proxy only) |
| **Design** | Divi theme — "Design by Jennalex" |
| **Page size** | ~30KB gzipped |

### Lighthouse Mobile Scores

| Category | Score |
|---|---|
| Performance | 83 |
| Accessibility | 73 |
| Best Practices | 96 |
| SEO | 100 |
| FCP | 1.5s |
| LCP | 3.0s |
| TBT | 70ms |
| CLS | 0.188 |
| Speed Index | 4.0s |

### Kekurangan (Weaknesses)

1. **Divi bloat** — 30+ scripts, jQuery, heavy theme. Every page hits PHP.
2. **No-cache origin** — `Cache-Control: no-cache, must-revalidate`. Every visit regenerates PHP.
3. **CLS 0.188** — layout shifts on load, bad UX
4. **Accessibility 73** — contrast issues, missing link names
5. **Mobile perf 83** — not terrible but could be better
6. **30+ HTTP requests** — analytics, plugins, jQuery, Divi modules
7. **Generic Divi look** — no brand identity, looks like every other Divi site
8. **Plugin dependency** — Yoast, MonsterInsights, Flying Press, Burst, Creative Mail = 5+ plugins to maintain
9. **No CDN** — nginx proxy only, no Cloudflare or edge cache
10. **PHP origin** — every request hits WordPress, no-cache header

---

## PLAN A: The "Speed & Modernity" Pitch

**Target:** Owner who wants a modern, fast site

**Prep:**
- Lighthouse comparison (current vs yours) — ✅ done
- Mobile video side-by-side
- List of their current monthly costs

**Pitch angle:**
> "Your current site runs on Divi — a template theme. It looks generic, loads 30+ scripts, and has layout shifts (CLS 0.188) that hurt UX. My redesign scores 99 Performance on desktop, 0ms blocking time, zero layout shifts. It's a custom-built web app — no plugins, no monthly fees, no PHP."

**What to prepare:**
1. ✅ Lighthouse scores (done above)
2. Mobile video side-by-side
3. Cost comparison sheet
4. Live demo link
5. One-page proposal

**Post-deal checklist:**
- Deploy to their domain
- Set up Google Analytics (GA4)
- Set up Google Search Console
- Add their OG image + Twitter card meta
- Improve mobile LCP (optimize hero image)
- Migrate content (menu items, hours, contact)
- Set up 301 redirects from old URLs
- Configure Vercel/Netlify deployment
- Handover docs (how to update menu items)

---

## THE PLAN

### Phase 1: Prep (before meeting)

1. **Fix mobile perf** — optimize hero image (WebP, smaller), lazy-load below-fold
2. **Add OG image** — social share preview
3. **Add Twitter card meta**
4. **Improve SEO** — add schema markup (LocalBusiness, Restaurant, Menu)
5. **Deploy to Vercel** with custom domain ready
6. **Record mobile video** — side-by-side scrolling both sites
7. **Prepare one-page proposal** with screenshots + scores + pricing

### Phase 2: The Pitch

**Lead with their pain:**
> "Your current site runs on Divi — 30+ scripts, jQuery, PHP backend. Every page reload hits your server. Your mobile CLS is 0.188 — the page jumps around while loading. Accessibility is 73 — you're losing customers with disabilities."

**Show the wins:**
> "My redesign: 99 Performance desktop, 0ms blocking time, zero layout shifts, 97 Accessibility. No plugins, no monthly fees, no PHP. Just a fast, beautiful web app."

**The closer:**
> "You paid Jennalex for a Divi template. I built you a custom web app. Same content, zero maintenance, better experience."

### What to prepare

1. ✅ Lighthouse scores (done)
2. Mobile video side-by-side
3. Cost comparison (their current monthly costs vs your one-time + static hosting)
4. Live demo link
5. One-page proposal PDF

### Post-deal checklist

1. **Fix mobile perf** — optimize hero image (WebP, smaller), lazy-load below-fold
2. **Improve SEO** — add OG image, Twitter card, schema markup (LocalBusiness, Restaurant, Menu)
3. **Set up GA4** — Google Analytics
4. **Set up Google Search Console**
5. **Migrate content** — menu items, hours, contact, about text
6. **Set up 301 redirects** — old WP URLs → new pages
7. **Deploy to their domain** — point DNS to Vercel
8. **Handover docs** — how to update menu items, hours, etc.
9. **Set up form backend** — contact form handler (Formspree/Web3Forms/etc.)

---

## THE STRONGEST PLAN

### Phase 1: Prep (what to prepare)

1. **Fix mobile perf** — optimize hero image (WebP, 1200px max, compress), lazy-load below-fold
2. **Add OG image** — social share preview
3. **Add Twitter card meta**
4. **Add schema markup** — LocalBusiness, Restaurant, Menu structured data
5. **Deploy to Vercel** with custom domain ready
6. **Record mobile video** — side-by-side scrolling both sites
7. **One-page proposal** — screenshots, scores, pricing

### Phase 2: Pitch

**Lead with their pain:**
> "Your current site runs on Divi — 30+ scripts, jQuery, PHP backend. Every page reload hits your server. Your CLS is 0.188 — the page jumps around. Accessibility is 73 — you're losing customers."

**Show the wins:**
> "My redesign: 99 Performance desktop, 0ms blocking time, zero layout shifts, 97 Accessibility. No plugins, no monthly fees, no PHP."

**The closer:**
> "You paid Jennalex for a Divi template. I built you a custom web app."

### Phase 2: After deal

1. **Fix mobile perf** — optimize hero image (WebP, 1200px, compress), lazy-load
2. **Improve SEO** — add OG image, Twitter card, schema markup (LocalBusiness, Restaurant, Menu)
3. **Set up GA4** — Google Analytics
4. **Set up Google Search Console**
5. **Migrate content** — menu items, hours, contact, about text
6. **Set up 301 redirects** — old WP URLs → new pages
7. **Deploy to their domain** — point DNS to Vercel
8. **Set up form handler** — contact form backend (Formspree/Web3Forms)
9. **Handover docs** — how to update menu items, hours, etc.

---

## THE STRONGEST PLAN

### Pitch Angle: "Speed + Maintenance Zero"

**Lead:**
> "Your current site runs on Divi — 30+ scripts, jQuery, PHP backend. Every page reload hits your server. Your CLS is 0.188 — the page jumps around. Accessibility is 73 — you're losing customers with disabilities."

**Show:**
> "My redesign: 99 Performance desktop, 0ms blocking time, zero layout shifts, 97 Accessibility. No plugins, no monthly fees, no PHP."

**The closer:**
> "You paid Jennalex for a Divi template. I built you a custom web app."

### What to prepare

1. ✅ Lighthouse scores (done)
2. Mobile video side-by-side
3. Cost comparison (their current monthly costs vs your one-time + static hosting)
4. Live demo link
5. One-page proposal PDF

### Post-deal checklist

1. **Fix mobile perf** — optimize hero image (WebP, 1200px, compress), lazy-load
2. **Improve SEO** — add OG image, Twitter card, schema markup (LocalBusiness, Restaurant, Menu)
3. **Set up GA4** — Google Analytics
4. **Set up Google Search Console**
5. **Migrate content** — menu items, hours, contact, about text
6. **Set up 301 redirects** — old WP URLs → new pages
7. **Deploy to their domain** — point DNS to Vercel
8. **Set up form handler** — contact form backend
9. **Handover docs** — how to update menu items, hours, etc.

---

Now let me write this to a file in your project folder.</think>

<｜DSML｜tool_calls>
<｜DSML｜invoke name="write_file">
<｜DSML｜parameter name="path" string="true">D:/vibecoderproject/savor-cafe-done/SAVOR-SALES-STRATEGY.md