// ====== PROGRAMMATIC SEO PAGE GENERATOR ======
// Generates static HTML pages for pregnancy weeks, food safety, and more
// Run: node generate-seo-pages.js

const fs = require('fs');
const path = require('path');
const { weekData, foodData } = require('./seo-data');

const SITE = 'https://mamacarepro.com';
const OUT = path.join(__dirname, 'pages');

// Ensure output directory
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

function trimesterName(t) { return ['','First','Second','Third'][t]; }

// ====== PAGE TEMPLATE ======
function pageHTML({ title, metaDesc, canonical, h1, breadcrumbs, content, prev, next, relatedLinks }) {
  const bcSchema = JSON.stringify({
    "@context":"https://schema.org","@type":"BreadcrumbList",
    "itemListElement": breadcrumbs.map((b,i) => ({"@type":"ListItem","position":i+1,"name":b.name,"item":b.url}))
  });

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${metaDesc}"/>
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1"/>
  <link rel="canonical" href="${canonical}"/>
  <meta property="og:type" content="article"/>
  <meta property="og:title" content="${title}"/>
  <meta property="og:description" content="${metaDesc}"/>
  <meta property="og:url" content="${canonical}"/>
  <meta property="og:site_name" content="MamaCare Pro"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${title}"/>
  <meta name="twitter:description" content="${metaDesc}"/>
  <script type="application/ld+json">${bcSchema}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../style.css?v=5"/>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤰</text></svg>"/>
  <style>
    .seo-page{max-width:820px;margin:0 auto;padding:100px 24px 60px;}
    .seo-page h1{font-family:'Outfit',sans-serif;font-size:2.4rem;font-weight:800;margin-bottom:8px;}
    .seo-page h2{font-family:'Outfit',sans-serif;font-size:1.5rem;font-weight:700;margin:32px 0 12px;color:var(--text-primary);}
    .seo-page h3{font-size:1.1rem;font-weight:600;margin:20px 0 8px;}
    .seo-page p,.seo-page li{font-family:'Inter',sans-serif;line-height:1.8;color:#111;font-size:0.95rem;}
    .seo-bc{display:flex;gap:8px;font-size:0.8rem;margin-bottom:20px;flex-wrap:wrap;}
    .seo-bc a{color:var(--indigo);text-decoration:none;font-weight:500;}
    .seo-bc span{color:#999;}
    .seo-card{background:var(--bg-card);border:1px solid var(--border-color);border-radius:16px;padding:24px;margin:16px 0;}
    .seo-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:16px 0;}
    .seo-tag{background:rgba(99,102,241,0.08);color:var(--indigo);padding:8px 16px;border-radius:12px;font-size:0.85rem;font-weight:600;text-align:center;}
    .seo-nav{display:flex;justify-content:space-between;margin:40px 0;gap:12px;flex-wrap:wrap;}
    .seo-nav a{padding:12px 24px;background:var(--gradient-primary);color:#fff;border-radius:12px;text-decoration:none;font-weight:600;font-size:0.9rem;}
    .seo-links{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px;margin:16px 0;}
    .seo-links a{color:var(--indigo);text-decoration:none;font-weight:500;font-size:0.85rem;padding:8px 12px;border-radius:8px;background:rgba(99,102,241,0.05);}
    .seo-links a:hover{background:rgba(99,102,241,0.12);}
    .seo-badge{display:inline-block;padding:4px 12px;border-radius:20px;font-size:0.75rem;font-weight:700;margin-bottom:16px;}
    .seo-safe{background:rgba(16,185,129,0.12);color:#059669;}
    .seo-unsafe{background:rgba(220,38,38,0.12);color:#DC2626;}
    .seo-cta{display:block;text-align:center;padding:16px 32px;background:var(--gradient-primary);color:#fff;border-radius:16px;text-decoration:none;font-weight:700;font-size:1rem;margin:32px auto;max-width:400px;}
    @media(max-width:600px){.seo-page h1{font-size:1.8rem;}.seo-page{padding:90px 16px 40px;}}
  </style>
</head>
<body>
  <nav class="navbar" role="navigation">
    <a href="/" class="nav-brand">
      <div class="nav-logo">🤰</div>
      <div><div class="nav-title">MamaCare Pro</div><div class="nav-sub">Pregnancy Companion</div></div>
    </a>
    <div class="nav-actions">
      <a href="/#calculator"><button class="method-tab nav-cta" style="padding:8px 20px;border-radius:9999px;font-size:.875rem">Calculate Now</button></a>
    </div>
  </nav>

  <main class="seo-page">
    <nav class="seo-bc" aria-label="Breadcrumb">${breadcrumbs.map((b,i) => i < breadcrumbs.length-1 ? `<a href="${b.url}">${b.name}</a><span>›</span>` : `<span>${b.name}</span>`).join('')}</nav>
    <h1>${h1}</h1>
    ${content}
    <div class="seo-nav">
      ${prev ? `<a href="${prev.url}">← ${prev.label}</a>` : '<span></span>'}
      ${next ? `<a href="${next.url}">${next.label} →</a>` : '<span></span>'}
    </div>
    ${relatedLinks ? `<h2>Related Pages</h2><div class="seo-links">${relatedLinks}</div>` : ''}
    <a href="/#calculator" class="seo-cta">🤰 Try the Free Pregnancy Calculator</a>
  </main>

  <footer class="footer">
    <div class="footer-brand">MamaCare Pro 🤰</div>
    <p class="footer-disc">⚠️ <strong>Medical Disclaimer:</strong> This is educational information, not medical advice. Always consult your healthcare provider.</p>
    <p class="footer-copy">© 2026 MamaCare Pro. Made with 💗 for every mama.</p>
  </footer>
</body>
</html>`;
}

// ====== GENERATE PREGNANCY WEEK PAGES ======
console.log('📄 Generating pregnancy week pages...');
weekData.forEach((w, i) => {
  const prevW = i > 0 ? weekData[i-1] : null;
  const nextW = i < weekData.length-1 ? weekData[i+1] : null;
  const slug = `pregnancy-week-${w.week}`;
  
  const relatedLinks = weekData.map(ww => 
    `<a href="pregnancy-week-${ww.week}.html">Week ${ww.week}</a>`
  ).join('');

  const content = `
    <span class="seo-badge seo-safe">${trimesterName(w.trimester)} Trimester</span>
    <p><strong>Baby is the size of a ${w.size}</strong> — Weight: ${w.weight}, Length: ${w.length}</p>
    <p>${w.desc}</p>

    <h2>Baby Development at Week ${w.week}</h2>
    <div class="seo-card">
      <ul>${w.devPoints.map(d => `<li>✅ ${d}</li>`).join('')}</ul>
    </div>

    <h2>Common Symptoms at Week ${w.week}</h2>
    <div class="seo-grid">${w.symptoms.map(s => `<div class="seo-tag">${s}</div>`).join('')}</div>

    <h2>Expert Tips for Week ${w.week}</h2>
    <div class="seo-card"><p>💡 ${w.tips}</p></div>

    <h2>Frequently Asked Questions</h2>
    <details class="seo-card" style="cursor:pointer">
      <summary style="font-weight:700">How big is my baby at ${w.week} weeks?</summary>
      <p style="margin-top:8px">At week ${w.week}, your baby is approximately the size of a <strong>${w.size}</strong>, measuring about ${w.length} in length and weighing around ${w.weight}.</p>
    </details>
    <details class="seo-card" style="cursor:pointer">
      <summary style="font-weight:700">What trimester is week ${w.week}?</summary>
      <p style="margin-top:8px">Week ${w.week} falls in the <strong>${trimesterName(w.trimester)} Trimester</strong> of pregnancy.${w.trimester===1?' The first trimester covers weeks 1-12.':w.trimester===2?' The second trimester covers weeks 13-26.':' The third trimester covers weeks 27-40.'}</p>
    </details>
    <details class="seo-card" style="cursor:pointer">
      <summary style="font-weight:700">What symptoms should I expect at week ${w.week}?</summary>
      <p style="margin-top:8px">Common symptoms at week ${w.week} include: ${w.symptoms.join(', ')}. Every pregnancy is different — consult your doctor if symptoms concern you.</p>
    </details>
  `;

  const html = pageHTML({
    title: `Pregnancy Week ${w.week}: ${w.title} — Baby Size, Symptoms & Tips | MamaCare Pro`,
    metaDesc: `Week ${w.week} of pregnancy: Your baby is the size of a ${w.size} (${w.weight}, ${w.length}). ${w.desc.substring(0,100)} Symptoms, development milestones & expert tips.`,
    canonical: `${SITE}/pages/${slug}.html`,
    h1: `Pregnancy Week ${w.week}: ${w.title}`,
    breadcrumbs: [
      {name:'Home',url:'/'},{name:'Pregnancy Week by Week',url:'/pages/'},{name:`Week ${w.week}`,url:`/pages/${slug}.html`}
    ],
    content,
    prev: prevW ? {url:`pregnancy-week-${prevW.week}.html`,label:`Week ${prevW.week}`} : null,
    next: nextW ? {url:`pregnancy-week-${nextW.week}.html`,label:`Week ${nextW.week}`} : null,
    relatedLinks
  });

  fs.writeFileSync(path.join(OUT, `${slug}.html`), html);
});
console.log(`  ✅ Generated ${weekData.length} week pages`);

// ====== GENERATE FOOD SAFETY PAGES ======
console.log('📄 Generating food safety pages...');
foodData.forEach(f => {
  const slug = `can-i-eat-${f.food}`;
  const relatedLinks = foodData.map(ff => 
    `<a href="can-i-eat-${ff.food}.html">${ff.title.replace('Can Pregnant Women ','')}</a>`
  ).join('');

  const content = `
    <span class="seo-badge ${f.safe ? 'seo-safe' : 'seo-unsafe'}">${f.safe ? '✅ Generally Safe' : '⚠️ Caution Advised'}</span>
    <p>${f.answer}</p>

    <h2>${f.safe ? 'Safe Eating Guidelines' : 'Why to Avoid During Pregnancy'}</h2>
    <div class="seo-card">
      <p>${f.answer}</p>
      ${f.alternatives ? `<p><strong>Safe alternatives:</strong> ${f.alternatives}</p>` : ''}
    </div>

    <h2>Frequently Asked Questions</h2>
    <details class="seo-card" style="cursor:pointer">
      <summary style="font-weight:700">Is ${f.food} safe during pregnancy?</summary>
      <p style="margin-top:8px">${f.safe ? `Yes, ${f.food} is generally considered safe during pregnancy when prepared properly.` : `${f.food} should be consumed with caution or avoided during pregnancy.`} ${f.answer.substring(0,120)}</p>
    </details>
    <details class="seo-card" style="cursor:pointer">
      <summary style="font-weight:700">What are safe alternatives to ${f.food}?</summary>
      <p style="margin-top:8px">${f.alternatives ? `Safe alternatives include: ${f.alternatives}.` : 'Consult your healthcare provider for personalized dietary advice.'}</p>
    </details>
  `;

  const html = pageHTML({
    title: `${f.title} — Pregnancy Food Safety Guide | MamaCare Pro`,
    metaDesc: `${f.safe ? '✅ Safe:' : '⚠️ Caution:'} ${f.answer.substring(0,140)} Expert pregnancy nutrition advice from MamaCare Pro.`,
    canonical: `${SITE}/pages/${slug}.html`,
    h1: f.title,
    breadcrumbs: [
      {name:'Home',url:'/'},{name:'Food Safety',url:'/pages/'},{name:f.title,url:`/pages/${slug}.html`}
    ],
    content,
    prev: null, next: null,
    relatedLinks
  });

  fs.writeFileSync(path.join(OUT, `${slug}.html`), html);
});
console.log(`  ✅ Generated ${foodData.length} food safety pages`);

// ====== GENERATE INDEX PAGE ======
console.log('📄 Generating pages index...');
const indexLinks = [
  '<h2>Pregnancy Week by Week</h2><div class="seo-links">' + weekData.map(w => `<a href="pregnancy-week-${w.week}.html">Week ${w.week}: ${w.title}</a>`).join('') + '</div>',
  '<h2>Pregnancy Food Safety</h2><div class="seo-links">' + foodData.map(f => `<a href="can-i-eat-${f.food}.html">${f.title}</a>`).join('') + '</div>'
].join('');

const indexHTML = pageHTML({
  title: 'Pregnancy Guides — Week by Week, Food Safety & More | MamaCare Pro',
  metaDesc: 'Complete pregnancy guide with week-by-week development, food safety during pregnancy, symptoms, and expert tips. 52+ medically reviewed articles.',
  canonical: `${SITE}/pages/`,
  h1: 'Complete Pregnancy Guide',
  breadcrumbs: [{name:'Home',url:'/'},{name:'Pregnancy Guides',url:'/pages/'}],
  content: `<p>Explore our complete library of medically reviewed pregnancy guides — from week 1 to week 42, food safety, symptoms, and more.</p>${indexLinks}`,
  prev: null, next: null,
  relatedLinks: ''
});
fs.writeFileSync(path.join(OUT, 'index.html'), indexHTML);
console.log('  ✅ Generated index page');

// ====== GENERATE UPDATED SITEMAP ======
console.log('📄 Generating sitemap...');
let sitemapEntries = `  <url><loc>${SITE}/</loc><lastmod>2026-04-29</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>\n`;
sitemapEntries += `  <url><loc>${SITE}/pages/</loc><lastmod>2026-04-29</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>\n`;

weekData.forEach(w => {
  sitemapEntries += `  <url><loc>${SITE}/pages/pregnancy-week-${w.week}.html</loc><lastmod>2026-04-29</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>\n`;
});
foodData.forEach(f => {
  sitemapEntries += `  <url><loc>${SITE}/pages/can-i-eat-${f.food}.html</loc><lastmod>2026-04-29</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>\n`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}</urlset>`;
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
console.log('  ✅ Sitemap updated');

// ====== SUMMARY ======
const totalPages = weekData.length + foodData.length + 1;
console.log(`\n🚀 DONE! Generated ${totalPages} SEO pages total:`);
console.log(`   📅 ${weekData.length} pregnancy week pages`);
console.log(`   🍽️  ${foodData.length} food safety pages`);
console.log(`   📋 1 index page`);
console.log(`   🗺️  Sitemap updated with ${totalPages + 1} URLs`);
console.log(`\n   All pages saved to: ${OUT}/`);
