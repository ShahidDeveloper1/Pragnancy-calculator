// ====== PROGRAMMATIC SEO PAGE GENERATOR ======
// Generates static HTML pages for pregnancy weeks, food safety, and local clinics in multiple languages.
// Run: node generate-seo-pages.js

const fs = require('fs');
const path = require('path');
const { weekData, foodData } = require('./seo-data');

const SITE = 'https://momcalc.com';
const OUT = path.join(__dirname, 'public', 'pages');

const LANGS = [
  { code: 'en', name: 'English', dir: '' },
  { code: 'es', name: 'Español', dir: 'es' },
  { code: 'ar', name: 'العربية', dir: 'ar' },
  { code: 'fr', name: 'Français', dir: 'fr' },
  { code: 'de', name: 'Deutsch', dir: 'de' }
];

const CITIES = [
  { name: 'New York', slug: 'new-york', country: 'USA', lat: 40.7128, lng: -74.0060 },
  { name: 'London', slug: 'london', country: 'UK', lat: 51.5074, lng: -0.1278 },
  { name: 'Dubai', slug: 'dubai', country: 'UAE', lat: 25.2048, lng: 55.2708 },
  { name: 'Mumbai', slug: 'mumbai', country: 'India', lat: 19.0760, lng: 72.8777 },
  { name: 'Toronto', slug: 'toronto', country: 'Canada', lat: 43.6532, lng: -79.3832 },
  { name: 'Sydney', slug: 'sydney', country: 'Australia', lat: -33.8688, lng: 151.2093 }
];

const i18nDict = {
  en: { trimester: 'Trimester', week: 'Week', size: 'Size', milestones: 'Milestones', symptoms: 'Symptoms', careTip: 'Care Tip', faq: 'Common Questions', calc: 'Pregnancy Calculator', foodSafety: 'Food Safety', home: 'Home', guides: 'Guides', explore: 'Explore More Guides', doctorFinder: 'Doctor Finder' },
  es: { trimester: 'Trimestre', week: 'Semana', size: 'Tamaño', milestones: 'Hitos', symptoms: 'Síntomas', careTip: 'Consejo de Cuidado', faq: 'Preguntas Comunes', calc: 'Calculadora de Embarazo', foodSafety: 'Seguridad Alimentaria', home: 'Inicio', guides: 'Guías', explore: 'Explorar más guías', doctorFinder: 'Buscador de Doctores' },
  ar: { trimester: 'الثلث', week: 'أسبوع', size: 'الحجم', milestones: 'الإنجازات', symptoms: 'الأعراض', careTip: 'نصيحة الرعاية', faq: 'الأسئلة الشائعة', calc: 'حاسبة الحمل', foodSafety: 'سلامة الغذاء', home: 'الرئيسية', guides: 'الدلائل', explore: 'استكشاف المزيد', doctorFinder: 'البحث عن طبيب' },
  fr: { trimester: 'Trimestre', week: 'Semaine', size: 'Taille', milestones: 'Jalons', symptoms: 'Symptômes', careTip: 'Conseil de Soins', faq: 'Questions Fréquentes', calc: 'Calculateur de Grossesse', foodSafety: 'Sécurité Alimentaire', home: 'Accueil', guides: 'Guides', explore: 'Explorer plus de guides', doctorFinder: 'Trouver un Docteur' },
  de: { trimester: 'Trimester', week: 'Woche', size: 'Größe', milestones: 'Meilensteine', symptoms: 'Symptome', careTip: 'Pflege-Tipp', faq: 'Häufige Fragen', calc: 'Schwangerschaftsrechner', foodSafety: 'Lebensmittelsicherheit', home: 'Startseite', guides: 'Ratgeber', explore: 'Mehr entdecken', doctorFinder: 'Arztsuche' }
};

// Ensure output directories
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
LANGS.forEach(l => {
  if (l.dir) {
    const lPath = path.join(OUT, l.dir);
    if (!fs.existsSync(lPath)) fs.mkdirSync(lPath, { recursive: true });
  }
});

