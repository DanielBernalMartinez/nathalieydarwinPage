/* ============================================================
   1. CONFIG — edit here
   ============================================================ */
const WEDDING_DATE = new Date('2027-04-24T17:00:00-07:00'); // <-- cambia la fecha real aquí

const I18N = {
  es:{
    "hero.eyebrow":"Renovación de Votos",
    "hero.sub":"Diez años después, elegimos amarnos otra vez.",
    "hero.tag":"Con su familia, testigos de este amor",
    "hero.scroll":"Desliza",
    "countdown.eyebrow":"Faltan",
    "countdown.title":"El momento se acerca",
    "countdown.days":"Días","countdown.hours":"Horas","countdown.min":"Minutos","countdown.sec":"Segundos",
    "program.eyebrow":"Orden del día","program.title":"Programa","program.pm":"p.m.",
    "program.i1":"Ceremonia","program.i2":"Recepción","program.i3":"Cena","program.i4":"Barra libre","program.i5":"Baile",
    "story.eyebrow":"Un capítulo a la vez",
    "story.title":"Nuestra Historia",
    "story.lead":"Cada año trajo algo nuevo que sostener juntos.",
    "family.eyebrow":"Más que dos",
    "family.title":"El amor que creció en familia",
    "family.lead":"Lo que empezó entre dos personas se convirtió, con los años, en un hogar. Hoy no solo renovamos una promesa: celebramos la familia que construimos para sostenerla.",
    "kids.eyebrow":"Nuestros Hijos",
    "kids.title":"Lo mejor de nosotros",
    "gallery.eyebrow":"Galería",
    "gallery.title":"Momentos que atesoramos",
    "gallery.swipeHint":"Desliza para ver más →",
    "details.eyebrow":"Los detalles",
    "details.title":"Acompáñanos",
    "details.lead":"Guarda esta información — te esperamos para celebrar juntos.",
    "details.dateLabel":"Fecha","details.dateMain":"Sábado, 24 de abril","details.dateSub":"2027",
    "details.rsvpLabel":"Confirmación","details.rsvpValue":"Antes del 24 de enero","details.rsvpSub":"Escríbenos por WhatsApp",
    "details.contactLabel":"Contacto",
    "details.ceremonyKicker":"Ceremonia","details.receptionKicker":"Recepción",
    "details.ceremonyTime":"4:45 p.m.",
    "details.receptionTitle":"Rainbow Gardens",
    "details.receptionAddress":"4125 W Charleston Blvd, Las Vegas, NV 89102",
    "details.receptionTime":"8:00 p.m. - 01:00 a.m.",
    "details.receptionIncludes":"Cena y Barra libre",
    "details.venueLogoNote":"(Aquí puedes agregar el logo oficial del lugar — no incluimos logos de terceros por derechos de marca)",
    "details.directions":"Cómo llegar",
    "rsvp.eyebrow":"Confirma tu asistencia","rsvp.title":"¿Nos acompañas?",
    "rsvp.lead":"Completa este formulario y se abrirá tu correo con todo listo para enviarnos tu confirmación.",
    "rsvp.nameLabel":"Nombre completo",
    "rsvp.attendLabel":"¿Asistirás?","rsvp.attendChoose":"Selecciona una opción",
    "rsvp.attendYes":"Sí, ahí estaré","rsvp.attendNo":"No podré asistir",
    "rsvp.guestsLabel":"Número de acompañantes",
    "rsvp.msgLabel":"Mensaje para los novios (opcional)",
    "rsvp.submit":"Enviar confirmación",
    "rsvp.note":"Se abrirá tu aplicación de correo con el mensaje ya redactado — solo debes darle enviar.",
    "vegas.eyebrow":"El destino","vegas.title":"Nos vemos en Las Vegas",
    "vegas.lead":"Ven un día antes, quédate uno después — Las Vegas tiene mucho más para ofrecerte que nuestra celebración. Aquí un pequeño adelanto de lo que te espera.",
    "vegas.invite":"Haz de este viaje una escapada propia: luces, shows, buena mesa y la energía de una ciudad que nunca se apaga — todo a minutos de donde celebraremos.",
    "env.eyebrow":"Un gesto opcional","env.title":"Lluvia de Sobres",
    "env.text":"Tu presencia es el regalo más grande que podemos recibir. Si deseas tener un detalle adicional con nosotros, dispondremos de un pequeño espacio para recibir sobres el día de la celebración.",
    "dress.eyebrow":"Código de vestimenta",
    "dress.title":"Invitados",
    "dress.formal":"Formal elegante",
    "dress.suggestedLabel":"Colores sugeridos:","dress.suggestedNote":"tonos suaves y sofisticados.",
    "dress.avoid":"Por favor evitar: blanco, ivory, azul royal y azul cielo, ya que están reservados para la novia y la corte.",
    "dress.courtTitle":"La corte",
    "dress.courtLadies":"Damas: azul royal","dress.courtMen":"Caballeros: azul marino",
    "dress.suggestedForGuests":"Colores sugeridos para invitados",
    "dress.c1":"Verde Oliva Suave","dress.c2":"Azul Polvoriento","dress.c3":"Lavanda Suave",
    "dress.c4":"Rosa Empolvado","dress.c5":"Beige Arena","dress.c6":"Gris Perla",
    "dress.thanks":"Gracias por acompañarnos en esta noche tan especial.","dress.seeyou":"¡Nos vemos en Las Vegas!",
    "dress.man":"Él","dress.manDesc":"Traje oscuro, corbata opcional",
    "dress.woman":"Ella","dress.womanDesc":"Vestido largo, tonos tierra o joya",
    "closing.eyebrow":"Con todo nuestro amor",
    "closing.text":"Diez años de risas, silencios cómplices y una familia construida a pulso. Hoy queremos celebrar contigo el amor que sigue creciendo. Gracias por caminar junto a nosotros.",
    "footer.text":"Hecho con amor — Darwin & Nathalie, 2027"
  },
  en:{
    "hero.eyebrow":"Vow Renewal",
    "hero.sub":"Ten years later, we choose to love each other again.",
    "hero.tag":"With their family, witnesses to this love",
    "hero.scroll":"Scroll",
    "countdown.eyebrow":"Counting down",
    "countdown.title":"The moment is near",
    "countdown.days":"Days","countdown.hours":"Hours","countdown.min":"Minutes","countdown.sec":"Seconds",
    "program.eyebrow":"Order of the day","program.title":"Program","program.pm":"pm",
    "program.i1":"Ceremony","program.i2":"Reception","program.i3":"Dinner","program.i4":"Open bar","program.i5":"Dancing",
    "story.eyebrow":"One chapter at a time",
    "story.title":"Our Story",
    "story.lead":"Every year brought something new to hold together.",
    "family.eyebrow":"More than two",
    "family.title":"The love that grew into family",
    "family.lead":"What began between two people became, over the years, a home. Today we're not only renewing a promise: we're celebrating the family we built to carry it.",
    "kids.eyebrow":"Our Children",
    "kids.title":"The best of us",
    "gallery.eyebrow":"Gallery",
    "gallery.title":"Moments we treasure",
    "gallery.swipeHint":"Swipe to see more →",
    "details.eyebrow":"The details",
    "details.title":"Join us",
    "details.lead":"Save this information — we can't wait to celebrate with you.",
    "details.dateLabel":"Date","details.dateMain":"Saturday, April 24","details.dateSub":"2027",
    "details.rsvpLabel":"RSVP","details.rsvpValue":"By January 24","details.rsvpSub":"Message us on WhatsApp",
    "details.contactLabel":"Contact",
    "details.ceremonyKicker":"Ceremony","details.receptionKicker":"Reception",
    "details.ceremonyTime":"4:45 pm",
    "details.receptionTitle":"Rainbow Gardens",
    "details.receptionAddress":"4125 W Charleston Blvd, Las Vegas, NV 89102",
    "details.receptionTime":"8:00 pm - 01:00 am",
    "details.receptionIncludes":"Dinner and Open Bar",
    "details.venueLogoNote":"(You can add the venue's official logo here — we don't include third-party logos for trademark reasons)",
    "details.directions":"Get directions",
    "rsvp.eyebrow":"Confirm your attendance","rsvp.title":"Will you join us?",
    "rsvp.lead":"Fill out this form and your email app will open with everything ready to send us your confirmation.",
    "rsvp.nameLabel":"Full name",
    "rsvp.attendLabel":"Will you attend?","rsvp.attendChoose":"Choose an option",
    "rsvp.attendYes":"Yes, I'll be there","rsvp.attendNo":"I won't be able to attend",
    "rsvp.guestsLabel":"Number of guests",
    "rsvp.msgLabel":"Message for the couple (optional)",
    "rsvp.submit":"Send confirmation",
    "rsvp.note":"Your email app will open with the message already written — just hit send.",
    "vegas.eyebrow":"The destination","vegas.title":"See you in Las Vegas",
    "vegas.lead":"Come a day early, stay a day late — Las Vegas has so much more to offer than just our celebration. Here's a little taste of what's waiting for you.",
    "vegas.invite":"Turn this trip into a getaway of your own: lights, shows, great food, and the energy of a city that never sleeps — all minutes from where we'll be celebrating.",
    "env.eyebrow":"An optional gesture","env.title":"Envelope Shower",
    "env.text":"Your presence is the greatest gift we could ask for. If you'd like to give something extra, we'll have a small space to receive envelopes on the day of the celebration.",
    "dress.eyebrow":"Dress Code",
    "dress.title":"Guests",
    "dress.formal":"Formal Elegant",
    "dress.suggestedLabel":"Suggested colors:","dress.suggestedNote":"soft, sophisticated tones.",
    "dress.avoid":"Please avoid: white, ivory, royal blue and sky blue, as they're reserved for the bride and her court.",
    "dress.courtTitle":"The Court",
    "dress.courtLadies":"Ladies: royal blue","dress.courtMen":"Gentlemen: navy blue",
    "dress.suggestedForGuests":"Suggested colors for guests",
    "dress.c1":"Soft Olive Green","dress.c2":"Dusty Blue","dress.c3":"Soft Lavender",
    "dress.c4":"Dusty Rose","dress.c5":"Sand Beige","dress.c6":"Pearl Grey",
    "dress.thanks":"Thank you for joining us on this special night.","dress.seeyou":"See you in Las Vegas!",
    "dress.man":"Him","dress.manDesc":"Dark suit, tie optional",
    "dress.woman":"Her","dress.womanDesc":"Long dress, earth or jewel tones",
    "closing.eyebrow":"With all our love",
    "closing.text":"Ten years of laughter, quiet understanding, and a family built with care. Today we want to celebrate with you the love that keeps growing. Thank you for walking beside us.",
    "footer.text":"Made with love — Darwin & Nathalie, 2027"
  }
};
let currentLang = 'es';

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(I18N[lang][key]) el.innerHTML = I18N[lang][key];
  });
  document.querySelectorAll('[data-lang-btn]').forEach(el=>{
    el.classList.toggle('on', el.getAttribute('data-lang-btn')===lang);
  });
  renderTimeline(); renderCollage(); renderKids(); renderGallery(); renderVegas();
}
document.getElementById('langToggle').addEventListener('click',()=>{
  applyLang(currentLang==='es' ? 'en' : 'es');
});

