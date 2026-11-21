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


  /* ---------- «P» que viaja pelas secções ---------- */
  (function () {
    var trav = document.getElementById("p-trav");
    var heroImg = document.querySelector(".hero .orb img");
    if (!trav || !heroImg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var path = trav.querySelector(".p-trav__p");
    var bg = trav.querySelector(".p-trav__bg");
    var anchors = [], draw = 1, idleDraw = null, idleK = 0, ticking = false, idleTimer = null;

    function box(el) { // posição real, sem transformações das animações
      var x = 0, y = 0, n = el;
      while (n) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
      return { x: x, y: y, w: el.offsetWidth, h: el.offsetHeight };
    }
    function measure() {
      var vh = window.innerHeight, small = window.innerWidth < 900;
      var size = small ? 30 : 42, lineY = Math.round(vh * (small ? 0.24 : 0.28));
      anchors = [];
      document.querySelectorAll("main section[id]").forEach(function (sec) {
        var eb = sec.querySelector(".eyebrow") || sec.querySelector("h2");
        if (!eb || !eb.offsetParent) return;
        var col = box(eb.parentElement), r = box(eb);
        anchors.push({
          scroll: Math.max(0, r.y + r.h / 2 - lineY),
          x: Math.min(col.x + col.w, window.innerWidth - 16) - size,
          y: lineY - size / 2,
          size: size
        });
      });
      anchors.sort(function (a, b) { return a.scroll - b.scroll; });
    }
    function lerp(a, b, t) { return a + (b - a) * t; }
    function ease(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
    function heroPose() {
      var r = heroImg.getBoundingClientRect();
      return { x: r.left, y: r.top, size: r.width, scroll: 0 };
    }
    function frame() {
      ticking = false;
      if (!anchors.length) return;
      var y = window.scrollY, hero = heroPose();
      var list = [{ x: hero.x, y: hero.y + y, size: hero.size, scroll: 0, hero: true }].concat(anchors);
      var i = 0;
      while (i < list.length - 1 && y >= list[i + 1].scroll) i++;
      var a = list[i], b = list[Math.min(i + 1, list.length - 1)];
      var t = b === a ? 0 : Math.min(1, Math.max(0, (y - a.scroll) / (b.scroll - a.scroll)));
      var e = ease(t);
      var ay = a.hero ? a.y - y : a.y;
      var px = lerp(a.x, b.x, e), py = lerp(ay, b.y, e), ps = lerp(a.size, b.size, e);
      // depois da última secção, acompanha o título dela
      if (i === list.length - 1 && !a.hero) { py = a.y - (y - a.scroll); }
      var mid = Math.sin(Math.PI * t) * (1 - idleK);
      var target = 1 - 0.85 * Math.sin(Math.PI * t);
      draw = idleDraw !== null ? idleDraw : target;
      trav.style.transform = "translate3d(" + px.toFixed(1) + "px," + py.toFixed(1) + "px,0) rotate(" + (-14 * mid).toFixed(2) + "deg)";
      trav.style.width = trav.style.height = ps.toFixed(1) + "px";
      bg.setAttribute("rx", (24 + 26 * mid).toFixed(1));
      path.style.strokeDashoffset = (1 - draw).toFixed(3);
      trav.classList.toggle("is-moving", mid > 0.05);
    }
    function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
    function onScroll() {
      idleDraw = null; idleK = 0;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () {
        // parou: o P completa-se
        var start = draw, t0 = performance.now();
        (function step(now) {
          var k = Math.min(1, (now - t0) / 380);
          idleDraw = start + (1 - start) * ease(k); idleK = ease(k);
          frame();
          if (k < 1) requestAnimationFrame(step);
        })(t0);
      }, 160);
      request();
    }
    function init() {
      measure();
      document.documentElement.classList.add("has-p-trav");
      request();
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () { measure(); request(); });
    window.addEventListener("load", function () { measure(); request(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); request(); });
    document.addEventListener("toggle", function () { setTimeout(function () { measure(); request(); }, 50); }, true);
    init();
    // o P do topo flutua: actualizar enquanto o topo estiver visível
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
