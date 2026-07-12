(() => {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Content data — services, process, portfolio, socials               */
  /* Swap the PORTFOLIO array with real client channels when ready.     */
  /* ------------------------------------------------------------------ */

  const ICONS = {
    edit: '<path d="M12 20h9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" stroke-width="1.7"/><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" stroke-width="1.7"/><path d="M21 16l-5.5-5.5L6 20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" stroke-width="1.7"/><path d="M10.5 9.3v5.4l4.8-2.7-4.8-2.7z" fill="currentColor"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.7"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/>',
    strategy: '<path d="M3 3v16a2 2 0 002 2h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 15l4-5 3 3 5-7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2.5" stroke="currentColor" stroke-width="1.7"/><path d="M3 9.5h18M8 3v3.2M16 3v3.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>',
    search: '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.7"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    users: '<path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="7" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    tiktok: '<path d="M15.5 3v9.6a3.4 3.4 0 11-3.4-3.4M15.5 3a5 5 0 005 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    twitch: '<path d="M5 3h16v11l-4.5 4.5H12l-3 3v-3H5V3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12.5 7.5v4M16.5 7.5v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.7"/><path d="M7.5 10.5v6M7.5 7.7v.01M11.5 16.5v-3.4a2.1 2.1 0 014.2 0v3.4M11.5 10.5v6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    play: '<path d="M8 5v14l11-7-11-7z" fill="currentColor"/>',
  };

  const svg = (key, size = 24) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">${ICONS[key]}</svg>`;

  const SERVICES = [
    { icon: "edit", title: "Video Editing", text: "Cinematic, retention-optimized edits that keep viewers watching until the very last second." },
    { icon: "image", title: "Thumbnail Design", text: "Scroll-stopping thumbnails engineered around click psychology and platform trends." },
    { icon: "youtube", title: "YouTube Channel Management", text: "End-to-end channel operations — uploads, scheduling, community, and growth tracking." },
    { icon: "instagram", title: "Instagram Account Management", text: "Consistent, on-brand posting and engagement that turns followers into a loyal audience." },
    { icon: "strategy", title: "Social Media Strategy", text: "Data-backed content strategy built around your niche, audience, and growth goals." },
    { icon: "calendar", title: "Content Planning", text: "Structured content calendars that keep production consistent and never leave you guessing." },
    { icon: "bolt", title: "Short-Form Content", text: "Fast-paced, trend-aware Reels, Shorts &amp; TikToks built for maximum shareability." },
    { icon: "search", title: "YouTube SEO", text: "Keyword-optimized titles, descriptions, and tags that get your videos discovered and ranked." },
    { icon: "users", title: "Influencer Management", text: "Full-service management for influencers — from brand deals to content oversight." },
  ];

  const PROCESS = [
    { title: "Discovery Call", text: "We learn your brand, audience, and goals to build a custom growth roadmap." },
    { title: "Strategy & Planning", text: "Our team maps out a content calendar and platform strategy tailored to you." },
    { title: "Content Production", text: "Editors, designers, and strategists execute — video, thumbnails, captions, everything." },
    { title: "Growth & Reporting", text: "We track performance, refine the strategy, and report results with full transparency." },
  ];

  // TODO — replace with real client channel names, niches, subscriber counts and URLs.
  const PORTFOLIO = [
    { name: "Nova Tech Reviews", niche: "Tech & Gadgets", subs: "1.2M", grad: "linear-gradient(150deg,#0d3b2c,#062a20)", url: "#" },
    { name: "Pulse Fitness", niche: "Health & Fitness", subs: "850K", grad: "linear-gradient(150deg,#123f2e,#07160f)", url: "#" },
    { name: "Wander & Co.", niche: "Travel Vlogging", subs: "640K", grad: "linear-gradient(150deg,#0f3327,#081d16)", url: "#" },
    { name: "ByteSize Gaming", niche: "Gaming Shorts", subs: "2.4M", grad: "linear-gradient(150deg,#0a4534,#051f18)", url: "#" },
    { name: "Glow Beauty Lab", niche: "Beauty & Lifestyle", subs: "430K", grad: "linear-gradient(150deg,#123829,#071c15)", url: "#" },
    { name: "The Finance Edge", niche: "Finance & Business", subs: "310K", grad: "linear-gradient(150deg,#0d3d2e,#062119)", url: "#" },
    { name: "Studio Eats", niche: "Food & Cooking", subs: "980K", grad: "linear-gradient(150deg,#114030,#081f18)", url: "#" },
    { name: "Momentum Music", niche: "Music & Entertainment", subs: "1.7M", grad: "linear-gradient(150deg,#0c3a2c,#051e17)", url: "#" },
  ];

  const PLATFORMS = ["youtube", "instagram", "tiktok", "twitch", "linkedin"];
  const PLATFORM_LABELS = { youtube: "YouTube", instagram: "Instagram", tiktok: "TikTok", twitch: "Twitch", linkedin: "LinkedIn" };
  const SOCIAL_LINKS = [
    { key: "youtube", url: "#" },
    { key: "instagram", url: "#" },
    { key: "tiktok", url: "#" },
    { key: "linkedin", url: "#" },
  ];

  /* ------------------------------------------------------------------ */
  /* Render                                                              */
  /* ------------------------------------------------------------------ */

  function renderServices() {
    const grid = document.getElementById("servicesGrid");
    grid.innerHTML = SERVICES.map((s, i) => `
      <div class="service-card reveal" data-reveal data-reveal-delay="${(i % 3) + 1}">
        <span class="service-num">0${i + 1}</span>
        <div class="service-icon">${svg(s.icon, 26)}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </div>
    `).join("");
  }

  function renderProcess() {
    const grid = document.getElementById("processGrid");
    grid.innerHTML = PROCESS.map((s, i) => `
      <div class="process-step reveal" data-reveal data-reveal-delay="${i + 1}">
        <div class="process-step-num">0${i + 1}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        ${i < PROCESS.length - 1 ? '<div class="process-connector"></div>' : ""}
      </div>
    `).join("");
  }

  function renderPortfolio() {
    const grid = document.getElementById("portfolioGrid");
    grid.innerHTML = PORTFOLIO.map((p, i) => `
      <a class="portfolio-card reveal" data-reveal data-reveal-delay="${(i % 4) + 1}" href="${p.url}" target="_blank" rel="noopener">
        <div class="portfolio-thumb" style="--thumb-grad:${p.grad}; background:${p.grad};"></div>
        <span class="portfolio-tag">Case Study 0${i + 1}</span>
        <span class="portfolio-play">${svg("play", 16)}</span>
        <div class="portfolio-body">
          <h3>${p.name}</h3>
          <div class="portfolio-meta">
            <span>${p.niche}</span><span class="dot"></span><span class="subs">${p.subs} Subs</span>
          </div>
        </div>
      </a>
    `).join("");
  }

  function renderMarquee() {
    const track = document.getElementById("marqueeTrack");
    const items = PLATFORMS.map(
      (p) => `<div class="marquee-item">${svg(p, 22)}<span>${PLATFORM_LABELS[p]}</span></div>`
    ).join("");
    track.innerHTML = items + items; // duplicate for seamless loop
  }

  function renderSocials() {
    const markup = SOCIAL_LINKS.map(
      (s) => `<a class="social-link" href="${s.url}" target="_blank" rel="noopener" aria-label="${PLATFORM_LABELS[s.key]}">${svg(s.key, 18)}</a>`
    ).join("");
    document.getElementById("socialRow").innerHTML = markup;
    document.getElementById("footerSocialRow").innerHTML = markup;
  }

  /* ------------------------------------------------------------------ */
  /* Preloader                                                           */
  /* ------------------------------------------------------------------ */

  function initPreloader() {
    const pre = document.getElementById("preloader");
    window.addEventListener("load", () => {
      setTimeout(() => pre.classList.add("is-done"), 500);
    });
    // Fallback in case load event already fired / is slow
    setTimeout(() => pre.classList.add("is-done"), 2200);
  }

  /* ------------------------------------------------------------------ */
  /* Navbar + mobile menu                                                */
  /* ------------------------------------------------------------------ */

  function initNav() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    toggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("is-open");
      toggle.classList.toggle("is-active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        toggle.classList.remove("is-active");
        document.body.style.overflow = "";
      })
    );
  }

  /* ------------------------------------------------------------------ */
  /* Scroll reveal                                                       */
  /* ------------------------------------------------------------------ */

  function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* Animated counters                                                   */
  /* ------------------------------------------------------------------ */

  function initCounters() {
    const nums = document.querySelectorAll(".stat-num");
    const animate = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    nums.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* Custom cursor (desktop / fine-pointer only)                         */
  /* ------------------------------------------------------------------ */

  function initCursor() {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) {
      document.body.classList.add("no-cursor");
      return;
    }
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e) => {
      dotX = e.clientX; dotY = e.clientY;
    });

    const loop = () => {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    const hoverables = "a, button, input, textarea, select, .service-card, .portfolio-card";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverables)) ring.classList.add("is-active");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverables)) ring.classList.remove("is-active");
    });
  }

  /* ------------------------------------------------------------------ */
  /* Tilt effect for service cards                                       */
  /* ------------------------------------------------------------------ */

  function initTilt() {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    document.addEventListener("mousemove", (e) => {
      const card = e.target.closest(".service-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -5;
      const rotateY = ((x - cx) / cx) * 5;
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
    });
    document.addEventListener("mouseout", (e) => {
      const card = e.target.closest(".service-card");
      if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = "";
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Contact form (front-end only)                                       */
  /* Wire this up to a form backend (Formspree, etc.) before going live. */
  /* ------------------------------------------------------------------ */

  function initForm() {
    const form = document.getElementById("contactForm");
    const submitBtn = form.querySelector(".form-submit");
    const success = document.getElementById("formSuccess");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      submitBtn.classList.add("is-loading");
      success.classList.remove("is-visible");

      setTimeout(() => {
        submitBtn.classList.remove("is-loading");
        success.classList.add("is-visible");
        form.reset();
      }, 1200);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Misc                                                                */
  /* ------------------------------------------------------------------ */

  function initYear() {
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                */
  /* ------------------------------------------------------------------ */

  document.addEventListener("DOMContentLoaded", () => {
    renderServices();
    renderProcess();
    renderPortfolio();
    renderMarquee();
    renderSocials();
    initYear();

    initPreloader();
    initNav();
    initReveal();
    initCounters();
    initCursor();
    initTilt();
    initForm();
  });
})();
