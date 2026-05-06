/* ============================================================
   MomCalc — Main Application Logic
   Complete 40-Week Pregnancy Data + All Trackers
   v2.0 — Baby Images, Countdown, Lbs/Inches, Screenings
   ============================================================ */

'use strict';

// ====== BABY IMAGES (user-provided PNGs in images/ folder) ======
const babyImages = {
  early:  'images/stage1.png',  // weeks 1-7
  week12: 'images/stage2.png',  // weeks 8-15
  week20: 'images/stage3.png',  // weeks 16-23
  week28: 'images/stage4.png',  // weeks 24-31
  week36: 'images/stage5.png',  // weeks 32-40
};

function getBabyImage(week) {
  if (week <= 7)  return babyImages.early;
  if (week <= 15) return babyImages.week12;
  if (week <= 23) return babyImages.week20;
  if (week <= 31) return babyImages.week28;
  return babyImages.week36;
}

// (Legacy SVG data — unused, kept to avoid deletion complexity)
const _legacySVGs = { early: `
    <!-- Embryo body - C-shaped -->

    <path d="M100 90 Q80 110 82 140 Q84 165 105 175 Q125 183 140 170 Q158 155 155 130 Q152 108 135 98 Q118 88 100 90Z" fill="#f5c5a8" stroke="#e8a888" stroke-width="1.5"/>
    <!-- Head -->
    <ellipse cx="118" cy="95" rx="25" ry="22" fill="#f8d0b8" stroke="#e8a888" stroke-width="1.5"/>
    <!-- Eye spot -->
    <ellipse cx="112" cy="92" rx="4" ry="3.5" fill="#d4887a"/>
    <!-- Arm bud -->
    <ellipse cx="148" cy="128" rx="10" ry="6" fill="#f5c5a8" stroke="#e0a890" stroke-width="1" transform="rotate(-20,148,128)"/>
    <!-- Leg bud -->
    <ellipse cx="135" cy="168" rx="8" ry="12" fill="#f5c5a8" stroke="#e0a890" stroke-width="1" transform="rotate(10,135,168)"/>
    <!-- Umbilical cord -->
    <path d="M120 175 Q115 200 118 215" stroke="#e8b0a0" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- Placenta hint -->
    <ellipse cx="120" cy="222" rx="20" ry="8" fill="#f0b8b8" opacity="0.6"/>
    <!-- Size dot comparison -->
    <text x="120" y="250" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#c0708890" font-style="normal">Embryo • Weeks 1-7</text>
  </svg>`,

  // Stage 2: 12-week fetus (weeks 8-15)
  week12: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 280" fill="none">
    <!-- Amniotic glow -->
    <ellipse cx="120" cy="140" rx="100" ry="115" fill="#fce4ec" opacity="0.25"/>
    <ellipse cx="120" cy="140" rx="88" ry="105" fill="none" stroke="#f8bbd0" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.5"/>
    <!-- Body -->
    <path d="M105 140 Q88 158 90 185 Q92 210 115 222 Q138 232 155 215 Q172 198 168 172 Q164 148 148 138 Q130 128 105 140Z" fill="#f9c9a8" stroke="#e8a880" stroke-width="1.5"/>
    <!-- Head - bigger, rounder -->
    <ellipse cx="120" cy="110" rx="35" ry="32" fill="#fadcb8" stroke="#e8a880" stroke-width="1.5"/>
    <!-- Brain veins hint -->
    <path d="M100 102 Q108 96 120 100 Q130 96 138 102" stroke="#e8b8a0" stroke-width="1" fill="none" opacity="0.5"/>
    <!-- Eyes -->
    <ellipse cx="110" cy="108" rx="5" ry="4.5" fill="#c87858"/>
    <ellipse cx="130" cy="108" rx="5" ry="4.5" fill="#c87858"/>
    <!-- Nose hint -->
    <path d="M118 114 Q120 116 122 114" stroke="#c87858" stroke-width="1.2" fill="none"/>
    <!-- Mouth -->
    <path d="M113 120 Q120 124 127 120" stroke="#c87858" stroke-width="1.2" fill="none"/>
    <!-- Ear -->
    <ellipse cx="85" cy="112" rx="5" ry="7" fill="#fadcb8" stroke="#e8a880" stroke-width="1"/>
    <ellipse cx="155" cy="112" rx="5" ry="7" fill="#fadcb8" stroke="#e8a880" stroke-width="1"/>
    <!-- Arms -->
    <path d="M92 155 Q72 165 68 180 Q66 190 76 192" stroke="#f5c5a0" stroke-width="8" stroke-linecap="round" fill="none"/>
    <!-- Tiny hand -->
    <ellipse cx="74" cy="193" rx="6" ry="5" fill="#fadcb8" stroke="#e8a880" stroke-width="1"/>
    <path d="M168 158 Q186 170 190 183 Q192 193 183 195" stroke="#f5c5a0" stroke-width="8" stroke-linecap="round" fill="none"/>
    <ellipse cx="185" cy="196" rx="6" ry="5" fill="#fadcb8" stroke="#e8a880" stroke-width="1"/>
    <!-- Legs -->
    <path d="M115 220 Q108 238 110 255" stroke="#f5c5a0" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M145 218 Q152 236 150 253" stroke="#f5c5a0" stroke-width="10" stroke-linecap="round" fill="none"/>
    <!-- Tiny feet -->
    <ellipse cx="110" cy="257" rx="9" ry="5" fill="#fadcb8" stroke="#e8a880" stroke-width="1"/>
    <ellipse cx="150" cy="255" rx="9" ry="5" fill="#fadcb8" stroke="#e8a880" stroke-width="1"/>
    <!-- Umbilical cord -->
    <path d="M130 222 Q128 240 126 250" stroke="#e8a890" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <text x="120" y="278" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#c0708890" font-style="normal">12 Weeks</text>
  </svg>`,

  // Stage 3: 20-week fetus (weeks 16-23)
  week20: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 290" fill="none">
    <ellipse cx="120" cy="145" rx="105" ry="125" fill="#fce4ec" opacity="0.2"/>
    <ellipse cx="120" cy="145" rx="95" ry="115" fill="none" stroke="#f8bbd0" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.4"/>
    <!-- Body - more developed -->
    <path d="M95 148 Q75 168 78 198 Q80 228 108 240 Q135 250 158 234 Q180 218 176 188 Q172 158 152 144 Q130 130 95 148Z" fill="#f9c4a5" stroke="#e8a078" stroke-width="1.5"/>
    <!-- Head -->
    <ellipse cx="120" cy="112" rx="38" ry="35" fill="#fadcb5" stroke="#e8a078" stroke-width="1.5"/>
    <!-- Face features -->
    <path d="M102 108 Q108 102 120 105 Q132 102 138 108" stroke="#d89068" stroke-width="1" fill="none" opacity="0.4"/>
    <ellipse cx="108" cy="109" rx="6" ry="5.5" fill="#b86848"/>
    <ellipse cx="132" cy="109" rx="6" ry="5.5" fill="#b86848"/>
    <ellipse cx="108" cy="108" rx="2" ry="2" fill="white" opacity="0.4"/>
    <ellipse cx="132" cy="108" rx="2" ry="2" fill="white" opacity="0.4"/>
    <path d="M115 118 Q120 121 125 118" stroke="#b86848" stroke-width="1.5" fill="none"/>
    <path d="M116 124 Q120 128 124 124" stroke="#c07858" stroke-width="1.5" fill="none"/>
    <!-- Ears -->
    <ellipse cx="82" cy="113" rx="6" ry="8" fill="#fadcb5" stroke="#e8a078" stroke-width="1"/>
    <ellipse cx="158" cy="113" rx="6" ry="8" fill="#fadcb5" stroke="#e8a078" stroke-width="1"/>
    <!-- Hair hint -->
    <path d="M90 95 Q105 80 120 78 Q135 80 150 95" stroke="#d0906050" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- Arms bent -->
    <path d="M82 162 Q60 172 55 188 Q53 200 62 205 Q70 208 76 200 Q80 190 78 178" stroke="#f4c4a0" stroke-width="11" stroke-linecap="round" fill="none"/>
    <!-- Left hand with fingers hint -->
    <ellipse cx="64" cy="205" rx="9" ry="7" fill="#fadcb5" stroke="#e8a078" stroke-width="1"/>
    <path d="M58 202 L55 198 M61 205 L57 202 M65 206 L62 203 M70 204 L68 200" stroke="#e8a078" stroke-width="1" stroke-linecap="round"/>
    <!-- Right arm -->
    <path d="M170 165 Q192 175 197 191 Q199 203 190 207 Q182 210 176 202" stroke="#f4c4a0" stroke-width="11" stroke-linecap="round" fill="none"/>
    <ellipse cx="192" cy="207" rx="9" ry="7" fill="#fadcb5" stroke="#e8a078" stroke-width="1"/>
    <path d="M198 204 L201 200 M195 207 L199 204 M191 208 L194 205 M186 206 L188 202" stroke="#e8a078" stroke-width="1" stroke-linecap="round"/>
    <!-- Legs curled -->
    <path d="M105 238 Q92 255 90 268 Q88 278 98 280" stroke="#f4c4a0" stroke-width="13" stroke-linecap="round" fill="none"/>
    <ellipse cx="97" cy="281" rx="11" ry="7" fill="#fadcb5" stroke="#e8a078" stroke-width="1"/>
    <path d="M155 236 Q168 253 170 266 Q172 276 162 278" stroke="#f4c4a0" stroke-width="13" stroke-linecap="round" fill="none"/>
    <ellipse cx="163" cy="279" rx="11" ry="7" fill="#fadcb5" stroke="#e8a078" stroke-width="1"/>
    <!-- Umbilical cord -->
    <path d="M128 240 Q130 255 128 265" stroke="#d89878" stroke-width="4" fill="none" stroke-linecap="round"/>
    <text x="120" y="292" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#c0708890" font-style="normal">20 Weeks</text>
  </svg>`,

  // Stage 4: 28-week fetus (weeks 24-31)  
  week28: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300" fill="none">
    <ellipse cx="120" cy="150" rx="108" ry="130" fill="#fce4ec" opacity="0.18"/>
    <ellipse cx="120" cy="150" rx="98" ry="120" fill="none" stroke="#f8bbd0" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.35"/>
    <!-- Chubby body -->
    <path d="M88 152 Q65 175 68 210 Q70 245 102 258 Q132 268 162 250 Q188 232 184 196 Q180 162 158 148 Q134 132 88 152Z" fill="#f8c09a" stroke="#e09870" stroke-width="2"/>
    <!-- Belly button hint -->
    <ellipse cx="125" cy="205" rx="4" ry="3" fill="#e09870" opacity="0.4"/>
    <!-- Head - rounder and plumper -->
    <ellipse cx="118" cy="108" rx="42" ry="40" fill="#f9d8b0" stroke="#e09870" stroke-width="2"/>
    <!-- Chubby cheeks -->
    <ellipse cx="90" cy="118" rx="14" ry="12" fill="#f8c8a8" opacity="0.6"/>
    <ellipse cx="146" cy="118" rx="14" ry="12" fill="#f8c8a8" opacity="0.6"/>
    <!-- Eyes open -->
    <ellipse cx="106" cy="108" rx="8" ry="7" fill="white" stroke="#909090" stroke-width="1"/>
    <ellipse cx="130" cy="108" rx="8" ry="7" fill="white" stroke="#909090" stroke-width="1"/>
    <ellipse cx="107" cy="108" rx="5" ry="5" fill="#6b4030"/>
    <ellipse cx="131" cy="108" rx="5" ry="5" fill="#6b4030"/>
    <ellipse cx="108" cy="107" rx="2" ry="2" fill="white"/>
    <ellipse cx="132" cy="107" rx="2" ry="2" fill="white"/>
    <!-- Nose -->
    <path d="M115 118 Q118 122 121 118" stroke="#c07858" stroke-width="1.5" fill="none"/>
    <ellipse cx="113" cy="116" rx="3.5" ry="2.5" fill="#e8a88060"/>
    <ellipse cx="123" cy="116" rx="3.5" ry="2.5" fill="#e8a88060"/>
    <!-- Smile -->
    <path d="M108 126 Q118 132 128 126" stroke="#c07858" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- Ear with detail -->
    <ellipse cx="76" cy="110" rx="7" ry="10" fill="#f9d8b0" stroke="#e09870" stroke-width="1.5"/>
    <path d="M78 105 Q76 110 78 115" stroke="#e09870" stroke-width="1" fill="none"/>
    <ellipse cx="160" cy="110" rx="7" ry="10" fill="#f9d8b0" stroke="#e09870" stroke-width="1.5"/>
    <!-- Hair -->
    <path d="M85 90 Q100 72 118 68 Q136 72 151 90" stroke="#c0906050" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M89 84 Q95 75 110 73" stroke="#c0906050" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- Arms with hands -->
    <path d="M72 168 Q48 180 44 198 Q42 212 52 217" stroke="#f4c09a" stroke-width="14" stroke-linecap="round" fill="none"/>
    <ellipse cx="50" cy="218" rx="13" ry="9" fill="#f9d8b0" stroke="#e09870" stroke-width="1.5"/>
    <path d="M42 215 Q38 210 40 205 M46 219 Q42 215 44 210 M52 221 Q49 218 51 212 M58 220 Q56 216 59 211 M62 216 Q61 212 64 208" stroke="#e09870" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    <path d="M178 172 Q202 184 206 202 Q208 216 198 221" stroke="#f4c09a" stroke-width="14" stroke-linecap="round" fill="none"/>
    <ellipse cx="200" cy="222" rx="13" ry="9" fill="#f9d8b0" stroke="#e09870" stroke-width="1.5"/>
    <path d="M208 219 Q212 214 210 209 M204 223 Q208 219 206 214 M198 225 Q201 222 199 216 M192 224 Q194 220 191 215 M188 220 Q189 216 186 212" stroke="#e09870" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    <!-- Legs -->
    <path d="M98 256 Q82 272 80 286 Q78 296 90 298" stroke="#f4c09a" stroke-width="15" stroke-linecap="round" fill="none"/>
    <ellipse cx="88" cy="299" rx="15" ry="8" fill="#f9d8b0" stroke="#e09870" stroke-width="1.5"/>
    <path d="M158 254 Q174 270 176 284 Q178 294 166 296" stroke="#f4c09a" stroke-width="15" stroke-linecap="round" fill="none"/>
    <ellipse cx="168" cy="297" rx="15" ry="8" fill="#f9d8b0" stroke="#e09870" stroke-width="1.5"/>
    <!-- Umbilical cord -->
    <path d="M125 258 Q130 272 128 282" stroke="#d09878" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <text x="120" y="302" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#c0708890" font-style="normal">28 Weeks</text>
  </svg>`,

  // Stage 5: Full-term (weeks 32-40)
  week36: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300" fill="none">
    <ellipse cx="120" cy="150" rx="110" ry="132" fill="#fce4ec" opacity="0.15"/>
    <!-- Full term - very plump, curled position -->
    <!-- Body -->
    <path d="M80 148 Q55 175 58 215 Q60 255 95 268 Q128 280 162 260 Q192 240 188 200 Q184 160 162 144 Q138 126 80 148Z" fill="#f8b890" stroke="#e09060" stroke-width="2"/>
    <!-- Belly fat rolls hint -->
    <path d="M72 180 Q65 185 68 192 Q70 198 78 196" stroke="#e09060" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M175 182 Q182 188 178 196" stroke="#e09060" stroke-width="1" fill="none" opacity="0.4"/>
    <!-- Belly button -->
    <ellipse cx="123" cy="208" rx="5" ry="4" fill="#e09060" opacity="0.35"/>
    <!-- Head - big round chubby -->
    <ellipse cx="116" cy="105" rx="46" ry="44" fill="#f8d0a8" stroke="#e09060" stroke-width="2"/>
    <!-- Very chubby cheeks -->
    <ellipse cx="82" cy="117" rx="18" ry="16" fill="#f8c098" opacity="0.7"/>
    <ellipse cx="150" cy="117" rx="18" ry="16" fill="#f8c098" opacity="0.7"/>
    <!-- Double chin hint -->
    <ellipse cx="116" cy="145" rx="25" ry="10" fill="#f8c098" opacity="0.5"/>
    <!-- Eyes open and alert -->
    <ellipse cx="100" cy="104" rx="9" ry="8" fill="white" stroke="#808080" stroke-width="1.5"/>
    <ellipse cx="132" cy="104" rx="9" ry="8" fill="white" stroke="#808080" stroke-width="1.5"/>
    <ellipse cx="101" cy="104" rx="6" ry="6" fill="#503828"/>
    <ellipse cx="133" cy="104" rx="6" ry="6" fill="#503828"/>
    <ellipse cx="102" cy="103" rx="2.5" ry="2.5" fill="white"/>
    <ellipse cx="134" cy="103" rx="2.5" ry="2.5" fill="white"/>
    <!-- Eyelashes -->
    <path d="M93 98 L91 94 M97 96 L96 92 M101 95 L101 91" stroke="#503828" stroke-width="1" stroke-linecap="round"/>
    <path d="M125 95 L125 91 M129 96 L130 92 M133 97 L135 93" stroke="#503828" stroke-width="1" stroke-linecap="round"/>
    <!-- Nose cute -->
    <ellipse cx="110" cy="116" rx="5" ry="3.5" fill="#e0906090"/>
    <ellipse cx="122" cy="116" rx="5" ry="3.5" fill="#e0906090"/>
    <path d="M108 113 Q116 111 124 113" stroke="#d07848" stroke-width="1" fill="none"/>
    <!-- Smile / pout -->
    <path d="M103 126 Q116 134 129 126" stroke="#c87848" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- Ears -->
    <ellipse cx="70" cy="107" rx="8" ry="12" fill="#f8d0a8" stroke="#e09060" stroke-width="1.5"/>
    <path d="M72 101 Q69 107 72 113" stroke="#e09060" stroke-width="1.2" fill="none"/>
    <ellipse cx="162" cy="107" rx="8" ry="12" fill="#f8d0a8" stroke="#e09060" stroke-width="1.5"/>
    <!-- Full hair -->
    <path d="M78 88 Q95 68 116 64 Q137 68 154 88" stroke="#c0804870" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M80 80 Q90 68 105 66 M152 80 Q142 68 127 66" stroke="#c0804870" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M85 74 Q100 60 116 58 Q130 60 145 74" stroke="#c0804870" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- Arms chubby with fists -->
    <path d="M62 162 Q36 176 30 198 Q28 214 40 220" stroke="#f4b888" stroke-width="18" stroke-linecap="round" fill="none"/>
    <ellipse cx="37" cy="221" rx="16" ry="12" fill="#f8d0a8" stroke="#e09060" stroke-width="1.5"/>
    <!-- Fist fingers -->
    <path d="M28 218 Q24 212 27 207 M34 223 Q30 218 33 213 M40 225 Q37 221 40 215 M46 224 Q44 219 47 214" stroke="#e09060" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <ellipse cx="26" cy="213" rx="5" ry="4" fill="#f8d0a8" stroke="#e09060" stroke-width="1"/>
    <path d="M178 166 Q204 180 210 202 Q212 218 200 224" stroke="#f4b888" stroke-width="18" stroke-linecap="round" fill="none"/>
    <ellipse cx="203" cy="225" rx="16" ry="12" fill="#f8d0a8" stroke="#e09060" stroke-width="1.5"/>
    <path d="M212 222 Q216 216 213 211 M206 227 Q210 222 207 217 M200 229 Q203 225 200 219 M194 228 Q196 223 193 218" stroke="#e09060" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <!-- Legs curled up and chubby -->
    <path d="M95 266 Q75 280 72 290" stroke="#f4b888" stroke-width="18" stroke-linecap="round" fill="none"/>
    <ellipse cx="70" cy="292" rx="18" ry="10" fill="#f8d0a8" stroke="#e09060" stroke-width="1.5"/>
    <path d="M60 290 Q56 285 60 280 M66 294 Q62 290 66 285 M72 296 Q69 292 73 287 M78 295 Q76 291 80 286 M82 292 Q81 288 85 284" stroke="#e09060" stroke-width="1.3" stroke-linecap="round" fill="none"/>
    <path d="M158 264 Q178 278 181 288" stroke="#f4b888" stroke-width="18" stroke-linecap="round" fill="none"/>
    <ellipse cx="183" cy="290" rx="18" ry="10" fill="#f8d0a8" stroke="#e09060" stroke-width="1.5"/>
    <path d="M175 291 Q171 286 175 281 M181 295 Q177 291 181 286 M187 297 Q184 293 188 288 M193 296 Q191 292 195 287 M197 293 Q196 289 200 285" stroke="#e09060" stroke-width="1.3" stroke-linecap="round" fill="none"/>
    <!-- Umbilical cord stub -->
    <path d="M125 268 Q130 277 128 284" stroke="#d09870" stroke-width="5" fill="none" stroke-linecap="round"/>
    <text x="120" y="302" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#c0708890" font-style="normal">Full Term</text>
  </svg>`
};