/* ============================================================
   2. STARFIELD / CONSTELLATION BACKGROUND
   ============================================================ */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let W,H,DPR;
function resize(){
  DPR = Math.min(window.devicePixelRatio||1, 2);
  W = canvas.width = innerWidth*DPR;
  H = canvas.height = innerHeight*DPR;
  canvas.style.width = innerWidth+'px';
  canvas.style.height = innerHeight+'px';
}
resize();
window.addEventListener('resize', resize);

const STAR_COUNT = 220;
const SPARKLE_PALETTE = ['43,38,32', '184,146,90', '167,197,218', '227,170,176']; // ink, gold, blue, rose
const stars = Array.from({length:STAR_COUNT},()=>({
  x:Math.random(), y:Math.random(),
  r:Math.random()*1.4+0.3,
  phase:Math.random()*Math.PI*2,
  speed:Math.random()*0.6+0.2,
  color: Math.random()<0.78 ? SPARKLE_PALETTE[0] : SPARKLE_PALETTE[1+Math.floor(Math.random()*3)]
}));

const NEBULA_COLORS = [
  '214,178,96',  // warm gold
  '214,178,96',  // warm gold (weighted — more gold in the mix)
  '90,140,204',  // vivid blue
  '158,104,204', // vivid purple
  '214,178,96',  // warm gold
  '120,170,224', // sky blue
  '176,120,214', // orchid / lavender
  '224,150,170'  // soft rose (ties back to the accent palette)
];
let nebulae = Array.from({length:9},(_, i)=>({
  x:Math.random(), y:Math.random(),
  r:Math.random()*180+220,
  phase:Math.random()*Math.PI*2,
  speed:Math.random()*0.08+0.06,
  color: NEBULA_COLORS[i % NEBULA_COLORS.length]
}));

