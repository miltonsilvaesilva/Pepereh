/* PEPEREH — site script */
(function () {
  "use strict";

  var me = document.currentScript || document.querySelector("script[data-form]");
  var CFG = (me && me.dataset) || {};
  var EMAIL = CFG.email || "geral@pepereh.com";

  /* ---------- Traduções (EN). O português está no próprio HTML. ---------- */
  var EN = {
    "skip": "Skip to content",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.ventures": "Our Ventures",
    "nav.news": "News",
    "nav.contact": "Request a proposal",
    "hero.eyebrow": "Technology · Consulting · Trade · Ventures",
    "hero.title": "Ideas that become <span class=\"grad\">reality.</span>",
    "hero.lead": "We are an Angolan company combining technology, consulting and business development to create practical, results-driven solutions.",
    "hero.cta1": "Request a proposal",
    "hero.cta2": "Explore our services",
    "about.eyebrow": "Our story",
    "about.title": "Born in Luanda to turn ideas into concrete solutions.",
    "about.p1": "PEPEREH – Comércio e Serviços, Lda. was founded in 2025 in Luanda, Angola. Its partners bring more than five years of experience in technology, management and business development.",
    "about.p2": "From the outset, the company was structured to operate across several sectors, with a focus on technology, consulting, trade and services. With a vision driven by innovation and entrepreneurship, we build solutions that respond to the needs of the Angolan market.",
    "about.p3": "Our ambition is to build an organisation recognised for trust, innovation and the ability to turn ideas into concrete solutions.",
    "stats.1": "Founded in Luanda",
    "stats.2": "Years of partner experience",
    "stats.3": "Integrated business areas",
    "stats.4": "Nationwide in Angola, with an international outlook",
    "services.eyebrow": "What we do",
    "services.title": "Five areas, one integrated approach.",
    "services.lead": "We combine skills to solve challenges end to end — from strategy to execution.",
    "s1.t": "Technology & Digital Transformation",
    "s1.1": "Software and enterprise platform development",
    "s1.2": "Mobile apps and websites",
    "s1.3": "Management systems (ERP)",
    "s1.4": "Process automation",
    "s1.5": "Systems integration and interoperability",
    "s2.t": "Business Consulting",
    "s2.1": "Strategic planning",
    "s2.2": "Business structuring",
    "s2.3": "Feasibility studies",
    "s2.4": "Project management",
    "s2.5": "Organisational process improvement",
    "s3.t": "Trade & Supply",
    "s3.1": "IT equipment and computers",
    "s3.2": "Tech accessories",
    "s3.3": "Networking equipment",
    "s3.4": "Office supplies",
    "s3.5": "Business support solutions",
    "s4.t": "Business Development",
    "s4.1": "Startup creation and growth",
    "s4.2": "Digital products",
    "s4.3": "Strategic partnerships",
    "s4.4": "Investment in new ventures",
    "s5.t": "Marketing & Communication",
    "s5.1": "Branding and corporate identity",
    "s5.2": "Digital marketing",
    "s5.3": "Corporate communication",
    "s5.4": "Building your online presence",
    "sc.t": "Facing a different challenge?",
    "sc.p": "Tell us about your problem. We help you find the right solution — and take responsibility for delivering it.",
    "sc.b": "Request a proposal",
    "cat.eyebrow": "Technology solutions",
    "cat.title": "In detail: what we deliver.",
    "cat.hint": "Tap a module to see all solutions.",
    "nav.areas": "Our 5 areas",
    "cat.cta": "Can't find what you're looking for? Tell us about your challenge.",
    "who.eyebrow": "Who we work with",
    "who.title": "Solutions tailored to every client.",
    "w1.t": "Government & Public Institutions",
    "w1.p": "Connected systems, paperless processes and services that are easier for citizens to access.",
    "w2.t": "Large Companies",
    "w2.p": "Systems integration, more efficient management and reliable data to support decisions.",
    "w3.t": "Small & Medium Businesses",
    "w3.p": "Digital tools, online presence, equipment and strategic support to grow.",
    "w4.t": "Startups & Entrepreneurs",
    "w4.p": "Structure, product and a plan to take your idea to market.",
    "w5.t": "Individuals",
    "w5.p": "Simple access to trusted services and technology equipment.",
    "why.eyebrow": "Why PEPEREH",
    "why.title": "More than a supplier — a partner that owns the delivery.",
    "why.lead": "Clients are not just looking for a supplier. They want someone who understands their problem, proposes the right solution and takes responsibility for the work.",
    "p1.t": "Tailored solutions",
    "p1.p": "We start from your problem, not from an off-the-shelf product.",
    "p2.t": "Integrated expertise",
    "p2.p": "Technology, consulting and business in one team.",
    "p3.t": "Focus on execution",
    "p3.p": "Plans that turn into concrete results.",
    "p4.t": "Knowledge of the Angolan market",
    "p4.p": "Solutions designed for the local reality.",
    "p5.t": "Relationships built on trust",
    "p5.p": "Long-term partnerships, with transparency and commitment.",
    "exp.eyebrow": "Experience",
    "exp.title": "Proven capability in demanding projects.",
    "exp.lead": "Areas in which our team has already built and delivered solutions.",
    "e1": "Systems interoperability",
    "e2": "Single Windows",
    "e3": "ERP systems",
    "e4": "Online service portals and platforms",
    "e5": "Document management and digitisation",
    "e6": "Mobile apps (Android and iOS)",
    "e7": "Payment integration (Multicaixa Express)",
    "e8": "Dashboards and Business Intelligence",
    "e9": "Process and approval workflow automation",
    "e10": "Networks and IT equipment",
    "e11": "Corporate websites",
    "mission.eyebrow": "Our mission",
    "mission.text": "To develop innovative technology and business solutions that simplify processes, solve real problems and create sustainable value for people, companies and communities.",
    "vision.eyebrow": "Our vision",
    "vision.text": "To be an African benchmark in creating and growing innovative businesses, recognised for turning opportunities into high-impact solutions — rooted in Angola, with international reach.",
    "values.eyebrow": "Our values",
    "v1.t": "Innovation with purpose",
    "v1.p": "We create useful solutions for real needs.",
    "v2.t": "Excellence in execution",
    "v2.p": "We work with quality, discipline and a focus on results.",
    "v3.t": "Integrity and trust",
    "v3.p": "We act with transparency, responsibility and respect for our commitments.",
    "v4.t": "Entrepreneurial mindset",
    "v4.p": "We turn opportunities into concrete initiatives.",
    "v5.t": "People first",
    "v5.p": "We build products, services and relationships centred on people's needs.",
    "v6.t": "Collaboration and growth",
    "v6.p": "We foster partnerships, learning and continuous improvement.",
    "v7.t": "Commitment to Angola",
    "v7.p": "We contribute to the country's economic and technological development.",
    "ventures.eyebrow": "Our Ventures",
    "ventures.title": "Brands and platforms created by PEPEREH.",
    "ventures.lead": "Beyond serving clients, we build our own businesses — new models designed for the Angolan market.",
    "ventures.soon": "Coming soon",
    "ventures.kipupu": "A digital platform for automotive services — our bet on creating new business models.",
    "ventures.next.t": "Upcoming projects",
    "ventures.next.p": "New brands and platforms in development.",
    "news.eyebrow": "News",
    "news.title": "What we're following.",
    "news.lead": "Technology, business and innovation in Angola and worldwide — and what they mean for companies and institutions.",
    "news.all": "See all",
    "news.back": "← All news",
    "news.source": "Source",
    "news.cta": "Want to know how this topic could affect your business?",
    "faq.eyebrow": "Frequently asked questions",
    "faq.title": "Questions? We have answers.",
    "q1": "Do you work outside Luanda?",
    "a1": "Yes. We operate throughout Angola and are open to international projects and partnerships.",
    "q2": "How much does a website, app or system cost?",
    "a2": "Every project is different. Fill in the proposal request form and our team will send you a tailored proposal with pricing.",
    "q3": "How long does a project take?",
    "a3": "It depends on each client's needs. The timeline is agreed together and set out in the proposal.",
    "q4": "Do you provide maintenance after delivery?",
    "a4": "Yes. We provide support and maintenance after delivery, so your solution keeps working and evolving.",
    "q5": "Do you sell equipment to individuals?",
    "a5": "Yes. We supply IT and technology equipment to both individuals and businesses.",
    "contact.eyebrow": "Request a proposal",
    "contact.title": "Let's turn your idea into reality.",
    "contact.lead": "Tell us what you need. Our team will reply with a tailored proposal.",
    "contact.email": "Email",
    "contact.hours": "Hours",
    "contact.hq": "Head office",
    "contact.book": "Book a meeting",
    "form.name": "Name",
    "form.org": "Company / Institution (optional)",
    "form.email": "Email",
    "form.phone": "Phone / WhatsApp (optional)",
    "form.area": "Area of interest",
    "form.type": "Client type",
    "form.other": "Other",
    "form.msg": "Describe your project or need",
    "form.consent": "I have read and accept the <a href=\"" + (CFG.privacy || "/privacidade/") + "\">Privacy Policy</a>.",
    "form.send": "Send request",
    "nl.title": "Get our news",
    "nl.text": "A monthly summary, no spam.",
    "nl.ph": "Your email",
    "nl.btn": "Subscribe",
    "footer.tag": "Ideas that become reality.",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "nf.title": "This page doesn't exist.",
    "nf.lead": "The address may be wrong or the page may have moved. But your idea is still welcome.",
    "nf.home": "Back to home"
  };

  var MSG = {
    pt: {
      invalid: "Preencha os campos obrigatórios, um email válido e aceite a Política de Privacidade.",
      invalidNl: "Indique um email válido.",
      sending: "A enviar…",
      ok: "Obrigado! Recebemos o seu pedido e responderemos com brevidade.",
      okNl: "Obrigado! A sua subscrição foi registada.",
      fail: "Não foi possível enviar automaticamente. Vamos abrir o seu email com a mensagem pronta.",
      failNl: "Não foi possível registar agora. Tente de novo ou escreva para " + EMAIL + ".",
      subject: "Pedido de proposta",
      subjectNl: "Nova subscrição da newsletter"
    },
    en: {
      invalid: "Please fill in the required fields, a valid email and accept the Privacy Policy.",
      invalidNl: "Please enter a valid email.",
      sending: "Sending…",
      ok: "Thank you! We've received your request and will reply shortly.",
      okNl: "Thank you! You're subscribed.",
      fail: "We couldn't send it automatically. We'll open your email app with the message ready.",
      failNl: "We couldn't subscribe you right now. Please try again or write to " + EMAIL + ".",
      subject: "Proposal request",
      subjectNl: "New newsletter subscription"
    }
  };

  /* ---------- Idioma ---------- */
  var textEls = document.querySelectorAll("[data-i18n]");
  var htmlEls = document.querySelectorAll("[data-i18n-html]");
  var phEls = document.querySelectorAll("[data-i18n-ph]");
  var PT = {};
  textEls.forEach(function (el) { PT[el.getAttribute("data-i18n")] = el.textContent; });
  htmlEls.forEach(function (el) { PT[el.getAttribute("data-i18n-html")] = el.innerHTML; });
  phEls.forEach(function (el) { PT[el.getAttribute("data-i18n-ph")] = el.getAttribute("placeholder"); });

  var current = "pt";

  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  function setLang(lang, persist) {
    current = lang === "en" ? "en" : "pt";
    var dict = current === "en" ? EN : PT;
    textEls.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    htmlEls.forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    phEls.forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
    });
    document.documentElement.lang = current;
    document.querySelectorAll(".lang [data-lang]").forEach(function (s) {
      s.classList.toggle("is-active", s.getAttribute("data-lang") === current);
    });
    if (persist !== false) store("pepereh-lang", current);
  }

  var pageLang = CFG.pageLang || ""; // definido nas páginas de notícia
  var saved = store("pepereh-lang");
  var initial = pageLang || saved || "pt"; // português por omissão
  var q = /[?&]lang=(pt|en)/.exec(location.search);
  if (q && !pageLang) initial = q[1];
  setLang(initial, !pageLang);

  document.getElementById("lang").addEventListener("click", function () {
    var next = current === "pt" ? "en" : "pt";
    store("pepereh-lang", next);
    // Numa notícia, ir para a versão no outro idioma, se existir
    var alt = document.querySelector("[data-lang-switch=\"" + next + "\"]");
    if (pageLang && alt) { location.href = alt.href; return; }
    setLang(next);
  });

  /* ---------- Menu móvel ---------- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  function closeMenu() { menu.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---------- Navegação com linha ao rolar ---------- */
  var nav = document.querySelector(".nav");
  function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Estatísticas de cliques (GoatCounter) ---------- */
  function track(name) {
    try {
      if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: "clique-" + name, title: name, event: true });
      }
    } catch (e) { /* sem estatísticas */ }
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-track]");
    if (a) track(a.getAttribute("data-track"));
  });

  /* ---------- Formulários ---------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function status(form, text, kind) {
    var el = form.querySelector(".form__status");
    if (!el) return;
    el.hidden = !text;
    el.textContent = text || "";
    el.className = "form__status" + (kind ? " is-" + kind : "");
  }

  function send(data) {
    if (!CFG.form) return Promise.reject(new Error("no endpoint"));
    return fetch(CFG.form, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (String(j.success) !== "true") throw new Error(j.message || "failed");
      return j;
    });
  }

  document.querySelectorAll(".js-form").forEach(function (form) {
    var kind = form.getAttribute("data-kind");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var m = MSG[current];
      var f = form.elements;
      if (f._honey && f._honey.value) return; // spam

      if (kind === "newsletter") {
        var nlEmail = f.email.value.trim();
        if (!EMAIL_RE.test(nlEmail)) { status(form, m.invalidNl, "error"); return; }
        status(form, m.sending);
        send({ email: nlEmail, idioma: current, _subject: m.subjectNl, _template: "table", _captcha: "false" })
          .then(function () { status(form, m.okNl, "ok"); form.reset(); track("newsletter"); })
          .catch(function () { status(form, m.failNl, "error"); });
        return;
      }

      var data = {
        nome: f.nome.value.trim(),
        empresa: f.empresa.value.trim(),
        email: f.email.value.trim(),
        telefone: f.telefone.value.trim(),
        area: f.area.value,
        tipo: f.tipo.value,
        mensagem: f.mensagem.value.trim()
      };
      if (!data.nome || !data.mensagem || !EMAIL_RE.test(data.email) || !f.consentimento.checked) {
        status(form, m.invalid, "error");
        return;
      }
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      status(form, m.sending);
      var payload = Object.assign({}, data, {
        idioma: current,
        _subject: m.subject + " — " + data.nome,
        _replyto: data.email,
        _template: "table",
        _captcha: "false"
      });
      send(payload)
        .then(function () { status(form, m.ok, "ok"); form.reset(); track("proposta"); })
        .catch(function () {
          status(form, m.fail, "error");
          var body = data.mensagem + "\n\n— \nNome: " + data.nome +
            (data.empresa ? "\nEmpresa: " + data.empresa : "") +
            "\nEmail: " + data.email +
            (data.telefone ? "\nTelefone: " + data.telefone : "") +
            "\nÁrea: " + data.area + "\nTipo de cliente: " + data.tipo;
          setTimeout(function () {
            location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(payload._subject) + "&body=" + encodeURIComponent(body);
          }, 1200);
        })
        .then(function () { btn.disabled = false; });
    });
  });


  /* ---------- Abrir/fechar, submenu, topo e secção activa ---------- */
  var desk = window.matchMedia("(min-width: 901px)");
  var deskOpen = document.querySelectorAll("details[data-open-desktop]");
  function syncCards() { deskOpen.forEach(function (d) { if (desk.matches) d.open = true; else d.open = false; }); }
  syncCards();
  if (desk.addEventListener) desk.addEventListener("change", syncCards);
  deskOpen.forEach(function (d) {
    d.querySelector("summary").addEventListener("click", function (e) { if (desk.matches) e.preventDefault(); });
  });

  function openTarget(hash) {
    if (!hash || hash.length < 2) return;
    var el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (el && el.tagName === "DETAILS") {
      el.open = true;
      setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 30);
    }
  }
  openTarget(location.hash);
  window.addEventListener("hashchange", function () { openTarget(location.hash); });
  document.querySelectorAll('.nav__sub a').forEach(function (a) {
    a.addEventListener("click", function () {
      var h = a.getAttribute("href"); var i = h.indexOf("#");
      if (i > -1 && (location.pathname === "/" || location.pathname.slice(-1) === "/")) openTarget(h.slice(i));
    });
  });

  var toTop = document.getElementById("to-top");
  if (toTop) {
    window.addEventListener("scroll", function () { toTop.classList.toggle("is-visible", window.scrollY > 900); }, { passive: true });
    toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  if ("IntersectionObserver" in window) {
    var map = {};
    document.querySelectorAll('.nav__links a[href*="#"]').forEach(function (a) {
      var id = a.getAttribute("href").split("#")[1];
      if (id && !/^sol-/.test(id)) (map[id] = map[id] || []).push(a.classList.contains("nav__dd-top") ? a : a);
    });
    var secs = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        document.querySelectorAll(".nav__links .is-current").forEach(function (x) { x.classList.remove("is-current"); });
        (map[en.target.id] || []).forEach(function (a) { if (!a.closest(".nav__sub")) a.classList.add("is-current"); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach(function (sec) { spy.observe(sec); });
  }


  /* ---------- «P» que viaja pelas secções (partículas + mira) ---------- */
  (function () {
    var trav = document.getElementById("p-trav");
    var heroImg = document.querySelector(".hero .orb img");
    if (!trav || !heroImg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var path = trav.querySelector(".p-trav__p");
    var bg = trav.querySelector(".p-trav__bg");
    var lock = document.getElementById("p-lock");
    var cv = document.getElementById("p-fx");
    var ctx = cv && cv.getContext ? cv.getContext("2d") : null;
    var anchors = [], draw = 1, idleDraw = null, idleK = 0, ticking = false, idleTimer = null;
    var pose = { x: 0, y: 0, s: 42, mid: 0 }, energy = 0, lastY = window.scrollY, speed = 0, dpr = 1, running = false;
    var traces = [], lastTrace = 0;
    var drag = { on: false, x: 0, y: 0, ox: 0, oy: 0, k: 0, lx: 0, ly: 0 };

    /* pistas de circuito: segmentos em ângulo recto a partir do «P» */
    function spawnTrace(cx, cy, len, life) {
      var dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]], d = dirs[(Math.random() * 4) | 0], x = cx, y = cy, pts = [[x, y]];
      var segs = 2 + ((Math.random() * 3) | 0);
      for (var g = 0; g < segs; g++) {
        var L = len * (0.5 + Math.random());
        x += d[0] * L; y += d[1] * L; pts.push([x, y]);
        d = d[0] !== 0 ? [0, Math.random() < .5 ? 1 : -1] : [Math.random() < .5 ? 1 : -1, 0];
      }
      var cols = ["#2ed3f5", "#5aa8ff", "#9b6bff", "#d63cff"];
      traces.push({ pts: pts, born: performance.now(), life: life || 1100, col: cols[(Math.random() * 4) | 0] });
      kick();
    }
    function spawnBurst(n, len) {
      var cx = pose.x + pose.s / 2, cy = pose.y + pose.s / 2;
      for (var q = 0; q < n; q++) spawnTrace(cx, cy, len, 1300);
    }

    /* pontos do «P» (caixa 0–100) */
    var N = window.innerWidth < 900 ? 140 : 220, parts = [];
    function pPoint(u) {
      // 0–0.3: haste; 0.3–1: arco
      if (u < 0.3) return [32, 76 - (u / 0.3) * 34, 1, 0];
      var a = (180 + (u - 0.3) / 0.7 * 275.7) * Math.PI / 180;
      return [52 + 20 * Math.cos(a), 42 + 20 * Math.sin(a), Math.cos(a), Math.sin(a)];
    }
    for (var k = 0; k < N; k++) {
      var u = Math.random(), q = pPoint(u), w = (Math.random() - 0.5) * 13, halo = Math.random() < 0.18;
      var lx = halo ? Math.random() * 100 : q[0] + q[2] * w, ly = halo ? Math.random() * 100 : q[1] + q[3] * w;
      var t = lx / 100, col = t < 0.5 ? [46 + (155 - 46) * t * 2, 211 + (107 - 211) * t * 2, 245 + 10 * t * 2] : [155 + (214 - 155) * (t - .5) * 2, 107 + (60 - 107) * (t - .5) * 2, 255];
      parts.push({ lx: lx, ly: ly, x: 0, y: 0, px: 0, py: 0, k: 0.07 + Math.random() * 0.2, ph: Math.random() * 6.28, sz: halo ? 0.6 : 1, col: "rgb(" + (col[0] | 0) + "," + (col[1] | 0) + "," + (col[2] | 0) + ")", halo: halo });
    }

    function box(el) { var x = 0, y = 0, n = el; while (n) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; } return { x: x, y: y, w: el.offsetWidth, h: el.offsetHeight }; }
    function measure() {
      var vh = window.innerHeight, small = window.innerWidth < 900;
      var size = small ? 30 : 42, lineY = Math.round(vh * (small ? 0.24 : 0.28));
      anchors = [];
      document.querySelectorAll("main section[id]").forEach(function (sec) {
        var eb = sec.querySelector(".eyebrow") || sec.querySelector("h2");
        if (!eb || !eb.offsetParent) return;
        var col = box(eb.parentElement), r = box(eb);
        anchors.push({ scroll: Math.max(0, r.y + r.h / 2 - lineY), x: Math.min(col.x + col.w, window.innerWidth - 16) - size, y: lineY - size / 2, size: size });
      });
      anchors.sort(function (a, b) { return a.scroll - b.scroll; });
      if (cv) { dpr = Math.min(2, window.devicePixelRatio || 1); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; }
    }
    function lerp(a, b, t) { return a + (b - a) * t; }
    function ease(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
    function frame() {
      ticking = false;
      if (!anchors.length) return;
      var y = window.scrollY, r = heroImg.getBoundingClientRect();
      var list = [{ x: r.left, y: r.top + y, size: r.width, scroll: 0, hero: true }].concat(anchors);
      var i = 0;
      while (i < list.length - 1 && y >= list[i + 1].scroll) i++;
      var a = list[i], b = list[Math.min(i + 1, list.length - 1)];
      var t = b === a ? 0 : Math.min(1, Math.max(0, (y - a.scroll) / (b.scroll - a.scroll)));
      var e = ease(t), ay = a.hero ? a.y - y : a.y;
      var px = lerp(a.x, b.x, e), py = lerp(ay, b.y, e), ps = lerp(a.size, b.size, e);
      if (i === list.length - 1 && !a.hero) py = a.y - (y - a.scroll);
      // parado entre secções: encosta-se à margem direita para não tapar texto
      if (idleK > 0 && t > 0.12 && t < 0.88 && !(i === list.length - 1)) {
        var small = window.innerWidth < 900, ds = small ? 22 : 36, dx = window.innerWidth - ds - (small ? 4 : 24);
        var dk = ease(idleK);
        px = lerp(px, dx, dk); ps = lerp(ps, ds, dk);
      }
      if (drag.k > 0) { var dk2 = drag.k; px = lerp(px, drag.x, dk2); py = lerp(py, drag.y, dk2); ps = lerp(ps, Math.max(ps, window.innerWidth < 900 ? 40 : 52), dk2); }
      var raw = Math.sin(Math.PI * t), mid = raw * (1 - idleK) * (1 - drag.k);
      draw = idleDraw !== null ? idleDraw : 1 - 0.9 * raw;
      pose.x = px; pose.y = py; pose.s = ps; pose.mid = mid;
      // o emblema desvanece enquanto viaja em partículas
      var vis = Math.max(0, 1 - mid * 1.6);
      trav.style.opacity = vis.toFixed(3);
      trav.style.transform = "translate3d(" + px.toFixed(1) + "px," + py.toFixed(1) + "px,0) rotate(" + (-14 * mid).toFixed(2) + "deg) scale(" + (1 + 0.15 * mid).toFixed(3) + ")";
      trav.style.width = trav.style.height = ps.toFixed(1) + "px";
      bg.setAttribute("rx", (24 + 26 * mid).toFixed(1));
      path.style.strokeDashoffset = (1 - draw).toFixed(3);
      if (lock) { var m = ps * 0.35; lock.style.transform = "translate3d(" + (px - m).toFixed(1) + "px," + (py - m).toFixed(1) + "px,0)"; lock.style.width = lock.style.height = (ps + 2 * m).toFixed(1) + "px"; }
      kick();
    }
    function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }

    /* desenho das partículas */
    function kick() { if (!running && ctx) { running = true; requestAnimationFrame(render); } }
    function render(now) {
      var target = Math.max(pose.mid, Math.min(1, speed / 40));
      energy += (target - energy) * 0.12;
      speed *= 0.9;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      var sc = pose.s / 100, settled = true, tt = now / 1000;
      for (var n = 0; n < parts.length; n++) {
        var p = parts[n];
        var turb = energy * pose.s * (p.halo ? 1.6 : 0.9);
        var tx = pose.x + p.lx * sc + Math.sin(tt * 3 + p.ph) * turb + Math.cos(tt * 1.7 + p.ph * 2) * turb * 0.6;
        var ty = pose.y + p.ly * sc + Math.cos(tt * 2.3 + p.ph) * turb;
        if (!p.x && !p.y) { p.x = tx; p.y = ty; }
        p.px = p.x; p.py = p.y;
        p.x += (tx - p.x) * p.k; p.y += (ty - p.y) * p.k;
        var dx = p.x - p.px, dy = p.y - p.py, v = Math.abs(dx) + Math.abs(dy);
        if (v > 0.15 || Math.abs(tx - p.x) > 0.5) settled = false;
        var alpha = Math.min(1, energy * 1.4 + Math.min(1, v / 6)) * (p.halo ? 0.55 : 0.95);
        if (alpha < 0.02) continue;
        ctx.globalAlpha = alpha;
        if (v > 2.5) { // rasto de dados
          ctx.strokeStyle = p.col; ctx.lineWidth = Math.max(1, sc * 3 * p.sz);
          ctx.beginPath(); ctx.moveTo(p.px - dx * 2.5, p.py - dy * 2.5); ctx.lineTo(p.x, p.y); ctx.stroke();
        }
        var z = Math.max(1.4, sc * 6 * p.sz);
        ctx.fillStyle = p.col; ctx.fillRect(p.x - z / 2, p.y - z / 2, z, z);
      }
      // ligações de circuito entre partículas (em ângulo recto)
      if (energy > 0.2) {
        ctx.lineWidth = 1; ctx.globalAlpha = Math.min(0.5, energy * 0.45);
        for (var c = 0; c < parts.length; c += 7) {
          var A = parts[c], B = parts[(c + 5) % parts.length];
          if (Math.abs(A.x - B.x) + Math.abs(A.y - B.y) > pose.s * 1.6) continue;
          ctx.strokeStyle = A.col; ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
          ctx.fillStyle = A.col; ctx.fillRect(B.x - 1.5, A.y - 1.5, 3, 3);
        }
      }
      // pistas que crescem e se apagam
      if (energy > 0.3 && now - lastTrace > 140) { lastTrace = now; spawnTrace(pose.x + pose.s / 2, pose.y + pose.s / 2, pose.s * 0.5, 800); }
      for (var m = traces.length - 1; m >= 0; m--) {
        var tr = traces[m], age = now - tr.born;
        if (age > tr.life) { traces.splice(m, 1); continue; }
        var grow = Math.min(1, age / (tr.life * 0.45)), fade = 1 - Math.max(0, (age - tr.life * 0.55) / (tr.life * 0.45));
        var total = 0, segL = [];
        for (var g2 = 1; g2 < tr.pts.length; g2++) { var l = Math.abs(tr.pts[g2][0] - tr.pts[g2 - 1][0]) + Math.abs(tr.pts[g2][1] - tr.pts[g2 - 1][1]); segL.push(l); total += l; }
        var left = total * grow;
        ctx.globalAlpha = fade * 0.9; ctx.strokeStyle = tr.col; ctx.fillStyle = tr.col; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(tr.pts[0][0], tr.pts[0][1]);
        var ex = tr.pts[0][0], ey = tr.pts[0][1];
        for (var g3 = 1; g3 < tr.pts.length && left > 0; g3++) {
          var f = Math.min(1, left / segL[g3 - 1]);
          ex = tr.pts[g3 - 1][0] + (tr.pts[g3][0] - tr.pts[g3 - 1][0]) * f;
          ey = tr.pts[g3 - 1][1] + (tr.pts[g3][1] - tr.pts[g3 - 1][1]) * f;
          ctx.lineTo(ex, ey); left -= segL[g3 - 1];
          if (f === 1) { ctx.fillRect(tr.pts[g3][0] - 2, tr.pts[g3][1] - 2, 4, 4); }
        }
        ctx.stroke();
        if (grow === 1) { ctx.beginPath(); ctx.arc(ex, ey, 3.2, 0, 6.283); ctx.stroke(); ctx.beginPath(); ctx.arc(ex, ey, 1.2, 0, 6.283); ctx.fill(); }
      }
      ctx.globalAlpha = 1;
      if (settled && energy < 0.01 && !traces.length && !drag.on) { running = false; ctx.clearRect(0, 0, innerWidth, innerHeight); return; }
      requestAnimationFrame(render);
    }

    function lockOn() {
      if (!lock) return;
      lock.classList.remove("is-on"); void lock.offsetWidth; lock.classList.add("is-on");
      spawnBurst(5, pose.s * 0.55);
    }
    function onScroll() {
      var y = window.scrollY; speed += Math.abs(y - lastY); lastY = y;
      var wasMoving = pose.mid > 0.2 || speed > 30;
      idleDraw = null; idleK = 0;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () {
        var start = draw, t0 = performance.now(), fired = false;
        (function step(now) {
          var k = Math.min(1, (now - t0) / 520);
          idleDraw = start + (1 - start) * ease(k); idleK = ease(k);
          frame();
          if (!fired && k > 0.55) { fired = true; if (wasMoving || start < 0.95) lockOn(); }
          if (k < 1) requestAnimationFrame(step);
        })(t0);
      }, 140);
      request();
    }
    /* arrastar o «P» com o rato ou o dedo */
    function pt(e) { var q = e.touches ? e.touches[0] : e; return { x: q.clientX, y: q.clientY }; }
    function dragStart(e) {
      var q = pt(e);
      drag.on = true; drag.k = 1; drag.ox = q.x - pose.x; drag.oy = q.y - pose.y;
      drag.x = pose.x; drag.y = pose.y; drag.lx = q.x; drag.ly = q.y;
      trav.classList.add("is-drag"); e.preventDefault(); kick(); request();
    }
    function dragMove(e) {
      if (!drag.on) return;
      var q = pt(e);
      speed += Math.abs(q.x - drag.lx) + Math.abs(q.y - drag.ly); drag.lx = q.x; drag.ly = q.y;
      drag.x = q.x - drag.ox; drag.y = q.y - drag.oy;
      e.preventDefault(); kick(); request();
    }
    function dragEnd() {
      if (!drag.on) return;
      drag.on = false; trav.classList.remove("is-drag");
      var t0 = performance.now();
      (function back(now) { // volta ao seu lugar
        var k = Math.min(1, (now - t0) / 700);
        drag.k = 1 - ease(k); speed += 6; frame();
        if (k < 1) requestAnimationFrame(back); else lockOn();
      })(t0);
    }
    trav.addEventListener("mousedown", dragStart);
    trav.addEventListener("touchstart", dragStart, { passive: false });
    window.addEventListener("mousemove", dragMove);
    window.addEventListener("touchmove", dragMove, { passive: false });
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);
    window.addEventListener("touchcancel", dragEnd);

    function init() { measure(); document.documentElement.classList.add("has-p-trav"); request(); }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () { measure(); request(); });
    window.addEventListener("load", function () { measure(); request(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); request(); });
    document.addEventListener("toggle", function () { setTimeout(function () { measure(); request(); }, 50); }, true);
    init();
    (function float() { if (window.scrollY < window.innerHeight) request(); requestAnimationFrame(float); })();
  })();

  /* ---------- Animação ao aparecer ---------- */
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var targets = document.querySelectorAll(".head, .card, .who__item, .pillars li, .chips, .mv__box, .values > div, .venture, .stat, .split > *, .contact > *, .post-card");
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }
})();