// ====== FETAL MEASUREMENTS (weight in lbs, crown-to-heel in inches) ======
const fetalMeasurements = {
  1:{lbs:'< 0.01',inches:'< 0.1'},2:{lbs:'< 0.01',inches:'< 0.1'},3:{lbs:'< 0.01',inches:'0.06'},
  4:{lbs:'< 0.01',inches:'0.06'},5:{lbs:'< 0.01',inches:'0.51'},6:{lbs:'0.22',inches:'5.91'},
  7:{lbs:'0.31',inches:'7.09'},8:{lbs:'0.42',inches:'8.66'},9:{lbs:'0.6',inches:'9.84'},
  10:{lbs:'0.75',inches:'10.63'},11:{lbs:'0.02',inches:'1.57'},12:{lbs:'0.03',inches:'2.13'},
  13:{lbs:'0.05',inches:'2.91'},14:{lbs:'0.09',inches:'3.42'},15:{lbs:'0.15',inches:'3.98'},
  16:{lbs:'0.22',inches:'4.57'},17:{lbs:'0.31',inches:'5.12'},18:{lbs:'0.42',inches:'5.59'},
  19:{lbs:'0.53',inches:'6.02'},20:{lbs:'0.66',inches:'6.46'},21:{lbs:'0.79',inches:'10.51'},
  22:{lbs:'0.95',inches:'10.94'},23:{lbs:'1.1',inches:'11.38'},24:{lbs:'1.32',inches:'11.81'},
  25:{lbs:'1.46',inches:'13.62'},26:{lbs:'1.68',inches:'14.02'},27:{lbs:'1.93',inches:'14.41'},
  28:{lbs:'2.2',inches:'14.8'},29:{lbs:'2.54',inches:'15.2'},30:{lbs:'2.87',inches:'15.71'},
  31:{lbs:'3.31',inches:'16.18'},32:{lbs:'3.75',inches:'16.69'},33:{lbs:'4.23',inches:'17.2'},
  34:{lbs:'4.73',inches:'17.72'},35:{lbs:'5.29',inches:'18.19'},36:{lbs:'5.78',inches:'18.66'},
  37:{lbs:'6.28',inches:'19.13'},38:{lbs:'6.83',inches:'19.61'},39:{lbs:'7.25',inches:'19.96'},
  40:{lbs:'7.5',inches:'20.08'}
};

// ====== MULTILINGUAL SYSTEM (i18n) ======
const langDict = {
  en: {
    nav_brand_title: "MomCalc",
    nav_brand_sub: "Pregnancy Companion",
    nav_home: "Home",
    nav_dashboard: "Dashboard",
    nav_features: "Features",
    btn_calc_now: "Calculate Now",
    hero_badge_text: "⭐ Trusted by 2M+ Mamas Worldwide",
    hero_title_1: "Your Complete",
    hero_title_2: "Pregnancy Journey",
    hero_title_3: "Starts Here",
    calc_title: "Pregnancy Calculator",
    calc_subtitle: "Choose your calculation method below",
    lbl_lmp: "Last Period (LMP)",
    lbl_lmp_full: "First day of your last period",
    lbl_cycles: "Average cycle length",
    tab_conception: "Conception Date",
    tab_ivf: "IVF Transfer",
    tab_ultrasound: "Ultrasound",
    btn_calculate: "Calculate My Due Date",
    btn_save_key: "Save Key",
    res_due_date: "Due Date",
    res_conception: "Conception",
    res_trimester: "Trimester",
    res_weeks: "Weeks",
    res_days_left: "Days Left",
    res_estimated: "Estimated",
    res_gestational_age: "Gestational Age",
    res_focus: "Trimester Focus",
    res_supplement: "Key Supplement",
    res_symptoms: "Mom Symptoms",
    res_fact: "Fun Fact",
    tab_overview: "Overview",
    tab_milestones: "Milestones",
    tab_health: "Health Log",
    tab_trackers: "Trackers"
  },
  ms: {
    nav_brand_title: "MomCalc",
    nav_brand_sub: "Teman Kehamilan",
    nav_home: "Utama",
    nav_dashboard: "Papan Pemuka",
    nav_features: "Ciri-ciri",
    btn_calc_now: "Kira Sekarang",
    hero_badge_text: "⭐ Dipercayai oleh 2J+ Ibu di Seluruh Dunia",
    hero_title_1: "Perjalanan",
    hero_title_2: "Kehamilan Lengkap",
    hero_title_3: "Bermula Di Sini",
    calc_title: "Kalkulator Kehamilan",
    calc_subtitle: "Pilih kaedah pengiraan anda di bawah",
    lbl_lmp: "Haid Terakir (LMP)",
    lbl_lmp_full: "Hari pertama haid terakhir anda",
    lbl_cycles: "Tempoh kitaran purata",
    tab_conception: "Tarikh Persenyawaan",
    tab_ivf: "Pemindahan IVF",
    tab_ultrasound: "Ultrasound",
    btn_calculate: "Kira Tarikh Bersalin",
    btn_save_key: "Simpan Kunci",
    res_due_date: "Tarikh Bersalin",
    res_conception: "Persenyawaan",
    res_trimester: "Trimester",
    res_weeks: "Minggu",
    res_days_left: "Hari Lagi",
    res_estimated: "Anggaran",
    res_gestational_age: "Umur Kandungan",
    res_focus: "Fokus Trimester",
    res_supplement: "Suplemen Utama",
    res_symptoms: "Gejala Ibu",
    res_fact: "Fakta Menarik",
    tab_overview: "Ringkasan",
    tab_milestones: "Pencapaian",
    tab_health: "Log Kesihatan",
    tab_trackers: "Penjejak"
  },
  zh: {
    nav_brand_title: "MomCalc",
    nav_brand_sub: "怀孕伴侣",
    nav_home: "首页",
    nav_dashboard: "仪表板",
    nav_features: "特点",
    btn_calc_now: "立即计算",
    hero_badge_text: "⭐ 全球 2M+ 妈妈的信赖",
    hero_title_1: "您的完整",
    hero_title_2: "怀孕之旅",
    hero_title_3: "从这里开始",
    calc_title: "预产期计算器",
    calc_subtitle: "在下方选择您的计算方法",
    lbl_lmp: "末次月经 (LMP)",
    lbl_lmp_full: "末次月经的第一天",
    lbl_cycles: "平均周期长度",
    tab_conception: "受孕日期",
    tab_ivf: "IVF 移植",
    tab_ultrasound: "超声波",
    btn_calculate: "计算我的预产期",
    btn_save_key: "保存密钥",
    res_due_date: "预产期",
    res_conception: "受孕",
    res_trimester: "孕期",
    res_weeks: "周",
    res_days_left: "剩余天数",
    res_estimated: "预计",
    res_gestational_age: "胎龄",
    res_focus: "孕期重点",
    res_supplement: "关键补充剂",
    res_symptoms: "妈妈状态",
    res_fact: "有趣事实",
    tab_overview: "概览",
    tab_milestones: "里程碑",
    tab_health: "健康日志",
    tab_trackers: "追踪器"
  },
  es: {
    nav_brand_title: "MomCalc",
    nav_brand_sub: "Compañero de Embarazo",
    nav_home: "Inicio",
    nav_dashboard: "Panel",
    nav_features: "Características",
    btn_calc_now: "Calcular Ahora",
    hero_badge_text: "⭐ Confiado por 2M+ de Mamás en todo el mundo",
    hero_title_1: "Tu Viaje de",
    hero_title_2: "Embarazo Completo",
    hero_title_3: "Comienza Aquí",
    calc_title: "Calculadora de Embarazo",
    calc_subtitle: "Elija su método de cálculo a continuación",
    lbl_lmp: "Último Período (LMP)",
    lbl_lmp_full: "Primer día de su último período",
    lbl_cycles: "Duración promedio del ciclo",
    tab_conception: "Fecha de Concepción",
    tab_ivf: "Transferencia IVF",
    tab_ultrasound: "Ecografía",
    btn_calculate: "Calcular mi Fecha de Parto",
    btn_save_key: "Guardar Clave",
    res_due_date: "Fecha de Parto",
    res_conception: "Concepción",
    res_trimester: "Trimestre",
    res_weeks: "Semanas",
    res_days_left: "Días restantes",
    res_estimated: "Estimado",
    res_gestational_age: "Edad Gestacional",
    res_focus: "Enfoque del Trimestre",
    res_supplement: "Suplemento Clave",
    res_symptoms: "Síntomas de Mamá",
    res_fact: "Dato Curioso",
    tab_overview: "Resumen",
    tab_milestones: "Hitos",
    tab_health: "Registro de Salud",
    tab_trackers: "Rastreadores"
  },
  ar: {
    nav_brand_title: "ماي كير برو",
    nav_brand_sub: "رفيق الحمل",
    nav_home: "الرئيسية",
    nav_dashboard: "لوحة التحكم",
    nav_features: "المميزات",
    btn_calc_now: "احسب الآن",
    hero_badge_text: "⭐ موثوق من قبل أكثر من 2 مليون أم حول العالم",
    hero_title_1: "رحلة",
    hero_title_2: "حملك الكاملة",
    hero_title_3: "تبدأ من هنا",
    calc_title: "حاسبة الحمل",
    calc_subtitle: "اختر طريقة الحساب أدناه",
    lbl_lmp: "آخر دورة (LMP)",
    lbl_lmp_full: "أول يوم من آخر دورة شهرية لك",
    lbl_cycles: "متوسط طول الدورة",
    tab_conception: "تاريخ الإخصاب",
    tab_ivf: "نقل IVF",
    tab_ultrasound: "السونار",
    btn_calculate: "احسب موعد ولادتي",
    btn_save_key: "حفظ المفتاح",
    res_due_date: "موعد الولادة",
    res_conception: "الإخصاب",
    res_trimester: "الثلث",
    res_weeks: "أسابيع",
    res_days_left: "أيام متبقية",
    res_estimated: "مقدر",
    res_gestational_age: "عمر الحمل",
    res_focus: "تركيز الثلث",
    res_supplement: "المكمل الغذائي",
    res_symptoms: "أعراض الأم",
    res_fact: "حقيقة ممتعة",
    tab_overview: "نظرة عامة",
    tab_milestones: "الإنجازات",
    tab_health: "سجل الصحة",
    tab_trackers: "تتبع"
  },
  fr: {
    nav_brand_title: "MomCalc",
    nav_brand_sub: "Compagnon de Grossesse",
    nav_home: "Accueil",
    nav_dashboard: "Tableau de Bord",
    nav_features: "Fonctionnalités",
    btn_calc_now: "Calculer Maintenant",
    hero_badge_text: "⭐ Approuvé par 2M+ de Mamans dans le monde",
    hero_title_1: "Votre Voyage",
    hero_title_2: "de Grossesse",
    hero_title_3: "Commence Ici",
    calc_title: "Calculateur de Grossesse",
    calc_subtitle: "Choisissez votre méthode de calcul ci-dessous",
    lbl_lmp: "Dernières Règles (LMP)",
    lbl_lmp_full: "Premier jour de vos dernières règles",
    lbl_cycles: "Durée moyenne du cycle",
    tab_conception: "Date de Conception",
    tab_ivf: "Transfert FIV",
    tab_ultrasound: "Échographie",
    btn_calculate: "Calculer ma Date d'Accouchement",
    btn_save_key: "Sauvegarder la Clé",
    res_due_date: "Date d'Terme",
    res_conception: "Conception",
    res_trimester: "Trimestre",
    res_weeks: "Semaines",
    res_days_left: "Jours Restants",
    res_estimated: "Estimé",
    res_gestational_age: "Âge Gestationnel",
    res_focus: "Focus du Trimestre",
    res_supplement: "Supplément Clé",
    res_symptoms: "Symptômes Maman",
    res_fact: "Fait Amusant",
    tab_overview: "Aperçu",
    tab_milestones: "Jalons",
    tab_health: "Carnet de Santé",
    tab_trackers: "Suivis"
  },
  de: {
    nav_brand_title: "MomCalc",
    nav_brand_sub: "Schwangerschaftsbegleiter",
    nav_home: "Startseite",
    nav_dashboard: "Dashboard",
    nav_features: "Funktionen",
    btn_calc_now: "Jetzt berechnen",
    hero_badge_text: "⭐ Weltweit von 2M+ Mamas vertraut",
    hero_title_1: "Deine Komplette",
    hero_title_2: "Schwangerschaft",
    hero_title_3: "Beginnt Hier",
    calc_title: "Schwangerschaftsrechner",
    calc_subtitle: "Wähle unten deine Berechnungsmethode",
    lbl_lmp: "Letzte Periode (LMP)",
    lbl_lmp_full: "Erster Tag der letzten Periode",
    lbl_cycles: "Durchschnittliche Zykluslänge",
    tab_conception: "Empfängnisdatum",
    tab_ivf: "IVF-Transfer",
    tab_ultrasound: "Ultraschall",
    btn_calculate: "Entbindungstermin berechnen",
    btn_save_key: "Schlüssel speichern",
    res_due_date: "Termin",
    res_conception: "Empfängnis",
    res_trimester: "Trimester",
    res_weeks: "Wochen",
    res_days_left: "Tage bis zur Geburt",
    res_estimated: "Voraussichtlich",
    res_gestational_age: "Schwangerschaftsalter",
    res_focus: "Trimester-Fokus",
    res_supplement: "Wichtige Ergänzung",
    res_symptoms: "Symptome",
    res_fact: "Interessanter Fakt",
    tab_overview: "Übersicht",
    tab_milestones: "Meilensteine",
    tab_health: "Gesundheitslog",
    tab_trackers: "Tracker"
  }
};

