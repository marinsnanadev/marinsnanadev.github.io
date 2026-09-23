document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle && navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

// close menu on navigation (mobile)
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle && navToggle.setAttribute('aria-expanded', false);
}));

// destaca o link ativo do menu conforme a seção visível
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('[data-nav]');

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -50% 0px' });

  sections.forEach(section => navObserver.observe(section));
}

// reveal animation
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

