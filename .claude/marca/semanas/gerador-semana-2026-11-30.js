// Semana de 30/11 a 04/12/2026 — usa o CSS do gerador base
const { chromium } = require('playwright');
const fs = require('fs');
const src = fs.readFileSync(__dirname + '/base.js', 'utf8');
const A = '/home/user/pepereh/assets';
const OUT = __dirname + '/out';
let css = eval('`' + src.split('const css = `')[1].split('`;\nconst logo')[0] + '`');
css += `.C .list li:before{background:#fff}.C .num{color:#fff;opacity:.9}
.C .card{margin-top:40px;padding:34px 40px;border-radius:32px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.35);font-weight:500;font-size:38px;line-height:1.45;color:#fff}
.C .src{font-weight:600;font-size:28px;margin-top:40px;opacity:.85}.B .src{font-weight:600;font-size:28px;margin-top:40px;color:rgba(255,255,255,.6)}
.biz{display:grid;gap:22px;margin-top:44px}.biz>div{display:flex;align-items:center;gap:28px;background:#fff;border-radius:28px;padding:22px 28px;color:#0b0b14}
.biz img{height:70px;width:190px;object-fit:contain}.biz .dark{background:#01070a;border-radius:16px;padding:4px}
.biz b{display:block;font-weight:800;font-size:32px}.biz span{font-weight:500;font-size:26px;color:#4a4a58;line-height:1.3}
.kpi{display:flex;gap:26px;align-items:baseline}.kpi em{font-style:normal;font-weight:800;font-size:150px;line-height:1;opacity:.12}`;
const logo = (l) => `<img class="logo" src="file://${A}/${l ? 'logo-white-360.png' : 'logo-wordmark.svg'}">`;
const glows = `<div class="g1"></div><div class="g2"></div>`;
const S = (style, inner, right = '', w = 1080, h = 1350, extra = '') =>
  ({ w, h, html: `<div class="s ${style} ${extra}" style="width:${w}px;height:${h}px">${style === 'B' ? glows : ''}<div class="z">${inner}</div><div class="foot">${logo(style !== 'A')}<span class="${style === 'A' ? 'accent' : ''}">${right}</span></div></div>` });
const V = (style, inner) => S(style, inner, '', 1080, 1920, 'st');
const it = {};

/* Segunda 30/11 — Segunda Digital (P2, B): Janela Única de serviços públicos */
const m = 'seg30-carrossel-';
it[m + 1] = S('B', `<div class="tag grad">Segunda Digital</div><div class="h1" style="font-size:92px">Angola avança com a <span class="grad">Janela Única</span> digital de serviços públicos.</div><div class="p">O que foi aprovado e o que muda para as empresas.</div>`, '<span class="grad">Deslize →</span>');
it[m + 2] = S('B', `<div class="num grad">01 · A IDEIA</div><div class="h2">Um canal digital único para tratar processos do Estado.</div><div class="card">Cidadãos e empresas poderão tratar processos da administração pública à distância — sem deslocações, filas ou papel — e acompanhar os seus pedidos.</div>`, '<span class="page">2/6</span>');
it[m + 3] = S('B', `<div class="num grad">02 · O QUE FOI APROVADO</div><div class="h2">Plataforma tecnológica autorizada.</div><ul class="list"><li>Cerca de 4,31 milhões de dólares</li><li>Despacho publicado a 27 de Agosto de 2026</li><li>Concurso público autorizado</li><li>Projecto de Aceleração Digital (PADA), com o Banco Mundial</li></ul>`, '<span class="page">3/6</span>');
it[m + 4] = S('B', `<div class="num grad">03 · A PEÇA-CHAVE</div><div class="h2">Interoperabilidade.</div><div class="card">O pedido entra por um só ponto e os sistemas das várias entidades trocam a informação entre si — de forma segura e organizada.</div>`, '<span class="page">4/6</span>');
it[m + 5] = S('B', `<div class="num grad">04 · O QUE MUDA PARA AS EMPRESAS</div><div class="h2">Prepare-se desde já:</div><ul class="list"><li>Documentação organizada em formato digital</li><li>Processos internos revistos</li><li>Menos tempo e custo em licenças e registos</li></ul>`, '<span class="page">5/6</span>');
it[m + 6] = S('B', `<div class="tag grad">PEPEREH</div><div class="h2">Temos experiência em Janelas Únicas e interoperabilidade de sistemas.</div><div class="p">Leia o artigo completo em pepereh.com/noticias</div><div class="pill">Fale connosco · pepereh.com</div>`, '<span class="page">6/6</span>');