const i18n = {
  currentLang: localStorage.getItem('mamaCareLang') || (['en','es','zh','hi','ar','bn','pt','ru','ja','fr','de','ko','tr','it','vi','mr'].includes(navigator.language.slice(0,2)) ? navigator.language.slice(0,2) : 'en'),
  rtlLangs: ['ar'],
  cache: JSON.parse(localStorage.getItem('mamaCareTranslationCache') || '{}'),

  async init() {
    this.updateLayout();
    this.applyStaticTranslations();
    this.setupListeners();
  },

  updateLayout() {
    const isRTL = this.rtlLangs.includes(this.currentLang);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLang;
    const label = document.getElementById('currentLangLabel');
    if (label) {
      const labels = {
        en: 'English', es: 'Español', zh: '中文', hi: 'हिन्दी',
        ar: 'العربية', bn: 'বাংলা', pt: 'Português', ru: 'Русский',
        ja: '日本語', fr: 'Français', de: 'Deutsch', ko: '한국어',
        tr: 'Türkçe', it: 'Italiano', vi: 'Tiếng Việt', mr: 'मराठी'
      };
      label.textContent = labels[this.currentLang] || 'English';
    }
  },

  async applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(async (el) => {
      const key = el.getAttribute('data-i18n');
      const enText = langDict.en[key];
      if (enText) {
        const translatedText = await this.translate(enText);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translatedText;
        } else {
          el.textContent = translatedText;
        }
      }
    });
  },

  async translate(text) {
    if (!text || this.currentLang === 'en') return text;
    
    const cacheKey = `${this.currentLang}:${text}`;
    if (this.cache[cacheKey]) return this.cache[cacheKey];

    const dict = langDict[this.currentLang];
    if (dict) {
      const dictMatch = Object.keys(langDict.en).find(k => langDict.en[k] === text);
      if (dictMatch && dict[dictMatch]) return dict[dictMatch];
    }

    try {
      const res = await fetch("http://localhost:5000/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "en",
          target: this.currentLang,
          format: "text"
        }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      if (data.translatedText) {
        this.cache[cacheKey] = data.translatedText;
        this.saveCache();
        return data.translatedText;
      }
    } catch (e) { console.error("Translation error:", e); }
    return text;
  },

  saveCache() {
    localStorage.setItem('mamaCareTranslationCache', JSON.stringify(this.cache));
  },

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('mamaCareLang', lang);
    
    // Clear Google Translate cookie to avoid conflicts
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    
    this.init();
    if (typeof state !== 'undefined' && state.weeksPregnant) {
      showDashboard(); 
    }
  },

  setupListeners() {
    const btn = document.getElementById('langBtn');
    const dropdown = document.getElementById('langDropdown');
    if (!btn || !dropdown) return;

    btn.onclick = (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('visible');
    };

    document.querySelectorAll('.lang-dropdown-item').forEach(opt => {
      opt.onclick = () => {
        this.setLang(opt.getAttribute('data-value'));
        dropdown.classList.remove('visible');
      };
    });

    window.onclick = () => dropdown.classList.remove('visible');
  }
};

document.addEventListener('DOMContentLoaded', () => i18n.init());

// ====== PRENATAL SCREENING WINDOW DATA ======
// Each entry: { name, start (weeks), end (weeks) }
const screenings = [
  { name:'Serum integrated screening', startW:10, endW:13 },
  { name:'NT ultrasound',              startW:11, endW:14 },
  { name:'Quad marker screening',      startW:15, endW:20 },
  { name:'Fetal anatomy ultrasound',   startW:18, endW:22 },
  { name:'Glucose screening',          startW:24, endW:28 },
  { name:'Anti-D (RhD-neg. moms)',     startW:28, endW:29 },
  { name:'Screening for GBS',          startW:35, endW:37 },
];

// ====== THEME TOGGLE ======
const themeToggle = document.getElementById('themeToggle');
let isDark = localStorage.getItem('mcTheme') === 'dark';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('mcTheme', isDark ? 'dark' : 'light');
}
themeToggle.addEventListener('click', () => { isDark = !isDark; applyTheme(); });
applyTheme();

// ====== FILL ULTRASOUND WEEKS SELECT ======
const usWeeksSel = document.getElementById('usWeeks');
for (let w = 4; w <= 40; w++) {
  const o = document.createElement('option');
  o.value = w;
  (async () => {
    const wkLabel = await i18n.translate("Week");
    o.textContent = `${wkLabel} ${w}`;
  })();
  if (w === 20) o.selected = true;
  usWeeksSel.appendChild(o);
}

// ====== PREGNANCY DATA (ALL 40 WEEKS) ======
const weekData = {
  1:  { fruit:'🌱', size:'Poppy Seed',    length:'<1 mm',    weight:'<1 g',     babyCards:[
          {icon:'🧬',title:'Development',  color:'icon-rose',    body:'Fertilization occurs. The sperm and egg unite to form a single cell called a zygote. It contains all the genetic information for your baby.'},
          {icon:'🔬',title:'Cell Division', color:'icon-lavender',body:'The zygote divides rapidly into a ball of cells (morula) as it travels down the fallopian tube toward the uterus.'},
          {icon:'🌐',title:'Implantation',  color:'icon-gold',    body:'The blastocyst begins preparing to implant into the uterine wall. The outer cells will form the placenta.'},
          {icon:'💫',title:'Milestone',     color:'icon-mint',    body:'Your baby\'s sex, eye color, hair color, and every genetic trait are already determined at this very first moment.'}
        ],
        symptoms:['Possible mild implantation spotting','No obvious symptoms yet','Normal menstrual timing'],
        bodyChanges:['Uterus is normal apple size','Hormonal changes beginning'],
        tests:['Confirm pregnancy with home test','Schedule first prenatal visit'],
        nutrition:['Start prenatal vitamins with folic acid','Stay hydrated — 8–10 glasses/day'],
        exercise:['Light walking is fine','Avoid strenuous new exercise routines'],
        warnings:['Avoid alcohol, smoking, raw fish','Limit caffeine to under 200mg/day']
      },
  2:  { fruit:'🫧', size:'Sesame Seed',   length:'1–2 mm',   weight:'<1 g',     babyCards:[
          {icon:'🔬',title:'Cell Growth',   color:'icon-rose',    body:'The blastocyst is implanting firmly into the uterine lining. The amniotic sac and yolk sac are beginning to form.'},
          {icon:'🧠',title:'Neural Start',  color:'icon-lavender',body:'Three distinct cell layers form: ectoderm (skin/brain), mesoderm (muscles/bones), endoderm (organs). Everything your baby will ever be starts here.'},
          {icon:'❤️',title:'Heart Cells',   color:'icon-gold',    body:'Primitive heart cells are beginning to form, preparing for one of the most critical developmental milestones.'},
          {icon:'🌟',title:'Placenta',      color:'icon-mint',    body:'Chorionic villi are forming — these will become the placenta, your baby\'s lifeline for nutrition and oxygen.'}
        ],
        symptoms:['Missed period (main sign)','Breast tenderness begins','Mild nausea may start','Fatigue sets in'],
        bodyChanges:['hCG hormone surging','Uterine lining thickening','Cervical mucus thickening'],
        tests:['Positive home pregnancy test','Call OB to schedule 8-week visit'],
        nutrition:['400–800 mcg folic acid daily','iron-rich foods: spinach, lentils'],
        exercise:['Walking, gentle yoga','Avoid hot tubs and saunas'],
        warnings:['Avoid cat litter (toxoplasmosis)','No raw or undercooked meats']
      },
  3:  { fruit:'🫐', size:'Blueberry',     length:'3–4 mm',   weight:'<1 g',     babyCards:[
          {icon:'❤️',title:'Heart Beats',   color:'icon-rose',    body:'The tiny heart is beating! It started at about 6 weeks (week 3–4 from LMP). The heart rate is around 100–160 bpm.'},
          {icon:'🧠',title:'Brain Forming', color:'icon-lavender',body:'The neural tube is closing. This becomes the brain, spinal cord, and nervous system. Folic acid is CRITICAL right now.'},
          {icon:'👁️',title:'Eye Buds',      color:'icon-gold',    body:'Tiny optic vesicles (future eyes) are forming on the sides of the head. Ear structures also beginning to develop.'},
          {icon:'🦾',title:'Limb Buds',     color:'icon-mint',    body:'Small arm and leg buds are becoming visible. The embryo is starting to look less like a blob and more like a baby.'}
        ],
        symptoms:['Morning sickness peaks','Extreme fatigue','Frequent urination','Food aversions','Heightened smell'],
        bodyChanges:['Uterus growing to lemon size','Breast veins more visible','Areolas darkening'],
        tests:['Confirm hCG levels if needed','First prenatal visit coming up'],
        nutrition:['Ginger for nausea relief','Small frequent meals','B6 vitamin for morning sickness'],
        exercise:['Gentle walks and prenatal yoga','Rest when fatigued'],
        warnings:['Morning sickness is normal but stay hydrated','Call doctor if can\'t keep food down']
      },
  4:  { fruit:'🍇', size:'Grape',         length:'6–7 mm',   weight:'<1 g',     babyCards:[
          {icon:'🫀',title:'Heart Chambers',color:'icon-rose',    body:'The heart is developing 4 chambers. It\'s pumping blood through a simple circulatory system already supplying the embryo.'},
          {icon:'🧠',title:'Brain Grows',   color:'icon-lavender',body:'The brain is dividing into three parts: forebrain, midbrain, and hindbrain. Neural connections are starting to form.'},
          {icon:'🫁',title:'Lungs Start',   color:'icon-gold',    body:'Lung buds emerge from the primitive gut tube. The lungs won\'t function until birth but the early structures begin now.'},
          {icon:'🦷',title:'Jaw & Face',    color:'icon-mint',    body:'Facial features begin forming — the jaw, cheeks, and chin are starting to take shape. Mouth and tongue are developing.'}
        ],
        symptoms:['Strong nausea and vomiting','Bloating and gas','Mood swings','Cramps (normal)','Spotting (light — may be normal)'],
        bodyChanges:['Uterus size of small orange','Blood volume increasing 40–50%','Progesterone causing bloating'],
        tests:['First prenatal appointment (ideal 8–10 weeks)','Blood type & Rh factor','Full blood count, urine test'],
        nutrition:['Iron-rich foods + Vitamin C','Continue prenatal vitamins','Avoid grapefruit with some meds'],
        exercise:['Safe: walking, swimming, yoga','Avoid: heavy lifting, contact sports'],
        warnings:['Cramping with bleeding: call doctor','Severe vomiting (hyperemesis): seek help']
      },
  5:  { fruit:'🍋', size:'Lime',          length:'13 mm',    weight:'<5 g',     babyCards:[
          {icon:'👂',title:'Ears Forming',  color:'icon-rose',    body:'The inner ear structures are forming. Your baby will eventually be able to hear your heartbeat, voice, and music by the 2nd trimester.'},
          {icon:'🦵',title:'Limbs Grow',    color:'icon-lavender',body:'Arms and legs are lengthening with distinct hand and foot plates. Tiny finger and toe separations are beginning.'},
          {icon:'🦴',title:'Bone Starts',   color:'icon-gold',    body:'Cartilage skeleton is forming. Bone cells haven\'t mineralized yet but the framework for your baby\'s skeleton is being laid.'},
          {icon:'🧬',title:'Organs Busy',   color:'icon-mint',    body:'The liver is making blood cells (before bone marrow takes over). The kidneys are forming and will soon produce urine.'}
        ],
        symptoms:['Nausea may ease slightly','Constipation common','Headaches','Dizziness','Increased vaginal discharge'],
        bodyChanges:['Waistline thickening','Round ligament pain may start','Uterus size of grapefruit'],
        tests:['First trimester screen planning (11–14 wk)','Discuss genetic testing options'],
        nutrition:['High fiber foods for constipation','Drink plenty of water','Magnesium for headaches'],
        exercise:['Prenatal yoga great for round ligament pain','Stop if you feel pain or dizziness'],
        warnings:['Dizziness when standing: rise slowly','Sharp sudden pain: contact OB']
      },
  6:  { fruit:'🥑', size:'Avocado',       length:'15 cm',    weight:'100 g',    babyCards:[
          {icon:'👁️',title:'Eyes Open',     color:'icon-rose',    body:'Baby can blink! The eyes have been forming since week 4 and now have eyelids, pupils, and retinas developing rapidly.'},
          {icon:'✋',title:'Fingers',        color:'icon-lavender',body:'Fingers are fully separated and fingerprints are forming! The unique ridges on your baby\'s fingertips are being set for life.'},
          {icon:'🦴',title:'Bones Harden',  color:'icon-gold',    body:'Calcium is depositing into cartilage. Bones are beginning to harden and the skeleton is becoming more solid.'},
          {icon:'🤸',title:'Movement',       color:'icon-mint',    body:'Baby is moving and wiggling, but you likely can\'t feel it yet — the baby is too small. Movement is visible on ultrasound now.'}
        ],
        symptoms:['Second trimester energy boost','Nausea often improves','Nasal congestion (pregnancy rhinitis)','Leg cramps'],
        bodyChanges:['Baby bump becoming visible','Uterus now above pubic bone','Weight gain: ~3–5 kg total so far'],
        tests:['Anatomy ultrasound scheduled (18–20 wk)','NIPT (non-invasive prenatal test) available'],
        nutrition:['Omega-3 (DHA) for brain development','Calcium 1000mg/day for bone formation'],
        exercise:['Swimming is ideal at this stage','Aim for 150 min/week moderate activity'],
        warnings:['Avoid sleeping on your back after this point','Use a pregnancy pillow']
      },
  7:  { fruit:'🍌', size:'Banana',        length:'18 cm',    weight:'140 g',    babyCards:[
          {icon:'👂',title:'Baby Hears',    color:'icon-rose',    body:'Baby can hear! The inner ear is fully developed. Talk to your belly, play music — your baby can hear your voice and react to sounds.'},
          {icon:'🧠',title:'Brain Surge',   color:'icon-lavender',body:'100,000 new neurons form every minute! The brain is now growing faster than any other organ and will continue to do so throughout pregnancy.'},
          {icon:'😴',title:'Sleep Cycles',  color:'icon-gold',    body:'Baby has begun sleep/wake cycles and may even have REM sleep. You might notice more activity at certain times of day.'},
          {icon:'😊',title:'Facial Expr.',  color:'icon-mint',    body:'Baby is practicing facial expressions — smiling, frowning, squinting. These movements are important for muscle development.'}
        ],
        symptoms:['Heartburn and acid reflux begin','Swollen gums / bleeding','Backache increasing','Braxton Hicks may start'],
        bodyChanges:['Uterus size of cantaloupe','Round ligament pain common','Linea nigra (dark belly line) may appear'],
        tests:['Glucose challenge test soon (24–28 wk)','Dental check recommended','Blood pressure monitoring'],
        nutrition:['Probiotic foods for digestion','Calcium for protecting teeth and gums','Avoid lying down after eating'],
        exercise:['Pelvic floor (Kegel) exercises daily','Low-impact cardio 20–30 min most days'],
        warnings:['Bleeding gums are common but mention to dentist','Heartburn: avoid spicy food; sleep elevated']
      },
  8:  { fruit:'🥦', size:'Broccoli',      length:'22 cm',    weight:'190 g',    babyCards:[
          {icon:'👁️',title:'Eyelashes',     color:'icon-rose',    body:'Eyelashes and eyebrows are forming! The eyes can now sense light even through the closed eyelids, though vision won\'t develop until after birth.'},
          {icon:'🧠',title:'Brain Grooves', color:'icon-lavender',body:'The cerebral cortex is developing grooves (gyri and sulci) to increase surface area. This folding allows for greater intelligence.'},
          {icon:'🦷',title:'Taste Buds',    color:'icon-gold',    body:'Taste buds are forming on the tongue! Baby may already be able to taste the amniotic fluid, which is flavored by what you eat.'},
          {icon:'💪',title:'Muscle Tone',   color:'icon-mint',    body:'Muscles are strengthening and coordinating. Your baby\'s movements are becoming more purposeful and less random.'}
        ],
        symptoms:['Significant belly growth','Shortness of breath (uterus pressing diaphragm)','Frequent urination returns','Pelvic pressure increases'],
        bodyChanges:['Uterus shifts from pelvis to abdomen','Skin may stretch — start belly oil/cream','Colostrum production begins in breasts'],
        tests:['Group B Strep (GBS) test at 35–37 weeks','Weekly OB visits start soon','Non-stress test may be ordered'],
        nutrition:['Omega-3 for final brain development','Vitamin K for blood clotting preparation','Small meals to combat shortness of breath'],
        exercise:['Walking is best in late pregnancy','Avoid lying flat on back (compresses vena cava)','Gentle stretching and prenatal yoga'],
        warnings:['Difficulty breathing when resting: contact OB','Signs of labor before 37 weeks: go to hospital']
      },
  9:  { fruit:'🍈', size:'Honeydew',      length:'25 cm',    weight:'270 g',    babyCards:[
          {icon:'🫁',title:'Lung Surfactant',color:'icon-rose',   body:'Lungs are producing surfactant — the substance that prevents air sacs from collapsing. This is a critical milestone for viability.'},
          {icon:'👁️',title:'Eyes Open',     color:'icon-lavender',body:'Baby\'s eyelids can now open and close. Your baby may blink in response to bright light shining on your belly.'},
          {icon:'🦴',title:'Fat Layers',     color:'icon-gold',    body:'Fat is accumulating under the skin. This fat layer is critical for regulating body temperature after birth.'},
          {icon:'🤸',title:'Headfirst',      color:'icon-mint',    body:'Most babies are settling into a head-down position in preparation for birth. Your OB will check baby\'s position at visits.'}
        ],
        symptoms:['Contractions (Braxton Hicks)','Difficulty sleeping','Frequent urination','Swollen feet/ankles','Pelvic girdle pain'],
        bodyChanges:['Cervix may soften (effacement)','Lightening: baby drops into pelvis','Nesting instinct kicks in'],
        tests:['Weekly OB appointments','Non-stress test possible','Cervical checks may begin'],
        nutrition:['Stay well hydrated','Iron and protein for final growth','Light snacks to avoid heartburn at night'],
        exercise:['Short walks only — listen to your body','Pelvic tilts for back pain relief','Rest when you need to'],
        warnings:['Regular contractions before 37 weeks = preterm labor','Decreased fetal movement: contact doctor immediately']
      },
  10: { fruit:'🎃', size:'Pumpkin',       length:'27 cm',    weight:'340 g',    babyCards:[
          {icon:'🧠',title:'Brain Complete', color:'icon-rose',   body:'The brain has its billions of neurons fully in place! Brain development continues after birth but the basic structure is complete.'},
          {icon:'🫀',title:'Heart Ready',    color:'icon-lavender',body:'The baby\'s heart is fully formed and beating strongly at 120–160 bpm. Your doctor can easily hear it with a Doppler.'},
          {icon:'🦷',title:'Nails & Hair',   color:'icon-gold',    body:'Fingernails and toenails are fully grown. Hair on the head may be visible on ultrasound. Lanugo (fine body hair) covers the skin.'},
          {icon:'💪',title:'Full Term Soon', color:'icon-mint',    body:'Baby is gaining about 200g per week now. The final weeks are all about putting on weight and finalizing lung maturity.'}
        ],
        symptoms:['Increased pelvic pressure','Hip pain','Braxton Hicks more frequent','Nesting urge strong','Mucus plug may pass'],
        bodyChanges:['Cervix dilating/effacing','Belly dropped lower','Breasts leaking colostrum'],
        tests:['Weekly NST (non-stress test)','Group B Strep results in','Hospital bag should be ready'],
        nutrition:['Dates (may help cervical ripening)','Keep hydrated','Light easy-to-digest foods'],
        exercise:['Walking to encourage baby descending','Evening primrose oil (ask doctor first)','Reduce activity if uncomfortable'],
        warnings:['Water breaking = go to hospital immediately','Regular contractions 5 min apart = go to hospital']
      },
};