function trimesterName(t, lang = 'en') {
  const names = {
    en: ['', 'First', 'Second', 'Third'],
    es: ['', 'Primer', 'Segundo', 'Tercer'],
    ar: ['', 'الأول', 'الثاني', 'الثالث'],
    fr: ['', 'Premier', 'Deuxième', 'Troisième'],
    de: ['', 'Erstes', 'Zweites', 'Drittes']
  };
  return names[lang][t] || names.en[t];
}

// ====== PAGE TEMPLATE ======
function pageHTML({ title, metaDesc, canonical, h1, breadcrumbs, content, faqs, ogImage, prev, next, relatedLinks, lang = 'en', isSubfolder = false }) {
  const relPath = isSubfolder ? '../../' : '../';
  
  const bcSchema = JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({ "@type": "ListItem", "position": i + 1, "name": b.name, "item": b.url }))
  });

  const faqSchema = faqs ? JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  }) : null;

  const dict = i18nDict[lang] || i18nDict.en;

  return `<!DOCTYPE html>
<html lang="${lang}" data-theme="light">
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
  <meta property="og:image" content="${ogImage || 'https://momcalc.com/icon.png'}"/>
  <meta property="og:url" content="${canonical}"/>
  <meta property="og:site_name" content="MomCalc"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${title}"/>
  <meta name="twitter:description" content="${metaDesc}"/>
  <meta name="twitter:image" content="${ogImage || 'https://momcalc.com/icon.png'}"/>
  <meta name="google-site-verification" content="DlAoAxaOvkuDMmt4IeiWcqU0Poup27ppp9dc3fjlIQo" />
  <script type="application/ld+json">${bcSchema}</script>
  ${faqSchema ? `<script type="application/ld+json">${faqSchema}</script>` : ''}
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <link rel="stylesheet" href="${relPath}style.css?v=13"/>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤰</text></svg>"/>
  <style>
    body { background: var(--bg-primary); color: var(--text-primary); font-family: var(--font-body); line-height: 1.6; -webkit-font-smoothing: antialiased; }
    .navbar { display: flex; align-items: center; justify-content: space-between; padding: 0 40px; height: var(--nav-height); background: var(--bg-nav); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border-color); position: fixed; top: 0; width: 100%; z-index: 1000; box-sizing: border-box; }
    .nav-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--text-primary); }
    .nav-logo { font-size: 28px; }
    .nav-title { font-family: var(--font-display); font-weight: 800; font-size: 1.4rem; letter-spacing: -0.5px; }
    .nav-sub { font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    .nav-actions { display: flex; align-items: center; gap: 16px; }
    .nav-cta { background: var(--gradient-primary); color: white; border: none; padding: 10px 24px; border-radius: var(--radius-full); font-weight: 700; font-family: var(--font-display); cursor: pointer; transition: var(--transition); box-shadow: var(--shadow-md); font-size: 0.9rem; }
    .nav-cta:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); filter: brightness(1.1); }
    .install-btn { background: var(--gradient-primary); color: white; padding: 10px 20px; border-radius: var(--radius-full); font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; border: none; cursor: pointer; transition: var(--transition); box-shadow: var(--shadow-md); display: flex; align-items: center; gap: 8px; white-space: nowrap; }
    .theme-toggle { width: 56px; height: 32px; background: var(--bg-secondary); border-radius: 100px; border: 1px solid var(--border-color); position: relative; cursor: pointer; transition: all 0.4s; }
    .theme-toggle-knob { width: 20px; height: 20px; background: var(--gradient-primary); border-radius: 50%; position: relative; z-index: 2; transition: all 0.4s; }
    [data-theme="dark"] .theme-toggle-knob { transform: translateX(28px); background: var(--gradient-rose); }
    .seo-container { max-width: 800px; margin: 0 auto; padding: 120px 24px 80px; }
    .content-card { background: var(--bg-card); border-radius: var(--radius-2xl); border: 1px solid var(--border-card); padding: 48px; box-shadow: var(--shadow-xl); backdrop-filter: blur(10px); margin-bottom: 40px; }
    .footer { background: var(--bg-secondary); padding: 60px 40px; border-top: 1px solid var(--border-color); text-align: center; }
    .faq-item { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); margin-bottom: 12px; overflow: hidden; }
    .faq-summary { padding: 20px 24px; font-weight: 700; cursor: pointer; color: var(--text-primary); display: flex; align-items: center; justify-content: space-between; list-style: none; }
    .faq-content { padding: 0 24px 24px; color: var(--text-secondary); line-height: 1.7; }
    .seo-links a { padding: 12px 20px; background: var(--bg-secondary); border-radius: var(--radius-md); text-decoration: none; color: var(--text-primary); font-weight: 600; border: 1px solid var(--border-color); transition: var(--transition); }
    .seo-links a:hover { border-color: var(--indigo-light); background: var(--bg-card-hover); color: var(--indigo-light); transform: translateY(-2px); }
    .cta-banner { background: var(--gradient-primary); border-radius: var(--radius-2xl); padding: 60px 40px; text-align: center; margin-top: 80px; box-shadow: var(--shadow-glow); }
    .cta-btn { background: white; color: var(--indigo); padding: 16px 32px; border-radius: var(--radius-full); font-weight: 800; text-decoration: none; display: inline-block; transition: var(--transition); font-family: var(--font-display); }
    .loader { width: 48px; height: 48px; border: 5px solid var(--bg-secondary); border-bottom-color: var(--indigo-light); border-radius: 50%; display: inline-block; box-sizing: border-box; animation: rotation 1s linear infinite; }
    @keyframes rotation { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  </style>
</head>
<body data-theme="light">
  <script>window.state = { savedDoctors: [], currentWeek: 20 };</script>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="${relPath}app.js?v=13"></script>

  <nav class="navbar" role="navigation">
    <a href="/" class="nav-brand">
      <div class="nav-logo">🤰</div>
      <div>
        <div class="nav-title">MomCalc</div>
        <div class="nav-sub">Pregnancy Companion</div>
      </div>
    </a>
    <div class="nav-actions">
      <button class="install-btn" id="pwaInstallBtn" onclick="installApp()" style="display:none;">📥 Install App</button>
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
        <div class="theme-toggle-knob"></div>
      </button>
      <a href="/#calculator" class="nav-cta-link"><button class="nav-cta">${dict.calc}</button></a>
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

    <div class="nav-buttons" style="display:flex; justify-content:space-between; margin-top:40px;">
      ${prev ? `<a href="${prev.url}" class="nav-btn" style="text-decoration:none; font-weight:700; color:var(--indigo-light);">← ${prev.label}</a>` : '<div></div>'}
      ${next ? `<a href="${next.url}" class="nav-btn" style="text-decoration:none; font-weight:700; color:var(--indigo-light);">${next.label} →</a>` : '<div></div>'}
    </div>

    ${relatedLinks ? `
    <div style="margin-top: 80px;">
      <h2 style="font-family:var(--font-display); font-size:1.8rem; margin-bottom:24px; color:var(--text-primary);">${dict.explore}</h2>
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
    function updateTheme(theme) { html.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); }
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    updateTheme(savedTheme);
    themeToggle.addEventListener('click', () => { const currentTheme = html.getAttribute('data-theme'); updateTheme(currentTheme === 'dark' ? 'light' : 'dark'); });
  </script>
