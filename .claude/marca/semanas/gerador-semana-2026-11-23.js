// Semana de 23 a 27/11/2026 — usa o CSS do gerador base
const { chromium } = require('playwright');
const fs = require('fs');
const src = fs.readFileSync(__dirname + '/base.js', 'utf8');
const A = '/home/user/pepereh/assets';
const OUT = __dirname + '/out';
let css = eval('`' + src.split('const css = `')[1].split('`;\nconst logo')[0] + '`');
css += `.C .list li:before{background:#fff}.C .card{margin-top:40px;padding:34px 40px;border-radius:32px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.35);font-weight:500;font-size:38px;line-height:1.45;color:#fff}
.C .num{color:#fff;opacity:.9}.C .src{font-weight:600;font-size:28px;margin-top:44px;opacity:.85}`;
const logo = (l) => `<img class="logo" src="file://${A}/${l ? 'logo-white-360.png' : 'logo-wordmark.svg'}">`;
const glows = `<div class="g1"></div><div class="g2"></div>`;
const S = (style, inner, right = '', w = 1080, h = 1350, extra = '') =>
  ({ w, h, html: `<div class="s ${style} ${extra}" style="width:${w}px;height:${h}px">${style === 'B' ? glows : ''}<div class="z">${inner}</div><div class="foot">${logo(style !== 'A')}<span class="${style === 'A' ? 'accent' : ''}">${right}</span></div></div>` });
const V = (style, inner) => S(style, inner, '', 1080, 1920, 'st');
const it = {};

/* Segunda 23 — Reel P1 (B): checklist para escolher um parceiro tecnológico */
const reel = [
  `<div class="tag grad">Do problema à execução</div><div class="h1" style="font-size:108px">Vai contratar um parceiro de tecnologia? Faça estas <span class="grad">5 perguntas.</span></div>`,
  `<div class="num grad">PERGUNTA 1</div><div class="h1" style="font-size:96px">Percebeu o meu <span class="grad">problema</span> antes de propor uma solução?</div>`,
  `<div class="num grad">PERGUNTA 2</div><div class="h1" style="font-size:96px">Já entregou <span class="grad">projectos semelhantes?</span></div>`,
  `<div class="num grad">PERGUNTA 3</div><div class="h1" style="font-size:96px">Quem é responsável pelo <span class="grad">resultado final?</span></div>`,
  `<div class="num grad">PERGUNTA 4</div><div class="h1" style="font-size:96px">Como vai envolver a <span class="grad">minha equipa?</span></div>`,
  `<div class="num grad">PERGUNTA 5</div><div class="h1" style="font-size:96px">O que acontece <span class="grad">depois da entrega?</span></div>`,
  `<div class="h1" style="font-size:92px">Na PEPEREH, respondemos a todas <span class="grad">antes de começar.</span></div><div class="p">think big. · pepereh.com</div>`,
];
reel.forEach((x, i) => it[`seg23-reel-cena-${i + 1}`] = V('B', x));