// Fill remaining weeks with smart auto-generated placeholders
const fruitMap = {
  11:{e:'🍉',n:'Watermelon'},12:{e:'🎄',n:'Christmas Tree'},13:{e:'🥬',n:'Cabbage'},
  14:{e:'🍑',n:'Peach'},15:{e:'🍎',n:'Apple'},16:{e:'🥭',n:'Mango'},
  17:{e:'🌽',n:'Ear of Corn'},18:{e:'🥕',n:'Sweet Potato'},19:{e:'🫛',n:'Mango'},
  20:{e:'🍆',n:'Banana'},21:{e:'🥝',n:'Carrot'},22:{e:'🌰',n:'Papaya'},
  23:{e:'🍍',n:'Pineapple'},24:{e:'🌽',n:'Corn Cob'},25:{e:'🥦',n:'Cauliflower'},
  26:{e:'🥬',n:'Lettuce Head'},27:{e:'🥒',n:'Cucumber'},28:{e:'🍆',n:'Eggplant'},
  29:{e:'🥥',n:'Coconut'},30:{e:'🥦',n:'Broccoli Head'},31:{e:'🥝',n:'Kiwi Bunch'},
  32:{e:'🫒',n:'Squash'},33:{e:'🥭',n:'Pineapple'},34:{e:'🎵',n:'Cantaloupe'},
  35:{e:'🥜',n:'Honeydew'},36:{e:'🫐',n:'Romaine Lettuce'},37:{e:'🥕',n:'Swiss Chard'},
  38:{e:'🌶️',n:'Leek'},39:{e:'🍈',n:'Mini Watermelon'},40:{e:'👶',n:'Full-term Baby!'}
};

const weeklyDetails = [
  null, // placeholder for index 0
  // Weeks 1-10 defined above in weekData, generate 11-40 below
];

for (let w = 11; w <= 40; w++) {
  const f = fruitMap[w] || {e:'🍎',n:'Fruit'};
  const lengthMap = {11:'4 cm',12:'5.4 cm',13:'7.4 cm',14:'8.7 cm',15:'10 cm',16:'11.6 cm',17:'13 cm',18:'14.2 cm',19:'15.3 cm',20:'16.4 cm',21:'26 cm',22:'27.8 cm',23:'28.9 cm',24:'30 cm',25:'34.6 cm',26:'35.6 cm',27:'36.6 cm',28:'37.6 cm',29:'38.6 cm',30:'39.9 cm',31:'41.1 cm',32:'42.4 cm',33:'43.7 cm',34:'45 cm',35:'46.2 cm',36:'47.4 cm',37:'48.6 cm',38:'49.8 cm',39:'50.7 cm',40:'51 cm'};
  const weightMap = {11:'7 g',12:'14 g',13:'23 g',14:'43 g',15:'70 g',16:'100 g',17:'140 g',18:'190 g',19:'240 g',20:'300 g',21:'360 g',22:'430 g',23:'501 g',24:'600 g',25:'660 g',26:'760 g',27:'875 g',28:'1 kg',29:'1.15 kg',30:'1.3 kg',31:'1.5 kg',32:'1.7 kg',33:'1.9 kg',34:'2.15 kg',35:'2.4 kg',36:'2.6 kg',37:'2.85 kg',38:'3.1 kg',39:'3.3 kg',40:'3.4 kg'};

  const tri = w <= 13 ? 1 : w <= 27 ? 2 : 3;
  const triLabel = ['','First Trimester','Second Trimester','Third Trimester'][tri];

  weekData[w] = {
    fruit: f.e, size: f.n,
    length: lengthMap[w] || '—', weight: weightMap[w] || '—',
    babyCards: generateBabyCards(w),
    symptoms: generateSymptoms(w),
    bodyChanges: generateBodyChanges(w),
    tests: generateTests(w),
    nutrition: generateNutrition(w),
    exercise: generateExercise(w),
    warnings: generateWarnings(w)
  };
}

function generateBabyCards(w) {
  const cards = [];
  if (w >= 11 && w <= 13) cards.push(
    {icon:'🧠',title:'Brain Activity',color:'icon-rose',body:`Week ${w}: The cerebellum is growing rapidly, controlling muscle coordination. Baby responds to touch on the face and limbs.`},
    {icon:'✋',title:'Reflex Grip',color:'icon-lavender',body:`Baby can open and close fists. The sucking reflex is developing — prepare for a thumb-sucker!`},
    {icon:'🦷',title:'Tooth Buds',color:'icon-gold',body:`20 baby tooth buds are forming under the gums, even though teeth won't appear until after birth.`},
    {icon:'🫁',title:'Organs Mature',color:'icon-mint',body:`The liver, spleen, and bone marrow are actively producing blood cells. Kidneys are filtering and producing urine.`}
  );
  else if (w >= 14 && w <= 20) cards.push(
    {icon:'👂',title:'Hears You',color:'icon-rose',body:`Baby's ears are positioned correctly and can hear sounds! Talk, sing, and play music — your baby is listening.`},
    {icon:'🤸',title:'Quickening',color:'icon-lavender',body:`Those butterfly flutters you feel? That's your baby moving! Fetal movement (quickening) is felt between weeks 16–22.`},
    {icon:'🧠',title:'Growth Spurt',color:'icon-gold',body:`The brain is developing rapidly. Motor neurons are connecting, allowing more coordinated movement patterns.`},
    {icon:'👁️',title:'Eyes Sensitive',color:'icon-mint',body:`Baby's eyes are sensitive to light. Though eyelids are still fused, the pupils will react to bright light on your belly.`}
  );
  else if (w >= 21 && w <= 27) cards.push(
    {icon:'🫁',title:'Lung Surfactant',color:'icon-rose',body:`Lungs are producing surfactant — critical for breathing air after birth. This is a key viability milestone from week 24.`},
    {icon:'👁️',title:'Eyes Open',color:'icon-lavender',body:`Baby's eyelids open and close. Eyes can now track light, and the retina is fully developed and sensitive.`},
    {icon:'🦴',title:'Bone Hardening',color:'icon-gold',body:`Calcium continues to strengthen bones. The skull remains soft and flexible to allow passage through the birth canal.`},
    {icon:'🧠',title:'Brain Folds',color:'icon-mint',body:`The brain is rapidly folding and furrowing to increase surface area — creating the characteristic wrinkled appearance of a full-term brain.`}
  );
  else cards.push(
    {icon:'🫁',title:'Lungs Maturing',color:'icon-rose',body:`Week ${w}: Lungs are nearly ready for breathing. Surfactant production is at full capacity from week 34 onwards.`},
    {icon:'🦴',title:'Fat Building',color:'icon-lavender',body:`Baby is gaining critical fat reserves — about 200g per week. Fat keeps baby warm and provides energy after birth.`},
    {icon:'🧠',title:'Brain Primed',color:'icon-gold',body:`The brain is still developing rapidly. Week ${w} sees significant neurological maturation for all senses.`},
    {icon:'💪',title:'Getting Ready',color:'icon-mint',body:`Baby is moving into a head-down position. Most organs are fully formed and just maturing for life outside the womb.`}
  );
  return cards;
}

function generateSymptoms(w) {
  if (w <= 13) return ['Nausea and morning sickness','Fatigue and tiredness','Frequent urination','Breast tenderness','Mood swings'];
  if (w <= 27) return ['Round ligament pain','Backache','Heartburn','Nasal congestion','Increased appetite'];
  return ['Braxton Hicks contractions','Shortness of breath','Swollen feet and ankles','Pelvic pressure','Sleep difficulties'];
}

function generateBodyChanges(w) {
  if (w <= 13) return ['Uterus growing','Hormone levels surging','Blood volume increasing','Breast changes continuing'];
  if (w <= 27) return ['Visible baby bump','Skin changes (linea nigra, glow)','Weight gain ongoing','Center of gravity shifting'];
  return ['Cervix softening','Baby dropping (lightening)','Colostrum may leak','Nesting instinct peaks'];
}

function generateTests(w) {
  const testsByWeek = {
    11:['Nuchal translucency ultrasound (11–14 wks)','NIPT blood test option'],
    12:['NT scan if not done','First trimester bloodwork'],
    16:['AFP / quad screen possible','Check baby\'s gender if desired'],
    18:['Anatomy ultrasound (18–20 wks)'],
    20:['Detailed anatomy scan today!','Confirm placenta position'],
    24:['Glucose challenge test (GDM screen)','Blood pressure check'],
    28:['Anti-D injection if Rh negative','Iron levels recheck'],
    32:['Growth ultrasound','Fetal position check'],
    35:['Group B Strep (GBS) swab test'],
    36:['Weekly cervical checks begin','Non-stress test possible'],
    37:['Weekly OB visits','NST (non-stress test)'],
    38:['Weekly visits + NST','Cervical ripening discussion'],
    39:['Induction discussion if needed'],
    40:['Post-dates monitoring','Biophysical profile']
  };
  return testsByWeek[w] || ['Regular prenatal checkup','Blood pressure and urine check'];
}

function generateNutrition(w) {
  if (w <= 13) return ['Folic acid 400–800 mcg/day','Ginger for nausea','Small frequent meals','Stay hydrated'];
  if (w <= 27) return ['Calcium 1000 mg/day','DHA 200–300 mg/day','Iron-rich foods with Vitamin C','High-fiber foods for constipation'];
  return ['Protein for final growth','Iron for blood production','Small meals for heartburn','Dates may help cervical ripening'];
}

function generateExercise(w) {
  if (w <= 20) return ['Walking 30 min/day','Prenatal yoga','Swimming','Avoid heavy lifting'];
  if (w <= 32) return ['Low-impact cardio','Prenatal pilates','Pelvic floor exercises (Kegels)','Swimming'];
  return ['Gentle walking','Pelvic tilts','Breathing exercises','Rest when needed'];
}

function generateWarnings(w) {
  if (w <= 20) return ['Heavy bleeding: call doctor','Severe cramping: seek help','No alcohol or smoking','Avoid raw fish and meats'];
  if (w <= 32) return ['Sudden swelling: call OB','Decreased fetal movement: contact doctor','BP ≥140/90: go to hospital','Preterm labor signs: seek care'];
  return ['Regular contractions: go to hospital','Water breaking: go immediately','No fetal movement: emergency','Signs of preeclampsia: call now'];
}