</body>
</html>`;
}

// ====== GENERATE PREGNANCY WEEK PAGES ======
console.log('📄 Generating pregnancy week pages (Multilingual)...');
LANGS.forEach(lang => {
  weekData.forEach((w, i) => {
    const prevW = i > 0 ? weekData[i - 1] : null;
    const nextW = i < weekData.length - 1 ? weekData[i + 1] : null;
    const slug = `pregnancy-week-${w.week}`;
    const dict = i18nDict[lang.code];
    const lPrefix = lang.dir ? `${lang.dir}/` : '';

    const relatedLinks = weekData.map(ww =>
      `<a href="pregnancy-week-${ww.week}.html">${dict.week} ${ww.week}</a>`
    ).join('');

    const content = `
      <div style="margin-bottom: 32px;">
        <span class="seo-badge seo-safe" style="background: var(--gradient-primary); color: white; border: none;">${trimesterName(w.trimester, lang.code)} ${dict.trimester}</span>
        <p style="font-size: 1.25rem; line-height: 1.6; color: var(--text-primary); margin-top: 16px; font-weight: 600;">
          ${dict.size}: ${w.size}
        </p>
        <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); margin-top: 12px;">${w.desc}</p>
      </div>

      <div class="seo-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:24px; margin-bottom:40px;">
        <div class="feature-tag" style="background:var(--bg-secondary); padding:20px; border-radius:var(--radius-xl); border:1px solid var(--border-color); display:flex; align-items:center; gap:16px;">
          <span style="font-size:24px;">📅</span>
          <div><span style="display:block; font-weight:800; font-size:1.1rem;">${dict.week} ${w.week}</span><span style="color:var(--text-muted); font-size:0.8rem;">Stage</span></div>
        </div>
        <div class="feature-tag" style="background:var(--bg-secondary); padding:20px; border-radius:var(--radius-xl); border:1px solid var(--border-color); display:flex; align-items:center; gap:16px;">
          <span style="font-size:24px;">📏</span>
          <div><span style="display:block; font-weight:800; font-size:1.1rem;">${w.length}</span><span style="color:var(--text-muted); font-size:0.8rem;">Length</span></div>
        </div>
        <div class="feature-tag" style="background:var(--bg-secondary); padding:20px; border-radius:var(--radius-xl); border:1px solid var(--border-color); display:flex; align-items:center; gap:16px;">
          <span style="font-size:24px;">⚖️</span>
          <div><span style="display:block; font-weight:800; font-size:1.1rem;">${w.weight}</span><span style="color:var(--text-muted); font-size:0.8rem;">Weight</span></div>
        </div>
      </div>

      <h2 style="font-family:var(--font-display); font-size:1.8rem; margin-bottom: 24px; color:var(--text-primary);">${dict.milestones}</h2>
      <div style="background: var(--bg-secondary); border-radius: var(--radius-xl); padding: 32px; border: 1px solid var(--border-color); margin-bottom:40px;">
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${w.devPoints.map(d => `<li style="display:flex; gap:16px; margin-bottom:16px; font-size:1.05rem; line-height:1.5;">
            <span style="color: var(--mint); font-weight: bold; font-size: 1.2rem;">✦</span> 
            <span style="color: var(--text-secondary);">${d}</span>
          </li>`).join('')}
        </ul>
      </div>

      <h2 style="font-family:var(--font-display); font-size:1.8rem; margin-bottom: 24px; color:var(--text-primary);">${dict.symptoms}</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom:40px;">
        ${w.symptoms.map(s => `<span style="background:rgba(99, 102, 241, 0.08); color:var(--indigo-light); padding:12px 20px; border-radius:var(--radius-md); font-weight:700; font-size:0.9rem; border: 1px solid var(--border-color);">${s}</span>`).join('')}
      </div>

      <h2 style="font-family:var(--font-display); font-size:1.8rem; margin-bottom: 24px; color:var(--text-primary);">${dict.careTip}</h2>
      <div style="background: var(--bg-secondary); padding: 32px; border-radius: var(--radius-xl); border: 1px solid var(--indigo-light); margin-bottom:40px;">
        <p style="font-size: 1.1rem; line-height: 1.7; font-weight: 500; color: var(--text-primary);">${w.tips}</p>
      </div>
    `;

    const faqs = [
      { q: `How large is the baby at ${w.week} weeks?`, a: `Your baby is roughly the size of a ${w.size}, measuring about ${w.length} and weighing around ${w.weight}.` },
      { q: `Which trimester is week ${w.week}?`, a: `Week ${w.week} is part of your ${trimesterName(w.trimester, lang.code)} Trimester.` }
    ];

    let ogImage = `https://momcalc.com/images/stage${Math.min(5, Math.floor(w.week/8)+1)}.png`;

    const html = pageHTML({
      title: `${dict.week} ${w.week} ${dict.calc}: ${w.title} | MomCalc`,
      metaDesc: `Learn about Week ${w.week} of pregnancy. Your baby is the size of a ${w.size}. Discover development milestones, symptoms, and health tips.`,
      canonical: `${SITE}/pages/${lPrefix}${slug}.html`,
      h1: `${dict.week} ${w.week}: ${w.title}`,
      breadcrumbs: [
        { name: dict.home, url: '/' }, { name: dict.guides, url: '/pages/' }, { name: `${dict.week} ${w.week}`, url: `/pages/${lPrefix}${slug}.html` }
      ],
      content,
      faqs,
      ogImage,
      lang: lang.code,
      isSubfolder: !!lang.dir,
      prev: prevW ? { url: `pregnancy-week-${prevW.week}.html`, label: `${dict.week} ${prevW.week}` } : null,
      next: nextW ? { url: `pregnancy-week-${nextW.week}.html`, label: `${dict.week} ${nextW.week}` } : null,
      relatedLinks
    });

    const dest = lang.dir ? path.join(OUT, lang.dir, `${slug}.html`) : path.join(OUT, `${slug}.html`);
    fs.writeFileSync(dest, html);
  });
});

