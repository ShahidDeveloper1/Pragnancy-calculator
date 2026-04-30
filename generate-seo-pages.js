// ====== PROGRAMMATIC SEO PAGE GENERATOR ======
// Generates static HTML pages for pregnancy weeks, food safety, and more
// Run: node generate-seo-pages.js

const fs = require('fs');
const path = require('path');
const { weekData, foodData } = require('./seo-data');

const SITE = 'https://momcalc.com';
const OUT = path.join(__dirname, 'public', 'pages');

// Ensure output directory
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

function trimesterName(t) { return ['', 'First', 'Second', 'Third'][t]; }

// ====== PAGE TEMPLATE ======
function pageHTML({ title, metaDesc, canonical, h1, breadcrumbs, content, prev, next, relatedLinks }) {
  const bcSchema = JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({ "@type": "ListItem", "position": i + 1, "name": b.name, "item": b.url }))
  });

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
  <title>${title}</title>
  <meta name="description" content="${metaDesc}"/>
  <meta name="robots" content="index,follow"/>
  <link rel="canonical" href="${canonical}"/>
  <meta property="og:type" content="article"/>
  <meta property="og:title" content="${title}"/>
  <meta property="og:description" content="${metaDesc}"/>
  <meta property="og:url" content="${canonical}"/>
  <meta property="og:site_name" content="MomCalc"/>
  <meta name="twitter:card" content="summary"/>
  <meta name="twitter:title" content="${title}"/>
  <meta name="twitter:description" content="${metaDesc}"/>
  <meta name="google-site-verification" content="DlAoAxaOvkuDMmt4IeiWcqU0Poup27ppp9dc3fjlIQo" />
  <script type="application/ld+json">${bcSchema}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../style.css?v=11"/>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤰</text></svg>"/>
  <style>
    body { 
      background: var(--bg-primary); 
      color: var(--text-primary); 
      font-family: var(--font-body);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* Fixed Header Fix */
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      padding: 0 clamp(20px, 5vw, 60px);
      background: var(--bg-nav);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 2000;
      border-bottom: 1px solid var(--border-color);
    }

    .theme-toggle {
      width: 56px; height: 28px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 20px;
      cursor: pointer;
      position: relative;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      display: flex;
      align-items: center;
      padding: 0 4px;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
    }

    .theme-toggle::before { content: '☀️'; position: absolute; left: 6px; font-size: 12px; opacity: 0.5; }
    .theme-toggle::after { content: '🌙'; position: absolute; right: 6px; font-size: 12px; opacity: 0.5; }

    .theme-toggle-knob {
      width: 20px; height: 20px;
      background: var(--gradient-primary);
      border-radius: 50%;
      position: relative;
      z-index: 2;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      box-shadow: 0 2px 8px rgba(108, 59, 228, 0.3);
    }

    [data-theme="dark"] .theme-toggle-knob {
      transform: translateX(28px);
      background: var(--gradient-rose);
      box-shadow: 0 2px 8px rgba(219, 39, 119, 0.3);
    }

    [data-theme="dark"] .theme-toggle::after { opacity: 1; }
    [data-theme="light"] .theme-toggle::before { opacity: 1; }

    .seo-container { 
      max-width: 800px; 
      margin: 0 auto; 
      padding: 120px 24px 80px; 
    }

    .article-header { 
      margin-bottom: 48px; 
      text-align: left; 
    }

    .article-title {
      font-family: var(--font-display); 
      font-size: clamp(2.2rem, 8vw, 3.2rem);
      font-weight: 800; 
      line-height: 1.1; 
      margin-bottom: 16px;
      color: var(--text-primary);
      letter-spacing: -0.03em;
    }

    .seo-bc { 
      display: inline-flex; 
      align-items: center; 
      gap: 6px; 
      font-size: 0.8rem; 
      margin-bottom: 24px;
      color: var(--text-muted);
      font-weight: 500;
    }
    .seo-bc a { 
      color: var(--indigo-light); 
      text-decoration: none; 
      transition: var(--transition); 
    }
    .seo-bc a:hover { color: var(--rose); }

    .content-card {
      background: var(--bg-card);
      backdrop-filter: blur(20px);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-2xl); 
      padding: 48px;
      box-shadow: var(--shadow-sm);
      margin-bottom: 32px;
    }

    .seo-grid { 
      display: grid; 
      grid-template-columns: repeat(3, 1fr); 
      gap: 20px; 
      margin: 40px 0; 
    }
    
    .feature-tag {
      background: var(--bg-secondary); 
      padding: 24px 16px; 
      border-radius: var(--radius-xl);
      border: 1px solid var(--border-color); 
      text-align: center;
      transition: var(--transition);
    }
    .feature-tag:hover { transform: translateY(-4px); border-color: var(--indigo-light); }
    .feature-tag .icon { font-size: 28px; margin-bottom: 12px; display: block; }
    .feature-tag .label { font-weight: 800; color: var(--text-primary); font-size: 1.1rem; display: block; }
    .feature-tag .sub { font-size: 0.8rem; color: var(--text-muted); margin-top: 4px; display: block; }

    .seo-badge {
      display: inline-block; 
      padding: 8px 20px; 
      border-radius: var(--radius-full);
      font-size: 0.8rem; 
      font-weight: 800; 
      text-transform: uppercase;
      letter-spacing: 0.05em; 
      margin-bottom: 24px;
    }
    .seo-safe { background: var(--gradient-primary); color: white; border: none; }

    .faq-item {
      background: var(--bg-secondary); 
      border-radius: var(--radius-lg);
      margin-bottom: 16px; 
      border: 1px solid var(--border-color);
      overflow: hidden;
    }
    .faq-summary {
      padding: 20px 24px; 
      font-weight: 700; 
      cursor: pointer;
      display: flex; 
      justify-content: space-between; 
      align-items: center;
      list-style: none;
    }
    .faq-summary::after { content: '→'; font-size: 1.2rem; color: var(--indigo-light); transition: var(--transition); }
    .faq-item[open] .faq-summary::after { transform: rotate(90deg); }
    .faq-content { padding: 0 24px 24px; line-height: 1.7; color: var(--text-secondary); font-size: 1rem; }

    .nav-buttons { 
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      gap: 16px; 
      margin-top: 64px; 
    }
    .nav-btn {
      padding: 18px; 
      border-radius: var(--radius-xl);
      background: var(--bg-card); 
      border: 1px solid var(--border-color);
      text-decoration: none; 
      color: var(--text-primary); 
      font-weight: 700;
      text-align: center; 
      font-size: 0.95rem;
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .nav-btn:hover { border-color: var(--indigo-light); background: var(--bg-secondary); transform: scale(1.02); }

    .cta-banner {
      background: var(--gradient-primary); 
      padding: 64px 40px;
      border-radius: var(--radius-2xl); 
      text-align: center; 
      color: white;
      margin-top: 80px;
      box-shadow: var(--shadow-xl);
    }
    .cta-btn {
      display: inline-block; 
      padding: 16px 40px; 
      background: white;
      color: var(--indigo); 
      border-radius: var(--radius-full); 
      text-decoration: none;
      font-weight: 900; 
      font-size: 1.1rem; 
      margin-top: 32px;
      transition: var(--transition);
    }
    .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.2); }

    @media (max-width: 768px) {
      .navbar { 
        height: auto; 
        padding: 16px; 
        flex-direction: column;
        gap: 12px;
        text-align: center; 
      }
      .nav-brand { width: 100%; justify-content: center; }
      .nav-actions { width: 100%; justify-content: center; gap: 12px; flex-wrap: wrap; }
      .seo-container { padding-top: 160px; padding-bottom: 60px; }
      .article-title { font-size: 2rem; }
      .content-card { padding: 32px 20px; }
      .seo-grid { grid-template-columns: 1fr; gap: 16px; }
      .nav-buttons { grid-template-columns: 1fr; }
      .feature-tag { text-align: left; display: flex; align-items: center; gap: 20px; padding: 20px; }
      .feature-tag .icon { margin-bottom: 0; font-size: 24px; }
    }
  </style>