// bright sparkles — gold / pink / blue glints scattered across the page
const SPARKLE_COUNT = 55;
const SPARKLE_PALETTE2 = ['232,196,112','224,140,165','110,160,224'];
const sparkles = Array.from({length:SPARKLE_COUNT},(_, i)=>({
  x:Math.random(), y:Math.random(),
  size:Math.random()*5+3.5,
  phase:Math.random()*Math.PI*2,
  speed:Math.random()*0.5+0.25,
  color: SPARKLE_PALETTE2[i % SPARKLE_PALETTE2.length]
}));

function drawSparkle(x,y,size,alpha,color){
  ctx.save();
  ctx.translate(x,y);
  ctx.globalAlpha = alpha;
  const grad = ctx.createRadialGradient(0,0,0,0,0,size*2.2);
  grad.addColorStop(0, `rgba(${color},1)`);
  grad.addColorStop(1, `rgba(${color},0)`);
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(0,0,size*2.2,0,7); ctx.fill();
  ctx.strokeStyle = `rgba(${color},.9)`;
  ctx.lineWidth = Math.max(size*0.16,0.6);
  ctx.beginPath();
  ctx.moveTo(-size,0); ctx.lineTo(size,0);
  ctx.moveTo(0,-size); ctx.lineTo(0,size);
  ctx.stroke();
  ctx.restore();
}