// ====== TIMELINE DATA ======
const timelineEvents = [
  {week:4,  name:'Positive Pregnancy Test',    desc:'Take a home pregnancy test. If positive, schedule your first OB appointment. Begin prenatal vitamins if not already.'},
  {week:8,  name:'First Prenatal Visit',        desc:'Full check-up: blood tests, urine test, blood pressure, Rh factor, STI screening. Your due date is confirmed.'},
  {week:11, name:'Nuchal Translucency Scan',    desc:'Ultrasound to measure fluid behind baby\'s neck. Screens for Down syndrome and other chromosomal conditions.'},
  {week:12, name:'First Trimester Complete 🎉', desc:'You\'ve reached the end of the highest-risk period! Miscarriage risk drops significantly after week 12.'},
  {week:13, name:'NIPT Blood Test',             desc:'Non-invasive prenatal test screens for chromosomal abnormalities using cell-free DNA in your blood.'},
  {week:16, name:'Second Trimester Checkup',    desc:'OB visit: heartbeat check, blood pressure, weight, urine. May discuss genetic screening results.'},
  {week:18, name:'Anatomy Ultrasound',          desc:'Detailed scan of all baby\'s organs, spine, heart, and measurements. Gender can often be determined here!'},
  {week:20, name:'Halfway There! 🌟',           desc:'20 weeks! You are exactly halfway through your pregnancy. Celebrate this major milestone!'},
  {week:24, name:'Glucose Screening Test',      desc:'Drink a glucose solution and have blood drawn 1 hour later to screen for gestational diabetes.'},
  {week:28, name:'Third Trimester Begins',      desc:'Rh-negative moms receive Anti-D injection. Iron levels re-checked. Baby is now viable outside the womb.'},
  {week:32, name:'Growth Scan',                 desc:'Ultrasound to check baby\'s estimated weight, position, amniotic fluid levels, and placenta location.'},
  {week:35, name:'Group B Strep Test',          desc:'Vaginal/rectal swab to check for GBS bacteria. If positive, you\'ll receive IV antibiotics during labor.'},
  {week:36, name:'Weekly OB Visits Begin',      desc:'From now until birth, you\'ll see your OB every week. Cervical checks and baby position monitoring.'},
  {week:37, name:'Full Term! 🎊',               desc:'Congratulations — your baby is full term! Any day now is safe for delivery. Stay close to the hospital.'},
  {week:40, name:'Due Date! 👶',                desc:'Your estimated due date! Only 5% of babies arrive exactly on their due date — be patient and watch for signs of labor.'},
];

// ====== APP STATE ======
let state = {
  dueDate: null,
  lmpDate: null,
  currentWeek: 1,
  activeMethod: 'lmp',
  kickCount: 0,
  kickSessionStart: null,
  kickTimerInterval: null,
  contractionActive: false,
  contractionStart: null,
  contractionTimerInterval: null,
  contractions: [],
  weightLog: [],
  moodLog: [],
  bpLog: [],
  symptomLog: [],
  selectedSymptoms: [],
  activeMainTab: 'baby',
  countdownInterval: null,
  savedDoctors: [] // Array of doctor IDs/unique strings
};

// Load from localStorage
function loadState() {
  const saved = localStorage.getItem('mcState');
  if (saved) {
    const parsed = JSON.parse(saved);
    state = { ...state, ...parsed };
    
    // Sync calculation method UI
    if (state.activeMethod) {
      switchMethod(state.activeMethod);
    }

    if (state.dueDate) {
      state.dueDate = new Date(state.dueDate);
      showDashboard();
    }
  }
}

function saveState() {
  const toSave = { ...state };
  if (toSave.kickTimerInterval) toSave.kickTimerInterval = null;
  if (toSave.contractionTimerInterval) toSave.contractionTimerInterval = null;
  localStorage.setItem('mcState', JSON.stringify(toSave));
}

// Helper to show validation error
function showValidationError(id) {
  const el = document.getElementById(id);
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.classList.remove('show');
  
  if (el) {
    el.classList.add('input-invalid');
    el.focus();
    setTimeout(() => el.classList.remove('input-invalid'), 1000);
  }
}

// ====== CALCULATION METHOD SWITCHER ======
function switchMethod(method) {
  state.activeMethod = method;
  saveState();
  if (typeof gtag === 'function') {
    gtag('event', 'switch_method', { method: method });
  }
  document.querySelectorAll('.method-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.method-content').forEach(c => { c.classList.remove('active'); c.style.display = 'none'; });
  document.getElementById(`tab-${method}`).classList.add('active');
  const panel = document.getElementById(`method-${method}`);
  panel.classList.add('active');
  panel.style.display = 'block';
}

// ====== CALCULATE DUE DATE (local-only fallback — overridden below by async API version) ======
function _calculateLocal() {
  const overlay = document.getElementById('loadingOverlay');
  overlay.classList.add('show');

  setTimeout(() => {
    let dueDate = null;
    let lmpDate = null;
    const today = new Date();
    today.setHours(0,0,0,0);

    if (state.activeMethod === 'lmp') {
      const el = document.getElementById('lmpDate');
      const lmp = el ? el.value : '';
      if (!lmp) { overlay.classList.remove('show'); alert('Please enter your last menstrual period date.'); return; }
      const lmpD = new Date(lmp);
      const cycleEl = document.getElementById('cycleLength');
      const cycle = cycleEl ? parseInt(cycleEl.value) : 28;
      const offset = cycle - 28;
      dueDate = new Date(lmpD);
      dueDate.setDate(dueDate.getDate() + 280 + offset);
      lmpDate = lmpD;

    } else if (state.activeMethod === 'conception') {
      const el = document.getElementById('conceptionDate');
      const con = el ? el.value : '';
      if (!con) { overlay.classList.remove('show'); alert('Please enter your conception date.'); return; }
      dueDate = new Date(con);
      dueDate.setDate(dueDate.getDate() + 266);
      lmpDate = new Date(con);
      lmpDate.setDate(lmpDate.getDate() - 14);

    } else if (state.activeMethod === 'ivf') {
      const el = document.getElementById('ivfDate');
      const ivf = el ? el.value : '';
      if (!ivf) { overlay.classList.remove('show'); alert('Please enter your IVF transfer date.'); return; }
      const ageEl = document.getElementById('embryoAge');
      const age = ageEl ? parseInt(ageEl.value) : 3;
      dueDate = new Date(ivf);
      dueDate.setDate(dueDate.getDate() + (266 - age));
      lmpDate = new Date(dueDate);
      lmpDate.setDate(lmpDate.getDate() - 280);

    } else if (state.activeMethod === 'ultrasound') {
      const el = document.getElementById('ultrasoundDate');
      const us = el ? el.value : '';
      if (!us) { overlay.classList.remove('show'); alert('Please enter your ultrasound date.'); return; }
      const usWEl = document.getElementById('usWeeks');
      const usDEl = document.getElementById('usDays');
      const usW = usWEl ? parseInt(usWEl.value) : 0;
      const usD = usDEl ? parseInt(usDEl.value) : 0;
      const usDate = new Date(us);
      const daysPregnant = usW * 7 + usD;
      lmpDate = new Date(usDate);
      lmpDate.setDate(lmpDate.getDate() - daysPregnant);
      dueDate = new Date(lmpDate);
      dueDate.setDate(dueDate.getDate() + 280);
    }

    state.dueDate = dueDate;
    state.lmpDate = lmpDate;
    saveState();
    overlay.classList.remove('show');
    showDashboard();
  }, 1200);
}

// ====== SHOW DASHBOARD ======
async function showDashboard() {
  const today = new Date();
  today.setHours(0,0,0,0);
  const dueDate = new Date(state.dueDate);
  dueDate.setHours(0,0,0,0);
  const lmpDate = new Date(state.lmpDate);
  lmpDate.setHours(0,0,0,0);

  const daysPregnant = Math.floor((today - lmpDate) / 86400000);
  const weeksPregnant = Math.max(1, Math.min(40, Math.floor(daysPregnant / 7)));
  const extraDays = Math.max(0, daysPregnant % 7);
  const daysLeft = Math.max(0, Math.floor((dueDate - today) / 86400000));
  const trimester = weeksPregnant <= 13 ? '1st Trimester 🌸' : weeksPregnant <= 27 ? '2nd Trimester ✨' : '3rd Trimester ⭐';
  const conceptionDate = new Date(lmpDate);
  conceptionDate.setDate(conceptionDate.getDate() + 14);

  // Fill Results Banner
  document.getElementById('rDueDate').textContent = fmt(dueDate);
  document.getElementById('rDueSub').textContent = `${daysLeft} ` + (await i18n.translate("days to go"));
  document.getElementById('rWeek').textContent = `Week ${weeksPregnant}+${extraDays}`;
  document.getElementById('rTrimester').textContent = await i18n.translate(trimester);
  document.getElementById('rDaysLeft').textContent = daysLeft;
  document.getElementById('rConception').textContent = fmt(conceptionDate);

  // Render local trimester details (Journey Map & Info Grid)
  await renderTrimesterDetails(weeksPregnant, lmpDate, dueDate);

  // Progress Bar
  const pct = Math.min(100, Math.round((weeksPregnant / 40) * 100));
  document.getElementById('progressPct').textContent = `${pct}%`;
  buildProgressBar(weeksPregnant);

  // Week Buttons
  buildWeekButtons(weeksPregnant);
  state.currentWeek = weeksPregnant;

  // Timeline
  buildTimeline(lmpDate, weeksPregnant);

  // Screening dates
  buildScreeningDates(lmpDate);

  // Show
  document.getElementById('dashboard').classList.add('visible');
  document.getElementById('nav-dash').classList.add('active');

  // Restore trackers
  renderWeightChart();
  renderBPLog();
  renderMoodHistory();
  renderContractionLog();

  // Load week data
  loadWeekData(weeksPregnant);

  // Start live EDD countdown
  startCountdown(new Date(state.dueDate));

  // Scroll to dashboard
  setTimeout(() => {
    document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

// ====== LIVE EDD COUNTDOWN ======
function startCountdown(dueDate) {
  if (state.countdownInterval) clearInterval(state.countdownInterval);
  const el = document.getElementById('eddCountdown');
  if (!el) return;
  function tick() {
    const now = new Date();
    const diff = dueDate - now;
    if (diff <= 0) { el.textContent = '00:00:00:00 🎉 Baby is here!'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000).toString().padStart(2,'0');
    const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2,'0');
    const s = Math.floor((diff % 60000) / 1000).toString().padStart(2,'0');
    el.textContent = `${d}d : ${h}h : ${m}m : ${s}s`;
  }
  tick();
  state.countdownInterval = setInterval(tick, 1000);
}

// ====== SCREENING DATE RANGES ======
function buildScreeningDates(lmpDate) {
  const el = document.getElementById('screeningDates');
  if (!el) return;
  el.innerHTML = screenings.map(s => {
    const startDate = new Date(lmpDate);
    startDate.setDate(startDate.getDate() + s.startW * 7);
    const endDate = new Date(lmpDate);
    endDate.setDate(endDate.getDate() + s.endW * 7);
    const today = new Date();
    const active = today >= startDate && today <= endDate;
    const past   = today > endDate;
    return `
      <div class="screening-row ${active ? 'screening-active' : past ? 'screening-past' : ''} fade-in">
        <span class="screening-name">${active ? '🟢' : past ? '✅' : '⏳'} ${s.name}</span>
        <span class="screening-dates">${fmtShort(startDate)} – ${fmtShort(endDate)}</span>
      </div>
    `;
  }).join('');
}

function fmt(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// ====== PROGRESS BAR ======
function buildProgressBar(currentWeek) {
  const bar = document.getElementById('trimesterBar');
  bar.innerHTML = '';
  for (let w = 1; w <= 40; w++) {
    const seg = document.createElement('div');
    seg.className = 'tri-segment';
    if (w <= currentWeek) {
      if (w <= 13) seg.classList.add('filled-1');
      else if (w <= 27) seg.classList.add('filled-2');
      else seg.classList.add('filled-3');
    }
    bar.appendChild(seg);
  }
}

// ====== WEEK BUTTONS ======
function buildWeekButtons(currentWeek) {
  const scroll = document.getElementById('weekScroll');
  scroll.innerHTML = '';
  for (let w = 1; w <= 40; w++) {
    const btn = document.createElement('button');
    btn.className = 'week-btn';
    btn.textContent = w;
    btn.setAttribute('aria-label', `Go to week ${w}`);
    if (w === currentWeek) btn.classList.add('active');
    btn.addEventListener('click', () => selectWeek(w));
    scroll.appendChild(btn);
  }
  setTimeout(() => {
    const active = scroll.querySelector('.week-btn.active');
    if (active) active.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  }, 100);
}

async function selectWeek(w) {
  state.currentWeek = w;
  document.querySelectorAll('.week-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i + 1 === w);
  });
  document.getElementById('currentWeekBadge').textContent = `Week ${w}`;
  await loadWeekData(w);
  saveState();
}

// ±week navigation (header buttons)
function prevWeek() { if (state.currentWeek > 1)  selectWeek(state.currentWeek - 1); }
function nextWeek() { if (state.currentWeek < 40) selectWeek(state.currentWeek + 1); }

// ====== LOAD WEEK DATA ======
async function loadWeekData(w) {
  const d = weekData[w];
  if (!d) return;
  const m = fetalMeasurements[w] || { lbs:'—', inches:'—' };

  // ── Baby Tab header ──
  const wkLabel = await i18n.translate("Week");
  document.getElementById('babyWeekTitle').textContent = `${wkLabel} ${w}`;
  document.getElementById('babyWeekSub').textContent = await i18n.translate(`Your baby's incredible journey — size of a ${d.size}`);

  // ── Baby PNG image (from images/ folder) ──
  const svgContainer = document.getElementById('babyIllustration');
  if (svgContainer) {
    const src = getBabyImage(w);
    svgContainer.innerHTML = `<img src="${src}" alt="Baby development at week ${w}" 
      style="width:100%;height:auto;border-radius:16px;display:block;
             filter:drop-shadow(0 6px 18px rgba(108,59,228,0.15))"
      onerror="this.style.opacity=0.3" />`;
  }

  // ── Fruit emoji (keep as fallback) ──
  const fruitEl = document.getElementById('babyFruit');
  if (fruitEl) { fruitEl.textContent = d.fruit; }

  // ── Size name & measurements ──
  document.getElementById('babySizeName').textContent = await i18n.translate(d.size);
  document.getElementById('babyLength').textContent = d.length;
  document.getElementById('babyWeight').textContent = d.weight;

  // ── NEW: lbs & inches ──
  const lbsEl = document.getElementById('babyWeightLbs');
  const inEl  = document.getElementById('babyCrownHeel');
  if (lbsEl) lbsEl.textContent = m.lbs + ' lbs';
  if (inEl)  inEl.textContent  = m.inches + ' in';

  // ── Baby cards ──
  const cards = document.getElementById('babyInfoCards');
  cards.innerHTML = d.babyCards.map(c => `
    <div class="info-card fade-in">
      <div class="info-card-header">
        <div class="info-card-icon ${c.color}">${c.icon}</div>
        <div class="info-card-title">${c.title}</div>
      </div>
      <div class="info-card-body">${c.body}</div>
    </div>
  `).join('');

  // ── Mom Tab ──
  document.getElementById('momWeekTitle').textContent = `Week ${w}`;
  const momGrid = document.getElementById('momGrid');
  momGrid.innerHTML = `
    <div class="mom-card">
      <div class="mom-card-top"><span class="mom-card-icon">🤒</span><span class="mom-card-title">Common Symptoms</span></div>
      <div class="mom-tag-list">${d.symptoms.map(s=>`<span class="mom-tag">${s}</span>`).join('')}</div>
    </div>
    <div class="mom-card">
      <div class="mom-card-top"><span class="mom-card-icon">🫀</span><span class="mom-card-title">Body Changes</span></div>
      <div class="mom-tag-list">${d.bodyChanges.map(s=>`<span class="mom-tag lavender-tag">${s}</span>`).join('')}</div>
    </div>
    <div class="mom-card">
      <div class="mom-card-top"><span class="mom-card-icon">🔬</span><span class="mom-card-title">Tests & Screenings</span></div>
      <div class="mom-tag-list">${d.tests.map(s=>`<span class="mom-tag gold-tag">${s}</span>`).join('')}</div>
    </div>
    <div class="mom-card">
      <div class="mom-card-top"><span class="mom-card-icon">🥗</span><span class="mom-card-title">Nutrition Tips</span></div>
      <div class="mom-tag-list">${d.nutrition.map(s=>`<span class="mom-tag mint-tag">${s}</span>`).join('')}</div>
    </div>
    <div class="mom-card">
      <div class="mom-card-top"><span class="mom-card-icon">🏃</span><span class="mom-card-title">Exercise Guide</span></div>
      <div class="mom-tag-list">${d.exercise.map(s=>`<span class="mom-tag sky-tag">${s}</span>`).join('')}</div>
    </div>
  `;

  const warnings = document.getElementById('momWarnings');
  warnings.innerHTML = `
    <div class="warning-card-header">
      <span style="font-size:20px">⚠️</span>
      <h4>Warning Signs — Week ${w}</h4>
    </div>
    <ul class="warning-list">
      ${d.warnings.map(w=>`<li>${w}</li>`).join('')}
    </ul>
  `;
}

function fmtShort(d) {
  return new Date(d).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'2-digit'});
}

