/* =========================================================
   main.js — Portfolio Alejandro Vera
   ========================================================= */

'use strict';

/* ---- Typewriter effect ---- */
(function initTypewriter() {
  const el    = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'Desarrollador Web Junior',
    'Estudiante en Campuslands 🎓',
    'Amante del código limpio',
    'Automatización & APIs 🤖',
    'Fullstack en construcción 🚀',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  let paused    = false;

  const SPEED_TYPE   = 70;
  const SPEED_DELETE = 35;
  const PAUSE_AFTER  = 2000;
  const PAUSE_BEFORE = 400;

  function tick() {
    if (paused) return;

    const current = phrases[phraseIdx];

    if (deleting) {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        paused    = true;
        setTimeout(() => { paused = false; loop(); }, PAUSE_BEFORE);
        return;
      }
      setTimeout(tick, SPEED_DELETE);
    } else {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        paused = true;
        setTimeout(() => {
          paused   = false;
          deleting = true;
          loop();
        }, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, SPEED_TYPE);
    }
  }

  function loop() { if (!paused) tick(); }
  loop();
})();


/* ---- Sticky header shadow ---- */
(function initScrollHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
})();


/* ---- Active nav link on scroll ---- */
(function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const links    = document.querySelectorAll('.nav__link[href^="#"]');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
})();


/* ---- Mobile nav toggle ---- */
(function initMobileNav() {
  const toggle  = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if (!toggle || !navList) return;

  function close() {
    navList.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close on nav link click
  navList.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', close);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navList.contains(e.target)) close();
  });
})();


/* ---- Scroll reveal ---- */
(function initScrollReveal() {
  const els = document.querySelectorAll('[data-aos]');
  if (!els.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
    observer.observe(el);
  });
})();


/* ---- Contact form (demo — sin backend) ---- */
(function initContactForm() {
  const form     = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    feedback.className = 'form-feedback';
    feedback.textContent = '';

    if (!name || !email || !message) {
      feedback.textContent = 'Por favor completa todos los campos.';
      feedback.classList.add('error');
      return;
    }

    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email)) {
      feedback.textContent = 'Ingresa un email válido.';
      feedback.classList.add('error');
      return;
    }

    // Simulated async send
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Enviando…';

    await new Promise(r => setTimeout(r, 1400));

    submitBtn.disabled    = false;
    submitBtn.textContent = 'Enviar mensaje →';
    form.reset();
    feedback.textContent = '✅ ¡Mensaje enviado! Te respondo pronto.';
    feedback.classList.add('success');

    setTimeout(() => { feedback.textContent = ''; }, 6000);
  });
})();