/* Quarta 02/12 — Gestão que funciona (P3, A): indicadores */
const k = [
  ['Vendas', 'Quanto entra por mês — e se está a crescer ou a cair.'],
  ['Margem', 'O que sobra depois de pagar o que vendeu. Vender mais nem sempre é ganhar mais.'],
  ['Tesouraria', 'O dinheiro disponível hoje e nas próximas semanas. Lucro não é o mesmo que dinheiro em caixa.'],
  ['Prazo de recebimento', 'Quantos dias os clientes demoram a pagar. Cada dia a mais pesa na tesouraria.'],
  ['Custos fixos', 'O que paga todos os meses, venda ou não venda. Conhecê-los é saber o mínimo que precisa de facturar.'],
];
it['qua02-carrossel-1'] = S('A', `<div class="big">5</div><div class="tag">Gestão que funciona</div><div class="h1">5 indicadores que todo o gestor deve <span class="grad">acompanhar.</span></div><div class="p">Simples, mensais e decisivos. Guarde para a próxima reunião.</div>`, 'Deslize →');
k.forEach(([t, d], i) => it[`qua02-carrossel-${i + 2}`] = S('A', `<div class="big">${i + 1}</div><div class="num accent">INDICADOR ${i + 1}</div><div class="h2">${t}</div><div class="p">${d}</div>`, `<span class="page">${i + 2}/7</span>`));
it['qua02-carrossel-7'] = S('A', `<div class="tag">Conclusão</div><div class="h2">O que não se mede, não se gere.</div><div class="p">Um painel simples com estes 5 números já muda a forma de decidir. A PEPEREH ajuda a montá-lo — em folha de cálculo ou num sistema de gestão.</div><div class="p" style="font-weight:700;color:#0b0b14">Guarde · Partilhe com um gestor</div>`, '<span class="page">7/7</span>');

/* Quinta 03/12 — Reel «Em 30 segundos» (A) do carrossel de quarta */
const reel = [
  `<div class="tag">Em 30 segundos</div><div class="h1" style="font-size:104px">5 números que todo o gestor deve <span class="grad">acompanhar.</span></div>`,
  `<div class="num accent">1</div><div class="h1" style="font-size:120px">Vendas</div><div class="p" style="font-size:48px">Estão a crescer ou a cair?</div>`,
  `<div class="num accent">2</div><div class="h1" style="font-size:120px">Margem</div><div class="p" style="font-size:48px">Vender mais nem sempre é ganhar mais.</div>`,
  `<div class="num accent">3</div><div class="h1" style="font-size:120px">Tesouraria</div><div class="p" style="font-size:48px">Lucro não é dinheiro em caixa.</div>`,
  `<div class="num accent">4</div><div class="h1" style="font-size:104px">Prazo de recebimento</div><div class="p" style="font-size:48px">Cada dia a mais pesa.</div>`,
  `<div class="num accent">5</div><div class="h1" style="font-size:120px">Custos fixos</div><div class="p" style="font-size:48px">O mínimo que precisa de facturar.</div>`,
  `<div class="h1" style="font-size:96px">O que não se mede, <span class="grad">não se gere.</span></div><div class="p" style="font-size:44px">think big. · pepereh.com</div>`,
];
reel.forEach((x, i) => it[`qui03-reel-cena-${i + 1}`] = V('A', x));

/* Sexta 04/12 — Think big (P5, C): os nossos negócios */
it['sex04-imagem'] = S('C', `<div class="tag">Os nossos negócios</div><div class="h1" style="font-size:84px">Ideias que se tornam realidade — brevemente.</div>
<div class="biz">
<div><img src="file://${A}/negocios/kipupu.png"><div><b>KiPUPU</b><span>A plataforma que lava o seu carro.</span></div></div>
<div><img class="dark" src="file://${A}/negocios/iqonzi.png"><div><b>IQONZI</b><span>Contabilidade e gestão, num só lugar.</span></div></div>
<div><img src="file://${A}/negocios/vaibem.png"><div><b>VaiBem</b><span>Mobilidade urbana com propósito.</span></div></div>
</div>`, 'think big.');

/* Stories (segunda a sexta) */
it['seg30-story-sondagem'] = V('B', `<div class="tag grad">Pergunta rápida</div><div class="h1">Já tratou algum processo do Estado <span class="grad">online?</span></div><div class="sticker">Espaço para o autocolante<br>«SONDAGEM»: Sim / Ainda não</div>`);
it['ter01-story-pergunta'] = V('A', `<div class="tag">Queremos saber</div><div class="h1">Que número acompanha <span class="grad">todos os meses</span> no seu negócio?</div><div class="sticker">Espaço para o autocolante<br>«PERGUNTAS»</div>`);
it['qua02-story-dica'] = V('C', `<div class="tag">Dica rápida</div><div class="h1">Lucro não é o mesmo que dinheiro em caixa.</div><div class="p" style="font-size:48px;font-weight:700">Acompanhe a tesouraria todas as semanas.</div><div class="sticker" style="border-color:rgba(255,255,255,.6);color:#fff">Partilhe aqui o carrossel de hoje</div>`);
it['qui03-story-faq'] = V('B', `<div class="tag grad">Pergunta frequente</div><div class="h1">Vendem equipamentos a <span class="grad">particulares?</span></div><div class="p" style="font-size:50px;font-weight:700;color:#fff">Sim. A particulares e a empresas.</div>`);
it['sex04-story-negocios'] = V('C', `<div class="tag">Os nossos negócios</div><div class="h1">KiPUPU · IQONZI · VaiBem</div><div class="p" style="font-size:48px;font-weight:700">Conheça-os no nosso site.</div><div class="sticker" style="border-color:rgba(255,255,255,.6);color:#fff">Espaço para o autocolante<br>«LINK» → pepereh.com/#negocios</div>`);

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