</head>
<body data-theme="light">
  <nav class="navbar" role="navigation">
    <a href="/" class="nav-brand">
      <div class="nav-logo">🤰</div>
      <div>
        <div class="nav-title">MomCalc</div>
        <div class="nav-sub">Pregnancy Companion</div>
      </div>
    </a>

    <div class="nav-actions">
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
        <div class="theme-toggle-knob"></div>
      </button>
      <a href="/#calculator" class="nav-cta-link"><button class="nav-cta">Pregnancy Calculator</button></a>
    </div>
  </nav>


  <main class="seo-container">
    <header class="article-header">
      <nav class="seo-bc" aria-label="Breadcrumb">
        ${breadcrumbs.map((b, i) => i < breadcrumbs.length - 1 ? `<a href="${b.url}">${b.name}</a><span style="opacity:0.3; margin:0 8px;">/</span>` : `<span>${b.name}</span>`).join('')}
      </nav>
      <h1 class="article-title">${h1}</h1>
    </header>

    <article class="content-card">
      ${content}
    </article>

    <div class="nav-buttons">
      ${prev ? `<a href="${prev.url}" class="nav-btn">← ${prev.label}</a>` : '<div></div>'}
      ${next ? `<a href="${next.url}" class="nav-btn">${next.label} →</a>` : '<div></div>'}
    </div>

    ${relatedLinks ? `
    <div style="margin-top: 80px;">
      <h2 style="font-family:var(--font-display); font-size:1.8rem; margin-bottom:24px; color:var(--text-primary);">Explore More Guides</h2>
      <div class="seo-links" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:16px;">
        ${relatedLinks}
      </div>
    </div>` : ''}

    <section class="cta-banner">
      <h2 style="font-size: 2.4rem; font-family:var(--font-display); margin-bottom: 16px; color: white;">Every Step of Your Journey</h2>
      <p style="font-size: 1.15rem; opacity: 0.95; max-width: 600px; margin: 0 auto; line-height: 1.6; color: white;">Join 2 million mothers worldwide using MomCalc to track development, monitor health, and prepare for motherhood.</p>
      <a href="/#calculator" class="cta-btn">🤰 Start Tracking Free</a>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-brand">MomCalc 🤰</div>
    <p class="footer-disc">⚠️ <strong>Medical Disclaimer:</strong> This platform provides educational information only. Please consult your doctor for medical advice.</p>
    <p class="footer-copy">© 2026 MomCalc. Premium Pregnancy Tracking.</p>
  </footer>

  <script>
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    function updateTheme(theme) {
      html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    updateTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      updateTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  </script>
</body>
</html>`;
}



// ====== GENERATE PREGNANCY WEEK PAGES ======
console.log('📄 Generating pregnancy week pages...');
weekData.forEach((w, i) => {
  const prevW = i > 0 ? weekData[i - 1] : null;
  const nextW = i < weekData.length - 1 ? weekData[i + 1] : null;
  const slug = `pregnancy-week-${w.week}`;

  const relatedLinks = weekData.map(ww =>
    `<a href="pregnancy-week-${ww.week}.html">Week ${ww.week}</a>`
  ).join('');

  const content = `
    <div style="margin-bottom: 32px;">
      <span class="seo-badge seo-safe" style="background: var(--gradient-primary); color: white; border: none;">${trimesterName(w.trimester)} Trimester</span>
      <p style="font-size: 1.25rem; line-height: 1.6; color: var(--text-primary); margin-top: 16px; font-weight: 600;">
        Baby is currently the size of a ${w.size}.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); margin-top: 12px;">${w.desc}</p>
    </div>

    <div class="seo-grid">
      <div class="feature-tag">
        <span class="icon">📅</span>
        <div>
          <span class="label">Week ${w.week}</span>
          <span class="sub">Pregnancy Stage</span>
        </div>
      </div>
      <div class="feature-tag">
        <span class="icon">📏</span>
        <div>
          <span class="label">${w.length}</span>
          <span class="sub">Estimated Length</span>
        </div>
      </div>
      <div class="feature-tag">
        <span class="icon">⚖️</span>
        <div>
          <span class="label">${w.weight}</span>
          <span class="sub">Estimated Weight</span>
        </div>
      </div>
    </div>

    <h2 style="font-family:var(--font-display); font-size:1.8rem; margin: 48px 0 24px; color:var(--text-primary);">Development Milestones</h2>
    <div style="background: var(--bg-secondary); border-radius: var(--radius-xl); padding: 32px; border: 1px solid var(--border-color);">
      <ul style="list-style: none; padding: 0; margin: 0;">
        ${w.devPoints.map(d => `<li style="display:flex; gap:16px; margin-bottom:16px; font-size:1.05rem; line-height:1.5;">
          <span style="color: var(--mint); font-weight: bold; font-size: 1.2rem;">✦</span> 
          <span style="color: var(--text-secondary);">${d}</span>
        </li>`).join('')}
      </ul>
    </div>

    <h2 style="font-family:var(--font-display); font-size:1.8rem; margin: 48px 0 24px; color:var(--text-primary);">Common Symptoms</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      ${w.symptoms.map(s => `<span style="background:rgba(99, 102, 241, 0.08); color:var(--indigo-light); padding:12px 20px; border-radius:var(--radius-md); font-weight:700; font-size:0.9rem; border: 1px solid var(--border-color);">${s}</span>`).join('')}
    </div>

    <h2 style="font-family:var(--font-display); font-size:1.8rem; margin: 48px 0 24px; color:var(--text-primary);">Care Tip for You</h2>
    <div style="background: var(--bg-secondary); padding: 32px; border-radius: var(--radius-xl); border: 1px solid var(--indigo-light); position: relative; overflow: hidden;">
      <p style="font-size: 1.1rem; line-height: 1.7; font-weight: 500; color: var(--text-primary);">${w.tips}</p>
    </div>

    <div class="faq-section" style="margin-top: 64px;">
      <h2 style="font-family:var(--font-display); font-size:1.8rem; margin-bottom:24px; color:var(--text-primary);">Common Questions</h2>
      <details class="faq-item">
        <summary class="faq-summary">How large is the baby at ${w.week} weeks?</summary>
        <div class="faq-content">
          Your baby is roughly the size of a <strong>${w.size}</strong>, measuring about ${w.length} and weighing around ${w.weight}.
        </div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary">Which trimester is week ${w.week}?</summary>
        <div class="faq-content">
          Week ${w.week} is part of your <strong>${trimesterName(w.trimester)} Trimester</strong>.
        </div>
      </details>
    </div>
  `;

  const html = pageHTML({
    title: `Week ${w.week} Pregnancy Guide: ${w.title} | MomCalc`,
    metaDesc: `Learn about Week ${w.week} of pregnancy. Your baby is the size of a ${w.size}. Discover development milestones, symptoms, and health tips.`,
    canonical: `${SITE}/pages/${slug}.html`,
    h1: `Week ${w.week}: ${w.title}`,
    breadcrumbs: [
      { name: 'Home', url: '/' }, { name: 'Guides', url: '/pages/' }, { name: `Week ${w.week}`, url: `/pages/${slug}.html` }
    ],
    content,
    prev: prevW ? { url: `pregnancy-week-${prevW.week}.html`, label: `Week ${prevW.week}` } : null,
    next: nextW ? { url: `pregnancy-week-${nextW.week}.html`, label: `Week ${nextW.week}` } : null,
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
    `<a href="can-i-eat-${ff.food}.html">${ff.title.replace('Can Pregnant Women ', '')}</a>`
  ).join('');

  const content = `
    <div style="margin-bottom: 32px;">
      <span class="seo-badge ${f.safe ? 'seo-safe' : 'seo-unsafe'}">
        ${f.safe ? '✅ Generally Safe' : '⚠️ Caution Advised'}
      </span>
      <p style="font-size: 1.3rem; line-height: 1.7; color: var(--text-primary); margin-top: 16px; font-weight: 700;">${f.food}: Is it safe?</p>
    </div>

    <div style="background: var(--bg-secondary); border-radius: var(--radius-xl); padding: 40px; border: 1px solid var(--border-color); margin-top: 40px;">
      <h2 style="font-family:var(--font-display); font-size:1.6rem; margin-bottom:16px; color:var(--text-primary);">${f.safe ? 'Safety Guidelines' : 'Why Exercise Caution'}</h2>
      <p style="line-height: 1.8; color: var(--text-secondary); font-size: 1.1rem;">${f.answer}</p>
      ${f.alternatives ? `
      <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid var(--border-color);">
        <p style="font-weight: 800; color: var(--indigo-light); margin-bottom: 12px; font-size: 1.1rem;">Recommended Alternatives:</p>
        <p style="color: var(--text-secondary); font-size: 1.05rem;">${f.alternatives}</p>
      </div>` : ''}
    </div>

    <div class="faq-section" style="margin-top: 64px;">
      <h2 style="font-family:var(--font-display); font-size:1.8rem; margin-bottom:24px; color:var(--text-primary);">Food Safety FAQ</h2>
      <details class="faq-item">
        <summary class="faq-summary">Can I eat ${f.food} while pregnant?</summary>
        <div class="faq-content">
          ${f.safe ? `Yes, ${f.food} is generally safe when prepared correctly.` : `${f.food} is typically avoided or restricted during pregnancy.`} ${f.answer}
        </div>
      </details>
    </div>
  `;

  const html = pageHTML({
    title: `${f.title} | Pregnancy Food Safety Guide`,
    metaDesc: `Wondering if you can eat ${f.food} during pregnancy? Read our expert safety guide and nutritional advice.`,
    canonical: `${SITE}/pages/${slug}.html`,
    h1: f.title,
    breadcrumbs: [
      { name: 'Home', url: '/' }, { name: 'Food Safety', url: '/pages/' }, { name: f.food, url: `/pages/${slug}.html` }
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
  title: 'Pregnancy Library: Guides & Resources | MomCalc',
  metaDesc: 'Explore our complete library of medically-guided pregnancy resources, including week-by-week tracking and food safety advice.',
  canonical: `${SITE}/pages/`,
  h1: 'Pregnancy Knowledge Base',
  breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Guides', url: '/pages/' }],
  content: `
    <p style="font-size: 1.25rem; line-height: 1.7; color: var(--text-secondary); text-align: center; max-width: 600px; margin: 0 auto 48px;">
      Expert insights for every stage of motherhood. Select a category below to dive deeper.
    </p>
    
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <div class="content-card" style="margin-bottom: 0; padding: 48px;">
        <h2 style="font-family:var(--font-display); font-size:1.8rem; margin-bottom:32px; text-align: center; color:var(--text-primary);">📅 Week by Week Development</h2>
        <div style="display: flex; flex-direction: column; gap: 12px; max-width: 600px; margin: 0 auto;">
          ${weekData.map(w => `<a href="pregnancy-week-${w.week}.html" style="padding: 20px 24px; background: var(--bg-secondary); border-radius: var(--radius-lg); text-decoration: none; color: var(--text-primary); font-weight: 700; font-size: 1.1rem; border: 1px solid var(--border-color); transition: var(--transition); display: block; text-align: center; box-shadow: var(--shadow-sm);">Week ${w.week}: ${w.title}</a>`).join('')}
        </div>
      </div>
      
      <div class="content-card" style="margin-bottom: 0; padding: 48px;">
        <h2 style="font-family:var(--font-display); font-size:1.8rem; margin-bottom:32px; text-align: center; color:var(--text-primary);">🥗 Pregnancy Food Safety</h2>
        <div style="display: flex; flex-direction: column; gap: 12px; max-width: 600px; margin: 0 auto;">
          ${foodData.map(f => `<a href="can-i-eat-${f.food}.html" style="padding: 20px 24px; background: var(--bg-secondary); border-radius: var(--radius-lg); text-decoration: none; color: var(--text-primary); font-weight: 700; font-size: 1.1rem; border: 1px solid var(--border-color); transition: var(--transition); display: block; text-align: center; box-shadow: var(--shadow-sm);">${f.title}</a>`).join('')}
        </div>
      </div>
    </div>
  `,
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
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('  ✅ Sitemap updated');

// ====== SUMMARY ======
const totalPages = weekData.length + foodData.length + 1;
console.log(`\n🚀 DONE! Generated ${totalPages} SEO pages total:`);
console.log(`   📅 ${weekData.length} pregnancy week pages`);
console.log(`   🍽️  ${foodData.length} food safety pages`);
console.log(`   📋 1 index page`);
console.log(`   🗺️  Sitemap updated with ${totalPages + 1} URLs`);
console.log(`\n   All pages saved to: ${OUT}/`);
