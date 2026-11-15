// Gera as imagens da semana 1 (carrosséis, stories e cenas do reel) com a identidade PEPEREH
const { chromium } = require('playwright');
const fs = require('fs');
const A = '/home/user/pepereh/assets';
const OUT = __dirname + '/out';
fs.mkdirSync(OUT, { recursive: true });

const css = `
@font-face{font-family:J;font-weight:800;src:url("file://${A}/fonts/plus-jakarta-sans-latin-800-normal.woff2")}
@font-face{font-family:J;font-weight:700;src:url("file://${A}/fonts/plus-jakarta-sans-latin-700-normal.woff2")}
@font-face{font-family:J;font-weight:600;src:url("file://${A}/fonts/plus-jakarta-sans-latin-600-normal.woff2")}
@font-face{font-family:J;font-weight:500;src:url("file://${A}/fonts/plus-jakarta-sans-latin-500-normal.woff2")}
*{box-sizing:border-box}html,body{margin:0}
.s{position:relative;overflow:hidden;font-family:J;padding:110px 96px 200px;display:flex;flex-direction:column}
.z{flex:1;display:flex;flex-direction:column;justify-content:center;position:relative}
.grad{background:linear-gradient(100deg,#2ed3f5,#5aa8ff 30%,#9b6bff 65%,#d63cff);-webkit-background-clip:text;color:transparent}
.tag{font-weight:600;font-size:30px;letter-spacing:6px;text-transform:uppercase}
.h1{font-weight:800;font-size:96px;line-height:1.03;letter-spacing:-3px;margin:36px 0 0}
.h2{font-weight:800;font-size:72px;line-height:1.08;letter-spacing:-2px;margin:28px 0 0}
.p{font-weight:500;font-size:40px;line-height:1.45;margin-top:40px}
.num{font-weight:800;font-size:34px;letter-spacing:2px}
.list{margin:44px 0 0;padding:0;list-style:none}
.list li{font-weight:600;font-size:42px;line-height:1.35;margin:0 0 30px;padding-left:56px;position:relative}
.list li:before{content:"";position:absolute;left:0;top:14px;width:26px;height:26px;border-radius:50%;background:linear-gradient(100deg,#2ed3f5,#9b6bff,#d63cff)}
.foot{position:absolute;left:96px;right:96px;bottom:84px;display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:30px}
.logo{height:52px}
.page{font-weight:600;font-size:28px;opacity:.6}
/* A claro */
.A{background:#fff;color:#0b0b14}.A .p{color:#4a4a58}.A .tag,.A .accent{color:#8b5cf6}
.A .big{position:absolute;right:-10px;bottom:-60px;font-weight:800;font-size:520px;line-height:1;color:#0b0b14;opacity:.05;z-index:0}
.A .z>*:not(.big){position:relative;z-index:1}
/* B escuro */
.B{background:#0b0b14;color:#fff}.B .p{color:rgba(255,255,255,.75)}
.B .g1{position:absolute;width:1000px;height:1000px;right:-440px;top:-420px;border-radius:50%;background:radial-gradient(closest-side,rgba(46,211,245,.42),rgba(155,107,255,.32) 55%,transparent 75%)}
.B .g2{position:absolute;width:820px;height:820px;left:-400px;bottom:-460px;border-radius:50%;background:radial-gradient(closest-side,rgba(214,60,255,.32),transparent 70%)}
.B .card{margin-top:44px;padding:36px 40px;border-radius:32px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);font-weight:500;font-size:38px;line-height:1.45;color:rgba(255,255,255,.88)}
/* C gradiente */
.C{background:linear-gradient(135deg,#2ed3f5 0%,#5aa8ff 30%,#9b6bff 65%,#d63cff 100%);color:#fff}.C .p{color:rgba(255,255,255,.94)}
.pill{display:inline-block;margin-top:48px;background:#fff;color:#0b0b14;border-radius:999px;padding:24px 44px;font-weight:800;font-size:36px}
.B .pill{background:linear-gradient(100deg,#2ed3f5,#9b6bff 60%,#d63cff);color:#fff}

/* story */
.st{padding:260px 90px 380px}
.st .h1{font-size:104px}
.sticker{margin-top:70px;border:3px dashed rgba(255,255,255,.55);border-radius:36px;height:300px;display:grid;place-items:center;font-weight:600;font-size:30px;color:rgba(255,255,255,.7);text-align:center;padding:0 30px}
.A .sticker{border-color:#c9c9d6;color:#8a8a99}
.st .foot{bottom:200px}
`;
const logo = (light) => `<img class="logo" src="file://${A}/${light ? 'logo-white-360.png' : 'logo-wordmark.svg'}">`;
const glows = `<div class="g1"></div><div class="g2"></div>`;