// ====== GENERATE FOOD SAFETY PAGES ======
console.log('📄 Generating food safety pages (Multilingual)...');
LANGS.forEach(lang => {
  foodData.forEach(f => {
    const slug = `can-i-eat-${f.food}`;
    const dict = i18nDict[lang.code];
    const lPrefix = lang.dir ? `${lang.dir}/` : '';

    const content = `
      <div style="margin-bottom: 32px;">
        <span class="seo-badge ${f.safe ? 'seo-safe' : 'seo-unsafe'}" style="background:${f.safe ? 'var(--mint)' : 'var(--rose)'}; color:white; padding:8px 16px; border-radius:var(--radius-full);">
          ${f.safe ? '✅ Generally Safe' : '⚠️ Caution Advised'}
        </span>
        <h2 style="font-size: 1.8rem; margin-top: 24px;">${f.food}: Is it safe during pregnancy?</h2>
      </div>
      <div style="background: var(--bg-secondary); border-radius: var(--radius-xl); padding: 40px; border: 1px solid var(--border-color);">
        <p style="line-height: 1.8; color: var(--text-secondary); font-size: 1.1rem;">${f.answer}</p>
        ${f.alternatives ? `<p style="margin-top:24px;"><strong>Alternatives:</strong> ${f.alternatives}</p>` : ''}
      </div>
    `;

    const html = pageHTML({
      title: `${f.title} | ${dict.foodSafety} Guide`,
      metaDesc: `Wondering if you can eat ${f.food} during pregnancy? Read our expert safety guide.`,
      canonical: `${SITE}/pages/${lPrefix}${slug}.html`,
      h1: f.title,
      breadcrumbs: [{ name: dict.home, url: '/' }, { name: dict.foodSafety, url: '/pages/' }, { name: f.food, url: `/pages/${lPrefix}${slug}.html` }],
      content,
      faqs: [{ q: `Can I eat ${f.food} while pregnant?`, a: f.answer }],
      lang: lang.code,
      isSubfolder: !!lang.dir,
      ogImage: 'https://momcalc.com/icon.png'
    });

    const dest = lang.dir ? path.join(OUT, lang.dir, `${slug}.html`) : path.join(OUT, `${slug}.html`);
    fs.writeFileSync(dest, html);
  });
});

