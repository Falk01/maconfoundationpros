// Nav toggle
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// FAQ accordion
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-q').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });

  // Open clicked if it was closed
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}

// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.12)';
  } else {
    nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
  }
});

// Form submit
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-form');
  btn.textContent = '✓ Request Received — We\'ll Call You Shortly';
  btn.style.background = '#27ae60';
  btn.disabled = true;
}

// Animate numbers on scroll (counters if added later)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.sign-card, .service-card, .why-card, .process-step, .area-card').forEach(el => {
  observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = document.getElementById('nav').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
      // Close mobile nav
      document.getElementById('navLinks').classList.remove('open');
    }
  });
});