// ====== MAIN TABS ======
function switchMainTab(tab) {
  state.activeMainTab = tab;
  document.querySelectorAll('.main-tab').forEach(t => {
    t.classList.toggle('active', t.id === `mainTab-${tab}`);
    t.setAttribute('aria-selected', t.id === `mainTab-${tab}`);
  });
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.id === `panel-${tab}`);
  });

  if (tab === 'doctors' && typeof updateDoctorAiRecommendation === 'function') {
    updateDoctorAiRecommendation();
  }
}

// ====== TIMELINE ======
function buildTimeline(lmpDate, currentWeek) {
  const wrapper = document.getElementById('timelineWrapper');
  wrapper.innerHTML = timelineEvents.map(ev => {
    const evDate = new Date(lmpDate);
    evDate.setDate(evDate.getDate() + ev.week * 7);
    const done = currentWeek > ev.week;
    const current = currentWeek === ev.week;
    const cls = done ? 'done' : current ? '' : 'upcoming';
    return `
      <div class="timeline-item ${cls}">
        <div class="timeline-week">Week ${ev.week}${done?' ✓':current?' ← You are here':''}</div>
        <div class="timeline-name">${ev.name}</div>
        <div class="timeline-desc">${ev.desc}</div>
        <div class="timeline-date">📅 ${fmt(evDate)}</div>
      </div>
    `;
  }).join('');
}

// ====== KICK COUNTER ======
function recordKick() {
  const now = new Date();
  if (!state.kickSessionStart) {
    state.kickSessionStart = Date.now();
    startKickTimer();
  }
  state.kickCount++;
  state.kickSession = (state.kickSession || 0) + 1;
  saveState();
  if (typeof gtag === 'function') {
    gtag('event', 'record_kick', { timestamp: now.toISOString() });
  }
  document.getElementById('kickCount').textContent = state.kickCount;
  document.getElementById('kickSession').textContent = state.kickSession;

  const btn = document.getElementById('kickBtn');
  btn.style.transform = 'scale(0.96)';
  setTimeout(() => btn.style.transform = '', 150);

  if (state.kickCount === 10) {
    const mins = Math.round((Date.now() - state.kickSessionStart) / 60000);
    setTimeout(() => alert(`🎉 10 kicks reached in ${mins} minutes! Your baby is active and healthy.`), 100);
  }

  // Avg
  const mins = (Date.now() - state.kickSessionStart) / 60000;
  document.getElementById('kickAvg').textContent = mins > 0 ? Math.round(state.kickCount / mins * 60) + '/hr' : '—';
  saveState();
}

function startKickTimer() {
  if (state.kickTimerInterval) clearInterval(state.kickTimerInterval);
  state.kickTimerInterval = setInterval(() => {
    if (!state.kickSessionStart) return;
    const elapsed = Math.floor((Date.now() - state.kickSessionStart) / 1000);
    const m = Math.floor(elapsed / 60).toString().padStart(2,'0');
    const s = (elapsed % 60).toString().padStart(2,'0');
    document.getElementById('kickTimer').textContent = `${m}:${s}`;
  }, 1000);
}

function resetKicks() {
  state.kickCount = 0;
  state.kickSessionStart = null;
  if (state.kickTimerInterval) clearInterval(state.kickTimerInterval);
  document.getElementById('kickCount').textContent = '0';
  document.getElementById('kickTimer').textContent = '00:00';
  document.getElementById('kickAvg').textContent = '—';
  saveState();
}

function newKickSession() {
  state.kickCount = 0;
  state.kickSession = 0;
  state.kickSessionStart = null;
  if (state.kickTimerInterval) clearInterval(state.kickTimerInterval);
  document.getElementById('kickCount').textContent = '0';
  document.getElementById('kickSession').textContent = '0';
  document.getElementById('kickTimer').textContent = '00:00';
  document.getElementById('kickAvg').textContent = '—';
  saveState();
}

// ====== CONTRACTION TIMER ======
function toggleContraction() {
  if (!state.contractionActive) {
    state.contractionActive = true;
    state.contractionStart = Date.now();
    document.getElementById('contractionBtn').textContent = '■ Stop Contraction';
    document.getElementById('contractionBtn').style.background = 'linear-gradient(135deg, #e85090, #c03070)';
    document.getElementById('contractionStatus').textContent = 'Contraction in progress…';
    state.contractionTimerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - state.contractionStart) / 1000);
      const m = Math.floor(elapsed / 60).toString().padStart(2,'0');
      const s = (elapsed % 60).toString().padStart(2,'0');
      document.getElementById('contractionTime').textContent = `${m}:${s}`;
    }, 1000);
  } else {
    const duration = Math.floor((Date.now() - state.contractionStart) / 1000);
    clearInterval(state.contractionTimerInterval);
    state.contractionActive = false;

    const prevEnd = state.contractions.length ? state.contractions[state.contractions.length-1].endTime : null;
    const frequency = prevEnd ? Math.floor((state.contractionStart - prevEnd) / 1000) : null;

    state.contractions.push({ start: state.contractionStart, endTime: Date.now(), duration, frequency });
    document.getElementById('contractionCount').textContent = state.contractions.length;

    const avgDur = Math.round(state.contractions.reduce((a,c)=>a+c.duration,0)/state.contractions.length);
    document.getElementById('avgDuration').textContent = `${avgDur}s`;

    const freqs = state.contractions.filter(c=>c.frequency).map(c=>c.frequency);
    if (freqs.length) {
      const avgFreq = Math.round(freqs.reduce((a,b)=>a+b,0)/freqs.length);
      document.getElementById('avgFrequency').textContent = avgFreq >= 60 ? `${Math.round(avgFreq/60)}m` : `${avgFreq}s`;
    }

    document.getElementById('contractionBtn').textContent = '▶ Start Contraction';
    document.getElementById('contractionBtn').style.background = '';
    document.getElementById('contractionStatus').textContent = `Last: ${duration}s${frequency ? ` | Gap: ${Math.round(frequency/60)}m` : ''}`;
    document.getElementById('contractionTime').textContent = '00:00';

    renderContractionLog();
    saveState();
  }
}

function renderContractionLog() {
  const log = document.getElementById('contractionLog');
  if (!state.contractions.length) {
    log.innerHTML = '<div style="font-size:.8rem;color:var(--text-muted);text-align:center;padding:10px">No contractions recorded yet</div>';
    return;
  }
  log.innerHTML = [...state.contractions].reverse().slice(0,8).map((c,i) => `
    <div class="contraction-entry">
      <span style="color:var(--lavender);font-weight:700">#${state.contractions.length - i}</span>
      <span>${c.duration}s duration</span>
      <span>${c.frequency ? Math.round(c.frequency/60)+'m gap' : 'First'}</span>
      <span style="color:var(--text-muted)">${new Date(c.start).toLocaleTimeString()}</span>
    </div>
  `).join('');
}

function resetContractions() {
  state.contractions = [];
  state.contractionActive = false;
  clearInterval(state.contractionTimerInterval);
  document.getElementById('contractionCount').textContent = '0';
  document.getElementById('avgDuration').textContent = '—';
  document.getElementById('avgFrequency').textContent = '—';
  document.getElementById('contractionTime').textContent = '00:00';
  document.getElementById('contractionStatus').textContent = 'Ready to start';
  document.getElementById('contractionBtn').textContent = '▶ Start Contraction';
  renderContractionLog();
  saveState();
}

// ====== WEIGHT TRACKER ======
function addWeight() {
  const el = document.getElementById('weightInput');
  if (!el) return;
  const val = parseFloat(el.value);
  if (!val || val < 30 || val > 250) { alert('Please enter a valid weight (30–250 kg)'); return; }
  state.weightLog.push({ date: new Date().toLocaleDateString(), val });
  saveState();
  if (typeof gtag === 'function') {
    gtag('event', 'add_weight', { weight: val });
  }
  el.value = '';
  renderWeightChart();
  saveState();
}

function renderWeightChart() {
  const chart = document.getElementById('weightChart');
  if (!chart) return;
  if (!state.weightLog.length) {
    chart.innerHTML = '<div style="font-size:.8rem;color:var(--text-muted);margin:auto">Enter weight to start tracking</div>';
    return;
  }
  const vals = state.weightLog.map(e=>e.val);
  const min = Math.min(...vals) - 2;
  const max = Math.max(...vals) + 2;
  const range = max - min || 1;
  chart.innerHTML = vals.map((v,i) => {
    const h = Math.max(8, Math.round(((v - min) / range) * 100));
    return `<div class="weight-bar" style="height:${h}px" data-val="${v} kg" title="${state.weightLog[i].date}: ${v} kg"></div>`;
  }).join('');
}

function updateWeightRec() {
  const el = document.getElementById('preWeight');
  const pre = el ? parseFloat(el.value) : 0;
  if (!pre) return;
  const bmi = pre / (1.65 * 1.65);
  let rec = '';
  if (bmi < 18.5) rec = '12.5–18 kg (underweight)';
  else if (bmi < 25) rec = '11.5–16 kg (normal BMI)';
  else if (bmi < 30) rec = '7–11.5 kg (overweight)';
  else rec = '5–9 kg (obese BMI)';
  
  const recEl = document.getElementById('weightRec');
  if (recEl) recEl.textContent = `💡 Recommended gain: ${rec}`;
}

// ====== MOOD TRACKER ======
function selectMood(emoji, label) {
  const entry = { emoji, label, date: new Date().toLocaleString() };
  state.moodLog.unshift(entry);
  if (state.moodLog.length > 20) state.moodLog.pop();
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  renderMoodHistory();
  saveState();
}

function renderMoodHistory() {
  const hist = document.getElementById('moodHistory');
  if (!hist) return;
  if (!state.moodLog.length) {
    hist.innerHTML = '<div style="font-size:.8rem;color:var(--text-muted);text-align:center;padding:8px">Log your daily mood above</div>';
    return;
  }
  hist.innerHTML = state.moodLog.slice(0,10).map(m => `
    <div class="mood-entry">
      <span>${m.emoji}</span>
      <span style="font-weight:600">${m.label}</span>
      <span style="color:var(--text-muted);margin-left:auto;font-size:.75rem">${m.date}</span>
    </div>
  `).join('');
}

// ====== BLOOD PRESSURE ======
function addBP() {
  const sEl = document.getElementById('bpSystolic');
  const dEl = document.getElementById('bpDiastolic');
  if (!sEl || !dEl) return;
  const sys = parseInt(sEl.value);
  const dia = parseInt(dEl.value);
  if (!sys || !dia || sys < 60 || sys > 200 || dia < 40 || dia > 130) {
    alert('Please enter valid blood pressure readings.'); return;
  }
  state.bpLog.unshift({ sys, dia, date: new Date().toLocaleString() });
  if (state.bpLog.length > 20) state.bpLog.pop();
  sEl.value = '';
  dEl.value = '';
  renderBPLog();

  // BP Assessment
  const statusEl = document.getElementById('bpStatus');
  if (statusEl) {
    statusEl.style.display = 'block';
    if (sys >= 160 || dia >= 110) {
      statusEl.style.background = 'rgba(214,56,102,0.15)';
      statusEl.style.color = 'var(--rose)';
      statusEl.textContent = '🚨 SEVERE HYPERTENSION — Call your doctor or go to hospital immediately!';
    } else if (sys >= 140 || dia >= 90) {
      statusEl.style.background = 'rgba(212,168,68,0.15)';
      statusEl.style.color = 'var(--gold)';
      statusEl.textContent = '⚠️ High BP detected. This may indicate preeclampsia. Contact your OB today.';
    } else if (sys < 90 || dia < 60) {
      statusEl.style.background = 'rgba(72,144,212,0.15)';
      statusEl.style.color = 'var(--sky)';
      statusEl.textContent = '💙 Low blood pressure. Common in pregnancy — rise slowly and stay hydrated.';
    } else {
      statusEl.style.background = 'rgba(59,184,154,0.15)';
      statusEl.style.color = 'var(--mint)';
      statusEl.textContent = '✅ Normal blood pressure! Great reading.';
    }
  }
  saveState();
}

function renderBPLog() {
  const el = document.getElementById('bpReadings');
  if (!state.bpLog.length) {
    el.innerHTML = '<div style="font-size:.8rem;color:var(--text-muted);text-align:center;padding:8px">No readings recorded yet</div>';
    return;
  }
  el.innerHTML = state.bpLog.slice(0,8).map(r => {
    const cat = (r.sys >= 140 || r.dia >= 90) ? '🔴' : (r.sys < 90 || r.dia < 60) ? '🔵' : '🟢';
    return `
      <div class="contraction-entry">
        <span style="font-weight:700">${cat} ${r.sys}/${r.dia}</span>
        <span style="color:var(--text-muted);font-size:.75rem">${r.date}</span>
      </div>
    `;
  }).join('');
}

// ====== SYMPTOM LOG ======
function toggleSymptom(emoji, label) {
  const key = label;
  const idx = state.selectedSymptoms.findIndex(s => s.label === key);
  if (idx >= 0) {
    state.selectedSymptoms.splice(idx, 1);
  } else {
    state.selectedSymptoms.push({ emoji, label });
  }
  renderSelectedSymptoms();
}

function renderSelectedSymptoms() {
  const log = document.getElementById('symptomLog');
  if (!state.selectedSymptoms.length) {
    log.innerHTML = '<div style="font-size:.8rem;color:var(--text-muted);text-align:center;padding:8px">Select symptoms above to log them</div>';
    return;
  }
  log.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:6px;padding:4px">
    ${state.selectedSymptoms.map(s=>`<span class="mom-tag">${s.emoji} ${s.label}</span>`).join('')}
  </div>`;
}

function saveSymptoms() {
  if (!state.selectedSymptoms.length) { alert('Please select at least one symptom to log.'); return; }
  const entry = { date: new Date().toLocaleDateString(), symptoms: [...state.selectedSymptoms] };
  if (!state.symptomLog) state.symptomLog = [];
  state.symptomLog.unshift(entry);
  state.selectedSymptoms = [];
  renderSelectedSymptoms();
  saveState();
  alert(`✅ Symptoms logged for ${entry.date}!`);
}

// ====== INIT ======
document.addEventListener('DOMContentLoaded', () => {
  // PWA Install listener
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
  });

  // Set today as default date for all inputs (pre-fill so fields aren't empty)
  const today = new Date().toISOString().split('T')[0];
  ['lmpDate','conceptionDate','ivfDate','ultrasoundDate','fertLmpDate'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.max = today;
      if (!el.value) el.value = today; // Pre-fill with today's date so it's never empty
    }
  });

  // Restore state
  loadState();

  // Restore kick timer if session was active
  if (state.kickSessionStart && state.kickCount > 0) {
    startKickTimer();
    document.getElementById('kickCount').textContent = state.kickCount;
    document.getElementById('kickSession').textContent = state.kickSession || state.kickCount;
  }

  // Load API key from storage
  initApiKey();
});

/* ============================================================
   RAPIDAPI INTEGRATION
   ============================================================ */

const RAPID_API_HOST = 'pregnancy-calculator-api.p.rapidapi.com';
let _apiKey = '';

// ── Load / save API key ──────────────────────────────────────
function initApiKey() {
  const saved = localStorage.getItem('mcApiKey');
  if (saved) {
    _apiKey = saved;
    const el = document.getElementById('apiKey');
    if (el) el.value = saved;
    setApiStatus('ready', '✅ API Key loaded — live data enabled');
  }
}

function saveApiKey() {
  const el = document.getElementById('apiKey');
  const key = el ? el.value.trim() : '';
  if (!key) {
    setApiStatus('error', '❌ Please enter a valid RapidAPI key');
    return;
  }
  _apiKey = key;
  localStorage.setItem('mcApiKey', key);
  setApiStatus('ready', '✅ API Key saved! Will use live data on next calculation');

  const btn = document.getElementById('apiKeySaveBtn');
  if (btn) {
    btn.textContent = '✓ Saved!';
    btn.style.background = 'linear-gradient(135deg,#00897B,#26C6B0)';
    setTimeout(() => {
      btn.textContent = 'Save Key';
      btn.style.background = '';
    }, 2000);
  }
}

function setApiStatus(type, msg) {
  const dot = document.getElementById('apiDot');
  const txt = document.getElementById('apiStatusText');
  if (!dot || !txt) return;
  dot.className = 'api-dot ' + type;
  txt.textContent = msg;
}

// ── Format LMP date for API: YYYY-MM-DD ──────────────────────
function toApiDate(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const d = String(dateObj.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// ── Call trimester-calculator endpoint ───────────────────────
async function callTrimesterAPI(lmpDateObj) {
  if (!_apiKey) {
    setApiStatus('ready', '✨ Local calculation mode active');
    return null;
  }

  setApiStatus('loading', '⏳ Fetching live data from RapidAPI…');

  const lmpStr = toApiDate(lmpDateObj);
  const url = `https://${RAPID_API_HOST}/trimester-calculator?lmp=${lmpStr}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': RAPID_API_HOST,
        'x-rapidapi-key': _apiKey
      }
    });

    if (!res.ok) {
      const errTxt = res.status === 403 ? 'Invalid API key or quota exceeded'
                   : res.status === 429 ? 'Rate limit exceeded — try again shortly'
                   : `API error (${res.status})`;
      setApiStatus('error', `❌ ${errTxt}`);
      return null;
    }

    const data = await res.json();
    setApiStatus('ready', `✅ Live data received — ${new Date().toLocaleTimeString()}`);
    return data;

  } catch (err) {
    setApiStatus('error', `❌ Network error: ${err.message}`);
    return null;
  }
}

