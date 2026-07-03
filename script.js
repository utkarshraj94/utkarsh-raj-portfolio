document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile menu
  const toggle = document.getElementById('navToggle');
  const navRight = document.querySelector('.nav-right');
  toggle.addEventListener('click', () => {
    navRight.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a, .nav-social a').forEach(a => {
    a.addEventListener('click', () => {
      navRight.classList.remove('open');
      toggle.classList.remove('open');
    });
  });

  // Scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll(
    '.about-card, .proj-card, .exp-body, .cert-row, .contact-card, .edu-card, .skill-group'
  ).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    obs.observe(el);
  });

  // Active nav highlight
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${cur}` ? 'var(--blue-l)' : '';
    });
  }, { passive: true });
});