function slide(style, inner, footRight, w = 1080, h = 1350, extraClass = '') {
  const light = style !== 'A';
  return { w, h, html: `<div class="s ${style} ${extraClass}" style="width:${w}px;height:${h}px">${style === 'B' ? glows : ''}<div class="z">${inner}</div>
  <div class="foot">${logo(light)}<span class="${style === 'A' ? 'accent' : ''}">${footRight || ''}</span></div></div>` };
}

const items = {};

/* ---------- Carrossel 1 — Segunda Digital (B) ---------- */
const c1 = [
  slide('B', `<div class="tag grad">Segunda Digital</div><div class="h1">O que é uma <span class="grad">Janela Única</span> — e porque muda a vida das empresas?</div><div class="p">Explicado em 1 minuto.</div>`, '<span class="grad">Deslize →</span>'),
  slide('B', `<div class="num grad">01 · O PROBLEMA</div><div class="h2">Muitos balcões, muitos formulários.</div><div class="card">Para abrir uma empresa, importar mercadoria ou licenciar uma actividade, é comum passar por várias entidades — e cada uma pede os mesmos documentos.</div>`, '<span class="page">2/6</span>'),
  slide('B', `<div class="num grad">02 · A IDEIA</div><div class="h2">Um só ponto de entrada.</div><div class="card">Numa Janela Única, o cidadão ou a empresa entrega a informação uma vez. Os sistemas das várias entidades tratam do resto.</div>`, '<span class="page">3/6</span>'),
  slide('B', `<div class="num grad">03 · O SEGREDO</div><div class="h2">Interoperabilidade.</div><div class="card">Para funcionar, os sistemas de cada entidade têm de comunicar entre si, de forma segura e organizada. É a peça invisível que faz tudo acontecer.</div>`, '<span class="page">4/6</span>'),
  slide('B', `<div class="num grad">04 · O QUE MUDA</div><div class="h2">Para quem usa o serviço:</div><ul class="list"><li>Menos deslocações e papel</li><li>Processos mais rápidos e transparentes</li><li>Menos erros de dados repetidos</li><li>Acompanhamento do pedido</li></ul>`, '<span class="page">5/6</span>'),
  slide('B', `<div class="tag grad">PEPEREH</div><div class="h2">Temos experiência em Janelas Únicas e interoperabilidade de sistemas.</div><div class="p">Quer modernizar os processos da sua instituição ou empresa?</div><div class="pill">Fale connosco · pepereh.com</div>`, '<span class="page">6/6</span>'),
];
c1.forEach((s, i) => items[`seg16-carrossel-${i + 1}`] = s);

/* ---------- Carrossel 2 — Gestão que funciona (A) ---------- */
const c2q = [
  ['Que problema estou a resolver — e para quem?', 'Um negócio forte começa num problema real de clientes concretos, não apenas numa boa ideia.'],
  ['Há quem pague por isto?', 'Fale com potenciais clientes antes de investir. Mostrar interesse não é o mesmo que comprar.'],
  ['Quanto preciso para chegar ao primeiro cliente?', 'Calcule o investimento inicial e os custos mensais até as receitas cobrirem as despesas.'],
  ['O que me distingue da concorrência?', 'Preço, qualidade, rapidez, localização ou atendimento? Escolha uma vantagem clara e defenda-a.'],
  ['Como vou chegar aos clientes?', 'Recomendações, redes sociais, parcerias ou vendas directas? Defina os canais desde o primeiro dia.'],
];
items['qua18-carrossel-1'] = slide('A', `<div class="big">5</div><div class="tag">Gestão que funciona</div><div class="h1">5 perguntas a fazer antes de <span class="grad">abrir um negócio.</span></div><div class="p">Guarde para consultar antes de investir.</div>`, 'Deslize →');
c2q.forEach(([q, a], i) => items[`qua18-carrossel-${i + 2}`] = slide('A', `<div class="big">${i + 1}</div><div class="num accent">PERGUNTA ${i + 1}</div><div class="h2">${q}</div><div class="p">${a}</div>`, `<span class="page">${i + 2}/7</span>`));
items['qua18-carrossel-7'] = slide('A', `<div class="tag">Conclusão</div><div class="h2">Respondeu a todas com segurança? Está no bom caminho.</div><div class="p">Se não, um estudo de viabilidade pode poupar-lhe tempo e dinheiro. A PEPEREH ajuda a estruturar o seu negócio.</div><div class="p" style="font-weight:700;color:#0b0b14">Guarde · Partilhe com um empreendedor</div>`, '<span class="page">7/7</span>');

