(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const progress = document.querySelector('[data-progress]');
  const art = document.querySelector('[data-hero-art]');
  const plate = art?.querySelector('.plate');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.classList.remove('is-open'); nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false');
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.classList.toggle('is-open', !open); nav.classList.toggle('is-open', !open); toggle.setAttribute('aria-expanded', String(!open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  const updateScroll = () => {
    const y = scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 18);
    if (progress) {
      const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      progress.style.transform = `scaleX(${Math.min(1, y / max)})`;
    }
  };
  updateScroll(); addEventListener('scroll', updateScroll, {passive:true});

  const reveals = [...document.querySelectorAll('.reveal')];
  if (!reducedMotion && 'IntersectionObserver' in window) {
    root.classList.add('motion-ready');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } });
    }, {threshold:.1, rootMargin:'0px 0px -4% 0px'});
    reveals.forEach(el => observer.observe(el));
    requestAnimationFrame(() => reveals.forEach(el => {
      const r = el.getBoundingClientRect(); if (r.top < innerHeight * .95 && r.bottom > 0) el.classList.add('is-visible');
    }));
    setTimeout(() => reveals.forEach(el => el.classList.add('is-visible')), 1600);
  } else reveals.forEach(el => el.classList.add('is-visible'));

  if (art && plate && finePointer && !reducedMotion) {
    art.addEventListener('pointermove', e => {
      const r = art.getBoundingClientRect(); const x = (e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5;
      plate.style.transform = `rotateX(${55-y*5}deg) rotateZ(${-7+x*5}deg) translate3d(${x*5}px,${y*5}px,0)`;
    });
    art.addEventListener('pointerleave', () => { plate.style.transform=''; });
  }
})();