/* Quarta 25 — Carrossel P4 (C): Site, Instagram ou WhatsApp Business */
const q = 'qua25-carrossel-';
it[q + 1] = S('C', `<div class="tag">Tecnologia certa para a empresa</div><div class="h1" style="font-size:88px">Site, Instagram ou WhatsApp Business: por onde começar?</div><div class="p">Depende do que o seu negócio precisa agora.</div><div class="pill">Deslize →</div>`, 'think big.');
it[q + 2] = S('C', `<div class="num">01 · WHATSAPP BUSINESS</div><div class="h2">Para quem já tem clientes a pedir informação.</div><div class="card">Aplicação gratuita com catálogo, respostas rápidas, horário e mensagem de ausência. Organiza as conversas que já tem.</div>`, '<span class="page">2/7</span>');
it[q + 3] = S('C', `<div class="num">02 · INSTAGRAM</div><div class="h2">Para mostrar o que faz e ser descoberto.</div><div class="card">Ideal para produtos e serviços visuais. Publicações regulares criam confiança antes do primeiro contacto.</div>`, '<span class="page">3/7</span>');
it[q + 4] = S('C', `<div class="num">03 · SITE</div><div class="h2">Para credibilidade e para ser encontrado no Google.</div><div class="card">É a sua casa digital: é seu, está sempre disponível e não depende de algoritmos.</div>`, '<span class="page">4/7</span>');
it[q + 5] = S('C', `<div class="num">A REGRA PRÁTICA</div><div class="h2">Comece pelo que os seus clientes já usam.</div><ul class="list"><li>Clientes chegam por recomendação → WhatsApp Business</li><li>Vende algo visual → Instagram</li><li>Trabalha com empresas ou com o Estado → site profissional</li></ul>`, '<span class="page">5/7</span>');
it[q + 6] = S('C', `<div class="num">O IDEAL</div><div class="h2">Os três a trabalhar juntos.</div><ul class="list"><li>Site → credibilidade</li><li>Instagram → visibilidade</li><li>WhatsApp → conversa e venda</li></ul>`, '<span class="page">6/7</span>');
it[q + 7] = S('C', `<div class="tag">PEPEREH</div><div class="h2">Precisa de ajuda para montar a presença online da sua empresa?</div><div class="p">Criamos sites e organizamos a presença digital — do planeamento à execução.</div><div class="pill">Pedir proposta · pepereh.com</div>`, '<span class="page">7/7</span>');

/* Sexta 27 — Imagem P5 (C), espaço reactivo: notícia aprovada do Web Summit */
it['sex27-imagem'] = S('C', `<div class="tag">Talento angolano</div><div class="h1" style="font-size:104px">9 startups angolanas no Web Summit Lisboa.</div><div class="p" style="font-size:42px">De 9 a 12 de Novembro, com o apoio do INAPEM e da IFC, procuraram investidores e parceiros.</div><div class="h2" style="font-size:64px">Think big é isto.</div><div class="src">Fonte: Forbes África Lusófona · Leia em pepereh.com/noticias</div>`, 'think big.');

/* Stories */
it['seg23-story-sondagem'] = V('B', `<div class="tag grad">Pergunta rápida</div><div class="h1">Já trocou de fornecedor de tecnologia <span class="grad">a meio de um projecto?</span></div><div class="sticker">Espaço para o autocolante<br>«SONDAGEM»: Sim / Não</div>`);
it['ter24-story-pergunta'] = V('A', `<div class="tag">Queremos saber</div><div class="h1">Que ferramenta digital mais usa no <span class="grad">seu negócio?</span></div><div class="sticker">Espaço para o autocolante «QUESTIONÁRIO»:<br>WhatsApp · Instagram · Site · Outra</div>`);
it['qui26-story-faq'] = V('C', `<div class="tag">Pergunta frequente</div><div class="h1">Fazem manutenção depois da entrega?</div><div class="p" style="font-size:52px;font-weight:700">Sim. Damos suporte e manutenção para que a solução continue a funcionar e a evoluir.</div>`);
it['sex27-story-noticia'] = V('B', `<div class="tag grad">No site</div><div class="h1">Startups angolanas no <span class="grad">Web Summit.</span></div><div class="p">O que isto significa para empresas e empreendedores em Angola — leia o artigo completo.</div><div class="sticker">Espaço para o autocolante<br>«LINK» → pepereh.com/noticias</div>`);

(async () => {
  const b = await chromium.launch();
  for (const [n, s] of Object.entries(it)) {
    const p = await b.newPage({ viewport: { width: s.w, height: s.h } });
    const f = `${__dirname}/tmp-${n}.html`;
    fs.writeFileSync(f, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${s.html}</body></html>`);
    await p.goto('file://' + f); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(250);
    await p.screenshot({ path: `${OUT}/${n}.png` }); fs.unlinkSync(f); await p.close();
  }
  await b.close();
  console.log(Object.keys(it).length, 'imagens');
})();