/* ---------- Reel — Do problema à execução (B, 9:16) ---------- */
const reel = [
  `<div class="tag grad">Do problema à execução</div><div class="h1" style="font-size:112px">Porque é que tantos projectos de tecnologia <span class="grad">falham?</span></div>`,
  `<div class="num grad">RAZÃO 1</div><div class="h1" style="font-size:100px">Começam pela tecnologia, não pelo <span class="grad">problema.</span></div>`,
  `<div class="num grad">RAZÃO 2</div><div class="h1" style="font-size:100px">Ninguém assume a responsabilidade pelo <span class="grad">resultado.</span></div>`,
  `<div class="num grad">RAZÃO 3</div><div class="h1" style="font-size:100px">A equipa não é envolvida desde o <span class="grad">início.</span></div>`,
  `<div class="h1" style="font-size:96px">Na PEPEREH, começamos pelo problema e <span class="grad">assumimos a execução</span> de ponta a ponta.</div>`,
  `<div class="h1" style="font-size:120px">think big<span class="grad">.</span></div><div class="p">Pedir proposta em pepereh.com</div>`,
];
reel.forEach((inner, i) => items[`sex20-reel-cena-${i + 1}`] = slide('B', inner, '', 1080, 1920, 'st'));

/* ---------- Stories (9:16) ---------- */
items['seg16-story-sondagem'] = slide('B', `<div class="tag grad">Pergunta rápida</div><div class="h1">Já ouviu falar de <span class="grad">Janela Única?</span></div><div class="sticker">Espaço para o autocolante<br>«SONDAGEM»: Sim / Não</div>`, '', 1080, 1920, 'st');
items['ter17-story-pergunta'] = slide('A', `<div class="tag">Queremos saber</div><div class="h1">Qual é o processo que mais <span class="grad">tempo faz perder</span> na sua empresa?</div><div class="sticker">Espaço para o autocolante<br>«PERGUNTAS»</div>`, '', 1080, 1920, 'st');
items['qui19-story-faq'] = slide('C', `<div class="tag">Pergunta frequente</div><div class="h1">Trabalham fora de Luanda?</div><div class="p" style="font-size:52px;font-weight:700">Sim. Actuamos em todo o território angolano.</div>`, '', 1080, 1920, 'st');
items['sex20-story-whatsapp'] = slide('B', `<div class="tag grad">Fale connosco</div><div class="h1">Tem um projecto em mente?</div><div class="p">Envie-nos uma mensagem — respondemos de segunda a sexta, das 10h às 17h.</div><div class="sticker">Espaço para o autocolante<br>«LINK» → WhatsApp</div>`, '', 1080, 1920, 'st');

(async () => {
  const b = await chromium.launch();
  for (const [name, s] of Object.entries(items)) {
    const p = await b.newPage({ viewport: { width: s.w, height: s.h } });
    const f = `${__dirname}/tmp-${name}.html`;
    fs.writeFileSync(f, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${s.html}</body></html>`);
    await p.goto('file://' + f);
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(250);
    await p.screenshot({ path: `${OUT}/${name}.png` });
    await p.close();
  }
  await b.close();
  for (const f of fs.readdirSync(__dirname)) if (f.startsWith('tmp-')) fs.unlinkSync(__dirname + '/' + f);
  console.log(Object.keys(items).length, 'imagens');
})();