async function renderTrimesterDetails(weeksPreg, lmpDateObj, dueDateObj) {
  const mapPanel = document.getElementById('localTrimesterMap');
  const infoGrid = document.getElementById('triInfoGrid');
  const livePanel = document.getElementById('apiLivePanel');
  
  if (mapPanel) mapPanel.style.display = 'block';
  if (infoGrid) infoGrid.style.display = 'grid';
  if (livePanel) livePanel.style.display = 'block';

  const today = new Date();
  today.setHours(0,0,0,0);
  const trimesterNum = weeksPreg <= 13 ? 1 : weeksPreg <= 27 ? 2 : 3;
  const trimesterName = trimesterNum === 1 ? '1st Trimester' : trimesterNum === 2 ? '2nd Trimester' : '3rd Trimester';

  const triDetails = {
    1: { emoji: '🌸', desc: 'Weeks 1–13 · Baby\'s organs forming', info: 'The most critical developmental period. Major organs and systems are forming. Nausea and fatigue are common.' },
    2: { emoji: '✨', desc: 'Weeks 14–27 · The golden trimester', info: 'Energy returns, bump becomes visible! Baby starts kicking around week 18–22. Most moms feel their best now.' },
    3: { emoji: '⭐', desc: 'Weeks 28–40 · Countdown to birth!', info: 'Baby gains weight rapidly. Sleep gets harder. Hospital bag should be packed by week 36. Watch for labor signs!' }
  };
  const td = triDetails[trimesterNum];

  // Fill Header labels (if they exist in this version)
  const apiTri = document.getElementById('apiTrimester');
  const apiTriDesc = document.getElementById('apiTrimesterDesc');
  if (apiTri) apiTri.textContent = await i18n.translate(trimesterName);
  if (apiTriDesc) apiTriDesc.textContent = await i18n.translate(td.desc);

  // Fill API cards with local data (fallback/initial)
  const apiWeeks = document.getElementById('apiWeeks');
  const apiWeeksDesc = document.getElementById('apiWeeksDesc');
  const apiDays = document.getElementById('apiDays');
  const apiDueDate = document.getElementById('apiDueDate');
  const apiDueDateDesc = document.getElementById('apiDueDateDesc');
  const apiWeeksLeft = document.getElementById('apiWeeksLeft');
  const apiWeeksLeftDesc = document.getElementById('apiWeeksLeftDesc');

  if (apiWeeks) apiWeeks.textContent = `${weeksPreg} ` + (await i18n.translate("wk"));
  if (apiWeeksDesc) apiWeeksDesc.textContent = `${Math.floor((today - lmpDateObj) / 86400000) % 7} ` + (await i18n.translate("extra days"));
  if (apiDueDate) apiDueDate.textContent = fmtShort(dueDateObj);
  if (apiDueDateDesc) apiDueDateDesc.textContent = `${Math.floor((dueDateObj - today) / 86400000)} ` + (await i18n.translate("days away"));
  
  const daysLeft = Math.floor((dueDateObj - today) / 86400000);
  const weeksLeft = Math.max(0, Math.round(daysLeft / 7));
  if (apiWeeksLeft) apiWeeksLeft.textContent = `${weeksLeft} ` + (await i18n.translate("wk"));
  if (apiWeeksLeftDesc) apiWeeksLeftDesc.textContent = "≈ " + Math.round(weeksLeft / 4.3) + " " + (await i18n.translate("months left"));

  // Journey Map
  const seg1 = document.getElementById('triMapSeg1');
  const seg2 = document.getElementById('triMapSeg2');
  const seg3 = document.getElementById('triMapSeg3');
  const indicator = document.getElementById('triMapIndicator');

  if (seg1) {
    seg1.className = 'tri-map-seg tri-map-1' + (trimesterNum === 1 ? ' active' : trimesterNum > 1 ? ' done' : '');
    seg1.querySelector('span').textContent = await i18n.translate("1st");
  }
  if (seg2) {
    seg2.className = 'tri-map-seg tri-map-2' + (trimesterNum === 2 ? ' active' : trimesterNum > 2 ? ' done' : '');
    seg2.querySelector('span').textContent = await i18n.translate("2nd");
  }
  if (seg3) {
    seg3.className = 'tri-map-seg tri-map-3' + (trimesterNum === 3 ? ' active' : '');
    seg3.querySelector('span').textContent = await i18n.translate("3rd");
  }
  
  if (indicator) {
    const progress = Math.min(100, Math.max(0, (weeksPreg / 40) * 100));
    indicator.style.left = `calc(${progress}% - 10px)`;
  }

  // Info Grid
  if (infoGrid) {
    const infoData = [
      { key: 'res_trimester', icon: td.emoji, label: 'Your Trimester', val: trimesterName },
      { key: 'res_gestational_age', icon: '📏', label: 'Gestational Age', val: `${weeksPreg} wks ${Math.floor((today - lmpDateObj) / 86400000) % 7} days` },
      { key: 'res_focus', icon: '🏥', label: 'Trimester Focus', val: trimesterNum === 1 ? 'First prenatal visit, NT scan' : trimesterNum === 2 ? 'Anatomy scan, glucose test' : 'Weekly OB visits, GBS test' },
      { key: 'res_supplement', icon: '💊', label: 'Key Supplement', val: trimesterNum === 1 ? 'Folic acid 400–800 mcg' : trimesterNum === 2 ? 'DHA 200–300 mg + Iron' : 'Iron + Vitamin K' },
      { key: 'res_symptoms', icon: '🤰', label: 'Mom Symptoms', val: trimesterNum === 1 ? 'Nausea, fatigue, breast tenderness' : trimesterNum === 2 ? 'Heartburn, round ligament pain' : 'Swelling, Braxton Hicks' },
      { key: 'res_fact', icon: '💡', label: 'Fun Fact', val: td.info }
    ];
    
    // We map over them and translate labels/values
    const translatedHTML = await Promise.all(infoData.map(async c => `
      <div class="tri-info-card fade-in">
        <div class="tri-info-card-icon">${c.icon}</div>
        <div class="tri-info-card-label" data-i18n="${c.key}">${await i18n.translate(c.label)}</div>
        <div class="tri-info-card-val">${await i18n.translate(c.val)}</div>
      </div>
    `));
    infoGrid.innerHTML = translatedHTML.join('');
  }
}

// ── Parse & display API trimester data ───────────────────────
function renderApiLivePanel(apiData, lmpDateObj) {
  // This now only updates fields with API data if available
  if (!apiData) return;
  
  const trimesterNum = apiData.trimester || apiData.currentTrimester || (weeksPregnant <= 13 ? 1 : weeksPregnant <= 27 ? 2 : 3);
  const dueDate = apiData.dueDate ? new Date(apiData.dueDate) : state.dueDate;
  
  // Re-run the detail renderer with updated API info if needed
  // For now, most fields are already filled by local logic, 
  // but API could provide more accurate EDD.
  if (apiData.dueDate) {
    state.dueDate = new Date(apiData.dueDate);
    showDashboard(); // Refresh with new EDD
  }
}

// ── Async calculate() replaces the local-only version ────────
async function calculate() {
  const btn = document.getElementById('calcBtn');
  if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="loader"></span> Calculating...';
  }

  if (typeof gtag === 'function') {
    gtag('event', 'calculate_due_date', { method: state.calcMethod });
  }

  const overlay = document.getElementById('loadingOverlay');
  overlay.classList.add('show');

  try {
      const lmpEl = document.getElementById('lmpDate');
      const cycleEl = document.getElementById('cycleLength');
      const conEl = document.getElementById('conceptionDate');
      const ivfEl = document.getElementById('ivfDate');
      const ageEl = document.getElementById('embryoAge');
      const usDateEl = document.getElementById('ultrasoundDate');
      const usWEl = document.getElementById('usWeeks');
      const usDEl = document.getElementById('usDays');

      const lmp = lmpEl ? lmpEl.value : '';
      const cycle = cycleEl ? parseInt(cycleEl.value) : 28;
      const con = conEl ? conEl.value : '';
      const ivf = ivfEl ? ivfEl.value : '';
      const age = ageEl ? parseInt(ageEl.value) : 3;
      const us = usDateEl ? usDateEl.value : '';
      const usW = usWEl ? parseInt(usWEl.value) : 0;
      const usD = usDEl ? parseInt(usDEl.value) : 0;

      let dueDate = null;
      let lmpDate = null;
      const today = new Date();
      today.setHours(0,0,0,0);

      if (state.activeMethod === 'lmp') {
        if (!lmp) { showValidationError('lmpDate'); return; }
        const lmpD = new Date(lmp);
        const offset = cycle - 28;
        dueDate = new Date(lmpD);
        dueDate.setDate(dueDate.getDate() + 280 + offset);
        lmpDate = lmpD;

      } else if (state.activeMethod === 'conception') {
        if (!con) { showValidationError('conceptionDate'); return; }
        dueDate = new Date(con);
        dueDate.setDate(dueDate.getDate() + 266);
        lmpDate = new Date(con);
        lmpDate.setDate(lmpDate.getDate() - 14);

      } else if (state.activeMethod === 'ivf') {
        if (!ivf) { showValidationError('ivfDate'); return; }
        dueDate = new Date(ivf);
        dueDate.setDate(dueDate.getDate() + (266 - age));
        lmpDate = new Date(dueDate);
        lmpDate.setDate(lmpDate.getDate() - 280);

      } else if (state.activeMethod === 'ultrasound') {
        if (!us) { showValidationError('ultrasoundDate'); return; }
        const usDate = new Date(us);
        const daysPregnant = usW * 7 + usD;
        lmpDate = new Date(usDate);
        lmpDate.setDate(lmpDate.getDate() - daysPregnant);
        dueDate = new Date(lmpDate);
        dueDate.setDate(dueDate.getDate() + 280);
      }

      state.dueDate = dueDate;
      state.lmpDate = lmpDate;
      saveState();
      overlay.classList.remove('show');
      showDashboard();

      // ── API call (after local dashboard renders) ──
      if (lmpDate) {
        const apiData = await callTrimesterAPI(lmpDate);
        renderApiLivePanel(apiData, lmpDate);
      }
  } catch (e) {
      overlay.classList.remove('show');
  }
}

/* ============================================================
   FERTILITY & OVULATION CALCULATOR
   ============================================================ */

