/* ============================================================
   Crystal Cat ($CCAT) — interactions & wow effects
   ============================================================ */
(function () {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Nav: scrolled state + mobile menu ---------- */
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 24);
    // scroll progress
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    document.getElementById("scrollProgress").style.width = pct + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = Math.min(i * 40, 160) + "ms";
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const runCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      const shown = target % 1 === 0 ? Math.round(val) : val.toFixed(1);
      el.textContent = prefix + shown + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && !reduceMotion) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounter(e.target);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => cio.observe(c));
  } else {
    counters.forEach((c) => {
      c.textContent = (c.dataset.prefix || "") + c.dataset.count + (c.dataset.suffix || "");
    });
  }

  /* ---------- Donut fill animation ---------- */
  const donut = document.getElementById("donut");
  if (donut) {
    const fill = () => {
      const burn = 0.10; // 10% burned
      donut.style.transition = "background 1.4s ease";
      donut.style.background = `conic-gradient(var(--cyan) 0turn ${1 - burn}turn, var(--gold) ${1 - burn}turn 1turn)`;
    };
    if ("IntersectionObserver" in window && !reduceMotion) {
      const dio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              fill();
              dio.unobserve(e.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      dio.observe(donut);
    } else {
      fill();
    }
  }

  /* ---------- Copy contract ---------- */
  const copyBtn = document.getElementById("copyBtn");
  const toast = document.getElementById("toast");
  const addr = document.getElementById("contractAddr").textContent.trim();
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(addr);
      } catch (_) {
        const t = document.createElement("textarea");
        t.value = addr; document.body.appendChild(t); t.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(t);
      }
      copyBtn.classList.add("copied");
      copyBtn.querySelector("span").textContent = "Copied!";
      toast.classList.add("show");
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.querySelector("span").textContent = "Copy";
        toast.classList.remove("show");
      }, 2000);
    });
  }

  /* ---------- Social placeholder guard ---------- */
  document.querySelectorAll("[data-social]").forEach((el) => {
    const href = el.getAttribute("href") || "";
    if (href.includes("PLACEHOLDER")) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const name = el.dataset.social;
        toast.textContent = `${name.charAt(0).toUpperCase() + name.slice(1)} link coming soon — add the real URL in the code.`;
        toast.classList.add("show");
        setTimeout(() => {
          toast.classList.remove("show");
          toast.textContent = "Contract address copied ✓";
        }, 2600);
      });
    }
  });

  /* ---------- 3D tilt on cards ---------- */
  if (!reduceMotion && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-8px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  /* ---------- Cursor glow ---------- */
  const glow = document.querySelector(".cursor-glow");
  if (glow && !reduceMotion && window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      glow.style.opacity = "1";
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
    window.addEventListener("mouseleave", () => (glow.style.opacity = "0"));
  }

  /* ---------- Particle canvas (floating crystals) ---------- */
  const canvas = document.getElementById("particles");
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext("2d");
    let w, h, particles, raf;
    const COUNT = window.innerWidth < 700 ? 26 : 54;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    const make = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.4 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25 - 0.08,
        a: Math.random() * 0.5 + 0.2,
        hue: Math.random() > 0.7 ? 45 : 197, // gold vs cyan
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        const color = p.hue === 45 ? "255,207,74" : "120,220,255";
        ctx.fillStyle = `rgba(${color},${p.a})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${color},${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    resize(); make(); draw();
    window.addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); make(); draw(); });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    });
  }

  /* ---------- Year (footer) ---------- */
})();