// ====== GENERATE CLINIC FINDER PAGES ======
console.log('📄 Generating local clinic pages...');
CITIES.forEach(city => {
  const slug = `pregnancy-doctors-in-${city.slug}`;
  const content = `
    <div style="margin-bottom: 40px;">
      <span class="seo-badge seo-safe">📍 Local Healthcare Directory</span>
      <p style="font-size: 1.2rem; line-height: 1.7; color: var(--text-secondary); margin-top: 16px;">
        We have mapped out the most trusted maternity clinics and obstetricians in <strong>${city.name}, ${city.country}</strong>.
      </p>
    </div>
    
    <div id="doctorStatusMsg" style="margin-bottom:16px; font-size:0.9rem; font-weight:600; display:none; padding:12px; border-radius:12px; background:var(--bg-secondary);"></div>
    <div id="doctorsMap" style="height:350px; border-radius:var(--radius-lg); margin-bottom:24px; display:none; border:1px solid var(--border-color); z-index: 1;"></div>

    <div id="localDoctorGrid" style="min-height: 200px; background:var(--bg-secondary); border-radius:var(--radius-xl); display:flex; align-items:center; justify-content:center; flex-direction:column; padding:40px;">
      <div class="loader"></div>
      <p style="margin-top:20px; font-weight: 600; color: var(--text-muted);">Searching live doctors in ${city.name}...</p>
    </div>

    <script>
      window.addEventListener('load', () => { 
        if (typeof fetchDoctors === 'function') {
          console.log('Triggering doctor search for ${city.name}...');
          fetchDoctors(${city.lat}, ${city.lng}); 
        } else {
          console.error('fetchDoctors function not found!');
        }
      });
    </script>
  `;

  const html = pageHTML({
    title: `Best Pregnancy Doctors in ${city.name} | MomCalc`,
    metaDesc: `Find top-rated obstetricians and maternity clinics in ${city.name}.`,
    canonical: `${SITE}/pages/${slug}.html`,
    h1: `Maternity Care in ${city.name}`,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Doctor Finder', url: '/pages/' }, { name: city.name, url: `/pages/${slug}.html` }],
    content,
    faqs: [{ q: `How to find doctors in ${city.name}?`, a: `Use MomCalc to locate verified clinics in ${city.name}.` }],
    ogImage: 'https://momcalc.com/icon.png',
    lang: 'en',
    isSubfolder: false
  });

  fs.writeFileSync(path.join(OUT, `${slug}.html`), html);
});

