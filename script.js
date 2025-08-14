// ===== Mobile Navigation Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1 && document.querySelector(targetId)) {
      e.preventDefault();

      const yOffset = -66; // Sticky header offset
      const targetElement = document.querySelector(targetId);
      const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: yPosition, behavior: 'smooth' });

      // Close mobile nav after clicking link
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ===== Reveal on Scroll Animation =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Only reveal once
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Fade-up animation for gallery cards =====
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== Contact Button (Gmail Direct Link + Fallback) =====
const contactBtn = document.getElementById('contactEmailBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', e => {
    e.preventDefault();
    const gmailUrl = "https://mail.google.com/mail/?view=cm&to=sameer0555singh@gmail.com";
    const mailtoUrl = "mailto:sameer0555singh@gmail.com";

    if (navigator.onLine) {
      window.open(gmailUrl, '_blank');
    } else {
      window.location.href = mailtoUrl;
    }
  });
}

// ===== Dynamic Year in Footer =====
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