function calcFertility() {
  const lmpEl = document.getElementById('fertLmpDate');
  const cycleEl = document.getElementById('fertCycleLen');
  const lmpVal = lmpEl ? lmpEl.value : '';
  const cycleLen = cycleEl ? parseInt(cycleEl.value) : 28;

  if (!lmpVal) { alert('Please enter the first day of your last period.'); return; }

  const lmp = new Date(lmpVal);
  const today = new Date();

  // Core dates
  const ovulation   = new Date(lmp); ovulation.setDate(ovulation.getDate() + cycleLen - 14);
  const fertStart   = new Date(ovulation); fertStart.setDate(fertStart.getDate() - 5);
  const fertEnd     = new Date(ovulation); fertEnd.setDate(fertEnd.getDate() + 1);
  const nextPeriod  = new Date(lmp); nextPeriod.setDate(nextPeriod.getDate() + cycleLen);
  const testDate    = new Date(nextPeriod); testDate.setDate(testDate.getDate() + 1);

  // Fill result cards
  document.getElementById('fertOvulation').textContent = fmtShort(ovulation);
  document.getElementById('fertWindow').textContent = `${fmtShort(fertStart)} – ${fmtShort(fertEnd)}`;
  document.getElementById('fertNextPeriod').textContent = fmtShort(nextPeriod);
  document.getElementById('fertTestDate').textContent = fmtShort(testDate);

  // Show results
  document.getElementById('fertilityResults').style.display = 'block';

  // Build cycle calendar
  buildCycleCalendar(lmp, cycleLen, ovulation, fertStart, fertEnd, nextPeriod);

  // Build next 3 cycles
  buildFutureCycles(lmp, cycleLen);

  // Pre-fill the pregnancy calculator LMP if empty
  const pregLmp = document.getElementById('lmpDate');
  if (pregLmp && !pregLmp.value) {
    pregLmp.value = lmpVal;
  }

  // Scroll to results
  setTimeout(() => {
    document.getElementById('fertilityResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 200);
}

function buildCycleCalendar(lmp, cycleLen, ovulation, fertStart, fertEnd, nextPeriod) {
  const grid = document.getElementById('cycleCalGrid');
  grid.innerHTML = '';
  const today = new Date(); today.setHours(0,0,0,0);

  // Show current cycle: day 1 to cycleLen
  for (let i = 0; i < cycleLen; i++) {
    const d = new Date(lmp);
    d.setDate(lmp.getDate() + i);
    d.setHours(0,0,0,0);

    const dayNum = i + 1;
    const el = document.createElement('div');
    el.className = 'cycle-cal-day';
    el.textContent = dayNum;
    el.title = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    if (d.getTime() === today.getTime()) el.classList.add('day-today');

    // Period: days 1–5
    if (dayNum <= 5) {
      el.classList.add('day-period');
    }
    // Ovulation day
    else if (d.getTime() === ovulation.getTime()) {
      el.classList.add('day-ovulation');
      const lbl = document.createElement('span');
      lbl.className = 'day-label';
      lbl.textContent = 'OVU';
      el.appendChild(lbl);
    }
    // Fertile window (non-ovulation)
    else if (d >= fertStart && d <= fertEnd) {
      el.classList.add('day-fertile');
    }
    // Next period starts
    else if (d.getTime() === nextPeriod.getTime()) {
      el.classList.add('day-next-period');
      const lbl = document.createElement('span');
      lbl.className = 'day-label';
      lbl.textContent = 'NEXT';
      el.appendChild(lbl);
    }

    grid.appendChild(el);
  }
}

function buildFutureCycles(lmp, cycleLen) {
  const grid = document.getElementById('futureCyclesGrid');
  const card = document.getElementById('futureCyclesCard');
  if (!grid || !card) return;

  grid.innerHTML = '';
  card.style.display = 'block';

  for (let c = 1; c <= 3; c++) {
    const periodStart = new Date(lmp);
    periodStart.setDate(periodStart.getDate() + cycleLen * c);
    const ovu = new Date(periodStart);
    ovu.setDate(ovu.getDate() + cycleLen - 14);
    const fw = new Date(ovu); fw.setDate(fw.getDate() - 5);
    const fwEnd = new Date(ovu); fwEnd.setDate(fwEnd.getDate() + 1);

    grid.innerHTML += `
      <div class="future-cycle-card fade-in" style="animation-delay:${c * 0.08}s">
        <div class="future-cycle-num">Cycle ${c + 1}</div>
        <div class="future-cycle-period">📅 ${fmtShort(periodStart)}</div>
        <div class="future-cycle-ovul">🥚 Ovulation: ${fmtShort(ovu)}</div>
        <div class="future-cycle-window">✨ Fertile: ${fmtShort(fw)} – ${fmtShort(fwEnd)}</div>
      </div>
    `;
  }
}

/* ============================================================
   NAVIGATE FROM FEATURE CARDS → DASHBOARD SECTIONS
   ============================================================ */
function navigateToFeature(tab) {
  // If "calculator" — scroll up to hero calculator
  if (tab === 'calculator') {
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Highlight the Calculate button briefly
    const btn = document.getElementById('calcBtn');
    if (btn) {
      btn.style.boxShadow = '0 0 0 4px rgba(108,59,228,0.4)';
      setTimeout(() => btn.style.boxShadow = '', 1800);
    }
    return;
  }

  // Dashboard tabs — check if dashboard is visible
  const dashboard = document.getElementById('dashboard');
  const isDashboardVisible = dashboard && dashboard.classList.contains('visible');

  if (!isDashboardVisible) {
    // Dashboard not shown yet — scroll to calculator with a visual nudge
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth', block: 'center' });
    const hint = document.getElementById('calcHint');
    if (hint) {
      hint.textContent = '👆 Calculate your due date first to unlock all sections!';
      hint.style.color = 'var(--rose)';
      hint.style.fontWeight = '700';
      setTimeout(() => {
        hint.textContent = 'Enter your date above and click Calculate';
        hint.style.color = '';
        hint.style.fontWeight = '';
      }, 3500);
    }
    return;
  }

  // Scroll to dashboard and switch to the requested tab
  dashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => {
    switchMainTab(tab);
    // Highlight the active tab button briefly
    const tabBtn = document.getElementById('mainTab-' + tab);
    if (tabBtn) {
      tabBtn.style.boxShadow = '0 0 0 4px rgba(108,59,228,0.35)';
      setTimeout(() => tabBtn.style.boxShadow = '', 1500);
    }
  }, 400);
}

/* ====== FIND A DOCTOR FEATURE ====== */
let currentDoctors = [];
let userLocation = null;

async function searchByAddress() {
  const input = document.getElementById('addressSearch');
  const statusMsg = document.getElementById('doctorStatusMsg');
  const btn = document.getElementById('addressSearchBtn');
  const address = input ? input.value.trim() : '';

  if (!address) {
    if (statusMsg) {
      statusMsg.style.color = 'var(--rose)';
      statusMsg.textContent = '❌ Please enter an address or city.';
    }
    return;
  }

  if (btn) btn.disabled = true;
  if (statusMsg) {
    statusMsg.style.color = 'var(--text-secondary)';
    statusMsg.textContent = `🔍 Searching for "${address}"...`;
  }

  try {
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`);
    const geoData = await geoRes.json();
    
    if (!geoData || geoData.length === 0) throw new Error('Address not found.');
    userLocation = { lat: parseFloat(geoData[0].lat), lng: parseFloat(geoData[0].lon) };
    await fetchDoctors(userLocation.lat, userLocation.lng);
  } catch (error) {
    if (statusMsg) {
      statusMsg.style.color = 'var(--rose)';
      statusMsg.textContent = `❌ Error: ${error.message}`;
    }
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function detectLocation() {
  const btn = document.getElementById('locateBtn');
  const statusMsg = document.getElementById('doctorStatusMsg');
  
  if (btn) btn.disabled = true;
  if (statusMsg) {
    statusMsg.style.color = 'var(--text-secondary)';
    statusMsg.textContent = '📡 Detecting your location...';
  }

  if (!navigator.geolocation) {
    if (statusMsg) {
      statusMsg.style.color = 'var(--rose)';
      statusMsg.textContent = '❌ Geolocation not supported.';
    }
    if (btn) btn.disabled = false;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      userLocation = { lat: latitude, lng: longitude };
      fetchDoctors(latitude, longitude);
    },
    (err) => {
      if (statusMsg) {
        statusMsg.style.color = 'var(--rose)';
        statusMsg.textContent = '❌ Location access denied or unavailable.';
      }
      if (btn) btn.disabled = false;
    },
    { timeout: 10000 }
  );
}

async function fetchDoctors(lat, lng) {
  const statusMsg = document.getElementById('doctorStatusMsg');
  const btn = document.getElementById('locateBtn');
  
  try {
    // Try server API first
    let data = null;
    try {
      const res = await fetch(`/api/doctors?lat=${lat}&lng=${lng}`);
      if (res.ok) data = await res.json();
    } catch (e) {
      console.log('Server API unavailable, using direct OSM...');
    }

    // Fallback: call Overpass API directly from browser
    if (!data || !data.results || data.results.length === 0) {
      data = await fetchDoctorsFromOSM(lat, lng);
    }
    
    currentDoctors = data.results || [];
    if (userLocation) {
        currentDoctors.forEach(doc => {
            doc.distanceKm = calculateDistance(userLocation.lat, userLocation.lng, doc.lat, doc.lng);
        });
    }
    
    if (statusMsg) {
      statusMsg.style.display = 'block';
      statusMsg.style.color = 'var(--mint)';
      statusMsg.textContent = `✅ Found ${currentDoctors.length} results via ${data.source || 'OpenStreetMap'}`;
    }
    
    applyDoctorFilters();
  } catch (error) {
    console.error(error);
    if (statusMsg) {
      statusMsg.style.display = 'block';
      statusMsg.style.color = 'var(--rose)';
      statusMsg.textContent = `❌ Error: ${error.message}`;
    }
  } finally {
    if (btn) btn.disabled = false;
  }
}

// Direct OSM Overpass API call (works without server)
async function fetchDoctorsFromOSM(lat, lng) {
  const offset = 0.25;
  const s = lat - offset, w = lng - offset, n = lat + offset, e = lng + offset;
  
  const query = `
    [out:json][timeout:20][bbox:${s},${w},${n},${e}];
    (
      node["healthcare:speciality"~"gynaecology|obstetrics",i];
      node["healthcare"="doctor"]["healthcare:speciality"~"gynaecology|obstetrics",i];
      node["amenity"~"clinic|doctors",i]["name"~"gyn|obst|matern|wom|lady",i];
      way["amenity"~"clinic|doctors",i]["name"~"gyn|obst|matern|wom|lady",i];
      node["amenity"="hospital"];
      way["amenity"="hospital"];
    );
    out center 20;
  `;

  const res = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    body: 'data=' + encodeURIComponent(query),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  if (!res.ok) throw new Error('OpenStreetMap API error');
  const osmData = await res.json();

  const results = [];
  const seen = new Set();
  
  if (osmData.elements) {
    for (const el of osmData.elements) {
      if (seen.has(el.id)) continue;
      seen.add(el.id);
      
      const isWay = el.type === 'way';
      const elLat = isWay ? (el.center ? el.center.lat : null) : el.lat;
      const elLng = isWay ? (el.center ? el.center.lon : null) : el.lon;
      if (!elLat || !elLng) continue;

      let addr = [el.tags?.['addr:street'], el.tags?.['addr:housenumber'], el.tags?.['addr:city']].filter(Boolean).join(' ');
      if (!addr) addr = el.tags?.['is_in'] || 'Location on map';

      results.push({
        id: String(el.id),
        name: el.tags?.name || (el.tags?.amenity === 'hospital' ? 'Hospital' : "Women's Clinic"),
        rating: null,
        user_ratings_total: 0,
        address: addr,
        type: '',
        lat: elLat,
        lng: elLng,
        mapsUrl: `https://www.google.com/maps/search/?api=1&query=${elLat},${elLng}`,
        provider: 'osm-direct'
      });
    }
  }

  return { results: results.slice(0, 15), source: 'OpenStreetMap (direct)', isFallbackHospital: false };
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1); 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c; 
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

function toggleSaveDoctor(docId) {
  const index = state.savedDoctors.indexOf(docId);
  if (index === -1) {
    state.savedDoctors.push(docId);
  } else {
    state.savedDoctors.splice(index, 1);
  }
  saveState();
  applyDoctorFilters();
}

function applyDoctorFilters() {
  const ratingEl = document.getElementById('docFilterRating');
  const distEl = document.getElementById('docFilterDistance');
  const savedEl = document.getElementById('showSavedOnly');
  
  const ratingFilter = ratingEl ? parseFloat(ratingEl.value) : 0;
  const distFilter = distEl ? parseFloat(distEl.value) : 100000;
  const showSavedOnly = savedEl ? savedEl.checked : false;
  
  let filtered = currentDoctors.filter(doc => {
    if (showSavedOnly && !state.savedDoctors.includes(doc.id)) return false;
    if (ratingFilter > 0) {
      if (!doc.rating || doc.rating < ratingFilter) return false;
    }
    if (doc.distanceKm > distFilter / 1000) return false;
    
    return true;
  });

  renderDoctors(filtered);
}

let mapInstance = null;
let mapMarkers = [];

function renderDoctors(docs) {
  const grid = document.getElementById('doctorsGrid');
  const mapContainer = document.getElementById('doctorsMap');
  
  if (!grid) return;
  grid.innerHTML = '';

  if (!docs || docs.length === 0) {
    grid.innerHTML = '<div style="text-align:center;width:100%;font-size:0.9rem;color:var(--text-muted);padding:24px;">No doctors found matching these filters. Try expanding the search distance or lowering rating filters.</div>';
    if (mapContainer) mapContainer.style.display = 'none';
    return;
  }

  // Show map
  if (mapContainer && userLocation) {
      mapContainer.style.display = 'block';
      if (typeof L !== 'undefined') {
          if (!mapInstance) {
              mapInstance = L.map('doctorsMap').setView([userLocation.lat, userLocation.lng], 13);
              L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              }).addTo(mapInstance);
          } else {
              mapInstance.setView([userLocation.lat, userLocation.lng], 13);
          }
          setTimeout(() => mapInstance.invalidateSize(), 100);

          // Clear old markers
          mapMarkers.forEach(m => mapInstance.removeLayer(m));
          mapMarkers = [];

          // Add user marker
          const userMarker = L.marker([userLocation.lat, userLocation.lng], {
              icon: L.icon({
                  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41]
              })
          }).addTo(mapInstance).bindPopup("<b>📍 You are here</b>").openPopup();
          mapMarkers.push(userMarker);

          // Add doctor markers
          let bounds = L.latLngBounds([userLocation.lat, userLocation.lng]);
          docs.forEach(doc => {
              const m = L.marker([doc.lat, doc.lng]).addTo(mapInstance);
              m.bindPopup(`<b>${doc.name}</b><br>${doc.address}<br>${doc.rating ? '⭐ ' + doc.rating : ''}`);
              mapMarkers.push(m);
              bounds.extend([doc.lat, doc.lng]);
          });
          mapInstance.fitBounds(bounds, { padding: [30, 30] });
      }
  }

  // Find top rated if any rating exists
  let maxRating = 0;
  let topRatedId = null;
  docs.forEach(d => {
    if (d.rating && d.rating > maxRating && d.user_ratings_total > 5) {
      maxRating = d.rating;
      topRatedId = d.id;
    }
  });

  grid.innerHTML = docs.map(doc => {
    const isTop = (doc.id === topRatedId);
    const isSaved = state.savedDoctors.includes(doc.id);
    let addressDisplay = doc.address || '📍 Location pinned on map';
    
    let badgeHTML = '';
    if (doc.type === 'Public') {
        badgeHTML = `<span style="background:rgba(59,184,154,0.15); color:var(--mint); font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:12px; margin-left: 8px; vertical-align:middle; display:inline-block;">🏥 Public</span>`;
    } else if (doc.type === 'Private') {
        badgeHTML = `<span style="background:rgba(155,109,197,0.15); color:var(--lavender); font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:12px; margin-left: 8px; vertical-align:middle; display:inline-block;">🏥 Private</span>`;
    }

    return `
      <div class="doctor-card" style="${isTop ? 'border-color: var(--gold); box-shadow: 0 4px 20px rgba(212,168,68,0.2);' : ''}">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          ${isTop ? '<div style="color:var(--gold);font-size:0.75rem;font-weight:700;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em">⭐ Top Rated</div>' : '<div></div>'}
          <button class="fav-btn" onclick="toggleSaveDoctor('${doc.id}')" style="background:none; border:none; cursor:pointer; font-size:1.2rem; padding:0; margin-top:-5px;" title="${isSaved ? 'Remove from Saved' : 'Save Clinic'}">
            ${isSaved ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="doctor-name" style="display:flex; align-items:center; flex-wrap:wrap; gap:4px;">${doc.name} ${badgeHTML}</div>
        <div class="doctor-address">${addressDisplay}</div>
        
        <div class="doctor-meta">
          ${doc.rating ? `<span class="doctor-rating">⭐ ${doc.rating} (${doc.user_ratings_total || 0})</span>` : '<span style="color:var(--text-muted);font-size:0.8rem">Ratings not available</span>'}
          <span class="doctor-distance">📍 ${(doc.distanceKm || 0).toFixed(1)} km</span>
        </div>
        
        <div style="margin-top:12px;">
          <a href="${doc.mapsUrl}" target="_blank" rel="noopener noreferrer" class="doctor-btn" style="width:100%; display:block; text-align:center;" aria-label="Open in Google Maps">
            🗺️ Open in Maps
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function updateDoctorAiRecommendation() {
   const aiCard = document.getElementById('doctorAiRecommendation');
   if (!aiCard) return;
   
   if (!state.currentWeek) {
       aiCard.style.display = 'none';
       return;
   }
   
   aiCard.style.display = 'block';
   let rec = "";
   let w = state.currentWeek;
   
   if (w <= 12) {
       rec = `✨ <b>First Trimester (Week ${w}):</b> It's time for your initial dating scan and blood tests. Ensure you're taking 400mcg of Folic Acid daily.`;
   } else if (w <= 24) {
       rec = `🌱 <b>Second Trimester (Week ${w}):</b> The "Golden Period." Schedule your mid-pregnancy anatomy scan (Weeks 18-22) to check baby's development.`;
   } else if (w <= 36) {
       rec = `🤰 <b>Third Trimester (Week ${w}):</b> Start monitoring fetal kicks daily. You'll soon have the GBS screening and more frequent checkups (every 2 weeks).`;
   } else {
       rec = `🚨 <b>Delivery Preparation (Week ${w}):</b> Your baby is full term! Finalize your birth plan, pack your hospital bag, and visit your doctor weekly.`;
   }
   
   aiCard.innerHTML = rec;
}

// ====== INITIALIZE PREMIUM CALENDAR (FLATPICKR) ======
document.addEventListener('DOMContentLoaded', () => {
  if (typeof flatpickr !== 'undefined') {
    flatpickr("input[type='date']", {
      dateFormat: "Y-m-d",
      altInput: true,
      altFormat: "F j, Y",
      disableMobile: "true",
      animate: true,
      prevArrow: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7L9 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      nextArrow: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 11L9 7L5 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      onOpen: (selectedDates, dateStr, instance) => {
        instance.calendarContainer.classList.add('premium-calendar-open');
      }
    });
  }
});
// ====== PWA INSTALL LOGIC ======
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById('pwaInstallBtn');
  if (installBtn) installBtn.style.display = 'block';
});

async function installApp() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    if (typeof gtag === 'function') gtag('event', 'pwa_install_accepted');
  }
  deferredPrompt = null;
  const installBtn = document.getElementById('pwaInstallBtn');
  if (installBtn) installBtn.style.display = 'none';
}

window.installApp = installApp;

// ====== SECURITY: INPUT SANITIZATION ======
function sanitizeHTML(str) {
  const p = document.createElement('p');
  p.textContent = str;
  return p.innerHTML;
}
window.sanitizeHTML = sanitizeHTML;

// Export globals for HTML onclick handlers
window.switchMethod = switchMethod;
window.prevWeek = prevWeek;
window.nextWeek = nextWeek;
window.recordKick = recordKick;
window.resetKicks = resetKicks;
window.newKickSession = newKickSession;
window.toggleContraction = toggleContraction;
window.resetContractions = resetContractions;
window.switchMainTab = switchMainTab;
window.saveApiKey = saveApiKey;
window.applyTheme = applyTheme;
window.i18n = i18n;
window.state = state;
window.searchByAddress = searchByAddress;
window.detectLocation = detectLocation;
window.applyDoctorFilters = applyDoctorFilters;
window.toggleSaveDoctor = toggleSaveDoctor;
window.calculate = calculate;
window.calcFertility = calcFertility;
window.navigateToFeature = navigateToFeature;