// ====== GENERATE INDEX PAGE ======
console.log('📄 Generating pages index...');
const indexHTML = pageHTML({
  title: 'Pregnancy Library: Guides & Resources | MomCalc',
  metaDesc: 'Complete library of pregnancy resources.',
  canonical: `${SITE}/pages/`,
  h1: 'Pregnancy Knowledge Base',
  breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Guides', url: '/pages/' }],
  content: `
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <div class="content-card">
        <h2>📅 Week by Week</h2>
        <div class="seo-links" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px,1fr)); gap:10px;">
          ${weekData.map(w => `<a href="pregnancy-week-${w.week}.html">Week ${w.week}</a>`).join('')}
        </div>
      </div>
      <div class="content-card">
        <h2>🥗 Food Safety</h2>
        <div class="seo-links" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px,1fr)); gap:10px;">
          ${foodData.map(f => `<a href="can-i-eat-${f.food}.html">${f.food}</a>`).join('')}
        </div>
      </div>
      <div class="content-card">
        <h2>🏥 Local Clinics</h2>
        <div class="seo-links" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px,1fr)); gap:10px;">
          ${CITIES.map(c => `<a href="pregnancy-doctors-in-${c.slug}.html">${c.name}</a>`).join('')}
        </div>
      </div>
    </div>
  `
});
fs.writeFileSync(path.join(OUT, 'index.html'), indexHTML);

// ====== GENERATE SITEMAP ======
console.log('📄 Generating sitemap...');
let sEntries = `  <url><loc>${SITE}/</loc><priority>1.0</priority></url>\n`;
LANGS.forEach(l => {
  const p = l.dir ? l.dir + '/' : '';
  weekData.forEach(w => sEntries += `  <url><loc>${SITE}/pages/${p}pregnancy-week-${w.week}.html</loc><priority>0.8</priority></url>\n`);
  foodData.forEach(f => sEntries += `  <url><loc>${SITE}/pages/${p}can-i-eat-${f.food}.html</loc><priority>0.7</priority></url>\n`);
});
CITIES.forEach(c => sEntries += `  <url><loc>${SITE}/pages/pregnancy-doctors-in-${c.slug}.html</loc><priority>0.6</priority></url>\n`);
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sEntries}</urlset>`);

console.log('🚀 DONE! All pages generated.');
