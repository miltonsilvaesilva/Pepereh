/* PEPEREH — site script */
(function () {
  "use strict";

  /* ---------- Configuração ---------- */
  // Quando tiver o número de WhatsApp, escreva-o aqui só com dígitos, ex.: "244923000000"
  var WHATSAPP = "";
  var EMAIL = "geral@pepereh.com";

  /* ---------- Traduções (EN). O português está no próprio HTML. ---------- */
  var EN = {
    "skip": "Skip to content",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.ventures": "Our Ventures",
    "nav.contact": "Contact",
    "hero.eyebrow": "Technology · Consulting · Trade · Ventures",
    "hero.title": "Ideas that become <span class=\"grad\">reality.</span>",
    "hero.lead": "We are an Angolan company combining technology, consulting and business development to create practical, results-driven solutions.",
    "hero.cta1": "Get in touch",
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
    "sc.b": "Talk to our team",
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
    "contact.eyebrow": "Contact",
    "contact.title": "Let's turn your idea into reality.",
    "contact.lead": "Get in touch. We reply promptly.",
    "contact.email": "Email",
    "contact.hq": "Head office",
    "form.name": "Name",
    "form.org": "Company / Institution (optional)",
    "form.email": "Email",
    "form.msg": "Message",
    "form.send": "Send message",
    "form.note": "When you send, your email app opens with the message ready for geral@pepereh.com.",
    "form.error": "Please fill in your name, a valid email and your message.",
    "footer.tag": "Ideas that become reality.",
    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top ↑"
  };

  var META = {
    pt: {
      title: document.title,
      desc: document.querySelector('meta[name="description"]').getAttribute("content"),
      subject: "Contacto pelo site",
      lines: ["Nome", "Empresa", "Email"]
    },
    en: {
      title: "PEPEREH — Think Big | Technology, Consulting and Ventures in Angola",
      desc: "PEPEREH is an Angolan company based in Luanda, combining technology, consulting, trade and business development to create practical, results-driven solutions.",
      subject: "Website enquiry",
      lines: ["Name", "Company", "Email"]
    }
  };

  /* ---------- Idioma ---------- */
  var textEls = document.querySelectorAll("[data-i18n]");
  var htmlEls = document.querySelectorAll("[data-i18n-html]");
  var PT = {};
  textEls.forEach(function (el) { PT[el.getAttribute("data-i18n")] = el.textContent; });
  htmlEls.forEach(function (el) { PT[el.getAttribute("data-i18n-html")] = el.innerHTML; });

  var current = "pt";

  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }

  function setLang(lang) {
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
    document.documentElement.lang = current;
    document.title = META[current].title;
    document.querySelector('meta[name="description"]').setAttribute("content", META[current].desc);
    document.querySelectorAll(".lang [data-lang]").forEach(function (s) {
      s.classList.toggle("is-active", s.getAttribute("data-lang") === current);
    });
    store("pepereh-lang", current);
  }

  var saved = store("pepereh-lang");
  var initial = saved || ((navigator.language || "pt").toLowerCase().indexOf("pt") === 0 ? "pt" : "en");
  if (/[?&]lang=en/.test(location.search)) initial = "en";
  if (/[?&]lang=pt/.test(location.search)) initial = "pt";
  setLang(initial);

  document.getElementById("lang").addEventListener("click", function () {
    setLang(current === "pt" ? "en" : "pt");
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

  /* ---------- Navegação com sombra ao rolar ---------- */
  var nav = document.querySelector(".nav");
  function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- WhatsApp ---------- */
  if (WHATSAPP) {
    var waUrl = "https://wa.me/" + WHATSAPP;
    var pretty = "+" + WHATSAPP.replace(/^(\d{3})(\d{3})(\d{3})(\d+)$/, "$1 $2 $3 $4");
    document.querySelectorAll(".js-wa").forEach(function (el) {
      el.hidden = false;
      if (el.tagName === "A") el.href = waUrl;
    });
    document.querySelectorAll(".js-wa-link").forEach(function (a) { a.href = waUrl; a.textContent = pretty; });
  }

  /* ---------- Formulário (abre o email) ---------- */
  var form = document.getElementById("form");
  var err = document.getElementById("form-error");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim();
    var org = f.org.value.trim();
    var email = f.email.value.trim();
    var msg = f.message.value.trim();
    if (!name || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.hidden = false; return; }
    err.hidden = true;
    var L = META[current].lines;
    var body = msg + "\n\n— \n" + L[0] + ": " + name + (org ? "\n" + L[1] + ": " + org : "") + "\n" + L[2] + ": " + email;
    var subject = META[current].subject + " — " + name;
    if (window.gtag) window.gtag("event", "contact_email");
    window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  /* ---------- Animação ao aparecer ---------- */
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var targets = document.querySelectorAll(".head, .card, .who__item, .pillars li, .chips, .mv__box, .values > div, .venture, .stat, .split > *, .contact > *");
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