let t=0;
function draw(){
  t += 0.016;
  ctx.clearRect(0,0,W,H);

  // nebulae — soft, clearly-visible colour clouds that breathe slowly
  nebulae.forEach(n=>{
    const alpha = 0.055 + Math.sin(t*n.speed+n.phase)*0.02;
    const a = Math.max(alpha, 0.015);
    const g = ctx.createRadialGradient(n.x*W,n.y*H,0,n.x*W,n.y*H,n.r*DPR);
    g.addColorStop(0,   `rgba(${n.color},${a})`);
    g.addColorStop(0.45,`rgba(${n.color},${a*0.6})`);
    g.addColorStop(1,   `rgba(${n.color},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(0,0,W,H);
  });

  // stars
  stars.forEach(s=>{
    const twinkle = 0.4+0.6*Math.abs(Math.sin(t*s.speed+s.phase));
    ctx.beginPath();
    ctx.fillStyle = `rgba(${s.color},${0.28*twinkle})`;
    ctx.arc(s.x*W, s.y*H, s.r*DPR, 0, 7);
    ctx.fill();
  });

  // bright gold sparkles — slow elegant glints, not a busy twinkle
  sparkles.forEach(sp=>{
    const pulse = Math.max(0, Math.sin(t*sp.speed+sp.phase));
    if(pulse < 0.35) return; // dormant most of the time, occasional soft glint
    drawSparkle(sp.x*W, sp.y*H, sp.size*DPR, pulse*0.55, sp.color);
  });

  requestAnimationFrame(draw);
}
draw();

/* cursor glow */
const glow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', e=>{
  glow.style.left = e.clientX+'px';
  glow.style.top = e.clientY+'px';
});

/* ============================================================
   3. SMOOTH SCROLL (Lenis) + GSAP ScrollTrigger
   ============================================================ */
let ANIM_OK = true;
let lenis = { scrollTo:(el)=> el && el.scrollIntoView({behavior:'smooth'}) }; // safe fallback
try{
  gsap.registerPlugin(ScrollTrigger);
  lenis = new Lenis({ duration: 1.15, smoothWheel:true, easing:t=>1-Math.pow(1-t,3) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time)=>{ lenis.raf(time*1000); });
  gsap.ticker.lagSmoothing(0);
}catch(e){
  ANIM_OK = false;
  console.warn('Animation libraries failed to load — showing content without animation.', e);
}

function forceRevealEverything(){
  document.querySelectorAll(
    '[data-reveal], .frame, .kid-card, .g-card, .detail-card, .dress-figure, '+
    '.program-item, .map-frame-outer, .envelope-icon, .story-narrative p, .story-closer, .vow-line, '+
    '.hero-names, .hero-amp, .hero-sub, .hero-tag'
  ).forEach(el=>{ el.style.opacity='1'; el.style.transform='none'; });
}
if(!ANIM_OK) console.warn('Falling back to a static (non-animated) layout.');

/* ============================================================
   4. CONTENT RENDERERS (story / kids / gallery / collage captions)
   ============================================================ */
const ICONS = {
  rings:'<svg viewBox="0 0 100 100"><circle cx="38" cy="55" r="20"/><circle cx="62" cy="55" r="20"/></svg>',
  wreath:'<svg viewBox="0 0 100 100"><path d="M50 10 C20 14 10 45 20 68 C28 86 45 92 50 92 C55 92 72 86 80 68 C90 45 80 14 50 10 Z"/><path d="M50 10 Q46 40 50 70"/><ellipse cx="30" cy="30" rx="6" ry="3" transform="rotate(30 30 30)"/><ellipse cx="24" cy="48" rx="6" ry="3" transform="rotate(60 24 48)"/><ellipse cx="30" cy="66" rx="6" ry="3" transform="rotate(100 30 66)"/><ellipse cx="70" cy="30" rx="6" ry="3" transform="rotate(-30 70 30)"/><ellipse cx="76" cy="48" rx="6" ry="3" transform="rotate(-60 76 48)"/><ellipse cx="70" cy="66" rx="6" ry="3" transform="rotate(-100 70 66)"/></svg>',
  branch:'<svg viewBox="0 0 100 100"><path d="M6 94 Q50 60 94 6"/><ellipse cx="26" cy="74" rx="9" ry="5" transform="rotate(40 26 74)"/><ellipse cx="44" cy="56" rx="9" ry="5" transform="rotate(40 44 56)"/><ellipse cx="62" cy="38" rx="9" ry="5" transform="rotate(40 62 38)"/><ellipse cx="78" cy="22" rx="7" ry="4" transform="rotate(40 78 22)"/></svg>',
  heart:'<svg viewBox="0 0 100 100"><path d="M50 92 C10 62 2 32 22 16 C36 4 50 12 50 30 C50 12 64 4 78 16 C98 32 90 62 50 92Z"/></svg>',
  coupe:'<svg viewBox="0 0 100 100"><path d="M20 6 Q20 44 50 50 Q80 44 80 6 Z"/><line x1="50" y1="50" x2="50" y2="86"/><line x1="30" y1="94" x2="70" y2="94"/><line x1="50" y1="86" x2="50" y2="94"/><circle cx="38" cy="20" r="2"/><circle cx="58" cy="28" r="2"/><circle cx="46" cy="34" r="2"/></svg>',
  sun:'<svg viewBox="0 0 100 100"><path d="M4 74 Q50 24 96 74"/><line x1="50" y1="4" x2="50" y2="18"/><line x1="18" y1="16" x2="27" y2="28"/><line x1="82" y1="16" x2="73" y2="28"/><line x1="4" y1="74" x2="96" y2="74"/></svg>',
  monogram:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46"/><circle cx="50" cy="50" r="39"/><text x="50" y="63" font-size="32" font-family="Great Vibes, cursive" text-anchor="middle" stroke="none" fill="var(--gold-bright)">D&amp;N</text></svg>',
  dove:'<svg viewBox="0 0 100 100"><path d="M4 58 Q30 40 48 54 Q40 26 64 12 Q54 32 66 46 Q84 40 98 58 Q72 52 58 62 Q44 72 4 58Z"/></svg>',
  family:'<svg viewBox="0 0 100 100"><circle cx="26" cy="38" r="15"/><circle cx="74" cy="38" r="15"/><circle cx="50" cy="68" r="10"/><line x1="26" y1="53" x2="26" y2="72"/><line x1="74" y1="53" x2="74" y2="72"/></svg>',
  compass:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44"/><path d="M50 22 L58 50 L50 78 L42 50 Z"/><circle cx="50" cy="50" r="3"/></svg>',
  candle:'<svg viewBox="0 0 100 100"><path d="M50 8 C56 20 60 26 50 32 C40 26 44 20 50 8Z"/><rect x="42" y="32" width="16" height="60" rx="2"/><line x1="30" y1="92" x2="70" y2="92"/></svg>',
  skyline:'<svg viewBox="0 0 100 100"><rect x="6" y="52" width="14" height="40"/><rect x="24" y="34" width="16" height="58"/><rect x="44" y="16" width="18" height="76"/><circle cx="53" cy="10" r="4"/><rect x="66" y="42" width="14" height="50"/><rect x="82" y="58" width="12" height="34"/><line x1="2" y1="92" x2="98" y2="92"/></svg>',
  dice:'<svg viewBox="0 0 100 100"><rect x="8" y="30" width="46" height="46" rx="6" transform="rotate(-8 31 53)"/><circle cx="22" cy="46" r="2.6" transform="rotate(-8 31 53)"/><circle cx="40" cy="60" r="2.6" transform="rotate(-8 31 53)"/><rect x="46" y="22" width="46" height="46" rx="6" transform="rotate(6 69 45)"/><circle cx="60" cy="34" r="2.6" transform="rotate(6 69 45)"/><circle cx="78" cy="34" r="2.6" transform="rotate(6 69 45)"/><circle cx="60" cy="56" r="2.6" transform="rotate(6 69 45)"/><circle cx="78" cy="56" r="2.6" transform="rotate(6 69 45)"/></svg>',
  fountain:'<svg viewBox="0 0 100 100"><path d="M50 10 L50 30 M38 22 L50 34 L62 22 M30 34 L50 50 L70 34"/><ellipse cx="50" cy="70" rx="34" ry="10"/><rect x="34" y="70" width="32" height="16"/><ellipse cx="50" cy="86" rx="34" ry="8"/></svg>'
};
function artIcon(name, captionKey, tone, pos){
  const cap = ART_CAPTIONS[currentLang][captionKey] || '';
  return `<div class="art-frame tone-${tone} pos-${pos}">${ICONS[name]}<span class="art-caption"><span class="cap-rule"></span><span class="cap-text">${cap}</span></span></div>`;
}

const PHOTO_DIR = 'photos/';
function artPhoto(file, captionKey, pos){
  const cap = ART_CAPTIONS[currentLang][captionKey] || '';
  return `<div class="art-frame has-photo pos-${pos||'a'}"><img src="${PHOTO_DIR}${file}" alt=""><span class="art-caption"><span class="cap-rule"></span><span class="cap-text">${cap}</span></span></div>`;
}
const ART_CAPTIONS = {
  es:{
    p1:'Un brindis bajo el sol',p2:'Un atardecer para recordar',p3:'Aventuras en Disney',
    p4:'Un beso en el reino mágico',p5:'Navidad juntos',p6:'Días de playa',
    p7:'Aventura en familia',p8:'Frente al castillo',p9:'Entre rosas',
    p10:'Noche de crucero',p11:'Bajo un cielo mágico',p12:'Noche especial en familia',
    p13:'Un día para celebrar',p14:'Luces de diciembre',p15:'Un beso en la gran ciudad',
    p20:'Un día junto al lago',p21:'Celebrando en familia',p22:'Primer cumpleaños',
    p23:'Cumpleaños en casa',p24:'Un día de playa en familia',p25:'Celebrando su cumpleaños',
    p26:'Un atardecer en el castillo'
  },
  en:{
    p1:'A toast under the sun',p2:'A sunset to remember',p3:'Disney adventures',
    p4:'A kiss in the magic kingdom',p5:'Christmas together',p6:'Beach days',
    p7:'A family adventure',p8:'In front of the castle',p9:'Among roses',
    p10:'A night at sea',p11:'Under a magical sky',p12:'A special family night',
    p13:'A day to celebrate',p14:'December lights',p15:'A kiss in the big city',
    p20:'A day by the lake',p21:'Celebrating together',p22:'First birthday',
    p23:'Birthday at home',p24:'A family beach day',p25:"Celebrating her birthday",
    p26:'Sunset at the castle'
  }
};
function renderCollage(){
  const el = document.getElementById('collage');
  const map = [
    ['f1','photo-7.jpg','p7','a'],['f2','photo-11.jpg','p11','b'],['f3','photo-13.jpg','p13','d'],
    ['f4','photo-12.jpg','p12','c'],['f5','photo-14.jpg','p14','c']
  ];
  el.innerHTML = map.map(([cls,file,cap,pos])=>`<div class="frame ${cls}">${artPhoto(file,cap,pos)}</div>`).join('');
}

const STORY_ES = {
  paragraphs: [
    'Hay historias de amor que comienzan con una gran declaración. La nuestra comenzó de una manera mucho más sencilla: un partido del Mundial de 2014.',
    'Entre conversaciones, risas y pequeños momentos, nuestras vidas comenzaron a cruzarse. Poco a poco descubrimos todo lo que teníamos en común y, sin darnos cuenta, aquella conexión se convirtió en amor.',
    'Con el tiempo llegó uno de nuestros mayores sueños: construir una familia y un hogar juntos. Hoy tenemos tres hijos, tres vidas que representan lo más bonito de todo lo que hemos construido.',
    'Nuestro hogar se construyó con recuerdos, sacrificios, abrazos, celebraciones y también momentos difíciles. Porque un verdadero hogar no es un lugar, sino las personas con quienes sentimos que pertenecemos.',
    'La vida también nos llevó lejos de donde comenzamos. Nos fuimos a vivir a Estados Unidos, enfrentando nuevos lugares, cambios y desafíos. No todo ha sido fácil, pero en cada dificultad aprendimos a sostenernos y a seguir adelante juntos.',
    'Después de tantos años y tantos capítulos compartidos, seguimos aquí. No porque el camino haya sido perfecto, sino porque nunca dejamos de elegirnos.',
    'Hoy, al renovar nuestros votos, no comenzamos una nueva historia. Celebramos la que ya construimos y prometemos seguir escribiéndola.',
    'Celebramos aquel encuentro en 2014, nuestra familia, nuestros tres hijos y cada obstáculo que superamos tomados de la mano.'
  ],
  closerLine: 'Y sobre todo, celebramos una certeza:',
  vowLead: 'Una de las mejores decisiones de nuestra vida fue elegirnos el uno al otro.',
  vowLines: [
    'Hoy volvemos a decir sí.',
    'Sí a nuestra historia.',
    'Sí a nuestra familia.',
    'Sí a nuestro hogar.',
    'Sí a todo lo que todavía nos queda por vivir.',
    'Y sí, una vez más, a caminar juntos por todos los años que vienen.'
  ]
};
const STORY_EN = {
  paragraphs: [
    'Some love stories begin with a grand declaration. Ours began in a much simpler way: a 2014 World Cup match.',
    'Between conversations, laughter, and small moments, our lives began to cross paths. Little by little we discovered everything we had in common, and without realizing it, that connection turned into love.',
    "In time came one of our biggest dreams: building a family and a home together. Today we have three children — three lives that represent the most beautiful part of everything we've built.",
    "Our home was built with memories, sacrifices, hugs, celebrations, and difficult moments too. Because a true home isn't a place — it's the people we feel we belong with.",
    'Life also took us far from where we started. We moved to the United States, facing new places, changes, and challenges. Not everything has been easy, but with every difficulty we learned to hold on to each other and keep moving forward together.',
    "After so many years and so many shared chapters, we're still here. Not because the road has been perfect, but because we never stopped choosing each other.",
    'Today, as we renew our vows, we are not starting a new story. We are celebrating the one we\'ve already built, and promising to keep writing it.',
    'We celebrate that encounter in 2014, our family, our three children, and every obstacle we overcame hand in hand.'
  ],
  closerLine: 'And above all, we celebrate one certainty:',
  vowLead: 'One of the best decisions of our lives was choosing each other.',
  vowLines: [
    'Today we say yes again.',
    'Yes to our story.',
    'Yes to our family.',
    'Yes to our home.',
    'Yes to everything we still have left to live.',
    'And yes, once again, to walking together through all the years to come.'
  ]
};
function renderTimeline(){
  const data = currentLang==='es' ? STORY_ES : STORY_EN;
  const el = document.getElementById('storyNarrative');
  el.innerHTML =
    data.paragraphs.map(p=>`<p data-reveal>${p}</p>`).join('') +
    `<p class="story-closer" data-reveal>${data.closerLine}</p>` +
    `<div class="vow-list">
       <div class="vow-line" data-reveal style="font-style:italic;font-size:1.1rem;">${data.vowLead}</div>
       ${data.vowLines.map(l=>`<div class="vow-line" data-reveal>${l}</div>`).join('')}
     </div>`;
  if(ANIM_OK) ScrollTrigger.refresh();
  animateReveals('#storyNarrative p, #storyNarrative .vow-line');
}

function renderKids(){
  const el = document.getElementById('kidsGrid');
  const cfg = ['photo-19-kids.jpg','photo-14.jpg'];
  el.innerHTML = cfg.map(file=>`
    <div class="kid-card" data-reveal>
      <div class="kid-photo"><div class="art-frame has-photo"><img src="${PHOTO_DIR}${file}" alt=""></div></div>
    </div>`).join('');
  animateReveals('#kidsGrid .kid-card');
}

function renderGallery(){
  const el = document.getElementById('galleryTrack');
  const sizes = ['g-tall','g-wide','g-square'];
  const poss = ['a','b','c','d'];
  const items = [
    ['photo-2.jpg','p2'],['photo-15.jpg','p15'],['photo-9.jpg','p9'],
    ['photo-3.jpg','p3'],['photo-8.jpg','p8'],['photo-10.jpg','p10'],
    ['photo-1.jpg','p1'],['photo-5.jpg','p5'],['photo-12.jpg','p12'],
    ['photo-13.jpg','p13'],['photo-14.jpg','p14'],['photo-11.jpg','p11'],
    ['photo-20-fam.jpg','p20'],['photo-21-fam.jpg','p21'],['photo-22-fam.jpg','p22'],
    ['photo-23-fam.jpg','p23'],['photo-24-fam.jpg','p24'],['photo-25-fam.jpg','p25'],
    ['photo-26-fam.jpg','p26']
  ];
  let html='';
  items.forEach(([file,cap],i)=>{
    const size = sizes[i % sizes.length];
    const pos = poss[i % poss.length];
    html += `<div class="g-tilt ${size}"><div class="g-card">${artPhoto(file,cap,pos)}<svg class="booth-flash" viewBox="0 0 20 20"><path d="M10 2 L10 8 M10 12 L10 18 M2 10 L8 10 M12 10 L18 10"/></svg></div></div>`;
  });
  el.innerHTML = html;
  setupGalleryScroll();
}

function renderVegas(){
  const feature = document.getElementById('vegasFeature');
  const strip = document.getElementById('vegasStrip');
  if(!feature || !strip) return;
  const capKey = k => (VEGAS_CAPTIONS[currentLang][k]||'');

  feature.innerHTML = `<img src="${PHOTO_DIR}photo-29-vegas.jpg" alt="">
    <div class="vegas-feature-text">
      <span class="vegas-feature-kicker">${capKey('kicker')}</span>
      <span class="vegas-feature-title">${capKey('v0')}</span>
    </div>`;

  const stripItems = [
    ['photo-30-vegas.jpg','v1'],
    ['photo-31-vegas.jpg','v2'],
    ['photo-32-vegas.jpg','v3'],
    ['photo-33-vegas.jpg','v4'],
    ['photo-34-vegas.jpg','v5']
  ];
  strip.innerHTML = stripItems.map(([file,cap])=>`
    <div class="vegas-strip-card" data-reveal>
      <img src="${PHOTO_DIR}${file}" alt="">
      <span class="vegas-strip-cap">${capKey(cap)}</span>
    </div>`).join('');
}
const VEGAS_CAPTIONS = {
  es:{
    kicker:'Bienvenidos a',
    v0:'Fabulous Las Vegas',
    v1:'El mismo escenario donde diremos "sí"',
    v2:'Bajo las luces, al anochecer',
    v3:'El Strip que nunca duerme',
    v4:'La esfera que ilumina la ciudad',
    v5:'Vistas desde lo alto'
  },
  en:{
    kicker:'Welcome to',
    v0:'Fabulous Las Vegas',
    v1:'The very setting where we\'ll say "I do"',
    v2:'Under the lights, at nightfall',
    v3:'The Strip that never sleeps',
    v4:'The sphere lighting up the city',
    v5:'Views from high above'
  }
};

/* generic reveal animation for elements matching selector with [data-reveal] */
function animateReveals(selector){
  if(!ANIM_OK){
    document.querySelectorAll(selector).forEach(el=>{ el.style.opacity='1'; el.style.transform='none'; });
    return;
  }
  document.querySelectorAll(selector).forEach(el=>{
    gsap.fromTo(el, {opacity:0,y:40}, {
      opacity:1, y:0, duration:1.1, ease:'power3.out',
      scrollTrigger:{ trigger:el, start:'top 85%', toggleActions:'play none none reverse' }
    });
  });
}

/* ============================================================
   5. SECTION ENTRANCE ANIMATIONS
   ============================================================ */
window.addEventListener('DOMContentLoaded', ()=>{
  applyLang('es');

  if(ANIM_OK){
    try{
      // hero
      gsap.from('#heroName1', {opacity:0, y:30, duration:1.4, ease:'power3.out', delay:.2});
      gsap.from('.hero-amp', {opacity:0, duration:1.2, delay:.7});
      gsap.from('#heroName2', {opacity:0, y:30, duration:1.4, ease:'power3.out', delay:.9});
      gsap.from('.hero-sub, .hero-tag', {opacity:0, y:16, duration:1.2, stagger:.15, delay:1.5});

      // generic reveals for static elements
      animateReveals('[data-reveal]');

      // collage frames
      gsap.utils.toArray('.collage .frame').forEach((f,i)=>{
        gsap.fromTo(f, {opacity:0, y:50, scale:.94}, {
          opacity:1, y:0, scale:1, duration:1.2, ease:'power3.out', delay:i*.12,
          scrollTrigger:{trigger:'#family', start:'top 60%', toggleActions:'play none none reverse'}
        });
      });

      // section titles fade
      gsap.utils.toArray('section').forEach(sec=>{
        const title = sec.querySelector('.title-lg');
        const eyebrow = sec.querySelector('.eyebrow');
        if(title){
          gsap.fromTo([eyebrow,title].filter(Boolean), {opacity:0,y:30},{
            opacity:1,y:0,duration:1,stagger:.15,ease:'power3.out',
            scrollTrigger:{trigger:sec, start:'top 70%', toggleActions:'play none none reverse'}
          });
        }
      });

      // map + directions
      animateReveals('.map-frame-outer, .directions-btn, .envelope-icon');

      // chapter nav active-state sync
      const navBtnsA = document.querySelectorAll('#chapterNav button');
      document.querySelectorAll('main section').forEach(sec=>{
        ScrollTrigger.create({
          trigger:sec, start:'top 50%', end:'bottom 50%',
          onEnter:()=>setActiveNav(sec.id), onEnterBack:()=>setActiveNav(sec.id)
        });
      });
      function setActiveNav(id){
        navBtnsA.forEach(b=>b.classList.toggle('active', b.dataset.target===id));
      }

      if(document.fonts && document.fonts.ready){
        document.fonts.ready.then(()=> ScrollTrigger.refresh());
      }
      window.addEventListener('load', ()=> ScrollTrigger.refresh());
      setTimeout(()=> ScrollTrigger.refresh(), 800);
    }catch(e){
      console.warn('Animation setup failed — showing content without animation.', e);
      forceRevealEverything();
    }
  } else {
    forceRevealEverything();
  }

  document.querySelectorAll('#chapterNav button').forEach(b=>{
    b.addEventListener('click',()=>{
      const target = document.getElementById(b.dataset.target);
      lenis.scrollTo(target, {duration:1.4});
    });
  });

  updateCountdown();
  setInterval(updateCountdown, 1000);

  const rsvpForm = document.getElementById('rsvpForm');
  if(rsvpForm){
    rsvpForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('rsvpName').value.trim();
      const attendVal = document.getElementById('rsvpAttend').value;
      const guests = document.getElementById('rsvpGuests').value || '0';
      const msg = document.getElementById('rsvpMsg').value.trim();
      const attendText = currentLang==='es'
        ? (attendVal==='yes' ? 'Sí, asistiré' : 'No podré asistir')
        : (attendVal==='yes' ? "Yes, I'll attend" : "I won't be able to attend");
      const subject = currentLang==='es'
        ? `Confirmación de asistencia — ${name}`
        : `RSVP — ${name}`;
      const bodyLines = currentLang==='es' ? [
        `Nombre: ${name}`,
        `Asistencia: ${attendText}`,
        `Acompañantes: ${guests}`,
        msg ? `Mensaje: ${msg}` : ''
      ] : [
        `Name: ${name}`,
        `Attending: ${attendText}`,
        `Guests: ${guests}`,
        msg ? `Message: ${msg}` : ''
      ];
      const body = bodyLines.filter(Boolean).join('\n');
      const mailto = `mailto:Darwintorres1085@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
});

function updateCountdown(){
  const now = new Date();
  let diff = WEDDING_DATE - now;
  if(diff<0) diff=0;
  const d = Math.floor(diff/86400000);
  const h = Math.floor(diff%86400000/3600000);
  const m = Math.floor(diff%3600000/60000);
  const s = Math.floor(diff%60000/1000);
  document.getElementById('cd-days').textContent = String(d).padStart(2,'0');
  document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
  document.getElementById('cd-min').textContent = String(m).padStart(2,'0');
  document.getElementById('cd-sec').textContent = String(s).padStart(2,'0');
}

/* ============================================================
   6. GALLERY HORIZONTAL PIN SCROLL
   ============================================================ */
let galleryST = null;
function setupGalleryScroll(){
  const track = document.getElementById('galleryTrack');
  const isMobile = window.innerWidth <= 760;

  if(galleryST){ galleryST.kill(); galleryST = null; }
  if(ANIM_OK){ ScrollTrigger.getAll().forEach(st=>{ if(st.vars && st.vars.trigger==='#gallery') st.kill(); }); }
  if(track) track.style.transform = 'none';
  const pinElReset = document.querySelector('.gallery-pin');
  if(pinElReset){ pinElReset.style.overflowX=''; pinElReset.style.overflowY=''; pinElReset.style.scrollSnapType=''; }

  if(!ANIM_OK || isMobile){
    document.querySelectorAll('.g-card').forEach(el=>{ el.style.opacity='1'; el.style.transform='none'; });
    const pinEl = document.querySelector('.gallery-pin');
    if(pinEl){
      pinEl.style.overflowX = 'auto';
      pinEl.style.overflowY = 'hidden';
      pinEl.style.scrollSnapType = 'x proximity';
      pinEl.style.webkitOverflowScrolling = 'touch';
      document.querySelectorAll('.g-card').forEach(c=>{ c.style.scrollSnapAlign = 'start'; });
    }
    if(track) track.style.transform = 'none';
    return;
  }

  track.style.overflowX = '';
  requestAnimationFrame(()=>{
    const distance = track.scrollWidth - window.innerWidth + 160;
    galleryST = gsap.to(track, {
      x: -distance, ease:'none',
      scrollTrigger:{
        trigger:'#gallery', start:'top top', end:()=>'+='+distance,
        scrub:0.6, pin:true, anticipatePin:1, invalidateOnRefresh:true
      }
    });

    gsap.utils.toArray('.g-card').forEach((card,i)=>{
      gsap.fromTo(card, {opacity:.35, scale:.92}, {
        opacity:1, scale:1, ease:'none',
        scrollTrigger:{
          trigger:'#gallery', containerAnimation:galleryST,
          start:'left 90%', end:'left 40%', scrub:true
        }
      });
    });
    ScrollTrigger.refresh();
  });
}

/* ============================================================
   7. MUSIC PLAYER
   ============================================================ */
const musicBtn = document.getElementById('musicToggle');
const bgm = document.getElementById('bgm');
bgm.volume = 0.25;

function setPlayingUI(isPlaying){
  musicBtn.classList.toggle('paused', !isPlaying);
}

musicBtn.addEventListener('click', ()=>{
  if(bgm.paused){
    bgm.play().then(()=>setPlayingUI(true)).catch(()=>{});
  } else {
    bgm.pause();
    setPlayingUI(false);
  }
});

function tryAutoplay(){
  const p = bgm.play();
  if(p && p.then){
    p.then(()=>setPlayingUI(true)).catch(()=>{
      const startOnFirstInteraction = ()=>{
        bgm.play().then(()=>setPlayingUI(true)).catch(()=>{});
        ['click','touchstart','keydown','scroll','wheel'].forEach(evt=>
          window.removeEventListener(evt, startOnFirstInteraction)
        );
      };
      ['click','touchstart','keydown','scroll','wheel'].forEach(evt=>
        window.addEventListener(evt, startOnFirstInteraction, {once:true, passive:true})
      );
    });
  }
}
if(document.readyState === 'complete'){
  tryAutoplay();
} else {
  window.addEventListener('load', tryAutoplay);
}