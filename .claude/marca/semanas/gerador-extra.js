const { chromium } = require('playwright');
const fs = require('fs');
const src = fs.readFileSync(__dirname + '/render.js', 'utf8');
const A = '/home/user/pepereh/assets';
const css = eval('`' + src.split('const css = `')[1].split('`;\nconst logo')[0] + '`');
const logo = (l) => `<img class="logo" src="file://${A}/${l ? 'logo-white-360.png' : 'logo-wordmark.svg'}">`;
const glows = `<div class="g1"></div><div class="g2"></div>`;
const sl = (style, inner, right = '') => `<div class="s ${style}" style="width:1080px;height:1350px">${style === 'B' ? glows : ''}<div class="z">${inner}</div><div class="foot">${logo(style !== 'A')}<span class="${style === 'A' ? 'accent' : ''}">${right}</span></div></div>`;
const it = {};
// Apresentação (fixar no topo)
it['apresentacao-1'] = sl('C', `<div class="tag">Prazer, somos a</div><div class="h1" style="font-size:150px">PEPEREH.</div><div class="p" style="font-size:46px">Tecnologia, consultoria, comércio e desenvolvimento de negócios — com origem em Angola.</div><div class="pill">Deslize para nos conhecer →</div>`, 'think big.');
it['apresentacao-2'] = sl('B', `<div class="tag grad">O que fazemos</div><div class="h2">Cinco áreas, uma abordagem integrada.</div><ul class="list"><li>Tecnologia e Transformação Digital</li><li>Consultoria Empresarial</li><li>Comércio e Fornecimento</li><li>Desenvolvimento de Negócios</li><li>Marketing e Comunicação</li></ul>`, '<span class="page">2/5</span>');
it['apresentacao-3'] = sl('B', `<div class="tag grad">Para quem</div><div class="h2">Soluções à medida de cada cliente.</div><ul class="list"><li>Estado e instituições públicas</li><li>Grandes empresas</li><li>Pequenas e médias empresas</li><li>Startups e empreendedores</li><li>Particulares</li></ul>`, '<span class="page">3/5</span>');
it['apresentacao-4'] = sl('B', `<div class="tag grad">Porquê a PEPEREH</div><div class="h2">Mais do que um fornecedor: um parceiro que assume a execução.</div><ul class="list"><li>Soluções personalizadas</li><li>Tecnologia, consultoria e negócio na mesma equipa</li><li>Foco na execução e nos resultados</li><li>Conhecimento do mercado angolano</li></ul>`, '<span class="page">4/5</span>');
it['apresentacao-5'] = sl('C', `<div class="tag">Vamos conversar?</div><div class="h1">Ideias que se tornam realidade.</div><div class="p" style="font-size:44px">WhatsApp +244 946 325 774<br>geral@pepereh.com</div><div class="pill">Pedir proposta · pepereh.com</div>`, '<span class="page">5/5</span>');
// Reserva 1 — cibersegurança (A)
const hab = [
  ['Palavras-passe fortes e diferentes', 'Uma palavra-passe por serviço. Um gestor de palavras-passe ajuda a não as esquecer.'],
  ['Verificação em dois passos', 'Active-a no email, nas redes sociais e no banco. Mesmo que roubem a palavra-passe, a conta fica protegida.'],
  ['Desconfiar de links e anexos inesperados', 'Na dúvida, confirme com o remetente por outro meio antes de abrir.'],
  ['Actualizar sistemas e aplicações', 'As actualizações corrigem falhas de segurança. Não as adie.'],
  ['Fazer cópias de segurança', 'Guarde cópias dos dados importantes num local separado — e teste se as consegue recuperar.'],
];
it['reserva1-1'] = sl('A', `<div class="big">5</div><div class="tag">Tecnologia certa para a empresa</div><div class="h1">Cibersegurança: 5 hábitos para <span class="grad">a sua equipa.</span></div><div class="p">Simples, gratuitos e eficazes. Guarde e partilhe com a equipa.</div>`, 'Deslize →');
hab.forEach(([t, d], i) => it[`reserva1-${i + 2}`] = sl('A', `<div class="big">${i + 1}</div><div class="num accent">HÁBITO ${i + 1}</div><div class="h2">${t}</div><div class="p">${d}</div>`, `<span class="page">${i + 2}/7</span>`));
it['reserva1-7'] = sl('A', `<div class="tag">Conclusão</div><div class="h2">A segurança começa nas pessoas.</div><div class="p">Precisa de ajuda com redes, equipamentos ou cópias de segurança na sua empresa? A PEPEREH pode ajudar.</div><div class="p" style="font-weight:700;color:#0b0b14">Guarde · Partilhe com a equipa</div>`, '<span class="page">7/7</span>');
// Reserva 2 — valor (C, imagem única)
it['reserva2'] = sl('C', `<div class="tag">Os nossos valores · 1/7</div><div class="h1" style="font-size:118px">Inovação com propósito.</div><div class="p" style="font-size:50px">Criamos soluções úteis para necessidades reais.</div>`, 'think big.');
(async () => {
  const b = await chromium.launch();
  for (const [n, html] of Object.entries(it)) {
    const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
    const f = `${__dirname}/tmp-${n}.html`;
    fs.writeFileSync(f, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html}</body></html>`);
    await p.goto('file://' + f); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(250);
    await p.screenshot({ path: `${__dirname}/extra/${n}.png` }); fs.unlinkSync(f); await p.close();
  }
  await b.close();
})();
